(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{166:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(2),n=(r(0),r(195));const o={id:"ga",title:"Integrating Google Analytics",sidebar_label:"Google Analytics"},i={id:"ga",isDocsHomePage:!1,title:"Integrating Google Analytics",description:"Google Analytics is a analytics service offered by Google that tracks and reports website traffic, measure your advertising ROI, etc. It comes on top of the Firebase(Mandatory) we integrate for you.",source:"@site/docs/ga.md",permalink:"/docs/ga",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/ga.md",sidebar_label:"Google Analytics",sidebar:"someSidebar",previous:{title:"Integrating Firebase",permalink:"/docs/firebase"},next:{title:"Integrating Moengage",permalink:"/docs/moengage"}},c=[{value:"Setup for App",id:"setup-for-app",children:[]},{value:"Setup for Web",id:"setup-for-web",children:[]}],l={rightToc:c};function p({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Google Analytics is a analytics service offered by Google that tracks and reports website traffic, measure your advertising ROI, etc. It comes on top of the Firebase(Mandatory) we integrate for you. "),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://analytics.google.com/"}),"https://analytics.google.com/")),Object(n.b)("h2",{id:"setup-for-app"},"Setup for App"),Object(n.b)("p",null,"You might not need to do anything specifically for this, apart from opening a firebase account. It is automatically created for you under the same email you. It look like the below screenshot"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/img/ga-app.png",alt:"ga-app"}))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/img/ga-app2.png",alt:"ga-app2"})))),Object(n.b)("h2",{id:"setup-for-web"},"Setup for Web"),Object(n.b)("p",null,"This is applicable only if you have subscribed to our webapp product. If you are subscribed to full package, then we will use the same trackingID for the mobile. Hence you can have consolidated data. If you want to have separate property for web, you can provide seperately though. "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Open an account ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://analytics.google.com/"}),"here"),". "),Object(n.b)("li",{parentName:"ol"},"Select 'Web' as property."),Object(n.b)("li",{parentName:"ol"},"The tracking ID is a string like UA-000000-2. ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://support.google.com/analytics/answer/7372977?hl=en"}),"learn more"),". "),Object(n.b)("li",{parentName:"ol"},"Update the Tracking ID inside the SuperAdmin panel settings page"),Object(n.b)("li",{parentName:"ol"},"Our developers(for now) will update the tracking ID in your apps"),Object(n.b)("li",{parentName:"ol"},"You will start seeing the data in 24hours. You can use this ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en"}),"chrome plugin")," to see whether the update is done ")))}p.isMDXComponent=!0},195:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return g}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,g=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return r?n.a.createElement(g,c(c({ref:t},p),{},{components:r})):n.a.createElement(g,c({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);