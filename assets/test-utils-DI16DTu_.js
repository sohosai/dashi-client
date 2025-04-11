import{a as u,g as l}from"./index-DeoK7Krt.js";import"./iframe-CZaqQCbc.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="71ba0a6f-671a-4d5e-b9ce-4c3b3fd3279b",e._sentryDebugIdIdentifier="sentry-dbid-71ba0a6f-671a-4d5e-b9ce-4c3b3fd3279b")}catch{}function p(e,t){for(var r=0;r<t.length;r++){const o=t[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(o,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n={exports:{}},i={};/**
 * @license React
 * react-dom-test-utils.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function b(){if(c)return i;c=1;var e=u(),t=!1;return i.act=function(r){return t===!1&&(t=!0,console.error("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")),e.act(r)},i}var f;function g(){return f||(f=1,n.exports=b()),n.exports}var d=g();const y=l(d),U=p({__proto__:null,default:y},[d]);export{U as t};
