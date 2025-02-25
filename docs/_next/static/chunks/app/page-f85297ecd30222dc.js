(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{67:function(){},2061:function(){},4702:function(e,t,a){Promise.resolve().then(a.bind(a,9835))},9835:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return J}});var r=a(7437),s=a(2265),o=a(7053),i=a(535),d=a(1994),n=a(3335);function l(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,d.W)(t))}let u=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=s.forwardRef((e,t)=>{let{className:a,variant:s,size:i,asChild:d=!1,...n}=e,c=d?o.g7:"button";return(0,r.jsx)(c,{className:l(u({variant:s,size:i,className:a})),ref:t,...n})});c.displayName="Button";let f=s.forwardRef((e,t)=>{let{className:a,type:s,...o}=e;return(0,r.jsx)("input",{type:s,className:l("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...o})});f.displayName="Input";var m=a(6394);let p=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),b=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(m.f,{ref:t,className:l(p(),a),...s})});function g(e){let{onAdicionar:t}=e,[a,o]=(0,s.useState)(""),[i,d]=(0,s.useState)(""),[n,l]=(0,s.useState)(""),[u,m]=(0,s.useState)(""),[p,g]=(0,s.useState)(null),x=e=>{let t=e.replace(/\D/g,""),a="";return t.length>0&&(a+=t.substring(0,2),t.length>2&&(a+="/"+t.substring(2,4),t.length>4&&(a+="/"+t.substring(4,8)))),a},h=e=>{let[t,a,r]=e.split("/").map(Number),s=new Date(r,a-1,t);return s.getDate()===t&&s.getMonth()===a-1&&s.getFullYear()===r};return(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),g(null);let r=Number.parseInt(i);if(isNaN(r)||r<=0){g("A quantidade deve ser um n\xfamero maior que zero.");return}if(!h(n)){g("Data de validade inv\xe1lida.");return}let[s,c,f]=n.split("/"),p=new Date(Number.parseInt(f),Number.parseInt(c)-1,Number.parseInt(s));if(p<new Date){g("A data de validade n\xe3o pode ser no passado.");return}let b=Number.parseInt(u);if(isNaN(b)||b<=0){g("Os dias de validade ap\xf3s aberto devem ser um n\xfamero maior que zero.");return}t(Array(r).fill(null).map(()=>({nome:a,quantidade:r,dataValidade:new Date(p),aberto:!1,diasValidadeAposAberto:b,dataAdicao:new Date}))),o(""),d(""),l(""),m("")},className:"space-y-4 mb-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(b,{htmlFor:"nome",children:"Nome do Produto"}),(0,r.jsx)(f,{id:"nome",value:a,onChange:e=>o(e.target.value),required:!0,className:"bg-gray-800 text-white border-gray-700"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(b,{htmlFor:"quantidade",children:"Quantidade"}),(0,r.jsx)(f,{id:"quantidade",type:"number",value:i,onChange:e=>d(e.target.value),required:!0,min:"1",className:"bg-gray-800 text-white border-gray-700"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(b,{htmlFor:"dataValidade",children:"Data de Validade (dd/mm/yyyy)"}),(0,r.jsx)(f,{id:"dataValidade",type:"text",value:n,onChange:e=>{l(x(e.target.value))},placeholder:"dd/mm/yyyy",required:!0,className:"bg-gray-800 text-white border-gray-700"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(b,{htmlFor:"diasValidadeAposAberto",children:"Dias de Validade Ap\xf3s Aberto"}),(0,r.jsx)(f,{id:"diasValidadeAposAberto",type:"number",value:u,onChange:e=>m(e.target.value),required:!0,min:"1",className:"bg-gray-800 text-white border-gray-700"})]}),p&&(0,r.jsx)("p",{className:"text-red-500",children:p}),(0,r.jsx)(c,{type:"submit",className:"bg-blue-600 hover:bg-blue-700 text-white",children:"Adicionar Produto(s)"})]})}b.displayName=m.f.displayName;let x=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:l("w-full caption-bottom text-sm",a),...s})})});x.displayName="Table";let h=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("thead",{ref:t,className:l("[&_tr]:border-b",a),...s})});h.displayName="TableHeader";let v=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:l("[&_tr:last-child]:border-0",a),...s})});v.displayName="TableBody",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:l("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...s})}).displayName="TableFooter";let y=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tr",{ref:t,className:l("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...s})});y.displayName="TableRow";let N=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("th",{ref:t,className:l("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...s})});N.displayName="TableHead";let w=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("td",{ref:t,className:l("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...s})});w.displayName="TableCell",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("caption",{ref:t,className:l("mt-4 text-sm text-muted-foreground",a),...s})}).displayName="TableCaption";var j=a(5756);let A=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(j.fC,{className:l("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a),...s,ref:t,children:(0,r.jsx)(j.bU,{className:l("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});A.displayName=j.fC.displayName;var S=a(2093);function T(e){let{produtos:t,onUpdate:a}=e,[o,i]=(0,s.useState)(t);(0,s.useEffect)(()=>{i(t)},[t]);let d=(e,t)=>{let r=o.map((a,r)=>r===e?{...a,...t}:a);i(r),a(r)},n=e=>{let t=o.filter((t,a)=>a!==e);i(t),a(t)},l=e=>{let t=o[e];d(e,{aberto:!t.aberto,dataAbertura:t.aberto?void 0:new Date})},u=e=>e.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}),f=e=>{if(e.aberto&&e.dataAbertura){let t=new Date(e.dataAbertura);return t.setDate(t.getDate()+e.diasValidadeAposAberto),u(t)}return u(e.dataValidade)},m=[...o].sort((e,t)=>e.nome<t.nome?-1:e.nome>t.nome?1:e.dataValidade.getTime()-t.dataValidade.getTime());return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(x,{children:[(0,r.jsx)(h,{children:(0,r.jsxs)(y,{children:[(0,r.jsx)(N,{children:"Nome"}),(0,r.jsx)(N,{children:"Data de Validade"}),(0,r.jsx)(N,{children:"Aberto"})]})}),(0,r.jsx)(v,{children:m.map((e,t)=>(0,r.jsxs)(y,{children:[(0,r.jsx)(w,{children:e.nome}),(0,r.jsx)(w,{children:f(e)}),(0,r.jsx)(w,{children:(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(A,{checked:e.aberto,onCheckedChange:()=>l(t)}),(0,r.jsx)("span",{children:e.aberto?"Aberto":"Fechado"}),(0,r.jsx)(c,{variant:"destructive",className:"ml-auto",onClick:()=>n(t),children:"Remover"})]})})]},t))})]}),(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(c,{onClick:()=>{let e=o.map(e=>{let t=e.aberto?f(e):u(e.dataValidade);return{Nome:e.nome,"Data de Validade":t,Aberto:e.aberto?"Sim":"N\xe3o"}}),t=S.P6.json_to_sheet(e),a=S.P6.book_new();S.P6.book_append_sheet(a,t,"Produtos"),t["!cols"]=[{wch:30},{wch:20},{wch:10}];let r=new Date;S.P6.sheet_add_aoa(t,[["Planilha gerada em: ".concat(r.toLocaleString("pt-BR"))]],{origin:-1});let s=new Blob([function(e){let t=new ArrayBuffer(e.length),a=new Uint8Array(t);for(let t=0;t<e.length;t++)a[t]=255&e.charCodeAt(t);return t}(S.cW(a,{bookType:"xlsx",type:"binary"}))],{type:"application/octet-stream"}),i=URL.createObjectURL(s),d=document.createElement("a");d.href=i,d.download="casa_estoque_".concat(r.toLocaleDateString("pt-BR"),".xlsx"),d.click(),URL.revokeObjectURL(i)},className:"bg-blue-600 hover:bg-blue-700 text-white",children:"Gerar Planilha"})})]})}let D=0,k=new Map,_=e=>{if(k.has(e))return;let t=setTimeout(()=>{k.delete(e),I({type:"REMOVE_TOAST",toastId:e})},1e6);k.set(e,t)},R=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?_(a):e.toasts.forEach(e=>{_(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},V=[],E={toasts:[]};function I(e){E=R(E,e),V.forEach(e=>{e(E)})}function O(e){let{...t}=e,a=(D=(D+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>I({type:"DISMISS_TOAST",toastId:a});return I({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||r()}}}),{id:a,dismiss:r,update:e=>I({type:"UPDATE_TOAST",toast:{...e,id:a}})}}function C(){let[e,t]=s.useState(E);return s.useEffect(()=>(V.push(t),()=>{let e=V.indexOf(t);e>-1&&V.splice(e,1)}),[e]),{...e,toast:O,dismiss:e=>I({type:"DISMISS_TOAST",toastId:e})}}var P=a(3374),q=a(1607);let U=P.zt,M=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(P.l_,{ref:t,className:l("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",a),...s})});M.displayName=P.l_.displayName;let F=(0,i.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),z=s.forwardRef((e,t)=>{let{className:a,variant:s,...o}=e;return(0,r.jsx)(P.fC,{ref:t,className:l(F({variant:s}),a),...o})});z.displayName=P.fC.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(P.aU,{ref:t,className:l("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",a),...s})}).displayName=P.aU.displayName;let B=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(P.x8,{ref:t,className:l("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",a),"toast-close":"",...s,children:(0,r.jsx)(q.Z,{className:"h-4 w-4"})})});B.displayName=P.x8.displayName;let L=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(P.Dx,{ref:t,className:l("text-sm font-semibold",a),...s})});L.displayName=P.Dx.displayName;let G=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(P.dk,{ref:t,className:l("text-sm opacity-90",a),...s})});function H(){let{toasts:e}=C();return(0,r.jsxs)(U,{children:[e.map(e=>{let{id:t,title:a,description:s,action:o,...i}=e;return(0,r.jsxs)(z,{...i,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[a&&(0,r.jsx)(L,{children:a}),s&&(0,r.jsx)(G,{children:s})]}),o,(0,r.jsx)(B,{})]},t)}),(0,r.jsx)(M,{})]})}function J(){let[e,t]=(0,s.useState)([]),[a,o]=(0,s.useState)(!1),{toast:i}=C();(0,s.useEffect)(()=>{try{let e=localStorage.getItem("produtos");if(console.log("ITEM 'produtos' no localStorage:",e),e){let a=JSON.parse(e).map(e=>({...e,dataValidade:new Date(e.dataValidade),dataAbertura:e.dataAbertura?new Date(e.dataAbertura):void 0,dataAdicao:new Date(e.dataAdicao)}));t(a)}}catch(e){console.error("Erro ao carregar localStorage:",e)}"Notification"in window&&Notification.requestPermission(),o(!0)},[]),(0,s.useEffect)(()=>{a&&(console.log("Salvando no localStorage:",e),localStorage.setItem("produtos",JSON.stringify(e)),d())},[e,a]);let d=()=>{let t=new Date;e.forEach(e=>{let a=Math.ceil(((e.aberto&&e.dataAbertura?new Date(e.dataAbertura.getTime()+864e5*e.diasValidadeAposAberto):e.dataValidade).getTime()-t.getTime())/864e5);[0,1,7].includes(a)&&n(e,a)})},n=(e,t)=>{let a="";a=0===t?"expira hoje":1===t?"ir\xe1 expirar amanh\xe3":"ir\xe1 expirar em 7 dias";let r="Aten\xe7\xe3o: ".concat(e.nome);"Notification"in window&&"granted"===Notification.permission?new Notification(r,{body:a}):i({title:r,description:a,duration:5e3})};return(0,r.jsxs)("div",{className:"container mx-auto p-4",children:[(0,r.jsx)(g,{onAdicionar:e=>{t(t=>[...t,...e])}}),(0,r.jsx)(T,{produtos:e,onUpdate:e=>{t(e)}}),(0,r.jsx)(H,{})]})}G.displayName=P.dk.displayName}},function(e){e.O(0,[425,853,971,117,744],function(){return e(e.s=4702)}),_N_E=e.O()}]);