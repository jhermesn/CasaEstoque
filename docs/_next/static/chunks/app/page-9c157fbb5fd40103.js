(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{67:function(){},2061:function(){},4702:function(e,t,a){Promise.resolve().then(a.bind(a,9615))},9615:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return R}});var r=a(7437),o=a(2265),n=a(7053),d=a(535),s=a(1994),l=a(3335);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,l.m6)((0,s.W)(t))}let u=(0,d.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=o.forwardRef((e,t)=>{let{className:a,variant:o,size:d,asChild:s=!1,...l}=e,c=s?n.g7:"button";return(0,r.jsx)(c,{className:i(u({variant:o,size:d,className:a})),ref:t,...l})});c.displayName="Button";let m=o.forwardRef((e,t)=>{let{className:a,type:o,...n}=e;return(0,r.jsx)("input",{type:o,className:i("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...n})});m.displayName="Input";var f=a(6394);let b=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),g=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)(f.f,{ref:t,className:i(b(),a),...o})});function h(e){let{onAdicionar:t}=e,[a,n]=(0,o.useState)(""),[d,s]=(0,o.useState)(""),[l,i]=(0,o.useState)(""),[u,f]=(0,o.useState)(""),[b,h]=(0,o.useState)(null),p=e=>{let t=e.replace(/\D/g,""),a="";return t.length>0&&(a+=t.substring(0,2),t.length>2&&(a+="/"+t.substring(2,4),t.length>4&&(a+="/"+t.substring(4,8)))),a},x=e=>{let[t,a,r]=e.split("/").map(Number),o=new Date(r,a-1,t);return o.getDate()===t&&o.getMonth()===a-1&&o.getFullYear()===r};return(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h(null);let r=Number.parseInt(d);if(isNaN(r)||r<=0){h("A quantidade deve ser um n\xfamero maior que zero.");return}if(!x(l)){h("Data de validade inv\xe1lida.");return}let[o,c,m]=l.split("/"),b=new Date(Number.parseInt(m),Number.parseInt(c)-1,Number.parseInt(o));if(b<new Date){h("A data de validade n\xe3o pode ser no passado.");return}let g=Number.parseInt(u);if(isNaN(g)||g<=0){h("Os dias de validade ap\xf3s aberto devem ser um n\xfamero maior que zero.");return}t(Array(r).fill(null).map(()=>({nome:a,quantidade:r,dataValidade:new Date(b),aberto:!1,diasValidadeAposAberto:g,dataAdicao:new Date}))),n(""),s(""),i(""),f("")},className:"space-y-4 mb-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(g,{htmlFor:"nome",children:"Nome do Produto"}),(0,r.jsx)(m,{id:"nome",value:a,onChange:e=>n(e.target.value),required:!0,className:"bg-gray-800 text-white border-gray-700"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(g,{htmlFor:"quantidade",children:"Quantidade"}),(0,r.jsx)(m,{id:"quantidade",type:"number",value:d,onChange:e=>s(e.target.value),required:!0,min:"1",className:"bg-gray-800 text-white border-gray-700"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(g,{htmlFor:"dataValidade",children:"Data de Validade (dd/mm/yyyy)"}),(0,r.jsx)(m,{id:"dataValidade",type:"text",value:l,onChange:e=>{i(p(e.target.value))},placeholder:"dd/mm/yyyy",required:!0,className:"bg-gray-800 text-white border-gray-700"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(g,{htmlFor:"diasValidadeAposAberto",children:"Dias de Validade Ap\xf3s Aberto"}),(0,r.jsx)(m,{id:"diasValidadeAposAberto",type:"number",value:u,onChange:e=>f(e.target.value),required:!0,min:"1",className:"bg-gray-800 text-white border-gray-700"})]}),b&&(0,r.jsx)("p",{className:"text-red-500",children:b}),(0,r.jsx)(c,{type:"submit",className:"bg-blue-600 hover:bg-blue-700 text-white",children:"Adicionar Produto(s)"})]})}g.displayName=f.f.displayName;let p=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:i("w-full caption-bottom text-sm",a),...o})})});p.displayName="Table";let x=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("thead",{ref:t,className:i("[&_tr]:border-b",a),...o})});x.displayName="TableHeader";let v=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("tbody",{ref:t,className:i("[&_tr:last-child]:border-0",a),...o})});v.displayName="TableBody",o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("tfoot",{ref:t,className:i("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...o})}).displayName="TableFooter";let y=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("tr",{ref:t,className:i("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...o})});y.displayName="TableRow";let N=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("th",{ref:t,className:i("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...o})});N.displayName="TableHead";let j=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("td",{ref:t,className:i("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...o})});j.displayName="TableCell",o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)("caption",{ref:t,className:i("mt-4 text-sm text-muted-foreground",a),...o})}).displayName="TableCaption";var w=a(9862);let A=o.forwardRef((e,t)=>{let{className:a,...o}=e;return(0,r.jsx)(w.fC,{className:i("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a),...o,ref:t,children:(0,r.jsx)(w.bU,{className:i("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});A.displayName=w.fC.displayName;var k=a(2093);function D(e){let{produtos:t,onUpdate:a}=e,[n,d]=(0,o.useState)(t);(0,o.useEffect)(()=>{d(t)},[t]);let s=(e,t)=>{let r=n.map((a,r)=>r===e?{...a,...t}:a);d(r),a(r)},l=e=>{let t=n.filter((t,a)=>a!==e);d(t),a(t)},i=e=>{let t=n[e];s(e,{aberto:!t.aberto,dataAbertura:t.aberto?void 0:new Date})},u=e=>e.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}),m=e=>{if(e.aberto&&e.dataAbertura){let t=new Date(e.dataAbertura);return t.setDate(t.getDate()+e.diasValidadeAposAberto),u(t)}return u(e.dataValidade)},f=[...n].sort((e,t)=>e.nome<t.nome?-1:e.nome>t.nome?1:e.dataValidade.getTime()-t.dataValidade.getTime());return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p,{children:[(0,r.jsx)(x,{children:(0,r.jsxs)(y,{children:[(0,r.jsx)(N,{children:"Nome"}),(0,r.jsx)(N,{children:"Data de Validade"}),(0,r.jsx)(N,{children:"Aberto"})]})}),(0,r.jsx)(v,{children:f.map((e,t)=>(0,r.jsxs)(y,{children:[(0,r.jsx)(j,{children:e.nome}),(0,r.jsx)(j,{children:m(e)}),(0,r.jsx)(j,{children:(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(A,{checked:e.aberto,onCheckedChange:()=>i(t)}),(0,r.jsx)("span",{children:e.aberto?"Aberto":"Fechado"}),(0,r.jsx)(c,{variant:"destructive",className:"ml-auto",onClick:()=>l(t),children:"Remover"})]})})]},t))})]}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(c,{onClick:()=>{let e=n.map(e=>{let t=e.aberto?m(e):u(e.dataValidade);return{Nome:e.nome,"Data de Validade":t,Aberto:e.aberto?"Sim":"N\xe3o"}}),t=k.P6.json_to_sheet(e),a=k.P6.book_new();k.P6.book_append_sheet(a,t,"Produtos"),t["!cols"]=[{wch:30},{wch:20},{wch:10}];let r=new Date;k.P6.sheet_add_aoa(t,[["Planilha gerada em: ".concat(r.toLocaleString("pt-BR"))]],{origin:-1});let o=new Blob([function(e){let t=new ArrayBuffer(e.length),a=new Uint8Array(t);for(let t=0;t<e.length;t++)a[t]=255&e.charCodeAt(t);return t}(k.cW(a,{bookType:"xlsx",type:"binary"}))],{type:"application/octet-stream"}),d=URL.createObjectURL(o),s=document.createElement("a");s.href=d,s.download="casa_estoque_".concat(r.toLocaleDateString("pt-BR"),".xlsx"),s.click(),URL.revokeObjectURL(d)},className:"bg-blue-600 hover:bg-blue-700 text-white",children:"Gerar Planilha"})})]})}function R(){let[e,t]=(0,o.useState)([]),[a,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{try{let e=localStorage.getItem("produtos");if(console.log("ITEM 'produtos' no localStorage:",e),e){let a=JSON.parse(e).map(e=>({...e,dataValidade:new Date(e.dataValidade),dataAbertura:e.dataAbertura?new Date(e.dataAbertura):void 0,dataAdicao:new Date(e.dataAdicao)}));t(a)}}catch(e){console.error("Erro ao carregar localStorage:",e)}n(!0)},[]),(0,o.useEffect)(()=>{a&&(console.log("Salvando no localStorage:",e),localStorage.setItem("produtos",JSON.stringify(e)))},[e,a]),(0,r.jsxs)("div",{className:"container mx-auto p-4",children:[(0,r.jsx)(h,{onAdicionar:e=>{t(t=>[...t,...e])}}),(0,r.jsx)(D,{produtos:e,onUpdate:e=>{t(e)}})]})}}},function(e){e.O(0,[425,623,971,117,744],function(){return e(e.s=4702)}),_N_E=e.O()}]);