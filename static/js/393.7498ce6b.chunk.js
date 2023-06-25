"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[393],{3393:function(e,t,a){a.r(t);var i=a(2791),n=a(1889),s=a(6377),r=a(7391),o=a(6151),d=a(8096),l=a(4925),c=a(8837),u=a(3786),h=a(890),p=a(4746),m=a(184);t.default=()=>{const[e,t]=(0,i.useState)(""),[a,v]=(0,i.useState)(""),[f,g]=(0,i.useState)(""),[x,b]=(0,i.useState)([]),[y,Z]=(0,i.useState)(""),[$,k]=(0,i.useState)(""),[I,j]=(0,i.useState)(null),[w,C]=(0,i.useState)([]),[_,S]=(0,i.useState)("");(0,i.useEffect)((()=>{document.title="LsCo Software - Channel Manager"}),[]);const O=()=>{const e=(JSON.parse(localStorage.getItem("tokens"))||[]).map((e=>{let{login:t,id:a}=e;return{value:a,label:`${t} - ID: ${a}`}}));e.length>=1?b(e):b([{value:"",label:"No Channels"}])},P=async e=>{if(""!==e.trim()){const t=await fetch(`https://api.twitch.tv/helix/search/channels?query=${e}`,{headers:{"Client-Id":"9uavest5z7knsvpbip19fxqkywxz3ec"}}),a=await t.json();t.ok?C(a.data.map((e=>`${e.display_name} - ID: ${e.id}`))):C([])}else C([])};(0,i.useEffect)((()=>{O()}),[]),(0,i.useEffect)((()=>{v(""),g("");const e=async()=>{if(!y)return v("No channel specified"),void g("");const e=JSON.parse(localStorage.getItem("tokens"))||[],t=e.findIndex((e=>e.id===y)),a=await fetch(`https://api.twitch.tv/helix/channels/vips?broadcaster_id=${e[t].id}&user_id=${_.split("- ID: ")[1]}`,{method:"DELETE",headers:{Authorization:`Bearer ${e[t].access_token}`,"Client-Id":e[t].client_id}});if(!a.ok){const e=await a.json();return v(e.message),void g("")}g(""),g(`Successfully removed ${_.split("- ID: ")[0]} as VIP in ${e[t].login}`)},t=async()=>{if(!y)return v("No channel specified"),void g("");const e=JSON.parse(localStorage.getItem("tokens"))||[],t=e.findIndex((e=>e.id===y)),a=await fetch(`https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=${e[t].id}&user_id=${_.split("- ID: ")[1]}`,{method:"DELETE",headers:{Authorization:`Bearer ${e[t].access_token}`,"Client-Id":e[t].client_id}});if(!a.ok){const e=await a.json();return v(e.message),void g("")}g(""),g(`Successfully removed ${_.split("- ID: ")[0]} as Moderator in ${e[t].login}`)},a=async()=>{if(!y)return v("No channel specified"),void g("");const e=JSON.parse(localStorage.getItem("tokens"))||[],t=e.findIndex((e=>e.id===y)),a=await fetch(`https://api.twitch.tv/helix/channels/vips?broadcaster_id=${e[t].id}&user_id=${_.split("- ID: ")[1]}`,{method:"POST",headers:{Authorization:`Bearer ${e[t].access_token}`,"Client-Id":e[t].client_id}});if(!a.ok){const e=await a.json();return v(e.message),void g("")}g(""),g(`Successfully added ${_.split("- ID: ")[0]} as VIP in ${e[t].login}`)},d=async()=>{if(!y)return v("No channel specified"),void g("");const e=JSON.parse(localStorage.getItem("tokens"))||[],t=e.findIndex((e=>e.id===y)),a=await fetch(`https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=${e[t].id}&user_id=${_.split("- ID: ")[1]}`,{method:"POST",headers:{Authorization:`Bearer ${e[t].access_token}`,"Client-Id":e[t].client_id}});if(!a.ok){const e=await a.json();return v(e.message),void g("")}g(""),g(`Successfully added ${_.split("- ID: ")[0]} as Moderator in ${e[t].login}`)};(async()=>{if("add-moderator"===$)j((0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(n.ZP,{item:!0,xs:12,children:(0,m.jsx)(s.Z,{options:w,onChange:(e,t)=>{S(t)},renderInput:e=>(0,m.jsx)(r.Z,{...e,fullWidth:!0,id:"standard-basic",label:"User",variant:"filled",onChange:e=>{P(e.target.value)}})})}),(0,m.jsx)(n.ZP,{item:!0,xs:12,children:(0,m.jsx)(o.Z,{variant:"contained",fullWidth:!0,onClick:d,children:"Add"})})]}));else if("add-vip"===$)j((0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(n.ZP,{item:!0,xs:12,children:(0,m.jsx)(s.Z,{options:w,onChange:(e,t)=>{S(t)},renderInput:e=>(0,m.jsx)(r.Z,{...e,fullWidth:!0,id:"standard-basic",label:"User",variant:"filled",onChange:e=>{P(e.target.value)}})})}),(0,m.jsx)(n.ZP,{item:!0,xs:12,children:(0,m.jsx)(o.Z,{variant:"contained",fullWidth:!0,onClick:a,children:"Add"})})]}));else if("remove-moderator"===$){const e={options:await(async()=>{if(!y)return v("No channel specified"),g(""),[];const e=JSON.parse(localStorage.getItem("tokens"))||[],t=e.findIndex((e=>e.id===y));let a=`https://api.twitch.tv/helix/moderation/moderators?first=100&broadcaster_id=${e[t].id}`,i=null,n=[];for(;;){i&&(a=`https://api.twitch.tv/helix/moderation/moderators?first=100&broadcaster_id=${e[t].id}&after=${i}`);const s=await fetch(a,{headers:{Authorization:`Bearer ${e[t].access_token}`,"Client-Id":e[t].client_id}}),r=await s.json();if(!s.ok)return[];if(n.push(...r.data.map((e=>`${e.user_name} - ID: ${e.user_id}`))),!r.pagination||!r.pagination.cursor)break;i=r.pagination.cursor}return n})()};j((0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(n.ZP,{item:!0,xs:12,children:(0,m.jsx)(s.Z,{...e,id:"disable-close-on-select",onChange:(e,t)=>{S(t)},renderInput:e=>(0,m.jsx)(r.Z,{...e,label:"Moderator",variant:"filled"})})}),(0,m.jsx)(n.ZP,{item:!0,xs:12,children:(0,m.jsx)(o.Z,{variant:"contained",fullWidth:!0,onClick:t,children:"Remove"})})]}))}else if("remove-vip"===$){const t={options:await(async()=>{if(!y)return v("No channel specified"),g(""),[];const e=JSON.parse(localStorage.getItem("tokens"))||[],t=e.findIndex((e=>e.id===y));let a=`https://api.twitch.tv/helix/channels/vips?first=100&broadcaster_id=${e[t].id}`,i=null,n=[];for(;;){i&&(a=`https://api.twitch.tv/helix/channels/vips?first=100&broadcaster_id=${e[t].id}&after=${i}`);const s=await fetch(a,{headers:{Authorization:`Bearer ${e[t].access_token}`,"Client-Id":e[t].client_id}}),r=await s.json();if(!s.ok)return[];if(n.push(...r.data.map((e=>`${e.user_name} - ID: ${e.user_id}`))),!r.pagination||!r.pagination.cursor)break;i=r.pagination.cursor}return n})()};j((0,m.jsxs)(i.Fragment,{children:[(0,m.jsxs)(n.ZP,{item:!0,xs:12,children:[(0,m.jsx)(s.Z,{...t,id:"disable-close-on-select",onChange:(e,t)=>{S(t)},renderInput:e=>(0,m.jsx)(r.Z,{...e,label:"VIP",variant:"filled"})})," "]}),(0,m.jsx)(n.ZP,{item:!0,xs:12,children:(0,m.jsx)(o.Z,{variant:"contained",fullWidth:!0,onClick:e,children:"Remove"})})]}))}})()}),[$,w,y,_]);const N=async e=>{const t=await fetch("https://id.twitch.tv/oauth2/validate",{headers:{Authorization:`OAuth ${e}`}}),a=await t.json();if(!t.ok){if("invalid access token"===a.message)throw new Error("Invalid access token");throw new Error(a.message||"Validate token failed")}return a};return(0,m.jsx)(p.Z,{title:"Channel Manager",description:"Add or remove moderators/VIPs from a specific channel.",children:(0,m.jsxs)(n.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,m.jsx)(n.ZP,{item:!0,xs:12,children:(0,m.jsx)(r.Z,{fullWidth:!0,id:"standard-basic",label:"OAuth Token",type:"password",value:e,variant:"filled",onChange:e=>t(e.target.value)})}),(0,m.jsx)(n.ZP,{item:!0,xs:6,children:(0,m.jsx)(o.Z,{variant:"contained",style:{background:"#2196f3"},fullWidth:!0,onClick:async()=>{if(""===e.trim())return v("You must specify an OAuth Token"),void g("");try{const t=JSON.parse(localStorage.getItem("tokens"))||[],a=await N(e.replace(/^oauth[:]*/i,""));return t.find((e=>e.id===a.user_id.toLowerCase()))?(v("The channel already exists"),void g("")):(t.push({id:a.user_id,login:a.login,access_token:e.replace(/^oauth[:]*/i,""),client_id:a.client_id}),localStorage.setItem("tokens",JSON.stringify(t)),O(),g(""),void g(`Successfully added login: ${a.login} - ID: ${a.user_id}`))}catch(t){return v(t.message),void g("")}},children:"Add"})}),(0,m.jsx)(n.ZP,{item:!0,xs:6,children:(0,m.jsx)(o.Z,{variant:"contained",style:{background:"#ff0000"},fullWidth:!0,onClick:async()=>{if(!y)return v("No channel specified"),void g("");try{const e=localStorage.getItem("tokens")?JSON.parse(localStorage.getItem("tokens")):[],t=e.findIndex((e=>e.id===y));if(-1===t)return v("There are no channels"),void g("");const a=e[t];return e.splice(t,1),localStorage.setItem("tokens",JSON.stringify(e)),O(),g(""),void g(`Successfully removed login: ${a.login} - ID: ${a.id}`)}catch(e){return v(e.message),void g("")}},children:"Remove"})}),(0,m.jsx)(n.ZP,{item:!0,xs:12,children:(0,m.jsx)(o.Z,{variant:"contained",style:{background:"hsla(0, 0%, 40%, .3)",border:"1px solid #2196f3"},fullWidth:!0,onClick:async()=>{var e;const t=null!==(e=window.location.origin)&&void 0!==e?e:"https://devlsco.github.io/";window.open(`https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=87q7zikx7uny69x0wkxtf8bm4kd5m2&redirect_uri=${t}&scope=channel:manage:vips+channel:manage:moderators&force_verify=true`,"_self")},children:"Generate OAuth Token"})}),(0,m.jsx)(n.ZP,{item:!0,xs:6,children:(0,m.jsxs)(d.Z,{fullWidth:!0,variant:"filled",children:[(0,m.jsx)(l.Z,{id:"channel-label",children:"Channel"}),(0,m.jsx)(c.Z,{value:y,onChange:e=>Z(e.target.value),labelId:"channel-label",id:"channel-select",children:x.map(((e,t)=>(0,m.jsx)(u.Z,{value:e.value,selected:1===t,children:e.label},e.value)))})]})}),(0,m.jsx)(n.ZP,{item:!0,xs:6,children:(0,m.jsxs)(d.Z,{fullWidth:!0,variant:"filled",children:[(0,m.jsx)(l.Z,{id:"type-label",children:"Type"}),(0,m.jsxs)(c.Z,{value:$,onChange:e=>k(e.target.value),labelId:"type-label",id:"type-select",children:[(0,m.jsx)(u.Z,{value:"add-moderator",children:"Add Moderator"}),(0,m.jsx)(u.Z,{value:"add-vip",children:"Add VIP"}),(0,m.jsx)(u.Z,{value:"remove-moderator",children:"Remove Moderator"}),(0,m.jsx)(u.Z,{value:"remove-vip",children:"Remove VIP"})]})]})}),I,(0,m.jsxs)(n.ZP,{item:!0,xs:12,children:[a&&(0,m.jsx)(h.Z,{variant:"body2",style:{color:"red",marginTop:"10px",textAlign:"center"},children:a}),f&&(0,m.jsx)(h.Z,{variant:"body2",style:{marginTop:"10px",textAlign:"center"},children:f})]})]})})}},3786:function(e,t,a){a.d(t,{Z:function(){return j}});var i=a(3366),n=a(7462),s=a(2791),r=a(8182),o=a(4419),d=a(2065),l=a(7630),c=a(3736),u=a(6199),h=a(533),p=a(162),m=a(2071),v=a(133),f=a(6014),g=a(9849),x=a(5878),b=a(1217);function y(e){return(0,b.Z)("MuiMenuItem",e)}var Z=(0,x.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),$=a(184);const k=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],I=(0,l.ZP)(h.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:a}=e;return(0,n.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Z.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${Z.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${Z.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,d.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${Z.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${Z.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${v.Z.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${v.Z.inset}`]:{marginLeft:52},[`& .${g.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${g.Z.inset}`]:{paddingLeft:36},[`& .${f.Z.root}`]:{minWidth:36}},!a.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&(0,n.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${f.Z.root} svg`]:{fontSize:"1.25rem"}}))}));var j=s.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:d=!1,component:l="li",dense:h=!1,divider:v=!1,disableGutters:f=!1,focusVisibleClassName:g,role:x="menuitem",tabIndex:b,className:Z}=a,j=(0,i.Z)(a,k),w=s.useContext(u.Z),C=s.useMemo((()=>({dense:h||w.dense||!1,disableGutters:f})),[w.dense,h,f]),_=s.useRef(null);(0,p.Z)((()=>{d&&_.current&&_.current.focus()}),[d]);const S=(0,n.Z)({},a,{dense:C.dense,divider:v,disableGutters:f}),O=(e=>{const{disabled:t,dense:a,divider:i,disableGutters:s,selected:r,classes:d}=e,l={root:["root",a&&"dense",t&&"disabled",!s&&"gutters",i&&"divider",r&&"selected"]},c=(0,o.Z)(l,y,d);return(0,n.Z)({},d,c)})(a),P=(0,m.Z)(_,t);let N;return a.disabled||(N=void 0!==b?b:-1),(0,$.jsx)(u.Z.Provider,{value:C,children:(0,$.jsx)(I,(0,n.Z)({ref:P,role:x,tabIndex:N,component:l,focusVisibleClassName:(0,r.Z)(O.focusVisible,g),className:(0,r.Z)(O.root,Z)},j,{ownerState:S,classes:O}))})}))}}]);
//# sourceMappingURL=393.7498ce6b.chunk.js.map