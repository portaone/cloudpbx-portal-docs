"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[4152],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=s(t),h=r,g=c["".concat(d,".").concat(h)]||c[h]||f[h]||a;return t?i.createElement(g,u(u({ref:n},l),{},{components:t})):i.createElement(g,u({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,u=new Array(a);u[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[c]="string"==typeof e?e:r,u[1]=o;for(var s=2;s<a;s++)u[s]=t[s];return i.createElement.apply(null,u)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7931:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={sidebar_position:1},u="Zwei-Faktor-Authentifizierung",o={unversionedId:"Security/Two-factor-authentication",id:"Security/Two-factor-authentication",title:"Zwei-Faktor-Authentifizierung",description:"Sie k\xf6nnen das Sicherheitsniveau des Zugriffs Ihrer Portalbenutzer auf das Cloud PBX-Portal erheblich erh\xf6hen, indem Sie die Zwei-Faktor-Authentifizierung (2FA) verwenden. Bei aktivierter 2FA k\xf6nnen sich Benutzer nur anmelden, wenn sie zus\xe4tzlich zu ihrem Login und ihrem regul\xe4ren Passwort ein g\xfcltiges Einmalpasswort (OTP) eingeben. Das zeitbasierte OTP wird von einer 2FA-Anwendung wie Google Authenticator generiert, die auf dem Smartphone des Benutzers installiert ist. Selbst wenn also eine unbefugte Person Zugang zu den Benutzerdaten erh\xe4lt, kann sie ohne das OTP nicht auf das Cloud PBX-Portal zugreifen.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/Security/Two-factor-authentication.md",sourceDirName:"Security",slug:"/Security/Two-factor-authentication",permalink:"/cloudpbx-portal-docs/de/docs/Security/Two-factor-authentication",draft:!1,editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/docs/Security/Two-factor-authentication.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/cloudpbx-portal-docs/de/docs/category/security"},next:{title:"Webzugriff nur von vertrauensw\xfcrdigen IP-Adressen erlauben",permalink:"/cloudpbx-portal-docs/de/docs/Security/Allow-web-access-only-from-trusted-IP-addresses"}},d={},s=[{value:"Aktivieren Sie die Zwei-Faktor-Authentifizierung f\xfcr Ihren eigenen Benutzer",id:"aktivieren-sie-die-zwei-faktor-authentifizierung-f\xfcr-ihren-eigenen-benutzer",level:2},{value:"Aktivieren der Zwei-Faktor-Authentifizierung f\xfcr andere Benutzer",id:"aktivieren-der-zwei-faktor-authentifizierung-f\xfcr-andere-benutzer",level:2},{value:"Zur\xfccksetzen eines Schl\xfcssels f\xfcr die Zwei-Faktor-Authentifizierung",id:"zur\xfccksetzen-eines-schl\xfcssels-f\xfcr-die-zwei-faktor-authentifizierung",level:2},{value:"Deaktivieren Sie die Zwei-Faktor-Authentifizierung f\xfcr Ihren eigenen Benutzer",id:"deaktivieren-sie-die-zwei-faktor-authentifizierung-f\xfcr-ihren-eigenen-benutzer",level:2},{value:"Deaktivieren der Zwei-Faktor-Authentifizierung f\xfcr andere Benutzer",id:"deaktivieren-der-zwei-faktor-authentifizierung-f\xfcr-andere-benutzer",level:2}],l={toc:s},c="wrapper";function f(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,i.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zwei-faktor-authentifizierung"},"Zwei-Faktor-Authentifizierung"),(0,r.kt)("p",null,"Sie k\xf6nnen das Sicherheitsniveau des Zugriffs Ihrer Portalbenutzer auf das Cloud PBX-Portal erheblich erh\xf6hen, indem Sie die Zwei-Faktor-Authentifizierung (2FA) verwenden. Bei aktivierter 2FA k\xf6nnen sich Benutzer nur anmelden, wenn sie zus\xe4tzlich zu ihrem Login und ihrem regul\xe4ren Passwort ein g\xfcltiges Einmalpasswort (OTP) eingeben. Das zeitbasierte OTP wird von einer 2FA-Anwendung wie Google Authenticator generiert, die auf dem Smartphone des Benutzers installiert ist. Selbst wenn also eine unbefugte Person Zugang zu den Benutzerdaten erh\xe4lt, kann sie ohne das OTP nicht auf das Cloud PBX-Portal zugreifen."),(0,r.kt)("h2",{id:"aktivieren-sie-die-zwei-faktor-authentifizierung-f\xfcr-ihren-eigenen-benutzer"},"Aktivieren Sie die Zwei-Faktor-Authentifizierung f\xfcr Ihren eigenen Benutzer"),(0,r.kt)("p",null,"Wenn Sie Ihrem Login und Ihrem Passwort eine zus\xe4tzliche Sicherheitsstufe hinzuf\xfcgen m\xf6chten, installieren Sie eine Authentifizierungsanwendung auf Ihrem mobilen Ger\xe4t (z. Google Authenticator: ",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"},"Android"),", ",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/app/google-authenticator/id388497605"},"iOS"),') und \xf6ffnen Sie das Men\xfc "',(0,r.kt)("strong",{parentName:"p"},"Unternehmen")," => ",(0,r.kt)("strong",{parentName:"p"},"Mein Profil"),'" oder klicken Sie einfach auf Ihren Login in der linken unteren Ecke der Seite. \xd6ffnen Sie die Registerkarte "',(0,r.kt)("strong",{parentName:"p"},"Sicherheit"),'", um die Zwei-Faktor-Authentifizierung (2FA) f\xfcr Ihren eigenen Benutzer zu aktivieren. Scannen Sie den QR-Code oder geben Sie den angezeigten Schl\xfcssel manuell in Ihre Authentifizierungsanwendung ein. Die Authenticator-Anwendung generiert dann ein einmaliges Passwort, das Sie unter dem QR-Code eingeben m\xfcssen.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9018).Z,width:"1248",height:"775"})),(0,r.kt)("p",null,"Jetzt wurde die Zwei-Faktor-Authentifizierung (2FA) f\xfcr Ihre Anmeldung konfiguriert."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8978).Z,width:"977",height:"649"})),(0,r.kt)("p",null,"Beim n\xe4chsten Anmeldeversuch werden Sie aufgefordert, einen OTP-Code einzugeben."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(387).Z,width:"847",height:"762"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wenn Sie den Zugriff auf Ihre Authenticator-App verloren haben, wenden Sie sich an den Dienstanbieter oder einen anderen Portalbenutzer, der Ihren 2FA-Schl\xfcssel zur\xfccksetzen kann."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"aktivieren-der-zwei-faktor-authentifizierung-f\xfcr-andere-benutzer"},"Aktivieren der Zwei-Faktor-Authentifizierung f\xfcr andere Benutzer"),(0,r.kt)("p",null,'M\xf6glicherweise m\xf6chten Sie die Zwei-Faktor-Authentifizierung f\xfcr andere Portalbenutzer aktivieren. \xd6ffnen Sie das Men\xfc "',(0,r.kt)("strong",{parentName:"p"},"Unternehmen")," => ",(0,r.kt)("strong",{parentName:"p"},"Portalbenutzer"),'" und w\xe4hlen Sie einen Portalbenutzer, f\xfcr den Sie die Zwei-Faktor-Authentifizierung aktivieren m\xfcssen. \xd6ffnen Sie die Registerkarte "',(0,r.kt)("strong",{parentName:"p"},"Sicherheit"),'", um die Zwei-Faktor-Authentifizierung (2FA) f\xfcr den ausgew\xe4hlten Benutzer zu aktivieren.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(396).Z,width:"715",height:"601"})),(0,r.kt)("p",null,"Beim n\xe4chsten Anmeldeversuch dieses Benutzers wird er aufgefordert, einen QR-Code zu scannen und einen OTP-Code einzugeben."),(0,r.kt)("h2",{id:"zur\xfccksetzen-eines-schl\xfcssels-f\xfcr-die-zwei-faktor-authentifizierung"},"Zur\xfccksetzen eines Schl\xfcssels f\xfcr die Zwei-Faktor-Authentifizierung"),(0,r.kt)("p",null,'Wenn Sie Ihr mobiles Ger\xe4t, auf dem Sie Ihre Authentifizierungsanwendung installiert haben, ersetzen m\xfcssen, k\xf6nnen Sie den Schl\xfcssel f\xfcr die Zwei-Faktor-Authentifizierung zur\xfccksetzen. \xd6ffnen Sie das Men\xfc  "',(0,r.kt)("strong",{parentName:"p"},"Unternehmen")," => ",(0,r.kt)("strong",{parentName:"p"},"Mein Profil"),'" oder klicken Sie einfach auf Ihr Login in der linken unteren Ecke der Seite. \xd6ffnen Sie die Registerkarte "',(0,r.kt)("strong",{parentName:"p"},"Sicherheit"),'", um den Schl\xfcssel f\xfcr die Zwei-Faktor-Authentifizierung (2FA) f\xfcr Ihren eigenen Benutzer zur\xfcckzusetzen. Sie werden aufgefordert, einen OTP-Code einzugeben.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9400).Z,width:"1305",height:"795"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Wenn ein g\xfcltiger OTP-Code eingegeben wird, werden Sie abgemeldet und m\xfcssen sich erneut anmelden."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Beim n\xe4chsten Anmeldeversuch werden Sie aufgefordert, einen QR-Code zu scannen und dann einen OTP-Code einzugeben."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9018).Z,width:"1248",height:"775"})),(0,r.kt)("h2",{id:"deaktivieren-sie-die-zwei-faktor-authentifizierung-f\xfcr-ihren-eigenen-benutzer"},"Deaktivieren Sie die Zwei-Faktor-Authentifizierung f\xfcr Ihren eigenen Benutzer"),(0,r.kt)("p",null,'Wenn Sie die Zwei-Faktor-Authentifizierung f\xfcr Ihren eigenen Benutzer deaktivieren m\xf6chten, \xf6ffnen Sie das Men\xfc "',(0,r.kt)("strong",{parentName:"p"},"Unternehmen")," => ",(0,r.kt)("strong",{parentName:"p"},"Mein Profil"),'" oder klicken Sie einfach auf Ihr Login in der linken unteren Ecke der Seite. \xd6ffnen Sie die Registerkarte "',(0,r.kt)("strong",{parentName:"p"},"Sicherheit"),'", um die Zwei-Faktor-Authentifizierung (2FA) f\xfcr Ihren eigenen Benutzer zu deaktivieren. Sie werden aufgefordert, einen OTP-Code einzugeben.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8012).Z,width:"1302",height:"778"})),(0,r.kt)("h2",{id:"deaktivieren-der-zwei-faktor-authentifizierung-f\xfcr-andere-benutzer"},"Deaktivieren der Zwei-Faktor-Authentifizierung f\xfcr andere Benutzer"),(0,r.kt)("p",null,'M\xf6glicherweise m\xf6chten Sie die Zwei-Faktor-Authentifizierung f\xfcr andere Portalbenutzer deaktivieren. \xd6ffnen Sie das Men\xfc "',(0,r.kt)("strong",{parentName:"p"},"Unternehmen")," => ",(0,r.kt)("strong",{parentName:"p"},"Portalbenutzer"),'" und w\xe4hlen Sie einen Portalbenutzer, f\xfcr den Sie die Zwei-Faktor-Authentifizierung deaktivieren m\xfcssen. \xd6ffnen Sie die Registerkarte "',(0,r.kt)("strong",{parentName:"p"},"Sicherheit"),'", um die Zwei-Faktor-Authentifizierung (2FA) f\xfcr den ausgew\xe4hlten Benutzer zu deaktivieren.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7727).Z,width:"769",height:"650"})))}f.isMDXComponent=!0},9018:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Security-Two-factor_authentication-27f3e1c8ef748a03a036c68fc8b0f86b.png"},8012:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Security-Two-factor_authentication_disable-b70a9b4a8b2ed763280f5095b2a19d11.png"},8978:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Security-Two-factor_authentication_enabled-494aa513aa1d8bbc406738c07899b28d.png"},396:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Security-Two-factor_authentication_other_user-3346d76c026a8d4f83f3905580648604.png"},7727:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Security-Two-factor_authentication_other_user_disable-5a6f6d3e1ccaa988a1c3e3fbf6eb587c.png"},387:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Security-Two-factor_authentication_required-c76c26a214ee6ff74fa09bf77e9e3468.png"},9400:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Security-Two-factor_authentication_reset_key-80992d7abf905ffd2c373feafbdbbf5f.png"}}]);