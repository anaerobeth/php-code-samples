!function(d){function h(){d(f).each(function(){g(d(this)).removeClass("open")})}function g(b){var a=b.attr("data-target");a||(a=(a=b.attr("href"))&&/#/.test(a)&&a.replace(/.*(?=#[^\s]*$)/,""));a=a&&d(a);if(!a||!a.length)a=b.parent();return a}var f="[data-toggle=dropdown]",e=function(b){var a=d(b).on("click.dropdown.data-api",this.toggle);d("html").on("click.dropdown.data-api",function(){a.parent().removeClass("open")})};e.prototype={constructor:e,toggle:function(){var b=d(this),a,c;if(!b.is(".disabled, :disabled"))return a=
g(b),c=a.hasClass("open"),h(),c||a.toggleClass("open"),b.focus(),!1},keydown:function(b){var a,c,e;if(/(38|40|27)/.test(b.keyCode)&&(a=d(this),b.preventDefault(),b.stopPropagation(),!a.is(".disabled, :disabled"))){c=g(a);e=c.hasClass("open");if(!e||e&&27==b.keyCode)return 27==b.which&&c.find(f).focus(),a.click();a=d("[role=menu] li:not(.divider):visible a",c);a.length&&(c=a.index(a.filter(":focus")),38==b.keyCode&&0<c&&c--,40==b.keyCode&&c<a.length-1&&c++,~c||(c=0),a.eq(c).focus())}}};var j=d.fn.dropdown;
d.fn.dropdown=function(b){return this.each(function(){var a=d(this),c=a.data("dropdown");c||a.data("dropdown",c=new e(this));"string"==typeof b&&c[b].call(a)})};d.fn.dropdown.Constructor=e;d.fn.dropdown.noConflict=function(){d.fn.dropdown=j;return this};d(document).on("click.dropdown.data-api",h).on("click.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()}).on("click.dropdown-menu",function(b){b.stopPropagation()}).on("click.dropdown.data-api",f,e.prototype.toggle).on("keydown.dropdown.data-api",
f+", [role=menu]",e.prototype.keydown)}(window.jQuery);