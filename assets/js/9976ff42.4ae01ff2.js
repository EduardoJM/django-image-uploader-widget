"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[446],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),m=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return i.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,g=c["".concat(d,".").concat(u)]||c[u]||p[u]||l;return t?i.createElement(g,o(o({ref:n},s),{},{components:t})):i.createElement(g,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var m=2;m<l;m++)o[m]=t[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9537:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var i=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],r={},d="Introduction",m={unversionedId:"intro",id:"version-0.0.6/intro",title:"Introduction",description:"Previews",source:"@site/versioned_docs/version-0.0.6/intro.md",sourceDirName:".",slug:"/intro",permalink:"/django-image-uploader-widget/docs/0.0.6/intro",editUrl:"https://github.com/inventare/django-image-uploader-widget/blob/main/docs/versioned_docs/version-0.0.6/intro.md",tags:[],version:"0.0.6",frontMatter:{}},s=[{value:"Previews",id:"previews",children:[{value:"Simple Image Upload Widget",id:"simple-image-upload-widget",children:[],level:3},{value:"Inline Multiple Images Upload",id:"inline-multiple-images-upload",children:[],level:3}],level:2},{value:"About",id:"about",children:[],level:2},{value:"Warning/Disclaimer",id:"warningdisclaimer",children:[],level:2},{value:"Install",id:"install",children:[{value:"1. Install using the pip:",id:"1-install-using-the-pip",children:[],level:3},{value:"2. Add this to the INSTALLED_APPS:",id:"2-add-this-to-the-installed_apps",children:[],level:3}],level:2},{value:"Using for single Image File Uploader",id:"using-for-single-image-file-uploader",children:[{value:"1. Create the model in the models.py",id:"1-create-the-model-in-the-modelspy",children:[],level:3},{value:"2. Create the form in the forms.py",id:"2-create-the-form-in-the-formspy",children:[],level:3},{value:"3. Create the admin in the admin.py",id:"3-create-the-admin-in-the-adminpy",children:[],level:3}],level:2},{value:"Using for multiple Image File Uploader Inline",id:"using-for-multiple-image-file-uploader-inline",children:[{value:"1. The model in models.py",id:"1-the-model-in-modelspy",children:[],level:3},{value:"2. Defining the inline editor in the admin.py",id:"2-defining-the-inline-editor-in-the-adminpy",children:[],level:3}],level:2}],p={toc:s};function c(e){var n=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("h2",{id:"previews"},"Previews"),(0,l.kt)("h3",{id:"simple-image-upload-widget"},"Simple Image Upload Widget"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Single File Uploader",src:t(349).Z})),(0,l.kt)("h3",{id:"inline-multiple-images-upload"},"Inline Multiple Images Upload"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Inline Multiple Images Upload",src:t(743).Z})),(0,l.kt)("h2",{id:"about"},"About"),(0,l.kt)("p",null,"One of the things that i did't like in the ",(0,l.kt)("strong",{parentName:"p"},"django-admin")," is the arcaic appearance and usability of the forms, specially in the image upload, then i decided to create this plugin (for a use in a personal project, but i decided to publish here)."),(0,l.kt)("h2",{id:"warningdisclaimer"},"Warning/Disclaimer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Warning"),": This was developed using the more recent version of django and i have not tested this with older django versions (because i created this for use in some recent projects). Is not my intentions to made this complete compatible with old versions of django, but if you want to try to use this with older versions of django and get some erros, please ",(0,l.kt)("strong",{parentName:"p"},"contact-me")," (or open a ",(0,l.kt)("strong",{parentName:"p"},"issue")," here) and we can talk about the errors and made this compatible to the version that you are geting errors."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("h3",{id:"1-install-using-the-pip"},"1. Install using the pip:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install django-image-uploader-widget\n")),(0,l.kt)("h3",{id:"2-add-this-to-the-installed_apps"},"2. Add this to the INSTALLED_APPS:"),(0,l.kt)("p",null,"Go to your ",(0,l.kt)("inlineCode",{parentName:"p"},"settings.py")," and add ",(0,l.kt)("inlineCode",{parentName:"p"},"image_uploader_widget")," to installed apps, then they like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"INSTALLED_APPS = [\n    'my_app.apps.MyAppConfig',\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'django.forms',\n    'image_uploader_widget',\n]\n")),(0,l.kt)("h2",{id:"using-for-single-image-file-uploader"},"Using for single Image File Uploader"),(0,l.kt)("h3",{id:"1-create-the-model-in-the-modelspy"},"1. Create the model in the models.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from django.db import models \n\nclass ExampleModel(models.Model):\n    image = models.ImageField('Image', null = True, blank = True)\n\n    def __str__(self):\n        return 'Example Model'\n\n    class Meta:\n        verbose_name = 'Example Model'\n        verbose_name_plural = 'Example Models'\n")),(0,l.kt)("h3",{id:"2-create-the-form-in-the-formspy"},"2. Create the form in the forms.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from django import forms\nfrom image_uploader_widget.widgets import ImageUploaderWidget\n\nclass ExampleForm(forms.ModelForm):\n\n    class Meta:\n        widgets = {\n            'image': ImageUploaderWidget(),\n        }\n        fields = '__all__'\n")),(0,l.kt)("h3",{id:"3-create-the-admin-in-the-adminpy"},"3. Create the admin in the admin.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from django.contrib import admin\nfrom . import models\nfrom . import forms\n\nclass ExampleAdmin(admin.ModelAdmin):\n    form = forms.ExampleForm\n\nadmin.site.register(models.ExampleModel, ExampleAdmin)\n")),(0,l.kt)("h2",{id:"using-for-multiple-image-file-uploader-inline"},"Using for multiple Image File Uploader Inline"),(0,l.kt)("p",null,"This is designed to be used with a model to store ",(0,l.kt)("strong",{parentName:"p"},"ONLY")," the image. See a example:"),(0,l.kt)("h3",{id:"1-the-model-in-modelspy"},"1. The model in models.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from django.db import models\n\nclass ExampleModel(models.Model):\n    image = models.ImageField('Image', null = True, blank = True)\n\n    def __str__(self):\n        return 'Example Model'\n\n    class Meta:\n        verbose_name = 'Example Model'\n        verbose_name_plural = 'Example Models'\n\nclass ExampleModelImage(models.Model):\n    example = models.ForeignKey(ExampleModel, on_delete = models.CASCADE)\n    image = models.ImageField('Image')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": See that the ",(0,l.kt)("strong",{parentName:"p"},"ExampleModelImage")," is a model created to store only images, that are linked to the ",(0,l.kt)("strong",{parentName:"p"},"ExampleModel"),", like the photos of a product in a shop basic model."),(0,l.kt)("h3",{id:"2-defining-the-inline-editor-in-the-adminpy"},"2. Defining the inline editor in the admin.py"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from django.contrib import admin\nfrom image_uploader_widget.admin import ImageUploaderInline\n\nfrom . import models\nfrom . import forms\n\nclass ExampleModelImageAdmin(ImageUploaderInline):\n    model = models.ExampleModelImage\n    fields = ['image']\n\nclass ExampleAdmin(admin.ModelAdmin):\n    form = forms.ExampleForm\n    inlines = [ExampleModelImageAdmin]\n\nadmin.site.register(models.ExampleModel, ExampleAdmin)\n")))}c.isMDXComponent=!0},743:function(e,n,t){n.Z=t.p+"assets/images/multiple-6f2e1eae80b46c27890a7998f0debb65.gif"},349:function(e,n,t){n.Z=t.p+"assets/images/single-d9d221a749c3a782a9b4210bb0885c60.gif"}}]);