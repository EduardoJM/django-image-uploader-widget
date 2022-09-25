"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1348],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],d={sidebar_position:2},u="Resumed",s={unversionedId:"widget/resumed",id:"version-0.2.0/widget/resumed",title:"Resumed",description:"If you want to read a more complete description of how to use this widget, see the Tutorial. But, if you is an advanced user, only install the package:",source:"@site/versioned_docs/version-0.2.0/widget/resumed.md",sourceDirName:"widget",slug:"/widget/resumed",permalink:"/django-image-uploader-widget/docs/0.2.0/widget/resumed",editUrl:"https://github.com/inventare/django-image-uploader-widget/blob/main/docs/versioned_docs/version-0.2.0/widget/resumed.md",tags:[],version:"0.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tutorial",permalink:"/django-image-uploader-widget/docs/0.2.0/widget/tutorial"},next:{title:"Tutorial",permalink:"/django-image-uploader-widget/docs/0.2.0/inline_admin/tutorial"}},l=[],c={toc:l};function p(e){var t=e.components,d=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resumed"},"Resumed"),(0,a.kt)("p",null,"If you want to read a more complete description of how to use this widget, see the ",(0,a.kt)("a",{parentName:"p",href:"/django-image-uploader-widget/docs/0.2.0/widget/tutorial"},"Tutorial"),". But, if you is an advanced user, only install the package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install django-image-uploader-widget\n")),(0,a.kt)("p",null,"and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"image_uploader_widget")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.py"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# ...\n\nINSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'image_uploader_widget',\n]\n\n# ...\n")),(0,a.kt)("p",null,"And go to use it with your forms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from django.forms import ModelForm\nfrom ecommerce.models import Product\nfrom image_uploader_widget.widgets import ImageUploaderWidget\n\nclass ProductForm(ModelForm):\n    class Meta:\n        model = Product\n        fields = ['name', 'image']\n        widgets = {\n            'image': ImageUploaderWidget()\n        }\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image Uploader Widget",src:n(4811).Z})))}p.isMDXComponent=!0},4811:function(e,t,n){t.Z=n.p+"assets/images/form_demo-0d860345aab1bf3659448af668000f00.png"}}]);