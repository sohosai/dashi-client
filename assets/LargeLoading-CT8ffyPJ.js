import{j as i}from"./jsx-runtime-CjicDsvG.js";import{d as e,m as a}from"./styled-components.browser.esm-CDN4K-0a.js";import"./iframe-CF3K2jaX.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new n.Error().stack;o&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[o]="0a17efe1-0453-455e-9c91-ba10fccfcc95",n._sentryDebugIdIdentifier="sentry-dbid-0a17efe1-0453-455e-9c91-ba10fccfcc95")}catch{}const s=e.p`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  text-align: center;
`,d=a`
    from {
        opacity: 1;
        scale:0;
    }
    to {
        opacity: 0;
        scale:1;
    }
`,r=e.div`
  height: 150px;
  width: 150px;
  margin: 20px auto 20px;
  position: relative;
`,t=e.div`
  height: 150px;
  width: 150px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  background-color: #c7d01c;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  position: absolute;
  animation-name: ${d};
  opacity: 0;
`,c=e(t)`
  animation-delay: 0s;
`,l=e(t)`
  animation-delay: 2s;
`,f=e(t)`
  animation-delay: 4s;
`,p=e(t)`
  animation-delay: 6s;
`,g=()=>i.jsxs(i.Fragment,{children:[i.jsxs(r,{children:[i.jsx(c,{}),i.jsx(l,{}),i.jsx(f,{}),i.jsx(p,{})]}),i.jsx(s,{"data-testid":"waiting-animation",children:"処理を実行中"})]});g.__docgenInfo={description:"",methods:[],displayName:"LargeLoading"};export{g as L};
