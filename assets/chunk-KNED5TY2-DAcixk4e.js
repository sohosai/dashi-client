import{r as u}from"./index-BPEaKRF3.js";import"./iframe-CNOYk885.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d232e97f-db44-4a43-8fd7-50f4ac208a12",e._sentryDebugIdIdentifier="sentry-dbid-d232e97f-db44-4a43-8fd7-50f4ac208a12")}catch{}var M={},ae;function Pe(){if(ae)return M;ae=1,Object.defineProperty(M,"__esModule",{value:!0}),M.parse=s,M.serialize=l;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,r=Object.prototype.toString,a=(()=>{const h=function(){};return h.prototype=Object.create(null),h})();function s(h,y){const f=new a,w=h.length;if(w<2)return f;const g=(y==null?void 0:y.decode)||m;let d=0;do{const v=h.indexOf("=",d);if(v===-1)break;const x=h.indexOf(";",d),E=x===-1?w:x;if(v>E){d=h.lastIndexOf(";",v-1)+1;continue}const b=c(h,d,v),N=o(h,v,b),I=h.slice(b,N);if(f[I]===void 0){let D=c(h,v+1,E),R=o(h,E,D);const T=g(h.slice(D,R));f[I]=T}d=E+1}while(d<w);return f}function c(h,y,f){do{const w=h.charCodeAt(y);if(w!==32&&w!==9)return y}while(++y<f);return f}function o(h,y,f){for(;y>f;){const w=h.charCodeAt(--y);if(w!==32&&w!==9)return y+1}return f}function l(h,y,f){const w=(f==null?void 0:f.encode)||encodeURIComponent;if(!e.test(h))throw new TypeError(`argument name is invalid: ${h}`);const g=w(y);if(!t.test(g))throw new TypeError(`argument val is invalid: ${y}`);let d=h+"="+g;if(!f)return d;if(f.maxAge!==void 0){if(!Number.isInteger(f.maxAge))throw new TypeError(`option maxAge is invalid: ${f.maxAge}`);d+="; Max-Age="+f.maxAge}if(f.domain){if(!n.test(f.domain))throw new TypeError(`option domain is invalid: ${f.domain}`);d+="; Domain="+f.domain}if(f.path){if(!i.test(f.path))throw new TypeError(`option path is invalid: ${f.path}`);d+="; Path="+f.path}if(f.expires){if(!p(f.expires)||!Number.isFinite(f.expires.valueOf()))throw new TypeError(`option expires is invalid: ${f.expires}`);d+="; Expires="+f.expires.toUTCString()}if(f.httpOnly&&(d+="; HttpOnly"),f.secure&&(d+="; Secure"),f.partitioned&&(d+="; Partitioned"),f.priority)switch(typeof f.priority=="string"?f.priority.toLowerCase():void 0){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${f.priority}`)}if(f.sameSite)switch(typeof f.sameSite=="string"?f.sameSite.toLowerCase():f.sameSite){case!0:case"strict":d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"none":d+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${f.sameSite}`)}return d}function m(h){if(h.indexOf("%")===-1)return h;try{return decodeURIComponent(h)}catch{return h}}function p(h){return r.call(h)==="[object Date]"}return M}Pe();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ie="popstate";function ke(e={}){function t(i,r){let{pathname:a,search:s,hash:c}=i.location;return X("",{pathname:a,search:s,hash:c},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:B(r)}return $e(t,n,null,e)}function C(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function S(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Le(){return Math.random().toString(36).substring(2,10)}function oe(e,t){return{usr:e.state,key:e.key,idx:t}}function X(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?U(t):t,state:n,key:t&&t.key||i||Le()}}function B({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function U(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function $e(e,t,n,i={}){let{window:r=document.defaultView,v5Compat:a=!1}=i,s=r.history,c="POP",o=null,l=m();l==null&&(l=0,s.replaceState({...s.state,idx:l},""));function m(){return(s.state||{idx:null}).idx}function p(){c="POP";let g=m(),d=g==null?null:g-l;l=g,o&&o({action:c,location:w.location,delta:d})}function h(g,d){c="PUSH";let v=X(w.location,g,d);l=m()+1;let x=oe(v,l),E=w.createHref(v);try{s.pushState(x,"",E)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(E)}a&&o&&o({action:c,location:w.location,delta:1})}function y(g,d){c="REPLACE";let v=X(w.location,g,d);l=m();let x=oe(v,l),E=w.createHref(v);s.replaceState(x,"",E),a&&o&&o({action:c,location:w.location,delta:0})}function f(g){let d=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof g=="string"?g:B(g);return v=v.replace(/ $/,"%20"),C(d,`No window.location.(origin|href) available to create URL for href: ${v}`),new URL(v,d)}let w={get action(){return c},get location(){return e(r,s)},listen(g){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(ie,p),o=g,()=>{r.removeEventListener(ie,p),o=null}},createHref(g){return t(r,g)},createURL:f,encodeLocation(g){let d=f(g);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:y,go(g){return s.go(g)}};return w}function ce(e,t,n="/"){return Ie(e,t,n,!1)}function Ie(e,t,n,i){let r=typeof t=="string"?U(t):t,a=L(r.pathname||"/",n);if(a==null)return null;let s=fe(e);Te(s);let c=null;for(let o=0;c==null&&o<s.length;++o){let l=We(a);c=He(s[o],l,i)}return c}function fe(e,t=[],n=[],i=""){let r=(a,s,c)=>{let o={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};o.relativePath.startsWith("/")&&(C(o.relativePath.startsWith(i),`Absolute route path "${o.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(i.length));let l=k([i,o.relativePath]),m=n.concat(o);a.children&&a.children.length>0&&(C(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),fe(a.children,t,m,l)),!(a.path==null&&!a.index)&&t.push({path:l,score:Be(l,a.index),routesMeta:m})};return e.forEach((a,s)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))r(a,s);else for(let o of de(a.path))r(a,s,o)}),t}function de(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let s=de(i.join("/")),c=[];return c.push(...s.map(o=>o===""?a:[a,o].join("/"))),r&&c.push(...s),c.map(o=>e.startsWith("/")&&o===""?"/":o)}function Te(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ue(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var De=/^:[\w-]+$/,Fe=3,Ne=2,Ae=1,Me=10,Oe=-2,le=e=>e==="*";function Be(e,t){let n=e.split("/"),i=n.length;return n.some(le)&&(i+=Oe),t&&(i+=Ne),n.filter(r=>!le(r)).reduce((r,a)=>r+(De.test(a)?Fe:a===""?Ae:Me),i)}function Ue(e,t){return e.length===t.length&&e.slice(0,-1).every((i,r)=>i===t[r])?e[e.length-1]-t[t.length-1]:0}function He(e,t,n=!1){let{routesMeta:i}=e,r={},a="/",s=[];for(let c=0;c<i.length;++c){let o=i[c],l=c===i.length-1,m=a==="/"?t:t.slice(a.length)||"/",p=j({path:o.relativePath,caseSensitive:o.caseSensitive,end:l},m),h=o.route;if(!p&&l&&n&&!i[i.length-1].route.index&&(p=j({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},m)),!p)return null;Object.assign(r,p.params),s.push({params:r,pathname:k([a,p.pathname]),pathnameBase:Ke(k([a,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(a=k([a,p.pathnameBase]))}return s}function j(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=_e(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let a=r[0],s=a.replace(/(.)\/+$/,"$1"),c=r.slice(1);return{params:i.reduce((l,{paramName:m,isOptional:p},h)=>{if(m==="*"){let f=c[h]||"";s=a.slice(0,a.length-f.length).replace(/(.)\/+$/,"$1")}const y=c[h];return p&&!y?l[m]=void 0:l[m]=(y||"").replace(/%2F/g,"/"),l},{}),pathname:a,pathnameBase:s,pattern:e}}function _e(e,t=!1,n=!0){S(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,o)=>(i.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),i]}function We(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return S(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function L(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function ze(e,t="/"){let{pathname:n,search:i="",hash:r=""}=typeof e=="string"?U(e):e;return{pathname:n?n.startsWith("/")?n:Ve(n,t):t,search:Je(i),hash:Ye(r)}}function Ve(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function q(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function je(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function he(e){let t=je(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function me(e,t,n,i=!1){let r;typeof e=="string"?r=U(e):(r={...e},C(!r.pathname||!r.pathname.includes("?"),q("?","pathname","search",r)),C(!r.pathname||!r.pathname.includes("#"),q("#","pathname","hash",r)),C(!r.search||!r.search.includes("#"),q("#","search","hash",r)));let a=e===""||r.pathname==="",s=a?"/":r.pathname,c;if(s==null)c=n;else{let p=t.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),p-=1;r.pathname=h.join("/")}c=p>=0?t[p]:"/"}let o=ze(r,c),l=s&&s!=="/"&&s.endsWith("/"),m=(a||s===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(l||m)&&(o.pathname+="/"),o}var k=e=>e.join("/").replace(/\/\/+/g,"/"),Ke=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Je=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ye=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qe(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var pe=["POST","PUT","PATCH","DELETE"];new Set(pe);var Ge=["GET",...pe];new Set(Ge);var A=u.createContext(null);A.displayName="DataRouter";var K=u.createContext(null);K.displayName="DataRouterState";var ge=u.createContext({isTransitioning:!1});ge.displayName="ViewTransition";var Xe=u.createContext(new Map);Xe.displayName="Fetchers";var Qe=u.createContext(null);Qe.displayName="Await";var P=u.createContext(null);P.displayName="Navigation";var J=u.createContext(null);J.displayName="Location";var $=u.createContext({outlet:null,matches:[],isDataRoute:!1});$.displayName="Route";var Q=u.createContext(null);Q.displayName="RouteError";function Ze(e,{relative:t}={}){C(H(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=u.useContext(P),{hash:r,pathname:a,search:s}=_(e,{relative:t}),c=a;return n!=="/"&&(c=a==="/"?n:k([n,a])),i.createHref({pathname:c,search:s,hash:r})}function H(){return u.useContext(J)!=null}function F(){return C(H(),"useLocation() may be used only in the context of a <Router> component."),u.useContext(J).location}var ye="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ve(e){u.useContext(P).static||u.useLayoutEffect(e)}function et(){let{isDataRoute:e}=u.useContext($);return e?ht():tt()}function tt(){C(H(),"useNavigate() may be used only in the context of a <Router> component.");let e=u.useContext(A),{basename:t,navigator:n}=u.useContext(P),{matches:i}=u.useContext($),{pathname:r}=F(),a=JSON.stringify(he(i)),s=u.useRef(!1);return ve(()=>{s.current=!0}),u.useCallback((o,l={})=>{if(S(s.current,ye),!s.current)return;if(typeof o=="number"){n.go(o);return}let m=me(o,JSON.parse(a),r,l.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:k([t,m.pathname])),(l.replace?n.replace:n.push)(m,l.state,l)},[t,n,a,r,e])}u.createContext(null);function _(e,{relative:t}={}){let{matches:n}=u.useContext($),{pathname:i}=F(),r=JSON.stringify(he(n));return u.useMemo(()=>me(e,JSON.parse(r),i,t==="path"),[e,r,i,t])}function nt(e,t,n,i){C(H(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r,static:a}=u.useContext(P),{matches:s}=u.useContext($),c=s[s.length-1],o=c?c.params:{},l=c?c.pathname:"/",m=c?c.pathnameBase:"/",p=c&&c.route;{let v=p&&p.path||"";we(l,!p||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let h=F(),y;y=h;let f=y.pathname||"/",w=f;if(m!=="/"){let v=m.replace(/^\//,"").split("/");w="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=!a&&n&&n.matches&&n.matches.length>0?n.matches:ce(e,{pathname:w});return S(p||g!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),S(g==null||g[g.length-1].route.element!==void 0||g[g.length-1].route.Component!==void 0||g[g.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),lt(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:k([m,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?m:k([m,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,i)}function rt(){let e=dt(),t=qe(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=u.createElement(u.Fragment,null,u.createElement("p",null,"💿 Hey developer 👋"),u.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",u.createElement("code",{style:a},"ErrorBoundary")," or"," ",u.createElement("code",{style:a},"errorElement")," prop on your route.")),u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:r},n):null,s)}var at=u.createElement(rt,null),it=class extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?u.createElement($.Provider,{value:this.props.routeContext},u.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ot({routeContext:e,match:t,children:n}){let i=u.useContext(A);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),u.createElement($.Provider,{value:e},n)}function lt(e,t=[],n=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,a=n==null?void 0:n.errors;if(a!=null){let o=r.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id])!==void 0);C(o>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),r=r.slice(0,Math.min(r.length,o+1))}let s=!1,c=-1;if(n)for(let o=0;o<r.length;o++){let l=r[o];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(c=o),l.route.id){let{loaderData:m,errors:p}=n,h=l.route.loader&&!m.hasOwnProperty(l.route.id)&&(!p||p[l.route.id]===void 0);if(l.route.lazy||h){s=!0,c>=0?r=r.slice(0,c+1):r=[r[0]];break}}}return r.reduceRight((o,l,m)=>{let p,h=!1,y=null,f=null;n&&(p=a&&l.route.id?a[l.route.id]:void 0,y=l.route.errorElement||at,s&&(c<0&&m===0?(we("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,f=null):c===m&&(h=!0,f=l.route.hydrateFallbackElement||null)));let w=t.concat(r.slice(0,m+1)),g=()=>{let d;return p?d=y:h?d=f:l.route.Component?d=u.createElement(l.route.Component,null):l.route.element?d=l.route.element:d=o,u.createElement(ot,{match:l,routeContext:{outlet:o,matches:w,isDataRoute:n!=null},children:d})};return n&&(l.route.ErrorBoundary||l.route.errorElement||m===0)?u.createElement(it,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:g(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):g()},null)}function Z(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ut(e){let t=u.useContext(A);return C(t,Z(e)),t}function st(e){let t=u.useContext(K);return C(t,Z(e)),t}function ct(e){let t=u.useContext($);return C(t,Z(e)),t}function ee(e){let t=ct(e),n=t.matches[t.matches.length-1];return C(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function ft(){return ee("useRouteId")}function dt(){var i;let e=u.useContext(Q),t=st("useRouteError"),n=ee("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function ht(){let{router:e}=ut("useNavigate"),t=ee("useNavigate"),n=u.useRef(!1);return ve(()=>{n.current=!0}),u.useCallback(async(r,a={})=>{S(n.current,ye),n.current&&(typeof r=="number"?e.navigate(r):await e.navigate(r,{fromRouteId:t,...a}))},[e,t])}var ue={};function we(e,t,n){!t&&!ue[e]&&(ue[e]=!0,S(!1,n))}u.memo(mt);function mt({routes:e,future:t,state:n}){return nt(e,void 0,n,t)}function pt({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:r,static:a=!1}){C(!H(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),c=u.useMemo(()=>({basename:s,navigator:r,static:a,future:{}}),[s,r,a]);typeof n=="string"&&(n=U(n));let{pathname:o="/",search:l="",hash:m="",state:p=null,key:h="default"}=n,y=u.useMemo(()=>{let f=L(o,s);return f==null?null:{location:{pathname:f,search:l,hash:m,state:p,key:h},navigationType:i}},[s,o,l,m,p,h,i]);return S(y!=null,`<Router basename="${s}"> is not able to match the URL "${o}${l}${m}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:u.createElement(P.Provider,{value:c},u.createElement(J.Provider,{children:t,value:y}))}var z="get",V="application/x-www-form-urlencoded";function Y(e){return e!=null&&typeof e.tagName=="string"}function gt(e){return Y(e)&&e.tagName.toLowerCase()==="button"}function yt(e){return Y(e)&&e.tagName.toLowerCase()==="form"}function vt(e){return Y(e)&&e.tagName.toLowerCase()==="input"}function wt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xt(e,t){return e.button===0&&(!t||t==="_self")&&!wt(e)}var W=null;function Et(){if(W===null)try{new FormData(document.createElement("form"),0),W=!1}catch{W=!0}return W}var Ct=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function G(e){return e!=null&&!Ct.has(e)?(S(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${V}"`),null):e}function bt(e,t){let n,i,r,a,s;if(yt(e)){let c=e.getAttribute("action");i=c?L(c,t):null,n=e.getAttribute("method")||z,r=G(e.getAttribute("enctype"))||V,a=new FormData(e)}else if(gt(e)||vt(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=e.getAttribute("formaction")||c.getAttribute("action");if(i=o?L(o,t):null,n=e.getAttribute("formmethod")||c.getAttribute("method")||z,r=G(e.getAttribute("formenctype"))||G(c.getAttribute("enctype"))||V,a=new FormData(c,e),!Et()){let{name:l,type:m,value:p}=e;if(m==="image"){let h=l?`${l}.`:"";a.append(`${h}x`,"0"),a.append(`${h}y`,"0")}else l&&a.append(l,p)}}else{if(Y(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=z,i=null,r=V,s=e}return a&&r==="text/plain"&&(s=a,a=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:a,body:s}}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Rt(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function St(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Pt(e,t,n){let i=await Promise.all(e.map(async r=>{let a=t.routes[r.route.id];if(a){let s=await Rt(a,n);return s.links?s.links():[]}return[]}));return It(i.flat(1).filter(St).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function se(e,t,n,i,r,a){let s=(o,l)=>n[l]?o.route.id!==n[l].route.id:!0,c=(o,l)=>{var m;return n[l].pathname!==o.pathname||((m=n[l].route.path)==null?void 0:m.endsWith("*"))&&n[l].params["*"]!==o.params["*"]};return a==="assets"?t.filter((o,l)=>s(o,l)||c(o,l)):a==="data"?t.filter((o,l)=>{var p;let m=i.routes[o.route.id];if(!m||!m.hasLoader)return!1;if(s(o,l)||c(o,l))return!0;if(o.route.shouldRevalidate){let h=o.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:o.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function kt(e,t,{includeHydrateFallback:n}={}){return Lt(e.map(i=>{let r=t.routes[i.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1))}function Lt(e){return[...new Set(e)]}function $t(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function It(e,t){let n=new Set;return new Set(t),e.reduce((i,r)=>{let a=JSON.stringify($t(r));return n.has(a)||(n.add(a),i.push({key:a,link:r})),i},[])}function Tt(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&L(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function xe(){let e=u.useContext(A);return te(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Dt(){let e=u.useContext(K);return te(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ne=u.createContext(void 0);ne.displayName="FrameworkContext";function Ee(){let e=u.useContext(ne);return te(e,"You must render this element inside a <HydratedRouter> element"),e}function Ft(e,t){let n=u.useContext(ne),[i,r]=u.useState(!1),[a,s]=u.useState(!1),{onFocus:c,onBlur:o,onMouseEnter:l,onMouseLeave:m,onTouchStart:p}=t,h=u.useRef(null);u.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let w=d=>{d.forEach(v=>{s(v.isIntersecting)})},g=new IntersectionObserver(w,{threshold:.5});return h.current&&g.observe(h.current),()=>{g.disconnect()}}},[e]),u.useEffect(()=>{if(i){let w=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(w)}}},[i]);let y=()=>{r(!0)},f=()=>{r(!1),s(!1)};return n?e!=="intent"?[a,h,{}]:[a,h,{onFocus:O(c,y),onBlur:O(o,f),onMouseEnter:O(l,y),onMouseLeave:O(m,f),onTouchStart:O(p,y)}]:[!1,h,{}]}function O(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Nt({page:e,...t}){let{router:n}=xe(),i=u.useMemo(()=>ce(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?u.createElement(Mt,{page:e,matches:i,...t}):null}function At(e){let{manifest:t,routeModules:n}=Ee(),[i,r]=u.useState([]);return u.useEffect(()=>{let a=!1;return Pt(e,t,n).then(s=>{a||r(s)}),()=>{a=!0}},[e,t,n]),i}function Mt({page:e,matches:t,...n}){let i=F(),{manifest:r,routeModules:a}=Ee(),{basename:s}=xe(),{loaderData:c,matches:o}=Dt(),l=u.useMemo(()=>se(e,t,o,r,i,"data"),[e,t,o,r,i]),m=u.useMemo(()=>se(e,t,o,r,i,"assets"),[e,t,o,r,i]),p=u.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let f=new Set,w=!1;if(t.forEach(d=>{var x;let v=r.routes[d.route.id];!v||!v.hasLoader||(!l.some(E=>E.route.id===d.route.id)&&d.route.id in c&&((x=a[d.route.id])!=null&&x.shouldRevalidate)||v.hasClientLoader?w=!0:f.add(d.route.id))}),f.size===0)return[];let g=Tt(e,s);return w&&f.size>0&&g.searchParams.set("_routes",t.filter(d=>f.has(d.route.id)).map(d=>d.route.id).join(",")),[g.pathname+g.search]},[s,c,i,r,l,t,e,a]),h=u.useMemo(()=>kt(m,r),[m,r]),y=At(m);return u.createElement(u.Fragment,null,p.map(f=>u.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...n})),h.map(f=>u.createElement("link",{key:f,rel:"modulepreload",href:f,...n})),y.map(({key:f,link:w})=>u.createElement("link",{key:f,...w})))}function Ot(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Ce=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ce&&(window.__reactRouterVersion="7.5.0")}catch{}function qt({basename:e,children:t,window:n}){let i=u.useRef();i.current==null&&(i.current=ke({window:n,v5Compat:!0}));let r=i.current,[a,s]=u.useState({action:r.action,location:r.location}),c=u.useCallback(o=>{u.startTransition(()=>s(o))},[s]);return u.useLayoutEffect(()=>r.listen(c),[r,c]),u.createElement(pt,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:r})}var be=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=u.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:r,reloadDocument:a,replace:s,state:c,target:o,to:l,preventScrollReset:m,viewTransition:p,...h},y){let{basename:f}=u.useContext(P),w=typeof l=="string"&&be.test(l),g,d=!1;if(typeof l=="string"&&w&&(g=l,Ce))try{let R=new URL(window.location.href),T=l.startsWith("//")?new URL(R.protocol+l):new URL(l),re=L(T.pathname,f);T.origin===R.origin&&re!=null?l=re+T.search+T.hash:d=!0}catch{S(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=Ze(l,{relative:r}),[x,E,b]=Ft(i,h),N=_t(l,{replace:s,state:c,target:o,preventScrollReset:m,relative:r,viewTransition:p});function I(R){t&&t(R),R.defaultPrevented||N(R)}let D=u.createElement("a",{...h,...b,href:g||v,onClick:d||a?t:I,ref:Ot(y,E),target:o,"data-discover":!w&&n==="render"?"true":void 0});return x&&!w?u.createElement(u.Fragment,null,D,u.createElement(Nt,{page:v})):D});Re.displayName="Link";var Bt=u.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:r=!1,style:a,to:s,viewTransition:c,children:o,...l},m){let p=_(s,{relative:l.relative}),h=F(),y=u.useContext(K),{navigator:f,basename:w}=u.useContext(P),g=y!=null&&Kt(p)&&c===!0,d=f.encodeLocation?f.encodeLocation(p).pathname:p.pathname,v=h.pathname,x=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(v=v.toLowerCase(),x=x?x.toLowerCase():null,d=d.toLowerCase()),x&&w&&(x=L(x,w)||x);const E=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let b=v===d||!r&&v.startsWith(d)&&v.charAt(E)==="/",N=x!=null&&(x===d||!r&&x.startsWith(d)&&x.charAt(d.length)==="/"),I={isActive:b,isPending:N,isTransitioning:g},D=b?t:void 0,R;typeof i=="function"?R=i(I):R=[i,b?"active":null,N?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let T=typeof a=="function"?a(I):a;return u.createElement(Re,{...l,"aria-current":D,className:R,ref:m,style:T,to:s,viewTransition:c},typeof o=="function"?o(I):o)});Bt.displayName="NavLink";var Ut=u.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:r,state:a,method:s=z,action:c,onSubmit:o,relative:l,preventScrollReset:m,viewTransition:p,...h},y)=>{let f=Vt(),w=jt(c,{relative:l}),g=s.toLowerCase()==="get"?"get":"post",d=typeof c=="string"&&be.test(c),v=x=>{if(o&&o(x),x.defaultPrevented)return;x.preventDefault();let E=x.nativeEvent.submitter,b=(E==null?void 0:E.getAttribute("formmethod"))||s;f(E||x.currentTarget,{fetcherKey:t,method:b,navigate:n,replace:r,state:a,relative:l,preventScrollReset:m,viewTransition:p})};return u.createElement("form",{ref:y,method:g,action:w,onSubmit:i?o:v,...h,"data-discover":!d&&e==="render"?"true":void 0})});Ut.displayName="Form";function Ht(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Se(e){let t=u.useContext(A);return C(t,Ht(e)),t}function _t(e,{target:t,replace:n,state:i,preventScrollReset:r,relative:a,viewTransition:s}={}){let c=et(),o=F(),l=_(e,{relative:a});return u.useCallback(m=>{if(xt(m,t)){m.preventDefault();let p=n!==void 0?n:B(o)===B(l);c(e,{replace:p,state:i,preventScrollReset:r,relative:a,viewTransition:s})}},[o,c,l,n,i,t,e,r,a,s])}var Wt=0,zt=()=>`__${String(++Wt)}__`;function Vt(){let{router:e}=Se("useSubmit"),{basename:t}=u.useContext(P),n=ft();return u.useCallback(async(i,r={})=>{let{action:a,method:s,encType:c,formData:o,body:l}=bt(i,t);if(r.navigate===!1){let m=r.fetcherKey||zt();await e.fetch(m,n,r.action||a,{preventScrollReset:r.preventScrollReset,formData:o,body:l,formMethod:r.method||s,formEncType:r.encType||c,flushSync:r.flushSync})}else await e.navigate(r.action||a,{preventScrollReset:r.preventScrollReset,formData:o,body:l,formMethod:r.method||s,formEncType:r.encType||c,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[e,t,n])}function jt(e,{relative:t}={}){let{basename:n}=u.useContext(P),i=u.useContext($);C(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),a={..._(e||".",{relative:t})},s=F();if(e==null){a.search=s.search;let c=new URLSearchParams(a.search),o=c.getAll("index");if(o.some(m=>m==="")){c.delete("index"),o.filter(p=>p).forEach(p=>c.append("index",p));let m=c.toString();a.search=m?`?${m}`:""}}return(!e||e===".")&&r.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:k([n,a.pathname])),B(a)}function Kt(e,t={}){let n=u.useContext(ge);C(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Se("useViewTransitionState"),r=_(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=L(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=L(n.nextLocation.pathname,i)||n.nextLocation.pathname;return j(r.pathname,s)!=null||j(r.pathname,a)!=null}new TextEncoder;export{qt as B,Re as L};
