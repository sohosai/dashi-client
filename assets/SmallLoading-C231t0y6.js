import{j as t}from"./jsx-runtime-BH-yBogc.js";import{d as i,m as a}from"./styled-components.browser.esm-4IHA5p08.js";import"./iframe-CitulrRo.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="0cdc49ac-cb2e-4fd0-adfc-dfa04c859591",n._sentryDebugIdIdentifier="sentry-dbid-0cdc49ac-cb2e-4fd0-adfc-dfa04c859591")}catch{}const d=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,s=i.p`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-align: center;
`,c=a`
    from {
        opacity: 1;
        scale:0;
    }
    to {
        opacity: 0;
        scale:1;
    }
`,r=i.div`
  height: 90px;
  width: 90px;
  margin: 20px auto 20px;
  position: relative;
`,e=i.div`
  height: 90px;
  width: 90px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  background-color: #c7d01c;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  position: absolute;
  animation-name: ${c};
  opacity: 0;
`,l=i(e)`
  animation-delay: 0s;
`,f=i(e)`
  animation-delay: 2s;
`,p=i(e)`
  animation-delay: 4s;
`,m=i(e)`
  animation-delay: 6s;
`,x=n=>t.jsxs(d,{children:[t.jsxs(r,{children:[t.jsx(l,{}),t.jsx(f,{}),t.jsx(p,{}),t.jsx(m,{})]}),t.jsx(s,{"data-testid":"waiting-animation",children:"処理を実行中"})]});x.__docgenInfo={description:"",methods:[],displayName:"SmallLoading"};export{x as S};
