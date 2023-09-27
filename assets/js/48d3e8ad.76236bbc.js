"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[949],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),u=r,g=s["".concat(d,".").concat(u)]||s[u]||m[u]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7444:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:1},d="Tutorial",c={unversionedId:"inline_admin/tutorial",id:"inline_admin/tutorial",title:"Tutorial",description:"First, we need of some context: the image uploader inline is an inline admin editor (like the StackedInline or the TabularInline of the original django). This inline editor is created to make an multiple images manager widget using an model with an image field.",source:"@site/docs/inline_admin/tutorial.md",sourceDirName:"inline_admin",slug:"/inline_admin/tutorial",permalink:"/django-image-uploader-widget/docs/inline_admin/tutorial",editUrl:"https://github.com/inventare/django-image-uploader-widget/blob/main/docs/docs/inline_admin/tutorial.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Accept Input Attribute",permalink:"/django-image-uploader-widget/docs/widget/accept"},next:{title:"Accept Input Attribute",permalink:"/django-image-uploader-widget/docs/inline_admin/accept"}},p=[{value:"Creating a django project",id:"creating-a-django-project",children:[],level:2},{value:"Installing the widget",id:"installing-the-widget",children:[{value:"Warning",id:"warning",children:[],level:3}],level:2},{value:"Using the inline editor",id:"using-the-inline-editor",children:[],level:2}],m={toc:p};function s(e){var n=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tutorial"},"Tutorial"),(0,i.kt)("p",null,"First, we need of some context: the image uploader inline is an inline admin editor (like the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.0/ref/contrib/admin/#django.contrib.admin.StackedInline"},"StackedInline")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.0/ref/contrib/admin/#django.contrib.admin.TabularInline"},"TabularInline")," of the original django). This inline editor is created to make an multiple images manager widget using an model with an image field."),(0,i.kt)("h2",{id:"creating-a-django-project"},"Creating a django project"),(0,i.kt)("p",null,"First, create a project folder. Here we call it as ",(0,i.kt)("inlineCode",{parentName:"p"},"my-ecommerce"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-ecommerce\ncd my-ecommerce\n")),(0,i.kt)("p",null,"And, now, create a django project in this folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"django-admin startproject core .\n")),(0,i.kt)("p",null,"And, then, we have the folder structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"| - my-ecommerce\n  | - core\n    | - asgi.py\n    | - __init__.py\n    | - settings.py\n    | - urls.py\n    | - wsgi.py\n  | - manage.py\n")),(0,i.kt)("p",null,"Create our ",(0,i.kt)("strong",{parentName:"p"},"django")," application by running the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python manage.py startapp ecommerce\n")),(0,i.kt)("p",null,"And, now, we have a new, and more complex, folder structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"| - my-ecommerce\n  | - core\n    | - asgi.py\n    | - __init__.py\n    | - settings.py\n    | - urls.py\n    | - wsgi.py\n  | - ecommerce\n    | - migrations\n      | - __init__.py\n    | - admin.py\n    | - apps.py\n    | - __init__.py\n    | - models.py\n    | - tests.py\n    | - views.py\n  | - manage.py\n")),(0,i.kt)("h2",{id:"installing-the-widget"},"Installing the widget"),(0,i.kt)("p",null,"To install the widget, is possible to use the same instructions of the ",(0,i.kt)("a",{parentName:"p",href:"/django-image-uploader-widget/docs/intro"},"Introduction"),", and the first step is to install the package with pip:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install django-image-uploader-widget\n")),(0,i.kt)("p",null,"then, add it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.py"),", in the case of this example: ",(0,i.kt)("inlineCode",{parentName:"p"},"core/settings.py")," file. To understand better the Applications, see the django documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/3.2/ref/applications/"},"Applications"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# core/settings.py\n# ...\n\nINSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'image_uploader_widget',\n]\n\n# ...\n")),(0,i.kt)("h3",{id:"warning"},"Warning"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Observation"),": note that the application name to be added on the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," are not equals to the pip package name / install name."),(0,i.kt)("h2",{id:"using-the-inline-editor"},"Using the inline editor"),(0,i.kt)("p",null,"This inline editor is created to be used directly with the django-admin interface. To show how to use it, go to create two basic models inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"ecommerce")," app (Add your app, ",(0,i.kt)("inlineCode",{parentName:"p"},"ecommerce")," in my case, at ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," is recommended):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# ecommerce/models.py\nfrom django.db import models\n\nclass Product(models.Model):\n    name = models.CharField(max_length=100)\n\n    def __str__(self):\n        return self.name\n    \n    class Meta:\n        verbose_name = 'Product'\n        verbose_name_plural = 'Products'\n\nclass ProductImage(models.Model):\n    product = models.ForeignKey(\n        Product,\n        related_name=\"images\",\n        on_delete=models.CASCADE\n    )\n    image = models.ImageField(\"image\")\n\n    def __str__(self):\n        return str(self.image)\n    \n    class Meta:\n        verbose_name = 'Product Image'\n        verbose_name_plural = 'Product Images'\n")),(0,i.kt)("p",null,"Now, inside our admin, we can create an primary ModelAdmin for the product:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# ecommerce/admin.py\nfrom django.contrib import admin\nfrom ecommerce.models import Product, ProductImage\n\n@admin.register(Product)\nclass ProductAdmin(admin.ModelAdmin):\n    pass\n")),(0,i.kt)("p",null,"And, now, we can define our inline widget:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# ecommerce/admin.py\nfrom django.contrib import admin\nfrom ecommerce.models import Product, ProductImage\nfrom image_uploader_widget.admin import ImageUploaderInline\n\nclass ProductImageAdmin(ImageUploaderInline):\n    model = ProductImage\n\n@admin.register(Product)\nclass ProductAdmin(admin.ModelAdmin):\n    inlines = [ProductImageAdmin]\n")),(0,i.kt)("p",null,"And we got the inline editor working as well:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image Uploader Widget",src:t(8987).Z})))}s.isMDXComponent=!0},8987:function(e,n,t){n.Z=t.p+"assets/images/admin_demo-786eb82bcf46ed11552cbad012b6d614.png"}}]);