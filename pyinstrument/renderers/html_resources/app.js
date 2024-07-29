var pyinstrumentHTMLRenderer=function(){"use strict";var Vt=Object.defineProperty;var Qt=(P,M,$)=>M in P?Vt(P,M,{enumerable:!0,configurable:!0,writable:!0,value:$}):P[M]=$;var y=(P,M,$)=>(Qt(P,typeof M!="symbol"?M+"":M,$),$);function P(){}function M(t){return t()}function $(){return Object.create(null)}function U(t){t.forEach(M)}function De(t){return typeof t=="function"}function x(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function st(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null){for(const i of e)i(void 0);return P}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _e(t,e,n){t.$$.on_destroy.push(ot(e,n))}function f(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function Me(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function Ne(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function w(){return D(" ")}function lt(){return D("")}function q(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function $e(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Be(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ct(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function ut(t){return Array.from(t.childNodes)}function H(t,e){e=""+e,t.data!==e&&(t.data=e)}function Le(t,e){t.value=e??""}function T(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function B(t,e,n){t.classList.toggle(e,!!n)}let Z;function Y(t){Z=t}function ze(){if(!Z)throw new Error("Function called outside component initialization");return Z}function at(t){ze().$$.on_mount.push(t)}function ft(t){ze().$$.on_destroy.push(t)}const G=[],Ue=[];let X=[];const He=[],dt=Promise.resolve();let ve=!1;function ht(){ve||(ve=!0,dt.then(Ge))}function be(t){X.push(t)}const Ae=new Set;let V=0;function Ge(){if(V!==0)return;const t=Z;do{try{for(;V<G.length;){const e=G[V];V++,Y(e),pt(e.$$)}}catch(e){throw G.length=0,V=0,e}for(Y(null),G.length=0,V=0;Ue.length;)Ue.pop()();for(let e=0;e<X.length;e+=1){const n=X[e];Ae.has(n)||(Ae.add(n),n())}X.length=0}while(G.length);for(;He.length;)He.pop()();ve=!1,Ae.clear(),Y(t)}function pt(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(be)}}function mt(t){const e=[],n=[];X.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),X=e}const te=new Set;let L;function ne(){L={r:0,c:[],p:L}}function ie(){L.r||U(L.c),L=L.p}function C(t,e){t&&t.i&&(te.delete(t),t.i(e))}function S(t,e,n,i){if(t&&t.o){if(te.has(t))return;te.add(t),L.c.push(()=>{te.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function re(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function se(t){t&&t.c()}function K(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),be(()=>{const c=t.$$.on_mount.map(M).filter(De);t.$$.on_destroy?t.$$.on_destroy.push(...c):U(c),t.$$.on_mount=[]}),r.forEach(be)}function j(t,e){const n=t.$$;n.fragment!==null&&(mt(n.after_update),U(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){t.$$.dirty[0]===-1&&(G.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,i,r,c,s=null,o=[-1]){const u=Z;Y(t);const l=t.$$={fragment:null,ctx:[],props:c,update:P,not_equal:r,bound:$(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:$(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};s&&s(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(a,m,..._)=>{const F=_.length?_[0]:m;return l.ctx&&r(l.ctx[a],l.ctx[a]=F)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](F),d&&gt(t,a)),m}):[],l.update(),d=!0,U(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const a=ut(e.target);l.fragment&&l.fragment.l(a),a.forEach(O)}else l.fragment&&l.fragment.c();e.intro&&C(t.$$.fragment),K(t,e.target,e.anchor),Ge()}Y(u)}class le{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){j(this,1),this.$destroy=P}$on(e,n){if(!De(n))return P;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!st(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_t);const Q=[];function Xe(t,e=P){let n;const i=new Set;function r(o){if(x(t,o)&&(t=o,n)){const u=!Q.length;for(const l of i)l[1](),Q.push(l,t);if(u){for(let l=0;l<Q.length;l+=2)Q[l][0](Q[l+1]);Q.length=0}}}function c(o){r(o(t))}function s(o,u=P){const l=[o,u];return i.add(l),i.size===1&&(n=e(r,c)||P),o(t),()=>{i.delete(l),i.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:s}}const Ve=Xe({}),ce=Xe("absolute");function vt(t){let e,n,i,r,c,s,o,u,l,d,a,m,_,F,h,b,v,E,R,A,k,fe,de,tt,he,pe=t[0].sampleCount+"",Se,nt,me,it,ge,Ie,Oe,rt;return Ie=ct(t[6][0]),{c(){e=g("div"),n=g("div"),i=g("div"),r=g("div"),r.textContent="pyinstrument",c=w(),s=g("div"),o=g("label"),o.textContent="Absolute time",u=w(),l=g("input"),d=w(),a=g("div"),a.textContent="Recorded:",m=w(),_=g("div"),_.textContent=`${t[2]}`,F=w(),h=g("div"),h.textContent="Duration:",b=w(),v=g("div"),v.textContent=`${t[4]} seconds`,E=w(),R=g("label"),R.textContent="Proportional time",A=w(),k=g("input"),fe=w(),de=g("div"),de.textContent="Samples:",tt=w(),he=g("div"),Se=D(pe),nt=w(),me=g("div"),me.textContent="CPU time:",it=w(),ge=g("div"),ge.textContent=`${t[3]} seconds`,p(r,"class","title svelte-tewt95"),p(o,"class","metric-label svelte-tewt95"),p(o,"for","absolute"),p(l,"type","radio"),l.__value="absolute",Le(l,l.__value),p(l,"id","absolute"),p(l,"name","time-format"),l.checked=!0,p(a,"class","metric-label svelte-tewt95"),p(_,"class","metric-value svelte-tewt95"),p(h,"class","metric-label svelte-tewt95"),p(v,"class","metric-value svelte-tewt95"),p(R,"class","metric-label svelte-tewt95"),p(R,"for","proportion"),p(k,"type","radio"),k.__value="proportion",Le(k,k.__value),p(k,"id","proportion"),p(k,"name","time-format"),p(de,"class","metric-label svelte-tewt95"),p(he,"class","metric-value svelte-tewt95"),p(me,"class","metric-label svelte-tewt95"),p(ge,"class","metric-value svelte-tewt95"),p(s,"class","metrics svelte-tewt95"),p(i,"class","row svelte-tewt95"),p(n,"class","margins"),p(e,"class","header svelte-tewt95"),Ie.p(l,k)},m(z,ee){N(z,e,ee),f(e,n),f(n,i),f(i,r),f(i,c),f(i,s),f(s,o),f(s,u),f(s,l),l.checked=l.__value===t[1],f(s,d),f(s,a),f(s,m),f(s,_),f(s,F),f(s,h),f(s,b),f(s,v),f(s,E),f(s,R),f(s,A),f(s,k),k.checked=k.__value===t[1],f(s,fe),f(s,de),f(s,tt),f(s,he),f(he,Se),f(s,nt),f(s,me),f(s,it),f(s,ge),Oe||(rt=[q(l,"change",t[5]),q(k,"change",t[7])],Oe=!0)},p(z,[ee]){ee&2&&(l.checked=l.__value===z[1]),ee&2&&(k.checked=k.__value===z[1]),ee&1&&pe!==(pe=z[0].sampleCount+"")&&H(Se,pe)},i:P,o:P,d(z){z&&O(e),Ie.r(),Oe=!1,U(rt)}}}function bt(t,e,n){var a;let i;_e(t,ce,m=>n(1,i=m));let{session:r}=e;const c=new Date(r.startTime*1e3).toLocaleString(),s=(a=r.cpuTime)==null?void 0:a.toLocaleString(void 0,{maximumSignificantDigits:3}),o=r.duration.toLocaleString(void 0,{maximumSignificantDigits:3}),u=[[]];function l(){i=this.__value,ce.set(i)}function d(){i=this.__value,ce.set(i)}return t.$$set=m=>{"session"in m&&n(0,r=m.session)},[r,i,c,s,o,l,u,d]}class At extends le{constructor(e){super(),oe(this,e,bt,vt,x,{session:0})}}const wt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAFPklEQVRYCdWXu4skVRSHb3VXP2bcXUVMBkRMTVww2XQDExEEH4iKiUYGhuJEPgJhUSMzQQSDRVzETNDMTTfUwL/ARUwM1t3pV1WX33eqbnfP9MxOu5kHTt9T93F+v3vOubeqi7QhT1+58vhiVn1G19WiaQ6KIqVQOmyT+h9kuUxp2bAAtQkpij9pbw5G5fu/3br1x8ql4NW0+rVJzaN29nop9VUeCtoerXpMTj53g+AGcINR1YB3RIJMN6dIxd/luLxcZoftzltwAct+SiNGh2jJ84BnSQWJTeBNW2C0ZrvufrZA5y2JmuemWkfCjYq5IsC6q2iE2V0LuDdMaYxKZDxo+yS3JZkEY+5SsAU7P5q1qZNEAxnXGo0NubomQM4dWPnCMAU/fUCnoA7kFjPEPohuqfO6uc++0xKSVHUcHDbNwZpAeFyHyMcg408G16mSnwW3b5OEz3rtCAyJnHUQUSEFmMdki0CMmsNOX/gkpf1RSpf223Q43jC2MMw4tFWsjwHzBngsIOT6CaEf7wGKrTo/agFbH8oWAQdkWTF5htGntSDn2h2YBTal/9603Z2++swZ0+5BZIjdQwfUz5DcGwHVotSfdpYtAg7oUKzaycyo6PjmkA4cRmgBuf5zSj/80kbAuToaYHz9afdgCiCxJF3gpudfZampOyGnEwAwIkEbuROBXEauXZGdYzrEtFTTpx3zHGeewGoFcFxk2Cdlxempy8/oZyXm1KO3R14fIraPXEzpAnXgyVBmRMdjNgdVsqZgxLw9cl4C7m7N+d17pOqIuaj2LKetQzs1Ai3E+reRJip4CSnz2wPYHC9wFL66MYko9k8pwgmAU4hqbxZhO6tNXba321V8Uvruc4ZzGgQxErnFNszqItqC0DdpTtzfeqWJ21DwpRp5WkOdHwFJqM4UMLcdeB2AADPUkigSm00VOZixsOL8WfUB3oWd4ZWcT8CpgLz2XkoPX+IgEIU+q6K6QZqzqxoAr15vupqC8Air0wm7JwUL2AWJByIAuDXQEGZ1aegRASY4Ppq0AOZZIoZYsLh4zDsa4PSfeA+En/tGQMI5ZTe+xClhN+Q5z4b67TfZJeATiAQw4J4KwTzCOfT2nSb3JRALAJTEfKPQcrGBG5GwwCLMRCRAXcgiQY1IYD8ogbzuDd5qF7gL+p4ESM05Z//coWXH1oEE5oQkQPOi3EroDDk/Ai40Cp3SRE2AG+8MWyOk5h1j7ixnEogPD0dVcv/FVwXXLceKs20K5rCaFk06fKmOD424akkTXUFkVwanEtBZfH7hMK5eCEwBl0DNYHvJ0Idd4MHXr7djkGDtWQV3GqlTCRhybzqv1R4zbA/fXabRfhFAHkvflJO77XivuyElbRHG+h3yL6EtAu4iPkoF5q4veRn1ecEUAwYg0pSyQwAoRk3qz4p4DS+wawpxSVHoY9cobBHQtxBBBMBrN/rkvOEC6lF0hF/nKvaS31yE155btLVAFKIidbSDbBMI9HaluzjC4ZKQWHieBIcVPqvbyg/b503Dh91kTcB/LH4Z6wmNI8X2PnyxTkPSUI7JP7MjvE5hTrwDuO+rLvT2uXxnAXNNgL9LLHxdB16jOi24XgOEK68EyMKMb/uYRERol1w+FmRN67XrWonsKDdzRNPmXzPjbEXHxwWttsCcwpXki8cte91afP7zkdQuYch/zSizVv66ffvOwZNPfLus/YNSPMYuLkZIda66yw3NzwHMeCOBXcBNdVH8OBiXLx/7c5qJrFrK/GOYfETH97Sr/jOM38FnvodDGv8f+Rcj1XBLIcDKAQAAAABJRU5ErkJggg==";function Qe(t,e,n){const i=t.slice();return i[16]=e[n],i}function We(t){let e,n,i,r,c,s,o,u,l,d,a,m,_,F;return{c(){e=g("div"),n=g("div"),i=Ne("svg"),r=Ne("path"),c=w(),s=g("div"),o=D(t[6]),u=w(),l=g("div"),d=D(t[5]),a=w(),m=g("div"),m.textContent=`${t[11]}`,p(r,"d","M.937-.016L5.793 4.84.937 9.696z"),p(r,"fill",t[8]),p(r,"fill-rule","evenodd"),p(r,"fill-opacity",".582"),p(i,"width","6"),p(i,"height","10"),p(n,"class","frame-triangle svelte-512hcv"),B(n,"rotate",t[3]),T(n,"visibility",t[0].children.length>0?"visible":"hidden"),p(s,"class","time svelte-512hcv"),T(s,"color",t[8]),T(s,"font-weight",t[10]<.2?500:600),p(l,"class","name svelte-512hcv"),p(m,"class","code-position svelte-512hcv"),p(e,"class","frame-description svelte-512hcv"),B(e,"application-code",t[0].isApplicationCode),B(e,"children-visible",t[3]),T(e,"padding-left",`${t[2]*35}px`)},m(h,b){N(h,e,b),f(e,n),f(n,i),f(i,r),f(e,c),f(e,s),f(s,o),f(e,u),f(e,l),f(l,d),f(e,a),f(e,m),_||(F=q(e,"click",Be($e(t[12]))),_=!0)},p(h,b){b&256&&p(r,"fill",h[8]),b&8&&B(n,"rotate",h[3]),b&1&&T(n,"visibility",h[0].children.length>0?"visible":"hidden"),b&64&&H(o,h[6]),b&256&&T(s,"color",h[8]),b&32&&H(d,h[5]),b&1&&B(e,"application-code",h[0].isApplicationCode),b&8&&B(e,"children-visible",h[3]),b&4&&T(e,"padding-left",`${h[2]*35}px`)},d(h){h&&O(e),_=!1,F()}}}function xe(t){let e,n,i,r,c=t[0].group.frames.length+"",s,o,u,l,d,a;return{c(){e=g("div"),n=g("div"),i=g("div"),i.innerHTML='<svg width="6" height="10"><path d="M.937-.016L5.793 4.84.937 9.696z" fill="#FFF" fill-rule="evenodd" fill-opacity=".582"></path></svg>',r=w(),s=D(c),o=D(` frames hidden
        (`),u=D(t[7]),l=D(")"),p(i,"class","group-triangle svelte-512hcv"),B(i,"rotate",t[9]),p(n,"class","group-header-button svelte-512hcv"),p(e,"class","group-header svelte-512hcv"),T(e,"padding-left",`${t[2]*35}px`)},m(m,_){N(m,e,_),f(e,n),f(n,i),f(n,r),f(n,s),f(n,o),f(n,u),f(n,l),d||(a=q(e,"click",Be($e(t[13]))),d=!0)},p(m,_){_&512&&B(i,"rotate",m[9]),_&1&&c!==(c=m[0].group.frames.length+"")&&H(s,c),_&128&&H(u,m[7]),_&4&&T(e,"padding-left",`${m[2]*35}px`)},d(m){m&&O(e),d=!1,a()}}}function qe(t){let e,n,i=re(t[0].children),r=[];for(let s=0;s<i.length;s+=1)r[s]=Ze(Qe(t,i,s));const c=s=>S(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=lt()},m(s,o){for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(s,o);N(s,e,o),n=!0},p(s,o){if(o&23){i=re(s[0].children);let u;for(u=0;u<i.length;u+=1){const l=Qe(s,i,u);r[u]?(r[u].p(l,o),C(r[u],1)):(r[u]=Ze(l),r[u].c(),C(r[u],1),r[u].m(e.parentNode,e))}for(ne(),u=i.length;u<r.length;u+=1)c(u);ie()}},i(s){if(!n){for(let o=0;o<i.length;o+=1)C(r[o]);n=!0}},o(s){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)S(r[o]);n=!1},d(s){s&&O(e),Me(r,s)}}}function Ze(t){let e,n;return e=new Ye({props:{frame:t[16],rootFrame:t[1],indent:t[2]+(t[4]?1:0)}}),{c(){se(e.$$.fragment)},m(i,r){K(e,i,r),n=!0},p(i,r){const c={};r&1&&(c.frame=i[16]),r&2&&(c.rootFrame=i[1]),r&20&&(c.indent=i[2]+(i[4]?1:0)),e.$set(c)},i(i){n||(C(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){j(e,i)}}}function Et(t){let e,n,i,r,c,s,o=t[4]&&We(t),u=t[0].group&&t[0].group.rootFrame==t[0]&&t[3]&&xe(t),l=t[3]&&qe(t);return{c(){e=g("div"),o&&o.c(),n=w(),u&&u.c(),i=w(),l&&l.c(),r=w(),c=g("div"),c.innerHTML="",p(c,"class","visual-guide"),T(c,"left",`${t[2]*35+21}px`),T(c,"backgroundColor",t[8]),p(e,"class","frame svelte-512hcv")},m(d,a){N(d,e,a),o&&o.m(e,null),f(e,n),u&&u.m(e,null),f(e,i),l&&l.m(e,null),f(e,r),f(e,c),s=!0},p(d,[a]){d[4]?o?o.p(d,a):(o=We(d),o.c(),o.m(e,n)):o&&(o.d(1),o=null),d[0].group&&d[0].group.rootFrame==d[0]&&d[3]?u?u.p(d,a):(u=xe(d),u.c(),u.m(e,i)):u&&(u.d(1),u=null),d[3]?l?(l.p(d,a),a&8&&C(l,1)):(l=qe(d),l.c(),C(l,1),l.m(e,r)):l&&(ne(),S(l,1,1,()=>{l=null}),ie()),a&4&&T(c,"left",`${d[2]*35+21}px`),a&256&&T(c,"backgroundColor",d[8])},i(d){s||(C(l),s=!0)},o(d){S(l),s=!1},d(d){d&&O(e),o&&o.d(),u&&u.d(),l&&l.d()}}}function Ft(t,e,n){var R;let i,r,c;_e(t,Ve,A=>n(14,r=A)),_e(t,ce,A=>n(15,c=A));let{frame:s}=e,{rootFrame:o}=e,{indent:u=0}=e,l=!0,d;const a=s.time/o.time;let m;const _=`${s.filePathShort}:${(R=s.lineNo)==null?void 0:R.toString().padEnd(4," ")}`;let F,h=null;if(s.group){const A=s.group.libraries;A.length<4?h=A.join(", "):h=`${A[0]}, ${A[1]}, ${A[2]}...`}let b;a>.6?b="#FF4159":a>.3?b="#F5A623":a>.2?b="#D8CB2A":b="#7ED321";function v(){n(3,l=!l)}function E(){Ve.update(A=>{var k;return{...A,[((k=s.group)==null?void 0:k.id)??""]:!i}})}return t.$$set=A=>{"frame"in A&&n(0,s=A.frame),"rootFrame"in A&&n(1,o=A.rootFrame),"indent"in A&&n(2,u=A.indent)},t.$$.update=()=>{var A,k;if(t.$$.dirty&16385&&(s.group?r[s.group.id??""]||((A=s.group)==null?void 0:A.rootFrame)===s||s.children.filter(fe=>!fe.group).length>1?n(4,d=!0):n(4,d=!1):n(4,d=!0)),t.$$.dirty&1&&(s.className?n(5,m=`${s.className}.${s.function}`):n(5,m=s.function)),t.$$.dirty&32769)if(c==="absolute")n(6,F=s.time.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}));else if(c==="proportion")n(6,F=`${(a*100).toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1})}%`);else throw new Error("unknown timeFormat");t.$$.dirty&16385&&n(9,i=r[((k=s.group)==null?void 0:k.id)??""]===!0)},[s,o,u,l,d,m,F,h,b,i,a,_,v,E,r,c]}let Ye=class extends le{constructor(e){super(),oe(this,e,Ft,Et,x,{frame:0,rootFrame:1,indent:2})}};const yt="\0",Pt="[await]",ue="[self]",kt=[Pt,ue,"[out-of-context]","[root]"],Ct="c",Tt="h";class J{constructor(e,n){y(this,"identifier");y(this,"_identifierParts");y(this,"time",0);y(this,"absorbedTime",0);y(this,"group",null);y(this,"attributes");y(this,"_children",[]);y(this,"parent",null);y(this,"context");var r;this.identifier=e.identifier,this._identifierParts=this.identifier.split(yt),this.time=e.time??0,this.attributes=e.attributes??{},this.context=n;const i=(r=e.children)==null?void 0:r.map(c=>new J(c,n));i&&this.addChildren(i)}cloneDeep(){return new J(this,this.context)}get children(){return this._children}addChild(e,n={}){if(e.removeFromParent(),e.parent=this,n.after){const i=this._children.indexOf(n.after);this._children.splice(i+1,0,e)}else this._children.push(e)}addChildren(e,n={}){n.after?(e.slice().reverse(),e.forEach(r=>this.addChild(r,n))):e.forEach(i=>this.addChild(i,n))}removeFromParent(){if(this.parent){const e=this.parent._children.indexOf(this);this.parent._children.splice(e,1),this.parent=null}}getAttributes(e){return Object.keys(this.attributes).filter(i=>i.startsWith(e)).map(i=>({data:i.slice(1),time:this.attributes[i]}))}getAttributeValue(e){const n=this.getAttributes(e);if(!n||n.length==0)return null;let i=0;for(let r=0;r<n.length;r++)n[r].time>n[i].time&&(i=r);return n[i].data}get hasTracebackhide(){return this.getAttributeValue(Tt)=="1"}get function(){return this._identifierParts[0]}get filePath(){return this._identifierParts[1]??null}get lineNo(){const e=this._identifierParts[2];return e?parseInt(e):null}get isSynthetic(){return kt.includes(this.identifier)}get filePathShort(){return this.isSynthetic&&this.parent?this.parent.filePathShort:this.filePath?this.context.shortenPath(this.filePath):null}get isApplicationCode(){if(this.isSynthetic)return!1;const e=this.filePath;return!e||["/lib/","\\lib\\"].some(i=>e.includes(i))?!1:e.startsWith("<")?!!e.startsWith("<ipython-input-"):!0}get proportionOfParent(){return this.parent?this.time/this.parent.time:1}get className(){return this.getAttributeValue(Ct)??""}}class Rt{constructor(e){y(this,"id");y(this,"rootFrame");y(this,"_frames",[]);this.id=crypto.randomUUID(),this.rootFrame=e}addFrame(e){e.group&&e.group.removeFrame(e),this._frames.push(e),e.group=this}removeFrame(e){if(e.group!==this)throw new Error("Frame not in group.");const n=this._frames.indexOf(e);if(n===-1)throw new Error("Frame not found in group.");this._frames.splice(n,1),e.group=null}get frames(){return this._frames}get exitFrames(){const e=[];for(const n of this.frames){let i=!1;for(const r of n.children)if(r.group!=this){i=!0;break}i&&e.push(n)}return e}get libraries(){const e=[];for(const n of this.frames){const i=n.filePathShort;if(!i)continue;const r=/^[^\\/.]*/.exec(i)[0];e.includes(r)||e.push(r)}return e}}class St extends Error{constructor(e){super(`Unreachable case: ${e}`)}}function ae(t,e){const{replaceWith:n}=e,i=t.parent;if(!i)throw new Error("Cannot delete the root frame");if(n=="children")i.addChildren(t.children,{after:t});else if(n=="self_time")i.addChild(new J({identifier:ue},i.context));else if(n=="nothing")i.absorbedTime+=t.time;else throw new St(n);t.removeFromParent(),we(t,!0)}function It(t,e){if(t.parent!==e.parent)throw new Error("Both frames must have the same parent.");e.absorbedTime+=t.absorbedTime,e.time+=t.time,Object.entries(t.attributes).forEach(([n,i])=>{e.attributes[n]!==void 0?e.attributes[n]+=i:e.attributes[n]=i}),e.addChildren(t.children),t.removeFromParent(),we(t,!1)}function we(t,e){if(e&&t.children&&t.children.forEach(n=>{we(n,!0)}),t.group){const n=t.group;n.removeFrame(t),n.frames.length===1&&n.removeFrame(n.frames[0])}}const I=[];function Ee(t,e){if(!t)return null;for(const n of t.children)Ee(n),n.filePath&&n.filePath.includes("<frozen importlib._bootstrap")&&ae(n,{replaceWith:"children"});return t}I.push({name:"remove_importlib",description:"Removes <frozen importlib._bootstrap frames that clutter the output.",function:Ee,optionsSpec:[],category:"normal"});function Fe(t,e){if(!t)return null;for(const n of t.children)Fe(n),n.hasTracebackhide&&ae(n,{replaceWith:"children"});return t}I.push({name:"remove_tracebackhide",description:"Removes frames that have set a local __tracebackhide__ (e.g. __tracebackhide__ = True), to hide them from the output.",function:Fe,optionsSpec:[],category:"advanced"});function ye(t,e){if(!t)return null;const n={};for(const i of t.children.slice())if(n[i.identifier]){const r=n[i.identifier];It(i,r)}else n[i.identifier]=i;return t.children.forEach(i=>ye(i)),t._children.sort((i,r)=>r.time-i.time),t}I.push({name:"aggregate_repeated_calls",description:"Converts a timeline into a time-aggregate summary. Adds together calls along the same call stack, so that repeated calls appear as the same frame. Removes time-linearity - frames are sorted according to total time spent.",function:ye,optionsSpec:[],category:"normal"});function Pe(t,e){if(!t)return null;const n=e.hideRegex,i=e.showRegex;function r(s){const o=s.filePath||"",u=i&&new RegExp(i).test(o),l=n&&new RegExp(n).test(o);return u?!1:l?!0:!s.isApplicationCode}function c(s,o){o.addFrame(s),s.children.forEach(u=>{r(u)&&c(u,o)})}return t.children.forEach(s=>{if(!s.group&&r(s)&&s.children.some(r)){const o=new Rt(s);c(s,o)}Pe(s,e)}),t}I.push({name:"Group library frames",description:"Groups frames that should be hidden.",function:Pe,optionsSpec:[{key:"hideRegex",name:"Hide regex",value:{type:"string",default:""}},{key:"showRegex",name:"Show regex",value:{type:"string",default:""}}],category:"normal"});function ke(t,e,n=!0){if(!t)return null;let i=null;for(const r of t.children)r.identifier===ue?i?(i.time+=r.time,r.removeFromParent()):i=r:i=null;return n&&t.children.forEach(r=>ke(r,e,!0)),t}I.push({name:"Merge consecutive self time",description:"Combines consecutive 'self time' frames.",function:ke,optionsSpec:[],category:"advanced"});function Ce(t,e){return t?(t.children.length===1&&t.children[0].identifier===ue&&ae(t.children[0],{replaceWith:"nothing"}),t.children.forEach(n=>Ce(n)),t):null}I.push({name:"Remove unnecessary self time nodes",description:"Removes unnecessary self-time nodes.",function:Ce,optionsSpec:[],category:"advanced"});function Te(t,e,n=null){if(!t)return null;n===null&&(n=t.time,n<=0&&(n=1e-44));const i=e.filterThreshold||.01;for(const r of t.children.slice())r.time/n<i&&ae(r,{replaceWith:"nothing"});return t.children.forEach(r=>Te(r,e,n)),t}I.push({name:"Remove irrelevant nodes",description:"Removes nodes that represent less than a certain percentage of the output.",function:Te,optionsSpec:[{key:"filterThreshold",name:"Filter threshold",value:{type:"number",default:.01,min:0,max:1,sliderMin:1e-4,sliderMax:1}}],category:"normal"});function Ke(t,e){if(!t)return null;const n=s=>{var o;return((o=s.filePath)==null?void 0:o.includes("pyinstrument/__main__.py"))&&s.children.length>0},i=s=>{var o;return s.proportionOfParent>.8&&((o=s.filePath)==null?void 0:o.includes("<string>"))&&s.children.length>0},r=s=>{var o;return s.proportionOfParent>.8&&(new RegExp(".*runpy.py").test(s.filePath??"")||((o=s.filePath)==null?void 0:o.includes("<frozen runpy>")))&&s.children.length>0};let c=t;if(!n(c)||(c=c.children[0],!i(c))||(c=c.children[0],!r(c)))return t;for(;r(c);)c=c.children[0];return c.removeFromParent(),c}I.push({name:"Remove first pyinstrument frames",description:"Removes the initial frames specific to the command line use of pyinstrument.",function:Ke,optionsSpec:[],category:"advanced"});function je(t,e,n){const i=t.slice();return i[8]=e[n],i[9]=e,i[10]=n,i}function Je(t){let e,n,i,r=t[8].name+"",c,s,o,u;function l(){t[5].call(n,t[8])}return{c(){e=g("label"),n=g("input"),i=w(),c=D(r),s=w(),p(n,"type","checkbox")},m(d,a){N(d,e,a),f(e,n),n.checked=t[0][t[8].name],f(e,i),f(e,c),f(e,s),o||(u=q(n,"change",l),o=!0)},p(d,a){t=d,a&1&&(n.checked=t[0][t[8].name])},d(d){d&&O(e),o=!1,u()}}}function Ot(t){let e,n;return e=new Ye({props:{frame:t[1],rootFrame:t[1]}}),{c(){se(e.$$.fragment)},m(i,r){K(e,i,r),n=!0},p(i,r){const c={};r&2&&(c.frame=i[1]),r&2&&(c.rootFrame=i[1]),e.$set(c)},i(i){n||(C(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){j(e,i)}}}function Dt(t){let e;return{c(){e=g("div"),e.textContent="All frames were filtered out.",p(e,"class","error")},m(n,i){N(n,e,i)},p:P,i:P,o:P,d(n){n&&O(e)}}}function Mt(t){let e,n,i,r,c,s,o,u,l,d=re(I),a=[];for(let h=0;h<d.length;h+=1)a[h]=Je(je(t,d,h));const m=[Dt,Ot],_=[];function F(h,b){return h[1]?1:0}return o=F(t),u=_[o]=m[o](t),{c(){e=g("div"),n=g("div"),i=g("h2"),i.textContent="Options",r=w(),c=g("div");for(let h=0;h<a.length;h+=1)a[h].c();s=w(),u.c(),p(c,"class","processor-options"),p(n,"class","options"),p(e,"class","tree-view")},m(h,b){N(h,e,b),f(e,n),f(n,i),f(n,r),f(n,c);for(let v=0;v<a.length;v+=1)a[v]&&a[v].m(c,null);f(e,s),_[o].m(e,null),l=!0},p(h,[b]){if(b&1){d=re(I);let E;for(E=0;E<d.length;E+=1){const R=je(h,d,E);a[E]?a[E].p(R,b):(a[E]=Je(R),a[E].c(),a[E].m(c,null))}for(;E<a.length;E+=1)a[E].d(1);a.length=d.length}let v=o;o=F(h),o===v?_[o].p(h,b):(ne(),S(_[v],1,1,()=>{_[v]=null}),ie(),u=_[o],u?u.p(h,b):(u=_[o]=m[o](h),u.c()),C(u,1),u.m(e,null))},i(h){l||(C(u),l=!0)},o(h){S(u),l=!1},d(h){h&&O(e),Me(a,h),_[o].d()}}}function Nt(t,e,n){let{session:i}=e;const r=[Ee,Fe,ke,ye,Ce,Te,Ke,Pe];let c,s={},o={};for(const a of I){s[a.name]=r.includes(a.function);for(const m of a.optionsSpec)o[m.name]=m.value.default}function u(a,m,_){let F=a;for(const h of m)if(F=h.function(F,_),!F)return null;return F}let l;function d(a){s[a.name]=this.checked,n(0,s)}return t.$$set=a=>{"session"in a&&n(2,i=a.session)},t.$$.update=()=>{t.$$.dirty&1&&n(3,c=r.map(a=>I.find(m=>m.function==a)).filter(a=>s[a.name])),t.$$.dirty&28&&n(1,l=u(i.rootFrame.cloneDeep(),c,o))},[s,l,i,c,o,d]}class $t extends le{constructor(e){super(),oe(this,e,Nt,Mt,x,{session:2})}}function Bt(t){let e,n;return e=new $t({props:{session:t[0]}}),{c(){se(e.$$.fragment)},m(i,r){K(e,i,r),n=!0},p(i,r){const c={};r&1&&(c.session=i[0]),e.$set(c)},i(i){n||(C(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){j(e,i)}}}function Lt(t){let e;return{c(){e=g("div"),e.textContent="No samples recorded.",p(e,"class","error")},m(n,i){N(n,e,i)},p:P,i:P,o:P,d(n){n&&O(e)}}}function zt(t){let e,n,i,r,c,s,o,u,l,d,a,m,_;n=new At({props:{session:t[0]}});const F=[Lt,Bt],h=[];function b(v,E){return v[0].rootFrame?1:0}return a=b(t),m=h[a]=F[a](t),{c(){e=g("div"),se(n.$$.fragment),i=w(),r=g("div"),c=w(),s=g("div"),o=g("div"),u=g("span"),u.textContent="Program: ",l=D(t[1]),d=w(),m.c(),p(r,"class","spacer"),T(r,"height","20px"),p(u,"class","label svelte-1gm5pcf"),p(o,"class","program svelte-1gm5pcf"),p(s,"class","margins"),p(e,"class","app svelte-1gm5pcf")},m(v,E){N(v,e,E),K(n,e,null),f(e,i),f(e,r),f(e,c),f(e,s),f(s,o),f(o,u),f(o,l),f(s,d),h[a].m(s,null),_=!0},p(v,[E]){const R={};E&1&&(R.session=v[0]),n.$set(R),(!_||E&2)&&H(l,v[1]);let A=a;a=b(v),a===A?h[a].p(v,E):(ne(),S(h[A],1,1,()=>{h[A]=null}),ie(),m=h[a],m?m.p(v,E):(m=h[a]=F[a](v),m.c()),C(m,1),m.m(s,null))},i(v){_||(C(n.$$.fragment,v),C(m),_=!0)},o(v){S(n.$$.fragment,v),S(m),_=!1},d(v){v&&O(e),j(n),h[a].d()}}}function Re(){document.body.style.minHeight=`${window.scrollY+window.innerHeight}px`}function Ut(t,e,n){let{session:i}=e;const r=document.createElement("link");r.rel="shortut icon",r.href=wt,document.head.appendChild(r),at(()=>{window.addEventListener("scroll",Re),Re()}),ft(()=>{window.removeEventListener("scroll",Re)});const c=i.rootFrame,s=c==null?void 0:c.time.toLocaleString(void 0,{maximumSignificantDigits:3});let o=c==null?void 0:c.function;return o=="<module>"&&(o=i.program),document.title=`${s}s - ${o} - pyinstrument`,t.$$set=u=>{"session"in u&&n(0,i=u.session)},[i,o]}class Ht extends le{constructor(e){super(),oe(this,e,Ut,zt,x,{session:0})}}class Gt{constructor(e){y(this,"startTime");y(this,"duration");y(this,"sampleCount");y(this,"program");y(this,"cpuTime");y(this,"rootFrame");y(this,"sysPath");y(this,"_shortenPathCache",{});this.startTime=e.session.start_time,this.duration=e.session.duration,this.sampleCount=e.session.sample_count,this.program=e.session.program,this.cpuTime=e.session.cpu_time,this.sysPath=e.session.sys_path,this.rootFrame=new J(e.frame_tree,this)}shortenPath(e){if(this._shortenPathCache[e])return this._shortenPathCache[e];let n=e;if(W(e).length>1)for(const r of this.sysPath){const c=Xt(e,r);W(c).length<W(n).length&&(n=c)}return this._shortenPathCache[e]=n,n}}function W(t){return t.split(/[/\\]/)}function et(t){const e=W(t);return e.length>0&&e[0].endsWith(":")?e[0]:null}function Xt(t,e){if(et(t)!=et(e))return t;const n=W(t),i=W(e);let r=0;for(;r<n.length&&r<i.length&&n[r]==i[r];)r++;return i.slice(r).map(s=>"..").concat(n.slice(r)).join("/")}return{render(t,e){const n=new Gt(e);return new Ht({target:t,props:{session:n}})}}}();
