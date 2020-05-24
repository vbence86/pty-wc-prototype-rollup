var App = (function () {
    'use strict';

    (function() {
        const env = {};
        try {
            if (process) {
                process.env = Object.assign({}, process.env);
                Object.assign(process.env, env);
                return;
            }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env:env };
    })();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();

      return function () {
        var Super = _getPrototypeOf(Derived),
            result;

        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;

          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }

        return _possibleConstructorReturn(this, result);
      };
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function noop() {}

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
      return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
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
        if (iterations[i]) iterations[i].d(detaching);
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
      if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
    }

    function children(element) {
      return Array.from(element.childNodes);
    }

    function set_data(text, data) {
      data = '' + data;
      if (text.data !== data) text.data = data;
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
      if (!current_component) throw new Error(`Function called outside component initialization`);
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
      if (flushing) return;
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

        while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
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
        if (outroing.has(block)) return;
        outroing.add(block);
        outros.c.push(() => {
          outroing.delete(block);

          if (callback) {
            if (detach) block.d(1);
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
      const {
        fragment,
        on_mount,
        on_destroy,
        after_update
      } = component.$$;
      fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);

        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
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
        $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
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

      component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
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
      $$.ctx = instance ? instance(component, prop_values, (i, ret, ...rest) => {
        const value = rest.length ? rest[0] : ret;

        if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
          if ($$.bound[i]) $$.bound[i](value);
          if (ready) make_dirty(component, i);
        }

        return ret;
      }) : [];
      $$.update();
      ready = true;
      run_all($$.before_update); // `false` as a special case of no DOM component

      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

      if (options.target) {
        if (options.hydrate) {
          const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

          $$.fragment && $$.fragment.l(nodes);
          nodes.forEach(detach);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          $$.fragment && $$.fragment.c();
        }

        if (options.intro) transition_in(component.$$.fragment);
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
          this.attachShadow({
            mode: 'open'
          });
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
          const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
          callbacks.push(callback);
          return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1) callbacks.splice(index, 1);
          };
        }

        $set() {// overridden by instance, if it has props
        }

      };
    }

    class SvelteComponent {
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }

      $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }

      $set() {// overridden by instance, if it has props
      }

    }

    function add_css() {
      var style = element("style");
      style.id = "svelte-o7kk6x-style";
      style.textContent = "div.svelte-o7kk6x{border-color:1px solid gray;background-color:#aaa}";
      append(document.head, style);
    }

    function create_fragment(ctx) {
      var div;
      var t;
      return {
        c: function c() {
          div = element("div");
          t = text(
          /*text*/
          ctx[0]);
          attr(div, "class", "navbar bg-primary svelte-o7kk6x");
        },
        m: function m(target, anchor) {
          insert(target, div, anchor);
          append(div, t);
        },
        p: function p(ctx, _ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              dirty = _ref2[0];

          if (dirty &
          /*text*/
          1) set_data(t,
          /*text*/
          ctx[0]);
        },
        i: noop,
        o: noop,
        d: function d(detaching) {
          if (detaching) detach(div);
        }
      };
    }

    function instance($$self, $$props, $$invalidate) {
      var _$$props$text = $$props.text,
          text = _$$props$text === void 0 ? "Default Text" : _$$props$text;

      $$self.$set = function ($$props) {
        if ("text" in $$props) $$invalidate(0, text = $$props.text);
      };

      return [text];
    }

    var NavBar = /*#__PURE__*/function (_SvelteComponent) {
      _inherits(NavBar, _SvelteComponent);

      var _super = _createSuper(NavBar);

      function NavBar(options) {
        var _this;

        _classCallCheck(this, NavBar);

        _this = _super.call(this);
        if (!document.getElementById("svelte-o7kk6x-style")) add_css();
        init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
          text: 0
        });
        return _this;
      }

      return NavBar;
    }(SvelteComponent);

    function add_css$1() {
      var style = element("style");
      style.id = "svelte-dmn4mk-style";
      style.textContent = "h1.svelte-dmn4mk{color:#F00;font-size:2.0rem;white-space:nowrap}h3.svelte-dmn4mk{color:#FFA;font-size:1.2rem}";
      append(document.head, style);
    } // (64:23) {:else}


    function create_else_block(ctx) {
      var t;
      return {
        c: function c() {
          t = text("+");
        },
        m: function m(target, anchor) {
          insert(target, t, anchor);
        },
        d: function d(detaching) {
          if (detaching) detach(t);
        }
      };
    } // (64:4) {#if showControls}


    function create_if_block_1(ctx) {
      var t;
      return {
        c: function c() {
          t = text("-");
        },
        m: function m(target, anchor) {
          insert(target, t, anchor);
        },
        d: function d(detaching) {
          if (detaching) detach(t);
        }
      };
    } // (69:0) {#if showControls}


    function create_if_block(ctx) {
      var button0;
      var t1;
      var button1;
      var t3;
      var input;
      var dispose;
      return {
        c: function c() {
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
        m: function m(target, anchor, remount) {
          insert(target, button0, anchor);
          insert(target, t1, anchor);
          insert(target, button1, anchor);
          insert(target, t3, anchor);
          insert(target, input, anchor);
          set_input_value(input,
          /*score*/
          ctx[0]);
          if (remount) run_all(dispose);
          dispose = [listen(button0, "click",
          /*addPoint*/
          ctx[3]), listen(button1, "click",
          /*removePoint*/
          ctx[4]), listen(input, "input",
          /*input_input_handler*/
          ctx[8])];
        },
        p: function p(ctx, dirty) {
          if (dirty &
          /*score*/
          1 && input.value !==
          /*score*/
          ctx[0]) {
            set_input_value(input,
            /*score*/
            ctx[0]);
          }
        },
        d: function d(detaching) {
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
      var h1;
      var t0;
      var t1;
      var button0;
      var t2;
      var button1;
      var t4;
      var h3;
      var t5;
      var t6;
      var t7;
      var if_block1_anchor;
      var dispose;

      function select_block_type(ctx, dirty) {
        if (
        /*showControls*/
        ctx[1]) return create_if_block_1;
        return create_else_block;
      }

      var current_block_type = select_block_type(ctx);
      var if_block0 = current_block_type(ctx);
      var if_block1 =
      /*showControls*/
      ctx[1] && create_if_block(ctx);
      return {
        c: function c() {
          h1 = element("h1");
          t0 = text(
          /*name*/
          ctx[2]);
          t1 = space();
          button0 = element("button");
          if_block0.c();
          t2 = space();
          button1 = element("button");
          button1.textContent = "x";
          t4 = space();
          h3 = element("h3");
          t5 = text("Score: ");
          t6 = text(
          /*score*/
          ctx[0]);
          t7 = space();
          if (if_block1) if_block1.c();
          if_block1_anchor = empty();
          attr(button0, "class", "btn btn-sm");
          attr(button1, "class", "btn btn-danger btn-sm");
          attr(h1, "class", "svelte-dmn4mk");
          attr(h3, "class", "svelte-dmn4mk");
        },
        m: function m(target, anchor, remount) {
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
          dispose = [listen(button0, "click",
          /*toggleControls*/
          ctx[5]), listen(button1, "click",
          /*onRemove*/
          ctx[6])];
        },
        p: function p(ctx, _ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              dirty = _ref2[0];

          if (dirty &
          /*name*/
          4) set_data(t0,
          /*name*/
          ctx[2]);

          if (current_block_type !== (current_block_type = select_block_type(ctx))) {
            if_block0.d(1);
            if_block0 = current_block_type(ctx);

            if (if_block0) {
              if_block0.c();
              if_block0.m(button0, null);
            }
          }

          if (dirty &
          /*score*/
          1) set_data(t6,
          /*score*/
          ctx[0]);

          if (
          /*showControls*/
          ctx[1]) {
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
        d: function d(detaching) {
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
      var dispatch = createEventDispatcher();
      var name = $$props.name;
      var score = $$props.score;
      var _$$props$showControls = $$props.showControls,
          showControls = _$$props$showControls === void 0 ? false : _$$props$showControls;
      /**
      * Adds a single point to the score
      */

      var addPoint = function addPoint() {
        return $$invalidate(0, score += 1);
      };
      /**
      * Deducts a single point from the score
      */


      var removePoint = function removePoint() {
        return $$invalidate(0, score -= 1);
      };
      /**
      * Toggles the control section
      */


      var toggleControls = function toggleControls() {
        return $$invalidate(1, showControls = !showControls);
      };
      /**
      * Dispatches an event against this component
      */


      var onRemove = function onRemove() {
        return dispatch("removeplayer", name);
      };

      function input_input_handler() {
        score = this.value;
        $$invalidate(0, score);
      }

      $$self.$set = function ($$props) {
        if ("name" in $$props) $$invalidate(2, name = $$props.name);
        if ("score" in $$props) $$invalidate(0, score = $$props.score);
        if ("showControls" in $$props) $$invalidate(1, showControls = $$props.showControls);
      };

      return [score, showControls, name, addPoint, removePoint, toggleControls, onRemove, dispatch, input_input_handler];
    }

    var Player = /*#__PURE__*/function (_SvelteComponent) {
      _inherits(Player, _SvelteComponent);

      var _super = _createSuper(Player);

      function Player(options) {
        var _this;

        _classCallCheck(this, Player);

        _this = _super.call(this);
        if (!document.getElementById("svelte-dmn4mk-style")) add_css$1();
        init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
          name: 2,
          score: 0,
          showControls: 1
        });
        return _this;
      }

      return Player;
    }(SvelteComponent);

    function create_fragment$2(ctx) {
      var form;
      var input0;
      var t0;
      var input1;
      var t1;
      var button;
      var dispose;
      return {
        c: function c() {
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
        m: function m(target, anchor, remount) {
          insert(target, form, anchor);
          append(form, input0);
          set_input_value(input0,
          /*player*/
          ctx[0].name);
          append(form, t0);
          append(form, input1);
          set_input_value(input1,
          /*player*/
          ctx[0].score);
          append(form, t1);
          append(form, button);
          if (remount) run_all(dispose);
          dispose = [listen(input0, "input",
          /*input0_input_handler*/
          ctx[4]), listen(input1, "input",
          /*input1_input_handler*/
          ctx[5]), listen(form, "submit",
          /*onSubmit*/
          ctx[1])];
        },
        p: function p(ctx, _ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              dirty = _ref2[0];

          if (dirty &
          /*player*/
          1 && input0.value !==
          /*player*/
          ctx[0].name) {
            set_input_value(input0,
            /*player*/
            ctx[0].name);
          }

          if (dirty &
          /*player*/
          1 && input1.value !==
          /*player*/
          ctx[0].score) {
            set_input_value(input1,
            /*player*/
            ctx[0].score);
          }
        },
        i: noop,
        o: noop,
        d: function d(detaching) {
          if (detaching) detach(form);
          run_all(dispose);
        }
      };
    }

    function instance$2($$self, $$props, $$invalidate) {
      var dispatch = createEventDispatcher();
      /**
      * Default player model
      *
      * @type {object}
      */

      var DEFAULT_PLAYER_SCHEME = {
        name: "",
        score: 0
      };
      /**
      * Reference to the player instance being created.
      * It's using spread operator to clone the default model
      *
      * @type {object}
      */

      var player = _objectSpread2({}, DEFAULT_PLAYER_SCHEME);
      /**
      * Dispatches the newly created player instance
      *
      * @param {object} e
      */


      var onSubmit = function onSubmit(e) {
        e.preventDefault();
        dispatch("addplayer", player);
        $$invalidate(0, player = _objectSpread2({}, DEFAULT_PLAYER_SCHEME));
      };

      function input0_input_handler() {
        player.name = this.value;
        $$invalidate(0, player);
      }

      function input1_input_handler() {
        player.score = this.value;
        $$invalidate(0, player);
      }

      return [player, onSubmit, dispatch, DEFAULT_PLAYER_SCHEME, input0_input_handler, input1_input_handler];
    }

    var AddPlayer = /*#__PURE__*/function (_SvelteComponent) {
      _inherits(AddPlayer, _SvelteComponent);

      var _super = _createSuper(AddPlayer);

      function AddPlayer(options) {
        var _this;

        _classCallCheck(this, AddPlayer);

        _this = _super.call(this);
        init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
        return _this;
      }

      return AddPlayer;
    }(SvelteComponent);

    /**
     * Lifecycle function that is invoked when the custom element
     * is attached to the DOM.
     *
     * @params {string} propName - property the extract the theme URI from
     */

    var applyTheme = function applyTheme() {
      var propName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'cssThemeURI';
      // we manually extend the shadow DOM to import the theme-specific CSS file
      var host = get_current_component();
      var cssThemeURI = host.getAttribute && host.getAttribute(propName);
      if (!cssThemeURI) return; // theme styles must land on the top of the shadow root in order to
      // provide a natural way to overwrite them

      var link = document.createElement('link');
      link.setAttribute('href', cssThemeURI);
      link.setAttribute('rel', 'stylesheet');
      host.shadowRoot.insertBefore(link, host.shadowRoot.firstChild);
    };

    function get_each_context(ctx, list, i) {
      var child_ctx = ctx.slice();
      child_ctx[4] = list[i];
      return child_ctx;
    } // (64:2) {:else}


    function create_else_block$1(ctx) {
      var each_1_anchor;
      var current;
      var each_value =
      /*players*/
      ctx[0];
      var each_blocks = [];

      for (var i = 0; i < each_value.length; i += 1) {
        each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
      }

      var out = function out(i) {
        return transition_out(each_blocks[i], 1, 1, function () {
          each_blocks[i] = null;
        });
      };

      return {
        c: function c() {
          for (var _i = 0; _i < each_blocks.length; _i += 1) {
            each_blocks[_i].c();
          }

          each_1_anchor = empty();
        },
        m: function m(target, anchor) {
          for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
            each_blocks[_i2].m(target, anchor);
          }

          insert(target, each_1_anchor, anchor);
          current = true;
        },
        p: function p(ctx, dirty) {
          if (dirty &
          /*players, removePlayer*/
          5) {
            each_value =
            /*players*/
            ctx[0];

            var _i3;

            for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
              var child_ctx = get_each_context(ctx, each_value, _i3);

              if (each_blocks[_i3]) {
                each_blocks[_i3].p(child_ctx, dirty);

                transition_in(each_blocks[_i3], 1);
              } else {
                each_blocks[_i3] = create_each_block(child_ctx);

                each_blocks[_i3].c();

                transition_in(each_blocks[_i3], 1);

                each_blocks[_i3].m(each_1_anchor.parentNode, each_1_anchor);
              }
            }

            group_outros();

            for (_i3 = each_value.length; _i3 < each_blocks.length; _i3 += 1) {
              out(_i3);
            }

            check_outros();
          }
        },
        i: function i(local) {
          if (current) return;

          for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
            transition_in(each_blocks[_i4]);
          }

          current = true;
        },
        o: function o(local) {
          each_blocks = each_blocks.filter(Boolean);

          for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
            transition_out(each_blocks[_i5]);
          }

          current = false;
        },
        d: function d(detaching) {
          destroy_each(each_blocks, detaching);
          if (detaching) detach(each_1_anchor);
        }
      };
    } // (62:2) {#if players.length === 0}


    function create_if_block$1(ctx) {
      var p;
      return {
        c: function c() {
          p = element("p");
          p.textContent = "No players";
        },
        m: function m(target, anchor) {
          insert(target, p, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d: function d(detaching) {
          if (detaching) detach(p);
        }
      };
    } // (65:4) {#each players as player}


    function create_each_block(ctx) {
      var current;
      var player = new Player({
        props: {
          name:
          /*player*/
          ctx[4].name,
          score:
          /*player*/
          ctx[4].score
        }
      });
      player.$on("removeplayer",
      /*removePlayer*/
      ctx[2]);
      return {
        c: function c() {
          create_component(player.$$.fragment);
        },
        m: function m(target, anchor) {
          mount_component(player, target, anchor);
          current = true;
        },
        p: function p(ctx, dirty) {
          var player_changes = {};
          if (dirty &
          /*players*/
          1) player_changes.name =
          /*player*/
          ctx[4].name;
          if (dirty &
          /*players*/
          1) player_changes.score =
          /*player*/
          ctx[4].score;
          player.$set(player_changes);
        },
        i: function i(local) {
          if (current) return;
          transition_in(player.$$.fragment, local);
          current = true;
        },
        o: function o(local) {
          transition_out(player.$$.fragment, local);
          current = false;
        },
        d: function d(detaching) {
          destroy_component(player, detaching);
        }
      };
    }

    function create_fragment$3(ctx) {
      var t0;
      var div;
      var t1;
      var current_block_type_index;
      var if_block;
      var current;
      var navbar = new NavBar({
        props: {
          text: "This is my svelte custom element"
        }
      });
      var addplayer = new AddPlayer({});
      addplayer.$on("addplayer",
      /*addPlayer*/
      ctx[1]);
      var if_block_creators = [create_if_block$1, create_else_block$1];
      var if_blocks = [];

      function select_block_type(ctx, dirty) {
        if (
        /*players*/
        ctx[0].length === 0) return 0;
        return 1;
      }

      current_block_type_index = select_block_type(ctx);
      if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
      return {
        c: function c() {
          create_component(navbar.$$.fragment);
          t0 = space();
          div = element("div");
          create_component(addplayer.$$.fragment);
          t1 = space();
          if_block.c();
          this.c = noop;
          attr(div, "class", "container");
        },
        m: function m(target, anchor) {
          mount_component(navbar, target, anchor);
          insert(target, t0, anchor);
          insert(target, div, anchor);
          mount_component(addplayer, div, null);
          append(div, t1);
          if_blocks[current_block_type_index].m(div, null);
          current = true;
        },
        p: function p(ctx, _ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              dirty = _ref2[0];

          var previous_block_index = current_block_type_index;
          current_block_type_index = select_block_type(ctx);

          if (current_block_type_index === previous_block_index) {
            if_blocks[current_block_type_index].p(ctx, dirty);
          } else {
            group_outros();
            transition_out(if_blocks[previous_block_index], 1, 1, function () {
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
        i: function i(local) {
          if (current) return;
          transition_in(navbar.$$.fragment, local);
          transition_in(addplayer.$$.fragment, local);
          transition_in(if_block);
          current = true;
        },
        o: function o(local) {
          transition_out(navbar.$$.fragment, local);
          transition_out(addplayer.$$.fragment, local);
          transition_out(if_block);
          current = false;
        },
        d: function d(detaching) {
          destroy_component(navbar, detaching);
          if (detaching) detach(t0);
          if (detaching) detach(div);
          destroy_component(addplayer);
          if_blocks[current_block_type_index].d();
        }
      };
    }

    function instance$3($$self, $$props, $$invalidate) {
      var bootstrap = function bootstrap() {
        applyTheme();
      };
      /**
      * Lifecycle function that is invoked when the custom element
      * is attached to the DOM.
      */


      onMount(bootstrap);
      var _$$props$players = $$props.players,
          players = _$$props$players === void 0 ? [] : _$$props$players;
      /**
      * Adds a new player to the player collection.
      *
      * @param {object} evt - { detail: object }
      */

      var addPlayer = function addPlayer(evt) {
        var player = evt.detail;
        $$invalidate(0, players = [].concat(_toConsumableArray(players), [player]));
      };
      /**
      * Deletes the given player to the player collection.
      *
      * @param {object} evt - { detail: string }
      */


      var removePlayer = function removePlayer(evt) {
        $$invalidate(0, players = players.filter(function (player) {
          return player.name !== evt.detail;
        }));
      };

      $$self.$set = function ($$props) {
        if ("players" in $$props) $$invalidate(0, players = $$props.players);
      };

      return [players, addPlayer, removePlayer];
    }

    var Main = /*#__PURE__*/function (_SvelteElement) {
      _inherits(Main, _SvelteElement);

      var _super = _createSuper(Main);

      function Main(options) {
        var _this;

        _classCallCheck(this, Main);

        _this = _super.call(this);
        _this.shadowRoot.innerHTML = "<style>div.svelte-o7kk6x{border-color:1px solid gray;background-color:#aaa}h1.svelte-dmn4mk{color:#F00;font-size:2.0rem;white-space:nowrap}h3.svelte-dmn4mk{color:#FFA;font-size:1.2rem};</style>";
        init(_assertThisInitialized(_this), {
          target: _this.shadowRoot
        }, instance$3, create_fragment$3, safe_not_equal, {
          players: 0
        });

        if (options) {
          if (options.target) {
            insert(options.target, _assertThisInitialized(_this), options.anchor);
          }

          if (options.props) {
            _this.$set(options.props);

            flush();
          }
        }

        return _this;
      }

      _createClass(Main, [{
        key: "players",
        get: function get() {
          return this.$$.ctx[0];
        },
        set: function set(players) {
          this.$set({
            players: players
          });
          flush();
        }
      }], [{
        key: "observedAttributes",
        get: function get() {
          return ["players"];
        }
      }]);

      return Main;
    }(SvelteElement);

    customElements.define("pty-scoreboard", Main);

    return Main;

}());
