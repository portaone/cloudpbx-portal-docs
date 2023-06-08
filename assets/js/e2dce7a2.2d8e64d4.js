"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={slug:"release-notes-0.57.0",title:"Release Notes 0.57.0",authors:"sat",tags:["release notes","portal","0.57.0"]},l=void 0,i={permalink:"/cloudpbx-portal-docs/blog/release-notes-0.57.0",editUrl:"https://github.com/olegshevtsov/portal-docs/tree/development/blog/2023-05-30-0.57.0.md",source:"@site/blog/2023-05-30-0.57.0.md",title:"Release Notes 0.57.0",description:"Release 0.57.0 brings wallboards in fullscreen mode, useful for creating information radiators for a team, such as big monitors or TV screens.",date:"2023-05-30T00:00:00.000Z",formattedDate:"May 30, 2023",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/blog/tags/portal"},{label:"0.57.0",permalink:"/cloudpbx-portal-docs/blog/tags/0-57-0"}],readingTime:1.8,hasTruncateMarker:!0,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-0.57.0",title:"Release Notes 0.57.0",authors:"sat",tags:["release notes","portal","0.57.0"]},nextItem:{title:"Release Notes 0.56.0",permalink:"/cloudpbx-portal-docs/blog/release-notes-0.56.0"}},s={authorsImageUrls:[void 0]},c=[{value:"Enhancements:",id:"enhancements",level:3},{value:"Bugfixes:",id:"bugfixes",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Release 0.57.0 brings wallboards in fullscreen mode, useful for creating information radiators for a team, such as big monitors or TV screens."),(0,n.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ICAP-1716: Allow users to open the Wallboard in a full-screen mode"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1744: Show a hyphen in Active calls column for the list of SIP trunks in case there are no active calls"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1873: Add new translations for German and Brazilian Portuguese")),(0,n.kt)("h3",{id:"bugfixes"},"Bugfixes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ICAP-1452: Call screening time filters display DB value instead of human-readable format"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1555: Pager is broken after a device is removed from a page following the first page"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1593: Portal crashes on opening extension page if API role restricts access to DID numbers"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1595: Newly created auto-attendant menu is not shown after going back to the menu list"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1599: Pager for device list is not changed after the upload"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1667: Login page is not returned after clicking Back in browser window from 2FA page"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1669: The wrong message is shown after generating and confirming MFA config from the profile page"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1677: Notification about enabling 2FA is not shown if MFA key was configured before"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1708: Do not show hours for calls that last for 1 minute"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1739: Counter for Fax mailboxes, DID numbers and Devices"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1740: Total is not changed after removing extension from the list"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1608: Remove the error if a file is chosen as a MOH file for a call queue"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1799: No German and Portuguese localization for call recording notification error"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1853: Error on attempt to open entity after confirming saving unsaved changes"),(0,n.kt)("li",{parentName:"ul"},'ICAP-1868: "There is no data to display" is not shown for "Call volumes" widget if the time range is 5 or 7 days and there were no calls for this period'),(0,n.kt)("li",{parentName:"ul"},"ICAP-1874: Non-standard style of the donut chart for a call volumes widget"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1875: Portal crashes on opening SIP trunk page if API role restricts access to DID numbers"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1877: The loading spinner is not centrally aligned when devices are being uploaded from a CSV file"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1888: Layout issue with localized Auto refresh rate")))}m.isMDXComponent=!0}}]);