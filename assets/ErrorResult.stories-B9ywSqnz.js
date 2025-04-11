import{j as r}from"./jsx-runtime-C37mUTTT.js";import{F as p}from"./index-BZgWDwyR.js";import{d as s}from"./styled-components.browser.esm-C8lvr6kg.js";import"./iframe-CRvVhE2B.js";import"./index-D4d9T75E.js";import"./index-CTWPRGSH.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="92fbf7a9-d80c-4b7a-914f-dce13baede2f",e._sentryDebugIdIdentifier="sentry-dbid-92fbf7a9-d80c-4b7a-914f-dce13baede2f")}catch{}const m=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,u=s.div`
  margin: 0 auto;
`,f=s.p`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-align: center;
`,g=s.div`
  width: fit-content;
  margin: 30px auto 0 auto;
  padding: 5px 15px;
  background-color: #f6f6f6;
  border: 1px solid #b3b3b3;
`,n=s.p`
  font-size: 1.6rem;
  margin: 5px 0 0 0;
  padding: 0;
`,d=s.p`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
`,c=e=>r.jsxs(m,{children:[r.jsx(u,{children:r.jsx(p,{size:90,color:"#d01c1c"})}),r.jsx(f,{children:"処理の実行に失敗しました。"}),r.jsxs(g,{children:[r.jsx(n,{children:"エラーコード"}),r.jsx(d,{children:e.result.code}),r.jsx(n,{children:"エラーメッセージ"}),r.jsx(d,{children:e.result.message})]})]});c.__docgenInfo={description:"",methods:[],displayName:"ErrorResult",props:{result:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  code: string;
  message: string;
}`,signature:{properties:[{key:"code",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},description:""}}};const S={title:"COMPONENTS/error/ErrorResult",component:c,parameters:{layout:"fullscreen"}},o={args:{result:{code:"storybook/sample-error",message:"SampleError: This is sample error for storybook."}}};var a,i,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    result: {
      code: 'storybook/sample-error',
      message: 'SampleError: This is sample error for storybook.'
    }
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const k=["Primary"];export{o as Primary,k as __namedExportsOrder,S as default};
