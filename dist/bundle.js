var app = (function () {
    'use strict';

    function noop() { }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_data(text, data) {
        data = '' + data;
        if (text.data !== data)
            text.data = data;
    }
    function set_input_value(input, value) {
        if (value != null || input.value) {
            input.value = value;
        }
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }
    function createEventDispatcher() {
        const component = get_current_component();
        return (type, detail) => {
            const callbacks = component.$$.callbacks[type];
            if (callbacks) {
                // TODO are there situations where events could be dispatched
                // in a server (non-DOM) environment?
                const event = custom_event(type, detail);
                callbacks.slice().forEach(fn => {
                    fn.call(component, event);
                });
            }
        };
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if ($$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    let SvelteElement;
    if (typeof HTMLElement === 'function') {
        SvelteElement = class extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
            }
            connectedCallback() {
                // @ts-ignore todo: improve typings
                for (const key in this.$$.slotted) {
                    // @ts-ignore todo: improve typings
                    this.appendChild(this.$$.slotted[key]);
                }
            }
            attributeChangedCallback(attr, _oldValue, newValue) {
                this[attr] = newValue;
            }
            $destroy() {
                destroy_component(this, 1);
                this.$destroy = noop;
            }
            $on(type, callback) {
                // TODO should this delegate to addEventListener?
                const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
                callbacks.push(callback);
                return () => {
                    const index = callbacks.indexOf(callback);
                    if (index !== -1)
                        callbacks.splice(index, 1);
                };
            }
            $set() {
                // overridden by instance, if it has props
            }
        };
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }

    /* src/components/NavBar.svelte generated by Svelte v3.22.2 */

    function create_fragment(ctx) {
    	let div;
    	let t;

    	return {
    		c() {
    			div = element("div");
    			t = text(/*text*/ ctx[0]);
    			attr(div, "class", "navbar bg-primary");
    		},
    		m(target, anchor) {
    			insert(target, div, anchor);
    			append(div, t);
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*text*/ 1) set_data(t, /*text*/ ctx[0]);
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(div);
    		}
    	};
    }

    function instance($$self, $$props, $$invalidate) {
    	let { text = "Default Text" } = $$props;

    	$$self.$set = $$props => {
    		if ("text" in $$props) $$invalidate(0, text = $$props.text);
    	};

    	return [text];
    }

    class NavBar extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance, create_fragment, safe_not_equal, { text: 0 });
    	}
    }

    /* src/components/Player.svelte generated by Svelte v3.22.2 */

    function create_else_block(ctx) {
    	let t;

    	return {
    		c() {
    			t = text("+");
    		},
    		m(target, anchor) {
    			insert(target, t, anchor);
    		},
    		d(detaching) {
    			if (detaching) detach(t);
    		}
    	};
    }

    // (54:4) {#if showControls}
    function create_if_block_1(ctx) {
    	let t;

    	return {
    		c() {
    			t = text("-");
    		},
    		m(target, anchor) {
    			insert(target, t, anchor);
    		},
    		d(detaching) {
    			if (detaching) detach(t);
    		}
    	};
    }

    // (59:0) {#if showControls}
    function create_if_block(ctx) {
    	let button0;
    	let t1;
    	let button1;
    	let t3;
    	let input;
    	let dispose;

    	return {
    		c() {
    			button0 = element("button");
    			button0.textContent = "+";
    			t1 = space();
    			button1 = element("button");
    			button1.textContent = "-";
    			t3 = space();
    			input = element("input");
    			attr(button0, "class", "btn");
    			attr(button1, "class", "btn btn-dark");
    			attr(input, "type", "text");
    		},
    		m(target, anchor, remount) {
    			insert(target, button0, anchor);
    			insert(target, t1, anchor);
    			insert(target, button1, anchor);
    			insert(target, t3, anchor);
    			insert(target, input, anchor);
    			set_input_value(input, /*score*/ ctx[0]);
    			if (remount) run_all(dispose);

    			dispose = [
    				listen(button0, "click", /*addPoint*/ ctx[3]),
    				listen(button1, "click", /*removePoint*/ ctx[4]),
    				listen(input, "input", /*input_input_handler*/ ctx[8])
    			];
    		},
    		p(ctx, dirty) {
    			if (dirty & /*score*/ 1 && input.value !== /*score*/ ctx[0]) {
    				set_input_value(input, /*score*/ ctx[0]);
    			}
    		},
    		d(detaching) {
    			if (detaching) detach(button0);
    			if (detaching) detach(t1);
    			if (detaching) detach(button1);
    			if (detaching) detach(t3);
    			if (detaching) detach(input);
    			run_all(dispose);
    		}
    	};
    }

    function create_fragment$1(ctx) {
    	let h1;
    	let t0;
    	let t1;
    	let button0;
    	let t2;
    	let button1;
    	let t4;
    	let h3;
    	let t5;
    	let t6;
    	let t7;
    	let if_block1_anchor;
    	let dispose;

    	function select_block_type(ctx, dirty) {
    		if (/*showControls*/ ctx[1]) return create_if_block_1;
    		return create_else_block;
    	}

    	let current_block_type = select_block_type(ctx);
    	let if_block0 = current_block_type(ctx);
    	let if_block1 = /*showControls*/ ctx[1] && create_if_block(ctx);

    	return {
    		c() {
    			h1 = element("h1");
    			t0 = text(/*name*/ ctx[2]);
    			t1 = space();
    			button0 = element("button");
    			if_block0.c();
    			t2 = space();
    			button1 = element("button");
    			button1.textContent = "x";
    			t4 = space();
    			h3 = element("h3");
    			t5 = text("Score: ");
    			t6 = text(/*score*/ ctx[0]);
    			t7 = space();
    			if (if_block1) if_block1.c();
    			if_block1_anchor = empty();
    			attr(button0, "class", "btn btn-sm");
    			attr(button1, "class", "btn btn-danger btn-sm");
    		},
    		m(target, anchor, remount) {
    			insert(target, h1, anchor);
    			append(h1, t0);
    			append(h1, t1);
    			append(h1, button0);
    			if_block0.m(button0, null);
    			append(h1, t2);
    			append(h1, button1);
    			insert(target, t4, anchor);
    			insert(target, h3, anchor);
    			append(h3, t5);
    			append(h3, t6);
    			insert(target, t7, anchor);
    			if (if_block1) if_block1.m(target, anchor);
    			insert(target, if_block1_anchor, anchor);
    			if (remount) run_all(dispose);

    			dispose = [
    				listen(button0, "click", /*toggleControls*/ ctx[5]),
    				listen(button1, "click", /*onRemove*/ ctx[6])
    			];
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*name*/ 4) set_data(t0, /*name*/ ctx[2]);

    			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
    				if_block0.d(1);
    				if_block0 = current_block_type(ctx);

    				if (if_block0) {
    					if_block0.c();
    					if_block0.m(button0, null);
    				}
    			}

    			if (dirty & /*score*/ 1) set_data(t6, /*score*/ ctx[0]);

    			if (/*showControls*/ ctx[1]) {
    				if (if_block1) {
    					if_block1.p(ctx, dirty);
    				} else {
    					if_block1 = create_if_block(ctx);
    					if_block1.c();
    					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
    				}
    			} else if (if_block1) {
    				if_block1.d(1);
    				if_block1 = null;
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(h1);
    			if_block0.d();
    			if (detaching) detach(t4);
    			if (detaching) detach(h3);
    			if (detaching) detach(t7);
    			if (if_block1) if_block1.d(detaching);
    			if (detaching) detach(if_block1_anchor);
    			run_all(dispose);
    		}
    	};
    }

    function instance$1($$self, $$props, $$invalidate) {
    	const dispatch = createEventDispatcher();
    	let { name } = $$props;
    	let { score } = $$props;
    	let { showControls = false } = $$props;

    	/**
     * Adds a single point to the score
     */
    	const addPoint = () => $$invalidate(0, score += 1);

    	/**
     * Deducts a single point from the score
     */
    	const removePoint = () => $$invalidate(0, score -= 1);

    	/**
     * Toggles the control section
     */
    	const toggleControls = () => $$invalidate(1, showControls = !showControls);

    	/**
     * Dispatches an event against this component
     */
    	const onRemove = () => dispatch("removeplayer", name);

    	function input_input_handler() {
    		score = this.value;
    		$$invalidate(0, score);
    	}

    	$$self.$set = $$props => {
    		if ("name" in $$props) $$invalidate(2, name = $$props.name);
    		if ("score" in $$props) $$invalidate(0, score = $$props.score);
    		if ("showControls" in $$props) $$invalidate(1, showControls = $$props.showControls);
    	};

    	return [
    		score,
    		showControls,
    		name,
    		addPoint,
    		removePoint,
    		toggleControls,
    		onRemove,
    		dispatch,
    		input_input_handler
    	];
    }

    class Player extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, { name: 2, score: 0, showControls: 1 });
    	}
    }

    /* src/components/AddPlayer.svelte generated by Svelte v3.22.2 */

    function create_fragment$2(ctx) {
    	let form;
    	let input0;
    	let t0;
    	let input1;
    	let t1;
    	let button;
    	let dispose;

    	return {
    		c() {
    			form = element("form");
    			input0 = element("input");
    			t0 = space();
    			input1 = element("input");
    			t1 = space();
    			button = element("button");
    			button.textContent = "Add Player";
    			attr(input0, "type", "text");
    			attr(input0, "placeholder", "Name");
    			attr(input1, "type", "text");
    			attr(input1, "placeholder", "Score");
    			attr(button, "type", "submit");
    			attr(form, "class", "grid-3");
    		},
    		m(target, anchor, remount) {
    			insert(target, form, anchor);
    			append(form, input0);
    			set_input_value(input0, /*player*/ ctx[0].name);
    			append(form, t0);
    			append(form, input1);
    			set_input_value(input1, /*player*/ ctx[0].score);
    			append(form, t1);
    			append(form, button);
    			if (remount) run_all(dispose);

    			dispose = [
    				listen(input0, "input", /*input0_input_handler*/ ctx[4]),
    				listen(input1, "input", /*input1_input_handler*/ ctx[5]),
    				listen(form, "submit", /*onSubmit*/ ctx[1])
    			];
    		},
    		p(ctx, [dirty]) {
    			if (dirty & /*player*/ 1 && input0.value !== /*player*/ ctx[0].name) {
    				set_input_value(input0, /*player*/ ctx[0].name);
    			}

    			if (dirty & /*player*/ 1 && input1.value !== /*player*/ ctx[0].score) {
    				set_input_value(input1, /*player*/ ctx[0].score);
    			}
    		},
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(form);
    			run_all(dispose);
    		}
    	};
    }

    function instance$2($$self, $$props, $$invalidate) {
    	const dispatch = createEventDispatcher();

    	/**
     * Default player model
     *
     * @type {object}
     */
    	const DEFAULT_PLAYER_SCHEME = { name: "", score: 0 };

    	/**
     * Reference to the player instance being created.
     * It's using spread operator to clone the default model
     *
     * @type {object}
     */
    	let player = { ...DEFAULT_PLAYER_SCHEME };

    	/**
     * Dispatches the newly created player instance
     *
     * @param {object} e
     */
    	const onSubmit = e => {
    		e.preventDefault();
    		dispatch("addplayer", player);
    		$$invalidate(0, player = { ...DEFAULT_PLAYER_SCHEME });
    	};

    	function input0_input_handler() {
    		player.name = this.value;
    		$$invalidate(0, player);
    	}

    	function input1_input_handler() {
    		player.score = this.value;
    		$$invalidate(0, player);
    	}

    	return [
    		player,
    		onSubmit,
    		dispatch,
    		DEFAULT_PLAYER_SCHEME,
    		input0_input_handler,
    		input1_input_handler
    	];
    }

    class AddPlayer extends SvelteComponent {
    	constructor(options) {
    		super();
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
    	}
    }

    /* src/main.svelte generated by Svelte v3.22.2 */

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[3] = list[i];
    	return child_ctx;
    }

    // (69:2) {:else}
    function create_else_block$1(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value = /*players*/ ctx[0];
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	return {
    		c() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			if (dirty & /*players, removePlayer*/ 5) {
    				each_value = /*players*/ ctx[0];
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach(each_1_anchor);
    		}
    	};
    }

    // (67:2) {#if players.length === 0}
    function create_if_block$1(ctx) {
    	let p;

    	return {
    		c() {
    			p = element("p");
    			p.textContent = "No players";
    		},
    		m(target, anchor) {
    			insert(target, p, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d(detaching) {
    			if (detaching) detach(p);
    		}
    	};
    }

    // (70:4) {#each players as player}
    function create_each_block(ctx) {
    	let current;

    	const player = new Player({
    			props: {
    				name: /*player*/ ctx[3].name,
    				score: /*player*/ ctx[3].score
    			}
    		});

    	player.$on("removeplayer", /*removePlayer*/ ctx[2]);

    	return {
    		c() {
    			create_component(player.$$.fragment);
    		},
    		m(target, anchor) {
    			mount_component(player, target, anchor);
    			current = true;
    		},
    		p(ctx, dirty) {
    			const player_changes = {};
    			if (dirty & /*players*/ 1) player_changes.name = /*player*/ ctx[3].name;
    			if (dirty & /*players*/ 1) player_changes.score = /*player*/ ctx[3].score;
    			player.$set(player_changes);
    		},
    		i(local) {
    			if (current) return;
    			transition_in(player.$$.fragment, local);
    			current = true;
    		},
    		o(local) {
    			transition_out(player.$$.fragment, local);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(player, detaching);
    		}
    	};
    }

    function create_fragment$3(ctx) {
    	let t0;
    	let div;
    	let t1;
    	let current_block_type_index;
    	let if_block;
    	let current;

    	const navbar = new NavBar({
    			props: { text: "This is my svelte custom element" }
    		});

    	const addplayer = new AddPlayer({});
    	addplayer.$on("addplayer", /*addPlayer*/ ctx[1]);
    	const if_block_creators = [create_if_block$1, create_else_block$1];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*players*/ ctx[0].length === 0) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	return {
    		c() {
    			create_component(navbar.$$.fragment);
    			t0 = space();
    			div = element("div");
    			create_component(addplayer.$$.fragment);
    			t1 = space();
    			if_block.c();
    			this.c = noop;
    			attr(div, "class", "container");
    		},
    		m(target, anchor) {
    			mount_component(navbar, target, anchor);
    			insert(target, t0, anchor);
    			insert(target, div, anchor);
    			mount_component(addplayer, div, null);
    			append(div, t1);
    			if_blocks[current_block_type_index].m(div, null);
    			current = true;
    		},
    		p(ctx, [dirty]) {
    			let previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);

    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(ctx, dirty);
    			} else {
    				group_outros();

    				transition_out(if_blocks[previous_block_index], 1, 1, () => {
    					if_blocks[previous_block_index] = null;
    				});

    				check_outros();
    				if_block = if_blocks[current_block_type_index];

    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}

    				transition_in(if_block, 1);
    				if_block.m(div, null);
    			}
    		},
    		i(local) {
    			if (current) return;
    			transition_in(navbar.$$.fragment, local);
    			transition_in(addplayer.$$.fragment, local);
    			transition_in(if_block);
    			current = true;
    		},
    		o(local) {
    			transition_out(navbar.$$.fragment, local);
    			transition_out(addplayer.$$.fragment, local);
    			transition_out(if_block);
    			current = false;
    		},
    		d(detaching) {
    			destroy_component(navbar, detaching);
    			if (detaching) detach(t0);
    			if (detaching) detach(div);
    			destroy_component(addplayer);
    			if_blocks[current_block_type_index].d();
    		}
    	};
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { players = [] } = $$props;

    	/**
     * Adds a new player to the player collection.
     *
     * @param {object} evt - { detail: object }
     */
    	const addPlayer = evt => {
    		const player = evt.detail;
    		$$invalidate(0, players = [...players, player]);
    	};

    	/**
     * Deletes the given player to the player collection.
     *
     * @param {object} evt - { detail: string }
     */
    	const removePlayer = evt => {
    		$$invalidate(0, players = players.filter(player => player.name !== evt.detail));
    	};

    	/**
     * Lifecycle function that is invoked when the custom element
     * is attached to the DOM.
     */
    	onMount(e => {
    		// we manually extend the shadow DOM to import the theme-specific CSS file
    		const host = get_current_component();

    		const cssThemeURI = host.getAttribute("cssThemeURI");
    		if (!cssThemeURI) return;

    		// theme styles must land on the top of the shadow root in order to
    		// provide a natural way to overwrite them
    		const style = document.createElement("style");

    		style.textContent = `@import "${cssThemeURI}";`;
    		host.shadowRoot.insertBefore(style, host.shadowRoot.firstChild);
    	});

    	$$self.$set = $$props => {
    		if ("players" in $$props) $$invalidate(0, players = $$props.players);
    	};

    	return [players, addPlayer, removePlayer];
    }

    class Main extends SvelteElement {
    	constructor(options) {
    		super();
    		
    		init(this, { target: this.shadowRoot }, instance$3, create_fragment$3, safe_not_equal, { players: 0 });

    		if (options) {
    			if (options.target) {
    				insert(options.target, this, options.anchor);
    			}

    			if (options.props) {
    				this.$set(options.props);
    				flush();
    			}
    		}
    	}

    	static get observedAttributes() {
    		return ["players"];
    	}

    	get players() {
    		return this.$$.ctx[0];
    	}

    	set players(players) {
    		this.$set({ players });
    		flush();
    	}
    }

    customElements.define("pty-scoreboard", Main);

    return Main;

}());
//# sourceMappingURL=bundle.js.map
