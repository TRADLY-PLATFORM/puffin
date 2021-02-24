(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),i=(n(0),n(190));const o={id:"domain",title:"Things to setup in your Domain",sidebar_label:"Domain"},a={id:"domain",isDocsHomePage:!1,title:"Things to setup in your Domain",description:"As everybusiness you will have a website domain as primary URL for different activities. Below is the list of things we need from your side",source:"@site/docs/domain.md",permalink:"/docs/domain",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/domain.md",sidebar_label:"Domain",sidebar:"someSidebar",previous:{title:"Platform information that need to be filled",permalink:"/docs/platform"},next:{title:"Appstore Setup",permalink:"/docs/appstore"}},c=[{value:"Domain Verification",id:"domain-verification",children:[]},{value:"Subdomains",id:"subdomains",children:[]}],s={rightToc:c};function l({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As everybusiness you will have a website domain as primary URL for different activities. Below is the list of things we need from your side"),Object(i.b)("h2",{id:"domain-verification"},"Domain Verification"),Object(i.b)("p",null,"The below picture provide why we need domain verification. ",Object(i.b)("strong",{parentName:"p"},"This is applicable for apps which are using email based registration")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add the domain name in the superadmin ")),Object(i.b)("img",{src:"/img/verifydomain.png",alt:"Adding TXT record",width:"500"}),"## Add TXT - Go to your domain registar, access the DNS settings - Add the TXT record, your superadmin should show a TXT record for to enter in your DNS settings",Object(i.b)("p",null,"Example: Below pic"),Object(i.b)("img",{src:"/img/addingtxt.png",alt:"Adding TXT record",width:"500"}),Object(i.b)("h2",{id:"subdomains"},"Subdomains"),Object(i.b)("p",null,"This is not applicable for all. We are still testing this approach\nSubdomains for subscription payment (in future)"))}l.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);