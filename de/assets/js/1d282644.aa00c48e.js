"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[8790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"release-notes-3.0.0",title:"Release Notes 3.0.0",authors:"sat",tags:["release notes","portal","3.0.0"]},l=void 0,i={permalink:"/cloudpbx-portal-docs/de/blog/release-notes-3.0.0",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2024-07-11-3.0.0.md",source:"@site/blog/2024-07-11-3.0.0.md",title:"Release Notes 3.0.0",description:"Release 3.0.0 brings new functionality and bugfixes.",date:"2024-07-11T00:00:00.000Z",formattedDate:"11. Juli 2024",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/de/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/de/blog/tags/portal"},{label:"3.0.0",permalink:"/cloudpbx-portal-docs/de/blog/tags/3-0-0"}],readingTime:1.255,hasTruncateMarker:!1,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-3.0.0",title:"Release Notes 3.0.0",authors:"sat",tags:["release notes","portal","3.0.0"]},prevItem:{title:"Release Notes 3.1.1",permalink:"/cloudpbx-portal-docs/de/blog/release-notes-3.1.1"},nextItem:{title:"Release Notes 2.2.1",permalink:"/cloudpbx-portal-docs/de/blog/release-notes-2.2.1"}},s={authorsImageUrls:[void 0]},p=[{value:"Enhancements:",id:"enhancements",level:3},{value:"Bugfixes:",id:"bugfixes",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Release 3.0.0 brings new functionality and bugfixes.\nMinimal PortaSwitch version is ",(0,r.kt)("strong",{parentName:"p"},"MR114"),"."),(0,r.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ICAP-2375: Render loading animation while the application fetches info about extensions to be displayed in the list of Current calls  "),(0,r.kt)("li",{parentName:"ul"},"ICAP-2358: Let users disable the auto refresh option for wallboard widgets"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2287: Allow users to download transcriptions of recorded calls")),(0,r.kt)("h3",{id:"bugfixes"},"Bugfixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ICAP-1940: Extension name is not shown in the call console under branch office"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2355: Display name is not shown in Activity tab"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2242: Only first 500 accounts and extensions are fetched on ring group page"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2354: Wrong counter of available extensions"),(0,r.kt)("li",{parentName:"ul"},'ICAP-2356: Sequence is not updated to "Order" when enabling SIP URI forwarding'),(0,r.kt)("li",{parentName:"ul"},"ICAP-2370: It is impossible to download a call transcription after the transcription for the previous call is downloaded"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2345: Simple forwarding is created with Simultaneous sequence"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2308: Update a particular i_menu_transition instead of creating a new one"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2336: The layout issue with localization of buttons to Ukrainian"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2233: The dialogue changes its title/contents after a user presses Cancel to close it"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2327: Automatically refresh donuts on the supervisor panel every 10 minutes"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2314: The page reloads two times after the language is changed for a user"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2279: Tabs with extension details are shown for a while and then disappear "),(0,r.kt)("li",{parentName:"ul"},"ICAP-2344: Content of updated call screening rule and auto-attendant menu action is blinking for a while after closing the dialog"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2360: Extension cannot be updated")))}d.isMDXComponent=!0}}]);