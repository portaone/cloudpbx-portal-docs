"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[1879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={slug:"release-notes-2.0.0",title:"Release Notes 2.0.0",authors:"sat",tags:["release notes","portal","2.0.0"]},l=void 0,i={permalink:"/cloudpbx-portal-docs/blog/release-notes-2.0.0",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2024-03-07-2.0.0.md",source:"@site/blog/2024-03-07-2.0.0.md",title:"Release Notes 2.0.0",description:"Release 2.0.0 brings new functionality and bugfixes.",date:"2024-03-07T00:00:00.000Z",formattedDate:"March 7, 2024",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/blog/tags/portal"},{label:"2.0.0",permalink:"/cloudpbx-portal-docs/blog/tags/2-0-0"}],readingTime:1.05,hasTruncateMarker:!0,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-2.0.0",title:"Release Notes 2.0.0",authors:"sat",tags:["release notes","portal","2.0.0"]},nextItem:{title:"Discover What's New! 0.59.x-1.9.x Changelog",permalink:"/cloudpbx-portal-docs/blog/whats-new-0.59.x-1.9.x"}},s={authorsImageUrls:[void 0]},c=[{value:"Enhancements:",id:"enhancements",level:3},{value:"Bugfixes:",id:"bugfixes",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Release 2.0.0 brings new functionality and bugfixes.\nMinimal PortaSwitch version is MR113 (release date: March 22, 2024)."),(0,n.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ICAP-2106: Shared call parking"),(0,n.kt)("li",{parentName:"ul"},"ICAP-2252: Add the info tooltip for a call parking slot description"),(0,n.kt)("li",{parentName:"ul"},"ICAP-2257: Publish latest German and Portuguese translations")),(0,n.kt)("h3",{id:"bugfixes"},"Bugfixes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ICAP-2259: Allow PortaSwitch Admin to get redirected to the portal and log in without entering the password"),(0,n.kt)("li",{parentName:"ul"},"ICAP-2250: Show the error about a duplicated slot number in the dialogue instead of the toast message"),(0,n.kt)("li",{parentName:"ul"},"ICAP-2251: A call parking slot that was just deleted is shown in the list before reloading the page"),(0,n.kt)("li",{parentName:"ul"},'ICAP-2253: The value of "i_parking_slot" is shown in the dialog to confirm the deletion of a call parking slot'),(0,n.kt)("li",{parentName:"ul"},"ICAP-2254: The Save button is active in the dialogue to edit a call parking slot for users with vew-only access"),(0,n.kt)("li",{parentName:"ul"},"ICAP-2255: Allow to add new call parking slots to users with view-only or restricted access to call parking slot details"),(0,n.kt)("li",{parentName:"ul"},"ICAP-2256: The Save button in the dialogue to edit a call parking slot is active for a user belonging to a branch office"),(0,n.kt)("li",{parentName:"ul"},"ICAP-2265: The Save button is active in the dialog to edit a call parking slot even though no changes are introduced")))}d.isMDXComponent=!0}}]);