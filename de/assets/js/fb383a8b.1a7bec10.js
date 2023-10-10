"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[2403],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>c});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},o=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),h=s(t),f=r,c=h["".concat(d,".").concat(f)]||h[f]||g[f]||a;return t?i.createElement(c,u(u({ref:n},o),{},{components:t})):i.createElement(c,u({ref:n},o))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,u=new Array(a);u[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[h]="string"==typeof e?e:r,u[1]=l;for(var s=2;s<a;s++)u[s]=t[s];return i.createElement.apply(null,u)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={title:"Anrufe innerhalb und ausserhalb der Gesch\xe4ftszeiten",sidebar_position:5},u="Anrufe innerhalb und ausserhalb der Gesch\xe4ftszeiten",l={unversionedId:"Calls-within-business-hours-and-non-working-hours",id:"Calls-within-business-hours-and-non-working-hours",title:"Anrufe innerhalb und ausserhalb der Gesch\xe4ftszeiten",description:"Anruffilter",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/Calls-within-business-hours-and-non-working-hours.md",sourceDirName:".",slug:"/Calls-within-business-hours-and-non-working-hours",permalink:"/cloudpbx-portal-docs/de/docs/Calls-within-business-hours-and-non-working-hours",draft:!1,editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/docs/Calls-within-business-hours-and-non-working-hours.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Anrufe innerhalb und ausserhalb der Gesch\xe4ftszeiten",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\xdcberwachung der Anrufe",permalink:"/cloudpbx-portal-docs/de/docs/Call-supervision"},next:{title:"Programmierung automatische Vermittlung (Rezeptionist)",permalink:"/cloudpbx-portal-docs/de/docs/Programming-auto-attendants"}},d={},s=[{value:"Anruffilter",id:"anruffilter",level:2},{value:"Algorithmus zur Anruffilterung",id:"algorithmus-zur-anruffilterung",level:3},{value:"Modus f\xfcr die Bearbeitung eingehender Anrufe (Gesch\xe4ftszeiten, arbeitsfreie Zeiten)",id:"modus-f\xfcr-die-bearbeitung-eingehender-anrufe-gesch\xe4ftszeiten-arbeitsfreie-zeiten",level:3},{value:"Einen neuen Modus hinzuf\xfcgen",id:"einen-neuen-modus-hinzuf\xfcgen",level:3},{value:"Antwortnachrichten f\xfcr eingehende Anrufe",id:"antwortnachrichten-f\xfcr-eingehende-anrufe",level:3},{value:"Eine neue Antwortnachricht hinzuf\xfcgen",id:"eine-neue-antwortnachricht-hinzuf\xfcgen",level:3},{value:"Richtlinien",id:"richtlinien",level:3},{value:"Eine neue Richtlinie hinzuf\xfcgen",id:"eine-neue-richtlinie-hinzuf\xfcgen",level:3},{value:"Regeln zu Richtlinien hinzuf\xfcgen",id:"regeln-zu-richtlinien-hinzuf\xfcgen",level:3},{value:"Richtlinien aktivieren",id:"richtlinien-aktivieren",level:3},{value:"Service-Codes",id:"service-codes",level:3}],o={toc:s},h="wrapper";function g(e){let{components:n,...a}=e;return(0,r.kt)(h,(0,i.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anrufe-innerhalb-und-ausserhalb-der-gesch\xe4ftszeiten"},"Anrufe innerhalb und ausserhalb der Gesch\xe4ftszeiten"),(0,r.kt)("h2",{id:"anruffilter"},"Anruffilter"),(0,r.kt)("p",null,"Manchmal m\xfcssen eingehende Anrufe unterschiedlich behandelt werden: Anrufe von Kunden oder Lieferanten sollten Ihre Mitarbeiter werktags auf ihren B\xfcrotelefonen erreichen, w\xe4hrend andere Anrufe einfach auf die Mailbox gehen k\xf6nnen. Anrufe in den Abendstunden sollten direkt an die Mobiltelefone weitergeleitet werden (es ergibt keinen Sinn, die IP-Telefone anzurufen, wenn die Mitarbeiter nicht im B\xfcro sind), w\xe4hrend Anrufe von anonymen Nummern immer abgewiesen werden sollten."),(0,r.kt)("p",null,"All dies kann mit Hilfe der Regeln f\xfcr das Anruffiltern in Ihrer Cloud-Telefonanlage erfolgen. Wenn die Anruffilter-Funktion f\xfcr eine Telefonleitung (z.\xa0B. eine Durchwahl oder eine automatische Telefonzentrale) aktiviert ist, k\xf6nnen Sie Richtlinien aktivieren, die aus einer Reihe von Regeln bestehen. Solche Regeln werden auf jeden eingehenden Anruf angewendet, wenn bestimmte Bedingungen erf\xfcllt sind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Zeitfilter")," \u2013 Zeitbedingung aufrufen. Sie k\xf6nnen Einschr\xe4nkungen in Bezug auf die Tageszeit, den Wochentag, den Tag des Monats oder eine Kombination dieser Faktoren festlegen. Dies ist ideal, um sicherzustellen, dass Ihr Telefon nicht mitten in der Nacht klingelt.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Anrufernummern (von)")," \u2013 Bedingung der anrufenden Nummer. Sie k\xf6nnen eine Liste von Telefonnummern f\xfcr einen Anrufer (ANI oder CLI) angeben, die diese Bedingung erf\xfcllen, z. B. k\xf6nnen Sie Durchwahlen, Festnetztelefonnummern usw. auflisten. Wenn Sie eine Telefonnummer angeben, k\xf6nnen Sie entweder die vollst\xe4ndige Nummer oder ein Muster (z.\xa0B. alle Nummern, die mit 1800 beginnen) eingeben."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Angerufene Nummern (zu)")," \u2013 Bedingung f\xfcr gerufene Nummern. Dies kann n\xfctzlich sein, wenn Sie Rufnummern haben, die mit bestimmten Abteilungen verbunden sind. So k\xf6nnen Sie beispielsweise eingehende Anrufe an Ihre Supportnummer anders behandeln als Anrufe an Ihre Vertriebstelefonnummer.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5870).Z,width:"1114",height:"902"})),(0,r.kt)("h3",{id:"algorithmus-zur-anruffilterung"},"Algorithmus zur Anruffilterung"),(0,r.kt)("p",null,"Wenn ein neuer Anruf bei Ihrer Cloud-Telefonanlage eintrifft, werden die Anrufinformationen nacheinander anhand aller definierten Anruf\xfcberpr\xfcfungsregeln \xfcberpr\xfcft. Die Anrufinformationen (ANI, DNIS und aktuelle Uhrzeit) werden mit den Bedingungen der einzelnen Regeln verglichen. Wenn mindestens eine dieser Regeln nicht \xfcbereinstimmt, wird die Regel \xfcbersprungen und die Verarbeitung wird mit der n\xe4chsten fortgesetzt. Wenn alle drei Bedingungen erf\xfcllt sind, werden die Aktionen der Regel ausgef\xfchrt, und es werden keine weiteren Regeln verarbeitet."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Die Reihenfolge der Regeln ist wichtig. Wenn der Anruf bei der Cloud PBX ankommt, werden die Regeln von oben nach unten \xfcberpr\xfcft. Die erste Regel, die auf den Anruf zutrifft, wird angewendet, die anderen Regeln werden ignoriert."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,'\xd6ffnen Sie das Men\xfc "',(0,r.kt)("strong",{parentName:"p"},"Anrufe")," => ",(0,r.kt)("strong",{parentName:"p"},"Eisntellungen")," => ",(0,r.kt)("strong",{parentName:"p"},"Anruffilter"),'" und \xe4ndern Sie die Reihenfolge der Regeln durch Ziehen und Ablegen.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(9448).Z,width:"1210",height:"678"})),(0,r.kt)("p",null,"Wenn keine der Regeln zutrifft (oder wenn keine Regeln f\xfcr die Anrufverarbeitung definiert wurden), wird die Standardregel wie folgt angewendet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Klingeln am IP-Telefon."),(0,r.kt)("li",{parentName:"ul"},"Wenn der Anruf nicht innerhalb einer bestimmten Zeit beantwortet wird (definiert durch den Parameter ",(0,r.kt)("strong",{parentName:"li"},"Zeit\xfcberschreitung"),' in "',(0,r.kt)("strong",{parentName:"li"},"Anrufeinstellungen"),'" einer ausgew\xe4hlten Durchwahl), und wenn die Telefonleitung eine Rufumleitung aktiviert hat, wird versucht, den Anruf mit den dort aufgef\xfchrten Telefonnummern zu verbinden.'),(0,r.kt)("li",{parentName:"ul"},'Wenn der Anruf immer noch nicht angenommen wird und die Telefonleitung die Funktion "',(0,r.kt)("strong",{parentName:"li"},"Unified messaging"),'" aktiviert hat, leiten Sie den Anruf an die Voicemail weiter; andernfalls lassen Sie den Anruf fallen.')),(0,r.kt)("h3",{id:"modus-f\xfcr-die-bearbeitung-eingehender-anrufe-gesch\xe4ftszeiten-arbeitsfreie-zeiten"},"Modus f\xfcr die Bearbeitung eingehender Anrufe (Gesch\xe4ftszeiten, arbeitsfreie Zeiten)"),(0,r.kt)("p",null,"Benutzer von Cloud-Telefonanlagen k\xf6nnen den Modus verwenden, um zu steuern, wann und wie Anrufe zu ihrer Telefonleitung durchgestellt werden, und schnell die Art und Weise \xe4ndern, wie eingehende Anrufe behandelt werden. Sie k\xf6nnen etwa ihren Modus so einstellen, dass sie w\xe4hrend der Gesch\xe4ftszeiten Anrufe annehmen, w\xe4hrend der arbeitsfreien Zeit alle Anrufe auf einmal an die Mailbox schicken und im Urlaub die Anrufe an einen anderen Kollegen weiterleiten. Cloud PBX-Benutzer k\xf6nnen den Modus f\xfcr ihre Durchwahl \xe4ndern, indem sie das IVR anrufen oder \xfcber ihre Web Portal."),(0,r.kt)("p",null,'Der Cloud PBX-Manager kann schnell die Art und Weise \xe4ndern, wie eingehende Anrufe f\xfcr alle Cloud PBX-Durchwahlen auf einmal behandelt werden. Angenommen, die gesamte Belegschaft muss wegen einer Brandschutz\xfcbung weg - der Cloud PBX-Manager \xf6ffnet das Men\xfc "',(0,r.kt)("strong",{parentName:"p"},"Cloud PBX")," => ",(0,r.kt)("strong",{parentName:"p"},"Durchwahlen"),'" und klickt auf "',(0,r.kt)("strong",{parentName:"p"},"Modus wechseln"),'" um den Modus von "',(0,r.kt)("strong",{parentName:"p"},"Standard"),'" auf "',(0,r.kt)("strong",{parentName:"p"},"Notfall"),'" zu \xe4ndern. Nun werden alle eingehenden Anrufe direkt auf die Mobiltelefone weitergeleitet, und jeder, der im B\xfcro anruft, erh\xe4lt weiterhin Hilfe.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5069).Z,width:"1077",height:"768"})),(0,r.kt)("p",null,"Das funktioniert folgendermassen:"),(0,r.kt)("p",null,'Angenommen, Ihr Unternehmen hat drei Modi konfiguriert: "',(0,r.kt)("strong",{parentName:"p"},"Gesch\xe4ftszeiten"),'", "',(0,r.kt)("strong",{parentName:"p"},"Arbeitsfreie Zeiten"),'", und "',(0,r.kt)("strong",{parentName:"p"},"Notfall"),'". Jeder Modus hat einen eindeutigen Dual-Tone Multi-Frequency (DTMF)-Code, der zum Umschalten verwendet wird. Mary, eine Handelsvertreterin, geht zum Gesch\xe4ftsessen (w\xe4hrend der Gesch\xe4ftszeiten) und m\xf6chte nicht, dass ihre Kollegen im B\xfcro durch Anrufe gest\xf6rt werden. Um also alle Anrufe auf einmal an die Voicemail weiterzuleiten, w\xe4hlt Mary auf ihrem Telefon ',"*",'61 und gibt den DTMF-Code f\xfcr den Modus "',(0,r.kt)("strong",{parentName:"p"},"Arbeitsfreie Zeiten"),'" an. Sobald der Modus ge\xe4ndert wird, nimmt Mary keine Anrufe mehr entgegen, weder von Kunden noch von anderen Agenten. Alle Anrufe werden an die Voicemail weitergeleitet. In zwei Stunden kommt Mary zur\xfcck ins B\xfcro. Sie w\xe4hlt erneut die Nummer ',"*","61 auf ihrem Telefon und stellt den Modus auf Gesch\xe4ftszeiten um, so dass sie jetzt Anrufe entgegennehmen kann."),(0,r.kt)("h3",{id:"einen-neuen-modus-hinzuf\xfcgen"},"Einen neuen Modus hinzuf\xfcgen"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},'Der Modus "Standard" ist im System vorhanden. Der DTMF-Code des Modus "Standard" ist immer Null (0). Dieser DTMF-Code wird verwendet, um in diesen Modus zu wechseln. Benutzer k\xf6nnen vom individuellen Sticky-Modus in den "Standard"-Modus wechseln, um weiterhin Anrufe gem\xe4ss den f\xfcr den "Standard"-Modus festgelegten Regeln zu empfangen.'))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,'\xd6ffnen Sie das Men\xfc "',(0,r.kt)("strong",{parentName:"p"},"Anrufe")," => ",(0,r.kt)("strong",{parentName:"p"},"Einstellungen")," => ",(0,r.kt)("strong",{parentName:"p"},"Anruffilter"),'" und klicken Sie auf "',(0,r.kt)("strong",{parentName:"p"},"Modus hinzuf\xfcgen"),'", um einen neuen Modus zu konfigurieren. Sie k\xf6nnen die folgenden Parameter f\xfcr einen Modus einstellen:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DTMF code")," \u2013 dies ist ein eindeutiger DTMF-Code f\xfcr den Modus. Die Benutzer w\xe4hlen sie, um in diesen Modus zu wechseln. Es stehen Ziffern von 1 bis 9 zur Verf\xfcgung."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L\xe4uft ab nach, Minuten"),' \u2013 dies ist die Dauer des Modus in Minuten, nach der der Modus automatisch in den Modus "',(0,r.kt)("strong",{parentName:"li"},"Standard"),'" wechselt. Zum Beispiel gibt es einen Modus "',(0,r.kt)("strong",{parentName:"li"},"Meeting"),'" mit 60 Minuten Dauer. Wenn Mary um 15 Uhr in den Modus "',(0,r.kt)("strong",{parentName:"li"},"Meeting"),'" wechselt, wechselt der Modus um 16 Uhr in den Modus "',(0,r.kt)("strong",{parentName:"li"},"Standard"),'".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sticky mode")," \u2013 wenn der Modus als sticky markiert ist, k\xf6nnen nur Erweiterungen diesen Modus einstellen. Wenn der Cloud PBX Manager alle Durchwahlen auf einen anderen Modus umstellt, hat diese \xc4nderung keinen Einfluss auf die Durchwahlen mit Sticky-Modus. Diese Durchwahlen verbleiben in diesem Modus, bis sie ihn \xfcber IVR oder ihrem Webportal \xe4ndern oder die Zeit\xfcberschreitung des Sticky-Modus endet.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7330).Z,width:"993",height:"758"})),(0,r.kt)("h3",{id:"antwortnachrichten-f\xfcr-eingehende-anrufe"},"Antwortnachrichten f\xfcr eingehende Anrufe"),(0,r.kt)("p",null,"Cloud PBX-Benutzer k\xf6nnen \xfcber IVR eine personalisierte Audionachricht aufzeichnen, die ihren Anrufern vor der Annahme des Anrufs, der Weiterleitung oder der Weiterleitung an die Voicemail vorgespielt wird."),(0,r.kt)("h3",{id:"eine-neue-antwortnachricht-hinzuf\xfcgen"},"Eine neue Antwortnachricht hinzuf\xfcgen"),(0,r.kt)("p",null,'Sie k\xf6nnen verschiedene Audiodateien hochladen, die als Antwortnachrichten f\xfcr Ihr Unternehmen verwendet werden k\xf6nnen. \xd6ffnen Sie das Men\xfc "',(0,r.kt)("strong",{parentName:"p"},"Anrufe")," => ",(0,r.kt)("strong",{parentName:"p"},"Einstellungen")," => ",(0,r.kt)("strong",{parentName:"p"},"Anruffilter"),'" und klicken Sie auf "',(0,r.kt)("strong",{parentName:"p"},"Nachricht hinzuf\xfcgen"),'", um eine neue Audiodatei hochzuladen.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3750).Z,width:"869",height:"663"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Die Audionachricht kann im .wav-, .mp3-, .og- oder .au-Format vorliegen und sollte eine Gr\xf6\xdfe von 3 MB nicht \xfcberschreiten."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Die von Cloud PBX-Benutzern hinzugef\xfcgte Nachricht \xfcberschreibt immer die vom Cloud PBX-Manager hinzugef\xfcgte Standardnachricht, unabh\xe4ngig davon, ob sie \xfcber die IVR aufgezeichnet oder \xfcber das Webportal hochgeladen wurde."),(0,r.kt)("h3",{id:"richtlinien"},"Richtlinien"),(0,r.kt)("p",null,"Die Richtlinie enth\xe4lt eine Reihe von Regeln, die festlegen, ob die Antwortnachricht (personalisierte Audionachricht, die dem Anrufer vor der Beantwortung des Anrufs vorgespielt wird) abgespielt werden soll und welche Anrufaktion angewendet werden soll (z. B. Klingeln, Weiterleiten, Voicemail). Ihre Cloud-Telefonanlage kann mehrere Richtlinien haben, z. B. eine Richtlinie f\xfcr jede Unternehmensabteilung."),(0,r.kt)("h3",{id:"eine-neue-richtlinie-hinzuf\xfcgen"},"Eine neue Richtlinie hinzuf\xfcgen"),(0,r.kt)("p",null,'\xd6ffnen Sie das Men\xfc "',(0,r.kt)("strong",{parentName:"p"},"Anrufe")," => ",(0,r.kt)("strong",{parentName:"p"},"Einstellungen")," => ",(0,r.kt)("strong",{parentName:"p"},"Anruffilter"),'" und klicken Sie auf "',(0,r.kt)("strong",{parentName:"p"},"Richtlinie hinzuf\xfcgen"),'", um eine neue Richtlinie zu konfigurieren.'),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"z. B. individuelle Richtlinien f\xfcr die Vertriebsabteilung, die Support-Abteilung und die IT-Support-Abteilung zur Erf\xfcllung ihrer SLA.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6150).Z,width:"1188",height:"717"})),(0,r.kt)("h3",{id:"regeln-zu-richtlinien-hinzuf\xfcgen"},"Regeln zu Richtlinien hinzuf\xfcgen"),(0,r.kt)("p",null,'Jede Richtlinie enth\xe4lt eine Reihe von Regeln. Klicken Sie auf "',(0,r.kt)("strong",{parentName:"p"},"Regel hinzuf\xfcgen"),'", um eine Regel zu der spezifischen Richtlinie hinzuzuf\xfcgen, indem Sie die entsprechenden Bedingungen ausw\xe4hlen:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Von")," \u2013 Bedingung f\xfcr die Rufnummer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Zu")," \u2013 Bedingung f\xfcr die Rufnummer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Period")," \u2013Aufrufzeitbedingung."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Modus")," \u2013 Modusbedingung.")),(0,r.kt)("p",null,'Legen Sie fest, welche Aktionen bei eingehenden Anrufen ausgef\xfchrt werden sollen, und w\xe4hlen Sie optional die Audiodatei in der Dropdown-Liste "',(0,r.kt)("strong",{parentName:"p"},"Antwortnachricht"),'" aus.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(557).Z,width:"1219",height:"875"})),(0,r.kt)("h3",{id:"richtlinien-aktivieren"},"Richtlinien aktivieren"),(0,r.kt)("p",null,'\xd6ffnen Sie die Registerkarte "',(0,r.kt)("strong",{parentName:"p"},"Anruffilter"),'", um eine Richtlinie f\xfcr eine bestimmte Nebenstelle oder eine automatische Vermittlung zu aktivieren.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(2757).Z,width:"1102",height:"642"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3090).Z,width:"1115",height:"597"})),(0,r.kt)("h3",{id:"service-codes"},"Service-Codes"),(0,r.kt)("p",null,'Cloud PBX-Benutzer k\xf6nnen Servicecodes zur Steuerung des Modus verwenden. \xd6ffnen Sie das Men\xfc "',(0,r.kt)("strong",{parentName:"p"},"Anrufe")," => ",(0,r.kt)("strong",{parentName:"p"},"Einstellungen")," => ",(0,r.kt)("strong",{parentName:"p"},"Servicecodes"),'", um Ihre Standard-Servicecodes zu \xfcberpr\xfcfen.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(5403).Z,width:"638",height:"283"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"z.B. ",(0,r.kt)("strong",{parentName:"em"},"62")," - Cloud PBX Management Standardcode (bei Aufruf \xe4ndert sich die Antwortmeldung f\xfcr alle Telefonleitungen eines bestimmten Kunden); ",(0,r.kt)("strong",{parentName:"em"},"61")," - individueller Management Standardcode (bei Aufruf \xe4ndert sich die Antwortmeldung f\xfcr eine einzelne Telefonleitung).")))}g.isMDXComponent=!0},7330:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Add_new_modes-57b0551fb3702cadadb4aca41ad55f92.png"},6150:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Add_new_policies-9d4852939f43971ead4f5ab623b968a6.png"},3750:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Add_new_response_messages-632b9047eceb462254cc77207293b60f.png"},557:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Add_new_rules_to_policies-d5ea0172013515bb615765cea04b8232.png"},9448:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Changing_order_of_rules-c0af9133f6fde1c2b516c906e2133745.gif"},2757:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Enable_policies-0f54464163e211cf76f2bc31d7afb90a.png"},3090:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Enable_policies_for_AA-1ab0e8182ba800b83a89067dabe0a6e4.png"},5870:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Modes-fdf19956da02dac7b351d700c8dd8b47.png"},5403:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Service_codes-944929ed00809ac08b5290ca54a36097.png"},5069:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Switch_modes-bce2e3c96e1dc667b843822ebe8adfe2.png"}}]);