"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[641],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return r?o.createElement(f,l(l({ref:t},c),{},{components:r})):o.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},4732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={slug:"release-notes-0.59.5",title:"Release Notes 0.59.5",authors:"sat",tags:["release notes","portal","0.59.5"]},l=void 0,s={permalink:"/cloudpbx-portal-docs/de/blog/release-notes-0.59.5",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2024-01-09-0.59.5.md",source:"@site/blog/2024-01-09-0.59.5.md",title:"Release Notes 0.59.5",description:"Release 0.59.5 brings a few bugfixes",date:"2024-01-09T00:00:00.000Z",formattedDate:"9. Januar 2024",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/de/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/de/blog/tags/portal"},{label:"0.59.5",permalink:"/cloudpbx-portal-docs/de/blog/tags/0-59-5"}],readingTime:.43,hasTruncateMarker:!1,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-0.59.5",title:"Release Notes 0.59.5",authors:"sat",tags:["release notes","portal","0.59.5"]},nextItem:{title:"Release Notes 1.7.0",permalink:"/cloudpbx-portal-docs/de/blog/release-notes-1.7.0"}},i={authorsImageUrls:[void 0]},p=[{value:"Bugfixes:",id:"bugfixes",level:3},{value:"Compatibility between versions of the portal and PortaSwitch:",id:"compatibility-between-versions-of-the-portal-and-portaswitch",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Release 0.59.5 brings a few bugfixes"),(0,n.kt)("h3",{id:"bugfixes"},"Bugfixes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ICAP-2156: The Customer can't renew the expired password using 2FA"),(0,n.kt)("li",{parentName:"ul"},"ICAP-2157: Let users with new passwords and 2FA log in"),(0,n.kt)("li",{parentName:"ul"},"ICAP-2172: Let users with configured 2FA and a new password enter an authentication code and change the password")),(0,n.kt)("h3",{id:"compatibility-between-versions-of-the-portal-and-portaswitch"},"Compatibility between versions of the portal and PortaSwitch:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MR95-MR99: lastest portal version is 0.36.1"),(0,n.kt)("li",{parentName:"ul"},"MR100-MR103:\tlatest portal version is 0.57.3"),(0,n.kt)("li",{parentName:"ul"},"MR104-MR105:\tlatest portal version is 0.59.5"),(0,n.kt)("li",{parentName:"ul"},"MR106+: latest portal version is 1.7.0")))}d.isMDXComponent=!0}}]);