"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[169],{2169:function(e,t,a){a.r(t);var n=a(1979),o=a(4507),i=a(1889),s=a(6377),r=a(7391),l=a(8096),c=a(4925),d=a(8837),h=a(3786),g=a(890),u=a(3469),m=a(6151),p=a(4746),w=a(2791),f=a(184);const y=(0,n.Z)({palette:{mode:"dark"}}),b=[{value:100,label:"100ms"},{value:200,label:"200ms"},{value:500,label:"500ms"},{value:1e3,label:"1s"}];function S(e){return`${e}ms`}function x(e,t){let a=[];for(let n=0;n<e.length;n+=t){let o=e.slice(n,n+t);a.push(o)}return a}t.default=()=>{const[e,t]=(0,w.useState)(""),[a,n]=(0,w.useState)(null),[I,v]=(0,w.useState)(null),[j,$]=(0,w.useState)(""),[k,C]=(0,w.useState)(""),[E,T]=(0,w.useState)(100),[N,O]=(0,w.useState)([]);async function P(e,t){try{await Promise.all(x(t,100).map((async e=>{const a=await fetch(`https://api.twitch.tv/helix/users?login=${e.map((e=>e.login)).join("&login=")}`,{headers:{"Client-ID":"9uavest5z7knsvpbip19fxqkywxz3ec"}}),n=await a.json();if(!a.ok)throw new Error(`API Error -> Status: ${n.error}, ${n.status} - ${n.message}`);return n.data.forEach((e=>{const a=t.find((t=>t.login===e.login));a&&(a.id=e.id)})),n.data.map((e=>e.id))})));for(let a=0;a<t.length;a++){const n=t[a];fetch(`https://api.twitch.tv/helix/moderation/bans?broadcaster_id=${e}&moderator_id=${JSON.parse(localStorage.getItem("login")).userId}`,{method:"POST",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("login")).token,"Client-ID":JSON.parse(localStorage.getItem("login")).clientID,"Content-Type":"application/json"},body:JSON.stringify({data:{user_id:n.id,reason:n.reason}})}).then((async e=>{if("0"==e.headers.get("ratelimit-remaining"))throw new Error("Too many requests")})).catch((e=>{console.log(e)})),await new Promise((e=>setTimeout(e,E)))}}catch(a){throw console.log(a),new Error(`Error: ${a.message}`)}}async function _(e,t){try{await Promise.all(x(t,100).map((async e=>{const a=await fetch(`https://api.twitch.tv/helix/users?login=${e.map((e=>e.login)).join("&login=")}`,{headers:{"Client-ID":"9uavest5z7knsvpbip19fxqkywxz3ec"}}),n=await a.json();if(!a.ok)throw new Error(`API Error -> Status: ${n.error}, ${n.status} - ${n.message}`);return n.data.forEach((e=>{const a=t.find((t=>t.login===e.login));a&&(a.id=e.id)})),n.data.map((e=>e.id))})));for(let a=0;a<t.length;a++){const n=t[a];fetch(`https://api.twitch.tv/helix/moderation/bans?broadcaster_id=${e}&moderator_id=${JSON.parse(localStorage.getItem("login")).userId}`,{method:"POST",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("login")).token,"Client-ID":JSON.parse(localStorage.getItem("login")).clientID,"Content-Type":"application/json"},body:JSON.stringify({data:{user_id:n.id,duration:Number(n.duration),reason:n.reason}})}).then((async e=>{if("0"==e.headers.get("ratelimit-remaining"))throw new Error("Too many requests")})).catch((e=>{console.log(e)})),await new Promise((e=>setTimeout(e,E)))}}catch(a){throw console.log(a),new Error(`Error: ${a.message}`)}}async function Z(e,t){try{for(let a=0;a<t.length;a++){const n=t[a];fetch(`https://api.twitch.tv/helix/moderation/bans?broadcaster_id=${e}&moderator_id=${JSON.parse(localStorage.getItem("login")).userId}`,{method:"POST",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("login")).token,"Client-ID":JSON.parse(localStorage.getItem("login")).clientID,"Content-Type":"application/json"},body:JSON.stringify({data:{user_id:n.id,reason:n.reason}})}).then((async e=>{if("0"==e.headers.get("ratelimit-remaining"))throw new Error("Too many requests")})).catch((e=>{console.log(e)})),await new Promise((e=>setTimeout(e,E)))}}catch(a){throw console.log(a),new Error(`Error: ${a.message}`)}}async function D(e,t){try{for(let a=0;a<t.length;a++){const n=t[a];fetch(`https://api.twitch.tv/helix/moderation/bans?broadcaster_id=${e}&moderator_id=${JSON.parse(localStorage.getItem("login")).userId}`,{method:"POST",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("login")).token,"Client-ID":JSON.parse(localStorage.getItem("login")).clientID,"Content-Type":"application/json"},body:JSON.stringify({data:{user_id:n.id,duration:Number(n.duration),reason:n.reason}})}).then((async e=>{if("0"==e.headers.get("ratelimit-remaining"))throw new Error("Too many requests")})).catch((e=>{console.log(e)})),await new Promise((e=>setTimeout(e,E)))}}catch(a){throw console.log(a),new Error(`Error: ${a.message}`)}}async function J(e,t){try{await Promise.all(x(t,100).map((async e=>{const a=await fetch(`https://api.twitch.tv/helix/users?login=${e.map((e=>e.login)).join("&login=")}`,{headers:{"Client-ID":"9uavest5z7knsvpbip19fxqkywxz3ec"}}),n=await a.json();if(!a.ok)throw new Error(`API Error -> Status: ${n.error}, ${n.status} - ${n.message}`);return n.data.forEach((e=>{const a=t.find((t=>t.login===e.login));a&&(a.id=e.id)})),n.data.map((e=>e.id))})));for(let a=0;a<t.length;a++){const n=t[a];fetch(`https://api.twitch.tv/helix/moderation/bans?broadcaster_id=${e}&moderator_id=${JSON.parse(localStorage.getItem("login")).userId}&user_id=${n.id}`,{method:"DELETE",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("login")).token,"Client-ID":JSON.parse(localStorage.getItem("login")).clientID,"Content-Type":"application/json"}}).then((e=>{if("0"==e.headers.get("ratelimit-remaining"))throw new Error("Too many requests")})).catch((e=>{console.log(e)}))}await new Promise((e=>setTimeout(e,E)))}catch(a){throw console.log(a),new Error(`Error: ${a.message}`)}}async function L(e,t){try{for(let a=0;a<t.length;a++){const n=t[a];fetch(`https://api.twitch.tv/helix/moderation/bans?broadcaster_id=${e}&moderator_id=${JSON.parse(localStorage.getItem("login")).userId}&user_id=${n.id}`,{method:"DELETE",headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("login")).token,"Client-ID":JSON.parse(localStorage.getItem("login")).clientID,"Content-Type":"application/json"}}).then((e=>{if("0"==e.headers.get("ratelimit-remaining"))throw new Error("Too many requests")})).catch((e=>{console.log(e)}))}await new Promise((e=>setTimeout(e,E)))}catch(a){throw console.log(a),new Error(`Error: ${a.message}`)}}(0,w.useEffect)((()=>{document.title="LsCo Software - Filesay"}),[]),(0,w.useEffect)((()=>{localStorage.getItem("login")||null||(n("Log in to get started."),v(null))}),[]);return(0,f.jsx)(p.Z,{title:"Filesay",description:"Ban/timeout multiple users in a specific channel.",children:(0,f.jsxs)(i.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,f.jsx)(i.ZP,{item:!0,xs:12,children:(0,f.jsx)(s.Z,{options:N,onChange:(e,t)=>{C(t)},renderInput:e=>(0,f.jsx)(r.Z,{...e,fullWidth:!0,id:"standard-basic",label:"Channel",variant:"filled",onChange:e=>{(async e=>{if(""!==e.trim()){const t=await fetch(`https://api.twitch.tv/helix/search/channels?query=${e}`,{headers:{"Client-Id":"9uavest5z7knsvpbip19fxqkywxz3ec"}}),a=await t.json();t.ok?O(a.data.map((e=>`${new RegExp("^\\w+$").test(e.display_name)?e.display_name:e.broadcaster_login} - ID: ${e.id}`))):O([])}else O([])})(e.target.value)}})})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,children:(0,f.jsxs)(l.Z,{fullWidth:!0,variant:"filled",children:[(0,f.jsx)(c.Z,{id:"type-label",children:"Type"}),(0,f.jsxs)(d.Z,{value:j,onChange:e=>$(e.target.value),labelId:"type-label",id:"type-select",children:[(0,f.jsx)(h.Z,{value:"filesay",children:"Filesay"}),(0,f.jsx)(h.Z,{value:"ban-list-name",children:"Ban List (Name)"}),(0,f.jsx)(h.Z,{value:"unban-list-name",children:"Unban List (Name)"}),(0,f.jsx)(h.Z,{value:"ban-list-id",children:"Ban List (ID)"}),(0,f.jsx)(h.Z,{value:"unban-list-id",children:"Unban List (ID)"})]})]})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,children:(0,f.jsx)(r.Z,{fullWidth:!0,multiline:!0,rows:10,id:"standard-basic",label:"Text",variant:"filled",value:e,onChange:e=>t(e.target.value)})}),(0,f.jsx)(o.Z,{theme:y,children:(0,f.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,f.jsx)(g.Z,{gutterBottom:!0,children:"Output delay"}),(0,f.jsx)(l.Z,{fullWidth:!0,variant:"filled",children:(0,f.jsx)(u.ZP,{"aria-label":"Delay",value:E,onChange:(e,t)=>{T(t)},getAriaValueText:S,step:null,valueLabelDisplay:"auto",marks:b,min:b[0].value,max:b[b.length-1].value})})]})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,children:(0,f.jsx)(m.Z,{variant:"contained",fullWidth:!0,onClick:async()=>{if(""===k.trim())return n(null),void v("You must specify a channel");if(""===j)return n(null),void v("You must specify a filesay type");if(""===e.trim())return n(null),void v("You must specify a filesay list");if(null===localStorage.getItem("login"))return n("Log in to get started."),void v(null);try{const t=k.split(" ")[3].trim(),a=e.split(/\r?\n/).map((e=>e.trim()));let o;o="ban-list-id"===j?4:"unban-list-id"===j?3:"ban-list-name"===j?2:"unban-list-name"===j?1:0;const i=[],s=[],r=[],l=[],c=[],d=[],h=[];for(let e=0;e<a.length;e++){const t=a[e];if(t)switch(o){case 0:switch(!0){case null!==t.match(/^(\.|\/)timeout\s\w+\s(\d+)(\s.+)?/i):{const[,e,a,...n]=t.split(/\s+/);s.find((t=>t.login===e.toLowerCase()))||s.push({login:e.toLowerCase(),duration:a,reason:n.join(" ")||""});break}case null!==t.match(/^(\.|\/)ban\s\w+(\s.+)?/i):{const[,e,...a]=t.split(/\s+/);c.find((t=>t.login===e.toLowerCase()))||c.push({login:e.toLowerCase(),reason:a.join(" ")||""});break}case null!==t.match(/^(\.|\/)unban\s\w+/i)||null!==t.match(/^(\.|\/)untimeout\s\w+/i):{const[,e]=t.split(/\s+/);l.find((t=>t.login===e.toLowerCase()))||l.push({login:e.toLowerCase()});break}case null!==t.match(/^(\.|\/)timeoutid\s\w+\s(\d+)(\s.+)?/i):{const[,e,a,...n]=t.split(/\s+/);r.find((t=>t.id===e))||r.push({id:e,duration:a,reason:n.join(" ")||""});break}case null!==t.match(/^(\.|\/)banid\s\w+(\s.+)?/i):{const[,e,...a]=t.split(/\s+/);h.find((t=>t.id===e))||h.push({id:e,reason:a.join(" ")||""});break}case null!==t.match(/^(\.|\/)unbanid\s\w+/i)||null!==t.match(/^(\.|\/)untimeoutid\s\w+/i):{const[,e]=t.split(/\s+/);d.find((t=>t.id===e))||d.push({id:e});break}default:i.push({message:t})}break;case 1:{const[e]=t.split(/\s+/);l.find((t=>t.login===e.toLowerCase()))||l.push({login:e.toLowerCase()});break}case 2:{const[e,...a]=t.split(/\s+/);c.find((t=>t.login===e.toLowerCase()))||c.push({login:e.toLowerCase(),reason:a?a.join(" "):"Ban-list"});break}case 3:{const[e]=t.split(/\s+/);l.find((t=>t.id===e))||d.push({id:e});break}case 4:{const[e,...a]=t.split(/\s+/);c.find((t=>t.id===e))||h.push({id:e,reason:a?a.join(" "):"Ban-list"});break}}}console.log("Bans",c,c.length),console.log("Unbans",l,l.length),console.log("Bans (ID)",h,h.length),console.log("Unbans (ID)",d,d.length),console.log("Timeouts",s,s.length),console.log("Timeouts (ID)",r,r.length),console.log("Messages",i,i.length),await Promise.all([P(t,c),J(t,l),Z(t,h),L(t,d),_(t,s),D(t,r)]);const g=await async function(e){if(!e)return null;const t=await fetch(`https://api.twitch.tv/helix/users?id=${encodeURIComponent(e)}`,{responseType:"json",throwHttpErrors:!1,headers:{"Client-Id":"9uavest5z7knsvpbip19fxqkywxz3ec"}}),a=await t.json();if(!t.ok)throw new Error(a.message?`${a.error}, ${a.message}`:t.statusText);if(!a.data[0])throw new Error("Login not found.");return a.data[0].login}(JSON.parse(localStorage.getItem("login")).userId);if(i.length){const e=new WebSocket("wss://irc-ws.chat.twitch.tv");e.onopen=async()=>{e.send("CAP REQ :twitch.tv/membership twitch.tv/tags twitch.tv/commands"),e.send("PASS oauth:"+JSON.parse(localStorage.getItem("login")).token),e.send("NICK "+g);for(let t=0;t<i.length;t++){const a=i[t].message;e.send(`PRIVMSG #${k.split(" ")[0].trim().toLowerCase()} :${a}`),await new Promise((e=>setTimeout(e,E))),t===i.length-1&&e.close()}}}n("Doing..."),v(null)}catch(t){return console.log(t),n(null),void v(t.message)}},children:"Send"})}),(0,f.jsxs)(i.ZP,{item:!0,xs:12,children:[I&&(0,f.jsx)(g.Z,{variant:"body2",style:{color:"red",marginTop:"10px",textAlign:"center"},children:I}),a&&(0,f.jsx)(g.Z,{variant:"body2",style:{marginTop:"10px",textAlign:"center"},children:a})]})]})})}}}]);
//# sourceMappingURL=169.79296c70.chunk.js.map