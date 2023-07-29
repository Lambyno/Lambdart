(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function F(){}const Ce=t=>t;function Je(t){return t()}function Te(){return Object.create(null)}function G(t){t.forEach(Je)}function Me(t){return typeof t=="function"}function ve(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let fe;function M(t,e){return fe||(fe=document.createElement("a")),fe.href=e,t===fe.href}function ut(t){return Object.keys(t).length===0}const Xe=typeof window<"u";let et=Xe?()=>window.performance.now():()=>Date.now(),Fe=Xe?t=>requestAnimationFrame(t):F;const ee=new Set;function tt(t){ee.forEach(e=>{e.c(t)||(ee.delete(e),e.f())}),ee.size!==0&&Fe(tt)}function nt(t){let e;return ee.size===0&&Fe(tt),{promise:new Promise(n=>{ee.add(e={c:t,f:n})}),abort(){ee.delete(e)}}}function f(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _t(t,e){return f(t.head||t,e),e.sheet}function x(t,e,n){t.insertBefore(e,n||null)}function I(t){t.parentNode.removeChild(t)}function ke(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function re(t){return document.createTextNode(t)}function k(){return re(" ")}function dt(){return re("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function mt(t){return Array.from(t.childNodes)}function y(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function gt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,r,e),l}const ge=new Map;let he=0;function ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function pt(t){const e={style_element:_("style"),rules:{}};return ge.set(t,e),e}function lt(t,e,n,r,l,a,s,o=0){const i=16.666/r;let u=`{
`;for(let h=0;h<=1;h+=i){const w=e+(n-e)*a(h);u+=h*100+`%{${s(w,1-w)}}
`}const m=u+`100% {${s(n,1-n)}}
}`,d=`__svelte_${ht(m)}_${o}`,p=ft(t),{style_element:g,rules:v}=ge.get(p)||pt(p);if(!v[d]){const h=_t(p,g);v[d]=!0,h.insertRule(`@keyframes ${d} ${m}`,h.cssRules.length)}const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${d} ${r}ms linear ${l}ms 1 both`,he+=1,d}function ye(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),l=n.length-r.length;l&&(t.style.animation=r.join(", "),he-=l,he||vt())}function vt(){Fe(()=>{he||(ge.forEach(t=>{const{style_element:e}=t;I(e)}),ge.clear())})}let Ae;function se(t){Ae=t}const ie=[],Be=[],de=[],Le=[],kt=Promise.resolve();let we=!1;function bt(){we||(we=!0,kt.then(it))}function O(t){de.push(t)}const be=new Set;let _e=0;function it(){const t=Ae;do{for(;_e<ie.length;){const e=ie[_e];_e++,se(e),yt(e.$$)}for(se(null),ie.length=0,_e=0;Be.length;)Be.pop()();for(let e=0;e<de.length;e+=1){const n=de[e];be.has(n)||(be.add(n),n())}de.length=0}while(ie.length);for(;Le.length;)Le.pop()();we=!1,be.clear(),se(t)}function yt(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let le;function st(){return le||(le=Promise.resolve(),le.then(()=>{le=null})),le}function pe(t,e,n){t.dispatchEvent(gt(`${e?"intro":"outro"}${n}`))}const me=new Set;let R;function ce(){R={r:0,c:[],p:R}}function oe(){R.r||G(R.c),R=R.p}function A(t,e){t&&t.i&&(me.delete(t),t.i(e))}function P(t,e,n,r){if(t&&t.o){if(me.has(t))return;me.add(t),R.c.push(()=>{me.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const rt={duration:0};function ae(t,e,n){let r=e(t,n),l=!1,a,s,o=0;function i(){a&&ye(t,a)}function u(){const{delay:d=0,duration:p=300,easing:g=Ce,tick:v=F,css:b}=r||rt;b&&(a=lt(t,0,1,p,d,g,b,o++)),v(0,1);const h=et()+d,w=h+p;s&&s.abort(),l=!0,O(()=>pe(t,!0,"start")),s=nt($=>{if(l){if($>=w)return v(1,0),pe(t,!0,"end"),i(),l=!1;if($>=h){const W=g(($-h)/p);v(W,1-W)}}return l})}let m=!1;return{start(){m||(m=!0,ye(t),Me(r)?(r=r(),st().then(u)):u())},invalidate(){m=!1},end(){l&&(i(),l=!1)}}}function ue(t,e,n){let r=e(t,n),l=!0,a;const s=R;s.r+=1;function o(){const{delay:i=0,duration:u=300,easing:m=Ce,tick:d=F,css:p}=r||rt;p&&(a=lt(t,1,0,u,i,m,p));const g=et()+i,v=g+u;O(()=>pe(t,!1,"start")),nt(b=>{if(l){if(b>=v)return d(0,1),pe(t,!1,"end"),--s.r||G(s.c),!1;if(b>=g){const h=m((b-g)/u);d(1-h,h)}}return l})}return Me(r)?st().then(()=>{r=r(),o()}):o(),{end(i){i&&r.tick&&r.tick(1,0),l&&(a&&ye(t,a),l=!1)}}}function Oe(t){t&&t.c()}function Ie(t,e,n,r){const{fragment:l,on_mount:a,on_destroy:s,after_update:o}=t.$$;l&&l.m(e,n),r||O(()=>{const i=a.map(Je).filter(Me);s?s.push(...i):G(i),t.$$.on_mount=[]}),o.forEach(O)}function $e(t,e){const n=t.$$;n.fragment!==null&&(G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(t,e){t.$$.dirty[0]===-1&&(ie.push(t),bt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function We(t,e,n,r,l,a,s,o=[-1]){const i=Ae;se(t);const u=t.$$={fragment:null,ctx:null,props:a,update:F,not_equal:l,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:Te(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};s&&s(u.root);let m=!1;if(u.ctx=n?n(t,e.props||{},(d,p,...g)=>{const v=g.length?g[0]:p;return u.ctx&&l(u.ctx[d],u.ctx[d]=v)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](v),m&&wt(t,d)),p}):[],u.update(),m=!0,G(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const d=mt(e.target);u.fragment&&u.fragment.l(d),d.forEach(I)}else u.fragment&&u.fragment.c();e.intro&&A(t.$$.fragment),Ie(t,e.target,e.anchor,e.customElement),it()}se(i)}class Ee{$destroy(){$e(this,1),this.$destroy=F}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const It="Lambdart/Tupi_transparent.png",X=[];function $t(t,e=F){let n;const r=new Set;function l(o){if(ve(t,o)&&(t=o,n)){const i=!X.length;for(const u of r)u[1](),X.push(u,t);if(i){for(let u=0;u<X.length;u+=2)X[u][0](X[u+1]);X.length=0}}}function a(o){l(o(t))}function s(o,i=F){const u=[o,i];return r.add(u),r.size===1&&(n=e(l)||F),o(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:l,update:a,subscribe:s}}const V=$t(0);function Z(){return!!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)||/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))}function xt(t){const e=t-1;return e*e*e+1}function Se(t,{delay:e=0,duration:n=400,easing:r=Ce}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:a=>`opacity: ${a*l}`}}function Q(t,{delay:e=0,duration:n=400,easing:r=xt,x:l=0,y:a=0,opacity:s=0}={}){const o=getComputedStyle(t),i=+o.opacity,u=o.transform==="none"?"":o.transform,m=i*(1-s);return{delay:e,duration:n,easing:r,css:(d,p)=>`
			transform: ${u} translate(${(1-d)*l}px, ${(1-d)*a}px);
			opacity: ${i-m*p}`}}const Ct="Icons_Colors_Font/Icons/artstation_icon.svg",Mt="Icons_Colors_Font/Icons/be_behance_design_community_portfolio_behance_logo_icon.svg",ct="Icons_Colors_Font/Icons/twitter_bird_icon.svg",ot="Icons_Colors_Font/Icons/instagram_icon.svg",Ft="Icons_Colors_Font/Icons/yotube.ico",At="Icons_Colors_Font/Icons/ko-fi.svg",Wt="Icons_Colors_Font/Icons/bio link.ico",Et="Icons_Colors_Font/Icons/mail.svg",Pt="Icons_Colors_Font/Icons/menu.svg";function Ne(t){let e,n,r,l,a,s,o,i,u,m,d,p,g,v,b,h,w,$,W,E,S,N,B,Y,U,C,q,te,L,j,z,D,H,K,ne,Pe;return{c(){e=_("div"),n=_("span"),n.textContent="Character Design",r=k(),l=_("span"),l.textContent="Illustrations",a=k(),s=_("span"),s.textContent="About Me",o=k(),i=_("div"),u=_("a"),m=_("img"),p=k(),g=_("a"),v=_("img"),h=k(),w=_("a"),$=_("img"),E=k(),S=_("a"),N=_("img"),Y=k(),U=_("a"),C=_("img"),te=k(),L=_("a"),j=_("img"),c(n,"class","svelte-gcicl8"),c(l,"class","svelte-gcicl8"),c(s,"class","svelte-gcicl8"),M(m.src,d=ct)||c(m,"src",d),c(m,"alt","Twitter"),c(m,"class","svelte-gcicl8"),c(u,"href","https://twitter.com/my_lambda"),M(v.src,b=ot)||c(v,"src",b),c(v,"alt","Instagram"),c(v,"class","svelte-gcicl8"),c(g,"href","https://instagram.com/lambdart_"),M($.src,W=Ft)||c($,"src",W),c($,"alt","YouTube"),c($,"class","svelte-gcicl8"),c(w,"href","https://www.youtube.com/channel/UCd3vo47GFeIlOjrKQqtmeqQ/featured"),M(N.src,B=At)||c(N,"src",B),c(N,"alt","KoFi"),c(N,"class","svelte-gcicl8"),c(S,"href","https://ko-fi.com/mylambda52231"),M(C.src,q=Wt)||c(C,"src",q),c(C,"alt","BioLink"),y(C,"margin-right","0"),c(C,"class","svelte-gcicl8"),c(U,"href","https://lambdart.bio.link/"),M(j.src,z=Et)||c(j,"src",z),c(j,"alt","Mail"),c(j,"class","svelte-gcicl8"),c(L,"href","mailto:adamfazakas@yahoo.com"),c(e,"id","menu-container-mobile"),c(e,"class","svelte-gcicl8")},m(J,at){x(J,e,at),f(e,n),f(e,r),f(e,l),f(e,a),f(e,s),f(e,o),f(e,i),f(i,u),f(u,m),f(i,p),f(i,g),f(g,v),f(i,h),f(i,w),f(w,$),f(i,E),f(i,S),f(S,N),f(i,Y),f(i,U),f(U,C),f(i,te),f(i,L),f(L,j),K=!0,ne||(Pe=[T(n,"click",t[1]),T(l,"click",t[2]),T(s,"click",t[3])],ne=!0)},p:F,i(J){K||(O(()=>{H&&H.end(1),D=ae(e,Se,{duration:80}),D.start()}),K=!0)},o(J){D&&D.invalidate(),H=ue(e,Se,{duration:80}),K=!1},d(J){J&&I(e),J&&H&&H.end(),ne=!1,G(Pe)}}}function Tt(t){let e,n,r,l,a,s,o,i,u,m,d,p,g,v,b,h,w,$,W,E,S,N,B,Y,U,C,q,te,L,j,z,D,H;return{c(){e=_("div"),n=_("div"),r=_("div"),r.innerHTML='<span id="menu-title" class="svelte-gcicl8">FAZAKAS \xC1D\xC1M</span>',l=k(),a=_("div"),s=_("div"),o=_("a"),i=_("img"),m=k(),d=_("a"),p=_("img"),v=k(),b=_("a"),h=_("img"),$=k(),W=_("a"),E=_("img"),N=k(),B=_("div"),Y=_("div"),Y.innerHTML='<span style="font-family: &#39;Lekton&#39;, sans-serif; font-size: x-large; transform: scale(1, 1.5);" class="svelte-gcicl8">Concept artist</span>',U=k(),C=_("div"),q=_("span"),q.textContent="\xA0 character design\xA0",te=k(),L=_("span"),L.textContent="\xA0 illustration \xA0",j=k(),z=_("span"),z.textContent="\xA0 about me",c(r,"id","menu-container-left"),c(r,"class","svelte-gcicl8"),M(i.src,u=Ct)||c(i,"src",u),c(i,"alt","Artstation"),c(i,"class","svelte-gcicl8"),c(o,"href","https://lambino.artstation.com/"),c(o,"class","svelte-gcicl8"),M(p.src,g=Mt)||c(p,"src",g),c(p,"alt","Behance"),c(p,"class","svelte-gcicl8"),c(d,"href","https://www.behance.net/dmfazakas1"),c(d,"class","svelte-gcicl8"),M(h.src,w=ot)||c(h,"src",w),c(h,"alt","Instagram"),c(h,"class","svelte-gcicl8"),c(b,"href","https://instagram.com/lambdart_"),c(b,"class","svelte-gcicl8"),M(E.src,S=ct)||c(E,"src",S),c(E,"alt","Twitter"),c(E,"class","svelte-gcicl8"),c(W,"href","https://twitter.com/my_lambda"),c(W,"class","svelte-gcicl8"),c(s,"class","svelte-gcicl8"),c(a,"id","menu-container-links"),c(a,"class","svelte-gcicl8"),y(n,"align-items","end"),c(n,"class","svelte-gcicl8"),c(q,"class","menu-box-buttons svelte-gcicl8"),c(L,"class","menu-box-buttons svelte-gcicl8"),c(z,"class","svelte-gcicl8"),c(C,"id","menu-container-middle"),y(C,"font-family","'Lekton', sans-serif"),c(C,"class","svelte-gcicl8"),y(B,"align-items","center"),c(B,"class","svelte-gcicl8"),c(e,"id","menu-container"),c(e,"class","svelte-gcicl8")},m(K,ne){x(K,e,ne),f(e,n),f(n,r),f(n,l),f(n,a),f(a,s),f(s,o),f(o,i),f(s,m),f(s,d),f(d,p),f(s,v),f(s,b),f(b,h),f(s,$),f(s,W),f(W,E),f(e,N),f(e,B),f(B,Y),f(B,U),f(B,C),f(C,q),f(C,te),f(C,L),f(C,j),f(C,z),D||(H=[T(q,"click",t[5]),T(L,"click",t[6]),T(z,"click",t[7])],D=!0)},p:F,d(K){K&&I(e),D=!1,G(H)}}}function Bt(t){let e,n,r,l,a,s,o;return{c(){e=_("div"),n=_("div"),n.innerHTML='<span id="menu-title" style="margin: 0;" class="svelte-gcicl8">FAZAKAS \xC1D\xC1M</span>',r=k(),l=_("img"),y(n,"padding","10px"),c(n,"class","svelte-gcicl8"),M(l.src,a=Pt)||c(l,"src",a),c(l,"alt","menu"),c(l,"style","50px; height: 50px; margin-left: 10px;"),c(l,"class","svelte-gcicl8"),c(e,"id","menu-container"),y(e,"display","flex"),y(e,"justify-content","center"),y(e,"position","fixed"),c(e,"class","svelte-gcicl8")},m(i,u){x(i,e,u),f(e,n),f(e,r),f(e,l),s||(o=T(l,"click",t[4]),s=!0)},p:F,d(i){i&&I(e),s=!1,o()}}}function Lt(t){let e,n,r,l=t[0]&&Ne(t);function a(i,u){return Z()?Bt:Tt}let o=a()(t);return{c(){e=_("div"),l&&l.c(),n=k(),o.c(),c(e,"id","top-level-menu-container"),c(e,"class","svelte-gcicl8")},m(i,u){x(i,e,u),l&&l.m(e,null),f(e,n),o.m(e,null),r=!0},p(i,[u]){i[0]?l?(l.p(i,u),u&1&&A(l,1)):(l=Ne(i),l.c(),A(l,1),l.m(e,n)):l&&(ce(),P(l,1,1,()=>{l=null}),oe()),o.p(i,u)},i(i){r||(A(l),r=!0)},o(i){P(l),r=!1},d(i){i&&I(e),l&&l.d(),o.d()}}}function Ot(t,e,n){let r=!1;return[r,()=>{V.set(0),n(0,r=!1)},()=>{V.set(1),n(0,r=!1)},()=>{V.set(3),n(0,r=!1)},()=>{n(0,r=!0)},()=>{V.set(0)},()=>{V.set(1)},()=>{V.set(3)}]}class St extends Ee{constructor(e){super(),We(this,e,Ot,Lt,ve,{})}}const Nt="Illustration/Parallax.png",jt=Nt,qt=[{url:"Concept art/Tupi, 2022.png"}],je=[{url:"Concept art/compressed/Tupi, 2022.png",name:"Tupi 2022"}],xe=[{url:"Illustration/Birb_2022.png"},{url:"Illustration/Blooming_2022.png"},{url:"Illustration/Practice_sketch_2022.png"}],qe=[{url:"Illustration/compressed/Birb_2022.png",name:"Birb - 2022"},{url:"Illustration/compressed/Blooming_2022.png",name:"Blooming 2022"},{url:"Illustration/compressed/Practice_sketch_2022.png",name:"Practice sketch 2022"}],zt=[{url:"Manga/Who_forbids_me_2022/I_Who_Forbids_me/1.png"},{url:"Manga/Who_forbids_me_2022/I_Who_Forbids_me/2.png"},{url:"Manga/Who_forbids_me_2022/I_Who_Forbids_me/3.png"},{url:"Manga/Who_forbids_me_2022/I_Who_Forbids_me/4.png"},{url:"Manga/Who_forbids_me_2022/I_Who_Forbids_me/5.png"}],ze=[{url:"Manga/Who_forbids_me_2022/I_Who_Forbids_me/compressed/1.png",name:"I - Who Forbids Me 2022"},{url:"Manga/Who_forbids_me_2022/I_Who_Forbids_me/compressed/2.png",name:"I - Who Forbids Me 2022"},{url:"Manga/Who_forbids_me_2022/I_Who_Forbids_me/compressed/3.png",name:"I - Who Forbids Me 2022"},{url:"Manga/Who_forbids_me_2022/I_Who_Forbids_me/compressed/4.png",name:"I - Who Forbids Me 2022"},{url:"Manga/Who_forbids_me_2022/I_Who_Forbids_me/compressed/5.png",name:"I - Who Forbids Me 2022"}];function De(t,e,n){const r=t.slice();return r[7]=e[n],r}function He(t,e,n){const r=t.slice();return r[7]=e[n],r[9]=n,r}function Ke(t,e,n){const r=t.slice();return r[7]=e[n],r[9]=n,r}function Re(t,e,n){const r=t.slice();return r[7]=e[n],r[9]=n,r}function Ze(t){let e,n,r,l,a;return{c(){e=_("div"),n=_("img"),M(n.src,r=t[1])||c(n,"src",r),c(n,"alt",t[1]),c(n,"class","svelte-k0k1i9"),c(e,"id","dialog"),c(e,"class","svelte-k0k1i9")},m(s,o){x(s,e,o),f(e,n),l||(a=T(e,"click",t[3]),l=!0)},p(s,o){o&2&&!M(n.src,r=s[1])&&c(n,"src",r),o&2&&c(n,"alt",s[1])},d(s){s&&I(e),l=!1,a()}}}function Qe(t){let e;return{c(){e=_("div"),c(e,"id","parallax"),c(e,"style",`background-image: url(${jt})`),c(e,"class","svelte-k0k1i9")},m(n,r){x(n,e,r)},p:F,d(n){n&&I(e)}}}function Dt(t){let e,n=xe,r=[];for(let l=0;l<n.length;l+=1)r[l]=Ge(De(t,n,l));return{c(){for(let l=0;l<r.length;l+=1)r[l].c();e=dt()},m(l,a){for(let s=0;s<r.length;s+=1)r[s].m(l,a);x(l,e,a)},p(l,a){if(a&0){n=xe;let s;for(s=0;s<n.length;s+=1){const o=De(l,n,s);r[s]?r[s].p(o,a):(r[s]=Ge(o),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},i:F,o:F,d(l){ke(r,l),l&&I(e)}}}function Ht(t){let e,n,r,l,a,s,o,i,u,m,d,p,g,v,b,h,w,$,W;return{c(){e=_("div"),n=_("div"),r=_("img"),a=k(),s=_("br"),o=k(),i=_("span"),i.textContent="HELLO, I AM FAZAKAS \xC1D\xC1M!'",u=k(),m=_("p"),m.textContent=`Driven by a deep passion for artistic expression, I decided to pursue
          art education. My focus lies primarily in concept art and
          illustration, where I aim to bring my own unique touch by blending my
          technical skills with my imagination to make really captivating and
          eye-catching concepts and images. I consistently challenge myself
          through experimentation, seeking to enhance my creative abilities and
          push the boundaries of my artistic endeavors.`,d=k(),p=_("div"),p.innerHTML=`<a href="#" class="svelte-k0k1i9">CONTACT</a> 
          <a href="#" class="svelte-k0k1i9">CV</a>`,g=k(),v=_("br"),b=k(),h=_("span"),h.innerHTML='Thank you <a href="https://github.com/ElhamAryanpur" style="text-decoration: none; color: white;"><u>Elham</u></a>!',M(r.src,l="/Tupi_transparent.png")||c(r,"src",l),c(r,"alt","icon"),y(r,"width","200px"),y(r,"height","200px"),c(r,"class","svelte-k0k1i9"),y(i,"background","black"),y(i,"width","100%"),y(i,"padding","20px"),y(i,"text-align","center"),y(i,"box-sizing","border-box"),y(i,"font-family","'Barlow', sans-serif"),y(i,"font-size","x-large"),y(m,"text-align","justify"),y(m,"width","100%"),y(m,"font-family","'Lekton', sans-serif"),y(m,"text-align-last","center"),c(p,"id","about-me-buttons"),c(p,"class","svelte-k0k1i9"),c(n,"style",Z()?"":"width: 1000px; font-size: x-large; display: grid; justify-items: center;"),y(e,"display","grid"),y(e,"justify-items","center"),y(e,"align-items","center"),y(e,"height","100%"),y(e,"width","100%"),y(e,"margin-top","50px"),y(e,"line-height","1"),y(e,"color","white")},m(E,S){x(E,e,S),f(e,n),f(n,r),f(n,a),f(n,s),f(n,o),f(n,i),f(n,u),f(n,m),f(n,d),f(n,p),f(n,g),f(n,v),f(n,b),f(n,h),W=!0},p:F,i(E){W||(O(()=>{$&&$.end(1),w=ae(e,Q,{y:-50,duration:250,delay:300}),w.start()}),W=!0)},o(E){w&&w.invalidate(),$=ue(e,Q,{y:-50,duration:250}),W=!1},d(E){E&&I(e),E&&$&&$.end()}}}function Kt(t){let e,n,r=ze,l=[];for(let s=0;s<r.length;s+=1)l[s]=Ue(He(t,r,s));const a=s=>P(l[s],1,1,()=>{l[s]=null});return{c(){e=_("div");for(let s=0;s<l.length;s+=1)l[s].c();c(e,"id","photo"),c(e,"class","svelte-k0k1i9")},m(s,o){x(s,e,o);for(let i=0;i<l.length;i+=1)l[i].m(e,null);n=!0},p(s,o){if(o&6){r=ze;let i;for(i=0;i<r.length;i+=1){const u=He(s,r,i);l[i]?(l[i].p(u,o),A(l[i],1)):(l[i]=Ue(u),l[i].c(),A(l[i],1),l[i].m(e,null))}for(ce(),i=r.length;i<l.length;i+=1)a(i);oe()}},i(s){if(!n){for(let o=0;o<r.length;o+=1)A(l[o]);n=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)P(l[o]);n=!1},d(s){s&&I(e),ke(l,s)}}}function Rt(t){let e,n,r=qe,l=[];for(let s=0;s<r.length;s+=1)l[s]=Ve(Ke(t,r,s));const a=s=>P(l[s],1,1,()=>{l[s]=null});return{c(){e=_("div");for(let s=0;s<l.length;s+=1)l[s].c();c(e,"id","photo"),c(e,"class","svelte-k0k1i9")},m(s,o){x(s,e,o);for(let i=0;i<l.length;i+=1)l[i].m(e,null);n=!0},p(s,o){if(o&6){r=qe;let i;for(i=0;i<r.length;i+=1){const u=Ke(s,r,i);l[i]?(l[i].p(u,o),A(l[i],1)):(l[i]=Ve(u),l[i].c(),A(l[i],1),l[i].m(e,null))}for(ce(),i=r.length;i<l.length;i+=1)a(i);oe()}},i(s){if(!n){for(let o=0;o<r.length;o+=1)A(l[o]);n=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)P(l[o]);n=!1},d(s){s&&I(e),ke(l,s)}}}function Zt(t){let e,n,r=je,l=[];for(let s=0;s<r.length;s+=1)l[s]=Ye(Re(t,r,s));const a=s=>P(l[s],1,1,()=>{l[s]=null});return{c(){e=_("div");for(let s=0;s<l.length;s+=1)l[s].c();c(e,"id","photo"),c(e,"class","svelte-k0k1i9")},m(s,o){x(s,e,o);for(let i=0;i<l.length;i+=1)l[i].m(e,null);n=!0},p(s,o){if(o&6){r=je;let i;for(i=0;i<r.length;i+=1){const u=Re(s,r,i);l[i]?(l[i].p(u,o),A(l[i],1)):(l[i]=Ye(u),l[i].c(),A(l[i],1),l[i].m(e,null))}for(ce(),i=r.length;i<l.length;i+=1)a(i);oe()}},i(s){if(!n){for(let o=0;o<r.length;o+=1)A(l[o]);n=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)P(l[o]);n=!1},d(s){s&&I(e),ke(l,s)}}}function Ge(t){let e,n;return{c(){e=_("img"),M(e.src,n=t[7].url)||c(e,"src",n),c(e,"alt","art"),c(e,"class","svelte-k0k1i9")},m(r,l){x(r,e,l)},p:F,d(r){r&&I(e)}}}function Ue(t){let e,n,r,l,a,s,o=t[7].name+"",i,u,m,d,p,g,v;function b(){return t[6](t[9])}return{c(){e=_("div"),n=_("img"),l=k(),a=_("div"),s=_("span"),i=re(o),u=k(),M(n.src,r=t[7].url)||c(n,"src",r),c(n,"alt","art"),c(n,"style",Z()?"max-width: 100vw; max-height: fit-content;":""),c(n,"class","svelte-k0k1i9"),c(a,"class","svelte-k0k1i9"),c(e,"class","items svelte-k0k1i9")},m(h,w){x(h,e,w),f(e,n),f(e,l),f(e,a),f(a,s),f(s,i),f(e,u),p=!0,g||(v=T(e,"click",b),g=!0)},p(h,w){t=h},i(h){p||(O(()=>{d&&d.end(1),m=ae(e,Q,{y:-50,duration:250,delay:300}),m.start()}),p=!0)},o(h){m&&m.invalidate(),d=ue(e,Q,{y:-50,duration:250}),p=!1},d(h){h&&I(e),h&&d&&d.end(),g=!1,v()}}}function Ve(t){let e,n,r,l,a,s,o=t[7].name+"",i,u,m,d,p,g,v;function b(){return t[5](t[9])}return{c(){e=_("div"),n=_("img"),l=k(),a=_("div"),s=_("span"),i=re(o),u=k(),M(n.src,r=t[7].url)||c(n,"src",r),c(n,"alt","art"),c(n,"style",Z()?"max-width: 100vw; max-height: fit-content;":""),c(n,"class","svelte-k0k1i9"),c(a,"class","svelte-k0k1i9"),c(e,"class","items svelte-k0k1i9")},m(h,w){x(h,e,w),f(e,n),f(e,l),f(e,a),f(a,s),f(s,i),f(e,u),p=!0,g||(v=T(e,"click",b),g=!0)},p(h,w){t=h},i(h){p||(O(()=>{d&&d.end(1),m=ae(e,Q,{y:-50,duration:250,delay:300}),m.start()}),p=!0)},o(h){m&&m.invalidate(),d=ue(e,Q,{y:-50,duration:250}),p=!1},d(h){h&&I(e),h&&d&&d.end(),g=!1,v()}}}function Ye(t){let e,n,r,l,a,s,o=t[7].name+"",i,u,m,d,p,g,v;function b(){return t[4](t[9])}return{c(){e=_("div"),n=_("img"),l=k(),a=_("div"),s=_("span"),i=re(o),u=k(),M(n.src,r=t[7].url)||c(n,"src",r),c(n,"alt","art"),c(n,"style",Z()?"max-width: 100vw; max-height: fit-content;":""),c(n,"class","svelte-k0k1i9"),c(a,"class","svelte-k0k1i9"),c(e,"class","items svelte-k0k1i9")},m(h,w){x(h,e,w),f(e,n),f(e,l),f(e,a),f(a,s),f(s,i),f(e,u),p=!0,g||(v=T(e,"click",b),g=!0)},p(h,w){t=h},i(h){p||(O(()=>{d&&d.end(1),m=ae(e,Q,{y:-50,duration:250,delay:300}),m.start()}),p=!0)},o(h){m&&m.invalidate(),d=ue(e,Q,{y:-50,duration:250}),p=!1},d(h){h&&I(e),h&&d&&d.end(),g=!1,v()}}}function Qt(t){let e,n,r=!Z()&&t[0]!=3,l,a,s,o,i=t[2]&&Ze(t),u=r&&Qe();const m=[Zt,Rt,Kt,Ht,Dt],d=[];function p(g,v){return g[0]===0?0:g[0]===1?1:g[0]===2?2:g[0]===3?3:4}return a=p(t),s=d[a]=m[a](t),{c(){i&&i.c(),e=k(),n=_("div"),u&&u.c(),l=k(),s.c(),c(n,"id","showcasetype-container"),c(n,"style",Z()?"margin-top: 50px;":""),c(n,"class","svelte-k0k1i9")},m(g,v){i&&i.m(g,v),x(g,e,v),x(g,n,v),u&&u.m(n,null),f(n,l),d[a].m(n,null),o=!0},p(g,[v]){g[2]?i?i.p(g,v):(i=Ze(g),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),v&1&&(r=!Z()&&g[0]!=3),r?u?u.p(g,v):(u=Qe(),u.c(),u.m(n,l)):u&&(u.d(1),u=null);let b=a;a=p(g),a===b?d[a].p(g,v):(ce(),P(d[b],1,1,()=>{d[b]=null}),oe(),s=d[a],s?s.p(g,v):(s=d[a]=m[a](g),s.c()),A(s,1),s.m(n,null))},i(g){o||(A(s),o=!0)},o(g){P(s),o=!1},d(g){i&&i.d(g),g&&I(e),g&&I(n),u&&u.d(),d[a].d()}}}function Gt(t,e,n){let r=0,l="";V.subscribe(m=>{n(0,r=m)});let a=!1;return[r,l,a,()=>{n(2,a=!1)},m=>{n(1,l=qt[m].url),n(2,a=!0)},m=>{n(1,l=xe[m].url),n(2,a=!0)},m=>{n(1,l=zt[m].url),n(2,a=!0)}]}class Ut extends Ee{constructor(e){super(),We(this,e,Gt,Qt,ve,{})}}function Vt(t){let e,n,r,l,a,s,o;return n=new St({}),l=new Ut({}),{c(){e=_("main"),Oe(n.$$.fragment),r=k(),Oe(l.$$.fragment),a=k(),s=_("link"),c(e,"class","svelte-te6mq0"),c(s,"rel","icon"),c(s,"href",It)},m(i,u){x(i,e,u),Ie(n,e,null),f(e,r),Ie(l,e,null),x(i,a,u),f(document.head,s),o=!0},p:F,i(i){o||(A(n.$$.fragment,i),A(l.$$.fragment,i),o=!0)},o(i){P(n.$$.fragment,i),P(l.$$.fragment,i),o=!1},d(i){i&&I(e),$e(n),$e(l),i&&I(a),I(s)}}}class Yt extends Ee{constructor(e){super(),We(this,e,null,Vt,ve,{})}}new Yt({target:document.getElementById("app")});
