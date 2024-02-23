"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9629:(C,m,r)=>{r.d(m,{c:()=>c});var g=r(8576),a=r(967),f=r(9203);const c=(i,s)=>{let t,o;const v=(n,l,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(n,l);E&&s(E)?E!==t&&(e(),d(E,p)):e()},d=(n,l)=>{t=n,o||(o=t);const p=t;(0,g.w)(()=>p.classList.add("ion-activated")),l()},e=(n=!1)=>{if(!t)return;const l=t;(0,g.w)(()=>l.classList.remove("ion-activated")),n&&o!==t&&t.click(),t=void 0};return(0,f.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:n=>v(n.currentX,n.currentY,a.a),onMove:n=>v(n.currentX,n.currentY,a.b),onEnd:()=>{e(!0),(0,a.h)(),o=void 0}})}},4874:(C,m,r)=>{r.d(m,{g:()=>a});var g=r(6225);const a=()=>{if(void 0!==g.w)return g.w.Capacitor}},3365:(C,m,r)=>{r.d(m,{E:()=>d,a:()=>g});const g=e=>{try{if(e instanceof t)return e.value;if(!c()||"string"!=typeof e||""===e)return e;if(e.includes("onload="))return"";const n=document.createDocumentFragment(),l=document.createElement("div");n.appendChild(l),l.innerHTML=e,s.forEach(u=>{const w=n.querySelectorAll(u);for(let _=w.length-1;_>=0;_--){const y=w[_];y.parentNode?y.parentNode.removeChild(y):n.removeChild(y);const O=f(y);for(let h=0;h<O.length;h++)a(O[h])}});const p=f(n);for(let u=0;u<p.length;u++)a(p[u]);const E=document.createElement("div");E.appendChild(n);const M=E.querySelector("div");return null!==M?M.innerHTML:E.innerHTML}catch(n){return console.error(n),""}},a=e=>{if(e.nodeType&&1!==e.nodeType)return;if(typeof NamedNodeMap<"u"&&!(e.attributes instanceof NamedNodeMap))return void e.remove();for(let l=e.attributes.length-1;l>=0;l--){const p=e.attributes.item(l),E=p.name;if(!i.includes(E.toLowerCase())){e.removeAttribute(E);continue}const M=p.value,u=e[E];(null!=M&&M.toLowerCase().includes("javascript:")||null!=u&&u.toLowerCase().includes("javascript:"))&&e.removeAttribute(E)}const n=f(e);for(let l=0;l<n.length;l++)a(n[l])},f=e=>null!=e.children?e.children:e.childNodes,c=()=>{var e;const n=window,l=null===(e=null==n?void 0:n.Ionic)||void 0===e?void 0:e.config;return!l||(l.get?l.get("sanitizerEnabled",!0):!0===l.sanitizerEnabled||void 0===l.sanitizerEnabled)},i=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"];class t{constructor(n){this.value=n}}const d=!1},5149:(C,m,r)=>{r.d(m,{g:()=>g});const g=(s,t,o,v,d)=>f(s[1],t[1],o[1],v[1],d).map(e=>a(s[0],t[0],o[0],v[0],e)),a=(s,t,o,v,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*o*d+3*o+v*d))-s*Math.pow(d-1,3),f=(s,t,o,v,d)=>i((v-=d)-3*(o-=d)+3*(t-=d)-(s-=d),3*o-6*t+3*s,3*t-3*s,s).filter(n=>n>=0&&n<=1),i=(s,t,o,v)=>{if(0===s)return((s,t,o)=>{const v=t*t-4*s*o;return v<0?[]:[(-t+Math.sqrt(v))/(2*s),(-t-Math.sqrt(v))/(2*s)]})(t,o,v);const d=(3*(o/=s)-(t/=s)*t)/3,e=(2*t*t*t-9*t*o+27*(v/=s))/27;if(0===d)return[Math.pow(-e,1/3)];if(0===e)return[Math.sqrt(-d),-Math.sqrt(-d)];const n=Math.pow(e/2,2)+Math.pow(d/3,3);if(0===n)return[Math.pow(e/2,.5)-t/3];if(n>0)return[Math.pow(-e/2+Math.sqrt(n),1/3)-Math.pow(e/2+Math.sqrt(n),1/3)-t/3];const l=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-e/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(l,1/3);return[E*Math.cos(p/3)-t/3,E*Math.cos((p+2*Math.PI)/3)-t/3,E*Math.cos((p+4*Math.PI)/3)-t/3]}},5085:(C,m,r)=>{r.d(m,{i:()=>g});const g=a=>a&&""!==a.dir?"rtl"===a.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},2779:(C,m,r)=>{r.r(m),r.d(m,{startFocusVisible:()=>c});const g="ion-focused",f=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=i=>{let s=[],t=!0;const o=i?i.shadowRoot:document,v=i||document.body,d=M=>{s.forEach(u=>u.classList.remove(g)),M.forEach(u=>u.classList.add(g)),s=M},e=()=>{t=!1,d([])},n=M=>{t=f.includes(M.key),t||d([])},l=M=>{if(t&&void 0!==M.composedPath){const u=M.composedPath().filter(w=>!!w.classList&&w.classList.contains("ion-focusable"));d(u)}},p=()=>{o.activeElement===v&&d([])};return o.addEventListener("keydown",n),o.addEventListener("focusin",l),o.addEventListener("focusout",p),o.addEventListener("touchstart",e,{passive:!0}),o.addEventListener("mousedown",e),{destroy:()=>{o.removeEventListener("keydown",n),o.removeEventListener("focusin",l),o.removeEventListener("focusout",p),o.removeEventListener("touchstart",e),o.removeEventListener("mousedown",e)},setFocus:d}}},9988:(C,m,r)=>{r.d(m,{c:()=>a});var g=r(839);const a=s=>{const t=s;let o;return{hasLegacyControl:()=>{if(void 0===o){const d=void 0!==t.label||f(t),e=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,n=(0,g.h)(t);o=!0===t.legacy||!d&&!e&&null!==n}return o}}},f=s=>!!(c.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||i.includes(s.tagName)&&""!==s.textContent),c=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],i=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},967:(C,m,r)=>{r.d(m,{I:()=>a,a:()=>t,b:()=>o,c:()=>s,d:()=>d,h:()=>v});var g=r(4874),a=function(e){return e.Heavy="HEAVY",e.Medium="MEDIUM",e.Light="LIGHT",e}(a||{});const c={getEngine(){const e=window.TapticEngine;if(e)return e;const n=(0,g.g)();return null!=n&&n.isPluginAvailable("Haptics")?n.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const n=(0,g.g)();return"web"!==(null==n?void 0:n.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,g.g)(),impact(e){const n=this.getEngine();if(!n)return;const l=this.isCapacitor()?e.style:e.style.toLowerCase();n.impact({style:l})},notification(e){const n=this.getEngine();if(!n)return;const l=this.isCapacitor()?e.type:e.type.toLowerCase();n.notification({type:l})},selection(){const e=this.isCapacitor()?a.Light:"light";this.impact({style:e})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=()=>c.available(),s=()=>{i()&&c.selection()},t=()=>{i()&&c.selectionStart()},o=()=>{i()&&c.selectionChanged()},v=()=>{i()&&c.selectionEnd()},d=e=>{i()&&c.impact(e)}},2874:(C,m,r)=>{r.d(m,{I:()=>s,a:()=>d,b:()=>i,c:()=>l,d:()=>E,f:()=>e,g:()=>v,i:()=>o,p:()=>p,r:()=>M,s:()=>n});var g=r(5861),a=r(839),f=r(6710);const i="ion-content",s=".ion-content-scroll-host",t=`${i}, ${s}`,o=u=>"ION-CONTENT"===u.tagName,v=function(){var u=(0,g.Z)(function*(w){return o(w)?(yield new Promise(_=>(0,a.c)(w,_)),w.getScrollElement()):w});return function(_){return u.apply(this,arguments)}}(),d=u=>u.querySelector(s)||u.querySelector(t),e=u=>u.closest(t),n=(u,w)=>o(u)?u.scrollToTop(w):Promise.resolve(u.scrollTo({top:0,left:0,behavior:w>0?"smooth":"auto"})),l=(u,w,_,y)=>o(u)?u.scrollByPoint(w,_,y):Promise.resolve(u.scrollBy({top:_,left:w,behavior:y>0?"smooth":"auto"})),p=u=>(0,f.b)(u,i),E=u=>{if(o(u)){const _=u.scrollY;return u.scrollY=!1,_}return u.style.setProperty("overflow","hidden"),!0},M=(u,w)=>{o(u)?u.scrollY=w:u.style.removeProperty("overflow")}},5307:(C,m,r)=>{r.d(m,{a:()=>g,b:()=>l,c:()=>t,d:()=>p,e:()=>b,f:()=>s,g:()=>E,h:()=>f,i:()=>a,j:()=>y,k:()=>O,l:()=>o,m:()=>e,n:()=>M,o:()=>d,p:()=>i,q:()=>c,r:()=>_,s:()=>h,t:()=>n,u:()=>u,v:()=>w,w:()=>v});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(C,m,r)=>{r.d(m,{c:()=>c,g:()=>i});var g=r(6225),a=r(839),f=r(6710);const c=(t,o,v)=>{let d,e;void 0!==g.w&&"MutationObserver"in g.w&&(d=new MutationObserver(E=>{for(const M of E)for(const u of M.addedNodes)if(u.nodeType===Node.ELEMENT_NODE&&u.slot===o)return v(),void(0,a.r)(()=>n(u))}),d.observe(t,{childList:!0}));const n=E=>{var M;e&&(e.disconnect(),e=void 0),e=new MutationObserver(u=>{v();for(const w of u)for(const _ of w.removedNodes)_.nodeType===Node.ELEMENT_NODE&&_.slot===o&&p()}),e.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},p=()=>{e&&(e.disconnect(),e=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),p()}}},i=(t,o,v)=>{const d=null==t?0:t.toString().length,e=s(d,o);if(void 0===v)return e;try{return v(d,o)}catch(n){return(0,f.a)("Exception in provided `counterFormatter`.",n),e}},s=(t,o)=>`${t} / ${o}`},7484:(C,m,r)=>{r.d(m,{K:()=>c,a:()=>f});var g=r(4874),a=function(i){return i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE",i}(a||{}),f=function(i){return i.Body="body",i.Ionic="ionic",i.Native="native",i.None="none",i}(f||{});const c={getEngine(){const i=(0,g.g)();if(null!=i&&i.isPluginAvailable("Keyboard"))return i.Plugins.Keyboard},getResizeMode(){const i=this.getEngine();return null!=i&&i.getResizeMode?i.getResizeMode().catch(s=>{if(s.code!==a.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(C,m,r)=>{r.r(m),r.d(m,{KEYBOARD_DID_CLOSE:()=>i,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>O,keyboardDidClose:()=>u,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>p,setKeyboardOpen:()=>l,startKeyboardAssist:()=>e,trackViewportChanges:()=>y});var g=r(7484);r(4874),r(6225);const c="ionKeyboardDidShow",i="ionKeyboardDidHide";let t={},o={},v=!1;const d=()=>{t={},o={},v=!1},e=h=>{if(g.K.getEngine())n(h);else{if(!h.visualViewport)return;o=O(h.visualViewport),h.visualViewport.onresize=()=>{y(h),E()||M(h)?l(h):u(h)&&p(h)}}},n=h=>{h.addEventListener("keyboardDidShow",b=>l(h,b)),h.addEventListener("keyboardDidHide",()=>p(h))},l=(h,b)=>{w(h,b),v=!0},p=h=>{_(h),v=!1},E=()=>!v&&t.width===o.width&&(t.height-o.height)*o.scale>150,M=h=>v&&!u(h),u=h=>v&&o.height===h.innerHeight,w=(h,b)=>{const L=new CustomEvent(c,{detail:{keyboardHeight:b?b.keyboardHeight:h.innerHeight-o.height}});h.dispatchEvent(L)},_=h=>{const b=new CustomEvent(i);h.dispatchEvent(b)},y=h=>{t=Object.assign({},o),o=O(h.visualViewport)},O=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},3459:(C,m,r)=>{r.d(m,{c:()=>s});var g=r(5861),a=r(6225),f=r(7484);const c=t=>{if(void 0===a.d||t===f.a.None||void 0===t)return null;const o=a.d.querySelector("ion-app");return null!=o?o:a.d.body},i=t=>{const o=c(t);return null===o?0:o.clientHeight},s=function(){var t=(0,g.Z)(function*(o){let v,d,e,n;const l=function(){var w=(0,g.Z)(function*(){const _=yield f.K.getResizeMode(),y=void 0===_?void 0:_.mode;v=()=>{void 0===n&&(n=i(y)),e=!0,p(e,y)},d=()=>{e=!1,p(e,y)},null==a.w||a.w.addEventListener("keyboardWillShow",v),null==a.w||a.w.addEventListener("keyboardWillHide",d)});return function(){return w.apply(this,arguments)}}(),p=(w,_)=>{o&&o(w,E(_))},E=w=>{if(0===n||n===i(w))return;const _=c(w);return null!==_?new Promise(y=>{const h=new ResizeObserver(()=>{_.clientHeight===n&&(h.disconnect(),y())});h.observe(_)}):void 0};return yield l(),{init:l,destroy:()=>{null==a.w||a.w.removeEventListener("keyboardWillShow",v),null==a.w||a.w.removeEventListener("keyboardWillHide",d),v=d=void 0},isKeyboardVisible:()=>e}});return function(v){return t.apply(this,arguments)}}()},3830:(C,m,r)=>{r.d(m,{c:()=>a});var g=r(5861);const a=()=>{let f;return{lock:function(){var i=(0,g.Z)(function*(){const s=f;let t;return f=new Promise(o=>t=o),void 0!==s&&(yield s),t});return function(){return i.apply(this,arguments)}}()}}},5857:(C,m,r)=>{r.d(m,{c:()=>f});var g=r(6225),a=r(839);const f=(c,i,s)=>{let t;const o=()=>!(void 0===i()||void 0!==c.label||null===s()),d=()=>{const n=i();if(void 0===n)return;if(!o())return void n.style.removeProperty("width");const l=s().scrollWidth;if(0===l&&null===n.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==t)return;const p=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),p.disconnect(),t=void 0)},{threshold:.01,root:c});p.observe(n)}else n.style.setProperty("width",.75*l+"px")};return{calculateNotchWidth:()=>{o()&&(0,a.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},3781:(C,m,r)=>{r.d(m,{S:()=>a});const a={bubbles:{dur:1e3,circles:9,fn:(f,c,i)=>{const s=f*c/i-f+"ms",t=2*Math.PI*c/i;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(f,c,i)=>{const s=c/i,t=f*s-f+"ms",o=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(f,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(f,c,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":f*c/i-f+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(f,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":f*c/i-f+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(f,c,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":f*c/i-f+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(f,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":f*c/i-f+"ms"}})}}},8663:(C,m,r)=>{r.r(m),r.d(m,{createSwipeBackGesture:()=>i});var g=r(839),a=r(5085),f=r(9203);r(619);const i=(s,t,o,v,d)=>{const e=s.ownerDocument.defaultView;let n=(0,a.i)(s);const p=_=>n?-_.deltaX:_.deltaX;return(0,f.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:_=>(n=(0,a.i)(s),(_=>{const{startX:O}=_;return n?O>=e.innerWidth-50:O<=50})(_)&&t()),onStart:o,onMove:_=>{const O=p(_)/e.innerWidth;v(O)},onEnd:_=>{const y=p(_),O=e.innerWidth,h=y/O,b=(_=>n?-_.velocityX:_.velocityX)(_),L=b>=0&&(b>.2||y>O/2),T=(L?1-h:h)*O;let P=0;if(T>5){const k=T/Math.abs(b);P=Math.min(k,540)}d(L,h<=0?.01:(0,g.l)(0,h,.9999),P)}})}},5564:(C,m,r)=>{r.d(m,{w:()=>g});const g=(c,i,s)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(o=>{s(a(o,i))});return t.observe(c,{childList:!0,subtree:!0}),t},a=(c,i)=>{let s;return c.forEach(t=>{for(let o=0;o<t.addedNodes.length;o++)s=f(t.addedNodes[o],i)||s}),s},f=(c,i)=>{if(1!==c.nodeType)return;const s=c;return(s.tagName===i.toUpperCase()?[s]:Array.from(s.querySelectorAll(i))).find(o=>o.value===s.value)}}}]);