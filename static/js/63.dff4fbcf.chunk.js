"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[63],{3735:function(e,r,t){var s=t(2791),n=t(3967),a=t(7621),o=t(9585),i=t(890),l=t(4721),c=t(9504),d=t(184);const h={"& .MuiCardHeader-action":{mr:0}},x=(0,s.forwardRef)(((e,r)=>{let{border:t=!0,boxShadow:s,children:x,content:u=!0,contentClass:p="",contentSX:j={},darkTitle:f,secondary:k,shadow:v,sx:w={},title:y,...b}=e;const m=(0,n.Z)();return(0,d.jsxs)(a.Z,{ref:r,...b,sx:{border:t?"1px solid":"none",borderColor:m.palette.primary[200]+25,":hover":{boxShadow:s?v||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"},...w},children:[y&&(0,d.jsx)(o.Z,{sx:h,title:f?(0,d.jsx)(i.Z,{variant:"h3",children:y}):y,action:k}),y&&(0,d.jsx)(l.Z,{}),u&&(0,d.jsx)(c.Z,{sx:j,className:p,children:x}),!u&&x]})}));r.Z=x},4063:function(e,r,t){t.r(r);var s=t(1889),n=t(7391),a=t(6151),o=t(890),i=t(3735),l=t(2791),c=t(184);r.default=()=>{const[e,r]=(0,l.useState)(""),[t,d]=(0,l.useState)(!1),[h,x]=(0,l.useState)(null),[u,p]=(0,l.useState)(null),[j,f]=(0,l.useState)(!1),k=async()=>{if(""===e.trim())d(!0);else{d(!1);try{const r=await v(e);x(r),p(null)}catch(r){x(null),p(r.message)}}},v=async e=>{const r=await fetch("https://id.twitch.tv/oauth2/validate",{headers:{Authorization:`OAuth ${e}`}}),t=await r.json();if(!r.ok){if("invalid access token"===t.message)throw new Error("Invalid access token");throw new Error(t.message||"Validate token failed")}if(!(await fetch("https://id.twitch.tv/oauth2/revoke",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`client_id=${t.client_id}&token=${e}`})).ok)throw new Error("Revoke Token failed");return t};return(0,c.jsx)(i.Z,{title:"Revoking Tokens",children:(0,c.jsxs)(s.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,c.jsx)(s.ZP,{item:!0,xs:9,children:(0,c.jsx)(n.Z,{fullWidth:!0,id:"standard-basic",label:"OAuth Token",type:"password",variant:"standard",value:e,onChange:e=>r(e.target.value),error:t,helperText:t?"This field is required":"",onKeyPress:e=>{"Enter"===e.key&&k()}})}),(0,c.jsx)(s.ZP,{item:!0,xs:3,children:(0,c.jsx)(a.Z,{variant:"contained",fullWidth:!0,onClick:k,children:"Revoke"})}),(0,c.jsxs)(s.ZP,{item:!0,xs:12,children:[h&&(0,c.jsx)("div",{style:{padding:"5px",marginTop:"10px"},children:(0,c.jsx)(o.Z,{variant:"body2",component:"pre",children:(0,c.jsxs)("code",{children:["The token was successfully revoked.",(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),"Login: ",(0,c.jsx)("span",{style:{color:"#00B8D9"},children:h.login})," - (ID:"," ",(0,c.jsx)("span",{style:{color:"#00B8D9"},children:h.user_id}),")",(0,c.jsx)("br",{}),"Token:"," ",(0,c.jsx)("span",{className:j?"":"blur-on-hover",style:{color:"#00B8D9"},onMouseEnter:()=>{f(!0)},onMouseLeave:()=>{f(!1)},children:e}),(0,c.jsx)("br",{}),"ClientID: ",(0,c.jsx)("span",{style:{color:"#00B8D9"},children:h.client_id}),(0,c.jsx)("br",{}),"Scopes: ",(0,c.jsx)("span",{style:{color:"#00B8D9"},children:h.scopes.join(", ")})]})})}),u&&(0,c.jsx)(o.Z,{variant:"body2",style:{color:"red",marginTop:"10px"},children:u})]})]})})}}}]);
//# sourceMappingURL=63.dff4fbcf.chunk.js.map