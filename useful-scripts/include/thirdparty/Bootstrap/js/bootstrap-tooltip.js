!function(c){var g=function(a,b){this.init("tooltip",a,b)};g.prototype={constructor:g,init:function(a,b,e){var d;this.type=a;this.$element=c(b);this.options=this.getOptions(e);this.enabled=!0;b=this.options.trigger.split(" ");for(e=b.length;e--;)if(d=b[e],"click"==d)this.$element.on("click."+this.type,this.options.selector,c.proxy(this.toggle,this));else"manual"!=d&&(a="hover"==d?"mouseenter":"focus",d="hover"==d?"mouseleave":"blur",this.$element.on(a+"."+this.type,this.options.selector,c.proxy(this.enter,
this)),this.$element.on(d+"."+this.type,this.options.selector,c.proxy(this.leave,this)));this.options.selector?this._options=c.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(a){a=c.extend({},c.fn[this.type].defaults,this.$element.data(),a);a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay});return a},enter:function(a){var b=c.fn[this.type].defaults,e={},d;this._options&&c.each(this._options,function(a,c){b[a]!=c&&(e[a]=c)},this);d=
c(a.currentTarget)[this.type](e).data(this.type);if(!d.options.delay||!d.options.delay.show)return d.show();clearTimeout(this.timeout);d.hoverState="in";this.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()},d.options.delay.show)},leave:function(a){var b=c(a.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!b.options.delay||!b.options.delay.hide)return b.hide();b.hoverState="out";this.timeout=setTimeout(function(){"out"==b.hoverState&&
b.hide()},b.options.delay.hide)},show:function(){var a,b,e,d,f;b=c.Event("show");if(this.hasContent()&&this.enabled&&(this.$element.trigger(b),!b.isDefaultPrevented())){a=this.tip();this.setContent();this.options.animation&&a.addClass("fade");d="function"==typeof this.options.placement?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement;a.detach().css({top:0,left:0,display:"block"});this.options.container?a.appendTo(this.options.container):a.insertAfter(this.$element);b=
this.getPosition();e=a[0].offsetWidth;a=a[0].offsetHeight;switch(d){case "bottom":f={top:b.top+b.height,left:b.left+b.width/2-e/2};break;case "top":f={top:b.top-a,left:b.left+b.width/2-e/2};break;case "left":f={top:b.top+b.height/2-a/2,left:b.left-e};break;case "right":f={top:b.top+b.height/2-a/2,left:b.left+b.width}}this.applyPlacement(f,d);this.$element.trigger("shown")}},applyPlacement:function(a,b){var c=this.tip(),d=c[0].offsetWidth,f=c[0].offsetHeight,g,h,j;c.offset(a).addClass(b).addClass("in");
g=c[0].offsetWidth;h=c[0].offsetHeight;"top"==b&&h!=f&&(a.top=a.top+f-h,j=!0);"bottom"==b||"top"==b?(f=0,0>a.left&&(f=-2*a.left,a.left=0,c.offset(a),g=c[0].offsetWidth),this.replaceArrow(f-d+g,g,"left")):this.replaceArrow(h-f,h,"top");j&&c.offset(a)},replaceArrow:function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b);a.removeClass("fade in top bottom left right")},hide:function(){var a=
this.tip(),b=c.Event("hide");this.$element.trigger(b);if(!b.isDefaultPrevented()){a.removeClass("in");if(c.support.transition&&this.$tip.hasClass("fade")){var e=setTimeout(function(){a.off(c.support.transition.end).detach()},500);a.one(c.support.transition.end,function(){clearTimeout(e);a.detach()})}else a.detach();this.$element.trigger("hidden");return this}},fixTitle:function(){var a=this.$element;if(a.attr("title")||"string"!=typeof a.attr("data-original-title"))a.attr("data-original-title",a.attr("title")||
"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var a=this.$element[0];return c.extend({},"function"==typeof a.getBoundingClientRect?a.getBoundingClientRect():{width:a.offsetWidth,height:a.offsetHeight},this.$element.offset())},getTitle:function(){var a=this.$element,b=this.options;return a.attr("data-original-title")||("function"==typeof b.title?b.title.call(a[0]):b.title)},tip:function(){return this.$tip=this.$tip||c(this.options.template)},arrow:function(){return this.$arrow=
this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.options=this.$element=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(a){a=a?c(a.currentTarget)[this.type](this._options).data(this.type):this;a.tip().hasClass("in")?a.hide():a.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var k=c.fn.tooltip;
c.fn.tooltip=function(a){return this.each(function(){var b=c(this),e=b.data("tooltip"),d="object"==typeof a&&a;e||b.data("tooltip",e=new g(this,d));if("string"==typeof a)e[a]()})};c.fn.tooltip.Constructor=g;c.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1};c.fn.tooltip.noConflict=function(){c.fn.tooltip=k;return this}}(window.jQuery);