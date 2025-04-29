import{j as r}from"./jsx-runtime-DDK6RXhE.js";import{F as i}from"./index-o6STUnfQ.js";import{d as t}from"./styled-components.browser.esm-juHa1uRC.js";import"./iframe-DlT6sZXB.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="43f6f892-289b-42a6-8bb9-257b1e356d58",e._sentryDebugIdIdentifier="sentry-dbid-43f6f892-289b-42a6-8bb9-257b1e356d58")}catch{}const o=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,a=t.div`
  margin: 0 auto;
`,l=t.p`
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
`,s=t.p`
  font-size: 1.6rem;
  margin: 5px 0 0 0;
  padding: 0;
`,d=t.p`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
`,p=e=>r.jsxs(o,{children:[r.jsx(a,{children:r.jsx(i,{size:90,color:"#d01c1c"})}),r.jsx(l,{children:"処理の実行に失敗しました。"}),r.jsxs(c,{children:[r.jsx(s,{children:"エラーコード"}),r.jsx(d,{children:e.result.code}),r.jsx(s,{children:"エラーメッセージ"}),r.jsx(d,{children:e.result.message})]})]});p.__docgenInfo={description:"",methods:[],displayName:"ErrorResult",props:{result:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  code: string;
  message: string;
}`,signature:{properties:[{key:"code",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},description:""}}};export{p as E};
