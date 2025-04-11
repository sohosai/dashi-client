import{j as r}from"./jsx-runtime-D1f1plz0.js";import{F as p}from"./index-B15HQTut.js";import{d as s}from"./styled-components.browser.esm-DwLqTJF0.js";import"./iframe-CZaqQCbc.js";import"./index-DeoK7Krt.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c7a98bbd-6487-410c-9d90-0d2d6edee592",e._sentryDebugIdIdentifier="sentry-dbid-c7a98bbd-6487-410c-9d90-0d2d6edee592")}catch{}const m=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,u=s.div`
  margin: 0 auto;
`,g=s.p`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-align: center;
`,y=s.div`
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
`,c=e=>r.jsxs(m,{children:[r.jsx(u,{children:r.jsx(p,{size:90,color:"#d01c1c"})}),r.jsx(g,{children:"処理の実行に失敗しました。"}),r.jsxs(y,{children:[r.jsx(n,{children:"エラーコード"}),r.jsx(d,{children:e.result.code}),r.jsx(n,{children:"エラーメッセージ"}),r.jsx(d,{children:e.result.message})]})]});c.__docgenInfo={description:"",methods:[],displayName:"ErrorResult",props:{result:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  code: string;
  message: string;
}`,signature:{properties:[{key:"code",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},description:""}}};const E={title:"COMPONENTS/ErrorResult",component:c,parameters:{layout:"fullscreen"}},o={args:{result:{code:"storybook/sample-error",message:"SampleError: This is sample error for storybook."}}};var i,a,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    result: {
      code: 'storybook/sample-error',
      message: 'SampleError: This is sample error for storybook.'
    }
  }
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const S=["Primary"];export{o as Primary,S as __namedExportsOrder,E as default};
