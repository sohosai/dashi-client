import{j as r}from"./jsx-runtime-DoqoYiPE.js";import{F as a}from"./index-CsByFqLT.js";import{d as t}from"./styled-components.browser.esm-C4AohHBP.js";import{r as c}from"./index-BfI56GXc.js";import"./iframe-DRRJkf0D.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="26e4a974-0f61-4eb9-a17c-feeb6f1523b7",e._sentryDebugIdIdentifier="sentry-dbid-26e4a974-0f61-4eb9-a17c-feeb6f1523b7")}catch{}const l=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,p=t.div`
  margin: 0 auto;
`,u=t.p`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-align: center;
`,g=t.input.attrs({type:"checkbox"})`
  display: none;
`,f=t.label`
  margin: auto;
  padding: 0;
  font-size: 1.6rem;
  text-align: center;
`,m=t.div`
  width: fit-content;
  margin: 7px auto 0 auto;
  padding: 5px 15px;
  background-color: #f6f6f6;
  border: 1px solid #b3b3b3;
  display: ${({isChecked:e})=>e?"block":"none"};
  transition: all 0.3 ease;
`,s=t.p`
  font-size: 1.6rem;
  margin: 5px 0 0 0;
  padding: 0;
`,o=t.p`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
`,y=e=>{const[n,i]=c.useState(!1);return r.jsxs(l,{children:[r.jsx(p,{children:r.jsx(a,{size:90,color:"#d01c1c"})}),r.jsx(u,{children:"処理の実行に失敗しました。"}),r.jsx(g,{id:"ErrorResultAccordion",checked:n,onChange:d=>i(d.target.checked)}),r.jsx(f,{htmlFor:"ErrorResultAccordion",children:n?"エラー内容を表示しない。":"エラー内容を表示する。"}),r.jsxs(m,{isChecked:n,children:[r.jsx(s,{children:"エラーコード"}),r.jsx(o,{children:e.result.code}),r.jsx(s,{children:"エラーメッセージ"}),r.jsx(o,{children:e.result.message})]})]})};y.__docgenInfo={description:"",methods:[],displayName:"ErrorResult",props:{result:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  code: string;
  message: string;
}`,signature:{properties:[{key:"code",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},description:""}}};export{y as E};
