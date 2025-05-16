import{j as t}from"./jsx-runtime-HCWMoLyb.js";import{F as c}from"./index-BPpO0y6O.js";import{d as r}from"./styled-components.browser.esm-DuDLL3SW.js";import{r as a}from"./index-B71QwiYl.js";import"./iframe-qXOlkdx7.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="886e577e-49cb-4215-8841-13304eac19fe",e._sentryDebugIdIdentifier="sentry-dbid-886e577e-49cb-4215-8841-13304eac19fe")}catch{}const l=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,p=r.div`
  margin: 0 auto;
`,u=r.p`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-align: center;
`,g=r.input.attrs({type:"checkbox"})`
  display: none;
`,f=r.button`
  margin: auto;
  padding: 0 5px;
  font-size: 1.6rem;
  text-align: center;
`,m=r.div`
  width: fit-content;
  margin: 7px auto 0 auto;
  padding: 5px 15px;
  background-color: #f6f6f6;
  border: 1px solid #b3b3b3;
  display: ${({isChecked:e})=>e?"block":"none"};
  transition: all 0.3 ease;
`,i=r.p`
  font-size: 1.6rem;
  margin: 5px 0 0 0;
  padding: 0;
`,d=r.p`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
`,x=e=>{const[n,o]=a.useState(!1);return t.jsxs(l,{children:[t.jsx(p,{children:t.jsx(c,{size:90,color:"#d01c1c"})}),t.jsx(u,{children:"処理の実行に失敗しました。"}),t.jsx(g,{checked:n,onChange:s=>o(s.target.checked)}),t.jsx(f,{onClick:()=>o(s=>!s),children:n?"エラー内容を表示しない。":"エラー内容を表示する。"}),t.jsxs(m,{isChecked:n,children:[t.jsx(i,{children:"エラーコード"}),t.jsx(d,{children:e.result.code}),t.jsx(i,{children:"エラーメッセージ"}),t.jsx(d,{children:e.result.message})]})]})};x.__docgenInfo={description:"",methods:[],displayName:"ErrorResult",props:{result:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  code: string;
  message: string;
}`,signature:{properties:[{key:"code",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},description:""}}};export{x as E};
