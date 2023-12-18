"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},299:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Resumed",d={unversionedId:"widget/resumed",id:"widget/resumed",title:"Resumed",description:"If you want to read a more complete description of how to use this widget, see the Tutorial. But, if you is an advanced user, only install the package:",source:"@site/docs/widget/resumed.md",sourceDirName:"widget",slug:"/widget/resumed",permalink:"/django-image-uploader-widget/docs/widget/resumed",editUrl:"https://github.com/inventare/django-image-uploader-widget/blob/main/docs/docs/widget/resumed.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/django-image-uploader-widget/docs/widget/tutorial"},next:{title:"Accept Input Attribute",permalink:"/django-image-uploader-widget/docs/widget/accept"}},l=[],s={toc:l};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resumed"},"Resumed"),(0,o.kt)("p",null,"If you want to read a more complete description of how to use this widget, see the ",(0,o.kt)("a",{parentName:"p",href:"/django-image-uploader-widget/docs/widget/tutorial"},"Tutorial"),". But, if you is an advanced user, only install the package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install django-image-uploader-widget\n")),(0,o.kt)("p",null,"and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"image_uploader_widget")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.py"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# ...\n\nINSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'image_uploader_widget',\n]\n\n# ...\n")),(0,o.kt)("p",null,"And go to use it with your forms:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from django.forms import ModelForm\nfrom ecommerce.models import Product\nfrom image_uploader_widget.widgets import ImageUploaderWidget\n\nclass ProductForm(ModelForm):\n    class Meta:\n        model = Product\n        fields = ['name', 'image']\n        widgets = {\n            'image': ImageUploaderWidget()\n        }\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image Uploader Widget",src:n(4811).Z})))}c.isMDXComponent=!0},4811:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/form_demo-0d860345aab1bf3659448af668000f00.png"}}]);