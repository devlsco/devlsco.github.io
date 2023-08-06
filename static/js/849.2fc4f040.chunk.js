"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[849],{5849:function(e,n,t){t.r(n);var i=t(1979),a=t(4507),r=t(4746),l=t(2791),o=t(4830),s=t(9529),d=t(8870),c=t(4708),h=t(493),u=t(5021),x=t(7247),g=t(653),m=t(9900),j=t(3044),p=t(1889),Z=t(890),f=t(5228),w=t(3896),v=t(6377),S=t(7391),b=t(6151),P=t(7047),y=t(3400),C=t(625),k=t(9593),A=t(184);o.Z.addLocale(k.Z);const I=(0,i.Z)({palette:{mode:"dark"}}),_=(e,n)=>/^\w{1,25}$/.test(n)?n:e;function D(e){const{children:n,value:t,index:i,...a}=e;return(0,A.jsx)("div",{role:"tabpanel",hidden:t!==i,id:`simple-tabpanel-${i}`,"aria-labelledby":`simple-tab-${i}`,...a,children:t===i&&(0,A.jsx)(d.Z,{sx:{p:3},children:(0,A.jsx)(Z.Z,{children:n})})})}function N(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}n.default=()=>{const e=(0,l.useRef)(null),[n,t]=(0,l.useState)([]),[i,o]=(0,l.useState)([]),[k,L]=(0,l.useState)([]),[O,J]=(0,l.useState)(null),[U,$]=(0,l.useState)(null),[E,T]=(0,l.useState)(null),[z,R]=(0,l.useState)(null),[F,H]=(0,l.useState)(null),[W,Y]=(0,l.useState)(null),[q,B]=(0,l.useState)(null),[G,K]=(0,l.useState)(null),[M,Q]=l.useState(0);(0,l.useEffect)((()=>{document.title="LsCo Software - Admin Software"}),[]),(0,l.useEffect)((()=>{!async function(){const e=JSON.parse(localStorage.getItem("login"));if(null===localStorage.getItem("login"))return window.open(window.location.origin,"_self");const n=await fetch("https://api.devlsco.de/channels",{headers:{Authorization:e.access_token}}),t=await(null===n||void 0===n?void 0:n.json());if(!n.ok)return void window.open(window.location.origin,"_self");J(t.sort(((e,n)=>new Date(n.joinedAt)-new Date(e.joinedAt))))}(),async function(){const e=JSON.parse(localStorage.getItem("login"));if(null===localStorage.getItem("login"))return window.open(window.location.origin,"_self");const n=await fetch("https://api.devlsco.de/admins",{headers:{Authorization:e.access_token}}),t=await(null===n||void 0===n?void 0:n.json());if(!n.ok)return void window.open(window.location.origin,"_self");$(t.sort(((e,n)=>new Date(n.grantedAt)-new Date(e.grantedAt))))}()}),[]);const V=async e=>{var n;const t=JSON.parse(localStorage.getItem("login"));if(!(null!==localStorage.getItem("login")))return window.open(window.location.origin,"_self");if(!e)return B("You have not specified an channel.");const i=await fetch(`https://api.devlsco.de/channels?id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{Authorization:t.access_token}});if(!i.ok)return B(null!==(n=a.message)&&void 0!==n?n:"An error has occurred. Try again later");const a=await i.json();return J(O.filter((n=>n.id!==e))),K(a.message)},X=async e=>{var n;const t=JSON.parse(localStorage.getItem("login"));if(!(null!==localStorage.getItem("login")))return window.open(window.location.origin,"_self");if(!e)return B("You have not specified an admin.");const i=await fetch(`https://api.devlsco.de/admins?id=${encodeURIComponent(e)}`,{method:"DELETE",headers:{Authorization:t.access_token}});if(!i.ok)return B(null!==(n=a.message)&&void 0!==n?n:"An error has occurred. Try again later");const a=await i.json();return $(U.filter((n=>n.id!==e))),K(a.message)},ee=async e=>{if(!localStorage.getItem("login"))return t([]);if(e.trim()){const n=await fetch(`https://api.twitch.tv/helix/search/channels?query=${e}&first=25`,{headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("login")).access_token,"Client-ID":JSON.parse(localStorage.getItem("login")).client_id}}),i=await n.json();n.ok?t(i.data.map((e=>({name:e.display_name,id:e.id,avatarUrl:e.thumbnail_url.replace("300x300","50x50")})))):t([])}else t([])};return(0,A.jsxs)(r.Z,{title:"Admin Software",description:"Bot management tools.",style:{margin:10},children:[(0,A.jsxs)(d.Z,{sx:{width:"100%"},children:[(0,A.jsx)(d.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,A.jsxs)(f.Z,{value:M,onChange:(e,n)=>{Q(n)},"aria-label":"basic tabs example",children:[(0,A.jsx)(w.Z,{label:"Channels",...N(0)}),(0,A.jsx)(w.Z,{label:"Admins",...N(1)})]})}),(0,A.jsx)(D,{value:M,index:0,children:(0,A.jsxs)(p.ZP,{container:!0,spacing:2,children:[(0,A.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsxs)(p.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,A.jsx)(p.ZP,{item:!0,xs:12,children:(0,A.jsx)(a.Z,{theme:I,children:(0,A.jsx)(v.Z,{options:n,getOptionLabel:e=>e.name,onChange:(e,n)=>{T(null===n||void 0===n?void 0:n.id)},renderInput:e=>(0,A.jsx)(S.Z,{...e,fullWidth:!0,id:"outlined-basic",label:"Join Channel",variant:"outlined",onChange:e=>{ee(e.target.value)}}),renderOption:(e,n)=>(0,A.jsx)("li",{...e,children:(0,A.jsxs)(d.Z,{display:"flex",alignItems:"center",children:[(0,A.jsx)(j.Z,{src:n.avatarUrl,alt:n.name,sx:{width:25,height:25,marginRight:1}}),n.name]})})})})}),(0,A.jsx)(p.ZP,{item:!0,xs:12,children:(0,A.jsx)(a.Z,{theme:I,children:(0,A.jsx)(b.Z,{variant:"contained",color:"info",fullWidth:!0,onClick:async()=>{var e;const n=JSON.parse(localStorage.getItem("login"));if(!(null!==localStorage.getItem("login")))return window.open(window.location.origin,"_self");if(!E)return B("You have not specified an channel.");const t=await fetch(`https://api.devlsco.de/channels?id=${encodeURIComponent(E)}`,{method:"POST",headers:{Authorization:n.access_token}});if(!t.ok)return B(null!==(e=i.message)&&void 0!==e?e:"An error has occurred. Try again later");const i=await t.json();return J([i.data,...O]),K(i.message)},children:"Join"})})})]})}),(0,A.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsxs)(p.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,A.jsx)(p.ZP,{item:!0,xs:12,children:(0,A.jsx)(a.Z,{theme:I,children:(0,A.jsx)(S.Z,{fullWidth:!0,id:"outlined-basic",label:"Search Channels",variant:"outlined",type:"search",value:F,onChange:e=>{var n;const t=O.filter((n=>{var t,i;const a=n.login.toLowerCase(),r=null!==(t=null===(i=e.target.value.trim())||void 0===i?void 0:i.toLowerCase())&&void 0!==t?t:null;return a.includes(r)}));H(null!==(n=e.target.value.trim())&&void 0!==n?n:null),o(t)}})})}),(0,A.jsx)(p.ZP,{item:!0,xs:12,children:O?(0,A.jsxs)(A.Fragment,{children:["Channels: ",O.length]}):(0,A.jsx)(P.Z,{variant:"rounded",width:"100%"})}),(0,A.jsx)(p.ZP,{item:!0,xs:12,children:O?F?(0,A.jsxs)(d.Z,{ref:e,children:[(0,A.jsx)(c.ZP,{}),(0,A.jsx)(h.Z,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:400},subheader:(0,A.jsx)("li",{}),children:i.length?i.map(((e,n)=>{let{id:t,login:i,displayName:a,pfp:r,prefix:l,joinedAt:o}=e;return(0,A.jsxs)(u.ZP,{button:!0,children:[(0,A.jsx)(g.Z,{children:(0,A.jsx)(j.Z,{alt:"Profile Picture",src:r})}),(0,A.jsx)(m.Z,{primary:_(i,a),secondary:(0,A.jsxs)(A.Fragment,{children:["Joined ",(0,A.jsx)(s.Z,{date:new Date(o),locale:"en-US"})," -"," ",new Date(o).toLocaleString("en"),(0,A.jsx)("br",{}),"Prefix: ",l]})}),(0,A.jsx)(y.Z,{color:"error",onClick:()=>V(t),children:(0,A.jsx)(x.Z,{})})]},n+t)})):(0,A.jsx)(Z.Z,{children:"No channel match that query."})})]}):(0,A.jsxs)(d.Z,{ref:e,children:[(0,A.jsx)(c.ZP,{}),(0,A.jsx)(h.Z,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:400},subheader:(0,A.jsx)("li",{}),children:O.length?O.map(((e,n)=>{let{id:t,login:i,displayName:a,pfp:r,prefix:l,joinedAt:o}=e;return(0,A.jsxs)(u.ZP,{button:!0,children:[(0,A.jsx)(g.Z,{children:(0,A.jsx)(j.Z,{alt:"Profile Picture",src:r})}),(0,A.jsx)(m.Z,{primary:_(i,a),secondary:(0,A.jsxs)(A.Fragment,{children:["Joined ",(0,A.jsx)(s.Z,{date:new Date(o),locale:"en-US"})," -"," ",new Date(o).toLocaleString("en"),(0,A.jsx)("br",{}),"Prefix: ",l]})}),(0,A.jsx)(y.Z,{color:"error",onClick:()=>V(t),children:(0,A.jsx)(x.Z,{})})]},n+t)})):(0,A.jsx)(Z.Z,{children:"No channels"})})]}):(0,A.jsx)(P.Z,{variant:"rounded",width:"100%",height:400})})]})})]})}),(0,A.jsx)(D,{value:M,index:1,children:(0,A.jsxs)(p.ZP,{container:!0,spacing:2,children:[(0,A.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsxs)(p.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,A.jsx)(p.ZP,{item:!0,xs:12,children:(0,A.jsx)(a.Z,{theme:I,children:(0,A.jsx)(v.Z,{options:n,getOptionLabel:e=>e.name,onChange:(e,n)=>{R(null===n||void 0===n?void 0:n.id)},renderInput:e=>(0,A.jsx)(S.Z,{...e,fullWidth:!0,id:"outlined-basic",label:"Add Admin",variant:"outlined",onChange:e=>{ee(e.target.value)}}),renderOption:(e,n)=>(0,A.jsx)("li",{...e,children:(0,A.jsxs)(d.Z,{display:"flex",alignItems:"center",children:[(0,A.jsx)(j.Z,{src:n.avatarUrl,alt:n.name,sx:{width:25,height:25,marginRight:1}}),n.name]})})})})}),(0,A.jsx)(p.ZP,{item:!0,xs:12,children:(0,A.jsx)(a.Z,{theme:I,children:(0,A.jsx)(b.Z,{variant:"contained",color:"info",fullWidth:!0,onClick:async()=>{var e;const n=JSON.parse(localStorage.getItem("login"));if(!(null!==localStorage.getItem("login")))return window.open(window.location.origin,"_self");if(!z)return B("You have not specified an admin.");const t=await fetch(`https://api.devlsco.de/admins?id=${encodeURIComponent(z)}`,{method:"POST",headers:{Authorization:n.access_token}});if(!t.ok)return B(null!==(e=i.message)&&void 0!==e?e:"An error has occurred. Try again later");const i=await t.json();return $([i.data,...U]),K(i.message)},children:"Add"})})})]})}),(0,A.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,A.jsxs)(p.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,A.jsx)(p.ZP,{item:!0,xs:12,children:(0,A.jsx)(a.Z,{theme:I,children:(0,A.jsx)(S.Z,{fullWidth:!0,id:"outlined-basic",label:"Search Admins",variant:"outlined",type:"search",value:W,onChange:e=>{var n;const t=U.filter((n=>{var t,i;const a=n.login.toLowerCase(),r=null!==(t=null===(i=e.target.value.trim())||void 0===i?void 0:i.toLowerCase())&&void 0!==t?t:null;return a.includes(r)}));Y(null!==(n=e.target.value.trim())&&void 0!==n?n:null),L(t)}})})}),(0,A.jsx)(p.ZP,{item:!0,xs:12,children:U?(0,A.jsxs)(A.Fragment,{children:["Admins: ",U.length]}):(0,A.jsx)(P.Z,{variant:"rounded",width:"100%"})}),(0,A.jsx)(p.ZP,{item:!0,xs:12,children:U?W?(0,A.jsxs)(d.Z,{ref:e,children:[(0,A.jsx)(c.ZP,{}),(0,A.jsx)(h.Z,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:400},subheader:(0,A.jsx)("li",{}),children:k.length?k.map(((e,n)=>{let{id:t,login:i,displayName:a,pfp:r,grantedAt:l}=e;return(0,A.jsxs)(u.ZP,{button:!0,children:[(0,A.jsx)(g.Z,{children:(0,A.jsx)(j.Z,{alt:"Profile Picture",src:r})}),(0,A.jsx)(m.Z,{primary:_(i,a),secondary:(0,A.jsxs)(A.Fragment,{children:["Granted ",(0,A.jsx)(s.Z,{date:new Date(l),locale:"en-US"})," -"," ",new Date(l).toLocaleString("en")]})}),(0,A.jsx)(y.Z,{color:"error",onClick:()=>X(t),children:(0,A.jsx)(x.Z,{})})]},n+t)})):(0,A.jsx)(Z.Z,{children:"No Admins match that query."})})]}):(0,A.jsxs)(d.Z,{ref:e,children:[(0,A.jsx)(c.ZP,{}),(0,A.jsx)(h.Z,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:400},subheader:(0,A.jsx)("li",{}),children:U.length?U.map(((e,n)=>{let{id:t,login:i,displayName:a,pfp:r,grantedAt:l}=e;return(0,A.jsxs)(u.ZP,{button:!0,children:[(0,A.jsx)(g.Z,{children:(0,A.jsx)(j.Z,{alt:"Profile Picture",src:r})}),(0,A.jsx)(m.Z,{primary:_(i,a),secondary:(0,A.jsxs)(A.Fragment,{children:["Granted ",(0,A.jsx)(s.Z,{date:new Date(l),locale:"en-US"})," -"," ",new Date(l).toLocaleString("en")]})}),(0,A.jsx)(y.Z,{color:"error",onClick:()=>X(t),children:(0,A.jsx)(x.Z,{})})]},n+t)})):(0,A.jsx)(Z.Z,{children:"No Admins"})})]}):(0,A.jsx)(P.Z,{variant:"rounded",width:"100%",height:400})})]})})]})})]}),(0,A.jsx)(C.Z,{open:q,autoHideDuration:5e3,color:"error",onClose:()=>{B(null)},message:q}),(0,A.jsx)(C.Z,{open:G,autoHideDuration:5e3,color:"error",onClose:()=>{K(null)},message:G})]})}}}]);
//# sourceMappingURL=849.2fc4f040.chunk.js.map