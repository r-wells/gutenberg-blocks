!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.React}()},function(e,t,n){"use strict";n.r(t);var l=n(0),r=n(1),a=n.n(r);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var o=a.a.createElement("path",{fill:"#69AA04",d:"M0-1.612h27.09v27.255H0z"}),i=a.a.createElement("g",{fill:"#FFF",stroke:"#FFF",strokeMiterlimit:10},a.a.createElement("path",{d:"M12.2 3.145c.779.715 1.283 1.673 1.494 2.891h-.406c-.195-1.104-.65-1.965-1.364-2.599-.78-.714-1.803-1.056-3.07-1.056-1.542 0-2.761.568-3.67 1.721-.845 1.04-1.25 2.372-1.25 3.979s.438 2.923 1.315 3.93c.942 1.088 2.241 1.641 3.898 1.641a7.79 7.79 0 002.258-.341c.747-.227 1.332-.52 1.786-.845V8.569H8.627v-.39h4.954v4.482c-.487.39-1.12.731-1.916.991a8.502 8.502 0 01-2.518.39c-1.819 0-3.216-.601-4.223-1.771-.926-1.088-1.38-2.485-1.38-4.19 0-1.689.438-3.103 1.348-4.223.974-1.25 2.29-1.868 3.962-1.868 1.365.001 2.485.375 3.346 1.155zM16.432 9.373l5.185 12.59h-.494l-1.693-4.144h-6.56l-1.693 4.144h-.494l5.184-12.59h.565zm2.821 8.023l-3.068-7.564h-.053l-3.086 7.564h6.207z"})),s=function(e){return a.a.createElement("svg",c({width:25.16,height:23.954},e),o,i)},m=wp.blocks.registerBlockType,u=wp.editor,p=u.RichText,b=u.MediaUpload,g=u.InspectorControls,d=u.ColorPalette,h=wp.components,O=h.Button,j=h.PanelBody;m("ga/testimonial",{title:"GA Testimonial",icon:{src:s},category:"gourmet-artist",attributes:{testimonialText:{type:"string",source:"html",selector:".testimonial-block blockquote"},testimonialName:{type:"string",source:"html",selector:".testimonial-info p"},testmonialImage:{type:"string",source:"attribute",attribute:"src",selector:".testimonial-info img"},testimonialColor:{type:"string"}},edit:function(e){var t=e.attributes,n=t.testimonialText,r=t.testimonialName,a=t.testmonialImage,c=t.testimonialColor,o=e.setAttributes;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(g,null,Object(l.createElement)(j,{title:"Color Options"},Object(l.createElement)("div",{className:"components-based-control"},Object(l.createElement)("div",{className:"components-based-control__field"},Object(l.createElement)("label",{className:"components=based-control__label"},"Name person's color and line"),Object(l.createElement)(d,{onChange:function(e){o({testimonialColor:e})}}))))),Object(l.createElement)("div",{className:"testimonial-block",style:{borderColor:c}},Object(l.createElement)("blockquote",null,Object(l.createElement)(p,{onChange:function(e){o({testimonialText:e})},value:n})),Object(l.createElement)("div",{className:"testimonial-info"},Object(l.createElement)("img",{src:a}),Object(l.createElement)(b,{onSelect:function(e){o({testmonialImage:e.sizes.medium.url})},type:"image",render:function(e){var t=e.open;return Object(l.createElement)(O,{onClick:t},"Open Media Library")}}),Object(l.createElement)("p",null,Object(l.createElement)(p,{placeholder:"Add the person for testimonial",onChange:function(e){o({testimonialName:e})},value:r,style:{color:c}})))))},save:function(e){var t=e.attributes,n=t.testimonialText,r=t.testimonialName,a=t.testmonialImage,c=t.testimonialColor;e.setAttributes;return Object(l.createElement)("div",{className:"testimonial-block",style:{borderColor:c}},Object(l.createElement)("blockquote",null,Object(l.createElement)(p.Content,{value:n})),Object(l.createElement)("div",{className:"testimonial-info"},Object(l.createElement)("img",{src:a}),Object(l.createElement)("p",{style:{color:c}},Object(l.createElement)(p.Content,{value:r}))))}});var E=wp.blocks.registerBlockType,f=wp.editor,v=f.RichText,y=f.MediaUpload,T=f.BlockControls,k=f.AlignmentToolbar,C=wp.components.IconButton;E("ga/hero",{title:"GA Hero",icon:{src:s},category:"gourmet-artist",heroTitle:{type:"string",source:"html",selector:".hero-block h1"},heroText:{type:"string",source:"html",selector:".hero-block p"},heroImage:{type:"string",source:"html",selector:".hero-block p"},alignContent:{type:"string",default:"center"},supports:{align:["wide","full"]},edit:function(e){var t=e.attributes,n=t.heroTitle,r=t.heroText,a=t.heroImage,c=t.alignContent,o=e.setAttributes;return Object(l.createElement)("div",{className:"hero-block",style:{backgroundImage:"url(".concat(a,")")}},Object(l.createElement)(T,null,Object(l.createElement)(k,{onChange:function(e){o({alignContent:e})}})),Object(l.createElement)(y,{onSelect:function(e){o({heroImage:e.sizes.full.url})},type:"image",render:function(e){var t=e.open;return Object(l.createElement)(C,{onClick:t},"Open Media Library")}}),Object(l.createElement)("h1",null,Object(l.createElement)(v,{placeholder:"Add the title",onChange:function(e){o({heroTitle:e})},value:n,style:{textAlign:c}})),Object(l.createElement)("p",null,Object(l.createElement)(v,{placeholder:"Add the tagline",onChange:function(e){o({heroText:e})},value:r,style:{textAlign:c}})))},save:function(e){var t=e.attributes,n=t.heroTitle,r=t.heroText,a=t.heroImage,c=t.alignContent;return Object(l.createElement)("div",{className:"hero-block",style:{backgroundImage:"url(".concat(a,")")}},Object(l.createElement)("h1",{style:{textAlign:c}},Object(l.createElement)(v.Content,{value:n})),Object(l.createElement)("p",{style:{textAlign:c}},Object(l.createElement)(v.Content,{value:r})))}});var x=wp.blocks.registerBlockType,A=wp.editor,N=A.RichText,w=A.MediaUpload,I=A.BlockControls,R=A.AlignmentToolbar,B=A.URLInputButton,M=wp.components.IconButton;x("ga/imagetext",{title:"GA Image with text",icon:{src:s},category:"gourmet-artist",attributes:{appTitle:{source:"html",type:"string",selector:".content h1"},appText:{source:"html",type:"string",selector:".content p"},appImage:{source:"attribute",type:"string",attribute:"src",selector:".image img"},appURL:{type:"string",source:"attribute",attribute:"href",selector:".content a"},appAlignment:{type:"string",default:"center"}},edit:function(e){var t=e.attributes,n=t.appTitle,r=t.appText,a=t.appImage,c=t.appURL,o=t.appAlignment,i=e.setAttributes;return Object(l.createElement)("div",{className:"image-text-block"},Object(l.createElement)(I,null,Object(l.createElement)(R,{onChange:function(e){i({appAlignment:e})}})),Object(l.createElement)("div",{className:"container"},Object(l.createElement)("div",{className:"content",style:{textAlign:o}},Object(l.createElement)("h1",null,Object(l.createElement)(N,{placeholder:"Add the Title",onChange:function(e){i({appTitle:e})},value:n})),Object(l.createElement)("p",null,Object(l.createElement)(N,{placeholder:"Add the Text",onChange:function(e){i({appText:e})},value:r})),Object(l.createElement)("a",{href:c,className:"button",target:"_blank",rel:"noopener noreferrer"},"Download"),Object(l.createElement)(B,{onChange:function(e){i({appURL:e})},url:c})),Object(l.createElement)("div",{className:"image"},Object(l.createElement)("img",{src:a}),Object(l.createElement)(w,{onSelect:function(e){i({appImage:e.sizes.full.url})},type:"image",value:a,render:function(e){var t=e.open;return Object(l.createElement)(M,{onClick:t,icon:"format-image",showToolTip:"true",label:"Add Image"})}}))))},styles:[{name:"default",label:"Blue (Default)",isDefault:!0},{name:"green",label:"Green"},{name:"pink",label:"Pink"}],save:function(e){var t=e.attributes,n=t.appTitle,r=t.appText,a=t.appImage,c=t.appURL,o=t.appAlignment;return Object(l.createElement)("div",{className:"image-text-block"},Object(l.createElement)("div",{className:"container"},Object(l.createElement)("div",{className:"content",style:{textAlign:o}},Object(l.createElement)("h1",null,Object(l.createElement)(N.Content,{value:n})),Object(l.createElement)("p",null,Object(l.createElement)(N.Content,{value:r})),Object(l.createElement)("a",{href:c,className:"button",target:"_blank",rel:"noopener noreferrer"},"Download")),Object(l.createElement)("div",{className:"image"},Object(l.createElement)("img",{src:a}))))}});var _=wp.blocks.registerBlockType,L=wp.editor.RichText;_("ga/latest",{title:"GA Latest Recipes",icon:{src:s},category:"gourmet-artist",edit:(0,wp.data.withSelect)(function(e){return{posts:e("core").getEntityRecords("postType","recipes",{per_page:3})}})(function(e){var t=e.posts;return t?t&&0===t.length?"There are no posts to return":Object(l.createElement)(l.Fragment,null,Object(l.createElement)("h1",null,"Latest Recipes Block"),Object(l.createElement)("ul",{className:"latest-recipes container"},t.map(function(e){return console.log(e),Object(l.createElement)("li",null,Object(l.createElement)("img",{src:e.recipe_image}),Object(l.createElement)("div",{className:"content"},Object(l.createElement)("h2",null,e.title.rendered),Object(l.createElement)("p",null,Object(l.createElement)(L.Content,{value:e.content.rendered.substring(0,180)})),Object(l.createElement)("a",{href:e.link,className:"button"},"Read More")))}))):"Loading..."}),save:function(){return null}})}]);