import{j as e}from"./jsx-runtime.6bKjKBAi.js";import{r as t}from"./index.h6NPI_0z.js";import{q as s,_ as r}from"./transition.DArNrlwT.js";import"./index.C6x7P3or.js";function v(){let[c,i]=t.useState(!1),[n,d]=t.useState(""),[m,u]=t.useState("");function o(){i(!1)}return t.useEffect(()=>{(async()=>{try{const a=await(await fetch("https://tce-cms-strapi-192i.onrender.com/api/modal-homes?populate[anuncio][fields][0]=url")).json();if(a.data.length>0){const x=a.data[0].attributes.title,f=a.data[0].attributes.anuncio.data.attributes.url;d(x),u(f),i(!0)}}catch(l){console.error("Error fetching data:",l)}})()},[]),e.jsx(e.Fragment,{children:e.jsx(s,{appear:!0,show:c,as:t.Fragment,children:e.jsxs(r,{as:"div",className:"relative z-10",onClose:o,children:[e.jsx(s.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black/25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e.jsx(s.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(r.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[e.jsx(r.Title,{as:"h3",className:"text-2xl font-bold leading-6 text-zinc-800 text-center mb-6",children:n}),e.jsx("img",{className:"rounded-xl",src:`https://tce-cms-strapi-192i.onrender.com${m}`,alt:n}),e.jsx("div",{className:"mt-6 flex justify-center",children:e.jsx("button",{type:"button",className:"inline-flex text-zinc-800 justify-center rounded-lg border border-zinc-800 bg-zinc-100 px-4 py-2 text-sm font-medium hover:bg-blue hover:text-white transition-all duration-300",onClick:o,children:"Cerrar"})})]})})})})]})})})}export{v as default};
