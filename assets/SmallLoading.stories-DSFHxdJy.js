import{j as i}from"./jsx-runtime-B5vTWXKB.js";import{d as e,m as l}from"./styled-components.browser.esm-6q7zNiRo.js";import"./iframe-DxfDg0Mq.js";import"./index-Gw_JnOjR.js";import"./index-CI0qzFbf.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="d686d7b6-4245-478f-b3d6-0e7887f880c4",t._sentryDebugIdIdentifier="sentry-dbid-d686d7b6-4245-478f-b3d6-0e7887f880c4")}catch{}const m=e.div`
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
`,n=e.div`
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
`,u=e(n)`
  animation-delay: 0s;
`,x=e(n)`
  animation-delay: 2s;
`,y=e(n)`
  animation-delay: 4s;
`,b=e(n)`
  animation-delay: 6s;
`,c=t=>i.jsxs(m,{children:[i.jsxs(g,{children:[i.jsx(u,{}),i.jsx(x,{}),i.jsx(y,{}),i.jsx(b,{})]}),i.jsx(p,{"data-testid":"waiting-animation",children:"処理を実行中"})]});c.__docgenInfo={description:"",methods:[],displayName:"SmallLoading"};const I={title:"COMPONENTS/loading/SmallLoading",component:c,parameters:{layout:"fullscreen"}},o={};var s,r,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(r=o.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const S=["Primary"];export{o as Primary,S as __namedExportsOrder,I as default};
