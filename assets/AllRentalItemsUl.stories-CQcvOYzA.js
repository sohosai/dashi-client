import{j as t}from"./jsx-runtime-DfgoDrYr.js";import{d as u}from"./styled-components.browser.esm-BWihJeEa.js";import{A as o,a as d}from"./dummyData-CCo8Iv5-.js";import"./iframe-BYGTWhGg.js";import"./index-Bfsp09oL.js";import"./AllTrashItemsLi-BF3nh4HH.js";import"./ErrorResult-BBZZeXkY.js";import"./index-Dsd33MqU.js";import"./OkResult-CbJ11rTL.js";import"./QrList-DDbSjrMf.js";import"./Qr-D35BZY5P.js";import"./BarcodeList-DxcmE8Lw.js";import"./Barcode-CX7d8cKu.js";import"./AllTrashItemsUl-CJwhs8x8.js";import"./PageNotFoundComponent-Duoman_F.js";import"./chunk-KNED5TY2-Dtuzp4V5.js";import"./index-BVJbN7i7.js";import"./Header-B9QqDOyj.js";import"./Title-CwMFehtL.js";import"./SmallLoading-CJw_oo-z.js";import"./LargeLoading-BMq8-UFg.js";import"./index-BnWARVN9.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="c3cd0951-9c7c-41a3-af88-65f265fa160a",e._sentryDebugIdIdentifier="sentry-dbid-c3cd0951-9c7c-41a3-af88-65f265fa160a")}catch{}const p=u.li`
  margin: 0;
  padding: 0;
  list-style: none;
`,c=u.ul`
  margin: 60px 0 100px 0;
  padding: 0;
`,s=e=>t.jsx(c,{children:e.item.rental_items.map((r,m)=>t.jsx(p,{children:t.jsx(o,{item:r})},m))});s.__docgenInfo={description:"",methods:[],displayName:"AllRentalItemsUl",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  rental_items: RentalItemResponse[];
}`,signature:{properties:[{key:"rental_items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  visible_id: string;
  record: Record;
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
  recipient: string;
  rental_description: string;
  latest_rent_at: string | null;
  scheduled_replace_at: string | null;
  latest_replace_at: string | null;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"visible_id",value:{name:"string",required:!0}},{key:"record",value:{name:"union",raw:"'Qr' | 'Barcode' | 'Nothing'",elements:[{name:"literal",value:"'Qr'"},{name:"literal",value:"'Barcode'"},{name:"literal",value:"'Nothing'"}],required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"product_number",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"purchase_year",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"purchase_price",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"durability",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"is_depreciation",value:{name:"boolean",required:!0}},{key:"connector",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"is_rent",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"created_at",value:{name:"string",required:!0}},{key:"updated_at",value:{name:"string",required:!0}},{key:"recipient",value:{name:"string",required:!0}},{key:"rental_description",value:{name:"string",required:!0}},{key:"latest_rent_at",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"scheduled_replace_at",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"latest_replace_at",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"RentalItemResponse[]",required:!0}}]}},description:""}}};const P={title:"COMPONENTS/all_rental_items/AllRentalItemsUl",component:s,parameters:{layout:"fullscreen"}},n={args:{item:d}};var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    item: allRentalItemsResponseData
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const B=["Primary"];export{n as Primary,B as __namedExportsOrder,P as default};
