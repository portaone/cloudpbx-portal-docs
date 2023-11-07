"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[5203],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),f=r,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return o?n.createElement(g,i(i({ref:t},p),{},{components:o})):n.createElement(g,i({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1335:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:3},i="PIN protection for outgoing paid calls outside of your Cloud PBX",l={unversionedId:"Security/PIN-protection-for-outgoing-paid-calls",id:"Security/PIN-protection-for-outgoing-paid-calls",title:"PIN protection for outgoing paid calls outside of your Cloud PBX",description:"Oftentimes, businesses require additional authorization for outgoing tolls on international calls. Especially in\xa0the case\xa0of a single phone being\xa0shared among multiple users. PIN protection can be enabled for a particular product (main or add-on) assigned to extensions.",source:"@site/docs/Security/PIN-protection-for-outgoing-paid-calls.md",sourceDirName:"Security",slug:"/Security/PIN-protection-for-outgoing-paid-calls",permalink:"/cloudpbx-portal-docs/docs/Security/PIN-protection-for-outgoing-paid-calls",draft:!1,editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/docs/Security/PIN-protection-for-outgoing-paid-calls.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Allow web access only from trusted IP addresses",permalink:"/cloudpbx-portal-docs/docs/Security/Allow-web-access-only-from-trusted-IP-addresses"},next:{title:"Blocking phone lines",permalink:"/cloudpbx-portal-docs/docs/Security/Blocking-phone-lines"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pin-protection-for-outgoing-paid-calls-outside-of-your-cloud-pbx"},"PIN protection for outgoing paid calls outside of your Cloud PBX"),(0,r.kt)("p",null,"Oftentimes, businesses require additional authorization for outgoing tolls on international calls. Especially in\xa0the case\xa0of a single phone being\xa0shared among multiple users. PIN protection can be enabled for a particular product (main or add-on) assigned to extensions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Contact the service provider to check if PIN protection is available for your company.")))),(0,r.kt)("p",null,'If you need to enforce additional authorization of outgoing paid calls for a particular extension, ask the service provider to enable it first. Then open menu "',(0,r.kt)("strong",{parentName:"p"},"Cloud PBX")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Extensions"),'", select the extension that requires additional authorization on outgoing paid calls outside of your Cloud PBX, and open tab "',(0,r.kt)("strong",{parentName:"p"},"Call settings"),'" to enable option "',(0,r.kt)("strong",{parentName:"p"},"IVR authentication"),'". Enter a service unblock code that a user should input to make a toll call.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(487).Z,width:"1171",height:"903"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Calls between Cloud PBX extensions and calls to other IVR applications (e.g., to voicemail) bypass the additional authorization.")))),(0,r.kt)("p",null,"Next time, this extension is used to make an outgoing paid call outside of your Cloud PBX, the user will be asked to enter a PIN code."))}d.isMDXComponent=!0},487:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Security-PIN_protection_enabled-3f6cbd4546a17640e440ca6e14377330.gif"}}]);