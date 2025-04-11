import{j as t}from"./jsx-runtime-BUyYNg62.js";import{A as o,a as d}from"./dummyData-kNpAbQSY.js";import{d as u}from"./styled-components.browser.esm-DXSXA5cb.js";import"./iframe-8288HGL7.js";import"./index-B7Mq8QJ8.js";import"./index-DjY6muf2.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="59565a6b-ce0a-436f-ac05-56bbf73f8590",e._sentryDebugIdIdentifier="sentry-dbid-59565a6b-ce0a-436f-ac05-56bbf73f8590")}catch{}const p=u.li`
  margin: 0;
  padding: 0;
  list-style: none;
`,c=u.ul`
  margin: 60px 0 100px 0;
  padding: 0;
`,l=e=>t.jsx(c,{children:e.item.trash_items.map((r,m)=>t.jsx(p,{children:t.jsx(o,{item:r})},m))});l.__docgenInfo={description:"",methods:[],displayName:"AllTrashItemsUl",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"item_id",value:{name:"number",required:!0}},{key:"visible_id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"product_number",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"purchase_year",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"purchase_price",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"durability",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"is_depreciation",value:{name:"boolean",required:!0}},{key:"connector",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"is_rent",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"created_at",value:{name:"string",required:!0}},{key:"updated_at",value:{name:"string",required:!0}}]}}],raw:"TrashItemResponse[]",required:!0}}]}},description:""}}};const v={title:"COMPONENTS/all_trash_items/AllTrashItemsUl",component:l,parameters:{layout:"fullscreen"}},n={args:{item:d}};var a,s,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    item: allTrashItemsResponseData
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const k=["Primary"];export{n as Primary,k as __namedExportsOrder,v as default};
