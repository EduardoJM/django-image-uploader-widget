"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/django-image-uploader-widget/docs/intro","docId":"intro"},{"type":"category","label":"Widget","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Tutorial","href":"/django-image-uploader-widget/docs/widget/tutorial","docId":"widget/tutorial"},{"type":"link","label":"Resumed","href":"/django-image-uploader-widget/docs/widget/resumed","docId":"widget/resumed"},{"type":"link","label":"Accept Input Attribute","href":"/django-image-uploader-widget/docs/widget/accept","docId":"widget/accept"},{"type":"link","label":"Multiple Instances of Same Form","href":"/django-image-uploader-widget/docs/widget/multiple-instances-of-same-form","docId":"widget/multiple-instances-of-same-form"}]},{"type":"category","label":"Inline Admin","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Tutorial","href":"/django-image-uploader-widget/docs/inline_admin/tutorial","docId":"inline_admin/tutorial"},{"type":"link","label":"Ordered Images Admin","href":"/django-image-uploader-widget/docs/inline_admin/ordered","docId":"inline_admin/ordered"},{"type":"link","label":"Accept Input Attribute","href":"/django-image-uploader-widget/docs/inline_admin/accept","docId":"inline_admin/accept"}]},{"type":"category","label":"Customization","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Colors","href":"/django-image-uploader-widget/docs/customization/colors","docId":"customization/colors"},{"type":"link","label":"Text And Icons","href":"/django-image-uploader-widget/docs/customization/text-and-icons","docId":"customization/text-and-icons"}]},{"type":"category","label":"Development","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Tests","href":"/django-image-uploader-widget/docs/development/tests","docId":"development/tests"},{"type":"category","label":"Architecture Decision Records","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"ADR 0000: Why jQuery?","href":"/django-image-uploader-widget/docs/development/architecture-decision-records/why-jquery","docId":"development/architecture-decision-records/why-jquery"},{"type":"link","label":"ADR 0001: Why functional tests?","href":"/django-image-uploader-widget/docs/development/architecture-decision-records/why-functional-tests","docId":"development/architecture-decision-records/why-functional-tests"},{"type":"link","label":"ADR 0002: Why UI regression tests?","href":"/django-image-uploader-widget/docs/development/architecture-decision-records/why-ui-regression-tests","docId":"development/architecture-decision-records/why-ui-regression-tests"},{"type":"link","label":"ADR 0003: Why Playwright?","href":"/django-image-uploader-widget/docs/development/architecture-decision-records/why-playwright","docId":"development/architecture-decision-records/why-playwright"}]}]}]},"docs":{"customization/colors":{"id":"customization/colors","title":"Colors","description":"To customize the image uploader widget colors you can use your own css file to override the css variables defined by the image-uploader-inline.css and image-uploader-widget.css. See an example, taken from another personal private project:","sidebar":"tutorialSidebar"},"customization/text-and-icons":{"id":"customization/text-and-icons","title":"Text And Icons","description":"To customize the image uploader widget or inline you can set some variables (this feature is based on the issue #77). In this page we talk about how to, easy, change the texts and icons on that lib.","sidebar":"tutorialSidebar"},"development/architecture-decision-records/why-functional-tests":{"id":"development/architecture-decision-records/why-functional-tests","title":"ADR 0001: Why functional tests?","description":"November 2023 . Eduardo Oliveira","sidebar":"tutorialSidebar"},"development/architecture-decision-records/why-jquery":{"id":"development/architecture-decision-records/why-jquery","title":"ADR 0000: Why jQuery?","description":"November 2023 . Eduardo Oliveira","sidebar":"tutorialSidebar"},"development/architecture-decision-records/why-playwright":{"id":"development/architecture-decision-records/why-playwright","title":"ADR 0003: Why Playwright?","description":"December 2023 . Eduardo Oliveira","sidebar":"tutorialSidebar"},"development/architecture-decision-records/why-ui-regression-tests":{"id":"development/architecture-decision-records/why-ui-regression-tests","title":"ADR 0002: Why UI regression tests?","description":"November 2023 . Eduardo Oliveira","sidebar":"tutorialSidebar"},"development/tests":{"id":"development/tests","title":"Tests","description":"To maintain the integrity of the features of this project we have written some integration tests to grant that main features of the widget and inline admin is really good.","sidebar":"tutorialSidebar"},"inline_admin/accept":{"id":"inline_admin/accept","title":"Accept Input Attribute","description":"Like as the Widget accept attribute, see reference here, we have an way to customize the accept of the ImageUploaderInline. To customize it, use the accept property inside an class that inherits from ImageUploaderInline, like:","sidebar":"tutorialSidebar"},"inline_admin/ordered":{"id":"inline_admin/ordered","title":"Ordered Images Admin","description":"The first thing needed to understand the ordered version of the ImageUploaderInline is read the inline tutorial. This page has a documentation of how to extend the ImageUploaderInline with order field to allow to reorder, by clicking and dragging, the images inside the inline.","sidebar":"tutorialSidebar"},"inline_admin/tutorial":{"id":"inline_admin/tutorial","title":"Tutorial","description":"First, we need of some context: the image uploader inline is an inline admin editor (like the StackedInline or the TabularInline of the original django). This inline editor is created to make an multiple images manager widget using an model with an image field.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"The django-image-uploader-widget is a widget to django, specially django-admin to handle better image uploads with a modern and beautiful user interface.","sidebar":"tutorialSidebar"},"widget/accept":{"id":"widget/accept","title":"Accept Input Attribute","description":"When working with HTML ` element, we have an accept=\\"\\"` attribute that works defining the visible file types into the file picker dialog. An better, and complete, description of this attribute can be found at MDN.","sidebar":"tutorialSidebar"},"widget/multiple-instances-of-same-form":{"id":"widget/multiple-instances-of-same-form","title":"Multiple Instances of Same Form","description":"On the issue #112, @tlcaputi asked about using the django-image-uploader-widget with several forms. The answer for this issue, motivated this documentation article.","sidebar":"tutorialSidebar"},"widget/resumed":{"id":"widget/resumed","title":"Resumed","description":"If you want to read a more complete description of how to use this widget, see the Tutorial. But, if you is an advanced user, only install the package:","sidebar":"tutorialSidebar"},"widget/tutorial":{"id":"widget/tutorial","title":"Tutorial","description":"First, we need of some context: the image uploader widget is a widget to handle image uploading with a beautiful interface with click to select file and a drop file behaviour handler. It is used with django forms.","sidebar":"tutorialSidebar"}}}')}}]);