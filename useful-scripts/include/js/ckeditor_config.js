CKEDITOR.on("instanceCreated",function(a){var b=a.editor;b.on("uiSpace",function(){var a="About Bold Italic Underline Scayt Strike Subscript Superscript BidiLtr BidiRtl Blockquote Cut Copy Paste TextColor BGColor Templates CreateDiv - NumberedList BulletedList Indent Outdent Find Replace Flash Font FontSize Form Checkbox Radio TextField Textarea Select Button ImageButton HiddenField Format HorizontalRule Iframe Image Smiley JustifyLeft JustifyCenter JustifyRight JustifyBlock Link Unlink Anchor Maximize NewPage PageBreak PasteText PasteFromWord RemoveFormat Save SelectAll ShowBlocks Source Sourcedialog SpecialChar Styles Table Undo Redo".split(" "),
d=[];for(i in b.ui.items)-1===jQuery.inArray(i,a)&&d.push(i);0!=d.length&&b.config.toolbar.push(d)})});
CKEDITOR.on("dialogDefinition",function(a){if("undefined"!=typeof gptitles){var b=a.data.definition;if("link"==a.data.name){var c=!1;a=b.getContents("info").get("protocol");a["default"]="";a.items.unshift(["",""]);b.onOk=CKEDITOR.tools.override(b.onOk,function(a){return function(b){return c?c=!1:a.call(this,b)}});b.onLoad=CKEDITOR.tools.override(b.onLoad,function(a){return function(){a.call(this);var b=this.getContentElement("info","url").getInputElement().$,f=this.getContentElement("info","protocol").getInputElement().$;
$(b).css({position:"relative",zIndex:12E3}).autocomplete({source:gptitles,delay:100,minLength:0,select:function(a,e){if(e.item)return b.value=encodeURI(e.item[1]),f.value="",13==a.which&&(c=!0),a.stopPropagation(),!1}}).data("autocomplete")._renderItem=function(a,b){return $("<li></li>").data("item.autocomplete",b[1]).append("<a>"+$gp.htmlchars(b[0])+"<span>"+$gp.htmlchars(b[1])+"</span></a>").appendTo(a)}}})}}});
CKEDITOR.on("instanceReady",function(a){if(CKEDITOR.env.ie)a.editor.on("dialogShow",function(a){$(a.data._.element.$).find('a[href*="void(0)"]').removeAttr("href")})});