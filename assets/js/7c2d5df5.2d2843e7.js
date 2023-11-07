"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=d(r),f=n,y=i["".concat(l,".").concat(f)]||i[f]||p[f]||s;return r?o.createElement(y,a(a({ref:t},u),{},{components:r})):o.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[i]="string"==typeof e?e:n,a[1]=c;for(var d=2;d<s;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const s={title:"Allow web access only from trusted IP addresses",sidebar_position:2},a="Allow web access only from trusted IP addresses",c={unversionedId:"Security/Allow-web-access-only-from-trusted-IP-addresses",id:"Security/Allow-web-access-only-from-trusted-IP-addresses",title:"Allow web access only from trusted IP addresses",description:'For security reasons, you may want to allow access to the Cloud PBX portal for your own user or other portal users only from trusted IP addresses, e.g. IP addresses belonging to your office network. Open menu "My company \\> Portal users" and select a portal user for whom you need to define trusted IP addresses. Open tab "Security" and click "Add IP" to specify an IP address or network. You can add more than one trusted IP address or network.',source:"@site/docs/Security/Allow-web-access-only-from-trusted-IP-addresses.mdx",sourceDirName:"Security",slug:"/Security/Allow-web-access-only-from-trusted-IP-addresses",permalink:"/cloudpbx-portal-docs/docs/Security/Allow-web-access-only-from-trusted-IP-addresses",draft:!1,editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/docs/Security/Allow-web-access-only-from-trusted-IP-addresses.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Allow web access only from trusted IP addresses",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Two-factor authentication",permalink:"/cloudpbx-portal-docs/docs/Security/Two-factor-authentication"},next:{title:"PIN protection for outgoing paid calls outside of your Cloud PBX",permalink:"/cloudpbx-portal-docs/docs/Security/PIN-protection-for-outgoing-paid-calls"}},l={},d=[],u={toc:d},i="wrapper";function p(e){let{components:t,...s}=e;return(0,n.kt)(i,(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"allow-web-access-only-from-trusted-ip-addresses"},"Allow web access only from trusted IP addresses"),(0,n.kt)("p",null,'For security reasons, you may want to allow access to the Cloud PBX portal for your own user or other portal users only from trusted IP addresses, e.g. IP addresses belonging to your office network. Open menu "',(0,n.kt)("strong",{parentName:"p"},"My company")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Portal users"),'" and select a portal user for whom you need to define trusted IP addresses. Open tab "',(0,n.kt)("strong",{parentName:"p"},"Security"),'" and click "',(0,n.kt)("strong",{parentName:"p"},"Add IP"),'" to specify an IP address or network. You can add more than one trusted IP address or network.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(1382).Z,width:"756",height:"656"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"If a user tries to log in from outside of your network, the Cloud PBX portal denies their access and the user cannot log in.")))),(0,n.kt)("p",null,"Such IP restrictions add an extra layer of security to regular login and password."))}p.isMDXComponent=!0},1382:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Security-IP_restrictions_added-3f1f3b744ca5a781777b7ca998d437bf.png"}}]);