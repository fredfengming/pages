(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[617],{9588:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/kubectl",function(){return n(805)}])},606:function(e,s,n){"use strict";n.d(s,{e:function(){return t}});let t={siteName:"Ming's Wiki"}},6036:function(e,s,n){"use strict";var t=n(5893),i=n(9008),l=n.n(i),r=n(5675),c=n.n(r),a=n(1664),d=n.n(a),x=n(606);let h=e=>{let{children:s}=e;return(0,t.jsx)("div",{className:"container mx-auto px-4",children:s})},o=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"w-full h-10 mb-5 bg-gray-900",children:(0,t.jsx)(h,{children:(0,t.jsx)("div",{className:"flex justify-between items-center h-full",children:(0,t.jsxs)("ul",{className:"flex gap-x-6 text-white",children:[(0,t.jsx)("li",{children:(0,t.jsx)(d(),{href:"/tools/docker",className:"block py-2 pr-1 md:pr-2",children:"docker"})}),(0,t.jsx)("li",{children:(0,t.jsx)(d(),{href:"/tools/kubectl",className:"block py-2 pr-1 md:pr-2",children:"kubectl"})})]})})})})}),m=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"bg-cover bg-center",style:{backgroundImage:"url('/assets/header.jpg')"},children:(0,t.jsx)(h,{children:(0,t.jsxs)("div",{className:"flex flex-nowrapflex-row-reverse",children:[(0,t.jsx)("div",{className:"flex-auto m-auto",children:(0,t.jsx)(d(),{className:"bg-black bg-opacity-50 text-2xl md:text-4xl font-bold p-1 md:p-4",href:"/",rel:"home",children:x.e.siteName})}),(0,t.jsx)("div",{className:"flex-none w-16 md:w-32",children:(0,t.jsx)(d(),{className:"bg-black align-middle bg-opacity-50 text-5xl font-bold",href:"/",rel:"home",children:(0,t.jsx)(c(),{className:"rotate-12 rounded-xl md:w-32:rounded-4xl ",width:"128",height:"128",alt:"Avatar",src:"/assets/avatar.jpg"})})})]})})}),(0,t.jsx)(o,{})]}),u=()=>(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"w-full py-5 bg-gray-900",children:(0,t.jsx)(h,{children:(0,t.jsx)("p",{className:"text-center",children:"Copyright \xa9 2024 Ming"})})})});s.Z=e=>{let{children:s}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l(),{children:[(0,t.jsx)("link",{rel:"shortcut icon",href:"/favicon.jpg",type:"image/x-icon"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.jpg",type:"image/x-icon"})]}),(0,t.jsxs)("div",{className:"min-h-screen flex flex-col h-screen justify-between",children:[(0,t.jsx)(m,{}),(0,t.jsx)("main",{className:"mb-auto",children:(0,t.jsx)(h,{children:s})}),(0,t.jsx)(u,{})]})]})}},4889:function(e,s,n){"use strict";var t=n(5893);s.Z=e=>{let{title:s,id:n}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"relative flex gap-x-3",children:[(0,t.jsx)("div",{className:"flex h-6 items-center",children:(0,t.jsx)("input",{id:n,name:n,type:"checkbox",className:"h-4 w-4 rounded focus:ring-indigo-600"})}),(0,t.jsxs)("div",{className:"text-sm leading-6",children:[(0,t.jsx)("label",{className:"font-medium",children:s}),(0,t.jsx)("p",{children:s})]})]})})}},4156:function(e,s,n){"use strict";var t=n(5893);s.Z=e=>{let{title:s,text:n,onChange:i}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"sm:col-span-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium leading-6 ",children:s}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsxs)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:[(0,t.jsx)("span",{className:"flex select-none items-center pl-3 sm:text-sm",children:s}),(0,t.jsx)("input",{type:"text",name:"{title}",id:"{id}",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 sm:text-sm sm:leading-6",placeholder:s,onChange:e=>{i&&i(e.target.value)},value:n})]})})]})})}},805:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return x}});var t=n(5893),i=n(9008),l=n.n(i),r=n(7294),c=n(6036),a=n(4889),d=n(4156);function x(){let[e,s]=(0,r.useState)(""),[n,i]=(0,r.useState)(""),[x,h]=(0,r.useState)("/bin/bash"),[o,m]=(0,r.useState)(!0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l(),{children:(0,t.jsx)("title",{children:"Kubectl"})}),(0,t.jsx)(c.Z,{children:(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"dark mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight",children:"Posts"}),(0,t.jsxs)("form",{children:[(0,t.jsx)(d.Z,{title:"pod",text:n,id:"pod",onChange:i}),(0,t.jsx)(d.Z,{title:"Command",text:x,id:"tag",onChange:h}),(0,t.jsx)(d.Z,{title:"namespace",text:e,id:"image",onChange:s}),(0,t.jsx)(a.Z,{title:"Interactive",id:"interactive"}),(0,t.jsx)("code",{children:function(){if(!n||!x)return"";let s=[];return s.push("kubectl"),e&&s.push("-n ".concat(e)),s.push("exec"),o&&s.push("-it"),s.push(n),s.push("--"),s.push(x),s.join(" ")}()})]})]})})]})}}},function(e){e.O(0,[247,774,888,179],function(){return e(e.s=9588)}),_N_E=e.O()}]);