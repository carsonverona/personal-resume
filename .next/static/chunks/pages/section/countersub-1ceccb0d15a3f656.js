(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{5926:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/section/countersub",function(){return a(3726)}])},3726:function(e,t,a){"use strict";a.r(t);var r=a(5893),n=a(7294),s=a(1113),i=a(2932),o=a(2711),u=a.n(o);a(1496),t.default=function(){return(0,n.useEffect)(()=>{u().init({easing:"ease-out-cubic",once:!0,offset:50})},[]),(0,r.jsx)("div",{className:"section bg-top bg-bottom py-0",children:(0,r.jsx)(s.Parallax,{className:"py-5",bgImage:"./img/background/3.jpg",strength:300,children:(0,r.jsx)("div",{className:"py-5 position-relative",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-3",children:(0,r.jsxs)("div",{className:"de_count text-center",children:[(0,r.jsx)("h3",{className:"timer","data-aos":"fade","data-aos-delay":"0","data-aos-duration":"1000","data-aos-easing":"ease","data-aos-once":"true",children:(0,r.jsx)(i.I,{isCounting:!0,end:8240,duration:3})}),(0,r.jsx)("span",{children:"Hours of Works"})]})}),(0,r.jsx)("div",{className:"col-md-3",children:(0,r.jsxs)("div",{className:"de_count text-center",children:[(0,r.jsx)("h3",{className:"timer","data-aos":"fade","data-aos-delay":"200","data-aos-duration":"1000","data-aos-easing":"ease","data-aos-once":"true",children:(0,r.jsx)(i.I,{isCounting:!0,end:315,duration:3})}),(0,r.jsx)("span",{children:"Projects Done"})]})}),(0,r.jsx)("div",{className:"col-md-3",children:(0,r.jsxs)("div",{className:"de_count text-center",children:[(0,r.jsx)("h3",{className:"timer","data-aos":"fade","data-aos-delay":"400","data-aos-duration":"1000","data-aos-easing":"ease","data-aos-once":"true",children:(0,r.jsx)(i.I,{isCounting:!0,end:250,duration:3})}),(0,r.jsx)("span",{children:"Satisfied Customers"})]})}),(0,r.jsx)("div",{className:"col-md-3",children:(0,r.jsxs)("div",{className:"de_count text-center",children:[(0,r.jsx)("h3",{className:"timer","data-aos":"fade","data-aos-delay":"600","data-aos-duration":"1000","data-aos-easing":"ease","data-aos-once":"true",children:(0,r.jsx)(i.I,{isCounting:!0,end:32,duration:3})}),(0,r.jsx)("span",{children:"Awards Winning"})]})})]})})})})})}},2932:function(e,t,a){"use strict";a.d(t,{I:function(){return _}});var r=a(7294),n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(e,t)=>{var a={};for(var r in e)s.call(e,r)&&0>t.indexOf(r)&&(a[r]=e[r]);if(null!=e&&n)for(var r of n(e))0>t.indexOf(r)&&i.call(e,r)&&(a[r]=e[r]);return a},u=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&m(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&m(e,a,t[a]);return e},y=(e,t)=>c(e,l(t)),b="undefined"==typeof window?r.useEffect:r.useLayoutEffect,j=({isPlaying:e,duration:t,startAt:a=0,updateInterval:n=0,onComplete:s,onUpdate:i})=>{let[o,u]=(0,r.useState)(a),c=(0,r.useRef)(-1e3*a),l=(0,r.useRef)(null),d=(0,r.useRef)(null),f=(0,r.useRef)(null),p=(0,r.useRef)({elapsedTimeRef:0,startAtRef:a,durationRef:t,updateIntervalRef:n});p.current=y(h({},p.current),{durationRef:t,updateIntervalRef:n});let m=e=>{let t=e/1e3;if(null===d.current){d.current=t,l.current=requestAnimationFrame(m);return}let{durationRef:a,elapsedTimeRef:r,updateIntervalRef:n,startAtRef:s}=p.current,i=r+(t-d.current);d.current=t,p.current=y(h({},p.current),{elapsedTimeRef:i});let o="number"==typeof a&&s+i>=a;u(o?a:s+(0===n?i:(i/n|0)*n)),o||(l.current=requestAnimationFrame(m))},j=()=>{l.current&&cancelAnimationFrame(l.current),f.current&&clearTimeout(f.current),d.current=null},x=(0,r.useCallback)(t=>{let r="number"==typeof t?t:a;j(),p.current=y(h({},p.current),{elapsedTimeRef:0,startAtRef:r}),u(r),e&&(l.current=requestAnimationFrame(m))},[e,a]);return b(()=>{if(null==i||i(o),t&&o>=t){c.current+=1e3*t;let{shouldRepeat:e=!1,delay:a=0,newStartAt:r}=(null==s?void 0:s(c.current/1e3))||{};e&&(f.current=setTimeout(()=>x(r),1e3*a))}},[o,t]),b(()=>(e&&(l.current=requestAnimationFrame(m)),j),[e]),{elapsedTime:o,reset:x}},x={easeInCubic:(e,t,a,r)=>a*(e/=r)*e*e+t,easeOutCubic:(e,t,a,r)=>(e/=r,a*(--e*e*e+1)+t),linear:(e,t,a,r)=>a*e/r+t},v=x.easeOutCubic,g=e=>"function"==typeof e?e:x[e],N=(e,t)=>{if("number"==typeof e)return"number"==typeof t?t:2},O=(e,t)=>e.replace(/\B(?=(\d{3})+(?!\d))/g,t),R=e=>(e.toString().split(".")[1]||"").length,w=(e,t)=>{let a=R(e),r=R(t||1);return a>=r?a:r},C=({isCounting:e=!1,start:t=0,end:a,duration:r,decimalPlaces:n=w(t,a),decimalSeparator:s=".",thousandsSeparator:i="",onComplete:o,easing:u=v,formatter:c,updateInterval:l,onUpdate:d})=>{let f=N(a,r),p=e=>{let r;if(r=0===f&&"number"==typeof a?a:"number"==typeof a&&"number"==typeof f?g(u)(e<f?e:f,t,a-t,f):t+e,"function"==typeof c)return c(r);if(0===n)return O(Math.round(r).toString(),i);let[o,l]=r.toFixed(n).split(".");return`${O(o,i)}${s}${l}`},{elapsedTime:m,reset:h}=j({isPlaying:e,duration:f,onComplete:o,updateInterval:l,onUpdate:"function"==typeof d?e=>d(p(e)):void 0});return{value:p(m),reset:h}},_=e=>{var{children:t}=e;let a=C(o(e,["children"]));return"function"==typeof t?t(a):a.value};_.displayName="CountUp"}},function(e){e.O(0,[0,225,774,888,179],function(){return e(e.s=5926)}),_N_E=e.O()}]);