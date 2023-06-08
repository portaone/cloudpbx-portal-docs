"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[3769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),p=o,g=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1},l="Manage Operation Modes",i={unversionedId:"call-center-advanced/manage-operation-modes",id:"call-center-advanced/manage-operation-modes",title:"Manage Operation Modes",description:"Managers of the call centers ask us:",source:"@site/docs/call-center-advanced/manage-operation-modes.md",sourceDirName:"call-center-advanced",slug:"/call-center-advanced/manage-operation-modes",permalink:"/cloudpbx-portal-docs/docs/call-center-advanced/manage-operation-modes",draft:!1,editUrl:"https://github.com/olegshevtsov/portal-docs/tree/development/docs/call-center-advanced/manage-operation-modes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Call Center - Advanced",permalink:"/cloudpbx-portal-docs/docs/category/call-center---advanced"},next:{title:"Add Operation mode - GIF",permalink:"/cloudpbx-portal-docs/docs/call-center-advanced/Add-Operation-Mode-GIF"}},c={},s=[{value:"How it works",id:"how-it-works",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Create an operation mode &quot;emergency&quot;",id:"create-an-operation-mode-emergency",level:2},{value:"1. To add an emergency mode, go to <strong>Calls-&gt;Settings-&gt;Call screening</strong> tab.",id:"1-to-add-an-emergency-mode-go-to-calls-settings-call-screening-tab",level:3},{value:"2. Scroll down the list until you see <strong>+Add Module</strong> button.",id:"2-scroll-down-the-list-until-you-see-add-module-button",level:3},{value:"3. Fill in <code>Name</code>, <code>DTMF code</code> and <code>Expires after</code>.",id:"3-fill-in-name-dtmf-code-and-expires-after",level:3},{value:"4. Add new rule to the policy, in case of emergency mode - treat the calls in a special way.",id:"4-add-new-rule-to-the-policy-in-case-of-emergency-mode---treat-the-calls-in-a-special-way",level:3},{value:"Test the emergency mode",id:"test-the-emergency-mode",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-operation-modes"},"Manage Operation Modes"),(0,o.kt)("p",null,"Managers of the call centers ask us: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"what should we do if there is an emergency situation and we can't serve calls: fire alarm in the building or power outage.")),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Let\u2019s say ABC company has three modes configured: \u201cBusiness hours\u201d, \u201cNon-working hours\u201d, and \u201cEmergency\u201d. Each mode has a unique Dual-Tone Multi-Frequency (DTMF) code that is used for switching. Mary, a sales agent, goes out for business lunch (during business hours) and doesn\u2019t want any calls to disturb her colleagues in the office. Thus, to forward all calls to voicemail at once, Mary dials ","*","61 on her phone and specifies the DTMF code for \u201cNon-working hours\u201d mode. Once the mode is changed, Mary stops receiving calls, both from clients and other agents. All the calls are forwarded to voicemail. In two hours, Mary comes back to the office. She dials ","*","61 on her phone again and changes the mode to business hours, meaning now she can receive calls."),(0,o.kt)("h3",{id:"benefits"},"Benefits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Call Center users have more control over the incoming calls so that they can quickly change the modes to control what calls to accept."),(0,o.kt)("li",{parentName:"ul"},"Call Center administrators gain control over all incoming PBX calls. This allows for managing who can reach agents and at what time by quickly changing the way all incoming calls are handled via IVR.")),(0,o.kt)("h2",{id:"create-an-operation-mode-emergency"},'Create an operation mode "emergency"'),(0,o.kt)("h3",{id:"1-to-add-an-emergency-mode-go-to-calls-settings-call-screening-tab"},"1. To add an emergency mode, go to ",(0,o.kt)("strong",{parentName:"h3"},"Calls->Settings->Call screening")," tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img Call Settings",src:a(338).Z,width:"1127",height:"893"})),(0,o.kt)("h3",{id:"2-scroll-down-the-list-until-you-see-add-module-button"},"2. Scroll down the list until you see ",(0,o.kt)("strong",{parentName:"h3"},"+Add Module")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img Call Settings Add mode",src:a(4076).Z,width:"957",height:"511"})),(0,o.kt)("h3",{id:"3-fill-in-name-dtmf-code-and-expires-after"},"3. Fill in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Name"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"DTMF code")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"Expires after"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img Call Settings Add Mode dialog",src:a(2437).Z,width:"573",height:"492"})),(0,o.kt)("h3",{id:"4-add-new-rule-to-the-policy-in-case-of-emergency-mode---treat-the-calls-in-a-special-way"},"4. Add new rule to the policy, in case of emergency mode - treat the calls in a special way."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img Call Settings Add Rule dialog",src:a(1963).Z,width:"574",height:"712"})),(0,o.kt)("h2",{id:"test-the-emergency-mode"},"Test the emergency mode"),(0,o.kt)("p",null,"From manager's phone:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dial *614 to activate the emergency mode."),(0,o.kt)("li",{parentName:"ul"},"dial *610 to switch back to the normal mode.")))}u.isMDXComponent=!0},2437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/call-settings-add-mode-dialog-96b0b72bf818b8c49cd21ea8665eddad.png"},4076:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/call-settings-add-mode-e4796952bc93aca7290265a050614075.png"},1963:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/call-settings-add-rule-dialog-1eac28bcd3e2bdc34c1af1bf1d407965.png"},338:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/call-settings-99fc902e613f8eb773e01bd5b74e79ca.png"}}]);