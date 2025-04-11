import{j as e}from"./jsx-runtime-Dk-bRVA_.js";import{d as a,m as l}from"./styled-components.browser.esm-BGcf52Sq.js";import"./iframe-Pb6PAcXw.js";import"./index-ClphFpYq.js";import"./index-Cf3fr1dX.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="95acfac6-78aa-44f3-bbf2-c3ff5aa16797",t._sentryDebugIdIdentifier="sentry-dbid-95acfac6-78aa-44f3-bbf2-c3ff5aa16797")}catch{}const m=a.p`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  text-align: center;
`,f=l`
    from {
        opacity: 1;
        scale:0;
    }
    to {
        opacity: 0;
        scale:1;
    }
`,p=a.div`
  height: 150px;
  width: 150px;
  margin: 20px auto 20px;
  position: relative;
`,n=a.div`
  height: 150px;
  width: 150px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  background-color: #c7d01c;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  position: absolute;
  animation-name: ${f};
  opacity: 0;
`,g=a(n)`
  animation-delay: 0s;
`,u=a(n)`
  animation-delay: 2s;
`,x=a(n)`
  animation-delay: 4s;
`,y=a(n)`
  animation-delay: 6s;
`,c=()=>e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[e.jsx(g,{}),e.jsx(u,{}),e.jsx(x,{}),e.jsx(y,{})]}),e.jsx(m,{"data-testid":"waiting-animation",children:"処理を実行中"})]});c.__docgenInfo={description:"",methods:[],displayName:"LargeLoading"};const C={title:"COMPONENTS/loading/LargeLoading",component:c,parameters:{layout:"fullscreen"}},i={};var r,s,d;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const L=["Primary"];export{i as Primary,L as __namedExportsOrder,C as default};
