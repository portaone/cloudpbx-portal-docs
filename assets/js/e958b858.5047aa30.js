"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[3936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(f,l(l({ref:t},c),{},{components:r})):o.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={slug:"release-notes-0.51.0",title:"Release Notes 0.51.0",authors:"sat",tags:["release notes","portal","0.51.0"]},l=void 0,s={permalink:"/cloudpbx-portal-docs/blog/release-notes-0.51.0",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2023-03-02-0.51.0.md",source:"@site/blog/2023-03-02-0.51.0.md",title:"Release Notes 0.51.0",description:"Release 0.51.0 introduces Wallboards PoC, adds duration to the active calls list.",date:"2023-03-02T00:00:00.000Z",formattedDate:"March 2, 2023",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/blog/tags/portal"},{label:"0.51.0",permalink:"/cloudpbx-portal-docs/blog/tags/0-51-0"}],readingTime:.555,hasTruncateMarker:!0,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-0.51.0",title:"Release Notes 0.51.0",authors:"sat",tags:["release notes","portal","0.51.0"]},prevItem:{title:"Release Notes 0.52.0",permalink:"/cloudpbx-portal-docs/blog/release-notes-0.52.0"},nextItem:{title:"Release Notes 0.50.1",permalink:"/cloudpbx-portal-docs/blog/release-notes-0.50.1"}},i={authorsImageUrls:[void 0]},p=[{value:"Enhancements:",id:"enhancements",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Release 0.51.0 introduces Wallboards PoC, adds duration to the active calls list."),(0,n.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ICAP-1589 Wallboard"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1627 Add duration to info about Current calls"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1707 Process different values of hunt_delay and hunt_expire for huntgroup members")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Bugs:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ICAP-1719 Add new nodes to permissions-input.json"),(0,n.kt)("li",{parentName:"ul"},'ICAP-1733 Misprint in ring group member window for "Permamently"'),(0,n.kt)("li",{parentName:"ul"},"ICAP-1703 Error is shown when changing type from simple forwarding or forward to SIP URI to advanced forwarding or follow-me"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1729 Background color differs when scrolling widgets down"),(0,n.kt)("li",{parentName:"ul"},'ICAP-1654 Make option "Ignore follow-me/voicemail" default for new ring group members'),(0,n.kt)("li",{parentName:"ul"},"ICAP-1718 Dialogue to confirm that a wallboard widget can be deleted")))}d.isMDXComponent=!0}}]);