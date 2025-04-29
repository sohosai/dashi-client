import{j as r}from"./jsx-runtime-BH-yBogc.js";import{F as i}from"./index-Jer6u8nc.js";import{d as t}from"./styled-components.browser.esm-4IHA5p08.js";import"./iframe-CitulrRo.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d184d5d6-3f0c-4fbd-bf21-7173bf62cb1d",e._sentryDebugIdIdentifier="sentry-dbid-d184d5d6-3f0c-4fbd-bf21-7173bf62cb1d")}catch{}const o=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,l=t.div`
  margin: 0 auto;
`,a=t.p`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-align: center;
`,c=t.div`
  width: fit-content;
  margin: 30px auto 0 auto;
  padding: 5px 15px;
  background-color: #f6f6f6;
  border: 1px solid #b3b3b3;
`,d=t.p`
  font-size: 1.6rem;
  margin: 5px 0 0 0;
  padding: 0;
`,s=t.p`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
`,f=e=>r.jsxs(o,{children:[r.jsx(l,{children:r.jsx(i,{size:90,color:"#d01c1c"})}),r.jsx(a,{children:"処理の実行に失敗しました。"}),r.jsxs(c,{children:[r.jsx(d,{children:"エラーコード"}),r.jsx(s,{children:e.result.code}),r.jsx(d,{children:"エラーメッセージ"}),r.jsx(s,{children:e.result.message})]})]});f.__docgenInfo={description:"",methods:[],displayName:"ErrorResult",props:{result:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  code: string;
  message: string;
}`,signature:{properties:[{key:"code",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},description:""}}};export{f as E};
