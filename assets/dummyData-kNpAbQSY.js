import{j as r}from"./jsx-runtime-BUyYNg62.js";import{d as l}from"./styled-components.browser.esm-DXSXA5cb.js";import"./iframe-8288HGL7.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="39d1e7d3-334a-4cf4-907e-0e7d4a305b14",e._sentryDebugIdIdentifier="sentry-dbid-39d1e7d3-334a-4cf4-907e-0e7d4a305b14")}catch{}const t=e=>{if(e===null)return"";const i=parseInt(e.slice(0,4)),a=parseInt(e.slice(5,7)),s=parseInt(e.slice(8,10)),u=parseInt(e.slice(11,13)),d=parseInt(e.slice(14,16)),n=new Date(i,a-1,s,u,d,0,0);return n.setHours(n.getHours()+9),`${n.getFullYear()}年 ${n.getMonth()}月 ${n.getDate()}日 ${n.getHours()}時${n.getMinutes()}分`},c=l.div`
  margin: 30px auto;
  padding: 15px;
  width: 90%;
  max-width: 800px;
  background-color: #f6f6f6;
  border: #b3b3b3 1px solid;
`,o=e=>r.jsxs(c,{children:[r.jsxs("p",{children:["id: ",e.item.id]}),r.jsxs("p",{children:["item_id: ",e.item.item_id]}),r.jsxs("p",{children:["visible_id: ",e.item.visible_id]}),r.jsxs("p",{children:["name: ",e.item.name]}),r.jsxs("p",{children:["product_number: ",e.item.product_number]}),r.jsxs("p",{children:["description: ",e.item.description]}),r.jsxs("p",{children:["purchase_year: ",e.item.purchase_year??""]}),r.jsxs("p",{children:["purchase_price: ",e.item.purchase_price??""]}),r.jsxs("p",{children:["durability: ",e.item.durability??""]}),r.jsxs("p",{children:["is_depreciation: ",e.item.is_depreciation?"減価償却する":"減価償却しない"]}),r.jsxs("p",{children:["connector: ",e.item.connector.join(",")]}),r.jsxs("p",{children:["color: ",e.item.color]}),r.jsxs("p",{children:["is_rent: ",e.item.is_rent?"レンタル不可":"レンタル可"]}),r.jsxs("p",{children:["created_at: ",t(e.item.created_at)]}),r.jsxs("p",{children:["updated_at: ",t(e.item.updated_at)]})]});o.__docgenInfo={description:"",methods:[],displayName:"AllTrashItemsLi",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"item_id",value:{name:"number",required:!0}},{key:"visible_id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"product_number",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"purchase_year",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"purchase_price",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"durability",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0}},{key:"is_depreciation",value:{name:"boolean",required:!0}},{key:"connector",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"is_rent",value:{name:"boolean",required:!0}},{key:"color",value:{name:"string",required:!0}},{key:"created_at",value:{name:"string",required:!0}},{key:"updated_at",value:{name:"string",required:!0}}]}},description:""}}};const y={trash_items:[{id:1,item_id:1,visible_id:"0000",name:"佃煮大学",product_number:"A0001",description:"佃煮大学は、あります！(大嘘)",purchase_year:2025,purchase_price:1e4,durability:100,is_depreciation:!1,connector:["HDMIオス","HDMIオス"],is_rent:!1,color:"red",created_at:"2025-01-01 11:08:46.748730482",updated_at:"2025-01-01 11:08:46.748730482"},{id:2,item_id:2,visible_id:"0001",name:"そぽたん煮",product_number:"",description:"雑煮と似た味がするらしい",purchase_year:null,purchase_price:null,durability:null,is_depreciation:!0,connector:[],is_rent:!0,color:"",created_at:"2025-01-01 11:08:46.748730482",updated_at:"2025-01-01 11:08:46.748730482"}]};export{o as A,y as a};
