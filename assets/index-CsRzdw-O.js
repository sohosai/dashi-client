import{e as t}from"./index-lSo3128Z.js";import"./iframe-diKCIJkj.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b94f8391-0940-423c-9176-5d61e1945831",e._sentryDebugIdIdentifier="sentry-dbid-b94f8391-0940-423c-9176-5d61e1945831")}catch{}const o={},d=t.createContext(o);function f(e){const n=t.useContext(d);return t.useMemo(function(){return typeof e=="function"?e(n):{...n,...e}},[n,e])}function r(e){let n;return e.disableParentContext?n=typeof e.components=="function"?e.components(o):e.components||o:n=f(e.components),t.createElement(d.Provider,{value:n},e.children)}export{r as MDXProvider,f as useMDXComponents};
