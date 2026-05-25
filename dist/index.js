(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".git{display:flex;flex-direction:column;height:100%;background:var(--app-bg);color:#ccc;font-family:Cascadia Code,monospace;font-size:13px}.git__tabs{display:flex;align-items:center;border-bottom:1px solid var(--border-color);padding:0 10px}.git__tab{background:none;border:none;border-bottom:2px solid transparent;color:#888;padding:10px 14px;font-size:12px;cursor:pointer;font-family:inherit}.git__tab:hover{color:#ccc}.git__tab--active{color:#4fc3f7;border-bottom-color:#4fc3f7}.git__spacer{flex:1}.git__refresh{background:none;border:none;color:#666;cursor:pointer;font-size:14px;padding:4px 8px}.git__refresh:hover{color:#aaa}.git__changes,.git__history,.git__remotes{flex:1;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:12px}.git__actions{display:flex;flex-wrap:wrap;gap:6px}.git__action{background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:4px;color:#aaa;padding:5px 12px;font-size:12px;cursor:pointer;font-family:inherit}.git__action:hover{background:#ffffff1a;color:#ddd}.git__commit-area{display:flex;flex-direction:column;gap:8px}.git__commit-msg{background:#ffffff0a;border:1px solid rgba(255,255,255,.1);border-radius:5px;color:#ccc;padding:10px;font-family:inherit;font-size:12px;resize:vertical;min-height:60px;outline:none}.git__commit-msg:focus{border-color:#4fc3f766}.git__commit-row{display:flex;justify-content:flex-end;gap:8px}.git__btn{border:none;border-radius:5px;padding:6px 16px;font-size:12px;cursor:pointer;font-family:inherit}.git__btn--primary{background:#4fc3f726;color:#4fc3f7;border:1px solid rgba(79,195,247,.3)}.git__btn--secondary{background:#ffffff0f;color:#aaa;border:1px solid rgba(255,255,255,.1)}.git__btn--disabled{opacity:.4;cursor:default}.git__btn--primary:hover:not(.git__btn--disabled){background:#4fc3f740}.git__btn--secondary:hover{background:#ffffff1a}.git__output{background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:4px;color:#888;font-size:11px;padding:8px 12px}.git__empty{color:#555;font-size:12px;padding:20px 0}.git__cmd{color:#4fc3f7}")),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var Ur = { exports: {} }, Ze = {}, Yr = { exports: {} }, m = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Vt() {
  if (vt) return m;
  vt = 1;
  var Q = Symbol.for("react.element"), v = Symbol.for("react.portal"), oe = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), ee = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), F = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), B = Symbol.iterator;
  function w(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, De = {};
  function ue(n, u, g) {
    this.props = n, this.context = u, this.refs = De, this.updater = g || re;
  }
  ue.prototype.isReactComponent = {}, ue.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, u, "setState");
  }, ue.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function se() {
  }
  se.prototype = ue.prototype;
  function M(n, u, g) {
    this.props = n, this.context = u, this.refs = De, this.updater = g || re;
  }
  var ge = M.prototype = new se();
  ge.constructor = M, fe(ge, ue.prototype), ge.isPureReactComponent = !0;
  var ce = Array.isArray, W = Object.prototype.hasOwnProperty, Z = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(n, u, g) {
    var b, R = {}, j = null, k = null;
    if (u != null) for (b in u.ref !== void 0 && (k = u.ref), u.key !== void 0 && (j = "" + u.key), u) W.call(u, b) && !de.hasOwnProperty(b) && (R[b] = u[b]);
    var O = arguments.length - 2;
    if (O === 1) R.children = g;
    else if (1 < O) {
      for (var S = Array(O), U = 0; U < O; U++) S[U] = arguments[U + 2];
      R.children = S;
    }
    if (n && n.defaultProps) for (b in O = n.defaultProps, O) R[b] === void 0 && (R[b] = O[b]);
    return { $$typeof: Q, type: n, key: j, ref: k, props: R, _owner: Z.current };
  }
  function Ce(n, u) {
    return { $$typeof: Q, type: n.type, key: u, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === Q;
  }
  function Be(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(g) {
      return u[g];
    });
  }
  var Se = /\/+/g;
  function te(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? Be("" + n.key) : u.toString(36);
  }
  function ne(n, u, g, b, R) {
    var j = typeof n;
    (j === "undefined" || j === "boolean") && (n = null);
    var k = !1;
    if (n === null) k = !0;
    else switch (j) {
      case "string":
      case "number":
        k = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case Q:
          case v:
            k = !0;
        }
    }
    if (k) return k = n, R = R(k), n = b === "" ? "." + te(k, 0) : b, ce(R) ? (g = "", n != null && (g = n.replace(Se, "$&/") + "/"), ne(R, u, g, "", function(U) {
      return U;
    })) : R != null && (we(R) && (R = Ce(R, g + (!R.key || k && k.key === R.key ? "" : ("" + R.key).replace(Se, "$&/") + "/") + n)), u.push(R)), 1;
    if (k = 0, b = b === "" ? "." : b + ":", ce(n)) for (var O = 0; O < n.length; O++) {
      j = n[O];
      var S = b + te(j, O);
      k += ne(j, u, g, S, R);
    }
    else if (S = w(n), typeof S == "function") for (n = S.call(n), O = 0; !(j = n.next()).done; ) j = j.value, S = b + te(j, O++), k += ne(j, u, g, S, R);
    else if (j === "object") throw u = String(n), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return k;
  }
  function q(n, u, g) {
    if (n == null) return n;
    var b = [], R = 0;
    return ne(n, b, "", "", function(j) {
      return u.call(g, j, R++);
    }), b;
  }
  function le(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = g);
      }, function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = g);
      }), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var d = { current: null }, pe = { transition: null }, Te = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: pe, ReactCurrentOwner: Z };
  function he() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return m.Children = { map: q, forEach: function(n, u, g) {
    q(n, function() {
      u.apply(this, arguments);
    }, g);
  }, count: function(n) {
    var u = 0;
    return q(n, function() {
      u++;
    }), u;
  }, toArray: function(n) {
    return q(n, function(u) {
      return u;
    }) || [];
  }, only: function(n) {
    if (!we(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, m.Component = ue, m.Fragment = oe, m.Profiler = ie, m.PureComponent = M, m.StrictMode = z, m.Suspense = $, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, m.act = he, m.cloneElement = function(n, u, g) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var b = fe({}, n.props), R = n.key, j = n.ref, k = n._owner;
    if (u != null) {
      if (u.ref !== void 0 && (j = u.ref, k = Z.current), u.key !== void 0 && (R = "" + u.key), n.type && n.type.defaultProps) var O = n.type.defaultProps;
      for (S in u) W.call(u, S) && !de.hasOwnProperty(S) && (b[S] = u[S] === void 0 && O !== void 0 ? O[S] : u[S]);
    }
    var S = arguments.length - 2;
    if (S === 1) b.children = g;
    else if (1 < S) {
      O = Array(S);
      for (var U = 0; U < S; U++) O[U] = arguments[U + 2];
      b.children = O;
    }
    return { $$typeof: Q, type: n.type, key: R, ref: j, props: b, _owner: k };
  }, m.createContext = function(n) {
    return n = { $$typeof: ee, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: K, _context: n }, n.Consumer = n;
  }, m.createElement = ye, m.createFactory = function(n) {
    var u = ye.bind(null, n);
    return u.type = n, u;
  }, m.createRef = function() {
    return { current: null };
  }, m.forwardRef = function(n) {
    return { $$typeof: J, render: n };
  }, m.isValidElement = we, m.lazy = function(n) {
    return { $$typeof: x, _payload: { _status: -1, _result: n }, _init: le };
  }, m.memo = function(n, u) {
    return { $$typeof: F, type: n, compare: u === void 0 ? null : u };
  }, m.startTransition = function(n) {
    var u = pe.transition;
    pe.transition = {};
    try {
      n();
    } finally {
      pe.transition = u;
    }
  }, m.unstable_act = he, m.useCallback = function(n, u) {
    return d.current.useCallback(n, u);
  }, m.useContext = function(n) {
    return d.current.useContext(n);
  }, m.useDebugValue = function() {
  }, m.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, m.useEffect = function(n, u) {
    return d.current.useEffect(n, u);
  }, m.useId = function() {
    return d.current.useId();
  }, m.useImperativeHandle = function(n, u, g) {
    return d.current.useImperativeHandle(n, u, g);
  }, m.useInsertionEffect = function(n, u) {
    return d.current.useInsertionEffect(n, u);
  }, m.useLayoutEffect = function(n, u) {
    return d.current.useLayoutEffect(n, u);
  }, m.useMemo = function(n, u) {
    return d.current.useMemo(n, u);
  }, m.useReducer = function(n, u, g) {
    return d.current.useReducer(n, u, g);
  }, m.useRef = function(n) {
    return d.current.useRef(n);
  }, m.useState = function(n) {
    return d.current.useState(n);
  }, m.useSyncExternalStore = function(n, u, g) {
    return d.current.useSyncExternalStore(n, u, g);
  }, m.useTransition = function() {
    return d.current.useTransition();
  }, m.version = "18.3.1", m;
}
var rr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
rr.exports;
var yt;
function Wt() {
  return yt || (yt = 1, function(Q, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var oe = "18.3.1", z = Symbol.for("react.element"), ie = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), F = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), De = Symbol.for("react.offscreen"), ue = Symbol.iterator, se = "@@iterator";
      function M(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ue && e[ue] || e[se];
        return typeof r == "function" ? r : null;
      }
      var ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {
        transition: null
      }, W = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {}, ye = null;
      function Ce(e) {
        ye = e;
      }
      de.setExtraStackFrame = function(e) {
        ye = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        ye && (e += ye);
        var r = de.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, Be = !1, Se = !1, te = !1, ne = !1, q = {
        ReactCurrentDispatcher: ge,
        ReactCurrentBatchConfig: ce,
        ReactCurrentOwner: Z
      };
      q.ReactDebugCurrentFrame = de, q.ReactCurrentActQueue = W;
      function le(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          pe("error", e, a);
        }
      }
      function pe(e, r, a) {
        {
          var o = q.ReactDebugCurrentFrame, s = o.getStackAddendum();
          s !== "" && (r += "%s", a = a.concat([s]));
          var p = a.map(function(f) {
            return String(f);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Te = {};
      function he(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", s = o + "." + r;
          if (Te[s])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[s] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          he(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          he(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          he(e, "setState");
        }
      }, u = Object.assign, g = {};
      Object.freeze(g);
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var R = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, j = function(e, r) {
          Object.defineProperty(b.prototype, e, {
            get: function() {
              le("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var k in R)
          R.hasOwnProperty(k) && j(k, R[k]);
      }
      function O() {
      }
      O.prototype = b.prototype;
      function S(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      var U = S.prototype = new O();
      U.constructor = S, u(U, b.prototype), U.isPureReactComponent = !0;
      function _r() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var tr = Array.isArray;
      function Ie(e) {
        return tr(e);
      }
      function br(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function $e(e) {
        try {
          return _e(e), !1;
        } catch {
          return !0;
        }
      }
      function _e(e) {
        return "" + e;
      }
      function Oe(e) {
        if ($e(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(e)), _e(e);
      }
      function nr(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var s = r.displayName || r.name || "";
        return s !== "" ? a + "(" + s + ")" : a;
      }
      function ke(e) {
        return e.displayName || "Context";
      }
      function ve(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case K:
            return "Fragment";
          case ie:
            return "Portal";
          case J:
            return "Profiler";
          case ee:
            return "StrictMode";
          case B:
            return "Suspense";
          case w:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case F:
              var r = e;
              return ke(r) + ".Consumer";
            case $:
              var a = e;
              return ke(a._context) + ".Provider";
            case x:
              return nr(e, e.render, "ForwardRef");
            case re:
              var o = e.displayName || null;
              return o !== null ? o : ve(e.type) || "Memo";
            case fe: {
              var s = e, p = s._payload, f = s._init;
              try {
                return ve(f(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Pe = Object.prototype.hasOwnProperty, Fe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ar, or, Ne;
      Ne = {};
      function ze(e) {
        if (Pe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ke(e) {
        if (Pe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Er(e, r) {
        var a = function() {
          ar || (ar = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function ir(e, r) {
        var a = function() {
          or || (or = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ur(e) {
        if (typeof e.ref == "string" && Z.current && e.__self && Z.current.stateNode !== e.__self) {
          var r = ve(Z.current.type);
          Ne[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ne[r] = !0);
        }
      }
      var qe = function(e, r, a, o, s, p, f) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: z,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: f,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: s
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function Rr(e, r, a) {
        var o, s = {}, p = null, f = null, y = null, E = null;
        if (r != null) {
          ze(r) && (f = r.ref, ur(r)), Ke(r) && (Oe(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            Pe.call(r, o) && !Fe.hasOwnProperty(o) && (s[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          s.children = a;
        else if (P > 1) {
          for (var A = Array(P), D = 0; D < P; D++)
            A[D] = arguments[D + 2];
          Object.freeze && Object.freeze(A), s.children = A;
        }
        if (e && e.defaultProps) {
          var L = e.defaultProps;
          for (o in L)
            s[o] === void 0 && (s[o] = L[o]);
        }
        if (p || f) {
          var Y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && Er(s, Y), f && ir(s, Y);
        }
        return qe(e, p, f, y, E, Z.current, s);
      }
      function Cr(e, r) {
        var a = qe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function wr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, s = u({}, e.props), p = e.key, f = e.ref, y = e._self, E = e._source, P = e._owner;
        if (r != null) {
          ze(r) && (f = r.ref, P = Z.current), Ke(r) && (Oe(r.key), p = "" + r.key);
          var A;
          e.type && e.type.defaultProps && (A = e.type.defaultProps);
          for (o in r)
            Pe.call(r, o) && !Fe.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? s[o] = A[o] : s[o] = r[o]);
        }
        var D = arguments.length - 2;
        if (D === 1)
          s.children = a;
        else if (D > 1) {
          for (var L = Array(D), Y = 0; Y < D; Y++)
            L[Y] = arguments[Y + 2];
          s.children = L;
        }
        return qe(e.type, p, f, y, E, P, s);
      }
      function be(e) {
        return typeof e == "object" && e !== null && e.$$typeof === z;
      }
      var sr = ".", Sr = ":";
      function Ge(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(s) {
          return a[s];
        });
        return "$" + o;
      }
      var He = !1, Ee = /\/+/g;
      function Le(e) {
        return e.replace(Ee, "$&/");
      }
      function je(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Oe(e.key), Ge("" + e.key)) : r.toString(36);
      }
      function xe(e, r, a, o, s) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var f = !1;
        if (e === null)
          f = !0;
        else
          switch (p) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case z:
                case ie:
                  f = !0;
              }
          }
        if (f) {
          var y = e, E = s(y), P = o === "" ? sr + je(y, 0) : o;
          if (Ie(E)) {
            var A = "";
            P != null && (A = Le(P) + "/"), xe(E, r, A, "", function(Mt) {
              return Mt;
            });
          } else E != null && (be(E) && (E.key && (!y || y.key !== E.key) && Oe(E.key), E = Cr(
            E,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (E.key && (!y || y.key !== E.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Le("" + E.key) + "/"
            ) : "") + P
          )), r.push(E));
          return 1;
        }
        var D, L, Y = 0, H = o === "" ? sr : o + Sr;
        if (Ie(e))
          for (var gr = 0; gr < e.length; gr++)
            D = e[gr], L = H + je(D, gr), Y += xe(D, r, a, L, s);
        else {
          var Wr = M(e);
          if (typeof Wr == "function") {
            var ft = e;
            Wr === ft.entries && (He || le("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), He = !0);
            for (var Nt = Wr.call(ft), dt, Lt = 0; !(dt = Nt.next()).done; )
              D = dt.value, L = H + je(D, Lt++), Y += xe(D, r, a, L, s);
          } else if (p === "object") {
            var pt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (pt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : pt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Y;
      }
      function Me(e, r, a) {
        if (e == null)
          return e;
        var o = [], s = 0;
        return xe(e, o, "", "", function(p) {
          return r.call(a, p, s++);
        }), o;
      }
      function cr(e) {
        var r = 0;
        return Me(e, function() {
          r++;
        }), r;
      }
      function Tr(e, r, a) {
        Me(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function lr(e) {
        return Me(e, function(r) {
          return r;
        }) || [];
      }
      function fr(e) {
        if (!be(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Or(e) {
        var r = {
          $$typeof: F,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: $,
          _context: r
        };
        var a = !1, o = !1, s = !1;
        {
          var p = {
            $$typeof: F,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(f) {
                r.Provider = f;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(f) {
                r._currentValue = f;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(f) {
                r._currentValue2 = f;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(f) {
                r._threadCount = f;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(f) {
                s || (le("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", f), s = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Ae = -1, Ve = 0, Je = 1, kr = 2;
      function Pr(e) {
        if (e._status === Ae) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === Ve || e._status === Ae) {
              var f = e;
              f._status = Je, f._result = p;
            }
          }, function(p) {
            if (e._status === Ve || e._status === Ae) {
              var f = e;
              f._status = kr, f._result = p;
            }
          }), e._status === Ae) {
            var o = e;
            o._status = Ve, o._result = a;
          }
        }
        if (e._status === Je) {
          var s = e._result;
          return s === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, s), "default" in s || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, s), s.default;
        } else
          throw e._result;
      }
      function jr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Ae,
          _result: e
        }, a = {
          $$typeof: fe,
          _payload: r,
          _init: Pr
        };
        {
          var o, s;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return s;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), s = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function xr(e) {
        e != null && e.$$typeof === re ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: x,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function i(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === K || e === J || ne || e === ee || e === B || e === w || te || e === De || we || Be || Se || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === re || e.$$typeof === $ || e.$$typeof === F || e.$$typeof === x || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: re,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(s) {
              o = s, !e.name && !e.displayName && (e.displayName = s);
            }
          });
        }
        return a;
      }
      function l() {
        var e = ge.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function C(e) {
        var r = l();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function T(e) {
        var r = l();
        return r.useState(e);
      }
      function _(e, r, a) {
        var o = l();
        return o.useReducer(e, r, a);
      }
      function h(e) {
        var r = l();
        return r.useRef(e);
      }
      function G(e, r) {
        var a = l();
        return a.useEffect(e, r);
      }
      function N(e, r) {
        var a = l();
        return a.useInsertionEffect(e, r);
      }
      function V(e, r) {
        var a = l();
        return a.useLayoutEffect(e, r);
      }
      function ae(e, r) {
        var a = l();
        return a.useCallback(e, r);
      }
      function Re(e, r) {
        var a = l();
        return a.useMemo(e, r);
      }
      function me(e, r, a) {
        var o = l();
        return o.useImperativeHandle(e, r, a);
      }
      function X(e, r) {
        {
          var a = l();
          return a.useDebugValue(e, r);
        }
      }
      function Xe() {
        var e = l();
        return e.useTransition();
      }
      function Ar(e) {
        var r = l();
        return r.useDeferredValue(e);
      }
      function Dr() {
        var e = l();
        return e.useId();
      }
      function gt(e, r, a) {
        var o = l();
        return o.useSyncExternalStore(e, r, a);
      }
      var Qe = 0, Br, zr, Kr, qr, Gr, Hr, Jr;
      function Xr() {
      }
      Xr.__reactDisabledLog = !0;
      function _t() {
        {
          if (Qe === 0) {
            Br = console.log, zr = console.info, Kr = console.warn, qr = console.error, Gr = console.group, Hr = console.groupCollapsed, Jr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Xr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Qe++;
        }
      }
      function bt() {
        {
          if (Qe--, Qe === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: u({}, e, {
                value: Br
              }),
              info: u({}, e, {
                value: zr
              }),
              warn: u({}, e, {
                value: Kr
              }),
              error: u({}, e, {
                value: qr
              }),
              group: u({}, e, {
                value: Gr
              }),
              groupCollapsed: u({}, e, {
                value: Hr
              }),
              groupEnd: u({}, e, {
                value: Jr
              })
            });
          }
          Qe < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ir = q.ReactCurrentDispatcher, $r;
      function dr(e, r, a) {
        {
          if ($r === void 0)
            try {
              throw Error();
            } catch (s) {
              var o = s.stack.trim().match(/\n( *(at )?)/);
              $r = o && o[1] || "";
            }
          return `
` + $r + e;
        }
      }
      var Fr = !1, pr;
      {
        var Et = typeof WeakMap == "function" ? WeakMap : Map;
        pr = new Et();
      }
      function Qr(e, r) {
        if (!e || Fr)
          return "";
        {
          var a = pr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Fr = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = Ir.current, Ir.current = null, _t();
        try {
          if (r) {
            var f = function() {
              throw Error();
            };
            if (Object.defineProperty(f.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(f, []);
              } catch (H) {
                o = H;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (H) {
                o = H;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (H) {
              o = H;
            }
            e();
          }
        } catch (H) {
          if (H && o && typeof H.stack == "string") {
            for (var y = H.stack.split(`
`), E = o.stack.split(`
`), P = y.length - 1, A = E.length - 1; P >= 1 && A >= 0 && y[P] !== E[A]; )
              A--;
            for (; P >= 1 && A >= 0; P--, A--)
              if (y[P] !== E[A]) {
                if (P !== 1 || A !== 1)
                  do
                    if (P--, A--, A < 0 || y[P] !== E[A]) {
                      var D = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && pr.set(e, D), D;
                    }
                  while (P >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          Fr = !1, Ir.current = p, bt(), Error.prepareStackTrace = s;
        }
        var L = e ? e.displayName || e.name : "", Y = L ? dr(L) : "";
        return typeof e == "function" && pr.set(e, Y), Y;
      }
      function Rt(e, r, a) {
        return Qr(e, !1);
      }
      function Ct(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function vr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Qr(e, Ct(e));
        if (typeof e == "string")
          return dr(e);
        switch (e) {
          case B:
            return dr("Suspense");
          case w:
            return dr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case x:
              return Rt(e.render);
            case re:
              return vr(e.type, r, a);
            case fe: {
              var o = e, s = o._payload, p = o._init;
              try {
                return vr(p(s), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Zr = {}, et = q.ReactDebugCurrentFrame;
      function yr(e) {
        if (e) {
          var r = e._owner, a = vr(e.type, e._source, r ? r.type : null);
          et.setExtraStackFrame(a);
        } else
          et.setExtraStackFrame(null);
      }
      function wt(e, r, a, o, s) {
        {
          var p = Function.call.bind(Pe);
          for (var f in e)
            if (p(e, f)) {
              var y = void 0;
              try {
                if (typeof e[f] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[f](r, f, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (yr(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, f, typeof y), yr(null)), y instanceof Error && !(y.message in Zr) && (Zr[y.message] = !0, yr(s), d("Failed %s type: %s", a, y.message), yr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, a = vr(e.type, e._source, r ? r.type : null);
          Ce(a);
        } else
          Ce(null);
      }
      var Nr;
      Nr = !1;
      function rt() {
        if (Z.current) {
          var e = ve(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function St(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Tt(e) {
        return e != null ? St(e.__source) : "";
      }
      var tt = {};
      function Ot(e) {
        var r = rt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function nt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Ot(r);
          if (!tt[a]) {
            tt[a] = !0;
            var o = "";
            e && e._owner && e._owner !== Z.current && (o = " It was passed a child from " + ve(e._owner.type) + "."), We(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), We(null);
          }
        }
      }
      function at(e, r) {
        if (typeof e == "object") {
          if (Ie(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              be(o) && nt(o, r);
            }
          else if (be(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var s = M(e);
            if (typeof s == "function" && s !== e.entries)
              for (var p = s.call(e), f; !(f = p.next()).done; )
                be(f.value) && nt(f.value, r);
          }
        }
      }
      function ot(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === x || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === re))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = ve(r);
            wt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Nr) {
            Nr = !0;
            var s = ve(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function kt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              We(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function it(e, r, a) {
        var o = i(e);
        if (!o) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Tt(r);
          p ? s += p : s += rt();
          var f;
          e === null ? f = "null" : Ie(e) ? f = "array" : e !== void 0 && e.$$typeof === z ? (f = "<" + (ve(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, s);
        }
        var y = Rr.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            at(arguments[E], e);
        return e === K ? kt(y) : ot(y), y;
      }
      var ut = !1;
      function Pt(e) {
        var r = it.bind(null, e);
        return r.type = e, ut || (ut = !0, le("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return le("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function jt(e, r, a) {
        for (var o = wr.apply(this, arguments), s = 2; s < arguments.length; s++)
          at(arguments[s], o.type);
        return ot(o), o;
      }
      function xt(e, r) {
        var a = ce.transition;
        ce.transition = {};
        var o = ce.transition;
        ce.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ce.transition = a, a === null && o._updatedFibers) {
            var s = o._updatedFibers.size;
            s > 10 && le("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var st = !1, hr = null;
      function At(e) {
        if (hr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = Q && Q[r];
            hr = a.call(Q, "timers").setImmediate;
          } catch {
            hr = function(s) {
              st === !1 && (st = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = s, p.port2.postMessage(void 0);
            };
          }
        return hr(e);
      }
      var Ue = 0, ct = !1;
      function lt(e) {
        {
          var r = Ue;
          Ue++, W.current === null && (W.current = []);
          var a = W.isBatchingLegacy, o;
          try {
            if (W.isBatchingLegacy = !0, o = e(), !a && W.didScheduleLegacyUpdate) {
              var s = W.current;
              s !== null && (W.didScheduleLegacyUpdate = !1, Vr(s));
            }
          } catch (L) {
            throw mr(r), L;
          } finally {
            W.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, f = !1, y = {
              then: function(L, Y) {
                f = !0, p.then(function(H) {
                  mr(r), Ue === 0 ? Lr(H, L, Y) : L(H);
                }, function(H) {
                  mr(r), Y(H);
                });
              }
            };
            return !ct && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              f || (ct = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (mr(r), Ue === 0) {
              var P = W.current;
              P !== null && (Vr(P), W.current = null);
              var A = {
                then: function(L, Y) {
                  W.current === null ? (W.current = [], Lr(E, L, Y)) : L(E);
                }
              };
              return A;
            } else {
              var D = {
                then: function(L, Y) {
                  L(E);
                }
              };
              return D;
            }
          }
        }
      }
      function mr(e) {
        e !== Ue - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function Lr(e, r, a) {
        {
          var o = W.current;
          if (o !== null)
            try {
              Vr(o), At(function() {
                o.length === 0 ? (W.current = null, r(e)) : Lr(e, r, a);
              });
            } catch (s) {
              a(s);
            }
          else
            r(e);
        }
      }
      var Mr = !1;
      function Vr(e) {
        if (!Mr) {
          Mr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Mr = !1;
          }
        }
      }
      var Dt = it, It = jt, $t = Pt, Ft = {
        map: Me,
        forEach: Tr,
        count: cr,
        toArray: lr,
        only: fr
      };
      v.Children = Ft, v.Component = b, v.Fragment = K, v.Profiler = J, v.PureComponent = S, v.StrictMode = ee, v.Suspense = B, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, v.act = lt, v.cloneElement = It, v.createContext = Or, v.createElement = Dt, v.createFactory = $t, v.createRef = _r, v.forwardRef = xr, v.isValidElement = be, v.lazy = jr, v.memo = c, v.startTransition = xt, v.unstable_act = lt, v.useCallback = ae, v.useContext = C, v.useDebugValue = X, v.useDeferredValue = Ar, v.useEffect = G, v.useId = Dr, v.useImperativeHandle = me, v.useInsertionEffect = N, v.useLayoutEffect = V, v.useMemo = Re, v.useReducer = _, v.useRef = h, v.useState = T, v.useSyncExternalStore = gt, v.useTransition = Xe, v.version = oe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(rr, rr.exports)), rr.exports;
}
process.env.NODE_ENV === "production" ? Yr.exports = Vt() : Yr.exports = Wt();
var Ye = Yr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function Ut() {
  if (ht) return Ze;
  ht = 1;
  var Q = Ye, v = Symbol.for("react.element"), oe = Symbol.for("react.fragment"), z = Object.prototype.hasOwnProperty, ie = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(J, $, F) {
    var x, B = {}, w = null, re = null;
    F !== void 0 && (w = "" + F), $.key !== void 0 && (w = "" + $.key), $.ref !== void 0 && (re = $.ref);
    for (x in $) z.call($, x) && !K.hasOwnProperty(x) && (B[x] = $[x]);
    if (J && J.defaultProps) for (x in $ = J.defaultProps, $) B[x] === void 0 && (B[x] = $[x]);
    return { $$typeof: v, type: J, key: w, ref: re, props: B, _owner: ie.current };
  }
  return Ze.Fragment = oe, Ze.jsx = ee, Ze.jsxs = ee, Ze;
}
var er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function Yt() {
  return mt || (mt = 1, process.env.NODE_ENV !== "production" && function() {
    var Q = Ye, v = Symbol.for("react.element"), oe = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), J = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), fe = Symbol.iterator, De = "@@iterator";
    function ue(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = fe && t[fe] || t[De];
      return typeof i == "function" ? i : null;
    }
    var se = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
          c[l - 1] = arguments[l];
        ge("error", t, c);
      }
    }
    function ge(t, i, c) {
      {
        var l = se.ReactDebugCurrentFrame, C = l.getStackAddendum();
        C !== "" && (i += "%s", c = c.concat([C]));
        var T = c.map(function(_) {
          return String(_);
        });
        T.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, T);
      }
    }
    var ce = !1, W = !1, Z = !1, de = !1, ye = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === z || t === K || ye || t === ie || t === F || t === x || de || t === re || ce || W || Z || typeof t == "object" && t !== null && (t.$$typeof === w || t.$$typeof === B || t.$$typeof === ee || t.$$typeof === J || t.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function Be(t, i, c) {
      var l = t.displayName;
      if (l)
        return l;
      var C = i.displayName || i.name || "";
      return C !== "" ? c + "(" + C + ")" : c;
    }
    function Se(t) {
      return t.displayName || "Context";
    }
    function te(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case z:
          return "Fragment";
        case oe:
          return "Portal";
        case K:
          return "Profiler";
        case ie:
          return "StrictMode";
        case F:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case J:
            var i = t;
            return Se(i) + ".Consumer";
          case ee:
            var c = t;
            return Se(c._context) + ".Provider";
          case $:
            return Be(t, t.render, "ForwardRef");
          case B:
            var l = t.displayName || null;
            return l !== null ? l : te(t.type) || "Memo";
          case w: {
            var C = t, T = C._payload, _ = C._init;
            try {
              return te(_(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, q = 0, le, d, pe, Te, he, n, u;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function b() {
      {
        if (q === 0) {
          le = console.log, d = console.info, pe = console.warn, Te = console.error, he = console.group, n = console.groupCollapsed, u = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: g,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        q++;
      }
    }
    function R() {
      {
        if (q--, q === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, t, {
              value: le
            }),
            info: ne({}, t, {
              value: d
            }),
            warn: ne({}, t, {
              value: pe
            }),
            error: ne({}, t, {
              value: Te
            }),
            group: ne({}, t, {
              value: he
            }),
            groupCollapsed: ne({}, t, {
              value: n
            }),
            groupEnd: ne({}, t, {
              value: u
            })
          });
        }
        q < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = se.ReactCurrentDispatcher, k;
    function O(t, i, c) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (C) {
            var l = C.stack.trim().match(/\n( *(at )?)/);
            k = l && l[1] || "";
          }
        return `
` + k + t;
      }
    }
    var S = !1, U;
    {
      var _r = typeof WeakMap == "function" ? WeakMap : Map;
      U = new _r();
    }
    function tr(t, i) {
      if (!t || S)
        return "";
      {
        var c = U.get(t);
        if (c !== void 0)
          return c;
      }
      var l;
      S = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = j.current, j.current = null, b();
      try {
        if (i) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (X) {
              l = X;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (X) {
              l = X;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            l = X;
          }
          t();
        }
      } catch (X) {
        if (X && l && typeof X.stack == "string") {
          for (var h = X.stack.split(`
`), G = l.stack.split(`
`), N = h.length - 1, V = G.length - 1; N >= 1 && V >= 0 && h[N] !== G[V]; )
            V--;
          for (; N >= 1 && V >= 0; N--, V--)
            if (h[N] !== G[V]) {
              if (N !== 1 || V !== 1)
                do
                  if (N--, V--, V < 0 || h[N] !== G[V]) {
                    var ae = `
` + h[N].replace(" at new ", " at ");
                    return t.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", t.displayName)), typeof t == "function" && U.set(t, ae), ae;
                  }
                while (N >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        S = !1, j.current = T, R(), Error.prepareStackTrace = C;
      }
      var Re = t ? t.displayName || t.name : "", me = Re ? O(Re) : "";
      return typeof t == "function" && U.set(t, me), me;
    }
    function Ie(t, i, c) {
      return tr(t, !1);
    }
    function br(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function $e(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return tr(t, br(t));
      if (typeof t == "string")
        return O(t);
      switch (t) {
        case F:
          return O("Suspense");
        case x:
          return O("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case $:
            return Ie(t.render);
          case B:
            return $e(t.type, i, c);
          case w: {
            var l = t, C = l._payload, T = l._init;
            try {
              return $e(T(C), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, Oe = {}, nr = se.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var i = t._owner, c = $e(t.type, t._source, i ? i.type : null);
        nr.setExtraStackFrame(c);
      } else
        nr.setExtraStackFrame(null);
    }
    function ve(t, i, c, l, C) {
      {
        var T = Function.call.bind(_e);
        for (var _ in t)
          if (T(t, _)) {
            var h = void 0;
            try {
              if (typeof t[_] != "function") {
                var G = Error((l || "React class") + ": " + c + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              h = t[_](i, _, l, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              h = N;
            }
            h && !(h instanceof Error) && (ke(C), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", c, _, typeof h), ke(null)), h instanceof Error && !(h.message in Oe) && (Oe[h.message] = !0, ke(C), M("Failed %s type: %s", c, h.message), ke(null));
          }
      }
    }
    var Pe = Array.isArray;
    function Fe(t) {
      return Pe(t);
    }
    function ar(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function or(t) {
      try {
        return Ne(t), !1;
      } catch {
        return !0;
      }
    }
    function Ne(t) {
      return "" + t;
    }
    function ze(t) {
      if (or(t))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(t)), Ne(t);
    }
    var Ke = se.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ir, ur;
    function qe(t) {
      if (_e.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Rr(t) {
      if (_e.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Cr(t, i) {
      typeof t.ref == "string" && Ke.current;
    }
    function wr(t, i) {
      {
        var c = function() {
          ir || (ir = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function be(t, i) {
      {
        var c = function() {
          ur || (ur = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var sr = function(t, i, c, l, C, T, _) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: c,
        props: _,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Sr(t, i, c, l, C) {
      {
        var T, _ = {}, h = null, G = null;
        c !== void 0 && (ze(c), h = "" + c), Rr(i) && (ze(i.key), h = "" + i.key), qe(i) && (G = i.ref, Cr(i, C));
        for (T in i)
          _e.call(i, T) && !Er.hasOwnProperty(T) && (_[T] = i[T]);
        if (t && t.defaultProps) {
          var N = t.defaultProps;
          for (T in N)
            _[T] === void 0 && (_[T] = N[T]);
        }
        if (h || G) {
          var V = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && wr(_, V), G && be(_, V);
        }
        return sr(t, h, G, C, l, Ke.current, _);
      }
    }
    var Ge = se.ReactCurrentOwner, He = se.ReactDebugCurrentFrame;
    function Ee(t) {
      if (t) {
        var i = t._owner, c = $e(t.type, t._source, i ? i.type : null);
        He.setExtraStackFrame(c);
      } else
        He.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function je(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function xe() {
      {
        if (Ge.current) {
          var t = te(Ge.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Me(t) {
      return "";
    }
    var cr = {};
    function Tr(t) {
      {
        var i = xe();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function lr(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Tr(i);
        if (cr[c])
          return;
        cr[c] = !0;
        var l = "";
        t && t._owner && t._owner !== Ge.current && (l = " It was passed a child from " + te(t._owner.type) + "."), Ee(t), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, l), Ee(null);
      }
    }
    function fr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Fe(t))
          for (var c = 0; c < t.length; c++) {
            var l = t[c];
            je(l) && lr(l, i);
          }
        else if (je(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = ue(t);
          if (typeof C == "function" && C !== t.entries)
            for (var T = C.call(t), _; !(_ = T.next()).done; )
              je(_.value) && lr(_.value, i);
        }
      }
    }
    function Or(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === B))
          c = i.propTypes;
        else
          return;
        if (c) {
          var l = te(i);
          ve(c, t.props, "prop", l, t);
        } else if (i.PropTypes !== void 0 && !Le) {
          Le = !0;
          var C = te(i);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ae(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var l = i[c];
          if (l !== "children" && l !== "key") {
            Ee(t), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), Ee(null);
            break;
          }
        }
        t.ref !== null && (Ee(t), M("Invalid attribute `ref` supplied to `React.Fragment`."), Ee(null));
      }
    }
    var Ve = {};
    function Je(t, i, c, l, C, T) {
      {
        var _ = we(t);
        if (!_) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Me();
          G ? h += G : h += xe();
          var N;
          t === null ? N = "null" : Fe(t) ? N = "array" : t !== void 0 && t.$$typeof === v ? (N = "<" + (te(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : N = typeof t, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, h);
        }
        var V = Sr(t, i, c, C, T);
        if (V == null)
          return V;
        if (_) {
          var ae = i.children;
          if (ae !== void 0)
            if (l)
              if (Fe(ae)) {
                for (var Re = 0; Re < ae.length; Re++)
                  fr(ae[Re], t);
                Object.freeze && Object.freeze(ae);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(ae, t);
        }
        if (_e.call(i, "key")) {
          var me = te(t), X = Object.keys(i).filter(function(Dr) {
            return Dr !== "key";
          }), Xe = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[me + Xe]) {
            var Ar = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            M(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xe, me, Ar, me), Ve[me + Xe] = !0;
          }
        }
        return t === z ? Ae(V) : Or(V), V;
      }
    }
    function kr(t, i, c) {
      return Je(t, i, c, !0);
    }
    function Pr(t, i, c) {
      return Je(t, i, c, !1);
    }
    var jr = Pr, xr = kr;
    er.Fragment = z, er.jsx = jr, er.jsxs = xr;
  }()), er;
}
process.env.NODE_ENV === "production" ? Ur.exports = Ut() : Ur.exports = Yt();
var I = Ur.exports;
function Bt({ context: Q }) {
  const { cwd: v, executeCommand: oe } = Q, [z, ie] = Ye.useState("changes"), [K, ee] = Ye.useState(""), [J, $] = Ye.useState(""), F = Ye.useCallback((w) => {
    oe && (oe(w), $(`▶ ${w}`));
  }, [oe]), x = () => {
    K.trim() && (F(`git commit -m "${K.replace(/"/g, '\\"')}"`), ee(""));
  }, B = [
    { label: "git pull", cmd: "git pull" },
    { label: "git push", cmd: "git push" },
    { label: "git fetch", cmd: "git fetch" },
    { label: "git status", cmd: "git status" },
    { label: "git log --oneline -10", cmd: "git log --oneline -10" },
    { label: "git diff", cmd: "git diff" }
  ];
  return /* @__PURE__ */ I.jsxs("div", { className: "git", children: [
    /* @__PURE__ */ I.jsxs("div", { className: "git__tabs", children: [
      ["changes", "history", "remotes"].map((w) => /* @__PURE__ */ I.jsx(
        "button",
        {
          className: `git__tab${z === w ? " git__tab--active" : ""}`,
          onClick: () => ie(w),
          children: w
        },
        w
      )),
      /* @__PURE__ */ I.jsx("div", { className: "git__spacer" }),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          className: "git__refresh",
          onClick: () => F("git status --short --branch"),
          title: "Refresh",
          children: "↻"
        }
      )
    ] }),
    z === "changes" && /* @__PURE__ */ I.jsxs("div", { className: "git__changes", children: [
      /* @__PURE__ */ I.jsx("div", { className: "git__actions", children: B.map((w) => /* @__PURE__ */ I.jsx("button", { className: "git__action", onClick: () => F(w.cmd), children: w.label }, w.cmd)) }),
      /* @__PURE__ */ I.jsxs("div", { className: "git__commit-area", children: [
        /* @__PURE__ */ I.jsx(
          "textarea",
          {
            className: "git__commit-msg",
            placeholder: "Commit message… (Ctrl+Enter to commit)",
            value: K,
            onChange: (w) => ee(w.target.value),
            onKeyDown: (w) => {
              w.ctrlKey && w.key === "Enter" && x();
            }
          }
        ),
        /* @__PURE__ */ I.jsxs("div", { className: "git__commit-row", children: [
          /* @__PURE__ */ I.jsx(
            "button",
            {
              className: "git__btn git__btn--secondary",
              onClick: () => F("git add -A"),
              children: "Stage all"
            }
          ),
          /* @__PURE__ */ I.jsx(
            "button",
            {
              className: `git__btn git__btn--primary${K.trim() ? "" : " git__btn--disabled"}`,
              onClick: x,
              disabled: !K.trim(),
              children: "Commit"
            }
          )
        ] })
      ] }),
      J && /* @__PURE__ */ I.jsx("div", { className: "git__output", children: J })
    ] }),
    z === "history" && /* @__PURE__ */ I.jsxs("div", { className: "git__history", children: [
      /* @__PURE__ */ I.jsxs("div", { className: "git__actions", children: [
        /* @__PURE__ */ I.jsx("button", { className: "git__action", onClick: () => F("git log --oneline -20"), children: "Show log (last 20)" }),
        /* @__PURE__ */ I.jsx("button", { className: "git__action", onClick: () => F("git log --oneline --graph --all -20"), children: "Show graph" })
      ] }),
      /* @__PURE__ */ I.jsx("div", { className: "git__empty", children: "Run a log command above — output appears in the terminal." })
    ] }),
    z === "remotes" && /* @__PURE__ */ I.jsx("div", { className: "git__remotes", children: /* @__PURE__ */ I.jsxs("div", { className: "git__actions", children: [
      /* @__PURE__ */ I.jsx("button", { className: "git__action", onClick: () => F("git remote -v"), children: "Show remotes" }),
      /* @__PURE__ */ I.jsx("button", { className: "git__action", onClick: () => F("git branch -a"), children: "All branches" }),
      /* @__PURE__ */ I.jsx("button", { className: "git__action", onClick: () => F("git stash list"), children: "Stash list" })
    ] }) })
  ] });
}
const zt = {
  id: "git",
  name: "Git Insights",
  description: "GitHub Desktop-style git UI: stage, commit, pull/push, and branch management.",
  author: "CMD IDE",
  version: "1.0.0",
  tabType: "git",
  tabTitle: "git",
  githubUrl: "https://github.com/Command-IDE/git",
  TabComponent: Bt,
  commands: [
    { name: "git", description: "open Git Insights panel" }
  ]
};
export {
  zt as default
};
