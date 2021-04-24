(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{161:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return a})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return p}));var n=i(2),o=(i(0),i(195));const r={id:"stripe-onboarding",title:"Stripe Connect Onboarding",sidebar_label:"Stripe Connect KYC"},a={id:"stripe-onboarding",isDocsHomePage:!1,title:"Stripe Connect Onboarding",description:"Onboarding / KYC Verification",source:"@site/docs/stripe-onboarding.md",permalink:"/docs/stripe-onboarding",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/stripe-onboarding.md",sidebar_label:"Stripe Connect KYC",sidebar:"someSidebar",previous:{title:"Location across apps",permalink:"/docs/location"},next:{title:"Setting up Stripe",permalink:"/docs/stripe"}},s=[{value:"Onboarding / KYC Verification",id:"onboarding--kyc-verification",children:[{value:"How our system works?",id:"how-our-system-works",children:[]},{value:"Stages in mobile flow",id:"stages-in-mobile-flow",children:[]}]},{value:"Email reminders",id:"email-reminders",children:[]},{value:"FAQ for your users",id:"faq-for-your-users",children:[{value:"What are the required documents?",id:"what-are-the-required-documents",children:[]},{value:"Is there a way to upload the documents by any other means? Does stripe provide any hosted panel for this?",id:"is-there-a-way-to-upload-the-documents-by-any-other-means-does-stripe-provide-any-hosted-panel-for-this",children:[]}]},{value:"Questions you might receive from your connected accounts",id:"questions-you-might-receive-from-your-connected-accounts",children:[{value:"I just received an email from Stripe. Who is Stripe? Is this email real?",id:"i-just-received-an-email-from-stripe-who-is-stripe-is-this-email-real",children:[]},{value:"Why am I being asked for information about who owns and manages my company?",id:"why-am-i-being-asked-for-information-about-who-owns-and-manages-my-company",children:[]},{value:"What happens if I do not update my information by the deadline?",id:"what-happens-if-i-do-not-update-my-information-by-the-deadline",children:[]},{value:"How do I update my information?",id:"how-do-i-update-my-information",children:[]}]}],c={rightToc:s};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"onboarding--kyc-verification"},"Onboarding / KYC Verification"),Object(o.b)("p",null,"Applicable to STRIPE CONNECTED ACCOUNTS, STRIPE EXPRESS. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Introduction of Stripe Onboarding")),Object(o.b)("p",null,"Refer: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stripe.com/en-au/connect/marketplaces"}),"https://stripe.com/en-au/connect/marketplaces")," (You can choose your country)"),Object(o.b)("img",{src:"/img/stripe-onboarding.png",alt:"stripe-onboarding",width:"800"}),Object(o.b)("p",null,"There is two types of connect account onboarding available, "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Connect Onboarding"),Object(o.b)("li",{parentName:"ul"},"OAuth")),Object(o.b)("p",null,"TradlyPlatform use Connect onboarding which has the advantage of where Stripe provides the portal for sellers/accounts to do the KYC process"),Object(o.b)("p",null,"With\xa0Express\xa0accounts, Stripe handles the onboarding and identity verification processes. The platform has the ability to specify\xa0charge types ( split charges, destination charges) and set the connected account\u2019s\xa0payout settings\xa0programmatically (example condition: To send payout once item is received) . "),Object(o.b)("p",null,"For Express account holders, Stripe provides an Express Dashboard (a lighter version of the Dashboard) that allows them to manage their personal information and see payouts to their bank."),Object(o.b)("p",null,"With Express, Stripe will proactively collect information when requirements change. For best practices on how to communicate to your users when this happens, see the below stripe official guide for Express accounts. "),Object(o.b)("h3",{id:"how-our-system-works"},"How our system works?"),Object(o.b)("img",{src:"/img/stripe-onboarding-flow.png",alt:"stripe-onboarding-flow",width:"800"}),Object(o.b)("h3",{id:"stages-in-mobile-flow"},"Stages in mobile flow"),Object(o.b)("img",{src:"/img/stripe-mobile-flow1.png",alt:"stripe-verification",width:"300"}),Object(o.b)("img",{src:"/img/stripe-mobile-flow2.png",alt:"stripe-verification",width:"300"}),Object(o.b)("img",{src:"/img/stripe-mobile-flow3.png",alt:"stripe-verification",width:"300"}),Object(o.b)("img",{src:"/img/stripe-mobile-flow4.png",alt:"stripe-verification",width:"300"}),Object(o.b)("h2",{id:"email-reminders"},"Email reminders"),Object(o.b)("p",null,"When a connect account have not finished their KYC process, Stripe will send out emails. "),Object(o.b)("img",{src:"/img/stripe-reminders-email.png",alt:"stripe-reminders-email",width:"800"}),Object(o.b)("img",{src:"/img/stripe-reminders-email1.png",alt:"stripe-reminders-email",width:"800"}),Object(o.b)("img",{src:"/img/stripe-reminders-email2.png",alt:"stripe-reminders-email",width:"800"}),Object(o.b)("h2",{id:"faq-for-your-users"},"FAQ for your users"),Object(o.b)("h3",{id:"what-are-the-required-documents"},"What are the required documents?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"What information are required: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://stripe.com/docs/connect/required-verification-information"}),"https://stripe.com/docs/connect/required-verification-information")," (change the country as per the below screenshot, find the information and platform owners should put in their support portal or somewhere. This way their users can onboard properly)"),Object(o.b)("li",{parentName:"ul"},"Any connected accounts can receive the payments"),Object(o.b)("li",{parentName:"ul"},"Payouts will happen ONCE the document verification is complete from Stripe side. (If platform owners want to check the status of connected account, visit stripe > Connected Accounts > Look for the user status)\nstripe-requirements")),Object(o.b)("img",{src:"/img/stripe-requirements.png",alt:"stripe-requirements",width:"700"}),Object(o.b)("p",null,"Additional information on the individual\nYou might need to collect a scan of an\xa0ID document (stripe official) \xa0to "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ID needed: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://stripe.com/docs/connect/identity-verification-api#acceptable-verification-documents"}),"https://stripe.com/docs/connect/identity-verification-api#acceptable-verification-documents"))),Object(o.b)("h3",{id:"is-there-a-way-to-upload-the-documents-by-any-other-means-does-stripe-provide-any-hosted-panel-for-this"},"Is there a way to upload the documents by any other means? Does stripe provide any hosted panel for this?"),Object(o.b)("p",null,"Yes according to stripe official resources, users can login to Stripe.com directly to upload their documents. (They can use the credentials they used when they try to signup with STRIPE on your app PAYMENT page, If they don\u2019t remember the password, they can use FORGET PASSWORD function). They need to use the same email they used for signing up with your app."),Object(o.b)("p",null,'"For Express account holders, Stripe provides an Express Dashboard (a lighter version of the Dashboard) that allows them to manage their personal information and see payouts to their bank." - Stripe'),Object(o.b)("p",null,"This way when they cannot complete the onboarding on our mobile app (where they missed any step, They can still do the rest on desktop browser or mobile browser"),Object(o.b)("p",null,"Some reference screenshots: "),Object(o.b)("img",{src:"/img/stripe-express-desktop1.png",alt:"stripe-verification",width:"700"}),Object(o.b)("img",{src:"/img/stripe-express-desktop2.png",alt:"stripe-verification",width:"700"}),Object(o.b)("img",{src:"/img/stripe-express-desktop3.png",alt:"stripe-verification",width:"700"}),Object(o.b)("img",{src:"/img/stripe-express-desktop4.png",alt:"stripe-verification",width:"700"}),Object(o.b)("img",{src:"/img/stripe-express-desktop5.png",alt:"stripe-verification",width:"700"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"For Platform Owners")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"When onboarding Express accounts to a Connect platform, you collect the required information for each account, and Stripe verifies it. If you update verified user information, Stripe must review it. If Stripe can\u2019t verify it, you have a grace period of 7 days to resolve any issues and complete verification."),Object(o.b)("li",{parentName:"ul"},"During this grace period, the account functionality remains the same. For example, if charges or payouts were previously enabled, they\u2019ll continue to be enabled until the grace period ends. The value of requirements.current_deadline determines the end of the grace period and isn\u2019t extended if you update additional information. Resolve all requirements by the end of the grace period to prevent charges or payouts from being disabled."),Object(o.b)("li",{parentName:"ul"},"If your express users are having issued with verification even after you have made efforts helping them, please have them reach to stripe  directly so we can assist.")))),Object(o.b)("h2",{id:"questions-you-might-receive-from-your-connected-accounts"},"Questions you might receive from your connected accounts"),Object(o.b)("p",null,"source: Stripe\nFeel free to adapt any of these responses for any communications to your users."),Object(o.b)("p",null,"If you are using Connect with Standard or Express accounts, Stripe will proactively reach out and collect information about your accounts whenever requirements change. This article covers best practices for communicating these changes to your accounts, as well as answers to a few common questions you may receive."),Object(o.b)("p",null,"Global compliance requirements are evolving, so information requirements are often updated. If your connected accounts are concerned or have questions about needing to supply additional information, reinforce that this is expected and that there should be no issues with their accounts\u2014you (and Stripe) are here to help them."),Object(o.b)("h3",{id:"i-just-received-an-email-from-stripe-who-is-stripe-is-this-email-real"},"I just received an email from Stripe. Who is Stripe? Is this email real?"),Object(o.b)("p",null,"We work with Stripe to enable payments for your business. Updating information about your account is important and required. These updates help protect against fraud and keep your account current with global Know Your Customer (KYC) regulations."),Object(o.b)("h3",{id:"why-am-i-being-asked-for-information-about-who-owns-and-manages-my-company"},"Why am I being asked for information about who owns and manages my company?"),Object(o.b)("p",null,"In certain countries, Stripe is required to collect, verify, and maintain information about a company\u2019s beneficial owners and directors. These requirements come from government regulators and help promote transparency and prevent financial crimes."),Object(o.b)("h3",{id:"what-happens-if-i-do-not-update-my-information-by-the-deadline"},"What happens if I do not update my information by the deadline?"),Object(o.b)("p",null,"If you cannot update your account information by the deadline, payouts to your bank account and your ability to accept payments will be paused. We want to make sure that does not happen, so please let us know how we can help."),Object(o.b)("h3",{id:"how-do-i-update-my-information"},"How do I update my information?"),Object(o.b)("p",null,"Follow the link from Stripe\u2019s email\u2014the form will prompt you with instructions on how to update your information. It should take less than 5 minutes to update your information. If you need help, you can reach out directly to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:support@stripe.com"}),"support@stripe.com")," or via chat and phone support."))}p.isMDXComponent=!0},195:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return h}));var n=i(0),o=i.n(n);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(i),m=n,h=d["".concat(a,".").concat(m)]||d[m]||u[m]||r;return i?o.a.createElement(h,s(s({ref:t},p),{},{components:i})):o.a.createElement(h,s({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<r;p++)a[p]=i[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"}}]);