var app = (function () {
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

    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }

      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
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

    function create_fragment(ctx) {
      var div;
      var t;
      return {
        c: function c() {
          div = element("div");
          t = text(
          /*text*/
          ctx[0]);
          attr(div, "class", "navbar bg-primary");
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
        init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
          text: 0
        });
        return _this;
      }

      return NavBar;
    }(SvelteComponent);

    /*

    Based off glamor's StyleSheet, thanks Sunil ❤️

    high performance StyleSheet for css-in-js systems

    - uses multiple style tags behind the scenes for millions of rules
    - uses `insertRule` for appending in production for *much* faster performance

    // usage

    import { StyleSheet } from '@emotion/sheet'

    let styleSheet = new StyleSheet({ key: '', container: document.head })

    styleSheet.insert('#box { border: 1px solid red; }')
    - appends a css rule into the stylesheet

    styleSheet.flush()
    - empties the stylesheet of all its contents

    */
    // $FlowFixMe
    function sheetForTag(tag) {
      if (tag.sheet) {
        // $FlowFixMe
        return tag.sheet;
      } // this weirdness brought to you by firefox

      /* istanbul ignore next */


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          // $FlowFixMe
          return document.styleSheets[i];
        }
      }
    }

    function createStyleElement(options) {
      var tag = document.createElement('style');
      tag.setAttribute('data-emotion', options.key);

      if (options.nonce !== undefined) {
        tag.setAttribute('nonce', options.nonce);
      }

      tag.appendChild(document.createTextNode(''));
      return tag;
    }

    var StyleSheet = /*#__PURE__*/function () {
      function StyleSheet(options) {
        this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
        this.tags = [];
        this.ctr = 0;
        this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

        this.key = options.key;
        this.container = options.container;
        this.before = null;
      }

      var _proto = StyleSheet.prototype;

      _proto.insert = function insert(rule) {
        // the max length is how many rules we have per style tag, it's 65000 in speedy mode
        // it's 1 in dev because we insert source maps that map a single rule to a location
        // and you can only have one source map per style tag
        if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
          var _tag = createStyleElement(this);

          var before;

          if (this.tags.length === 0) {
            before = this.before;
          } else {
            before = this.tags[this.tags.length - 1].nextSibling;
          }

          this.container.insertBefore(_tag, before);
          this.tags.push(_tag);
        }

        var tag = this.tags[this.tags.length - 1];

        if (this.isSpeedy) {
          var sheet = sheetForTag(tag);

          try {
            // this is a really hot path
            // we check the second character first because having "i"
            // as the second character will happen less often than
            // having "@" as the first character
            var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
            // the big drawback is that the css won't be editable in devtools

            sheet.insertRule(rule, // we need to insert @import rules before anything else
            // otherwise there will be an error
            // technically this means that the @import rules will
            // _usually_(not always since there could be multiple style tags)
            // be the first ones in prod and generally later in dev
            // this shouldn't really matter in the real world though
            // @import is generally only used for font faces from google fonts and etc.
            // so while this could be technically correct then it would be slower and larger
            // for a tiny bit of correctness that won't matter in the real world
            isImportRule ? 0 : sheet.cssRules.length);
          } catch (e) {
            if (process.env.NODE_ENV !== 'production') {
              console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
            }
          }
        } else {
          tag.appendChild(document.createTextNode(rule));
        }

        this.ctr++;
      };

      _proto.flush = function flush() {
        // $FlowFixMe
        this.tags.forEach(function (tag) {
          return tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
      };

      return StyleSheet;
    }();

    function stylis_min(W) {
      function M(d, c, e, h, a) {
        for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
          g = e.charCodeAt(l);
          l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

          if (0 === b + n + v + m) {
            if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
              switch (g) {
                case 32:
                case 9:
                case 59:
                case 13:
                case 10:
                  break;

                default:
                  f += e.charAt(l);
              }

              g = 59;
            }

            switch (g) {
              case 123:
                f = f.trim();
                q = f.charCodeAt(0);
                k = 1;

                for (t = ++l; l < B;) {
                  switch (g = e.charCodeAt(l)) {
                    case 123:
                      k++;
                      break;

                    case 125:
                      k--;
                      break;

                    case 47:
                      switch (g = e.charCodeAt(l + 1)) {
                        case 42:
                        case 47:
                          a: {
                            for (u = l + 1; u < J; ++u) {
                              switch (e.charCodeAt(u)) {
                                case 47:
                                  if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                    l = u + 1;
                                    break a;
                                  }

                                  break;

                                case 10:
                                  if (47 === g) {
                                    l = u + 1;
                                    break a;
                                  }

                              }
                            }

                            l = u;
                          }

                      }

                      break;

                    case 91:
                      g++;

                    case 40:
                      g++;

                    case 34:
                    case 39:
                      for (; l++ < J && e.charCodeAt(l) !== g;) {}

                  }

                  if (0 === k) break;
                  l++;
                }

                k = e.substring(t, l);
                0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

                switch (q) {
                  case 64:
                    0 < r && (f = f.replace(N, ''));
                    g = f.charCodeAt(1);

                    switch (g) {
                      case 100:
                      case 109:
                      case 115:
                      case 45:
                        r = c;
                        break;

                      default:
                        r = O;
                    }

                    k = M(c, r, k, g, a + 1);
                    t = k.length;
                    0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                    if (0 < t) switch (g) {
                      case 115:
                        f = f.replace(da, ea);

                      case 100:
                      case 109:
                      case 45:
                        k = f + '{' + k + '}';
                        break;

                      case 107:
                        f = f.replace(fa, '$1 $2');
                        k = f + '{' + k + '}';
                        k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                        break;

                      default:
                        k = f + k, 112 === h && (k = (p += k, ''));
                    } else k = '';
                    break;

                  default:
                    k = M(c, X(c, f, I), k, h, a + 1);
                }

                F += k;
                k = I = r = u = q = 0;
                f = '';
                g = e.charCodeAt(++l);
                break;

              case 125:
              case 59:
                f = (0 < r ? f.replace(N, '') : f).trim();
                if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
                  case 0:
                    break;

                  case 64:
                    if (105 === g || 99 === g) {
                      G += f + e.charAt(l);
                      break;
                    }

                  default:
                    58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                }
                I = r = u = q = 0;
                f = '';
                g = e.charCodeAt(++l);
            }
          }

          switch (g) {
            case 13:
            case 10:
              47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
              0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
              z = 1;
              D++;
              break;

            case 59:
            case 125:
              if (0 === b + n + v + m) {
                z++;
                break;
              }

            default:
              z++;
              y = e.charAt(l);

              switch (g) {
                case 9:
                case 32:
                  if (0 === n + m + b) switch (x) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      y = '';
                      break;

                    default:
                      32 !== g && (y = ' ');
                  }
                  break;

                case 0:
                  y = '\\0';
                  break;

                case 12:
                  y = '\\f';
                  break;

                case 11:
                  y = '\\v';
                  break;

                case 38:
                  0 === n + b + m && (r = I = 1, y = '\f' + y);
                  break;

                case 108:
                  if (0 === n + b + m + E && 0 < u) switch (l - u) {
                    case 2:
                      112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                    case 8:
                      111 === K && (E = K);
                  }
                  break;

                case 58:
                  0 === n + b + m && (u = l);
                  break;

                case 44:
                  0 === b + v + n + m && (r = 1, y += '\r');
                  break;

                case 34:
                case 39:
                  0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                  break;

                case 91:
                  0 === n + b + v && m++;
                  break;

                case 93:
                  0 === n + b + v && m--;
                  break;

                case 41:
                  0 === n + b + m && v--;
                  break;

                case 40:
                  if (0 === n + b + m) {
                    if (0 === q) switch (2 * x + 3 * K) {
                      case 533:
                        break;

                      default:
                        q = 1;
                    }
                    v++;
                  }

                  break;

                case 64:
                  0 === b + v + n + m + u + k && (k = 1);
                  break;

                case 42:
                case 47:
                  if (!(0 < n + m + v)) switch (b) {
                    case 0:
                      switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                        case 235:
                          b = 47;
                          break;

                        case 220:
                          t = l, b = 42;
                      }

                      break;

                    case 42:
                      47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
                  }
              }

              0 === b && (f += y);
          }

          K = x;
          x = g;
          l++;
        }

        t = p.length;

        if (0 < t) {
          r = c;
          if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
          p = r.join(',') + '{' + p + '}';

          if (0 !== w * E) {
            2 !== w || L(p, 2) || (E = 0);

            switch (E) {
              case 111:
                p = p.replace(ha, ':-moz-$1') + p;
                break;

              case 112:
                p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
            }

            E = 0;
          }
        }

        return G + p + F;
      }

      function X(d, c, e) {
        var h = c.trim().split(ia);
        c = h;
        var a = h.length,
            m = d.length;

        switch (m) {
          case 0:
          case 1:
            var b = 0;

            for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
              c[b] = Z(d, c[b], e).trim();
            }

            break;

          default:
            var v = b = 0;

            for (c = []; b < a; ++b) {
              for (var n = 0; n < m; ++n) {
                c[v++] = Z(d[n] + ' ', h[b], e).trim();
              }
            }

        }

        return c;
      }

      function Z(d, c, e) {
        var h = c.charCodeAt(0);
        33 > h && (h = (c = c.trim()).charCodeAt(0));

        switch (h) {
          case 38:
            return c.replace(F, '$1' + d.trim());

          case 58:
            return d.trim() + c.replace(F, '$1' + d.trim());

          default:
            if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
        }

        return d + c;
      }

      function P(d, c, e, h) {
        var a = d + ';',
            m = 2 * c + 3 * e + 4 * h;

        if (944 === m) {
          d = a.indexOf(':', 9) + 1;
          var b = a.substring(d, a.length - 1).trim();
          b = a.substring(0, d).trim() + b + ';';
          return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
        }

        if (0 === w || 2 === w && !L(a, 1)) return a;

        switch (m) {
          case 1015:
            return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

          case 951:
            return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

          case 963:
            return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

          case 1009:
            if (100 !== a.charCodeAt(4)) break;

          case 969:
          case 942:
            return '-webkit-' + a + a;

          case 978:
            return '-webkit-' + a + '-moz-' + a + a;

          case 1019:
          case 983:
            return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

          case 883:
            if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
            if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
            break;

          case 932:
            if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
              case 103:
                return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

              case 115:
                return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

              case 98:
                return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
            }
            return '-webkit-' + a + '-ms-' + a + a;

          case 964:
            return '-webkit-' + a + '-ms-flex-' + a + a;

          case 1023:
            if (99 !== a.charCodeAt(8)) break;
            b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
            return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

          case 1005:
            return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

          case 1e3:
            b = a.substring(13).trim();
            c = b.indexOf('-') + 1;

            switch (b.charCodeAt(0) + b.charCodeAt(c)) {
              case 226:
                b = a.replace(G, 'tb');
                break;

              case 232:
                b = a.replace(G, 'tb-rl');
                break;

              case 220:
                b = a.replace(G, 'lr');
                break;

              default:
                return a;
            }

            return '-webkit-' + a + '-ms-' + b + a;

          case 1017:
            if (-1 === a.indexOf('sticky', 9)) break;

          case 975:
            c = (a = d).length - 10;
            b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

            switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
              case 203:
                if (111 > b.charCodeAt(8)) break;

              case 115:
                a = a.replace(b, '-webkit-' + b) + ';' + a;
                break;

              case 207:
              case 102:
                a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
            }

            return a + ';';

          case 938:
            if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
              case 105:
                return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

              case 115:
                return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

              default:
                return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
            }
            break;

          case 973:
          case 989:
            if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

          case 931:
          case 953:
            if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
            break;

          case 962:
            if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
        }

        return a;
      }

      function L(d, c) {
        var e = d.indexOf(1 === c ? ':' : '{'),
            h = d.substring(0, 3 !== c ? e : 10);
        e = d.substring(e + 1, d.length - 1);
        return R(2 !== c ? h : h.replace(na, '$1'), e, c);
      }

      function ea(d, c) {
        var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
        return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
      }

      function H(d, c, e, h, a, m, b, v, n, q) {
        for (var g = 0, x = c, w; g < A; ++g) {
          switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
            case void 0:
            case !1:
            case !0:
            case null:
              break;

            default:
              x = w;
          }
        }

        if (x !== c) return x;
      }

      function T(d) {
        switch (d) {
          case void 0:
          case null:
            A = S.length = 0;
            break;

          default:
            if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            } else Y = !!d | 0;
        }

        return T;
      }

      function U(d) {
        d = d.prefix;
        void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
        return U;
      }

      function B(d, c) {
        var e = d;
        33 > e.charCodeAt(0) && (e = e.trim());
        V = e;
        e = [V];

        if (0 < A) {
          var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
          void 0 !== h && 'string' === typeof h && (c = h);
        }

        var a = M(O, e, c, 0, 0);
        0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
        V = '';
        E = 0;
        z = D = 1;
        return a;
      }

      var ca = /^\0+/g,
          N = /[\0\r\f]/g,
          aa = /: */g,
          ka = /zoo|gra/,
          ma = /([,: ])(transform)/g,
          ia = /,\r+?/g,
          F = /([\t\r\n ])*\f?&/g,
          fa = /@(k\w+)\s*(\S*)\s*/,
          Q = /::(place)/g,
          ha = /:(read-only)/g,
          G = /[svh]\w+-[tblr]{2}/,
          da = /\(\s*(.*)\s*\)/g,
          oa = /([\s\S]*?);/g,
          ba = /-self|flex-/g,
          na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          la = /stretch|:\s*\w+\-(?:conte|avail)/,
          ja = /([^-])(image-set\()/,
          z = 1,
          D = 1,
          E = 0,
          w = 1,
          O = [],
          S = [],
          A = 0,
          R = null,
          Y = 0,
          V = '';
      B.use = T;
      B.set = U;
      void 0 !== W && U(W);
      return B;
    }

    // inlined to avoid umd wrapper and peerDep warnings/installing stylis
    // since we use stylis after closure compiler

    var delimiter = '/*|*/';
    var needle = delimiter + '}';

    function toSheet(block) {
      if (block) {
        Sheet.current.insert(block + '}');
      }
    }

    var Sheet = {
      current: null
    };

    var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
      switch (context) {
        // property
        case 1:
          {
            switch (content.charCodeAt(0)) {
              case 64:
                {
                  // @import
                  Sheet.current.insert(content + ';');
                  return '';
                }
              // charcode for l

              case 108:
                {
                  // charcode for b
                  // this ignores label
                  if (content.charCodeAt(2) === 98) {
                    return '';
                  }
                }
            }

            break;
          }
        // selector

        case 2:
          {
            if (ns === 0) return content + delimiter;
            break;
          }
        // at-rule

        case 3:
          {
            switch (ns) {
              // @font-face, @page
              case 102:
              case 112:
                {
                  Sheet.current.insert(selectors[0] + content);
                  return '';
                }

              default:
                {
                  return content + (at === 0 ? delimiter : '');
                }
            }
          }

        case -2:
          {
            content.split(needle).forEach(toSheet);
          }
      }
    };

    var createCache = function createCache(options) {
      if (options === undefined) options = {};
      var key = options.key || 'css';
      var stylisOptions;

      if (options.prefix !== undefined) {
        stylisOptions = {
          prefix: options.prefix
        };
      }

      var stylis = new stylis_min(stylisOptions);

      if (process.env.NODE_ENV !== 'production') {
        // $FlowFixMe
        if (/[^a-z-]/.test(key)) {
          throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
        }
      }

      var inserted = {}; // $FlowFixMe

      var container;
      {
        container = options.container || document.head;
        var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
        Array.prototype.forEach.call(nodes, function (node) {
          var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

          attrib.split(' ').forEach(function (id) {
            inserted[id] = true;
          });

          if (node.parentNode !== container) {
            container.appendChild(node);
          }
        });
      }

      var _insert;

      {
        stylis.use(options.stylisPlugins)(ruleSheet);

        _insert = function insert(selector, serialized, sheet, shouldCache) {
          var name = serialized.name;
          Sheet.current = sheet;

          if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
            var map = serialized.map;
            Sheet.current = {
              insert: function insert(rule) {
                sheet.insert(rule + map);
              }
            };
          }

          stylis(selector, serialized.styles);

          if (shouldCache) {
            cache.inserted[name] = true;
          }
        };
      }

      if (process.env.NODE_ENV !== 'production') {
        // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
        var commentStart = /\/\*/g;
        var commentEnd = /\*\//g;
        stylis.use(function (context, content) {
          switch (context) {
            case -1:
              {
                while (commentStart.test(content)) {
                  commentEnd.lastIndex = commentStart.lastIndex;

                  if (commentEnd.test(content)) {
                    commentStart.lastIndex = commentEnd.lastIndex;
                    continue;
                  }

                  throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
                }

                commentStart.lastIndex = 0;
                break;
              }
          }
        });
        stylis.use(function (context, content, selectors) {
          switch (context) {
            case -1:
              {
                var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
                var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

                if (unsafePseudoClasses && cache.compat !== true) {
                  unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                    var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                    var ignore = ignoreRegExp.test(content);

                    if (unsafePseudoClass && !ignore) {
                      console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                    }
                  });
                }

                break;
              }
          }
        });
      }

      var cache = {
        key: key,
        sheet: new StyleSheet({
          key: key,
          container: container,
          nonce: options.nonce,
          speedy: options.speedy
        }),
        nonce: options.nonce,
        inserted: inserted,
        registered: {},
        insert: _insert
      };
      return cache;
    };

    /* eslint-disable */
    // Inspired by https://github.com/garycourt/murmurhash-js
    // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
    function murmur2(str) {
      // 'm' and 'r' are mixing constants generated offline.
      // They're not really 'magic', they just happen to work well.
      // const m = 0x5bd1e995;
      // const r = 24;
      // Initialize the hash
      var h = 0; // Mix 4 bytes at a time into the hash

      var k,
          i = 0,
          len = str.length;

      for (; len >= 4; ++i, len -= 4) {
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k =
        /* Math.imul(k, m): */
        (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
        k ^=
        /* k >>> r: */
        k >>> 24;
        h =
        /* Math.imul(k, m): */
        (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
      } // Handle the last few bytes of the input array


      switch (len) {
        case 3:
          h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

        case 2:
          h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

        case 1:
          h ^= str.charCodeAt(i) & 0xff;
          h =
          /* Math.imul(h, m): */
          (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
      } // Do a few final mixes of the hash to ensure the last few
      // bytes are well-incorporated.


      h ^= h >>> 13;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
      return ((h ^ h >>> 15) >>> 0).toString(36);
    }

    var unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      // SVG-related properties
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };

    function memoize(fn) {
      var cache = {};
      return function (arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
      };
    }

    var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
    var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
    var hyphenateRegex = /[A-Z]|^ms/g;
    var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

    var isCustomProperty = function isCustomProperty(property) {
      return property.charCodeAt(1) === 45;
    };

    var isProcessableValue = function isProcessableValue(value) {
      return value != null && typeof value !== 'boolean';
    };

    var processStyleName = memoize(function (styleName) {
      return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
    });

    var processStyleValue = function processStyleValue(key, value) {
      switch (key) {
        case 'animation':
        case 'animationName':
          {
            if (typeof value === 'string') {
              return value.replace(animationRegex, function (match, p1, p2) {
                cursor = {
                  name: p1,
                  styles: p2,
                  next: cursor
                };
                return p1;
              });
            }
          }
      }

      if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
        return value + 'px';
      }

      return value;
    };

    if (process.env.NODE_ENV !== 'production') {
      var contentValuePattern = /(attr|calc|counters?|url)\(/;
      var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
      var oldProcessStyleValue = processStyleValue;
      var msPattern = /^-ms-/;
      var hyphenPattern = /-(.)/g;
      var hyphenatedCache = {};

      processStyleValue = function processStyleValue(key, value) {
        if (key === 'content') {
          if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
            console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
          }
        }

        var processed = oldProcessStyleValue(key, value);

        if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
          hyphenatedCache[key] = true;
          console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
            return _char.toUpperCase();
          }) + "?");
        }

        return processed;
      };
    }

    var shouldWarnAboutInterpolatingClassNameFromCss = true;

    function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
      if (interpolation == null) {
        return '';
      }

      if (interpolation.__emotion_styles !== undefined) {
        if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        return interpolation;
      }

      switch (typeof interpolation) {
        case 'boolean':
          {
            return '';
          }

        case 'object':
          {
            if (interpolation.anim === 1) {
              cursor = {
                name: interpolation.name,
                styles: interpolation.styles,
                next: cursor
              };
              return interpolation.name;
            }

            if (interpolation.styles !== undefined) {
              var next = interpolation.next;

              if (next !== undefined) {
                // not the most efficient thing ever but this is a pretty rare case
                // and there will be very few iterations of this generally
                while (next !== undefined) {
                  cursor = {
                    name: next.name,
                    styles: next.styles,
                    next: cursor
                  };
                  next = next.next;
                }
              }

              var styles = interpolation.styles + ";";

              if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
                styles += interpolation.map;
              }

              return styles;
            }

            return createStringFromObject(mergedProps, registered, interpolation);
          }

        case 'function':
          {
            if (mergedProps !== undefined) {
              var previousCursor = cursor;
              var result = interpolation(mergedProps);
              cursor = previousCursor;
              return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
            } else if (process.env.NODE_ENV !== 'production') {
              console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
            }

            break;
          }

        case 'string':
          if (process.env.NODE_ENV !== 'production') {
            var matched = [];
            var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
              var fakeVarName = "animation" + matched.length;
              matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
              return "${" + fakeVarName + "}";
            });

            if (matched.length) {
              console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
            }
          }

          break;
      } // finalize string values (regular strings and functions interpolated into css calls)


      if (registered == null) {
        return interpolation;
      }

      var cached = registered[interpolation];

      if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
        console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
        shouldWarnAboutInterpolatingClassNameFromCss = false;
      }

      return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
    }

    function createStringFromObject(mergedProps, registered, obj) {
      var string = '';

      if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
          string += handleInterpolation(mergedProps, registered, obj[i], false);
        }
      } else {
        for (var _key in obj) {
          var value = obj[_key];

          if (typeof value !== 'object') {
            if (registered != null && registered[value] !== undefined) {
              string += _key + "{" + registered[value] + "}";
            } else if (isProcessableValue(value)) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
            }
          } else {
            if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
              throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
            }

            if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
              for (var _i = 0; _i < value.length; _i++) {
                if (isProcessableValue(value[_i])) {
                  string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
                }
              }
            } else {
              var interpolated = handleInterpolation(mergedProps, registered, value, false);

              switch (_key) {
                case 'animation':
                case 'animationName':
                  {
                    string += processStyleName(_key) + ":" + interpolated + ";";
                    break;
                  }

                default:
                  {
                    if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                      console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                    }

                    string += _key + "{" + interpolated + "}";
                  }
              }
            }
          }
        }
      }

      return string;
    }

    var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
    var sourceMapPattern;

    if (process.env.NODE_ENV !== 'production') {
      sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
    } // this is the cursor for keyframes
    // keyframes are stored on the SerializedStyles object as a linked list


    var cursor;

    var serializeStyles = function serializeStyles(args, registered, mergedProps) {
      if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
        return args[0];
      }

      var stringMode = true;
      var styles = '';
      cursor = undefined;
      var strings = args[0];

      if (strings == null || strings.raw === undefined) {
        stringMode = false;
        styles += handleInterpolation(mergedProps, registered, strings, false);
      } else {
        if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles += strings[0];
      } // we start at 1 since we've already handled the first arg


      for (var i = 1; i < args.length; i++) {
        styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

        if (stringMode) {
          if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
            console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
          }

          styles += strings[i];
        }
      }

      var sourceMap;

      if (process.env.NODE_ENV !== 'production') {
        styles = styles.replace(sourceMapPattern, function (match) {
          sourceMap = match;
          return '';
        });
      } // using a global regex with .exec is stateful so lastIndex has to be reset each time


      labelPattern.lastIndex = 0;
      var identifierName = '';
      var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

      while ((match = labelPattern.exec(styles)) !== null) {
        identifierName += '-' + // $FlowFixMe we know it's not null
        match[1];
      }

      var name = murmur2(styles) + identifierName;

      if (process.env.NODE_ENV !== 'production') {
        // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
        return {
          name: name,
          styles: styles,
          map: sourceMap,
          next: cursor,
          toString: function toString() {
            return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
          }
        };
      }

      return {
        name: name,
        styles: styles,
        next: cursor
      };
    };

    var isBrowser = "object" !== 'undefined';

    function getRegisteredStyles(registered, registeredStyles, classNames) {
      var rawClassName = '';
      classNames.split(' ').forEach(function (className) {
        if (registered[className] !== undefined) {
          registeredStyles.push(registered[className]);
        } else {
          rawClassName += className + " ";
        }
      });
      return rawClassName;
    }

    var insertStyles = function insertStyles(cache, serialized, isStringTag) {
      var className = cache.key + "-" + serialized.name;

      if ( // we only need to add the styles to the registered cache if the
      // class name could be used further down
      // the tree but if it's a string tag, we know it won't
      // so we don't have to add it to registered cache.
      // this improves memory usage since we can avoid storing the whole style string
      (isStringTag === false || // we need to always store it if we're in compat mode and
      // in node since emotion-server relies on whether a style is in
      // the registered cache to know whether a style is global or not
      // also, note that this check will be dead code eliminated in the browser
      isBrowser === false ) && cache.registered[className] === undefined) {
        cache.registered[className] = serialized.styles;
      }

      if (cache.inserted[serialized.name] === undefined) {
        var current = serialized;

        do {
          var maybeStyles = cache.insert("." + className, current, cache.sheet, true);
          current = current.next;
        } while (current !== undefined);
      }
    };

    function insertWithoutScoping(cache, serialized) {
      if (cache.inserted[serialized.name] === undefined) {
        return cache.insert('', serialized, cache.sheet, true);
      }
    }

    function merge(registered, css, className) {
      var registeredStyles = [];
      var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

      if (registeredStyles.length < 2) {
        return className;
      }

      return rawClassName + css(registeredStyles);
    }

    var createEmotion = function createEmotion(options) {
      var cache = createCache(options); // $FlowFixMe

      cache.sheet.speedy = function (value) {
        if (process.env.NODE_ENV !== 'production' && this.ctr !== 0) {
          throw new Error('speedy must be changed before any rules are inserted');
        }

        this.isSpeedy = value;
      };

      cache.compat = true;

      var css = function css() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var serialized = serializeStyles(args, cache.registered, undefined);
        insertStyles(cache, serialized, false);
        return cache.key + "-" + serialized.name;
      };

      var keyframes = function keyframes() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var serialized = serializeStyles(args, cache.registered);
        var animation = "animation-" + serialized.name;
        insertWithoutScoping(cache, {
          name: serialized.name,
          styles: "@keyframes " + animation + "{" + serialized.styles + "}"
        });
        return animation;
      };

      var injectGlobal = function injectGlobal() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var serialized = serializeStyles(args, cache.registered);
        insertWithoutScoping(cache, serialized);
      };

      var cx = function cx() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return merge(cache.registered, css, classnames(args));
      };

      return {
        css: css,
        cx: cx,
        injectGlobal: injectGlobal,
        keyframes: keyframes,
        hydrate: function hydrate(ids) {
          ids.forEach(function (key) {
            cache.inserted[key] = true;
          });
        },
        flush: function flush() {
          cache.registered = {};
          cache.inserted = {};
          cache.sheet.flush();
        },
        // $FlowFixMe
        sheet: cache.sheet,
        cache: cache,
        getRegisteredStyles: getRegisteredStyles.bind(null, cache.registered),
        merge: merge.bind(null, cache.registered, css)
      };
    };

    var classnames = function classnames(args) {
      var cls = '';

      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;

        switch (typeof arg) {
          case 'boolean':
            break;

          case 'object':
            {
              if (Array.isArray(arg)) {
                toAdd = classnames(arg);
              } else {
                toAdd = '';

                for (var k in arg) {
                  if (arg[k] && k) {
                    toAdd && (toAdd += ' ');
                    toAdd += k;
                  }
                }
              }

              break;
            }

          default:
            {
              toAdd = arg;
            }
        }

        if (toAdd) {
          cls && (cls += ' ');
          cls += toAdd;
        }
      }

      return cls;
    };

    /**
     * Creates an @emotion processor instance
     *
     * @param {HTMLElement}
     * @returns {object}
     * @see https://github.com/emotion-js/emotion/blob/master/packages/create-emotion/README.md
     */

    var createProcessor = function createProcessor(container) {
      return createEmotion({
        container: container
      });
    };
    /**
     * Returns the singleton @emotion processor that will be
     * linked to the given target <style> tag in the DOM or the the <head> otherwise
     *
     * @param {HTMLElement}
     * @returns {object}
     * @see https://github.com/emotion-js/emotion/blob/master/packages/create-emotion/README.md
     */


    var emotion = function emotion(container) {
      var host = get_current_component(); // the target style tag is either the passed HTMLElement
      // the the actual Svelte component or the <head> element

      var targetElm = container || host.shadowRoot || host || document.head;
      var styleParent = document.createElement('div');
      styleParent.style.display = 'none';
      targetElm.insertBefore(styleParent, targetElm.firstChild);
      return createProcessor(styleParent);
    };

    function _templateObject2() {
      var data = _taggedTemplateLiteral(["\n    color: #FFA;\n    font-size: 1.2rem;\n  "]);

      _templateObject2 = function _templateObject2() {
        return data;
      };

      return data;
    }

    function _templateObject() {
      var data = _taggedTemplateLiteral(["\n    color: #F00;\n    font-size: 2.0rem;\n    white-space: nowrap;\n  "]);

      _templateObject = function _templateObject() {
        return data;
      };

      return data;
    }

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
    } // (68:4) {#if showControls}


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
    } // (73:0) {#if showControls}


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
          ctx[5]), listen(button1, "click",
          /*removePoint*/
          ctx[6]), listen(input, "input",
          /*input_input_handler*/
          ctx[11])];
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
      var h1_1;
      var t0;
      var t1;
      var button0;
      var t2;
      var button1;
      var t4;
      var h3_1;
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
          h1_1 = element("h1");
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
          h3_1 = element("h3");
          t5 = text("Score: ");
          t6 = text(
          /*score*/
          ctx[0]);
          t7 = space();
          if (if_block1) if_block1.c();
          if_block1_anchor = empty();
          attr(button0, "class", "btn btn-sm");
          attr(button1, "class", "btn btn-danger btn-sm");
          attr(h1_1, "class",
          /*h1*/
          ctx[3]);
          attr(h3_1, "class",
          /*h3*/
          ctx[4]);
        },
        m: function m(target, anchor, remount) {
          insert(target, h1_1, anchor);
          append(h1_1, t0);
          append(h1_1, t1);
          append(h1_1, button0);
          if_block0.m(button0, null);
          append(h1_1, t2);
          append(h1_1, button1);
          insert(target, t4, anchor);
          insert(target, h3_1, anchor);
          append(h3_1, t5);
          append(h3_1, t6);
          insert(target, t7, anchor);
          if (if_block1) if_block1.m(target, anchor);
          insert(target, if_block1_anchor, anchor);
          if (remount) run_all(dispose);
          dispose = [listen(button0, "click",
          /*toggleControls*/
          ctx[7]), listen(button1, "click",
          /*onRemove*/
          ctx[8])];
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
          if (detaching) detach(h1_1);
          if_block0.d();
          if (detaching) detach(t4);
          if (detaching) detach(h3_1);
          if (detaching) detach(t7);
          if (if_block1) if_block1.d(detaching);
          if (detaching) detach(if_block1_anchor);
          run_all(dispose);
        }
      };
    }

    function instance$1($$self, $$props, $$invalidate) {
      var _emotion = emotion(),
          css = _emotion.css;

      var h1 = css(_templateObject());
      var h3 = css(_templateObject2());
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

      return [score, showControls, name, h1, h3, addPoint, removePoint, toggleControls, onRemove, css, dispatch, input_input_handler];
    }

    var Player = /*#__PURE__*/function (_SvelteComponent) {
      _inherits(Player, _SvelteComponent);

      var _super = _createSuper(Player);

      function Player(options) {
        var _this;

        _classCallCheck(this, Player);

        _this = _super.call(this);
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

      var style = document.createElement('style');
      style.textContent = "@import \"".concat(cssThemeURI, "\";");
      host.shadowRoot.insertBefore(style, host.shadowRoot.firstChild);
    };

    function _templateObject$1() {
      var data = _taggedTemplateLiteral(["\n    background-color: #efefea;\n    border: 1px solid green;\n  "]);

      _templateObject$1 = function _templateObject() {
        return data;
      };

      return data;
    }

    function get_each_context(ctx, list, i) {
      var child_ctx = ctx.slice();
      child_ctx[6] = list[i];
      return child_ctx;
    } // (68:2) {:else}


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
    } // (66:2) {#if players.length === 0}


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
    } // (69:4) {#each players as player}


    function create_each_block(ctx) {
      var current;
      var player = new Player({
        props: {
          name:
          /*player*/
          ctx[6].name,
          score:
          /*player*/
          ctx[6].score
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
          ctx[6].name;
          if (dirty &
          /*players*/
          1) player_changes.score =
          /*player*/
          ctx[6].score;
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
          attr(div, "class",
          /*containerStyle*/
          ctx[3]);
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
      var _emotion = emotion(),
          css = _emotion.css;
      /**
      * Bootstrap function that is invoked when the web component
      * is mounted to the DOM.
      */


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

      var containerStyle = css(_templateObject$1());

      $$self.$set = function ($$props) {
        if ("players" in $$props) $$invalidate(0, players = $$props.players);
      };

      return [players, addPlayer, removePlayer, containerStyle];
    }

    var Main = /*#__PURE__*/function (_SvelteElement) {
      _inherits(Main, _SvelteElement);

      var _super = _createSuper(Main);

      function Main(options) {
        var _this;

        _classCallCheck(this, Main);

        _this = _super.call(this);
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
//# sourceMappingURL=bundle.js.map
