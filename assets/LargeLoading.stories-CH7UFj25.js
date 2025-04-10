import{j as e}from"./jsx-runtime-CscXTn9F.js";import{d as t,m as l}from"./styled-components.browser.esm-DMtPHe6N.js";import"./iframe-Z5-yEiqb.js";import"./index-Bn753rIt.js";try{let i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new i.Error().stack;o&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[o]="e13b9b26-d473-4a79-b6ef-7b791ada1b5b",i._sentryDebugIdIdentifier="sentry-dbid-e13b9b26-d473-4a79-b6ef-7b791ada1b5b")}catch{}const m=t.p`
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
`,n=t.div`
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
`,g=t(n)`
  animation-delay: 0s;
`,b=t(n)`
  animation-delay: 2s;
`,u=t(n)`
  animation-delay: 4s;
`,x=t(n)`
  animation-delay: 6s;
`,c=()=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(g,{}),e.jsx(b,{}),e.jsx(u,{}),e.jsx(x,{})]}),e.jsx(m,{"data-testid":"waiting-animation",children:"処理を実行中"})]});c.__docgenInfo={description:"",methods:[],displayName:"LargeLoading"};const _={title:"COMPONENTS/LargeLoading",component:c,parameters:{layout:"fullscreen"}},a={};var r,s,d;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const C=["Primary"];export{a as Primary,C as __namedExportsOrder,_ as default};
