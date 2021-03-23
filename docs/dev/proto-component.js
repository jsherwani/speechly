!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n}function c(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function u(t){const n={};for(const e of t)n[e.name]=e.value;return n}let a;function l(t){a=t}function d(){if(!a)throw new Error("Function called outside component initialization");return a}const f=[],h=[],p=[],m=[],$=Promise.resolve();let g=!1;function b(t){p.push(t)}let _=!1;const y=new Set;function v(){if(!_){_=!0;do{for(let t=0;t<f.length;t+=1){const n=f[t];l(n),E(n.$$)}for(l(null),f.length=0;h.length;)h.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];y.has(n)||(y.add(n),n())}p.length=0}while(f.length);for(;m.length;)m.pop()();g=!1,_=!1,y.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const x=new Set;function k(t,n){-1===t.$$.dirty[0]&&(f.push(t),g||(g=!0,$.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function w(s,c,u,d,f,h,p=[-1]){const m=a;l(s);const $=s.$$={fragment:null,ctx:null,props:h,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:e(),dirty:p,skip_bound:!1};let g=!1;if($.ctx=u?u(s,c.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&f($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),g&&k(s,t)),n})):[],$.update(),g=!0,o($.before_update),$.fragment=!!d&&d($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();c.intro&&((_=s.$$.fragment)&&_.i&&(x.delete(_),_.i(y))),function(t,e,s,c){const{fragment:i,on_mount:u,on_destroy:a,after_update:l}=t.$$;i&&i.m(e,s),c||b((()=>{const e=u.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(b)}(s,c.target,c.anchor,c.customElement),v()}var _,y;l(m)}let C;function L(n){let e;return{c(){var n,o,r,s;n="div",e=document.createElement(n),e.innerHTML='<div style="color: blue;">proto-component</div>',this.c=t,o=e,r="class",null==(s="ProtoComponent")?o.removeAttribute(r):o.getAttribute(r)!==s&&o.setAttribute(r,s)},m(t,n){c(t,e,n)},p:t,i:t,o:t,d(t){t&&i(e)}}}function M(t){const n=d(),e=t=>{var e,o;e="debug",o="proto-component.test 1",n.dispatchEvent(new CustomEvent(e,{detail:o,composed:!0}))};var o;return o=()=>(console.log("-------------------------"),n.addEventListener("test",e),()=>{n.removeEventListener("test",e)}),d().$$.on_mount.push(o),[]}"function"==typeof HTMLElement&&(C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(r);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});customElements.define("proto-component",class extends C{constructor(t){super(),this.shadowRoot.innerHTML="<style>.ProtoComponent{position:relative;user-select:none}</style>",w(this,{target:this.shadowRoot,props:u(this.attributes),customElement:!0},M,L,s,{}),t&&t.target&&c(t.target,this,t.anchor)}})}();
//# sourceMappingURL=proto-component.js.map
