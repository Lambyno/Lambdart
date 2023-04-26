(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
  new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList")
        for (const r of a.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const a = {};
    return (
      l.integrity && (a.integrity = l.integrity),
      l.referrerpolicy && (a.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (a.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function i(l) {
    if (l.ep) return;
    l.ep = !0;
    const a = n(l);
    fetch(l.href, a);
  }
})();
function C() {}
const Ce = (t) => t;
function Je(t) {
  return t();
}
function Be() {
  return Object.create(null);
}
function H(t) {
  t.forEach(Je);
}
function Me(t) {
  return typeof t == "function";
}
function be(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let fe;
function N(t, e) {
  return fe || (fe = document.createElement("a")), (fe.href = e), t === fe.href;
}
function at(t) {
  return Object.keys(t).length === 0;
}
const Xe = typeof window < "u";
let et = Xe ? () => window.performance.now() : () => Date.now(),
  Fe = Xe ? (t) => requestAnimationFrame(t) : C;
const V = new Set();
function tt(t) {
  V.forEach((e) => {
    e.c(t) || (V.delete(e), e.f());
  }),
    V.size !== 0 && Fe(tt);
}
function nt(t) {
  let e;
  return (
    V.size === 0 && Fe(tt),
    {
      promise: new Promise((n) => {
        V.add((e = { c: t, f: n }));
      }),
      abort() {
        V.delete(e);
      },
    }
  );
}
function f(t, e) {
  t.appendChild(e);
}
function ct(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function ut(t, e) {
  return f(t.head || t, e), e.sheet;
}
function x(t, e, n) {
  t.insertBefore(e, n || null);
}
function I(t) {
  t.parentNode.removeChild(t);
}
function ve(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function _(t) {
  return document.createElement(t);
}
function ee(t) {
  return document.createTextNode(t);
}
function g() {
  return ee(" ");
}
function ne() {
  return ee("");
}
function $(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function u(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ft(t) {
  return Array.from(t.childNodes);
}
function D(t, e, n, i) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function _t(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const l = document.createEvent("CustomEvent");
  return l.initCustomEvent(t, n, i, e), l;
}
const pe = new Map();
let he = 0;
function dt(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function mt(t) {
  const e = { style_element: _("style"), rules: {} };
  return pe.set(t, e), e;
}
function lt(t, e, n, i, l, a, r, o = 0) {
  const s = 16.666 / i;
  let c = `{
`;
  for (let b = 0; b <= 1; b += s) {
    const M = e + (n - e) * a(b);
    c +=
      b * 100 +
      `%{${r(M, 1 - M)}}
`;
  }
  const p =
      c +
      `100% {${r(n, 1 - n)}}
}`,
    d = `__svelte_${dt(p)}_${o}`,
    h = ct(t),
    { style_element: m, rules: y } = pe.get(h) || mt(h);
  if (!y[d]) {
    const b = ut(h, m);
    (y[d] = !0), b.insertRule(`@keyframes ${d} ${p}`, b.cssRules.length);
  }
  const v = t.style.animation || "";
  return (
    (t.style.animation = `${
      v ? `${v}, ` : ""
    }${d} ${i}ms linear ${l}ms 1 both`),
    (he += 1),
    d
  );
}
function Ie(t, e) {
  const n = (t.style.animation || "").split(", "),
    i = n.filter(
      e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf("__svelte") === -1
    ),
    l = n.length - i.length;
  l && ((t.style.animation = i.join(", ")), (he -= l), he || pt());
}
function pt() {
  Fe(() => {
    he ||
      (pe.forEach((t) => {
        const { style_element: e } = t;
        I(e);
      }),
      pe.clear());
  });
}
let Pe;
function te(t) {
  Pe = t;
}
const X = [],
  Oe = [],
  de = [],
  De = [],
  ht = Promise.resolve();
let Ae = !1;
function gt() {
  Ae || ((Ae = !0), ht.then(st));
}
function z(t) {
  de.push(t);
}
const we = new Set();
let _e = 0;
function st() {
  const t = Pe;
  do {
    for (; _e < X.length; ) {
      const e = X[_e];
      _e++, te(e), yt(e.$$);
    }
    for (te(null), X.length = 0, _e = 0; Oe.length; ) Oe.pop()();
    for (let e = 0; e < de.length; e += 1) {
      const n = de[e];
      we.has(n) || (we.add(n), n());
    }
    de.length = 0;
  } while (X.length);
  for (; De.length; ) De.pop()();
  (Ae = !1), we.clear(), te(t);
}
function yt(t) {
  if (t.fragment !== null) {
    t.update(), H(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(z);
  }
}
let J;
function rt() {
  return (
    J ||
      ((J = Promise.resolve()),
      J.then(() => {
        J = null;
      })),
    J
  );
}
function ge(t, e, n) {
  t.dispatchEvent(_t(`${e ? "intro" : "outro"}${n}`));
}
const me = new Set();
let R;
function le() {
  R = { r: 0, c: [], p: R };
}
function se() {
  R.r || H(R.c), (R = R.p);
}
function F(t, e) {
  t && t.i && (me.delete(t), t.i(e));
}
function B(t, e, n, i) {
  if (t && t.o) {
    if (me.has(t)) return;
    me.add(t),
      R.c.push(() => {
        me.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
const it = { duration: 0 };
function re(t, e, n) {
  let i = e(t, n),
    l = !1,
    a,
    r,
    o = 0;
  function s() {
    a && Ie(t, a);
  }
  function c() {
    const {
      delay: d = 0,
      duration: h = 300,
      easing: m = Ce,
      tick: y = C,
      css: v,
    } = i || it;
    v && (a = lt(t, 0, 1, h, d, m, v, o++)), y(0, 1);
    const b = et() + d,
      M = b + h;
    r && r.abort(),
      (l = !0),
      z(() => ge(t, !0, "start")),
      (r = nt((W) => {
        if (l) {
          if (W >= M) return y(1, 0), ge(t, !0, "end"), s(), (l = !1);
          if (W >= b) {
            const A = m((W - b) / h);
            y(A, 1 - A);
          }
        }
        return l;
      }));
  }
  let p = !1;
  return {
    start() {
      p || ((p = !0), Ie(t), Me(i) ? ((i = i()), rt().then(c)) : c());
    },
    invalidate() {
      p = !1;
    },
    end() {
      l && (s(), (l = !1));
    },
  };
}
function ie(t, e, n) {
  let i = e(t, n),
    l = !0,
    a;
  const r = R;
  r.r += 1;
  function o() {
    const {
      delay: s = 0,
      duration: c = 300,
      easing: p = Ce,
      tick: d = C,
      css: h,
    } = i || it;
    h && (a = lt(t, 1, 0, c, s, p, h));
    const m = et() + s,
      y = m + c;
    z(() => ge(t, !1, "start")),
      nt((v) => {
        if (l) {
          if (v >= y) return d(0, 1), ge(t, !1, "end"), --r.r || H(r.c), !1;
          if (v >= m) {
            const b = p((v - m) / c);
            d(1 - b, b);
          }
        }
        return l;
      });
  }
  return (
    Me(i)
      ? rt().then(() => {
          (i = i()), o();
        })
      : o(),
    {
      end(s) {
        s && i.tick && i.tick(1, 0), l && (a && Ie(t, a), (l = !1));
      },
    }
  );
}
function Le(t) {
  t && t.c();
}
function xe(t, e, n, i) {
  const { fragment: l, on_mount: a, on_destroy: r, after_update: o } = t.$$;
  l && l.m(e, n),
    i ||
      z(() => {
        const s = a.map(Je).filter(Me);
        r ? r.push(...s) : H(s), (t.$$.on_mount = []);
      }),
    o.forEach(z);
}
function $e(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (H(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function bt(t, e) {
  t.$$.dirty[0] === -1 && (X.push(t), gt(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Ee(t, e, n, i, l, a, r, o = [-1]) {
  const s = Pe;
  te(t);
  const c = (t.$$ = {
    fragment: null,
    ctx: null,
    props: a,
    update: C,
    not_equal: l,
    bound: Be(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    callbacks: Be(),
    dirty: o,
    skip_bound: !1,
    root: e.target || s.$$.root,
  });
  r && r(c.root);
  let p = !1;
  if (
    ((c.ctx = n
      ? n(t, e.props || {}, (d, h, ...m) => {
          const y = m.length ? m[0] : h;
          return (
            c.ctx &&
              l(c.ctx[d], (c.ctx[d] = y)) &&
              (!c.skip_bound && c.bound[d] && c.bound[d](y), p && bt(t, d)),
            h
          );
        })
      : []),
    c.update(),
    (p = !0),
    H(c.before_update),
    (c.fragment = i ? i(c.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const d = ft(e.target);
      c.fragment && c.fragment.l(d), d.forEach(I);
    } else c.fragment && c.fragment.c();
    e.intro && F(t.$$.fragment),
      xe(t, e.target, e.anchor, e.customElement),
      st();
  }
  te(s);
}
class We {
  $destroy() {
    $e(this, 1), (this.$destroy = C);
  }
  $on(e, n) {
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const l = i.indexOf(n);
        l !== -1 && i.splice(l, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !at(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const vt = "/Tupi_transzparens.png",
  U = [];
function kt(t, e = C) {
  let n;
  const i = new Set();
  function l(o) {
    if (be(t, o) && ((t = o), n)) {
      const s = !U.length;
      for (const c of i) c[1](), U.push(c, t);
      if (s) {
        for (let c = 0; c < U.length; c += 2) U[c][0](U[c + 1]);
        U.length = 0;
      }
    }
  }
  function a(o) {
    l(o(t));
  }
  function r(o, s = C) {
    const c = [o, s];
    return (
      i.add(c),
      i.size === 1 && (n = e(l) || C),
      o(t),
      () => {
        i.delete(c), i.size === 0 && (n(), (n = null));
      }
    );
  }
  return { set: l, update: a, subscribe: r };
}
const q = kt(0);
function G() {
  return !!(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)
  );
}
function j(t, { delay: e = 0, duration: n = 400, easing: i = Ce } = {}) {
  const l = +getComputedStyle(t).opacity;
  return { delay: e, duration: n, easing: i, css: (a) => `opacity: ${a * l}` };
}
const wt = "Icons_Colors_FontIcons/twitter.ico",
  It = "Icons_Colors_FontIcons/instagram.ico",
  At = "Icons_Colors_FontIcons/yotube.ico",
  xt = "Icons_Colors_FontIcons/ko-fi.svg",
  $t = "Icons_Colors_FontIcons/bio link.ico",
  Ct = "Icons_Colors_FontIcons/mail.svg",
  Mt = "Icons_Colors_FontIcons/menu.svg";
function ze(t) {
  let e,
    n,
    i,
    l,
    a,
    r,
    o,
    s,
    c,
    p,
    d,
    h,
    m,
    y,
    v,
    b,
    M,
    W,
    A,
    E,
    O,
    L,
    S,
    k,
    P,
    K,
    w,
    T,
    oe,
    Ne,
    ae,
    Q,
    Se,
    ce,
    Y,
    ue,
    ke,
    Te;
  return {
    c() {
      (e = _("div")),
        (n = _("span")),
        (n.textContent = "Character Design"),
        (i = g()),
        (l = _("span")),
        (l.textContent = "Illustrations"),
        (a = g()),
        (r = _("span")),
        (r.textContent = "Manga"),
        (o = g()),
        (s = _("span")),
        (s.textContent = "About Me"),
        (c = g()),
        (p = _("div")),
        (d = _("a")),
        (h = _("img")),
        (y = g()),
        (v = _("a")),
        (b = _("img")),
        (W = g()),
        (A = _("a")),
        (E = _("img")),
        (L = g()),
        (S = _("a")),
        (k = _("img")),
        (K = g()),
        (w = _("a")),
        (T = _("img")),
        (Ne = g()),
        (ae = _("a")),
        (Q = _("img")),
        u(n, "class", "svelte-1yietsa"),
        u(l, "class", "svelte-1yietsa"),
        u(r, "class", "svelte-1yietsa"),
        u(s, "class", "svelte-1yietsa"),
        N(h.src, (m = wt)) || u(h, "src", m),
        u(h, "alt", "Twitter"),
        u(h, "class", "svelte-1yietsa"),
        u(d, "href", "https://twitter.com/my_lambda"),
        N(b.src, (M = It)) || u(b, "src", M),
        u(b, "alt", "Instagram"),
        u(b, "class", "svelte-1yietsa"),
        u(v, "href", "https://instagram.com/lambdart_"),
        N(E.src, (O = At)) || u(E, "src", O),
        u(E, "alt", "YouTube"),
        u(E, "class", "svelte-1yietsa"),
        u(
          A,
          "href",
          "https://www.youtube.com/channel/UCd3vo47GFeIlOjrKQqtmeqQ/featured"
        ),
        N(k.src, (P = xt)) || u(k, "src", P),
        u(k, "alt", "KoFi"),
        u(k, "class", "svelte-1yietsa"),
        u(S, "href", "https://ko-fi.com/mylambda52231"),
        N(T.src, (oe = $t)) || u(T, "src", oe),
        u(T, "alt", "BioLink"),
        D(T, "margin-right", "0"),
        u(T, "class", "svelte-1yietsa"),
        u(w, "href", "https://lambdart.bio.link/"),
        N(Q.src, (Se = Ct)) || u(Q, "src", Se),
        u(Q, "alt", "Mail"),
        u(Q, "class", "svelte-1yietsa"),
        u(ae, "href", "mailto:adamfazakas@yahoo.com"),
        u(e, "id", "menu-container-mobile"),
        u(e, "class", "svelte-1yietsa");
    },
    m(Z, ot) {
      x(Z, e, ot),
        f(e, n),
        f(e, i),
        f(e, l),
        f(e, a),
        f(e, r),
        f(e, o),
        f(e, s),
        f(e, c),
        f(e, p),
        f(p, d),
        f(d, h),
        f(p, y),
        f(p, v),
        f(v, b),
        f(p, W),
        f(p, A),
        f(A, E),
        f(p, L),
        f(p, S),
        f(S, k),
        f(p, K),
        f(p, w),
        f(w, T),
        f(p, Ne),
        f(p, ae),
        f(ae, Q),
        (ue = !0),
        ke ||
          ((Te = [
            $(n, "click", t[8]),
            $(l, "click", t[9]),
            $(r, "click", t[10]),
            $(s, "click", t[11]),
          ]),
          (ke = !0));
    },
    p: C,
    i(Z) {
      ue ||
        (z(() => {
          Y && Y.end(1), (ce = re(e, j, { duration: 80 })), ce.start();
        }),
        (ue = !0));
    },
    o(Z) {
      ce && ce.invalidate(), (Y = ie(e, j, { duration: 80 })), (ue = !1);
    },
    d(Z) {
      Z && I(e), Z && Y && Y.end(), (ke = !1), H(Te);
    },
  };
}
function Ft(t) {
  let e, n, i, l, a, r, o, s, c, p, d, h, m, y, v, b, M, W, A, E, O, L, S;
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (n.innerHTML =
          '<span id="menu-title" class="svelte-1yietsa">FAZAKAS \xC1D\xC1M</span>'),
        (i = g()),
        (l = _("div")),
        (a = _("span")),
        (r = ee("\xA0 concept art \xA0")),
        (s = g()),
        (c = _("span")),
        (p = ee("\xA0 illustration \xA0")),
        (h = g()),
        (m = _("span")),
        (y = ee("\xA0 manga \xA0")),
        (b = g()),
        (M = _("span")),
        (M.textContent = "\xA0 about me"),
        (W = g()),
        (A = _("div")),
        (E = _("span")),
        (E.textContent = "haha"),
        u(n, "id", "menu-container-left"),
        u(n, "class", "svelte-1yietsa"),
        u(a, "class", "menu-box-buttons svelte-1yietsa"),
        u(a, "style", (o = t[1] === 0 ? "border-left: 1px solid black;" : "")),
        u(c, "class", "menu-box-buttons svelte-1yietsa"),
        u(c, "style", (d = t[1] === 1 ? "border-left: 1px solid black;" : "")),
        u(m, "class", "menu-box-buttons svelte-1yietsa"),
        u(m, "style", (v = t[1] === 2 ? "border-left: 1px solid black;" : "")),
        u(M, "class", "svelte-1yietsa"),
        u(E, "class", "svelte-1yietsa"),
        u(A, "id", "menu-box"),
        u(
          A,
          "style",
          (O =
            t[1] >= 0
              ? t[3]
                ? `left: ${t[2]}px; transition: 0s; animation: fadein 1s ease;`
                : `left: ${t[2]}px;  animation: fadein 1s ease;`
              : `left: ${t[2]}px; visibility: hidden;`)
        ),
        u(A, "class", "svelte-1yietsa"),
        u(l, "id", "menu-container-middle"),
        u(l, "class", "svelte-1yietsa"),
        u(e, "id", "menu-container"),
        u(e, "class", "svelte-1yietsa");
    },
    m(k, P) {
      x(k, e, P),
        f(e, n),
        f(e, i),
        f(e, l),
        f(l, a),
        f(a, r),
        f(l, s),
        f(l, c),
        f(c, p),
        f(l, h),
        f(l, m),
        f(m, y),
        f(l, b),
        f(l, M),
        f(l, W),
        f(l, A),
        f(A, E),
        L ||
          ((S = [
            $(a, "click", t[13]),
            $(a, "mouseenter", t[14]),
            $(a, "mouseleave", t[15]),
            $(c, "click", t[16]),
            $(c, "mouseenter", t[17]),
            $(c, "mouseleave", t[18]),
            $(m, "click", t[19]),
            $(m, "mouseenter", t[20]),
            $(m, "mouseleave", t[21]),
            $(M, "click", t[22]),
            $(A, "mouseleave", t[6]),
            $(A, "mouseenter", t[23]),
          ]),
          (L = !0));
    },
    p(k, P) {
      P & 2 &&
        o !== (o = k[1] === 0 ? "border-left: 1px solid black;" : "") &&
        u(a, "style", o),
        P & 2 &&
          d !== (d = k[1] === 1 ? "border-left: 1px solid black;" : "") &&
          u(c, "style", d),
        P & 2 &&
          v !== (v = k[1] === 2 ? "border-left: 1px solid black;" : "") &&
          u(m, "style", v),
        P & 14 &&
          O !==
            (O =
              k[1] >= 0
                ? k[3]
                  ? `left: ${k[2]}px; transition: 0s; animation: fadein 1s ease;`
                  : `left: ${k[2]}px;  animation: fadein 1s ease;`
                : `left: ${k[2]}px; visibility: hidden;`) &&
          u(A, "style", O);
    },
    d(k) {
      k && I(e), (L = !1), H(S);
    },
  };
}
function Pt(t) {
  let e, n, i, l, a, r, o;
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (n.innerHTML =
          '<span id="menu-title" style="margin: 0;" class="svelte-1yietsa">FAZAKAS \xC1D\xC1M</span>'),
        (i = g()),
        (l = _("img")),
        D(n, "padding", "10px"),
        N(l.src, (a = Mt)) || u(l, "src", a),
        u(l, "alt", "menu"),
        u(l, "style", "50px; height: 50px; margin-left: 10px;"),
        u(l, "class", "svelte-1yietsa"),
        u(e, "id", "menu-container"),
        D(e, "display", "flex"),
        D(e, "justify-content", "center"),
        D(e, "position", "fixed"),
        u(e, "class", "svelte-1yietsa");
    },
    m(s, c) {
      x(s, e, c),
        f(e, n),
        f(e, i),
        f(e, l),
        r || ((o = $(l, "click", t[12])), (r = !0));
    },
    p: C,
    d(s) {
      s && I(e), (r = !1), o();
    },
  };
}
function Et(t) {
  let e,
    n,
    i,
    l = t[0] && ze(t);
  function a(s, c) {
    return G() ? Pt : Ft;
  }
  let o = a()(t);
  return {
    c() {
      l && l.c(), (e = g()), o.c(), (n = ne());
    },
    m(s, c) {
      l && l.m(s, c), x(s, e, c), o.m(s, c), x(s, n, c), (i = !0);
    },
    p(s, [c]) {
      s[0]
        ? l
          ? (l.p(s, c), c & 1 && F(l, 1))
          : ((l = ze(s)), l.c(), F(l, 1), l.m(e.parentNode, e))
        : l &&
          (le(),
          B(l, 1, 1, () => {
            l = null;
          }),
          se()),
        o.p(s, c);
    },
    i(s) {
      i || (F(l), (i = !0));
    },
    o(s) {
      B(l), (i = !1);
    },
    d(s) {
      l && l.d(s), s && I(e), o.d(s), s && I(n);
    },
  };
}
function Wt(t, e, n) {
  let i = !1,
    l = -1,
    a = 0,
    r = !0,
    o = !0;
  function s(w, T) {
    let oe = w.target.getBoundingClientRect();
    n(1, (l = T)), n(2, (a = oe.left)), console.log(T);
  }
  function c() {
    let w = l;
    setTimeout(() => {
      l === w && n(1, (l = -1));
    }, 500),
      n(4, (o = !0)),
      n(3, (r = !1));
  }
  function p(w) {
    n(3, (r = !1)),
      setTimeout(() => {
        l === w && o && n(1, (l = -1));
      }, 100);
  }
  return [
    i,
    l,
    a,
    r,
    o,
    s,
    c,
    p,
    () => {
      q.set(0), n(0, (i = !1));
    },
    () => {
      q.set(1), n(0, (i = !1));
    },
    () => {
      q.set(2), n(0, (i = !1));
    },
    () => {
      q.set(3), n(0, (i = !1));
    },
    () => {
      n(0, (i = !0));
    },
    () => {
      q.set(0);
    },
    (w) => {
      s(w, 0);
    },
    () => {
      p(0);
    },
    () => {
      q.set(1);
    },
    (w) => {
      s(w, 1);
    },
    () => {
      p(1);
    },
    () => {
      q.set(2);
    },
    (w) => {
      s(w, 2);
    },
    () => {
      p(2);
    },
    () => {
      q.set(3);
    },
    () => {
      n(4, (o = !1));
    },
  ];
}
class Nt extends We {
  constructor(e) {
    super(), Ee(this, e, Wt, Et, be, {});
  }
}
const St = "Artworks/Illustrations/Parallax.png",
  Tt = St,
  je = [
    "Artworks/Character Design/Ava.png",
    "Artworks/Character Design/Tupi.png",
  ],
  ye = [
    "Artworks/Illustrations/Birb.png",
    "Artworks/Illustrations/Cold Breeze.png",
    "Artworks/Illustrations/Forever change.png",
    "Artworks/Illustrations/Summer.png",
    "Artworks/Illustrations/Wings.png",
  ],
  Bt = [
    "Artworks/Manga/I_Who Forbids me/1.png",
    "Artworks/Manga/I_Who Forbids me/2.png",
    "Artworks/Manga/I_Who Forbids me/3.png",
    "Artworks/Manga/I_Who Forbids me/4.png",
    "Artworks/Manga/I_Who Forbids me/5.png",
    "Artworks/Manga/I_Who Forbids me/6.png",
    "Artworks/Manga/I_Who Forbids me/7.png",
  ],
  qe = [
    "Artworks/Manga/I_Who Forbids me/compressed/1.png",
    "Artworks/Manga/I_Who Forbids me/compressed/2.png",
    "Artworks/Manga/I_Who Forbids me/compressed/3.png",
    "Artworks/Manga/I_Who Forbids me/compressed/4.png",
    "Artworks/Manga/I_Who Forbids me/compressed/5.png",
    "Artworks/Manga/I_Who Forbids me/compressed/6.png",
    "Artworks/Manga/I_Who Forbids me/compressed/7.png",
  ];
function Ke(t, e, n) {
  const i = t.slice();
  return (i[5] = e[n]), i;
}
function Re(t, e, n) {
  const i = t.slice();
  return (i[5] = e[n]), (i[11] = n), i;
}
function He(t, e, n) {
  const i = t.slice();
  return (i[5] = e[n]), i;
}
function Ge(t, e, n) {
  const i = t.slice();
  return (i[5] = e[n]), i;
}
function Qe(t) {
  let e, n, i, l, a;
  return {
    c() {
      (e = _("div")),
        (n = _("img")),
        N(n.src, (i = t[1])) || u(n, "src", i),
        u(n, "alt", t[1]),
        u(n, "class", "svelte-ys57fl"),
        u(e, "id", "dialog"),
        u(e, "class", "svelte-ys57fl");
    },
    m(r, o) {
      x(r, e, o), f(e, n), l || ((a = $(e, "click", t[3])), (l = !0));
    },
    p(r, o) {
      o & 2 && !N(n.src, (i = r[1])) && u(n, "src", i),
        o & 2 && u(n, "alt", r[1]);
    },
    d(r) {
      r && I(e), (l = !1), a();
    },
  };
}
function Ot(t) {
  let e;
  return {
    c() {
      (e = _("div")),
        u(e, "id", "parallax"),
        u(e, "style", `background-image: url(${Tt})`),
        u(e, "class", "svelte-ys57fl");
    },
    m(n, i) {
      x(n, e, i);
    },
    p: C,
    d(n) {
      n && I(e);
    },
  };
}
function Dt(t) {
  let e,
    n = ye,
    i = [];
  for (let l = 0; l < n.length; l += 1) i[l] = Ze(Ke(t, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1) i[l].c();
      e = ne();
    },
    m(l, a) {
      for (let r = 0; r < i.length; r += 1) i[r].m(l, a);
      x(l, e, a);
    },
    p(l, a) {
      if (a & 0) {
        n = ye;
        let r;
        for (r = 0; r < n.length; r += 1) {
          const o = Ke(l, n, r);
          i[r]
            ? i[r].p(o, a)
            : ((i[r] = Ze(o)), i[r].c(), i[r].m(e.parentNode, e));
        }
        for (; r < i.length; r += 1) i[r].d(1);
        i.length = n.length;
      }
    },
    i: C,
    o: C,
    d(l) {
      ve(i, l), l && I(e);
    },
  };
}
function Lt(t) {
  let e,
    n,
    i,
    l,
    a,
    r,
    o,
    s,
    c,
    p,
    d,
    h,
    m,
    y,
    v,
    b,
    M,
    W,
    A,
    E,
    O,
    L,
    S,
    k,
    P,
    K;
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (i = _("span")),
        (i.textContent = "Heyho!"),
        (l = g()),
        (a = _("br")),
        (r = _("br")),
        (o = g()),
        (s = _("span")),
        (s.textContent = `\xA0\xA0\xA0\xA0I'm an aspiring art student in a university
          studying Graphics Art on a masters degree. I also have 4 years of
          basic Visual Arts (sculpting, painting, printmaking, drawing etc.)
          highschool degree with 2 years of graphics art/printmaking
          specialization.`),
        (c = g()),
        (p = _("br")),
        (d = _("br")),
        (h = g()),
        (m = _("span")),
        (m.textContent = `\xA0\xA0\xA0\xA0My interests are Character Design, Digital
          Illustration/Painting in the style of mixing anime/manga styles with
          realism/semi-realism and making manga. I tend to be experimental at
          times and I'm open to different art styles.`),
        (y = g()),
        (v = _("br")),
        (b = _("br")),
        (M = g()),
        (W = _("span")),
        (W.textContent = `\xA0\xA0\xA0\xA0Currently I'm trying to improve as much as I
          can; build relationships, do commissions/freelance jobs and keep
          adding to my portfolio to make it look as professional as I can.`),
        (A = g()),
        (E = _("br")),
        (O = _("br")),
        (L = g()),
        (S = _("span")),
        (S.textContent =
          "Thank you for visiting my page, I appreciate it a lot!"),
        u(n, "style", G() ? "" : "width: 800px; font-size: x-large;"),
        D(e, "display", "grid"),
        D(e, "justify-items", "center"),
        D(e, "align-items", "center"),
        D(e, "height", "100%"),
        D(e, "width", "100%"),
        D(e, "margin-top", "50px");
    },
    m(w, T) {
      x(w, e, T),
        f(e, n),
        f(n, i),
        f(n, l),
        f(n, a),
        f(n, r),
        f(n, o),
        f(n, s),
        f(n, c),
        f(n, p),
        f(n, d),
        f(n, h),
        f(n, m),
        f(n, y),
        f(n, v),
        f(n, b),
        f(n, M),
        f(n, W),
        f(n, A),
        f(n, E),
        f(n, O),
        f(n, L),
        f(n, S),
        (K = !0);
    },
    p: C,
    i(w) {
      K ||
        (z(() => {
          P && P.end(1), (k = re(e, j, { duration: 500 })), k.start();
        }),
        (K = !0));
    },
    o(w) {
      k && k.invalidate(), (P = ie(e, j, { duration: 250 })), (K = !1);
    },
    d(w) {
      w && I(e), w && P && P.end();
    },
  };
}
function zt(t) {
  let e,
    n,
    i = qe,
    l = [];
  for (let r = 0; r < i.length; r += 1) l[r] = Ue(Re(t, i, r));
  const a = (r) =>
    B(l[r], 1, 1, () => {
      l[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < l.length; r += 1) l[r].c();
      e = ne();
    },
    m(r, o) {
      for (let s = 0; s < l.length; s += 1) l[s].m(r, o);
      x(r, e, o), (n = !0);
    },
    p(r, o) {
      if (o & 6) {
        i = qe;
        let s;
        for (s = 0; s < i.length; s += 1) {
          const c = Re(r, i, s);
          l[s]
            ? (l[s].p(c, o), F(l[s], 1))
            : ((l[s] = Ue(c)), l[s].c(), F(l[s], 1), l[s].m(e.parentNode, e));
        }
        for (le(), s = i.length; s < l.length; s += 1) a(s);
        se();
      }
    },
    i(r) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1) F(l[o]);
        n = !0;
      }
    },
    o(r) {
      l = l.filter(Boolean);
      for (let o = 0; o < l.length; o += 1) B(l[o]);
      n = !1;
    },
    d(r) {
      ve(l, r), r && I(e);
    },
  };
}
function jt(t) {
  let e,
    n,
    i = ye,
    l = [];
  for (let r = 0; r < i.length; r += 1) l[r] = Ve(He(t, i, r));
  const a = (r) =>
    B(l[r], 1, 1, () => {
      l[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < l.length; r += 1) l[r].c();
      e = ne();
    },
    m(r, o) {
      for (let s = 0; s < l.length; s += 1) l[s].m(r, o);
      x(r, e, o), (n = !0);
    },
    p(r, o) {
      if (o & 0) {
        i = ye;
        let s;
        for (s = 0; s < i.length; s += 1) {
          const c = He(r, i, s);
          l[s]
            ? (l[s].p(c, o), F(l[s], 1))
            : ((l[s] = Ve(c)), l[s].c(), F(l[s], 1), l[s].m(e.parentNode, e));
        }
        for (le(), s = i.length; s < l.length; s += 1) a(s);
        se();
      }
    },
    i(r) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1) F(l[o]);
        n = !0;
      }
    },
    o(r) {
      l = l.filter(Boolean);
      for (let o = 0; o < l.length; o += 1) B(l[o]);
      n = !1;
    },
    d(r) {
      ve(l, r), r && I(e);
    },
  };
}
function qt(t) {
  let e,
    n,
    i = je,
    l = [];
  for (let r = 0; r < i.length; r += 1) l[r] = Ye(Ge(t, i, r));
  const a = (r) =>
    B(l[r], 1, 1, () => {
      l[r] = null;
    });
  return {
    c() {
      for (let r = 0; r < l.length; r += 1) l[r].c();
      e = ne();
    },
    m(r, o) {
      for (let s = 0; s < l.length; s += 1) l[s].m(r, o);
      x(r, e, o), (n = !0);
    },
    p(r, o) {
      if (o & 0) {
        i = je;
        let s;
        for (s = 0; s < i.length; s += 1) {
          const c = Ge(r, i, s);
          l[s]
            ? (l[s].p(c, o), F(l[s], 1))
            : ((l[s] = Ye(c)), l[s].c(), F(l[s], 1), l[s].m(e.parentNode, e));
        }
        for (le(), s = i.length; s < l.length; s += 1) a(s);
        se();
      }
    },
    i(r) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1) F(l[o]);
        n = !0;
      }
    },
    o(r) {
      l = l.filter(Boolean);
      for (let o = 0; o < l.length; o += 1) B(l[o]);
      n = !1;
    },
    d(r) {
      ve(l, r), r && I(e);
    },
  };
}
function Ze(t) {
  let e, n;
  return {
    c() {
      (e = _("img")),
        N(e.src, (n = t[5])) || u(e, "src", n),
        u(e, "alt", "art"),
        u(e, "class", "svelte-ys57fl");
    },
    m(i, l) {
      x(i, e, l);
    },
    p: C,
    d(i) {
      i && I(e);
    },
  };
}
function Ue(t) {
  let e, n, i, l, a, r, o, s, c;
  function p() {
    return t[4](t[11]);
  }
  return {
    c() {
      (e = _("div")),
        (n = _("img")),
        (l = g()),
        N(n.src, (i = t[5])) || u(n, "src", i),
        u(n, "alt", "art"),
        u(n, "style", G() ? "max-width: 100vw; max-height: fit-content;" : ""),
        u(n, "class", "svelte-ys57fl");
    },
    m(d, h) {
      x(d, e, h),
        f(e, n),
        f(e, l),
        (o = !0),
        s || ((c = $(e, "click", p)), (s = !0));
    },
    p(d, h) {
      t = d;
    },
    i(d) {
      o ||
        (z(() => {
          r && r.end(1), (a = re(e, j, { duration: 500 })), a.start();
        }),
        (o = !0));
    },
    o(d) {
      a && a.invalidate(), (r = ie(e, j, { duration: 250 })), (o = !1);
    },
    d(d) {
      d && I(e), d && r && r.end(), (s = !1), c();
    },
  };
}
function Ve(t) {
  let e, n, i, l, a, r, o;
  return {
    c() {
      (e = _("div")),
        (n = _("img")),
        (l = g()),
        N(n.src, (i = t[5])) || u(n, "src", i),
        u(n, "alt", "art"),
        u(n, "style", G() ? "max-width: 100vw; max-height: fit-content;" : ""),
        u(n, "class", "svelte-ys57fl");
    },
    m(s, c) {
      x(s, e, c), f(e, n), f(e, l), (o = !0);
    },
    p: C,
    i(s) {
      o ||
        (z(() => {
          r && r.end(1), (a = re(e, j, { duration: 500 })), a.start();
        }),
        (o = !0));
    },
    o(s) {
      a && a.invalidate(), (r = ie(e, j, { duration: 250 })), (o = !1);
    },
    d(s) {
      s && I(e), s && r && r.end();
    },
  };
}
function Ye(t) {
  let e, n, i, l, a, r, o, s, c;
  return {
    c() {
      (e = _("div")),
        (n = _("img")),
        (l = g()),
        (a = _("div")),
        (a.innerHTML = "<span>hey</span>"),
        (r = g()),
        N(n.src, (i = t[5])) || u(n, "src", i),
        u(n, "alt", "art"),
        u(n, "style", G() ? "max-width: 100vw; max-height: fit-content;" : ""),
        u(n, "class", "svelte-ys57fl"),
        u(a, "class", "svelte-ys57fl"),
        u(e, "class", "items svelte-ys57fl");
    },
    m(p, d) {
      x(p, e, d), f(e, n), f(e, l), f(e, a), f(e, r), (c = !0);
    },
    p: C,
    i(p) {
      c ||
        (z(() => {
          s && s.end(1), (o = re(e, j, { duration: 500 })), o.start();
        }),
        (c = !0));
    },
    o(p) {
      o && o.invalidate(), (s = ie(e, j, { duration: 250 })), (c = !1);
    },
    d(p) {
      p && I(e), p && s && s.end();
    },
  };
}
function Kt(t) {
  let e,
    n,
    i = !G(),
    l,
    a,
    r,
    o,
    s = t[2] && Qe(t),
    c = i && Ot();
  const p = [qt, jt, zt, Lt, Dt],
    d = [];
  function h(m, y) {
    return m[0] === 0
      ? 0
      : m[0] === 1
      ? 1
      : m[0] === 2
      ? 2
      : m[0] === 3
      ? 3
      : 4;
  }
  return (
    (a = h(t)),
    (r = d[a] = p[a](t)),
    {
      c() {
        s && s.c(),
          (e = g()),
          (n = _("div")),
          c && c.c(),
          (l = g()),
          r.c(),
          u(n, "id", "showcasetype-container"),
          u(n, "style", G() ? "margin-top: 50px;" : ""),
          u(n, "class", "svelte-ys57fl");
      },
      m(m, y) {
        s && s.m(m, y),
          x(m, e, y),
          x(m, n, y),
          c && c.m(n, null),
          f(n, l),
          d[a].m(n, null),
          (o = !0);
      },
      p(m, [y]) {
        m[2]
          ? s
            ? s.p(m, y)
            : ((s = Qe(m)), s.c(), s.m(e.parentNode, e))
          : s && (s.d(1), (s = null)),
          i && c.p(m, y);
        let v = a;
        (a = h(m)),
          a === v
            ? d[a].p(m, y)
            : (le(),
              B(d[v], 1, 1, () => {
                d[v] = null;
              }),
              se(),
              (r = d[a]),
              r ? r.p(m, y) : ((r = d[a] = p[a](m)), r.c()),
              F(r, 1),
              r.m(n, null));
      },
      i(m) {
        o || (F(r), (o = !0));
      },
      o(m) {
        B(r), (o = !1);
      },
      d(m) {
        s && s.d(m), m && I(e), m && I(n), c && c.d(), d[a].d();
      },
    }
  );
}
function Rt(t, e, n) {
  let i = 0,
    l = "";
  q.subscribe((s) => {
    n(0, (i = s));
  });
  let a = !1;
  return [
    i,
    l,
    a,
    () => {
      n(2, (a = !1));
    },
    (s) => {
      n(1, (l = Bt[s])), n(2, (a = !0));
    },
  ];
}
class Ht extends We {
  constructor(e) {
    super(), Ee(this, e, Rt, Kt, be, {});
  }
}
function Gt(t) {
  let e, n, i, l, a, r, o;
  return (
    (n = new Nt({})),
    (l = new Ht({})),
    {
      c() {
        (e = _("main")),
          Le(n.$$.fragment),
          (i = g()),
          Le(l.$$.fragment),
          (a = g()),
          (r = _("link")),
          u(e, "class", "svelte-te6mq0"),
          u(r, "rel", "icon"),
          u(r, "href", vt);
      },
      m(s, c) {
        x(s, e, c),
          xe(n, e, null),
          f(e, i),
          xe(l, e, null),
          x(s, a, c),
          f(document.head, r),
          (o = !0);
      },
      p: C,
      i(s) {
        o || (F(n.$$.fragment, s), F(l.$$.fragment, s), (o = !0));
      },
      o(s) {
        B(n.$$.fragment, s), B(l.$$.fragment, s), (o = !1);
      },
      d(s) {
        s && I(e), $e(n), $e(l), s && I(a), I(r);
      },
    }
  );
}
class Qt extends We {
  constructor(e) {
    super(), Ee(this, e, null, Gt, be, {});
  }
}
new Qt({ target: document.getElementById("app") });
