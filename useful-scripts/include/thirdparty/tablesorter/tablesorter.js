!function(j){j.extend({tablesorter:new function(){function e(c){"undefined"!==typeof console&&"undefined"!==typeof console.log?console.log(c):alert(c)}function u(c,d){e(c+" ("+((new Date).getTime()-d.getTime())+"ms)")}function p(c,d,a){if(!d)return"";var b=c.config,g=b.textExtraction,f="",f="simple"===g?b.supportsTextContent?d.textContent:j(d).text():"function"===typeof g?g(d,c,a):"object"===typeof g&&g.hasOwnProperty(a)?g[a](d,c,a):b.supportsTextContent?d.textContent:j(d).text();return j.trim(f)}
function h(c){var d=c.config,a=d.$tbodies,b,q,f,l,j,n,k="";if(0===a.length)return d.debug?e("*Empty table!* Not building a parser cache"):"";a=a[0].rows;if(a[0]){b=[];q=a[0].cells.length;for(f=0;f<q;f++){l=d.$headers.filter(":not([colspan])");l=l.add(d.$headers.filter('[colspan="1"]')).filter('[data-column="'+f+'"]:last');j=d.headers[f];n=g.getParserById(g.getData(l,j,"sorter"));d.empties[f]=g.getData(l,j,"empty")||d.emptyTo||(d.emptyToBottom?"bottom":"top");d.strings[f]=g.getData(l,j,"string")||
d.stringTo||"max";if(!n)a:{l=c;j=a;n=-1;for(var u=f,x=void 0,t=g.parsers.length,y=!1,m="",x=!0;""===m&&x;)n++,j[n]?(y=j[n].cells[u],m=p(l,y,u),l.config.debug&&e("Checking if value was empty on row "+n+", column: "+u+": "+m)):x=!1;for(x=1;x<t;x++)if(g.parsers[x].is(m,l,y)){n=g.parsers[x];break a}n=g.parsers[0]}d.debug&&(k+="column:"+f+"; parser:"+n.id+"; string:"+d.strings[f]+"; empty: "+d.empties[f]+"\n");b.push(n)}}d.debug&&e(k);return b}function s(c){var d=c.tBodies,a=c.config,b,q,f=a.parsers,l,
v,n,k,h,x,t,m=[];a.cache={};if(!f)return a.debug?e("*Empty table!* Not building a cache"):"";a.debug&&(t=new Date);a.showProcessing&&g.isProcessing(c,!0);for(k=0;k<d.length;k++)if(a.cache[k]={row:[],normalized:[]},!j(d[k]).hasClass(a.cssInfoBlock)){b=d[k]&&d[k].rows.length||0;q=d[k].rows[0]&&d[k].rows[0].cells.length||0;for(v=0;v<b;++v)if(h=j(d[k].rows[v]),x=[],h.hasClass(a.cssChildRow))a.cache[k].row[a.cache[k].row.length-1]=a.cache[k].row[a.cache[k].row.length-1].add(h);else{a.cache[k].row.push(h);
for(n=0;n<q;++n)if(l=p(c,h[0].cells[n],n),l=f[n].format(l,c,h[0].cells[n],n),x.push(l),"numeric"===(f[n].type||"").toLowerCase())m[n]=Math.max(Math.abs(l),m[n]||0);x.push(a.cache[k].normalized.length);a.cache[k].normalized.push(x)}a.cache[k].colMax=m}a.showProcessing&&g.isProcessing(c);a.debug&&u("Building cache for "+b+" rows",t)}function m(c,d){var a=c.config,b=c.tBodies,q=[],f=a.cache,e,v,n,k,h,p,m,y,s,r,E;if(f[0]){a.debug&&(E=new Date);for(y=0;y<b.length;y++)if(e=j(b[y]),!e.hasClass(a.cssInfoBlock)){h=
g.processTbody(c,e,!0);e=f[y].row;v=f[y].normalized;k=(n=v.length)?v[0].length-1:0;for(p=0;p<n;p++)if(r=v[p][k],q.push(e[r]),!a.appender||!a.removeRows){s=e[r].length;for(m=0;m<s;m++)h.append(e[r][m])}g.processTbody(c,h,!1)}a.appender&&a.appender(c,q);a.debug&&u("Rebuilt table",E);d||g.applyWidget(c);j(c).trigger("sortEnd",c)}}function F(c){var d,a,b,g=c.config,f=g.sortList,e=[g.cssAsc,g.cssDesc],h=j(c).find("tfoot tr").children().removeClass(e.join(" "));g.$headers.removeClass(e.join(" "));b=f.length;
for(d=0;d<b;d++)if(2!==f[d][1]&&(c=g.$headers.not(".sorter-false").filter('[data-column="'+f[d][0]+'"]'+(1===b?":last":"")),c.length))for(a=0;a<c.length;a++)c[a].sortDisabled||(c.eq(a).addClass(e[f[d][1]]),h.length&&h.filter('[data-column="'+f[d][0]+'"]').eq(a).addClass(e[f[d][1]]))}function G(c){var d=0,a=c.config,b=a.sortList,g=b.length,f=c.tBodies.length,e,h,n,k,p,m,t,r,s;if(!a.serverSideSorting&&a.cache[0]){a.debug&&(e=new Date);for(n=0;n<f;n++)p=a.cache[n].colMax,s=(m=a.cache[n].normalized)&&
m[0]?m[0].length-1:0,m.sort(function(f,e){for(h=0;h<g;h++){k=b[h][0];r=b[h][1];t=/n/i.test(a.parsers&&a.parsers[k]?a.parsers[k].type||"":"")?"Numeric":"Text";t+=0===r?"":"Desc";/Numeric/.test(t)&&a.strings[k]&&(d="boolean"===typeof a.string[a.strings[k]]?(0===r?1:-1)*(a.string[a.strings[k]]?-1:1):a.strings[k]?a.string[a.strings[k]]||0:0);var l=j.tablesorter["sort"+t](c,f[k],e[k],k,p[k],d);if(l)return l}return f[s]-e[s]});a.debug&&u("Sorting on "+b.toString()+" and dir "+r+" time",e)}}function C(c,
d){c.trigger("updateComplete");"function"===typeof d&&d(c[0])}function H(c,d,a){!1!==d?c.trigger("sorton",[c[0].config.sortList,function(){C(c,a)}]):C(c,a)}var g=this;g.version="2.7.3";g.parsers=[];g.widgets=[];g.defaults={theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,
sortForce:null,sortList:[],sortAppend:null,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"simple",textSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0,initialized:null,tableClass:"tablesorter",cssAsc:"tablesorter-headerAsc",cssChildRow:"tablesorter-childRow",cssDesc:"tablesorter-headerDesc",cssHeader:"tablesorter-header",cssHeaderRow:"tablesorter-headerRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",
cssProcessing:"tablesorter-processing",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]};g.benchmark=u;g.construct=function(c){return this.each(function(){if(!this.tHead||0===this.tBodies.length||!0===this.hasInitialized)return this.config.debug?e("stopping initialization! No thead, tbody or tablesorter has already been initialized"):"";var d=j(this),a=this,b,q,f,l="",v,n,k,C,x=j.metadata;a.hasInitialized=
!1;a.config={};b=j.extend(!0,a.config,g.defaults,c);j.data(a,"tablesorter",b);b.debug&&j.data(a,"startoveralltimer",new Date);b.supportsTextContent="x"===j("<span>x</span>")[0].textContent;b.supportsDataObject=1.4<=parseFloat(j.fn.jquery);b.string={max:1,min:-1,"max+":1,"max-":-1,zero:0,none:0,"null":0,top:!0,bottom:!1};/tablesorter\-/.test(d.attr("class"))||(l=""!==b.theme?" tablesorter-"+b.theme:"");b.$table=d.addClass(b.tableClass+l);b.$tbodies=d.children("tbody:not(."+b.cssInfoBlock+")");var t=
[],y={},Q=j(a).find("thead:eq(0), tfoot").children("tr"),K,E,z,A,O,D,L,R,S,I;for(K=0;K<Q.length;K++){O=Q[K].cells;for(E=0;E<O.length;E++){A=O[E];D=A.parentNode.rowIndex;L=D+"-"+A.cellIndex;R=A.rowSpan||1;S=A.colSpan||1;"undefined"===typeof t[D]&&(t[D]=[]);for(z=0;z<t[D].length+1;z++)if("undefined"===typeof t[D][z]){I=z;break}y[L]=I;j(A).attr({"data-column":I});for(z=D;z<D+R;z++){"undefined"===typeof t[z]&&(t[z]=[]);L=t[z];for(A=I;A<I+S;A++)L[A]="x"}}}var M,B,P,T,N,J,U,w=a.config;w.headerList=[];w.headerContent=
[];w.debug&&(U=new Date);T=w.cssIcon?'<i class="'+w.cssIcon+'"></i>':"";t=j(a).find(w.selectorHeaders).each(function(a){B=j(this);M=w.headers[a];w.headerContent[a]=this.innerHTML;N=w.headerTemplate.replace(/\{content\}/g,this.innerHTML).replace(/\{icon\}/g,T);w.onRenderTemplate&&(P=w.onRenderTemplate.apply(B,[a,N]))&&"string"===typeof P&&(N=P);this.innerHTML='<div class="tablesorter-header-inner">'+N+"</div>";w.onRenderHeader&&w.onRenderHeader.apply(B,[a]);this.column=y[this.parentNode.rowIndex+"-"+
this.cellIndex];var b=g.getData(B,M,"sortInitialOrder")||w.sortInitialOrder;this.order=/^d/i.test(b)||1===b?[1,0,2]:[0,1,2];this.count=-1;"false"===g.getData(B,M,"sorter")?(this.sortDisabled=!0,B.addClass("sorter-false")):B.removeClass("sorter-false");this.lockedOrder=!1;J=g.getData(B,M,"lockedOrder")||!1;"undefined"!==typeof J&&!1!==J&&(this.order=this.lockedOrder=/^d/i.test(J)||1===J?[1,1,1]:[0,0,0]);B.addClass((this.sortDisabled?"sorter-false ":" ")+w.cssHeader);w.headerList[a]=this;B.parent().addClass(w.cssHeaderRow)});
a.config.debug&&(u("Built headers:",U),e(t));b.$headers=t;b.parsers=h(a);b.delayInit||s(a);b.$headers.find("*").andSelf().filter(b.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter",function(c,e){var h=(this.tagName.match("TH|TD")?j(this):j(this).parents("th, td").filter(":last"))[0];if(1!==(c.which||c.button))return!1;if("mousedown"===c.type)return C=(new Date).getTime(),"INPUT"===c.target.tagName?"":!b.cancelSelection;if(!0!==e&&250<
(new Date).getTime()-C)return!1;b.delayInit&&!b.cache&&s(a);if(!h.sortDisabled){d.trigger("sortStart",a);l=!c[b.sortMultiSortKey];h.count=c[b.sortResetKey]?2:(h.count+1)%(b.sortReset?3:2);b.sortRestart&&(q=h,b.$headers.each(function(){if(this!==q&&(l||!j(this).is("."+b.cssDesc+",."+b.cssAsc)))this.count=-1}));q=h.column;if(l){b.sortList=[];if(null!==b.sortForce){v=b.sortForce;for(f=0;f<v.length;f++)v[f][0]!==q&&b.sortList.push(v[f])}k=h.order[h.count];if(2>k&&(b.sortList.push([q,k]),1<h.colSpan))for(f=
1;f<h.colSpan;f++)b.sortList.push([q+f,k])}else if(b.sortAppend&&1<b.sortList.length&&g.isValueInArray(b.sortAppend[0][0],b.sortList)&&b.sortList.pop(),g.isValueInArray(q,b.sortList))for(f=0;f<b.sortList.length;f++)n=b.sortList[f],k=b.headerList[n[0]],n[0]===q&&(n[1]=k.order[k.count],2===n[1]&&(b.sortList.splice(f,1),k.count=-1));else if(k=h.order[h.count],2>k&&(b.sortList.push([q,k]),1<h.colSpan))for(f=1;f<h.colSpan;f++)b.sortList.push([q+f,k]);if(null!==b.sortAppend){v=b.sortAppend;for(f=0;f<v.length;f++)v[f][0]!==
q&&b.sortList.push(v[f])}d.trigger("sortBegin",a);setTimeout(function(){F(a);G(a);m(a)},1)}});b.cancelSelection&&b.$headers.each(function(){this.onselectstart=function(){return!1}});d.unbind("sortReset update updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave").bind("sortReset",function(){b.sortList=[];F(a);G(a);m(a)}).bind("update",function(c,f,g){j(b.selectorRemove,a).remove();b.parsers=h(a);s(a);H(d,f,g)}).bind("updateCell",function(c,f,g,
e){var q,h,l;q=d.find("tbody");c=q.index(j(f).parents("tbody").filter(":last"));var k=j(f).parents("tr").filter(":last");f=j(f)[0];q.length&&0<=c&&(h=q.eq(c).find("tr").index(k),l=f.cellIndex,q=a.config.cache[c].normalized[h].length-1,a.config.cache[c].row[a.config.cache[c].normalized[h][q]]=k,a.config.cache[c].normalized[h][l]=b.parsers[l].format(p(a,f,l),a,f,l),H(d,g,e))}).bind("addRows",function(c,g,e,q){var j=g.filter("tr").length,l=[],k=g[0].cells.length,n=d.find("tbody").index(g.closest("tbody"));
b.parsers||(b.parsers=h(a));for(c=0;c<j;c++){for(f=0;f<k;f++)l[f]=b.parsers[f].format(p(a,g[c].cells[f],f),a,g[c].cells[f],f);l.push(b.cache[n].row.length);b.cache[n].row.push([g[c]]);b.cache[n].normalized.push(l);l=[]}H(d,e,q)}).bind("sorton",function(b,c,f,g){d.trigger("sortStart",this);var e,q,l,h=a.config;b=c||h.sortList;h.sortList=[];j.each(b,function(a,b){e=[parseInt(b[0],10),parseInt(b[1],10)];if(l=h.headerList[e[0]])h.sortList.push(e),q=j.inArray(e[1],l.order),l.count=0<=q?q:e[1]%(h.sortReset?
3:2)});F(a);G(a);m(a,g);"function"===typeof f&&f(a)}).bind("appendCache",function(b,c,d){m(a,d);"function"===typeof c&&c(a)}).bind("applyWidgetId",function(c,d){g.getWidgetById(d).format(a,b,b.widgetOptions)}).bind("applyWidgets",function(b,c){g.applyWidget(a,c)}).bind("refreshWidgets",function(b,c,d){g.refreshWidgets(a,c,d)}).bind("destroy",function(b,c,d){g.destroy(a,c,d)});b.supportsDataObject&&"undefined"!==typeof d.data().sortlist?b.sortList=d.data().sortlist:x&&(d.metadata()&&d.metadata().sortlist)&&
(b.sortList=d.metadata().sortlist);g.applyWidget(a,!0);0<b.sortList.length?d.trigger("sorton",[b.sortList,{},!b.initWidgets]):b.initWidgets&&g.applyWidget(a);if(a.config.widthFixed&&0===j(a).find("colgroup").length){var V=j("<colgroup>"),W=j(a).width();j("tr:first td",a.tBodies[0]).each(function(){V.append(j("<col>").css("width",parseInt(1E3*(j(this).width()/W),10)/10+"%"))});j(a).prepend(V)}b.showProcessing&&d.unbind("sortBegin sortEnd").bind("sortBegin sortEnd",function(b){g.isProcessing(a,"sortBegin"===
b.type)});a.hasInitialized=!0;b.debug&&g.benchmark("Overall initialization time",j.data(a,"startoveralltimer"));d.trigger("tablesorter-initialized",a);"function"===typeof b.initialized&&b.initialized(a)})};g.isProcessing=function(c,d,a){var b=c.config;c=a||j(c).find("."+b.cssHeader);d?(0<b.sortList.length&&(c=c.filter(function(){return this.sortDisabled?!1:g.isValueInArray(parseFloat(j(this).attr("data-column")),b.sortList)})),c.addClass(b.cssProcessing)):c.removeClass(b.cssProcessing)};g.processTbody=
function(c,d,a){if(a)return d.before('<span class="tablesorter-savemyplace"/>'),c=j.fn.detach?d.detach():d.remove();c=j(c).find("span.tablesorter-savemyplace");d.insertAfter(c);c.remove()};g.clearTableBody=function(c){c.config.$tbodies.empty()};g.destroy=function(c,d,a){if(c.hasInitialized){g.refreshWidgets(c,!0,!0);var b=j(c),e=c.config,f=b.find("thead:first"),h=f.find("tr."+e.cssHeaderRow).removeClass(e.cssHeaderRow),u=b.find("tfoot:first > tr").children("th, td");f.find("tr").not(h).remove();b.removeData("tablesorter").unbind("sortReset update updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave");
e.$headers.add(u).removeClass(e.cssHeader+" "+e.cssAsc+" "+e.cssDesc).removeAttr("data-column");h.find(e.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter");h.children().each(function(a){j(this).html(e.headerContent[a])});!1!==d&&b.removeClass(e.tableClass+" tablesorter-"+e.theme);c.hasInitialized=!1;"function"===typeof a&&a(c)}};g.regex=[/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
/^0x[0-9a-f]+$/i];g.sortText=function(c,d,a,b){if(d===a)return 0;var e=c.config,f=e.string[e.empties[b]||e.emptyTo],h=g.regex;if(""===d&&0!==f)return"boolean"===typeof f?f?-1:1:-f||-1;if(""===a&&0!==f)return"boolean"===typeof f?f?1:-1:f||1;if("function"===typeof e.textSorter)return e.textSorter(d,a,c,b);c=d.replace(h[0],"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");b=a.replace(h[0],"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");d=parseInt(d.match(h[2]),16)||1!==c.length&&
d.match(h[1])&&Date.parse(d);if(a=parseInt(a.match(h[2]),16)||d&&a.match(h[1])&&Date.parse(a)||null){if(d<a)return-1;if(d>a)return 1}e=Math.max(c.length,b.length);for(d=0;d<e;d++){a=isNaN(c[d])?c[d]||0:parseFloat(c[d])||0;h=isNaN(b[d])?b[d]||0:parseFloat(b[d])||0;if(isNaN(a)!==isNaN(h))return isNaN(a)?1:-1;typeof a!==typeof h&&(a+="",h+="");if(a<h)return-1;if(a>h)return 1}return 0};g.sortTextDesc=function(c,d,a,b){if(d===a)return 0;var e=c.config,f=e.string[e.empties[b]||e.emptyTo];return""===d&&
0!==f?"boolean"===typeof f?f?-1:1:f||1:""===a&&0!==f?"boolean"===typeof f?f?1:-1:-f||-1:"function"===typeof e.textSorter?e.textSorter(a,d,c,b):g.sortText(c,a,d)};g.getTextValue=function(c,d,a){if(d){var b=c.length,e=d+a;for(d=0;d<b;d++)e+=c.charCodeAt(d);return a*e}return 0};g.sortNumeric=function(c,d,a,b,e,f){if(d===a)return 0;c=c.config;b=c.string[c.empties[b]||c.emptyTo];if(""===d&&0!==b)return"boolean"===typeof b?b?-1:1:-b||-1;if(""===a&&0!==b)return"boolean"===typeof b?b?1:-1:b||1;isNaN(d)&&
(d=g.getTextValue(d,e,f));isNaN(a)&&(a=g.getTextValue(a,e,f));return d-a};g.sortNumericDesc=function(c,d,a,b,e,f){if(d===a)return 0;c=c.config;b=c.string[c.empties[b]||c.emptyTo];if(""===d&&0!==b)return"boolean"===typeof b?b?-1:1:b||1;if(""===a&&0!==b)return"boolean"===typeof b?b?1:-1:-b||-1;isNaN(d)&&(d=g.getTextValue(d,e,f));isNaN(a)&&(a=g.getTextValue(a,e,f));return a-d};g.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",
C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119",E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};g.replaceAccents=function(c){var d,a="[",b=g.characterEquivalents;if(!g.characterRegex){g.characterRegexArray={};for(d in b)"string"===typeof d&&(a+=b[d],g.characterRegexArray[d]=
RegExp("["+b[d]+"]","g"));g.characterRegex=RegExp(a+"]")}if(g.characterRegex.test(c))for(d in b)"string"===typeof d&&(c=c.replace(g.characterRegexArray[d],d));return c};g.isValueInArray=function(c,d){var a,b=d.length;for(a=0;a<b;a++)if(d[a][0]===c)return!0;return!1};g.addParser=function(c){var d,a=g.parsers.length,b=!0;for(d=0;d<a;d++)g.parsers[d].id.toLowerCase()===c.id.toLowerCase()&&(b=!1);b&&g.parsers.push(c)};g.getParserById=function(c){var d,a=g.parsers.length;for(d=0;d<a;d++)if(g.parsers[d].id.toLowerCase()===
c.toString().toLowerCase())return g.parsers[d];return!1};g.addWidget=function(c){g.widgets.push(c)};g.getWidgetById=function(c){var d,a,b=g.widgets.length;for(d=0;d<b;d++)if((a=g.widgets[d])&&a.hasOwnProperty("id")&&a.id.toLowerCase()===c.toLowerCase())return a};g.applyWidget=function(c,d){var a=c.config,b=a.widgetOptions,e=a.widgets.sort().reverse(),f,h,m,n=e.length;h=j.inArray("zebra",a.widgets);0<=h&&(a.widgets.splice(h,1),a.widgets.push("zebra"));a.debug&&(f=new Date);for(h=0;h<n;h++)(m=g.getWidgetById(e[h]))&&
(!0===d&&m.hasOwnProperty("init")?m.init(c,m,a,b):!d&&m.hasOwnProperty("format")&&m.format(c,a,b));a.debug&&u("Completed "+(!0===d?"initializing":"applying")+" widgets",f)};g.refreshWidgets=function(c,d,a){var b,h=c.config,f=h.widgets,l=g.widgets,m=l.length;for(b=0;b<m;b++)if(l[b]&&l[b].id&&(d||0>j.inArray(l[b].id,f)))h.debug&&e("Refeshing widgets: Removing "+l[b].id),l[b].hasOwnProperty("remove")&&l[b].remove(c,h,h.widgetOptions);!0!==a&&g.applyWidget(c,d)};g.getData=function(c,d,a){var b="";c=j(c);
var e,f;if(!c.length)return"";e=j.metadata?c.metadata():!1;f=" "+(c.attr("class")||"");"undefined"!==typeof c.data(a)||"undefined"!==typeof c.data(a.toLowerCase())?b+=c.data(a)||c.data(a.toLowerCase()):e&&"undefined"!==typeof e[a]?b+=e[a]:d&&"undefined"!==typeof d[a]?b+=d[a]:" "!==f&&f.match(" "+a+"-")&&(b=f.match(RegExp(" "+a+"-(\\w+)"))[1]||"");return j.trim(b)};g.formatFloat=function(c,d){if("string"!==typeof c||""===c)return c;var a;c=(d&&d.config?!1!==d.config.usNumberFormat:"undefined"!==typeof d?
d:1)?c.replace(/,/g,""):c.replace(/[\s|\.]/g,"").replace(/,/g,".");/^\s*\([.\d]+\)/.test(c)&&(c=c.replace(/^\s*\(/,"-").replace(/\)/,""));a=parseFloat(c);return isNaN(a)?j.trim(c):a};g.isDigit=function(c){return isNaN(c)?/^[\-+(]?\d+[)]?$/.test(c.toString().replace(/[,.'"\s]/g,"")):!0}}});var h=j.tablesorter;j.fn.extend({tablesorter:h.construct});h.addParser({id:"text",is:function(){return!0},format:function(e,u){var p=u.config;e=j.trim(p.ignoreCase?e.toLocaleLowerCase():e);return p.sortLocaleCompare?
h.replaceAccents(e):e},type:"text"});h.addParser({id:"currency",is:function(e){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test(e)},format:function(e,j){return h.formatFloat(e.replace(/[^\w,. \-()]/g,""),j)},type:"numeric"});h.addParser({id:"ipAddress",is:function(e){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(e)},format:function(e,j){var p,r=e.split("."),s="",m=r.length;for(p=0;p<m;p++)s+=("00"+r[p]).slice(-3);return h.formatFloat(s,j)},
type:"numeric"});h.addParser({id:"url",is:function(e){return/^(https?|ftp|file):\/\//.test(e)},format:function(e){return j.trim(e.replace(/(https?|ftp|file):\/\//,""))},type:"text"});h.addParser({id:"isoDate",is:function(e){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)},format:function(e,j){return h.formatFloat(""!==e?(new Date(e.replace(/-/g,"/"))).getTime()||"":"",j)},type:"numeric"});h.addParser({id:"percent",is:function(e){return/(\d\s?%|%\s?\d)/.test(e)},format:function(e,j){return h.formatFloat(e.replace(/%/g,
""),j)},type:"numeric"});h.addParser({id:"usLongDate",is:function(e){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(e)},format:function(e,j){return h.formatFloat((new Date(e.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||"",j)},type:"numeric"});h.addParser({id:"shortDate",is:function(e){return/^(\d{1,2}|\d{4})[\/\-\,\.\s+]\d{1,2}[\/\-\.\,\s+](\d{1,2}|\d{4})$/.test(e)},format:function(e,j,p,r){p=j.config;var s=p.headerList[r],m=s.shortDateFormat;"undefined"===
typeof m&&(m=s.shortDateFormat=h.getData(s,p.headers[r],"dateFormat")||p.dateFormat);e=e.replace(/\s+/g," ").replace(/[\-|\.|\,]/g,"/");"mmddyyyy"===m?e=e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===m?e=e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===m&&(e=e.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3"));return h.formatFloat((new Date(e)).getTime()||"",j)},type:"numeric"});h.addParser({id:"time",is:function(e){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(e)},
format:function(e,j){return h.formatFloat((new Date("2000/01/01 "+e.replace(/(\S)([AP]M)$/i,"$1 $2"))).getTime()||"",j)},type:"numeric"});h.addParser({id:"digit",is:function(e){return h.isDigit(e)},format:function(e,j){return h.formatFloat(e.replace(/[^\w,. \-()]/g,""),j)},type:"numeric"});h.addParser({id:"metadata",is:function(){return!1},format:function(e,h,p){e=h.config;e=!e.parserMetadataName?"sortValue":e.parserMetadataName;return j(p).metadata()[e]},type:"numeric"});h.addWidget({id:"zebra",
format:function(e,u,p){var r,s,m,F,G,C,H=RegExp(u.cssChildRow,"i"),g=u.$tbodies;u.debug&&(G=new Date);for(e=0;e<g.length;e++)r=g.eq(e),C=r.children("tr").length,1<C&&(m=0,r=r.children("tr:visible"),r.each(function(){s=j(this);H.test(this.className)||m++;F=0===m%2;s.removeClass(p.zebra[F?1:0]).addClass(p.zebra[F?0:1])}));u.debug&&h.benchmark("Applying Zebra widget",G)},remove:function(e,h){var p,r,s=h.$tbodies,m=(h.widgetOptions.zebra||["even","odd"]).join(" ");for(p=0;p<s.length;p++)r=j.tablesorter.processTbody(e,
s.eq(p),!0),r.children().removeClass(m),j.tablesorter.processTbody(e,r,!1)}})}(jQuery);