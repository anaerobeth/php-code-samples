function gp_init_inline_edit(h){function c(b,a){var e=m(b);"undefined"!==typeof a&&e.val(a);return parseInt(e.val())}function m(b){return $("#gp_current_image input[name="+b+"]")}function j(b,a){d.posx=b=c("left",b);d.posy=a=c("top",a);f.css({"background-position":b+"px "+a+"px"});g=!0}function n(b,a,e){delete d.src;b!==p&&(d.src=b);f.css({"background-image":'url("'+b+'")'});$("#gp_current_image img").attr("src",b);0<a&&0<e&&(c("width",a),c("height",e),f.stop(!0,!0).animate({width:a,height:e}))}$gp.LoadStyle("/include/css/inline_image.css");
var q=gp_editing.get_path(h),f=gp_editing.get_edit_area(h);f.addClass("gp_image_edit");var p=f.attr("src"),g=!1,d={};$gp.loaded();gp_editing.editor_tools();$("#ckeditor_controls").prepend('<div id="gp_folder_options"></div>');gp_editor={save_path:q,checkDirty:function(){return g},gp_saveData:function(){return jQuery.param(d)+"&cmd=save_image"},resetDirty:function(){g=!1},updateElement:function(){}};h=strip_from(q,"?")+"?cmd=image_editor";$gp.jGoTo(h);var k=!1;gpresponse.image_options_loaded=function(){var b=
f.width(),a=f.height();c("orig_width",b);c("orig_height",a);n(p,b,a);var e=posy=mouse_startx=mouse_starty=pos_startx=pos_starty=0,l=!1;f.disableSelection();f.mousedown(function(a){a.preventDefault();l=!0;pos_startx=e=d.posx||0;pos_starty=posy=d.posy||0;mouse_startx=a.pageX;mouse_starty=a.pageY}).on("mouseleave mouseup",function(a){a.preventDefault();l=!1}).mousemove(function(a){l&&(e=pos_startx+a.pageX-mouse_startx,posy=pos_starty+a.pageY-mouse_starty,j(e,posy))});f.attr("src",gp_blank_img);$("#gp_current_image input").on("keyup keydown change paste",
function(){k&&clearTimeout(k);k=setTimeout(function(){g=!0;d.width=c("width");d.height=c("height");f.stop(!0,!0).animate({width:d.width,height:d.height});var a=c("left"),b=c("top");j(a,b)},400)})};$gp.links.gp_gallery_add=function(b){b.preventDefault();b=$(this).stop(!0,!0);var a=b.data("width"),e=b.data("height");n(b.attr("href"),a,e);j(0,0);d.width=c("width");d.height=c("height");g=!0};$gp.links.show_uploaded_images=function(){LoadImages(!1)};$gp.links.deafult_sizes=function(){c("width",c("orig_width"));
c("height",c("orig_height"));m("width").change();j(0,0)};gpresponse.gp_gallery_images=function(){var b=$("#gp_upload_form");b.attr("action");b.find(".file").auto_upload({start:function(a,b){b.bar=$('<a data-cmd="gp_file_uploading">'+a+"</a>").appendTo("#gp_upload_queue");return!0},progress:function(a,b,c){a=Math.round(100*a);a=Math.min(98,a-1);c.bar.text(a+"% "+b)},finish:function(a,b,c){c=c.bar;c.text("100% "+b);var d=$(a);a=d.find(".status").val();d=d.find(".message").val();"success"==a?(c.addClass("success"),
c.slideUp(1200),b=$("#gp_gallery_avail_imgs"),$(d).appendTo(b)):"notimage"==a?c.addClass("success"):(c.addClass("failed"),c.text(b+": "+d))},error:function(a,b,c){alert("error: "+c)}})}};