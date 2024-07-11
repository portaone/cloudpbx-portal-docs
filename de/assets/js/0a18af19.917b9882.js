"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[7094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"release-notes-2.2.2",title:"Release Notes 2.2.2",authors:"sat",tags:["release notes","portal","2.2.2"]},l=void 0,s={permalink:"/cloudpbx-portal-docs/de/blog/release-notes-2.2.2",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2024-07-09-2.2.2.md",source:"@site/blog/2024-07-09-2.2.2.md",title:"Release Notes 2.2.2",description:"Release 2.2.2 brings new functionality and bugfixes.",date:"2024-07-09T00:00:00.000Z",formattedDate:"9. Juli 2024",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/de/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/de/blog/tags/portal"},{label:"2.2.2",permalink:"/cloudpbx-portal-docs/de/blog/tags/2-2-2"}],readingTime:.475,hasTruncateMarker:!1,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-2.2.2",title:"Release Notes 2.2.2",authors:"sat",tags:["release notes","portal","2.2.2"]},prevItem:{title:"Release Notes 3.0.0",permalink:"/cloudpbx-portal-docs/de/blog/release-notes-3.0.0"},nextItem:{title:"Release Notes 1.9.2",permalink:"/cloudpbx-portal-docs/de/blog/release-notes-1.9.2"}},i={authorsImageUrls:[void 0]},c=[{value:"Enhancements:",id:"enhancements",level:3},{value:"Bugfixes:",id:"bugfixes",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Release 2.2.2 brings new functionality and bugfixes.\nMinimal PortaSwitch version is MR113."),(0,o.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ICAP-2358: Let users disable the auto refresh option for wallboard widgets"),(0,o.kt)("li",{parentName:"ul"},"ICAP-2375: Render loading animation while the application fetches info about extensions to be displayed in the list of Current calls")),(0,o.kt)("h3",{id:"bugfixes"},"Bugfixes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ICAP-1940: Extension name is not shown in the call console under branch office"),(0,o.kt)("li",{parentName:"ul"},"ICAP-2345: Simple forwarding is created with Simultaneous sequence"),(0,o.kt)("li",{parentName:"ul"},"ICAP-2355: Display name is not shown in Activity tab"),(0,o.kt)("li",{parentName:"ul"},'ICAP-2356: Sequence is not updated to "Order" when enabling SIP URI forwarding')))}d.isMDXComponent=!0}}]);