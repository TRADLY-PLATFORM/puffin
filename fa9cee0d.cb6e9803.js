(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var i=a(2),n=a(7),r=(a(0),a(206)),l={id:"appstore",title:"Appstore Setup",sidebar_label:"Appstore"},o={id:"appstore",isDocsHomePage:!1,title:"Appstore Setup",description:"Here is the list of steps you need to do in AppStore before the release, steps to update the app, etc",source:"@site/docs/appstore.md",permalink:"/docs/appstore",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/appstore.md",sidebar_label:"Appstore",sidebar:"someSidebar",previous:{title:"Things to setup in your Domain",permalink:"/docs/domain"},next:{title:"Things to setup in playstore",permalink:"/docs/playstore"}},p=[{value:"Checklist",id:"checklist",children:[]},{value:"Official Resources",id:"official-resources",children:[]},{value:"If you are an organization",id:"if-you-are-an-organization",children:[]},{value:"Create a new app in Appstore connect",id:"create-a-new-app-in-appstore-connect",children:[{value:"Creating Provisioning profile",id:"creating-provisioning-profile",children:[]},{value:"Creating Distribution Certificate",id:"creating-distribution-certificate",children:[]},{value:"Create App Identifier",id:"create-app-identifier",children:[]},{value:"Creating Push Key",id:"creating-push-key",children:[]},{value:"Key ID",id:"key-id",children:[]},{value:"Team ID",id:"team-id",children:[]}]},{value:"Appstore Management",id:"appstore-management",children:[]},{value:"FIRST Release",id:"first-release",children:[]},{value:"App Review Management",id:"app-review-management",children:[]},{value:"App Update",id:"app-update",children:[]},{value:"IPA Upload to Appstore via transporter",id:"ipa-upload-to-appstore-via-transporter",children:[]}],c={rightToc:p};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Here is the list of steps you need to do in AppStore before the release, steps to update the app, etc"),Object(r.b)("h2",{id:"checklist"},"Checklist"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",Object(i.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(i.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Appstore access to us"),Object(r.b)("li",Object(i.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(i.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","TeamID"),Object(r.b)("li",Object(i.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(i.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Below steps for prelaunch, launch and update")),Object(r.b)("p",null,"Pre-requisite "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Decide whether you want as an individual licence or Organization"),Object(r.b)("li",{parentName:"ul"},"Organisation level license provides more benefits in terms of access management (Especially creating provisioning certificates)")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You must have a macOS running computer/laptop to complete the provisioning exercises. If you do not have, set up a call with us"))),Object(r.b)("p",null,"Below are the steps to create provisioning certificates"),Object(r.b)("h2",{id:"official-resources"},"Official Resources"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"or Read below steps from our developer's contribution (You can contribute if we are missing anything)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Creating Certificates ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://help.apple.com/developer-account/#/deveedc0daa0"}),"https://help.apple.com/developer-account/#/deveedc0daa0")),Object(r.b)("li",{parentName:"ul"},"Register app id: ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://help.apple.com/developer-account/#/dev1b35d6f83"}),"https://help.apple.com/developer-account/#/dev1b35d6f83")),Object(r.b)("li",{parentName:"ul"},"Create AppStore profile: ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://help.apple.com/developer-account/#/devbd904d1a5"}),"https://help.apple.com/developer-account/#/devbd904d1a5"))),Object(r.b)("h2",{id:"if-you-are-an-organization"},"If you are an organization"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Invite Tradly email we have given to you with Admin or Developer Access"),Object(r.b)("li",{parentName:"ul"},"If you do add as Developer access, you need to create the provisioning certificates (refer below steps) "),Object(r.b)("li",{parentName:"ul"},"If you do add as admin access, we take care of creating provisioning certificates ")),Object(r.b)("h2",{id:"create-a-new-app-in-appstore-connect"},"Create a new app in Appstore connect"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://appstoreconnect.apple.com/apps"}),"https://appstoreconnect.apple.com/apps")),Object(r.b)("li",{parentName:"ol"},"Click + Icon"),Object(r.b)("li",{parentName:"ol"},"Select \u2018New App\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018iOS\u2019 as a platform"),Object(r.b)("li",{parentName:"ol"},"Name - This is your app name"),Object(r.b)("li",{parentName:"ol"},"Primary language for the app"),Object(r.b)("li",{parentName:"ol"},"Select the bundle id for the app."),Object(r.b)("li",{parentName:"ol"},"SKU - just enter bundle id itself"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Full Access\u2019 for the User Access"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Create\u2019")),Object(r.b)("h3",{id:"creating-provisioning-profile"},"Creating Provisioning profile"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Account\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Certificates, Identifiers & Profiles\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Profiles\u2019"),Object(r.b)("li",{parentName:"ol"},"Click + Icon"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Appstore\u2019 Under Distribution"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),Object(r.b)("li",{parentName:"ol"},"Select the Bundle id\xa0"),Object(r.b)("li",{parentName:"ol"},"Select the certificate\xa0"),Object(r.b)("li",{parentName:"ol"},"Enter profile name (Example: appname_distributionprofile)"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Generate\u2019"),Object(r.b)("li",{parentName:"ol"},"Download this file and save ( .mobileprovision )")),Object(r.b)("h3",{id:"creating-distribution-certificate"},"Creating Distribution Certificate"),Object(r.b)("p",null,"It has few main steps"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create CSR"),Object(r.b)("li",{parentName:"ol"},"Register Certificate"),Object(r.b)("li",{parentName:"ol"},"Export Certificate")),Object(r.b)("h4",{id:"create-csr"},"Create CSR"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open \u2018Keychain Access App\u2019 on your Mac"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Keychain Access\u2019 in the menu bar"),Object(r.b)("li",{parentName:"ol"},"Open sub-menu under \u2018Certificate Assistant\u2019"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Request a certificate from certificate authority\u2019"),Object(r.b)("li",{parentName:"ol"},"Enter your Apple ID email address and name"),Object(r.b)("li",{parentName:"ol"},"Select the \u2018Saved to Disk\u2019 option"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),Object(r.b)("li",{parentName:"ol"},"Save the file somewhere on your Mac ( .certSigningRequest )")),Object(r.b)("h4",{id:"register-certificate"},"Register Certificate"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Account\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Certificates, Identifiers & Profiles\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Certificates\u2019"),Object(r.b)("li",{parentName:"ol"},"Click + Icon"),Object(r.b)("li",{parentName:"ol"},"Select iOS Distribution under Software"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),Object(r.b)("li",{parentName:"ol"},"Upload the file downloaded in the previous step"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Process\u2019"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Download\u2019"),Object(r.b)("li",{parentName:"ol"},"Save this file somewhere on your Mac ( .cer )")),Object(r.b)("h4",{id:"export-certificate"},"Export Certificate"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Please double click the file that downloaded in the previous step"),Object(r.b)("li",{parentName:"ol"},"This will open the Keychain Access app"),Object(r.b)("li",{parentName:"ol"},"Go to My Certificates"),Object(r.b)("li",{parentName:"ol"},"Select the certificate you opened\xa0"),Object(r.b)("li",{parentName:"ol"},"Right-click that certificate"),Object(r.b)("li",{parentName:"ol"},"Select the \u2018Export \u2026\u2019 option"),Object(r.b)("li",{parentName:"ol"},"Save the file with password\xa0( .p12 ) and password"),Object(r.b)("li",{parentName:"ol"},"Password can be empty. To keep it secure, please enter the password and save/remember the password")),Object(r.b)("h3",{id:"create-app-identifier"},"Create App Identifier"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Account\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Certificates, Identifiers & Profiles\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Identifier\u2019"),Object(r.b)("li",{parentName:"ol"},"Click + Icon"),Object(r.b)("li",{parentName:"ol"},"Select \u2018App IDs\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018App\u2019"),Object(r.b)("li",{parentName:"ol"},"Enter Description\xa0(you can put anything here for your reference)"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Explicit\u2019 for Bundle ID. \xa0"),Object(r.b)("li",{parentName:"ol"},"Enter your app ID. Ex: com.tradly.app"),Object(r.b)("li",{parentName:"ol"},"Please tick capabilities for the app. This might vary when we add more features to the product. For now, Please tick below -Associated Domains, Push Notifications"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Continue\u2019"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Register\u2019"),Object(r.b)("li",{parentName:"ol"},"This will generate your bundle id.")),Object(r.b)("h3",{id:"creating-push-key"},"Creating Push Key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to developer.apple.com"),Object(r.b)("li",{parentName:"ul"},"Click account"),Object(r.b)("li",{parentName:"ul"},"Select \u2018Certificates, Identifiers & Profiles\u2019"),Object(r.b)("li",{parentName:"ul"},"Select Keys"),Object(r.b)("li",{parentName:"ul"},"Click + Icon"),Object(r.b)("li",{parentName:"ul"},"Enter Key Name (Example: appname_pushkey )"),Object(r.b)("li",{parentName:"ul"},"Tick \u2018Apple Push Notification service)"),Object(r.b)("li",{parentName:"ul"},"Click Continue"),Object(r.b)("li",{parentName:"ul"},"Confirm Register"),Object(r.b)("li",{parentName:"ul"},"Download and share that file to our team")),Object(r.b)("h3",{id:"key-id"},"Key ID"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Account\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Certificates , Identifiers and Profiles\u2019"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Keys\u2019"),Object(r.b)("li",{parentName:"ol"},"Select the key you shared above"),Object(r.b)("li",{parentName:"ol"},"You will see the Key ID there. Please share that \u2018Key ID\u2019 .")),Object(r.b)("h3",{id:"team-id"},"Team ID"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0developer.apple.com"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Account\u2019 on Nav menu"),Object(r.b)("li",{parentName:"ol"},"Select \u2018Membership\u2019 on Side Menu"),Object(r.b)("li",{parentName:"ol"},"Please share that \u2018Team ID\u2019")),Object(r.b)("h2",{id:"appstore-management"},"Appstore Management"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When the team has access to your Appstore, we will directly upload the app(IPA) to your Testflight "),Object(r.b)("li",{parentName:"ul"},"You can test this app through Testflight apps on your iPhone to make sure everything is working properly before the release")),Object(r.b)("h2",{id:"first-release"},"FIRST Release"),Object(r.b)("p",null,"Once all is good with the testing, you can go ahead and set up a release. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create a new version "),Object(r.b)("div",Object(i.a)({parentName:"li"},{className:"admonition admonition-warning alert alert--danger"}),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Version Number")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The version number is shown on the App Store and should match the one we used in Xcode.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Enter "What\'s new in this version"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Update screenshots (You can take screenshots from the Testflight app )")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Enter promotional text, descriptions, keywords, Support URL, MArketing URL ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add assets like App store icon, "),Object(r.b)("div",Object(i.a)({parentName:"li"},{className:"admonition admonition-warning alert alert--danger"}),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"App Review Information")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Provide WORKING sign-in information for apple to sign in to your app and do the review. If you provide the wrong information, it will delay your app review. ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Notes under App Review information. Below is an example of text what we provide to Apple to guide them on how they can use the app. "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Steps to experience the app")),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},'You need an approved tenantID before login in to the app. Use "tradlysocial" case sensitive on the first page'),Object(r.b)("li",{parentName:"ol"},"Use the login address above to follow a store, making a purchase with COD or adding listings, etc. "),Object(r.b)("li",{parentName:"ol"},"Logout option available in the MORE section through Navbar")))),Object(r.b)("p",null,"VIDEO GUIDE: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://drive.google.com/file/d/1AZMB1CNFGUsNi4n_GM62a93Xvk9QIpen/view?usp=sharing"}),"https://drive.google.com/file/d/1AZMB1CNFGUsNi4n_GM62a93Xvk9QIpen/view?usp=sharing")),Object(r.b)("h2",{id:"app-review-management"},"App Review Management"),Object(r.b)("p",null,"Apple may review the app within a week. If you get approved, GREAT! If not, we will help you wherever you can. But remember you need to take care of this place by reading the messages you receive from them, reply properly. If any doubts on what to reply, ask us. "),Object(r.b)("h2",{id:"app-update"},"App Update"),Object(r.b)("p",null,"Similar to the app release, we will directly push the app to your Testflight. You can do the same process of testing, creating a release, and pushing the app to Appstore.\nReleasing UPDATE BUILD"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to\xa0",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://appstoreconnect.apple.com/apps"}),"https://appstoreconnect.apple.com/apps")),Object(r.b)("li",{parentName:"ol"},"Select your app"),Object(r.b)("li",{parentName:"ol"},"Create new version"),Object(r.b)("li",{parentName:"ol"},"Enter your version"),Object(r.b)("li",{parentName:"ol"},"Please fill \u2018Whats new in the version\u2019"),Object(r.b)("li",{parentName:"ol"},"Scroll down and Go to \u2018Build\u2019 section"),Object(r.b)("li",{parentName:"ol"},"Please select the latest build you have uploaded on last step ( you can identify by version number and build number )"),Object(r.b)("li",{parentName:"ol"},"Please select the Release options that you want. ( Automatic or Manual ) ( you can release automatically when apple approved , you can manually release after apple approved ) ."),Object(r.b)("li",{parentName:"ol"},"Click \u2018Save\u2019"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Submit for review\u2019")),Object(r.b)("h2",{id:"ipa-upload-to-appstore-via-transporter"},"IPA Upload to Appstore via transporter"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Uploading App to Appstore Connect via Transporter"),Object(r.b)("li",{parentName:"ol"},"Download Transporter app from Appstore -\xa0",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://apps.apple.com/us/app/transporter/id1450874784?mt=12"}),"https://apps.apple.com/us/app/transporter/id1450874784?mt=12")),Object(r.b)("li",{parentName:"ol"},"Login using your apple account"),Object(r.b)("li",{parentName:"ol"},"Drag and drop the .ipa file delivered by us on Transporter app"),Object(r.b)("li",{parentName:"ol"},"Click \u2018Delivery\u2019 Button"),Object(r.b)("li",{parentName:"ol"},"It will take some to upload build to your app store connect\xa0"),Object(r.b)("li",{parentName:"ol"},"Once build uploaded and it will be available on TestFlight for testing"),Object(r.b)("li",{parentName:"ol"},"Once testing done, you can create new release and upload build")))}b.isMDXComponent=!0},206:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(a),d=i,u=s["".concat(l,".").concat(d)]||s[d]||m[d]||r;return a?n.a.createElement(u,o(o({ref:t},c),{},{components:a})):n.a.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);