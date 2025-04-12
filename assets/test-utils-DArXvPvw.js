import{r as u,g as l}from"./index-DUXyuv_N.js";import"./iframe-DtflP5_T.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0cd6d448-7dfe-4e50-8a70-fa66b53d1291",e._sentryDebugIdIdentifier="sentry-dbid-0cd6d448-7dfe-4e50-8a70-fa66b53d1291")}catch{}function p(e,t){for(var r=0;r<t.length;r++){const o=t[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const n=Object.getOwnPropertyDescriptor(o,s);n&&Object.defineProperty(e,s,n.get?n:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a={exports:{}},i={};/**
 * @license React
 * react-dom-test-utils.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function g(){if(d)return i;d=1;var e=u(),t=!1;return i.act=function(r){return t===!1&&(t=!0,console.error("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")),e.act(r)},i}var c;function b(){return c||(c=1,a.exports=g()),a.exports}var f=b();const y=l(f),U=p({__proto__:null,default:y},[f]);export{U as t};
