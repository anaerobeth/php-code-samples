function gp_init_inline_edit(e){var f=!1,g="",d=gp_editing.get_path(e),c=gp_editing.get_edit_area(e);!1==c||!1==d||(gp_editor={save_path:d,destroy:function(){c.html(f)},checkDirty:function(){return gp_editor.gp_saveData()!=g?!0:!1},gp_saveData:function(){return $("#gp_include_form").serialize()},resetDirty:function(){g=gp_editor.gp_saveData()},updateElement:function(){f=c.html()}},gp_editing.editor_tools(),$gp.jGoTo(d+"&cmd=include_dialog"),gpresponse.gp_include_dialog=function(b){$("#ckeditor_top").html(b.CONTENT);
gp_editor.resetDirty();gp_editor.updateElement()},gpresponse.gp_autocomplete_include=function(b){var a;a="file"==b.SELECTOR?$("#gp_file_include"):$("#gp_gadget_include");eval(b.CONTENT);a.css({position:"relative",zIndex:12E3}).focus(function(){a.autocomplete("search",a.val())}).autocomplete({source:source,delay:100,minLength:0,open:function(){},select:function(b,a){$("#gp_include_form .autocomplete").val("");if(a.item)return this.value=a.item[1],!1}}).data("autocomplete")._renderItem=function(b,a){return $("<li></li>").data("item.autocomplete",
a[1]).append("<a>"+$gp.htmlchars(a[0])+"<span>"+$gp.htmlchars(a[1])+"</span></a>").appendTo(b)}},gplinks.gp_include_preview=function(){$gp.loading();var b=gp_editor.save_path,b=strip_from(b,"#"),a="";0<b.indexOf("?")&&(a=strip_to(b,"?")+"&");a+=gp_editor.gp_saveData();$gp.postC(b,a+"&cmd=preview")},gpresponse.gp_include_content=function(b){c.html(b.CONTENT)})};