import{j as i}from"./jsx-runtime-DQzKSEpe.js";import{d as e,m as l}from"./styled-components.browser.esm-CLAfONCk.js";import"./iframe-DiV2dAZL.js";import"./index-BXQSQZ3S.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="69a066bd-d32e-4603-947c-c07572769bf6",t._sentryDebugIdIdentifier="sentry-dbid-69a066bd-d32e-4603-947c-c07572769bf6")}catch{}const m=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,p=e.p`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
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
`,g=e.div`
  height: 90px;
  width: 90px;
  margin: 20px auto 20px;
  position: relative;
`,o=e.div`
  height: 90px;
  width: 90px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  background-color: #c7d01c;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  position: absolute;
  animation-name: ${f};
  opacity: 0;
`,u=e(o)`
  animation-delay: 0s;
`,x=e(o)`
  animation-delay: 2s;
`,y=e(o)`
  animation-delay: 4s;
`,b=e(o)`
  animation-delay: 6s;
`,c=t=>i.jsxs(m,{children:[i.jsxs(g,{children:[i.jsx(u,{}),i.jsx(x,{}),i.jsx(y,{}),i.jsx(b,{})]}),i.jsx(p,{"data-testid":"waiting-animation",children:"処理を実行中"})]});c.__docgenInfo={description:"",methods:[],displayName:"SmallLoading"};const C={title:"COMPONENTS/loading/SmallLoading",component:c,parameters:{layout:"fullscreen"}},n={};var s,r,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(r=n.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const I=["Primary"];export{n as Primary,I as __namedExportsOrder,C as default};
