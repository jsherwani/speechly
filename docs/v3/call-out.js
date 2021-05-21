!function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e}const a="undefined"!=typeof window;let c=a?()=>window.performance.now():()=>Date.now(),l=a?t=>requestAnimationFrame(t):t;const u=new Set;function d(t){u.forEach((e=>{e.c(t)||(u.delete(e),e.f())})),0!==u.size&&l(d)}function f(t){let e;return 0===u.size&&l(d),{promise:new Promise((n=>{u.add(e={c:t,f:n})})),abort(){u.delete(e)}}}let h=!1;const m=new Set;function p(t,e){h&&m.delete(e),e.parentNode!==t&&t.appendChild(e)}function g(t,e,n){h&&m.delete(e),(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function $(t){h?m.add(t):t.parentNode&&t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function w(){return t=" ",document.createTextNode(t);var t}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function x(t){const e={};for(const n of t)e[n.name]=n.value;return e}const k=new Set;let z,E=0;function C(t,e,n,o,r,s,i,a=0){const c=16.666/o;let l="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*s(t);l+=100*t+`%{${i(o,1-o)}}\n`}const u=l+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,f=t.ownerDocument;k.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(v("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${d} ${o}ms linear ${r}ms 1 both`,E+=1,d}function S(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),E-=r,E||l((()=>{E||(k.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),k.clear())})))}function D(t){z=t}const A=[],T=[],L=[],N=[],O=Promise.resolve();let P=!1;function M(t){L.push(t)}let R=!1;const j=new Set;function H(){if(!R){R=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];D(e),q(e.$$)}for(D(null),A.length=0;T.length;)T.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];j.has(e)||(j.add(e),e())}L.length=0}while(A.length);for(;N.length;)N.pop()();P=!1,R=!1,j.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let B;function F(){return B||(B=Promise.resolve(),B.then((()=>{B=null}))),B}function G(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const I=new Set;let J;function K(t,e){t&&t.i&&(I.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(I.has(t))return;I.add(t),J.c.push((()=>{I.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const U={duration:0};function V(t,e){-1===t.$$.dirty[0]&&(A.push(t),P||(P=!0,O.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,i,a,c,l,u,d=[-1]){const f=z;D(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:i.context||[]),callbacks:o(),dirty:d,skip_bound:!1};let g=!1;if(p.ctx=a?a(e,i.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),g&&V(e,t)),n})):[],p.update(),g=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),i.target){if(i.hydrate){h=!0;const t=function(t){return Array.from(t.childNodes)}(i.target);p.fragment&&p.fragment.l(t),t.forEach($)}else p.fragment&&p.fragment.c();i.intro&&K(e.$$.fragment),function(t,e,o,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,o),i||M((()=>{const e=c.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(M)}(e,i.target,i.anchor,i.customElement),function(){h=!1;for(const t of m)t.parentNode.removeChild(t);m.clear()}(),H()}D(f)}let X;function Y(n){let o,i,a,l,u,d,h,m,x,k;return{c(){o=v("div"),i=v("div"),i.innerHTML="<slot></slot>",a=w(),l=v("div"),u=w(),y(i,"class","CalloutDiv"),function(t,e,n){t.classList[n?"add":"remove"](e)}(i,"useShadow",tt),y(l,"class","ArrowDiv"),_(l,"--ax","50%"),_(l,"--ay","100%"),y(o,"class","CalloutContainerDiv")},m(t,e){g(t,o,e),p(o,i),p(o,a),p(o,l),p(o,u),m=!0,x||(k=[b(o,"mousedown",n[7]),b(o,"touchstart",n[7]),b(o,"dragstart",n[7])],x=!0)},p:t,i(r){m||(M((()=>{h&&h.end(1),d||(d=function(n,o,r){let i,a,l=o(n,r),u=!1,d=0;function h(){i&&S(n,i)}function m(){const{delay:o=0,duration:r=300,easing:s=e,tick:m=t,css:p}=l||U;p&&(i=C(n,0,1,r,o,s,p,d++)),m(0,1);const g=c()+o,$=g+r;a&&a.abort(),u=!0,M((()=>G(n,!0,"start"))),a=f((t=>{if(u){if(t>=$)return m(1,0),G(n,!0,"end"),h(),u=!1;if(t>=g){const e=s((t-g)/r);m(e,1-e)}}return u}))}let p=!1;return{start(){p||(S(n),s(l)?(l=l(),F().then(m)):m())},invalidate(){p=!1},end(){u&&(h(),u=!1)}}}(o,n[6],{})),d.start()})),m=!0)},o(i){d&&d.invalidate(),h=function(n,o,i){let a,l=o(n,i),u=!0;const d=J;function h(){const{delay:o=0,duration:s=300,easing:i=e,tick:h=t,css:m}=l||U;m&&(a=C(n,1,0,s,o,i,m));const p=c()+o,g=p+s;M((()=>G(n,!1,"start"))),f((t=>{if(u){if(t>=g)return h(0,1),G(n,!1,"end"),--d.r||r(d.c),!1;if(t>=p){const e=i((t-p)/s);h(1-e,e)}}return u}))}return d.r+=1,s(l)?F().then((()=>{l=l(),h()})):h(),{end(t){t&&l.tick&&l.tick(1,0),u&&(a&&S(n,a),u=!1)}}}(o,n[6],{}),m=!1},d(t){t&&$(o),t&&h&&h.end(),x=!1,r(k)}}}function Z(e){let n,o,s,i,a=e[2]&&Y(e);return{c(){n=v("main"),a&&a.c(),o=w(),s=v("link"),this.c=t,_(n,"--ax",e[3].x),_(n,"--ay",e[3].y),_(n,"--halign",e[4].x),_(n,"--valign",e[4].y),_(n,"--borderradius",et),_(n,"--arrowpad",`${e[5].value}${e[5].unit}`),_(n,"--backgroundcolor",e[1]),_(n,"--size",`${e[5].value*Math.sqrt(2)}${e[5].unit}`),_(n,"--fontsize",e[0]),_(n,"--offsetx","0rem"),_(n,"--offsety",`${e[5].value}${e[5].unit}`),y(s,"href","https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@700&display=swap"),y(s,"rel","stylesheet")},m(t,e){g(t,n,e),a&&a.m(n,null),g(t,o,e),p(document.head,s),i=!0},p(t,[e]){t[2]?a?(a.p(t,e),4&e&&K(a,1)):(a=Y(t),a.c(),K(a,1),a.m(n,null)):a&&(J={r:0,c:[],p:J},Q(a,1,1,(()=>{a=null})),J.r||r(J.c),J=J.p),(!i||2&e)&&_(n,"--backgroundcolor",t[1]),(!i||1&e)&&_(n,"--fontsize",t[0])},i(t){i||(K(a),i=!0)},o(t){Q(a),i=!1},d(t){t&&$(n),a&&a.d(),t&&$(o),$(s)}}}"function"==typeof HTMLElement&&(X=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){r(this.$$.on_disconnect)}$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});let tt=!1,et="0rem";function nt(t,e,n){let{show:o}=e,{showtime:r=1e4}=e,{fontsize:s="1.2rem"}=e,{backgroundcolor:i="#202020"}=e,a=null,c=!1;const l=(u=(t,{duration:e=250})=>({duration:e,css:t=>`\n          clip-path: circle(${100*t}% at center);\n        `}),function(t,e){if(!t.hasOwnProperty("ownerDocument")){Object.defineProperty(t,"ownerDocument",{get:function(){return t.parentElement}});let e=t;for(;e.parentElement;)e=e.parentElement;t.parentElement.head=e}return u(t,e)});var u;return t.$$set=t=>{"show"in t&&n(8,o=t.show),"showtime"in t&&n(9,r=t.showtime),"fontsize"in t&&n(0,s=t.fontsize),"backgroundcolor"in t&&n(1,i=t.backgroundcolor)},t.$$.update=()=>{256&t.$$.dirty&&(t=>{null!==a&&(window.clearTimeout(a),a=null),void 0!==t&&"false"!==t?a=window.setTimeout((()=>{n(2,c=!0),a=null,r>0&&(a=window.setTimeout((()=>{n(2,c=!1),a=null}),r))}),500):n(2,c=!1)})(o)},[s,i,c,{x:"50%",y:"10%"},{x:"50%",y:"100%"},{value:.55,unit:"rem"},l,t=>{t.preventDefault(),t.stopPropagation(),n(2,c=!1)},o,r]}class ot extends X{constructor(t){super(),this.shadowRoot.innerHTML="<style>main{margin:0;padding:0}.CalloutContainerDiv{position:absolute;left:var(--ax);top:var(--ay);transform:translate(calc(-1 * var(--halign)), calc(-1 * var(--valign)));padding:var(--arrowpad);z-index:10;pointer-events:auto}.CalloutDiv{position:relative;box-sizing:border-box;min-width:8rem;border-radius:var(--borderradius);padding:0.50rem 1rem;background-color:var(--backgroundcolor);text-align:center;user-select:none;z-index:10;color:#fff;font-family:'Saira Condensed', sans-serif;font-size:var(--fontsize);line-height:120%;text-transform:uppercase}.useShadow{box-shadow:0 0.2rem 0.5rem #00000040}.ArrowDiv{position:absolute;left:calc(var(--ax) - var(--offsetx));top:calc(var(--ay) - var(--offsety));transform:translate(-50%, -50%) rotate(45deg);width:var(--size);height:var(--size);background-color:var(--backgroundcolor);z-index:10}.ArrowShadowDiv{position:absolute;left:calc(var(--ax) - var(--offsetx));top:calc(var(--ay) - var(--offsety));transform:translate(-50%, -50%) rotate(45deg);width:var(--size);height:var(--size);background-color:var(--backgroundcolor);background-color:#00000000;box-shadow:0 0.2rem 0.5rem #00000040;z-index:9}</style>",W(this,{target:this.shadowRoot,props:x(this.attributes),customElement:!0},nt,Z,i,{show:8,showtime:9,fontsize:0,backgroundcolor:1}),t&&(t.target&&g(t.target,this,t.anchor),t.props&&(this.$set(t.props),H()))}static get observedAttributes(){return["show","showtime","fontsize","backgroundcolor"]}get show(){return this.$$.ctx[8]}set show(t){this.$set({show:t}),H()}get showtime(){return this.$$.ctx[9]}set showtime(t){this.$set({showtime:t}),H()}get fontsize(){return this.$$.ctx[0]}set fontsize(t){this.$set({fontsize:t}),H()}get backgroundcolor(){return this.$$.ctx[1]}set backgroundcolor(t){this.$set({backgroundcolor:t}),H()}}customElements.get("call-out")?console.warn("Skipping re-defining customElement call-out"):customElements.define("call-out",ot)}();
//# sourceMappingURL=call-out.js.map
