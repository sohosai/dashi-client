import{j as t}from"./jsx-runtime-CjicDsvG.js";import{d as i,m as a}from"./styled-components.browser.esm-CDN4K-0a.js";import"./iframe-CF3K2jaX.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="99b1abbd-f93a-4da1-b858-8db5c904eccc",n._sentryDebugIdIdentifier="sentry-dbid-99b1abbd-f93a-4da1-b858-8db5c904eccc")}catch{}const d=i.div`
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
`,b=n=>t.jsxs(d,{children:[t.jsxs(r,{children:[t.jsx(l,{}),t.jsx(f,{}),t.jsx(p,{}),t.jsx(m,{})]}),t.jsx(s,{"data-testid":"waiting-animation",children:"処理を実行中"})]});b.__docgenInfo={description:"",methods:[],displayName:"SmallLoading"};export{b as S};
