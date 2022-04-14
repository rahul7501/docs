"use strict";(self.webpackChunkpmnnt_docs=self.webpackChunkpmnnt_docs||[]).push([[1887],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5500:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"OpenCart"},p=void 0,s={unversionedId:"integrate/ecomm/opencart",id:"integrate/ecomm/opencart",title:"OpenCart",description:"View on GitHub",source:"@site/docs/1-integrate/1-ecomm/2-opencart.md",sourceDirName:"1-integrate/1-ecomm",slug:"/integrate/ecomm/opencart",permalink:"/docs/integrate/ecomm/opencart",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"OpenCart"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/integrate/ecomm"},next:{title:"Shopify",permalink:"/docs/integrate/ecomm/shopify"}},c={},m=[{value:"Install/Update the plugin",id:"installupdate-the-plugin",level:2},{value:"Using plugin .zip file",id:"using-plugin-zip-file",level:3},{value:"Configure the plugin",id:"configure-the-plugin",level:2},{value:"Test the plugin",id:"test-the-plugin",level:2}],u={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{className:"button button--primary button--large",href:"http://www.github.com/pointcheckout/opencart"}," View on GitHub "),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"From downloading the plugin to requesting your first test payment, learn how to get started with the ",(0,o.kt)("strong",{parentName:"p"},"paymennt")," for OpenCart plugin."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide assumes that you have already ",(0,o.kt)("a",{parentName:"p",href:"https://docs.opencart.com/installation/"},"set up OpenCart"),"."))),(0,o.kt)("h2",{id:"installupdate-the-plugin"},"Install/Update the plugin"),(0,o.kt)("h3",{id:"using-plugin-zip-file"},"Using plugin .zip file"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to your OpenCart administrator panel."),(0,o.kt)("li",{parentName:"ol"},"Download the latest release ",(0,o.kt)("strong",{parentName:"li"},"pointcheckout-opencart-x.x.x.ocmod.zip")," file from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pointcheckout/opencart/releases"},"releases section")),(0,o.kt)("li",{parentName:"ol"},"In the admin page of your store, go to extensions->installer->upload"),(0,o.kt)("li",{parentName:"ol"},"Choose the downloaded ",(0,o.kt)("strong",{parentName:"li"},"pointcheckout-opencart-x.x.x.ocmod.zip")," file")),(0,o.kt)("h2",{id:"configure-the-plugin"},"Configure the plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to OpenCart administrator panel."),(0,o.kt)("li",{parentName:"ol"},"From the side menu, choose ",(0,o.kt)("strong",{parentName:"li"},"Extensions")," and from the Extension type select, choose ",(0,o.kt)("strong",{parentName:"li"},"Payments")," .\n",(0,o.kt)("img",{alt:"extensions",src:n(2552).Z,width:"1256",height:"830"})),(0,o.kt)("li",{parentName:"ol"},"From the extension list, Install the extension named PointCheckout Card Payment then press edit to configure your payment extension.\n",(0,o.kt)("img",{alt:"install extension",src:n(7234).Z,width:"1580",height:"886"})),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("strong",{parentName:"li"},"Enable Card Payment")," to ",(0,o.kt)("strong",{parentName:"li"},"Enabled")),(0,o.kt)("li",{parentName:"ol"},"Set the Mode to ",(0,o.kt)("strong",{parentName:"li"},"Testing"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter your ",(0,o.kt)("strong",{parentName:"li"},"API Key")," and ",(0,o.kt)("strong",{parentName:"li"},"API Secret")," as provided by your account manager."),(0,o.kt)("li",{parentName:"ol"},"Review and update the remaining configuration required."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Save")," icon on the top of the settings edit page.")),(0,o.kt)("p",null,"That's it! You're ready to start testing."),(0,o.kt)("h2",{id:"test-the-plugin"},"Test the plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to your shop's public URL and add a product to your cart."),(0,o.kt)("li",{parentName:"ol"},"Go to your cart then proceed\nto the checkout."),(0,o.kt)("li",{parentName:"ol"},"Enter the required customer and billing details."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"PointCheckout payment method"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Confirm Order"),". You will now be redirected to the ",(0,o.kt)("strong",{parentName:"li"},"paymennt.com")," payment page."),(0,o.kt)("li",{parentName:"ol"},"Enter the following card details:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Number: ",(0,o.kt)("inlineCode",{parentName:"li"},"4242 4242 4242 4242")),(0,o.kt)("li",{parentName:"ul"},"Expiry date: ",(0,o.kt)("inlineCode",{parentName:"li"},"12/25")),(0,o.kt)("li",{parentName:"ul"},"CVV: ",(0,o.kt)("inlineCode",{parentName:"li"},"100")),(0,o.kt)("li",{parentName:"ul"},"Name: ",(0,o.kt)("inlineCode",{parentName:"li"},"TEST USER")))),(0,o.kt)("li",{parentName:"ol"},"Accept the ",(0,o.kt)("strong",{parentName:"li"},"Terms & Conditions")," and click ",(0,o.kt)("strong",{parentName:"li"},"Pay"),". You will be redirected to the order confirmation page. If you entered a real email address in the billing details, you'll also receive an order confirmation email."),(0,o.kt)("li",{parentName:"ol"},"Log in to your OpenCart administrator panel."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Sales > Orders")," in the left menu. Your test order is displayed and has configured ",(0,o.kt)("inlineCode",{parentName:"li"},"Payment Success Status")," status. This indicates that the payment has been successfully processed.")))}d.isMDXComponent=!0},2552:function(e,t,n){t.Z=n.p+"assets/images/opencart-1-041c9e27c7ac4183a45f213f98f77480.png"},7234:function(e,t,n){t.Z=n.p+"assets/images/opencart-2-c675580a7e8931b8d58a1fb96754df47.png"}}]);