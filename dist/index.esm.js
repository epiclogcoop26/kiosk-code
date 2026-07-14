import ee, { useState as g, useRef as re, useEffect as te } from "react";
var V = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H;
function ne() {
  if (H) return N;
  H = 1;
  var u = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function p(E, s, c) {
    var b = null;
    if (c !== void 0 && (b = "" + c), s.key !== void 0 && (b = "" + s.key), "key" in s) {
      c = {};
      for (var f in s)
        f !== "key" && (c[f] = s[f]);
    } else c = s;
    return s = c.ref, {
      $$typeof: u,
      type: E,
      key: b,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return N.Fragment = m, N.jsx = p, N.jsxs = p, N;
}
var P = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z;
function ae() {
  return Z || (Z = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === l ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case S:
          return "Profiler";
        case O:
          return "StrictMode";
        case $:
          return "Suspense";
        case F:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case C:
            return "Portal";
          case h:
            return e.displayName || "Context";
          case D:
            return (e._context.displayName || "Context") + ".Consumer";
          case w:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case M:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case A:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function p(e) {
      try {
        m(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), m(e);
      }
    }
    function E(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === A)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = i.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function t() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function I() {
      var e = u(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, r, t, n, Y, W) {
      var a = t.ref;
      return e = {
        $$typeof: d,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: I
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function v(e, r, t, n, Y, W) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (Q(a)) {
            for (n = 0; n < a.length; n++)
              y(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(a);
      if (z.call(r, "key")) {
        a = u(e);
        var x = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", B[a + n] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          x,
          a
        ), B[a + n] = !0);
      }
      if (a = null, t !== void 0 && (p(t), a = "" + t), b(r) && (p(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var U in r)
          U !== "key" && (t[U] = r[U]);
      } else t = r;
      return a && f(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        a,
        t,
        s(),
        Y,
        W
      );
    }
    function y(e) {
      _(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === A && (e._payload.status === "fulfilled" ? _(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function _(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    var k = ee, d = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), h = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), l = Symbol.for("react.client.reference"), i = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, Q = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var J, q = {}, G = k.react_stack_bottom_frame.bind(
      k,
      c
    )(), X = L(E(c)), B = {};
    P.Fragment = T, P.jsx = function(e, r, t) {
      var n = 1e4 > i.recentlyCreatedOwnerStacks++;
      return v(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : G,
        n ? L(E(e)) : X
      );
    }, P.jsxs = function(e, r, t) {
      var n = 1e4 > i.recentlyCreatedOwnerStacks++;
      return v(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : G,
        n ? L(E(e)) : X
      );
    };
  }()), P;
}
process.env.NODE_ENV === "production" ? V.exports = ne() : V.exports = ae();
var o = V.exports;
function se({
  apiUrl: u = "https://kioskadm.vercel.app/api/generate-code",
  secret: m,
  projectId: p,
  targetId: E = "",
  expiresIn: s = 5,
  title: c = "키오스크 미션 코드",
  desc: b = "아래 코드를 키오스크에 입력하세요",
  children: f
}) {
  const [I, j] = g(!1), [v, y] = g(!1), [_, k] = g(""), [d, C] = g(null), [T, O] = g(""), [S, D] = g(0), h = re(null), w = async () => {
    if (!m) {
      O("secret prop이 설정되지 않았습니다."), j(!0);
      return;
    }
    j(!0), y(!0), k(""), O(""), C(null);
    try {
      const l = await fetch(u, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": m
        },
        body: JSON.stringify({ projectId: p, targetId: E, expiresIn: s })
      }), i = await l.json();
      if (!l.ok) throw new Error(i.error || "코드 생성 실패");
      k(i.code), C(new Date(i.expiresAt));
    } catch (l) {
      O(l.message.includes("fetch") ? "서버에 연결할 수 없습니다." : l.message);
    } finally {
      y(!1);
    }
  };
  te(() => {
    if (!d) return;
    const l = () => {
      const i = Math.max(0, Math.floor((d - Date.now()) / 1e3));
      D(i), i === 0 && clearInterval(h.current);
    };
    return l(), h.current = setInterval(l, 1e3), () => clearInterval(h.current);
  }, [d]);
  const $ = () => {
    j(!1), clearInterval(h.current);
  }, F = () => {
    _ && navigator.clipboard.writeText(_).catch(() => {
    });
  }, M = Math.floor(S / 60), A = String(S % 60).padStart(2, "0"), R = d && S === 0;
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    f ? f({ open: w, loading: v }) : /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "km-trigger-btn",
        onClick: w,
        disabled: v,
        children: "🏆 키오스크 미션 완료"
      }
    ),
    I && /* @__PURE__ */ o.jsx("div", { className: "km-overlay", onClick: (l) => l.target === l.currentTarget && $(), children: /* @__PURE__ */ o.jsxs("div", { className: "km-popup", children: [
      /* @__PURE__ */ o.jsx("div", { className: "km-icon", children: "🎉" }),
      /* @__PURE__ */ o.jsx("div", { className: "km-title", children: c }),
      /* @__PURE__ */ o.jsx("div", { className: "km-desc", children: b }),
      T && /* @__PURE__ */ o.jsxs("div", { className: "km-error", children: [
        "⚠️ ",
        T
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: `km-code ${v ? "km-loading" : ""} ${R ? "km-expired" : ""}`, children: v ? "생성 중…" : _ || "──────" }),
      d && /* @__PURE__ */ o.jsx("div", { className: `km-timer ${R ? "km-expired" : ""}`, children: R ? "⚠️ 코드가 만료됐습니다." : `유효 시간: ${M}분 ${A}초` }),
      _ && !R && /* @__PURE__ */ o.jsx("button", { className: "km-btn km-btn-copy", onClick: F, children: "📋 코드 복사" }),
      R && /* @__PURE__ */ o.jsx("button", { className: "km-btn km-btn-retry", onClick: w, children: "🔄 새 코드 받기" }),
      /* @__PURE__ */ o.jsx("button", { className: "km-btn km-btn-close", onClick: $, children: "닫기" })
    ] }) })
  ] });
}
export {
  se as KioskMission,
  se as default
};
