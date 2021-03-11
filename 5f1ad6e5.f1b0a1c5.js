(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(7),o=(r(0),r(192)),i={id:"firebase",title:"Integrating Firebase",sidebar_label:"Firebase"},c={id:"firebase",isDocsHomePage:!1,title:"Integrating Firebase",description:"Introduction",source:"@site/docs/firebase.md",permalink:"/docs/firebase",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/firebase.md",sidebar_label:"Firebase",sidebar:"someSidebar",previous:{title:"Integrating Facebook Pixels & Analytics",permalink:"/docs/facebookapp"},next:{title:"Integrating Google Analytics",permalink:"/docs/ga"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Step by Step",id:"step-by-step",children:[]}],b={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Firebase which is owned by Google provide multiple set of features more specifically focused on Mobile app and gradually bringing new features for web apps as well.\nHaving a glance the URL : ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://firebase.google.com/"}),"https://firebase.google.com/")," can tell you every list of features they offer. Apart from confidential notes, we use firebase to allow you to "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check your app stability and Performance using their Crashlytics"),Object(o.b)("li",{parentName:"ul"},"We use App Distribution to share pre-release built with you, so you can share with your team to test the app before it get's published"),Object(o.b)("li",{parentName:"ul"},"It does bring you out of box features like Dynamic Links, Predictions, Cloud Messaging, etc.")),Object(o.b)("p",null,"Firebase done a good job of explaining each features through a short video on every page you navigate, so you will be educated if this is the first time you are using Firebase."),Object(o.b)("h2",{id:"step-by-step"},"Step by Step"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://firebase.google.com/?utm_source=tradly-platform&utm_campaign=portal&utm_medium=portal"}),"Firebase")," "),Object(o.b)("li",{parentName:"ol"},"Signup for a free account using your gmail account (It is recommended to have one GmailID or GoogleApps email for all your signup like this)"),Object(o.b)("li",{parentName:"ol"},"Create a new project as you see here ",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-newproject.png",alt:"fb-newproject"}))),Object(o.b)("li",{parentName:"ol"},"Name your project ",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-nameit.png",alt:"fb-nameit"}))),Object(o.b)("li",{parentName:"ol"},"As Google analytics comes on top of firebase and it's free. Consider enabling to get free mobile app analytics ",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-enablega.png",alt:"fb-enablega"}))),Object(o.b)("li",{parentName:"ol"},"You will not find anything like ist... but you need to create your Google cloud solution account as well  ",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-addgcp.png",alt:"fb-addgcp"}))),Object(o.b)("li",{parentName:"ol"},"From here you can go to upgrade your billing option as Blaze plan is necessary ",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-upgrade.png",alt:"fb-upgrade"}))),Object(o.b)("li",{parentName:"ol"},"Choose Blaze plan which is pay as you go plan ",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-blaze.png",alt:"fb-blaze"}))),Object(o.b)("li",{parentName:"ol"},"From here you can find the access control ",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-users.png",alt:"fb-users"}))),Object(o.b)("li",{parentName:"ol"},"Add TradlyTeam email sent to you as owner ",Object(o.b)("img",Object(a.a)({parentName:"li"},{src:"/img/fb-owner.png",alt:"fb-owner"})))),Object(o.b)("p",null,"Note: Blaze plan is mandatory to deploy push notification for chat messages"))}s.isMDXComponent=!0},192:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return r?n.a.createElement(m,c(c({ref:t},b),{},{components:r})):n.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);