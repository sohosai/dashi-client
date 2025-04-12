import{j as e}from"./jsx-runtime-D0qD98ke.js";import{d as t,m as l}from"./styled-components.browser.esm-DNO95yAh.js";import"./iframe-CV9tUv17.js";import"./index-VYh7P2Yd.js";import"./index-BAZwkdgT.js";try{let i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new i.Error().stack;a&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[a]="3c9676e8-8080-44fb-93f6-59393fa8c54f",i._sentryDebugIdIdentifier="sentry-dbid-3c9676e8-8080-44fb-93f6-59393fa8c54f")}catch{}const m=t.p`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  text-align: center;
`,p=l`
    from {
        opacity: 1;
        scale:0;
    }
    to {
        opacity: 0;
        scale:1;
    }
`,f=t.div`
  height: 150px;
  width: 150px;
  margin: 20px auto 20px;
  position: relative;
`,o=t.div`
  height: 150px;
  width: 150px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  background-color: #c7d01c;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  position: absolute;
  animation-name: ${p};
  opacity: 0;
`,g=t(o)`
  animation-delay: 0s;
`,u=t(o)`
  animation-delay: 2s;
`,x=t(o)`
  animation-delay: 4s;
`,y=t(o)`
  animation-delay: 6s;
`,c=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(g,{}),e.jsx(u,{}),e.jsx(x,{}),e.jsx(y,{})]}),e.jsx(m,{"data-testid":"waiting-animation",children:"処理を実行中"})]});c.__docgenInfo={description:"",methods:[],displayName:"LargeLoading"};const C={title:"COMPONENTS/loading/LargeLoading",component:c,parameters:{layout:"fullscreen"}},n={};var r,s,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const L=["Primary"];export{n as Primary,L as __namedExportsOrder,C as default};
