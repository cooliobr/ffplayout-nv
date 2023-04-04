import{b,T as P,a as q,$ as x,a0 as S,k as C,A as T,p as A,R as _,O as R,a1 as N,a2 as w,a3 as B,a4 as L,V as E}from"./entry.230716bf.js";const y=globalThis.requestIdleCallback||(t=>{const a=Date.now(),i={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(i)},1)}),I=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),O=t=>{const a=b();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{y(t)}):y(t)};async function k(t,a=P()){const{path:i,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(i)))return;const n=a._preloadPromises=a._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>k(t,a));a._routePreloaded.add(i);const l=e.map(r=>{var s;return(s=r.components)==null?void 0:s.default}).filter(r=>typeof r=="function");for(const r of l){const s=Promise.resolve(r()).catch(()=>{}).finally(()=>n.splice(n.indexOf(s)));n.push(s)}await Promise.all(n)}const V=(...t)=>t.find(a=>a!==void 0),D="noopener noreferrer";function U(t){const a=t.componentName||"NuxtLink",i=(e,n)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const l=t.trailingSlash==="append"?B:L;if(typeof e=="string")return l(e,!0);const r="path"in e?e.path:n(e).path;return{...e,name:void 0,path:l(r,!0)}};return q({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:n}){const l=P(),r=x(()=>{const o=e.to||e.href||"";return i(o,l.resolve)}),s=x(()=>e.external||e.target&&e.target!=="_self"?!0:typeof r.value=="object"?!1:r.value===""||S(r.value,{acceptRelative:!0})),d=C(!1),f=C(null);if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!M()){const m=b();let v,u=null;T(()=>{const p=j();O(()=>{v=y(()=>{var h;(h=f==null?void 0:f.value)!=null&&h.tagName&&(u=p.observe(f.value,async()=>{u==null||u(),u=null;const c=typeof r.value=="string"?r.value:l.resolve(r.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",c).catch(()=>{}),!s.value&&k(r.value,l).catch(()=>{})]),d.value=!0}))})})}),A(()=>{v&&I(v),u==null||u(),u=null})}return()=>{var p,h;if(!s.value){const c={ref:g=>{f.value=g==null?void 0:g.$el},to:r.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(d.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),_(R("RouterLink"),c,n.default)}const o=typeof r.value=="object"?((p=l.resolve(r.value))==null?void 0:p.href)??null:r.value||null,m=e.target||null,v=e.noRel?null:V(e.rel,t.externalRelAttribute,o?D:"")||null,u=()=>E(o,{replace:e.replace});return e.custom?n.default?n.default({href:o,navigate:u,get route(){if(!o)return;const c=N(o);return{path:c.pathname,fullPath:c.pathname,get query(){return w(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:v,target:m,isExternal:s.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:f,href:o,rel:v,target:m},(h=n.default)==null?void 0:h.call(n))}}})}const F=U({componentName:"NuxtLink"});function j(){const t=b();if(t._observer)return t._observer;let a=null;const i=new Map,e=(l,r)=>(a||(a=new IntersectionObserver(s=>{for(const d of s){const f=i.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&f&&f()}})),i.set(l,r),a.observe(l),()=>{i.delete(l),a.unobserve(l),i.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function M(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{F as _};
