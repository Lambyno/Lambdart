(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
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
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const a = n(l);
    fetch(l.href, a);
  }
})();
function $() {}
const ke = (t) => t;
function Ge(t) {
  return t();
}
function ze() {
  return Object.create(null);
}
function F(t) {
  t.forEach(Ge);
}
function Se(t) {
  return typeof t == "function";
}
function _e(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let se;
function E(t, e) {
  return se || (se = document.createElement("a")), (se.href = e), t === se.href;
}
function tt(t) {
  return Object.keys(t).length === 0;
}
const Qe = typeof window < "u";
let We = Qe ? () => window.performance.now() : () => Date.now(),
  Oe = Qe ? (t) => requestAnimationFrame(t) : $;
const G = new Set();
function Ze(t) {
  G.forEach((e) => {
    e.c(t) || (G.delete(e), e.f());
  }),
    G.size !== 0 && Oe(Ze);
}
function Ue(t) {
  let e;
  return (
    G.size === 0 && Oe(Ze),
    {
      promise: new Promise((n) => {
        G.add((e = { c: t, f: n }));
      }),
      abort() {
        G.delete(e);
      },
    }
  );
}
function u(t, e) {
  t.appendChild(e);
}
function nt(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function lt(t, e) {
  return u(t.head || t, e), e.sheet;
}
function S(t, e, n) {
  t.insertBefore(e, n || null);
}
function y(t) {
  t.parentNode.removeChild(t);
}
function de(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function _(t) {
  return document.createElement(t);
}
function Y(t) {
  return document.createTextNode(t);
}
function g() {
  return Y(" ");
}
function X() {
  return Y("");
}
function x(t, e, n, s) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s);
}
function f(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function st(t) {
  return Array.from(t.childNodes);
}
function I(t, e, n, s) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, s ? "important" : "");
}
function ot(t, e, { bubbles: n = !1, cancelable: s = !1 } = {}) {
  const l = document.createEvent("CustomEvent");
  return l.initCustomEvent(t, n, s, e), l;
}
const ae = new Map();
let ce = 0;
function rt(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function it(t) {
  const e = { style_element: _("style"), rules: {} };
  return ae.set(t, e), e;
}
function Ve(t, e, n, s, l, a, i, o = 0) {
  const c = 16.666 / s;
  let r = `{
`;
  for (let b = 0; b <= 1; b += c) {
    const w = e + (n - e) * a(b);
    r +=
      b * 100 +
      `%{${i(w, 1 - w)}}
`;
  }
  const d =
      r +
      `100% {${i(n, 1 - n)}}
}`,
    m = `__svelte_${rt(d)}_${o}`,
    h = nt(t),
    { style_element: p, rules: O } = ae.get(h) || it(h);
  if (!O[m]) {
    const b = lt(h, p);
    (O[m] = !0), b.insertRule(`@keyframes ${m} ${d}`, b.cssRules.length);
  }
  const k = t.style.animation || "";
  return (
    (t.style.animation = `${
      k ? `${k}, ` : ""
    }${m} ${s}ms linear ${l}ms 1 both`),
    (ce += 1),
    m
  );
}
function be(t, e) {
  const n = (t.style.animation || "").split(", "),
    s = n.filter(
      e ? (a) => a.indexOf(e) < 0 : (a) => a.indexOf("__svelte") === -1
    ),
    l = n.length - s.length;
  l && ((t.style.animation = s.join(", ")), (ce -= l), ce || at());
}
function at() {
  Oe(() => {
    ce ||
      (ae.forEach((t) => {
        const { style_element: e } = t;
        y(e);
      }),
      ae.clear());
  });
}
let je;
function J(t) {
  je = t;
}
const V = [],
  Ce = [],
  re = [],
  Ae = [],
  ct = Promise.resolve();
let he = !1;
function ft() {
  he || ((he = !0), ct.then(Ye));
}
function W(t) {
  re.push(t);
}
const ge = new Set();
let oe = 0;
function Ye() {
  const t = je;
  do {
    for (; oe < V.length; ) {
      const e = V[oe];
      oe++, J(e), ut(e.$$);
    }
    for (J(null), V.length = 0, oe = 0; Ce.length; ) Ce.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const n = re[e];
      ge.has(n) || (ge.add(n), n());
    }
    re.length = 0;
  } while (V.length);
  for (; Ae.length; ) Ae.pop()();
  (he = !1), ge.clear(), J(t);
}
function ut(t) {
  if (t.fragment !== null) {
    t.update(), F(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(W);
  }
}
let U;
function Je() {
  return (
    U ||
      ((U = Promise.resolve()),
      U.then(() => {
        U = null;
      })),
    U
  );
}
function fe(t, e, n) {
  t.dispatchEvent(ot(`${e ? "intro" : "outro"}${n}`));
}
const ie = new Set();
let D;
function _t() {
  D = { r: 0, c: [], p: D };
}
function dt() {
  D.r || F(D.c), (D = D.p);
}
function Q(t, e) {
  t && t.i && (ie.delete(t), t.i(e));
}
function ue(t, e, n, s) {
  if (t && t.o) {
    if (ie.has(t)) return;
    ie.add(t),
      D.c.push(() => {
        ie.delete(t), s && (n && t.d(1), s());
      }),
      t.o(e);
  } else s && s();
}
const Xe = { duration: 0 };
function mt(t, e, n) {
  let s = e(t, n),
    l = !1,
    a,
    i,
    o = 0;
  function c() {
    a && be(t, a);
  }
  function r() {
    const {
      delay: m = 0,
      duration: h = 300,
      easing: p = ke,
      tick: O = $,
      css: k,
    } = s || Xe;
    k && (a = Ve(t, 0, 1, h, m, p, k, o++)), O(0, 1);
    const b = We() + m,
      w = b + h;
    i && i.abort(),
      (l = !0),
      W(() => fe(t, !0, "start")),
      (i = Ue((T) => {
        if (l) {
          if (T >= w) return O(1, 0), fe(t, !0, "end"), c(), (l = !1);
          if (T >= b) {
            const j = p((T - b) / h);
            O(j, 1 - j);
          }
        }
        return l;
      }));
  }
  let d = !1;
  return {
    start() {
      d || ((d = !0), be(t), Se(s) ? ((s = s()), Je().then(r)) : r());
    },
    invalidate() {
      d = !1;
    },
    end() {
      l && (c(), (l = !1));
    },
  };
}
function pt(t, e, n) {
  let s = e(t, n),
    l = !0,
    a;
  const i = D;
  i.r += 1;
  function o() {
    const {
      delay: c = 0,
      duration: r = 300,
      easing: d = ke,
      tick: m = $,
      css: h,
    } = s || Xe;
    h && (a = Ve(t, 1, 0, r, c, d, h));
    const p = We() + c,
      O = p + r;
    W(() => fe(t, !1, "start")),
      Ue((k) => {
        if (l) {
          if (k >= O) return m(0, 1), fe(t, !1, "end"), --i.r || F(i.c), !1;
          if (k >= p) {
            const b = d((k - p) / r);
            m(1 - b, b);
          }
        }
        return l;
      });
  }
  return (
    Se(s)
      ? Je().then(() => {
          (s = s()), o();
        })
      : o(),
    {
      end(c) {
        c && s.tick && s.tick(1, 0), l && (a && be(t, a), (l = !1));
      },
    }
  );
}
function Ee(t) {
  t && t.c();
}
function ye(t, e, n, s) {
  const { fragment: l, on_mount: a, on_destroy: i, after_update: o } = t.$$;
  l && l.m(e, n),
    s ||
      W(() => {
        const c = a.map(Ge).filter(Se);
        i ? i.push(...c) : F(c), (t.$$.on_mount = []);
      }),
    o.forEach(W);
}
function ve(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (F(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function gt(t, e) {
  t.$$.dirty[0] === -1 && (V.push(t), ft(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function $e(t, e, n, s, l, a, i, o = [-1]) {
  const c = je;
  J(t);
  const r = (t.$$ = {
    fragment: null,
    ctx: null,
    props: a,
    update: $,
    not_equal: l,
    bound: ze(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: ze(),
    dirty: o,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  i && i(r.root);
  let d = !1;
  if (
    ((r.ctx = n
      ? n(t, e.props || {}, (m, h, ...p) => {
          const O = p.length ? p[0] : h;
          return (
            r.ctx &&
              l(r.ctx[m], (r.ctx[m] = O)) &&
              (!r.skip_bound && r.bound[m] && r.bound[m](O), d && gt(t, m)),
            h
          );
        })
      : []),
    r.update(),
    (d = !0),
    F(r.before_update),
    (r.fragment = s ? s(r.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const m = st(e.target);
      r.fragment && r.fragment.l(m), m.forEach(y);
    } else r.fragment && r.fragment.c();
    e.intro && Q(t.$$.fragment),
      ye(t, e.target, e.anchor, e.customElement),
      Ye();
  }
  J(c);
}
class we {
  $destroy() {
    ve(this, 1), (this.$destroy = $);
  }
  $on(e, n) {
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      s.push(n),
      () => {
        const l = s.indexOf(n);
        l !== -1 && s.splice(l, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !tt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const bt = "assets/Tupi_transzparens.eb915127.png",
  H = [];
function ht(t, e = $) {
  let n;
  const s = new Set();
  function l(o) {
    if (_e(t, o) && ((t = o), n)) {
      const c = !H.length;
      for (const r of s) r[1](), H.push(r, t);
      if (c) {
        for (let r = 0; r < H.length; r += 2) H[r][0](H[r + 1]);
        H.length = 0;
      }
    }
  }
  function a(o) {
    l(o(t));
  }
  function i(o, c = $) {
    const r = [o, c];
    return (
      s.add(r),
      s.size === 1 && (n = e(l) || $),
      o(t),
      () => {
        s.delete(r), s.size === 0 && (n(), (n = null));
      }
    );
  }
  return { set: l, update: a, subscribe: i };
}
const L = ht(0);
function q() {
  return !!(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)
  );
}
function Ie(t, { delay: e = 0, duration: n = 400, easing: s = ke } = {}) {
  const l = +getComputedStyle(t).opacity;
  return { delay: e, duration: n, easing: s, css: (a) => `opacity: ${a * l}` };
}
const yt = "assets/twitter.d4821181.ico",
  vt = "assets/instagram.da148083.ico",
  kt = "assets/yotube.fc4f9f9a.ico",
  St = "assets/ko-fi.0eba1ab1.svg",
  Ot = "assets/bio link.055fe60b.ico",
  jt = "assets/mail.b9f09322.svg",
  $t = "assets/menu.1c0dc877.svg";
function Ne(t) {
  let e,
    n,
    s,
    l,
    a,
    i,
    o,
    c,
    r,
    d,
    m,
    h,
    p,
    O,
    k,
    b,
    w,
    T,
    j,
    M,
    A,
    N,
    z,
    v,
    C,
    me,
    P,
    B,
    ee,
    Pe,
    te,
    K,
    Me,
    ne,
    Z,
    le,
    pe,
    Te;
  return {
    c() {
      (e = _("div")),
        (n = _("span")),
        (n.textContent = "Character Design"),
        (s = g()),
        (l = _("span")),
        (l.textContent = "Illustrations"),
        (a = g()),
        (i = _("span")),
        (i.textContent = "Manga"),
        (o = g()),
        (c = _("span")),
        (c.textContent = "About Me"),
        (r = g()),
        (d = _("div")),
        (m = _("a")),
        (h = _("img")),
        (O = g()),
        (k = _("a")),
        (b = _("img")),
        (T = g()),
        (j = _("a")),
        (M = _("img")),
        (N = g()),
        (z = _("a")),
        (v = _("img")),
        (me = g()),
        (P = _("a")),
        (B = _("img")),
        (Pe = g()),
        (te = _("a")),
        (K = _("img")),
        f(n, "class", "svelte-1yietsa"),
        f(l, "class", "svelte-1yietsa"),
        f(i, "class", "svelte-1yietsa"),
        f(c, "class", "svelte-1yietsa"),
        E(h.src, (p = yt)) || f(h, "src", p),
        f(h, "alt", "Twitter"),
        f(h, "class", "svelte-1yietsa"),
        f(m, "href", "https://twitter.com/my_lambda"),
        E(b.src, (w = vt)) || f(b, "src", w),
        f(b, "alt", "Instagram"),
        f(b, "class", "svelte-1yietsa"),
        f(k, "href", "https://instagram.com/lambdart_"),
        E(M.src, (A = kt)) || f(M, "src", A),
        f(M, "alt", "YouTube"),
        f(M, "class", "svelte-1yietsa"),
        f(
          j,
          "href",
          "https://www.youtube.com/channel/UCd3vo47GFeIlOjrKQqtmeqQ/featured"
        ),
        E(v.src, (C = St)) || f(v, "src", C),
        f(v, "alt", "KoFi"),
        f(v, "class", "svelte-1yietsa"),
        f(z, "href", "https://ko-fi.com/mylambda52231"),
        E(B.src, (ee = Ot)) || f(B, "src", ee),
        f(B, "alt", "BioLink"),
        I(B, "margin-right", "0"),
        f(B, "class", "svelte-1yietsa"),
        f(P, "href", "https://lambdart.bio.link/"),
        E(K.src, (Me = jt)) || f(K, "src", Me),
        f(K, "alt", "Mail"),
        f(K, "class", "svelte-1yietsa"),
        f(te, "href", "mailto:adamfazakas@yahoo.com"),
        f(e, "id", "menu-container-mobile"),
        f(e, "class", "svelte-1yietsa");
    },
    m(R, et) {
      S(R, e, et),
        u(e, n),
        u(e, s),
        u(e, l),
        u(e, a),
        u(e, i),
        u(e, o),
        u(e, c),
        u(e, r),
        u(e, d),
        u(d, m),
        u(m, h),
        u(d, O),
        u(d, k),
        u(k, b),
        u(d, T),
        u(d, j),
        u(j, M),
        u(d, N),
        u(d, z),
        u(z, v),
        u(d, me),
        u(d, P),
        u(P, B),
        u(d, Pe),
        u(d, te),
        u(te, K),
        (le = !0),
        pe ||
          ((Te = [
            x(n, "click", t[8]),
            x(l, "click", t[9]),
            x(i, "click", t[10]),
            x(c, "click", t[11]),
          ]),
          (pe = !0));
    },
    p: $,
    i(R) {
      le ||
        (W(() => {
          Z && Z.end(1), (ne = mt(e, Ie, { duration: 80 })), ne.start();
        }),
        (le = !0));
    },
    o(R) {
      ne && ne.invalidate(), (Z = pt(e, Ie, { duration: 80 })), (le = !1);
    },
    d(R) {
      R && y(e), R && Z && Z.end(), (pe = !1), F(Te);
    },
  };
}
function wt(t) {
  let e, n, s, l, a, i, o, c, r, d, m, h, p, O, k, b, w, T, j, M, A, N, z;
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (n.innerHTML =
          '<span id="menu-title" class="svelte-1yietsa">FAZAKAS \xC1D\xC1M</span>'),
        (s = g()),
        (l = _("div")),
        (a = _("span")),
        (i = Y("\xA0 concept art \xA0")),
        (c = g()),
        (r = _("span")),
        (d = Y("\xA0 illustration \xA0")),
        (h = g()),
        (p = _("span")),
        (O = Y("\xA0 manga \xA0")),
        (b = g()),
        (w = _("span")),
        (w.textContent = "\xA0 about me"),
        (T = g()),
        (j = _("div")),
        (M = _("span")),
        (M.textContent = "haha"),
        f(n, "id", "menu-container-left"),
        f(n, "class", "svelte-1yietsa"),
        f(a, "class", "menu-box-buttons svelte-1yietsa"),
        f(a, "style", (o = t[1] === 0 ? "border-left: 1px solid black;" : "")),
        f(r, "class", "menu-box-buttons svelte-1yietsa"),
        f(r, "style", (m = t[1] === 1 ? "border-left: 1px solid black;" : "")),
        f(p, "class", "menu-box-buttons svelte-1yietsa"),
        f(p, "style", (k = t[1] === 2 ? "border-left: 1px solid black;" : "")),
        f(w, "class", "svelte-1yietsa"),
        f(M, "class", "svelte-1yietsa"),
        f(j, "id", "menu-box"),
        f(
          j,
          "style",
          (A =
            t[1] >= 0
              ? t[3]
                ? `left: ${t[2]}px; transition: 0s; animation: fadein 1s ease;`
                : `left: ${t[2]}px;  animation: fadein 1s ease;`
              : `left: ${t[2]}px; visibility: hidden;`)
        ),
        f(j, "class", "svelte-1yietsa"),
        f(l, "id", "menu-container-middle"),
        f(l, "class", "svelte-1yietsa"),
        f(e, "id", "menu-container"),
        f(e, "class", "svelte-1yietsa");
    },
    m(v, C) {
      S(v, e, C),
        u(e, n),
        u(e, s),
        u(e, l),
        u(l, a),
        u(a, i),
        u(l, c),
        u(l, r),
        u(r, d),
        u(l, h),
        u(l, p),
        u(p, O),
        u(l, b),
        u(l, w),
        u(l, T),
        u(l, j),
        u(j, M),
        N ||
          ((z = [
            x(a, "click", t[13]),
            x(a, "mouseenter", t[14]),
            x(a, "mouseleave", t[15]),
            x(r, "click", t[16]),
            x(r, "mouseenter", t[17]),
            x(r, "mouseleave", t[18]),
            x(p, "click", t[19]),
            x(p, "mouseenter", t[20]),
            x(p, "mouseleave", t[21]),
            x(w, "click", t[22]),
            x(j, "mouseleave", t[6]),
            x(j, "mouseenter", t[23]),
          ]),
          (N = !0));
    },
    p(v, C) {
      C & 2 &&
        o !== (o = v[1] === 0 ? "border-left: 1px solid black;" : "") &&
        f(a, "style", o),
        C & 2 &&
          m !== (m = v[1] === 1 ? "border-left: 1px solid black;" : "") &&
          f(r, "style", m),
        C & 2 &&
          k !== (k = v[1] === 2 ? "border-left: 1px solid black;" : "") &&
          f(p, "style", k),
        C & 14 &&
          A !==
            (A =
              v[1] >= 0
                ? v[3]
                  ? `left: ${v[2]}px; transition: 0s; animation: fadein 1s ease;`
                  : `left: ${v[2]}px;  animation: fadein 1s ease;`
                : `left: ${v[2]}px; visibility: hidden;`) &&
          f(j, "style", A);
    },
    d(v) {
      v && y(e), (N = !1), F(z);
    },
  };
}
function xt(t) {
  let e, n, s, l, a, i, o;
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (n.innerHTML =
          '<span id="menu-title" style="margin: 0;" class="svelte-1yietsa">FAZAKAS \xC1D\xC1M</span>'),
        (s = g()),
        (l = _("img")),
        I(n, "padding", "10px"),
        E(l.src, (a = $t)) || f(l, "src", a),
        f(l, "alt", "menu"),
        f(l, "style", "50px; height: 50px; margin-left: 10px;"),
        f(l, "class", "svelte-1yietsa"),
        f(e, "id", "menu-container"),
        I(e, "display", "flex"),
        I(e, "justify-content", "center"),
        I(e, "position", "fixed"),
        f(e, "class", "svelte-1yietsa");
    },
    m(c, r) {
      S(c, e, r),
        u(e, n),
        u(e, s),
        u(e, l),
        i || ((o = x(l, "click", t[12])), (i = !0));
    },
    p: $,
    d(c) {
      c && y(e), (i = !1), o();
    },
  };
}
function Pt(t) {
  let e,
    n,
    s,
    l = t[0] && Ne(t);
  function a(c, r) {
    return q() ? xt : wt;
  }
  let o = a()(t);
  return {
    c() {
      l && l.c(), (e = g()), o.c(), (n = X());
    },
    m(c, r) {
      l && l.m(c, r), S(c, e, r), o.m(c, r), S(c, n, r), (s = !0);
    },
    p(c, [r]) {
      c[0]
        ? l
          ? (l.p(c, r), r & 1 && Q(l, 1))
          : ((l = Ne(c)), l.c(), Q(l, 1), l.m(e.parentNode, e))
        : l &&
          (_t(),
          ue(l, 1, 1, () => {
            l = null;
          }),
          dt()),
        o.p(c, r);
    },
    i(c) {
      s || (Q(l), (s = !0));
    },
    o(c) {
      ue(l), (s = !1);
    },
    d(c) {
      l && l.d(c), c && y(e), o.d(c), c && y(n);
    },
  };
}
function Mt(t, e, n) {
  let s = !1,
    l = -1,
    a = 0,
    i = !0,
    o = !0;
  function c(P, B) {
    let ee = P.target.getBoundingClientRect();
    n(1, (l = B)), n(4, (o = !1)), n(2, (a = ee.left)), console.log(B);
  }
  function r() {
    let P = l;
    setTimeout(() => {
      l === P && n(1, (l = -1));
    }, 500),
      n(4, (o = !0)),
      n(3, (i = !1));
  }
  function d(P) {
    n(3, (i = !1)),
      setTimeout(() => {
        l === P && o ? n(1, (l = -1)) : n(4, (o = !0));
      }, 100);
  }
  return [
    s,
    l,
    a,
    i,
    o,
    c,
    r,
    d,
    () => {
      L.set(0), n(0, (s = !1));
    },
    () => {
      L.set(1), n(0, (s = !1));
    },
    () => {
      L.set(2), n(0, (s = !1));
    },
    () => {
      L.set(3), n(0, (s = !1));
    },
    () => {
      n(0, (s = !0));
    },
    () => {
      L.set(0);
    },
    (P) => {
      c(P, 0);
    },
    () => {
      d(0);
    },
    () => {
      L.set(1);
    },
    (P) => {
      c(P, 1);
    },
    () => {
      d(1);
    },
    () => {
      L.set(2);
    },
    (P) => {
      c(P, 2);
    },
    () => {
      d(2);
    },
    () => {
      L.set(3);
    },
    () => {
      n(4, (o = !1));
    },
  ];
}
class Tt extends we {
  constructor(e) {
    super(), $e(this, e, Mt, Pt, _e, {});
  }
}
const xe = "assets/Parallax.371de0a4.png",
  zt = "assets/Ava.31f4119b.png",
  Ct = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: zt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  At = "assets/Tupi.0703ffbe.png",
  Et = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: At },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  It = "assets/Birb.4a1931ba.png",
  Nt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: It },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Bt = "assets/Cold Breeze.e5ab79ca.png",
  Lt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Bt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qt = "assets/Forever change.5e729016.png",
  Dt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: qt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ft = "assets/Summer.4c9f1a4b.png",
  Kt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ft },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Rt = "assets/Wings.bc48072c.png",
  Ht = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Rt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Gt = "assets/1.d036f0cf.png",
  Qt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Gt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Wt = "assets/2.1bc6907c.png",
  Zt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Wt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ut = "assets/3.85a3ed51.png",
  Vt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ut },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Yt = "assets/4.2fb7890d.png",
  Jt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Yt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Xt = "assets/5.f1868fab.png",
  en = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Xt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tn = "assets/6.e1b0cbdd.png",
  nn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ln = "assets/7.5a75f304.png",
  sn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ln },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  on = "assets/1.0c2c1805.png",
  rn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: on },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  an = "assets/2.6a237f7c.png",
  cn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: an },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fn = "assets/3.7ce8b389.png",
  un = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: fn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _n = "assets/4.d37325e1.png",
  dn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _n },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  mn = "assets/5.2843c5c9.png",
  pn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: mn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  gn = "assets/6.ce6c9dac.png",
  bn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: gn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  hn = "assets/7.5a75f304.png",
  yn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vn = "assets/1.3ca6b668.png",
  kn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Sn = "assets/2.f27fe513.png",
  On = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Sn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  jn = "assets/3.04e01828.png",
  $n = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  wn = "assets/4.543777d0.png",
  xn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: wn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pn = "assets/5.2bf56ead.png",
  Mn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Tn = "assets/6.8cfd9166.png",
  zn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Tn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Cn = "assets/7.135f0d2c.png",
  An = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Cn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  En = "assets/7.5a75f304.png",
  In = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: En },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Be(t, e, n) {
  const s = t.slice();
  return (s[4] = e[n]), s;
}
function Le(t, e, n) {
  const s = t.slice();
  return (s[4] = e[n]), s;
}
function qe(t, e, n) {
  const s = t.slice();
  return (s[4] = e[n]), s;
}
function De(t, e, n) {
  const s = t.slice();
  return (s[4] = e[n]), s;
}
function Nn(t) {
  let e,
    n = t[2],
    s = [];
  for (let l = 0; l < n.length; l += 1) s[l] = Fe(Be(t, n, l));
  return {
    c() {
      for (let l = 0; l < s.length; l += 1) s[l].c();
      e = X();
    },
    m(l, a) {
      for (let i = 0; i < s.length; i += 1) s[i].m(l, a);
      S(l, e, a);
    },
    p(l, a) {
      if (a & 4) {
        n = l[2];
        let i;
        for (i = 0; i < n.length; i += 1) {
          const o = Be(l, n, i);
          s[i]
            ? s[i].p(o, a)
            : ((s[i] = Fe(o)), s[i].c(), s[i].m(e.parentNode, e));
        }
        for (; i < s.length; i += 1) s[i].d(1);
        s.length = n.length;
      }
    },
    d(l) {
      de(s, l), l && y(e);
    },
  };
}
function Bn(t) {
  let e, n, s, l, a, i, o, c, r, d, m, h, p, O, k, b, w, T, j, M, A, N, z;
  return {
    c() {
      (e = _("div")),
        (n = _("div")),
        (s = _("span")),
        (s.textContent = "Heyho!"),
        (l = g()),
        (a = _("br")),
        (i = _("br")),
        (o = g()),
        (c = _("span")),
        (c.textContent = `\xA0\xA0\xA0\xA0I'm an aspiring art student in a university
          studying Graphics Art on a masters degree. I also have 4 years of
          basic Visual Arts (sculpting, painting, printmaking, drawing etc.)
          highschool degree with 2 years of graphics art/printmaking
          specialization.`),
        (r = g()),
        (d = _("br")),
        (m = _("br")),
        (h = g()),
        (p = _("span")),
        (p.textContent = `\xA0\xA0\xA0\xA0My interests are Character Design, Digital
          Illustration/Painting in the style of mixing anime/manga styles with
          realism/semi-realism and making manga. I tend to be experimental at
          times and I'm open to different art styles.`),
        (O = g()),
        (k = _("br")),
        (b = _("br")),
        (w = g()),
        (T = _("span")),
        (T.textContent = `\xA0\xA0\xA0\xA0Currently I'm trying to improve as much as I
          can; build relationships, do commissions/freelance jobs and keep
          adding to my portfolio to make it look as professional as I can.`),
        (j = g()),
        (M = _("br")),
        (A = _("br")),
        (N = g()),
        (z = _("span")),
        (z.textContent =
          "Thank you for visiting my page, I appreciate it a lot!"),
        f(n, "style", q() ? "" : "width: 800px; font-size: x-large;"),
        I(e, "display", "grid"),
        I(e, "justify-items", "center"),
        I(e, "align-items", "center"),
        I(e, "height", "100%"),
        I(e, "width", "100%"),
        I(e, "margin-top", "50px");
    },
    m(v, C) {
      S(v, e, C),
        u(e, n),
        u(n, s),
        u(n, l),
        u(n, a),
        u(n, i),
        u(n, o),
        u(n, c),
        u(n, r),
        u(n, d),
        u(n, m),
        u(n, h),
        u(n, p),
        u(n, O),
        u(n, k),
        u(n, b),
        u(n, w),
        u(n, T),
        u(n, j),
        u(n, M),
        u(n, A),
        u(n, N),
        u(n, z);
    },
    p: $,
    d(v) {
      v && y(e);
    },
  };
}
function Ln(t) {
  let e = !q(),
    n,
    s,
    l = e && Fn(),
    a = t[3],
    i = [];
  for (let o = 0; o < a.length; o += 1) i[o] = Ke(Le(t, a, o));
  return {
    c() {
      l && l.c(), (n = g());
      for (let o = 0; o < i.length; o += 1) i[o].c();
      s = X();
    },
    m(o, c) {
      l && l.m(o, c), S(o, n, c);
      for (let r = 0; r < i.length; r += 1) i[r].m(o, c);
      S(o, s, c);
    },
    p(o, c) {
      if ((e && l.p(o, c), c & 8)) {
        a = o[3];
        let r;
        for (r = 0; r < a.length; r += 1) {
          const d = Le(o, a, r);
          i[r]
            ? i[r].p(d, c)
            : ((i[r] = Ke(d)), i[r].c(), i[r].m(s.parentNode, s));
        }
        for (; r < i.length; r += 1) i[r].d(1);
        i.length = a.length;
      }
    },
    d(o) {
      l && l.d(o), o && y(n), de(i, o), o && y(s);
    },
  };
}
function qn(t) {
  let e = !q(),
    n,
    s,
    l = e && Kn(),
    a = t[2],
    i = [];
  for (let o = 0; o < a.length; o += 1) i[o] = Re(qe(t, a, o));
  return {
    c() {
      l && l.c(), (n = g());
      for (let o = 0; o < i.length; o += 1) i[o].c();
      s = X();
    },
    m(o, c) {
      l && l.m(o, c), S(o, n, c);
      for (let r = 0; r < i.length; r += 1) i[r].m(o, c);
      S(o, s, c);
    },
    p(o, c) {
      if ((e && l.p(o, c), c & 4)) {
        a = o[2];
        let r;
        for (r = 0; r < a.length; r += 1) {
          const d = qe(o, a, r);
          i[r]
            ? i[r].p(d, c)
            : ((i[r] = Re(d)), i[r].c(), i[r].m(s.parentNode, s));
        }
        for (; r < i.length; r += 1) i[r].d(1);
        i.length = a.length;
      }
    },
    d(o) {
      l && l.d(o), o && y(n), de(i, o), o && y(s);
    },
  };
}
function Dn(t) {
  let e = !q(),
    n,
    s,
    l = e && Rn(),
    a = t[1],
    i = [];
  for (let o = 0; o < a.length; o += 1) i[o] = He(De(t, a, o));
  return {
    c() {
      l && l.c(), (n = g());
      for (let o = 0; o < i.length; o += 1) i[o].c();
      s = X();
    },
    m(o, c) {
      l && l.m(o, c), S(o, n, c);
      for (let r = 0; r < i.length; r += 1) i[r].m(o, c);
      S(o, s, c);
    },
    p(o, c) {
      if ((e && l.p(o, c), c & 2)) {
        a = o[1];
        let r;
        for (r = 0; r < a.length; r += 1) {
          const d = De(o, a, r);
          i[r]
            ? i[r].p(d, c)
            : ((i[r] = He(d)), i[r].c(), i[r].m(s.parentNode, s));
        }
        for (; r < i.length; r += 1) i[r].d(1);
        i.length = a.length;
      }
    },
    d(o) {
      l && l.d(o), o && y(n), de(i, o), o && y(s);
    },
  };
}
function Fe(t) {
  let e, n;
  return {
    c() {
      (e = _("img")),
        E(e.src, (n = t[4].default)) || f(e, "src", n),
        f(e, "alt", "art"),
        f(e, "class", "svelte-1d5bak3");
    },
    m(s, l) {
      S(s, e, l);
    },
    p: $,
    d(s) {
      s && y(e);
    },
  };
}
function Fn(t) {
  let e;
  return {
    c() {
      (e = _("div")),
        f(e, "id", "parallax"),
        f(e, "style", `background-image: url(${xe})`),
        f(e, "class", "svelte-1d5bak3");
    },
    m(n, s) {
      S(n, e, s);
    },
    p: $,
    d(n) {
      n && y(e);
    },
  };
}
function Ke(t) {
  let e, n;
  return {
    c() {
      (e = _("img")),
        E(e.src, (n = t[4].default)) || f(e, "src", n),
        f(e, "alt", "art"),
        f(e, "style", q() ? "max-width: 100vw; max-height: fit-content;" : ""),
        f(e, "class", "svelte-1d5bak3");
    },
    m(s, l) {
      S(s, e, l);
    },
    p: $,
    d(s) {
      s && y(e);
    },
  };
}
function Kn(t) {
  let e;
  return {
    c() {
      (e = _("div")),
        f(e, "id", "parallax"),
        f(e, "style", `background-image: url(${xe})`),
        f(e, "class", "svelte-1d5bak3");
    },
    m(n, s) {
      S(n, e, s);
    },
    p: $,
    d(n) {
      n && y(e);
    },
  };
}
function Re(t) {
  let e, n;
  return {
    c() {
      (e = _("img")),
        E(e.src, (n = t[4].default)) || f(e, "src", n),
        f(e, "alt", "art"),
        f(e, "style", q() ? "max-width: 100vw; max-height: fit-content;" : ""),
        f(e, "class", "svelte-1d5bak3");
    },
    m(s, l) {
      S(s, e, l);
    },
    p: $,
    d(s) {
      s && y(e);
    },
  };
}
function Rn(t) {
  let e;
  return {
    c() {
      (e = _("div")),
        f(e, "id", "parallax"),
        f(e, "style", `background-image: url(${xe})`),
        f(e, "class", "svelte-1d5bak3");
    },
    m(n, s) {
      S(n, e, s);
    },
    p: $,
    d(n) {
      n && y(e);
    },
  };
}
function He(t) {
  let e, n;
  return {
    c() {
      (e = _("img")),
        E(e.src, (n = t[4].default)) || f(e, "src", n),
        f(e, "alt", "art"),
        f(e, "style", q() ? "max-width: 100vw; max-height: fit-content;" : ""),
        f(e, "class", "svelte-1d5bak3");
    },
    m(s, l) {
      S(s, e, l);
    },
    p: $,
    d(s) {
      s && y(e);
    },
  };
}
function Hn(t) {
  let e;
  function n(a, i) {
    return a[0] === 0
      ? Dn
      : a[0] === 1
      ? qn
      : a[0] === 2
      ? Ln
      : a[0] === 3
      ? Bn
      : Nn;
  }
  let s = n(t),
    l = s(t);
  return {
    c() {
      (e = _("div")),
        l.c(),
        f(e, "id", "showcasetype-container"),
        f(e, "style", q() ? "margin-top: 50px;" : ""),
        f(e, "class", "svelte-1d5bak3");
    },
    m(a, i) {
      S(a, e, i), l.m(e, null);
    },
    p(a, [i]) {
      s === (s = n(a)) && l
        ? l.p(a, i)
        : (l.d(1), (l = s(a)), l && (l.c(), l.m(e, null)));
    },
    i: $,
    o: $,
    d(a) {
      a && y(e), l.d();
    },
  };
}
function Gn(t, e, n) {
  let s = [Ct, Et],
    l = [Nt, Lt, Dt, Kt, Ht],
    a = [
      Qt,
      Zt,
      Vt,
      Jt,
      en,
      nn,
      sn,
      rn,
      cn,
      un,
      dn,
      pn,
      bn,
      yn,
      kn,
      On,
      $n,
      xn,
      Mn,
      zn,
      An,
      In,
    ],
    i = 0;
  return (
    L.subscribe((o) => {
      n(0, (i = o));
    }),
    [i, s, l, a]
  );
}
class Qn extends we {
  constructor(e) {
    super(), $e(this, e, Gn, Hn, _e, {});
  }
}
function Wn(t) {
  let e, n, s, l, a, i, o;
  return (
    (n = new Tt({})),
    (l = new Qn({})),
    {
      c() {
        (e = _("main")),
          Ee(n.$$.fragment),
          (s = g()),
          Ee(l.$$.fragment),
          (a = g()),
          (i = _("link")),
          f(e, "class", "svelte-te6mq0"),
          f(i, "rel", "icon"),
          f(i, "href", bt);
      },
      m(c, r) {
        S(c, e, r),
          ye(n, e, null),
          u(e, s),
          ye(l, e, null),
          S(c, a, r),
          u(document.head, i),
          (o = !0);
      },
      p: $,
      i(c) {
        o || (Q(n.$$.fragment, c), Q(l.$$.fragment, c), (o = !0));
      },
      o(c) {
        ue(n.$$.fragment, c), ue(l.$$.fragment, c), (o = !1);
      },
      d(c) {
        c && y(e), ve(n), ve(l), c && y(a), y(i);
      },
    }
  );
}
class Zn extends we {
  constructor(e) {
    super(), $e(this, e, null, Wn, _e, {});
  }
}
new Zn({ target: document.getElementById("app") });
