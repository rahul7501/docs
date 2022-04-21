"use strict";(self.webpackChunkpmnnt_docs=self.webpackChunkpmnnt_docs||[]).push([[2826],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4966:function(e,t,r){var n=r(7294),o=r(4996);t.Z=function(e){var t=e.children,r=e.image,i=e.link,a=e.action;return n.createElement("div",{className:"card"},n.createElement("div",{className:"card__header"},n.createElement("h3",null,t)),n.createElement("div",{className:"card__image"},n.createElement("img",{src:(0,o.Z)(r),alt:"Image alt text",title:"Logo Title Text 1"})),n.createElement("div",{className:"card__footer"},n.createElement("a",{className:"button button--secondary button--block",href:(0,o.Z)(i)},a)))}},1437:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=r(4966),s=["components"],c={title:"software development kits",sidebar_label:"SDKs",slug:"/sdks"},l=void 0,d={unversionedId:"sdks/index",id:"sdks/index",title:"software development kits",description:"our software development kits remove the need to handle sensitive data by enabling you to process payments and transactions.",source:"@site/docs/4-sdks/index.mdx",sourceDirName:"4-sdks",slug:"/sdks",permalink:"/docs/sdks",tags:[],version:"current",frontMatter:{title:"software development kits",sidebar_label:"SDKs",slug:"/sdks"},sidebar:"docs",previous:{title:"refund checkout",permalink:"/docs/manage/refund"},next:{title:"ios sdk",permalink:"/docs/sdks/ios"}},u={},p=[{value:"mobile libraries",id:"mobile-libraries",level:2},{value:"server-side libraries",id:"server-side-libraries",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"our software development kits remove the need to handle sensitive data by enabling you to process payments and transactions."),(0,i.kt)("h2",{id:"mobile-libraries"},"mobile libraries"),(0,i.kt)("div",{class:"row"},(0,i.kt)("div",{class:"col col--4"},(0,i.kt)(a.Z,{image:"/img/docs/integrate/sdks/android-logo.svg",link:"/docs/integrate/sdks/android",action:"Android",mdxType:"Card"},"Android")),(0,i.kt)("div",{class:"col col--4"},(0,i.kt)(a.Z,{image:"/img/docs/integrate/sdks/ios-logo.svg",link:"/docs/integrate/sdks/ios",action:"iOS",mdxType:"Card"},"iOS"))),(0,i.kt)("h2",{id:"server-side-libraries"},"server-side libraries"),(0,i.kt)("div",{class:"row"},(0,i.kt)("div",{class:"col col--4"},(0,i.kt)(a.Z,{image:"/img/docs/integrate/sdks/php-logo.svg",link:"/docs/integrate/sdks/php",action:"php",mdxType:"Card"},"PHP"))))}f.isMDXComponent=!0}}]);