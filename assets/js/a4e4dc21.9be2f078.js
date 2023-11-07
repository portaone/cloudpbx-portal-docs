"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[2056],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={slug:"release-notes-1.3.0",title:"Release Notes 1.3.0",authors:"sat",tags:["release notes","portal","1.3.0"]},l=void 0,i={permalink:"/cloudpbx-portal-docs/blog/release-notes-1.3.0",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2023-08-28-1.3.0.md",source:"@site/blog/2023-08-28-1.3.0.md",title:"Release Notes 1.3.0",description:"Release 1.3.0 brings new functionality and bugfixes. Minimal PortaSwitch version is MR106.",date:"2023-08-28T00:00:00.000Z",formattedDate:"August 28, 2023",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/blog/tags/portal"},{label:"1.3.0",permalink:"/cloudpbx-portal-docs/blog/tags/1-3-0"}],readingTime:1.535,hasTruncateMarker:!0,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-1.3.0",title:"Release Notes 1.3.0",authors:"sat",tags:["release notes","portal","1.3.0"]},prevItem:{title:"Release Notes 1.4.0",permalink:"/cloudpbx-portal-docs/blog/release-notes-1.4.0"},nextItem:{title:"Release Notes 1.2.1",permalink:"/cloudpbx-portal-docs/blog/release-notes-1.2.1"}},s={authorsImageUrls:[void 0]},u=[{value:"Enhancements:",id:"enhancements",level:3},{value:"Bugfixes:",id:"bugfixes",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Release 1.3.0 brings new functionality and bugfixes. Minimal PortaSwitch version is MR106."),(0,n.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ICAP-1152 Allow users to enable automatic retrieval of parked calls"),(0,n.kt)("li",{parentName:"ul"},'ICAP-1604 Add validation for time filters if "From date" is greater than "To date"'),(0,n.kt)("li",{parentName:"ul"},"ICAP-1787 Show the loading animation before the Sign in dialogue"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1806 Localize the error for invalid IP address format for portal users")),(0,n.kt)("h3",{id:"bugfixes"},"Bugfixes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ICAP-1517 Time filter validation for invoices"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1801 The page is blinking if an invalid URL path to a SIP trunk is entered"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1872 Add validation of a user's password for the case when it contains digits only"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1893 Move the dialogue Import devices/extensions from a file to front"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1951 Fields are active if customer without office hierarchy has view only permission for company info"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1969 Wrong number of calls is shown in the call history"),(0,n.kt)("li",{parentName:"ul"},'ICAP-1971 Change the button label from "Close" to "Cancel" for dialogues to disconnect call'),(0,n.kt)("li",{parentName:"ul"},"ICAP-1973 Make it possible for users to set a standard tone for the ringback tone of a ring group"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1977 It is impossible to update voicemail settings along with changing an auto-attendant's extension number"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1978 It is impossible to update voicemail settings along with changing fax number or trunk ID"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1980 Notify users that their ring group changes cannot be saved due to errors of the call queue configuration"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1981 The divider between Call barring and Call recording is missing for auto-attendants"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1982 Radio buttons are black for tab with view only access"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1983 Layout issue with a hint for the auto-attendant call flow tab with read-only permissions"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1984 Badge for read-only tab is too close to the title on some pages"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1985 Do not change the border for read-only drop-down menus on mouse hover")))}d.isMDXComponent=!0}}]);