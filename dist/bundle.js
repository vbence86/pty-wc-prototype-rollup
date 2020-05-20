var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(){return a("")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function $(t,e){(null!=e||t.value)&&(t.value=e)}let g;function b(t){g=t}function y(){if(!g)throw new Error("Function called outside component initialization");return g}function x(){const t=y();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}!function(){const t={};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();const v=[],w=[],C=[],E=[],_=Promise.resolve();let k=!1;function A(t){C.push(t)}let N=!1;const T=new Set;function O(){if(!N){N=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];b(e),S(e.$$)}for(v.length=0;w.length;)w.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];T.has(e)||(T.add(e),e())}C.length=0}while(v.length);for(;E.length;)E.pop()();k=!1,N=!1,T.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const j=new Set;let F,L;function R(){F={r:0,c:[],p:F}}function z(){F.r||o(F.c),F=F.p}function B(t,e){t&&t.i&&(j.delete(t),t.i(e))}function M(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),F.c.push(()=>{j.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function D(t){t&&t.c()}function H(t,n,c){const{fragment:s,on_mount:l,on_destroy:u,after_update:i}=t.$$;s&&s.m(n,c),A(()=>{const n=l.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(A)}function P(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(v.push(t),k||(k=!0,_.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,c,s,l,i,a=[-1]){const f=g;b(e);const d=r.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:a};let m=!1;if(p.ctx=c?c(e,d,(t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),m&&q(e,t)),n}):[],p.update(),m=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&B(e.$$.fragment),H(e,r.target,r.anchor),O()}b(f)}"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class U{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function G(e){let n,o;return{c(){n=i("div"),o=a(e[0]),m(n,"class","navbar bg-primary")},m(t,e){l(t,n,e),s(n,o)},p(t,[e]){1&e&&h(o,t[0])},i:t,o:t,d(t){t&&u(n)}}}function J(t,e,n){let{text:o="Default Text"}=e;return t.$set=t=>{"text"in t&&n(0,o=t.text)},[o]}class K extends U{constructor(t){super(),I(this,t,J,G,c,{text:0})}}function Q(t){let e;return{c(){e=a("+")},m(t,n){l(t,e,n)},d(t){t&&u(e)}}}function V(t){let e;return{c(){e=a("-")},m(t,n){l(t,e,n)},d(t){t&&u(e)}}}function W(t){let e,n,r,c,s,a;return{c(){e=i("button"),e.textContent="+",n=f(),r=i("button"),r.textContent="-",c=f(),s=i("input"),m(e,"class","btn"),m(r,"class","btn btn-dark"),m(s,"type","text")},m(u,i,f){l(u,e,i),l(u,n,i),l(u,r,i),l(u,c,i),l(u,s,i),$(s,t[0]),f&&o(a),a=[p(e,"click",t[3]),p(r,"click",t[4]),p(s,"input",t[8])]},p(t,e){1&e&&s.value!==t[0]&&$(s,t[0])},d(t){t&&u(e),t&&u(n),t&&u(r),t&&u(c),t&&u(s),o(a)}}}function X(e){let n,r,c,$,g,b,y,x,v,w,C,E,_;function k(t,e){return t[1]?V:Q}let A=k(e),N=A(e),T=e[1]&&W(e);return{c(){n=i("h1"),r=a(e[2]),c=f(),$=i("button"),N.c(),g=f(),b=i("button"),b.textContent="x",y=f(),x=i("h3"),v=a("Score: "),w=a(e[0]),C=f(),T&&T.c(),E=d(),m($,"class","btn btn-sm"),m(b,"class","btn btn-danger btn-sm"),m(n,"style","\n  color: #F00;\n  font-size: 2.0rem;\n  white-space: nowrap;\n"),m(x,"style","\n  color: #FFA;\n  font-size: 1.2rem;\n")},m(t,u,i){l(t,n,u),s(n,r),s(n,c),s(n,$),N.m($,null),s(n,g),s(n,b),l(t,y,u),l(t,x,u),s(x,v),s(x,w),l(t,C,u),T&&T.m(t,u),l(t,E,u),i&&o(_),_=[p($,"click",e[5]),p(b,"click",e[6])]},p(t,[e]){4&e&&h(r,t[2]),A!==(A=k(t))&&(N.d(1),N=A(t),N&&(N.c(),N.m($,null))),1&e&&h(w,t[0]),t[1]?T?T.p(t,e):(T=W(t),T.c(),T.m(E.parentNode,E)):T&&(T.d(1),T=null)},i:t,o:t,d(t){t&&u(n),N.d(),t&&u(y),t&&u(x),t&&u(C),T&&T.d(t),t&&u(E),o(_)}}}function Y(t,e,n){const o=x();let{name:r}=e,{score:c}=e,{showControls:s=!1}=e;return t.$set=t=>{"name"in t&&n(2,r=t.name),"score"in t&&n(0,c=t.score),"showControls"in t&&n(1,s=t.showControls)},[c,s,r,()=>n(0,c+=1),()=>n(0,c-=1),()=>n(1,s=!s),()=>o("removeplayer",r),o,function(){c=this.value,n(0,c)}]}class Z extends U{constructor(t){super(),I(this,t,Y,X,c,{name:2,score:0,showControls:1})}}function tt(e){let n,r,c,a,d,h,g;return{c(){n=i("form"),r=i("input"),c=f(),a=i("input"),d=f(),h=i("button"),h.textContent="Add Player",m(r,"type","text"),m(r,"placeholder","Name"),m(a,"type","text"),m(a,"placeholder","Score"),m(h,"type","submit"),m(n,"class","grid-3")},m(t,u,i){l(t,n,u),s(n,r),$(r,e[0].name),s(n,c),s(n,a),$(a,e[0].score),s(n,d),s(n,h),i&&o(g),g=[p(r,"input",e[4]),p(a,"input",e[5]),p(n,"submit",e[1])]},p(t,[e]){1&e&&r.value!==t[0].name&&$(r,t[0].name),1&e&&a.value!==t[0].score&&$(a,t[0].score)},i:t,o:t,d(t){t&&u(n),o(g)}}}function et(t,e,n){const o=x(),r={name:"",score:0};let c={...r};return[c,t=>{t.preventDefault(),o("addplayer",c),n(0,c={...r})},o,r,function(){c.name=this.value,n(0,c)},function(){c.score=this.value,n(0,c)}]}class nt extends U{constructor(t){super(),I(this,t,et,tt,c,{})}}function ot(t,e,n){const o=t.slice();return o[4]=e[n],o}function rt(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=st(ot(t,o,e));const c=t=>M(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=d()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);l(t,e,o),n=!0},p(t,n){if(5&n){let s;for(o=t[0],s=0;s<o.length;s+=1){const c=ot(t,o,s);r[s]?(r[s].p(c,n),B(r[s],1)):(r[s]=st(c),r[s].c(),B(r[s],1),r[s].m(e.parentNode,e))}for(R(),s=o.length;s<r.length;s+=1)c(s);z()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)B(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)M(r[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&u(e)}}}function ct(e){let n;return{c(){n=i("p"),n.textContent="No players"},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}function st(t){let e;const n=new Z({props:{name:t[4].name,score:t[4].score}});return n.$on("removeplayer",t[2]),{c(){D(n.$$.fragment)},m(t,o){H(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.name=t[4].name),1&e&&(o.score=t[4].score),n.$set(o)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){P(n,t)}}}function lt(e){let n,o,r,c,a,d;const p=new K({props:{text:"This is my svelte custom element"}}),h=new nt({});h.$on("addplayer",e[1]);const $=[ct,rt],g=[];function b(t,e){return 0===t[0].length?0:1}return c=b(e),a=g[c]=$[c](e),{c(){D(p.$$.fragment),n=f(),o=i("div"),D(h.$$.fragment),r=f(),a.c(),this.c=t,m(o,"class","container")},m(t,e){H(p,t,e),l(t,n,e),l(t,o,e),H(h,o,null),s(o,r),g[c].m(o,null),d=!0},p(t,[e]){let n=c;c=b(t),c===n?g[c].p(t,e):(R(),M(g[n],1,1,()=>{g[n]=null}),z(),a=g[c],a||(a=g[c]=$[c](t),a.c()),B(a,1),a.m(o,null))},i(t){d||(B(p.$$.fragment,t),B(h.$$.fragment,t),B(a),d=!0)},o(t){M(p.$$.fragment,t),M(h.$$.fragment,t),M(a),d=!1},d(t){P(p,t),t&&u(n),t&&u(o),P(h),g[c].d()}}}function ut(t,e,n){var o;o=()=>{((t="cssThemeURI")=>{const e=y(),n=e.getAttribute&&e.getAttribute(t);if(!n)return;const o=document.createElement("style");o.textContent=`@import "${n}";`,e.shadowRoot.insertBefore(o,e.shadowRoot.firstChild)})()},y().$$.on_mount.push(o);let{players:r=[]}=e;return t.$set=t=>{"players"in t&&n(0,r=t.players)},[r,t=>{const e=t.detail;n(0,r=[...r,e])},t=>{n(0,r=r.filter(e=>e.name!==t.detail))}]}class it extends L{constructor(t){super(),I(this,{target:this.shadowRoot},ut,lt,c,{players:0}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),O()))}static get observedAttributes(){return["players"]}get players(){return this.$$.ctx[0]}set players(t){this.$set({players:t}),O()}}return customElements.define("pty-scoreboard",it),it}();
//# sourceMappingURL=bundle.js.map
