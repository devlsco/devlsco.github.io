"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[706],{1706:function(e,t,r){r.r(t);var a=r(2791);t.default=()=>{(0,a.useEffect)((()=>{(async()=>{try{const r=new URLSearchParams(window.location.hash.substring(1)).get("access_token");if(r){const a=await e(r),i=await t(a.user_id),o={access_token:r,client_id:a.client_id,id:i.id,login:i.login,description:i.description,profile_image_url:i.profile_image_url};localStorage.setItem("login",JSON.stringify(o)),window.open(`${window.location.origin}/dashboard`,"_self")}else window.open(`${window.location.origin}/dashboard`,"_self")}catch(r){console.error(r)}})()}),[]);const e=async e=>{try{const t=await fetch("https://id.twitch.tv/oauth2/validate",{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw new Error("Invalid access token");return await t.json()}catch(t){console.error(t)}},t=async e=>{try{const t=await fetch(`https://api.twitch.tv/helix/users?id=${e}`,{headers:{"Client-ID":"9uavest5z7knsvpbip19fxqkywxz3ec"}});if(!t.ok)throw new Error("Error getting user");return(await t.json()).data[0]}catch(t){console.error(t)}};return null}}}]);
//# sourceMappingURL=706.05837431.chunk.js.map