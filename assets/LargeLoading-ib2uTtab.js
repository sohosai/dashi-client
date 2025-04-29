import{j as i}from"./jsx-runtime-BH-yBogc.js";import{d as e,m as o}from"./styled-components.browser.esm-4IHA5p08.js";import"./iframe-CitulrRo.js";try{let n=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new n.Error().stack;t&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[t]="2a0acf2a-5f94-443e-aead-8eba76d522d1",n._sentryDebugIdIdentifier="sentry-dbid-2a0acf2a-5f94-443e-aead-8eba76d522d1")}catch{}const d=e.p`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  text-align: center;
`,s=o`
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
`,a=e.div`
  height: 150px;
  width: 150px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  background-color: #c7d01c;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  position: absolute;
  animation-name: ${s};
  opacity: 0;
`,c=e(a)`
  animation-delay: 0s;
`,l=e(a)`
  animation-delay: 2s;
`,f=e(a)`
  animation-delay: 4s;
`,p=e(a)`
  animation-delay: 6s;
`,g=()=>i.jsxs(i.Fragment,{children:[i.jsxs(r,{children:[i.jsx(c,{}),i.jsx(l,{}),i.jsx(f,{}),i.jsx(p,{})]}),i.jsx(d,{"data-testid":"waiting-animation",children:"処理を実行中"})]});g.__docgenInfo={description:"",methods:[],displayName:"LargeLoading"};export{g as L};
