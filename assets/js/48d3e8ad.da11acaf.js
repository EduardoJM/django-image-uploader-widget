"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[949],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),m=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(t),g=r,u=s["".concat(d,".").concat(g)]||s[g]||c[g]||i;return t?a.createElement(u,o(o({ref:n},p),{},{components:t})):a.createElement(u,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7444:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},o="Tutorial",l={unversionedId:"inline_admin/tutorial",id:"inline_admin/tutorial",title:"Tutorial",description:"First, we need of some context: the image uploader inline is an inline admin editor (like the StackedInline or the TabularInline of the original django). This inline editor is created to make an multiple images manager widget using an model with an image field.",source:"@site/docs/inline_admin/tutorial.md",sourceDirName:"inline_admin",slug:"/inline_admin/tutorial",permalink:"/django-image-uploader-widget/docs/inline_admin/tutorial",editUrl:"https://github.com/inventare/django-image-uploader-widget/blob/main/docs/docs/inline_admin/tutorial.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Multiple Instances of Same Form",permalink:"/django-image-uploader-widget/docs/widget/multiple-instances-of-same-form"},next:{title:"Ordered Images Admin",permalink:"/django-image-uploader-widget/docs/inline_admin/ordered"}},d=[{value:"Creating a django project",id:"creating-a-django-project",children:[],level:2},{value:"Installing the widget",id:"installing-the-widget",children:[{value:"Warning",id:"warning",children:[],level:3}],level:2},{value:"Using the inline editor",id:"using-the-inline-editor",children:[],level:2}],m={toc:d};function p(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"First, we need of some context: the image uploader inline is an inline admin editor (like the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.0/ref/contrib/admin/#django.contrib.admin.StackedInline"},"StackedInline")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.0/ref/contrib/admin/#django.contrib.admin.TabularInline"},"TabularInline")," of the original django). This inline editor is created to make an multiple images manager widget using an model with an image field."),(0,r.kt)("h2",{id:"creating-a-django-project"},"Creating a django project"),(0,r.kt)("p",null,"First, create a project folder. Here we call it as ",(0,r.kt)("inlineCode",{parentName:"p"},"my-ecommerce"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-ecommerce\ncd my-ecommerce\n")),(0,r.kt)("p",null,"And, now, create a django project in this folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"django-admin startproject core .\n")),(0,r.kt)("p",null,"And, then, we have the folder structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"| - my-ecommerce\n  | - core\n    | - asgi.py\n    | - __init__.py\n    | - settings.py\n    | - urls.py\n    | - wsgi.py\n  | - manage.py\n")),(0,r.kt)("p",null,"Create our ",(0,r.kt)("strong",{parentName:"p"},"django")," application by running the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python manage.py startapp ecommerce\n")),(0,r.kt)("p",null,"And, now, we have a new, and more complex, folder structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"| - my-ecommerce\n  | - core\n    | - asgi.py\n    | - __init__.py\n    | - settings.py\n    | - urls.py\n    | - wsgi.py\n  | - ecommerce\n    | - migrations\n      | - __init__.py\n    | - admin.py\n    | - apps.py\n    | - __init__.py\n    | - models.py\n    | - tests.py\n    | - views.py\n  | - manage.py\n")),(0,r.kt)("h2",{id:"installing-the-widget"},"Installing the widget"),(0,r.kt)("p",null,"To install the widget, is possible to use the same instructions of the ",(0,r.kt)("a",{parentName:"p",href:"/django-image-uploader-widget/docs/intro"},"Introduction"),", and the first step is to install the package with pip:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install django-image-uploader-widget\n")),(0,r.kt)("p",null,"then, add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.py"),", in the case of this example: ",(0,r.kt)("inlineCode",{parentName:"p"},"core/settings.py")," file. To understand better the Applications, see the django documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/3.2/ref/applications/"},"Applications"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# core/settings.py\n# ...\n\nINSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'image_uploader_widget',\n]\n\n# ...\n")),(0,r.kt)("h3",{id:"warning"},"Warning"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Observation"),": note that the application name to be added on the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," are not equals to the pip package name / install name."),(0,r.kt)("h2",{id:"using-the-inline-editor"},"Using the inline editor"),(0,r.kt)("p",null,"This inline editor is created to be used directly with the django-admin interface. To show how to use it, go to create two basic models inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"ecommerce")," app (Add your app, ",(0,r.kt)("inlineCode",{parentName:"p"},"ecommerce")," in my case, at ",(0,r.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," is recommended):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# ecommerce/models.py\nfrom django.db import models\n\nclass Product(models.Model):\n    name = models.CharField(max_length=100)\n\n    def __str__(self):\n        return self.name\n    \n    class Meta:\n        verbose_name = 'Product'\n        verbose_name_plural = 'Products'\n\nclass ProductImage(models.Model):\n    product = models.ForeignKey(\n        Product,\n        related_name=\"images\",\n        on_delete=models.CASCADE\n    )\n    image = models.ImageField(\"image\")\n\n    def __str__(self):\n        return str(self.image)\n    \n    class Meta:\n        verbose_name = 'Product Image'\n        verbose_name_plural = 'Product Images'\n")),(0,r.kt)("p",null,"Now, inside our admin, we can create an primary ModelAdmin for the product:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# ecommerce/admin.py\nfrom django.contrib import admin\nfrom ecommerce.models import Product, ProductImage\n\n@admin.register(Product)\nclass ProductAdmin(admin.ModelAdmin):\n    pass\n")),(0,r.kt)("p",null,"And, now, we can define our inline widget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# ecommerce/admin.py\nfrom django.contrib import admin\nfrom ecommerce.models import Product, ProductImage\nfrom image_uploader_widget.admin import ImageUploaderInline\n\nclass ProductImageAdmin(ImageUploaderInline):\n    model = ProductImage\n\n@admin.register(Product)\nclass ProductAdmin(admin.ModelAdmin):\n    inlines = [ProductImageAdmin]\n")),(0,r.kt)("p",null,"And we got the inline editor working as well:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image Uploader Widget",src:t(8987).Z})))}p.isMDXComponent=!0},8987:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/admin_demo-786eb82bcf46ed11552cbad012b6d614.png"}}]);