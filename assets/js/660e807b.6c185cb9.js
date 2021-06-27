(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[2319],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),l=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?o.createElement(f,s(s({ref:r},p),{},{components:t})):o.createElement(f,s({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9958:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var o=t(2122),n=t(9756),a=(t(7294),t(3905)),s=["components"],i={id:"hooks_useframeprocessor",title:"Module: hooks/useFrameProcessor",sidebar_label:"hooks/useFrameProcessor",sidebar_position:0,custom_edit_url:null},c={unversionedId:"api/modules/hooks_useframeprocessor",id:"api/modules/hooks_useframeprocessor",isDocsHomePage:!1,title:"Module: hooks/useFrameProcessor",description:"Functions",source:"@site/docs/api/modules/hooks_useframeprocessor.md",sourceDirName:"api/modules",slug:"/api/modules/hooks_useframeprocessor",permalink:"/react-native-vision-camera/docs/api/modules/hooks_useframeprocessor",editUrl:null,version:"current",sidebar_label:"hooks/useFrameProcessor",sidebarPosition:0,frontMatter:{id:"hooks_useframeprocessor",title:"Module: hooks/useFrameProcessor",sidebar_label:"hooks/useFrameProcessor",sidebar_position:0,custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"Module: hooks/useCameraFormat",permalink:"/react-native-vision-camera/docs/api/modules/hooks_usecameraformat"},next:{title:"Module: PhotoFile",permalink:"/react-native-vision-camera/docs/api/modules/photofile"}},l=[{value:"Functions",id:"functions",children:[{value:"useFrameProcessor",id:"useframeprocessor",children:[]}]}],p={toc:l};function u(e){var r=e.components,t=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"useframeprocessor"},"useFrameProcessor"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"useFrameProcessor"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"frameProcessor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"FrameProcessor")),(0,a.kt)("p",null,"Returns a memoized Frame Processor function wich you can pass to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Camera>"),". (See ",(0,a.kt)("a",{parentName:"p",href:"https://mrousavy.github.io/react-native-vision-camera/docs/guides/frame-processors"},'"Frame Processors"'),")"),(0,a.kt)("p",null,"Make sure to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"'worklet'")," directive to the top of the Frame Processor function, otherwise it will not get compiled into a worklet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const frameProcessor = useFrameProcessor((frame) => {\n  'worklet'\n  const qrCodes = scanQRCodes(frame)\n  _log(`QR Codes: ${qrCodes}`)\n}, [])\n")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"frameProcessor")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"FrameProcessor")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The Frame Processor")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"dependencies")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"DependencyList")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The React dependencies which will be copied into the VisionCamera JS-Runtime.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FrameProcessor")),(0,a.kt)("p",null,"The memoized Frame Processor."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrousavy/react-native-vision-camera/blob/87e6bb7/src/hooks/useFrameProcessor.ts#L23"},"hooks/useFrameProcessor.ts:23")))}u.isMDXComponent=!0}}]);