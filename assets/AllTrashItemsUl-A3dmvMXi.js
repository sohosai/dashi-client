import{j as n}from"./jsx-runtime-BjnaW7-P.js";import{A as a}from"./AllTrashItemsLi-7JXWo89m.js";import{d as t}from"./styled-components.browser.esm-BU2dm8Zc.js";import"./iframe-mc-FO0P6.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="9bfc1ccd-03ab-4866-93d7-cbf3526ec5dd",e._sentryDebugIdIdentifier="sentry-dbid-9bfc1ccd-03ab-4866-93d7-cbf3526ec5dd")}catch{}const u=t.li`
  margin: 0;
  padding: 0;
  list-style: none;
`,s=t.ul`
  margin: 60px 0 100px 0;
  padding: 0;
`,l=e=>n.jsx(s,{children:e.item.trash_items.map((r,i)=>n.jsx(u,{children:n.jsx(a,{item:r})},i))});l.__docgenInfo={description:"",methods:[],displayName:"AllTrashItemsUl",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  trash_items: TrashItemResponse[];
}`,signature:{properties:[{key:"trash_items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  item_id: number;
  visible_id: string;
  name: string;
  product_number: string;
  description: string;
  purchase_year: number | null;
  purchase_price: number | null;
  durability: number | null;
  is_depreciation: boolean;
  connector: string[];
  is_rent: boolean;
  color: string;
  created_at: string;
  updated_at: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"item_id",value:{name:"number",required:!0}},{key:"visible_id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"product_number",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"purchase_year",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"purchase_price",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"durability",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"is_depreciation",value:{name:"boolean",required:!0}},{key:"connector",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"is_rent",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"created_at",value:{name:"string",required:!0}},{key:"updated_at",value:{name:"string",required:!0}}]}}],raw:"TrashItemResponse[]",required:!0}}]}},description:""}}};export{l as A};
