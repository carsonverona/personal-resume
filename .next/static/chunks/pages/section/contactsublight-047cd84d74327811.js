(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[227],{9101:function(e,s,a){"use strict";a.d(s,{ZP:function(){return m}});let t={_origin:"https://api.emailjs.com"},i=(e,s="https://api.emailjs.com")=>{t._userID=e,t._origin=s},d=(e,s,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class r{constructor(e){this.status=e.status,this.text=e.responseText}}let n=(e,s,a={})=>new Promise((i,d)=>{let n=new XMLHttpRequest;n.addEventListener("load",({target:e})=>{let s=new r(e);200===s.status||"OK"===s.text?i(s):d(s)}),n.addEventListener("error",({target:e})=>{d(new r(e))}),n.open("POST",t._origin+e,!0),Object.keys(a).forEach(e=>{n.setRequestHeader(e,a[e])}),n.send(s)}),l=(e,s,a,i)=>{let r=i||t._userID;return d(r,e,s),n("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:e,template_id:s,template_params:a}),{"Content-type":"application/json"})},c=e=>{let s;if(!(s="string"==typeof e?document.querySelector(e):e)||"FORM"!==s.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},o=(e,s,a,i)=>{let r=i||t._userID,l=c(a);d(r,e,s);let o=new FormData(l);return o.append("lib_version","3.2.0"),o.append("service_id",e),o.append("template_id",s),o.append("user_id",r),n("/api/v1.0/email/send-form",o)};var m={init:i,send:l,sendForm:o}},3425:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/section/contactsublight",function(){return a(2795)}])},2795:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return c}});var t=a(5893),i=a(7294),d=a(9101),r=a(1113),n=a(2711),l=a.n(n);function c(){return(0,i.useEffect)(()=>{l().init({easing:"ease-out-cubic",once:!0,offset:50})},[]),(0,t.jsx)("div",{className:"section bg-top bg-bottom py-0",children:(0,t.jsx)(r.Parallax,{className:"py-5",bgImage:"../img/background/l4.jpg",strength:300,children:(0,t.jsx)("div",{className:"py-5 position-relative",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-md-12 text-center","data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"0","data-aos-duration":"1000","data-aos-easing":"ease",children:[(0,t.jsx)("h2",{children:"Contact Me"}),(0,t.jsx)("div",{className:"space-border"})]})}),(0,t.jsxs)("div",{className:"col-lg-8 offset-lg-2","data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"200","data-aos-duration":"1000","data-aos-easing":"ease",children:[(0,t.jsx)("div",{className:"contact_form_wrapper",children:(0,t.jsxs)("form",{name:"contactForm",id:"contact_form",className:"form-border",onSubmit:function(e){let s=document.getElementById("success"),a=document.getElementById("send_message"),t=document.getElementById("failed");e.preventDefault(),d.ZP.sendForm("gmail","template_csfdEZiA",e.target,"user_zu7p2b3lDibMCDutH5hif").then(e=>{console.log(e.text),s.classList.add("show"),a.classList.add("show"),t.classList.remove("show")},e=>{console.log(e.text),t.classList.add("show")})},children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)("div",{className:"field-set",children:(0,t.jsx)("input",{type:"text",name:"Name",id:"name",className:"form-control",placeholder:"Your Name",required:!0})})}),(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)("div",{className:"field-set",children:(0,t.jsx)("input",{type:"text",name:"Email",id:"email",className:"form-control",placeholder:"Your Email",required:!0})})}),(0,t.jsx)("div",{className:"col-md-4",children:(0,t.jsx)("div",{className:"field-set",children:(0,t.jsx)("input",{type:"text",name:"phone",id:"phone",className:"form-control",placeholder:"Your Phone",required:!0})})})]}),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"field-set",children:(0,t.jsx)("textarea",{name:"message",id:"message",className:"form-control",placeholder:"Your Message",required:!0})}),(0,t.jsx)("div",{id:"success",className:"hide",children:"Your message has been sent..."}),(0,t.jsx)("div",{id:"failed",className:"hide",children:"Message failed..."}),(0,t.jsx)("div",{id:"submit",className:"mt30",children:(0,t.jsx)("button",{type:"submit",id:"send_message",className:"btn-main",children:"Send Message"})})]})]})}),(0,t.jsx)("div",{className:"spacer-double"}),(0,t.jsxs)("div",{className:"row text-center",children:[(0,t.jsxs)("div",{className:"col-md-4",children:[(0,t.jsx)("div",{className:"wm-1"}),(0,t.jsx)("h6",{children:"Email Me"}),(0,t.jsx)("p",{children:"contact@kyrosnoriaki.com"})]}),(0,t.jsxs)("div",{className:"col-md-4",children:[(0,t.jsx)("div",{className:"wm-1"}),(0,t.jsx)("h6",{children:"Call Me"}),(0,t.jsx)("p",{children:"+1 700 333 92 96"})]}),(0,t.jsxs)("div",{className:"col-md-4",children:[(0,t.jsx)("div",{className:"wm-1"}),(0,t.jsx)("h6",{children:"Address"}),(0,t.jsx)("p",{children:"Collins Street West, Louisiana, Bayerfurt, USA"})]})]})]})]})})})})}a(1496)}},function(e){e.O(0,[0,225,774,888,179],function(){return e(e.s=3425)}),_N_E=e.O()}]);