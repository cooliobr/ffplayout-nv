import{_ as k}from"./Menu.vue.db477a31.js";import{u as z,a as T,s as I}from"./config.c2db4e89.js";import{a as N,m as q,k as _,A as D,p as H,e as y,q as $,f as e,h as i,E as O,u as s,l as w,F as E,r as F,w as G,v as d,j as L,t as C,o as S,G as j,H as J,I as X}from"./entry.adf6f5f7.js";import{u as Y}from"./auth.cb4bed8f.js";import"./nuxt-link.e332d9af.js";const r=m=>(j("data-v-4b4b8ffa"),m=m(),J(),m),R={class:"container mt-5"},W={class:"preset-div"},K={class:"row"},Q={class:"col"},Z={class:"col-2"},ee={class:"btn-group",role:"group"},oe=r(()=>e("i",{class:"bi-cloud-upload"},null,-1)),te=[oe],le=r(()=>e("button",{class:"btn btn-primary",title:"New Preset","data-bs-toggle":"modal","data-bs-target":"#createModal"},[e("i",{class:"bi-file-plus"})],-1)),se=r(()=>e("button",{class:"btn btn-primary",title:"Delete Preset","data-bs-toggle":"modal","data-bs-target":"#deleteModal"},[e("i",{class:"bi-file-minus"})],-1)),ae=["onSubmit"],ne={class:"row mt-3"},re={class:"col"},ie={class:"row mt-2"},de={class:"col"},ue=r(()=>e("label",{for:"input-size"},"Size",-1)),ce={class:"col"},pe=r(()=>e("label",{for:"input-spacing"},"Spacing",-1)),fe={class:"row mt-2"},be={class:"col"},me=r(()=>e("label",{for:"input-color"},"Font Color",-1)),ve={class:"col"},he=r(()=>e("label",{for:"input-alpha"},"Font Alpha",-1)),_e={class:"col"},xe={class:"form-check"},ge=r(()=>e("label",{for:"input-box",class:"form-check-label"},"Show Box",-1)),ye={class:"row"},Se={class:"col"},Ae=r(()=>e("label",{for:"input-box-color"},"Box Color",-1)),we={class:"col"},Ce=r(()=>e("label",{for:"input-box-alpha",class:"form-check-label"},"Box Alpha",-1)),Me=r(()=>e("label",{for:"input-border-w",class:"form-check-label"},"Border Width",-1)),Ve=r(()=>e("label",{for:"input-overall-alpha",class:"form-check-label mt-2"},"Overall Alpha",-1)),Pe=r(()=>e("div",{class:"row mt-4"},[e("div",{class:"col sub-btn"},[e("button",{class:"btn btn-primary send-btn",type:"submit"},"Send")])],-1)),Ue={class:"modal fade",id:"createModal",tabindex:"-1","aria-labelledby":"createModalLabel","aria-hidden":"true"},Be={class:"modal-dialog modal-dialog-centered"},ke={class:"modal-content"},ze=r(()=>e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"createModalLabel"},"New Preset"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Cancel"})],-1)),Te={class:"modal-body"},Ie={class:"mb-3"},Ne=r(()=>e("label",{for:"preset-name",class:"col-form-label"},"Name:",-1)),qe={class:"modal-footer"},De=r(()=>e("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},"Cancel",-1)),He={class:"modal fade",id:"deleteModal",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},$e={class:"modal-dialog modal-dialog-centered"},Oe={class:"modal-content"},Ee=r(()=>e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"deleteModalLabel"},"Delete Preset"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Cancel"})],-1)),Fe={class:"modal-body"},Ge={class:"modal-footer"},Le=r(()=>e("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal"},"Cancel",-1)),je=N({__name:"message",setup(m){const b=Y(),c=z(),n=T(),{numberToHex:f,hexToNumber:A}=I(),x={"content-type":"application/json;charset=UTF-8"};q({title:"Messages | ffplayout"});const o=_({id:0,name:"",text:"",x:"0",y:"0",fontSize:24,fontSpacing:4,fontColor:"#ffffff",fontAlpha:1,showBox:!0,boxColor:"#000000",boxAlpha:.8,border:4,overallAlpha:"1"}),p=_(null),v=_(""),g=_([]);D(()=>{h(-1)}),H(()=>{n.resetAlert()});async function h(a){fetch(`/api/presets/${c.configGui[c.configID].id}`,{method:"GET",headers:b.authHeader}).then(t=>t.json()).then(t=>{if(a===-1){g.value=[{value:-1,name:""}];for(let u=0;u<t.length;u++){const l=t[u];g.value.push({value:u,name:l.name})}o.value={id:0,name:"",text:"",x:"0",y:"0",fontSize:24,fontSpacing:4,fontColor:"#ffffff",fontAlpha:1,showBox:!0,boxColor:"#000000",boxAlpha:.8,border:4,overallAlpha:"1"}}else{const u=t[a].fontcolor.split("@"),l=t[a].boxcolor.split("@");o.value={id:t[a].id,name:t[a].name,text:t[a].text,x:t[a].x,y:t[a].y,fontSize:t[a].fontsize,fontSpacing:t[a].line_spacing,fontColor:u[0],fontAlpha:u[1]?A(u[1]):1,showBox:t[a].box==="1",boxColor:l[0],boxAlpha:l[1]?A(l[1]):1,border:t[a].boxborderw,overallAlpha:t[a].alpha}}})}function M(a){p.value=a.target.value,h(a.target.selectedIndex-1)}async function V(){if(p.value){const a={id:o.value.id,name:o.value.name,text:o.value.text,x:o.value.x,y:o.value.y,fontsize:o.value.fontSize,line_spacing:o.value.fontSpacing,fontcolor:o.value.fontAlpha===1?o.value.fontColor:o.value.fontColor+"@"+f(o.value.fontAlpha),box:o.value.showBox?"1":"0",boxcolor:o.value.boxAlpha===1?o.value.boxColor:o.value.boxColor+"@"+f(o.value.boxAlpha),boxborderw:o.value.border,alpha:o.value.overallAlpha,channel_id:c.configGui[c.configID].id};(await fetch(`/api/presets/${o.value.id}`,{method:"PUT",headers:{...x,...b.authHeader},body:JSON.stringify(a)})).status===200?(n.alertVariant="alert-success",n.alertMsg="Save Preset done!"):(n.alertVariant="alert-danger",n.alertMsg="Save Preset failed!"),n.showAlert=!0,setTimeout(()=>{n.showAlert=!1},3e3)}}async function P(){const a={name:v.value,text:o.value.text,x:o.value.x.toString(),y:o.value.y.toString(),fontsize:o.value.fontSize.toString(),line_spacing:o.value.fontSpacing.toString(),fontcolor:o.value.fontAlpha===1?o.value.fontColor:o.value.fontColor+"@"+f(o.value.fontAlpha),box:o.value.showBox?"1":"0",boxcolor:o.value.boxAlpha===1?o.value.boxColor:o.value.boxColor+"@"+f(o.value.boxAlpha),boxborderw:o.value.border.toString(),alpha:o.value.overallAlpha.toString(),channel_id:c.configGui[c.configID].id};(await fetch("/api/presets/",{method:"POST",headers:{...x,...b.authHeader},body:JSON.stringify(a)})).status===200?(n.alertVariant="alert-success",n.alertMsg="Save Preset done!",h(-1)):(n.alertVariant="alert-danger",n.alertMsg="Save Preset failed!"),n.showAlert=!0,setTimeout(()=>{n.showAlert=!1},3e3)}async function U(){p.value&&p.value!==""&&(await fetch(`/api/presets/${o.value.id}`,{method:"DELETE",headers:b.authHeader}),h(-1))}async function B(){const a={text:o.value.text,x:o.value.x.toString(),y:o.value.y.toString(),fontsize:o.value.fontSize.toString(),line_spacing:o.value.fontSpacing.toString(),fontcolor:o.value.fontColor+"@"+f(o.value.fontAlpha),alpha:o.value.overallAlpha.toString(),box:o.value.showBox?"1":"0",boxcolor:o.value.boxColor+"@"+f(o.value.boxAlpha),boxborderw:o.value.border.toString()};(await fetch(`/api/control/${c.configGui[c.configID].id}/text/`,{method:"POST",headers:{...x,...b.authHeader},body:JSON.stringify(a)})).status===200?(n.alertVariant="alert-success",n.alertMsg="Sending success..."):(n.alertVariant="alert-danger",n.alertMsg="Sending failed..."),n.showAlert=!0,setTimeout(()=>{n.showAlert=!1},3e3)}return(a,t)=>{const u=k;return S(),y("div",null,[$(u),e("div",R,[e("div",W,[e("div",K,[e("div",Q,[i(e("select",{class:"form-select","onUpdate:modelValue":t[0]||(t[0]=l=>w(p)?p.value=l:null),onChange:t[1]||(t[1]=l=>M(l))},[(S(!0),y(E,null,F(s(g),l=>(S(),y("option",null,C(l.name),1))),256))],544),[[O,s(p)]])]),e("div",Z,[e("div",ee,[e("button",{class:"btn btn-primary",title:"Save Preset",onClick:t[2]||(t[2]=l=>V())},te),le,se])])])]),e("form",{onSubmit:G(B,["prevent"])},[i(e("textarea",{class:"form-control message","onUpdate:modelValue":t[3]||(t[3]=l=>s(o).text=l),rows:"7",placeholder:"Message"},null,512),[[d,s(o).text]]),e("div",ne,[e("div",re,[i(e("input",{class:"form-control mt-1","onUpdate:modelValue":t[4]||(t[4]=l=>s(o).x=l),type:"text",title:"X Axis",placeholder:"X",required:""},null,512),[[d,s(o).x]]),i(e("input",{class:"form-control mt-2","onUpdate:modelValue":t[5]||(t[5]=l=>s(o).y=l),type:"text",title:"Y Axis",placeholder:"Y",required:""},null,512),[[d,s(o).y]]),e("div",ie,[e("div",de,[ue,i(e("input",{id:"input-size",class:"form-control mt-2","onUpdate:modelValue":t[6]||(t[6]=l=>s(o).fontSize=l),type:"number",required:""},null,512),[[d,s(o).fontSize]])]),e("div",ce,[pe,i(e("input",{id:"input-spacing",class:"form-control mt-2","onUpdate:modelValue":t[7]||(t[7]=l=>s(o).fontSpacing=l),type:"number",required:""},null,512),[[d,s(o).fontSpacing]])])]),e("div",fe,[e("div",be,[me,i(e("input",{id:"input-color",class:"form-control mt-2","onUpdate:modelValue":t[8]||(t[8]=l=>s(o).fontColor=l),type:"color",required:""},null,512),[[d,s(o).fontColor]])]),e("div",ve,[he,i(e("input",{id:"input-alpha",class:"form-control mt-2","onUpdate:modelValue":t[9]||(t[9]=l=>s(o).fontAlpha=l),type:"number",min:"0",max:"1",step:"0.01"},null,512),[[d,s(o).fontAlpha]])])])]),e("div",_e,[e("div",xe,[i(e("input",{id:"input-box",type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[10]||(t[10]=l=>s(o).showBox=l)},null,512),[[L,s(o).showBox]]),ge]),e("div",ye,[e("div",Se,[Ae,i(e("input",{id:"input-box-color",class:"form-control mt-2","onUpdate:modelValue":t[11]||(t[11]=l=>s(o).boxColor=l),type:"color",required:""},null,512),[[d,s(o).boxColor]])]),e("div",we,[Ce,i(e("input",{id:"input-box-alpha",class:"form-control mt-2","onUpdate:modelValue":t[12]||(t[12]=l=>s(o).boxAlpha=l),type:"number",min:"0",max:"1",step:"0.01"},null,512),[[d,s(o).boxAlpha]])]),Me,i(e("input",{id:"input-border-w",class:"form-control mt-2","onUpdate:modelValue":t[13]||(t[13]=l=>s(o).border=l),type:"number",required:""},null,512),[[d,s(o).border]]),Ve,i(e("input",{id:"input-overall-alpha",class:"form-control mt-2","onUpdate:modelValue":t[14]||(t[14]=l=>s(o).overallAlpha=l),type:"text",required:""},null,512),[[d,s(o).overallAlpha]])])])]),Pe],40,ae)]),e("div",Ue,[e("div",Be,[e("div",ke,[ze,e("div",Te,[e("form",null,[e("div",Ie,[Ne,i(e("input",{type:"text",class:"form-control",id:"preset-name","onUpdate:modelValue":t[15]||(t[15]=l=>w(v)?v.value=l:null)},null,512),[[d,s(v)]])])])]),e("div",qe,[De,e("button",{type:"button",class:"btn btn-primary",onClick:t[16]||(t[16]=l=>P()),"data-bs-dismiss":"modal"}," Save ")])])])]),e("div",He,[e("div",$e,[e("div",Oe,[Ee,e("div",Fe,'Are you sure that you want to delete preset: "'+C(s(p))+'"?',1),e("div",Ge,[Le,e("button",{type:"button",class:"btn btn-primary",onClick:t[17]||(t[17]=l=>U()),"data-bs-dismiss":"modal"}," Ok ")])])])])])}}});const Ke=X(je,[["__scopeId","data-v-4b4b8ffa"]]);export{Ke as default};