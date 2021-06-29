(self.webpackChunkpuffinv_3=self.webpackChunkpuffinv_3||[]).push([[7192],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),g=a,d=f["".concat(c,".").concat(g)]||f[g]||u[g]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1975:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={id:"ga",title:"Integrating Google Analytics",sidebar_label:"Google Analytics"},c={unversionedId:"ga",id:"ga",isDocsHomePage:!1,title:"Integrating Google Analytics",description:"Google Analytics is a analytics service offered by Google that tracks and reports website traffic, measure your advertising ROI, etc. It comes on top of the Firebase(Mandatory) we integrate for you.",source:"@site/docs/ga.md",sourceDirName:".",slug:"/ga",permalink:"/docs/ga",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v3/docs/ga.md",version:"current",sidebar_label:"Google Analytics",frontMatter:{id:"ga",title:"Integrating Google Analytics",sidebar_label:"Google Analytics"},sidebar:"mySidebar",previous:{title:"Integrating Firebase",permalink:"/docs/firebase"},next:{title:"Integrating Moengage",permalink:"/docs/moengage"}},s=[{value:"Setup for App",id:"setup-for-app",children:[]},{value:"Setup for Web",id:"setup-for-web",children:[]}],p={toc:s};function u(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Google Analytics is a analytics service offered by Google that tracks and reports website traffic, measure your advertising ROI, etc. It comes on top of the Firebase(Mandatory) we integrate for you. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://analytics.google.com/"},"https://analytics.google.com/")),(0,o.kt)("h2",{id:"setup-for-app"},"Setup for App"),(0,o.kt)("p",null,"You might not need to do anything specifically for this, apart from opening a firebase account. It is automatically created for you under the same email you. It look like the below screenshot"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"ga-app",src:r(3080).Z})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"ga-app2",src:r(8894).Z}))),(0,o.kt)("h2",{id:"setup-for-web"},"Setup for Web"),(0,o.kt)("p",null,"This is applicable only if you have subscribed to our webapp product. If you are subscribed to full package, then we will use the same trackingID for the mobile. Hence you can have consolidated data. If you want to have separate property for web, you can provide seperately though. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open an account ",(0,o.kt)("a",{parentName:"li",href:"https://analytics.google.com/"},"here"),". "),(0,o.kt)("li",{parentName:"ol"},"Select 'Web' as property."),(0,o.kt)("li",{parentName:"ol"},"The tracking ID is a string like UA-000000-2. ",(0,o.kt)("a",{parentName:"li",href:"https://support.google.com/analytics/answer/7372977?hl=en"},"learn more"),". "),(0,o.kt)("li",{parentName:"ol"},"Update the Tracking ID inside the SuperAdmin panel settings page"),(0,o.kt)("li",{parentName:"ol"},"Our developers(for now) will update the tracking ID in your apps"),(0,o.kt)("li",{parentName:"ol"},"You will start seeing the data in 24hours. You can use this ",(0,o.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en"},"chrome plugin")," to see whether the update is done")))}u.isMDXComponent=!0},3080:function(e,t,r){"use strict";t.Z=r.p+"assets/images/ga-app-6538c50e283e26d089cb79b07cc91fd5.png"},8894:function(e,t,r){"use strict";t.Z=r.p+"assets/images/ga-app2-1b794a588f8cb4bf1ed792c9b04dc80d.png"}}]);