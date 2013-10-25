var hexcase=0,b64pad="";function hex_sha1(b){return rstr2hex(rstr_sha1(str2rstr_utf8(b)))}function b64_sha1(b){return rstr2b64(rstr_sha1(str2rstr_utf8(b)))}function any_sha1(b,f){return rstr2any(rstr_sha1(str2rstr_utf8(b)),f)}function hex_hmac_sha1(b,f){return rstr2hex(rstr_hmac_sha1(str2rstr_utf8(b),str2rstr_utf8(f)))}function b64_hmac_sha1(b,f){return rstr2b64(rstr_hmac_sha1(str2rstr_utf8(b),str2rstr_utf8(f)))}
function any_hmac_sha1(b,f,a){return rstr2any(rstr_hmac_sha1(str2rstr_utf8(b),str2rstr_utf8(f)),a)}function sha1_vm_test(){return"a9993e364706816aba3e25717850c26c9cd0d89d"==hex_sha1("abc").toLowerCase()}function rstr_sha1(b){return binb2rstr(binb_sha1(rstr2binb(b),8*b.length))}
function rstr_hmac_sha1(b,f){var a=rstr2binb(b);16<a.length&&(a=binb_sha1(a,8*b.length));for(var c=Array(16),d=Array(16),e=0;16>e;e++)c[e]=a[e]^909522486,d[e]=a[e]^1549556828;a=binb_sha1(c.concat(rstr2binb(f)),512+8*f.length);return binb2rstr(binb_sha1(d.concat(a),672))}function rstr2hex(b){try{hexcase}catch(f){hexcase=0}for(var a=hexcase?"0123456789ABCDEF":"0123456789abcdef",c="",d,e=0;e<b.length;e++)d=b.charCodeAt(e),c+=a.charAt(d>>>4&15)+a.charAt(d&15);return c}
function rstr2b64(b){try{b64pad}catch(f){b64pad=""}for(var a="",c=b.length,d=0;d<c;d+=3)for(var e=b.charCodeAt(d)<<16|(d+1<c?b.charCodeAt(d+1)<<8:0)|(d+2<c?b.charCodeAt(d+2):0),g=0;4>g;g++)a=8*d+6*g>8*b.length?a+b64pad:a+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>6*(3-g)&63);return a}
function rstr2any(b,f){var a=f.length,c=[],d,e,g,h,i=Array(Math.ceil(b.length/2));for(d=0;d<i.length;d++)i[d]=b.charCodeAt(2*d)<<8|b.charCodeAt(2*d+1);for(;0<i.length;){h=[];for(d=g=0;d<i.length;d++)if(g=(g<<16)+i[d],e=Math.floor(g/a),g-=e*a,0<h.length||0<e)h[h.length]=e;c[c.length]=g;i=h}a="";for(d=c.length-1;0<=d;d--)a+=f.charAt(c[d]);c=Math.ceil(8*b.length/(Math.log(f.length)/Math.log(2)));for(d=a.length;d<c;d++)a=f[0]+a;return a}
function str2rstr_utf8(b){for(var f="",a=-1,c,d;++a<b.length;)c=b.charCodeAt(a),d=a+1<b.length?b.charCodeAt(a+1):0,55296<=c&&(56319>=c&&56320<=d&&57343>=d)&&(c=65536+((c&1023)<<10)+(d&1023),a++),127>=c?f+=String.fromCharCode(c):2047>=c?f+=String.fromCharCode(192|c>>>6&31,128|c&63):65535>=c?f+=String.fromCharCode(224|c>>>12&15,128|c>>>6&63,128|c&63):2097151>=c&&(f+=String.fromCharCode(240|c>>>18&7,128|c>>>12&63,128|c>>>6&63,128|c&63));return f}
function str2rstr_utf16le(b){for(var f="",a=0;a<b.length;a++)f+=String.fromCharCode(b.charCodeAt(a)&255,b.charCodeAt(a)>>>8&255);return f}function str2rstr_utf16be(b){for(var f="",a=0;a<b.length;a++)f+=String.fromCharCode(b.charCodeAt(a)>>>8&255,b.charCodeAt(a)&255);return f}function rstr2binb(b){for(var f=Array(b.length>>2),a=0;a<f.length;a++)f[a]=0;for(a=0;a<8*b.length;a+=8)f[a>>5]|=(b.charCodeAt(a/8)&255)<<24-a%32;return f}
function binb2rstr(b){for(var f="",a=0;a<32*b.length;a+=8)f+=String.fromCharCode(b[a>>5]>>>24-a%32&255);return f}
function binb_sha1(b,f){b[f>>5]|=128<<24-f%32;b[(f+64>>9<<4)+15]=f;for(var a=Array(80),c=1732584193,d=-271733879,e=-1732584194,g=271733878,h=-1009589776,i=0;i<b.length;i+=16){for(var l=c,k=d,m=e,n=g,p=h,j=0;80>j;j++){a[j]=16>j?b[i+j]:bit_rol(a[j-3]^a[j-8]^a[j-14]^a[j-16],1);var q=safe_add(safe_add(bit_rol(c,5),sha1_ft(j,d,e,g)),safe_add(safe_add(h,a[j]),sha1_kt(j))),h=g,g=e,e=bit_rol(d,30),d=c,c=q}c=safe_add(c,l);d=safe_add(d,k);e=safe_add(e,m);g=safe_add(g,n);h=safe_add(h,p)}return[c,d,e,g,h]}
function sha1_ft(b,f,a,c){return 20>b?f&a|~f&c:40>b?f^a^c:60>b?f&a|f&c|a&c:f^a^c}function sha1_kt(b){return 20>b?1518500249:40>b?1859775393:60>b?-1894007588:-899497514}function safe_add(b,f){var a=(b&65535)+(f&65535);return(b>>16)+(f>>16)+(a>>16)<<16|a&65535}function bit_rol(b,f){return b<<f|b>>>32-f}hexcase=0;b64pad="";function hex_md5(b){return rstr2hex(rstr_md5(str2rstr_utf8(b)))}function b64_md5(b){return rstr2b64(rstr_md5(str2rstr_utf8(b)))}
function any_md5(b,f){return rstr2any(rstr_md5(str2rstr_utf8(b)),f)}function hex_hmac_md5(b,f){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(b),str2rstr_utf8(f)))}function b64_hmac_md5(b,f){return rstr2b64(rstr_hmac_md5(str2rstr_utf8(b),str2rstr_utf8(f)))}function any_hmac_md5(b,f,a){return rstr2any(rstr_hmac_md5(str2rstr_utf8(b),str2rstr_utf8(f)),a)}function md5_vm_test(){return"900150983cd24fb0d6963f7d28e17f72"==hex_md5("abc").toLowerCase()}
function rstr_md5(b){return binl2rstr(binl_md5(rstr2binl(b),8*b.length))}function rstr_hmac_md5(b,f){var a=rstr2binl(b);16<a.length&&(a=binl_md5(a,8*b.length));for(var c=Array(16),d=Array(16),e=0;16>e;e++)c[e]=a[e]^909522486,d[e]=a[e]^1549556828;a=binl_md5(c.concat(rstr2binl(f)),512+8*f.length);return binl2rstr(binl_md5(d.concat(a),640))}
function rstr2hex(b){try{hexcase}catch(f){hexcase=0}for(var a=hexcase?"0123456789ABCDEF":"0123456789abcdef",c="",d,e=0;e<b.length;e++)d=b.charCodeAt(e),c+=a.charAt(d>>>4&15)+a.charAt(d&15);return c}
function rstr2b64(b){try{b64pad}catch(f){b64pad=""}for(var a="",c=b.length,d=0;d<c;d+=3)for(var e=b.charCodeAt(d)<<16|(d+1<c?b.charCodeAt(d+1)<<8:0)|(d+2<c?b.charCodeAt(d+2):0),g=0;4>g;g++)a=8*d+6*g>8*b.length?a+b64pad:a+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>6*(3-g)&63);return a}
function rstr2any(b,f){var a=f.length,c,d,e,g,h,i=Array(Math.ceil(b.length/2));for(c=0;c<i.length;c++)i[c]=b.charCodeAt(2*c)<<8|b.charCodeAt(2*c+1);var l=Math.ceil(8*b.length/(Math.log(f.length)/Math.log(2))),k=Array(l);for(d=0;d<l;d++){h=[];for(c=g=0;c<i.length;c++)if(g=(g<<16)+i[c],e=Math.floor(g/a),g-=e*a,0<h.length||0<e)h[h.length]=e;k[d]=g;i=h}a="";for(c=k.length-1;0<=c;c--)a+=f.charAt(k[c]);return a}
function str2rstr_utf8(b){for(var f="",a=-1,c,d;++a<b.length;)c=b.charCodeAt(a),d=a+1<b.length?b.charCodeAt(a+1):0,55296<=c&&(56319>=c&&56320<=d&&57343>=d)&&(c=65536+((c&1023)<<10)+(d&1023),a++),127>=c?f+=String.fromCharCode(c):2047>=c?f+=String.fromCharCode(192|c>>>6&31,128|c&63):65535>=c?f+=String.fromCharCode(224|c>>>12&15,128|c>>>6&63,128|c&63):2097151>=c&&(f+=String.fromCharCode(240|c>>>18&7,128|c>>>12&63,128|c>>>6&63,128|c&63));return f}
function str2rstr_utf16le(b){for(var f="",a=0;a<b.length;a++)f+=String.fromCharCode(b.charCodeAt(a)&255,b.charCodeAt(a)>>>8&255);return f}function str2rstr_utf16be(b){for(var f="",a=0;a<b.length;a++)f+=String.fromCharCode(b.charCodeAt(a)>>>8&255,b.charCodeAt(a)&255);return f}function rstr2binl(b){for(var f=Array(b.length>>2),a=0;a<f.length;a++)f[a]=0;for(a=0;a<8*b.length;a+=8)f[a>>5]|=(b.charCodeAt(a/8)&255)<<a%32;return f}
function binl2rstr(b){for(var f="",a=0;a<32*b.length;a+=8)f+=String.fromCharCode(b[a>>5]>>>a%32&255);return f}
function binl_md5(b,f){b[f>>5]|=128<<f%32;b[(f+64>>>9<<4)+14]=f;for(var a=1732584193,c=-271733879,d=-1732584194,e=271733878,g=0;g<b.length;g+=16)var h=a,i=c,l=d,k=e,a=md5_ff(a,c,d,e,b[g+0],7,-680876936),e=md5_ff(e,a,c,d,b[g+1],12,-389564586),d=md5_ff(d,e,a,c,b[g+2],17,606105819),c=md5_ff(c,d,e,a,b[g+3],22,-1044525330),a=md5_ff(a,c,d,e,b[g+4],7,-176418897),e=md5_ff(e,a,c,d,b[g+5],12,1200080426),d=md5_ff(d,e,a,c,b[g+6],17,-1473231341),c=md5_ff(c,d,e,a,b[g+7],22,-45705983),a=md5_ff(a,c,d,e,b[g+8],7,
1770035416),e=md5_ff(e,a,c,d,b[g+9],12,-1958414417),d=md5_ff(d,e,a,c,b[g+10],17,-42063),c=md5_ff(c,d,e,a,b[g+11],22,-1990404162),a=md5_ff(a,c,d,e,b[g+12],7,1804603682),e=md5_ff(e,a,c,d,b[g+13],12,-40341101),d=md5_ff(d,e,a,c,b[g+14],17,-1502002290),c=md5_ff(c,d,e,a,b[g+15],22,1236535329),a=md5_gg(a,c,d,e,b[g+1],5,-165796510),e=md5_gg(e,a,c,d,b[g+6],9,-1069501632),d=md5_gg(d,e,a,c,b[g+11],14,643717713),c=md5_gg(c,d,e,a,b[g+0],20,-373897302),a=md5_gg(a,c,d,e,b[g+5],5,-701558691),e=md5_gg(e,a,c,d,b[g+
10],9,38016083),d=md5_gg(d,e,a,c,b[g+15],14,-660478335),c=md5_gg(c,d,e,a,b[g+4],20,-405537848),a=md5_gg(a,c,d,e,b[g+9],5,568446438),e=md5_gg(e,a,c,d,b[g+14],9,-1019803690),d=md5_gg(d,e,a,c,b[g+3],14,-187363961),c=md5_gg(c,d,e,a,b[g+8],20,1163531501),a=md5_gg(a,c,d,e,b[g+13],5,-1444681467),e=md5_gg(e,a,c,d,b[g+2],9,-51403784),d=md5_gg(d,e,a,c,b[g+7],14,1735328473),c=md5_gg(c,d,e,a,b[g+12],20,-1926607734),a=md5_hh(a,c,d,e,b[g+5],4,-378558),e=md5_hh(e,a,c,d,b[g+8],11,-2022574463),d=md5_hh(d,e,a,c,b[g+
11],16,1839030562),c=md5_hh(c,d,e,a,b[g+14],23,-35309556),a=md5_hh(a,c,d,e,b[g+1],4,-1530992060),e=md5_hh(e,a,c,d,b[g+4],11,1272893353),d=md5_hh(d,e,a,c,b[g+7],16,-155497632),c=md5_hh(c,d,e,a,b[g+10],23,-1094730640),a=md5_hh(a,c,d,e,b[g+13],4,681279174),e=md5_hh(e,a,c,d,b[g+0],11,-358537222),d=md5_hh(d,e,a,c,b[g+3],16,-722521979),c=md5_hh(c,d,e,a,b[g+6],23,76029189),a=md5_hh(a,c,d,e,b[g+9],4,-640364487),e=md5_hh(e,a,c,d,b[g+12],11,-421815835),d=md5_hh(d,e,a,c,b[g+15],16,530742520),c=md5_hh(c,d,e,
a,b[g+2],23,-995338651),a=md5_ii(a,c,d,e,b[g+0],6,-198630844),e=md5_ii(e,a,c,d,b[g+7],10,1126891415),d=md5_ii(d,e,a,c,b[g+14],15,-1416354905),c=md5_ii(c,d,e,a,b[g+5],21,-57434055),a=md5_ii(a,c,d,e,b[g+12],6,1700485571),e=md5_ii(e,a,c,d,b[g+3],10,-1894986606),d=md5_ii(d,e,a,c,b[g+10],15,-1051523),c=md5_ii(c,d,e,a,b[g+1],21,-2054922799),a=md5_ii(a,c,d,e,b[g+8],6,1873313359),e=md5_ii(e,a,c,d,b[g+15],10,-30611744),d=md5_ii(d,e,a,c,b[g+6],15,-1560198380),c=md5_ii(c,d,e,a,b[g+13],21,1309151649),a=md5_ii(a,
c,d,e,b[g+4],6,-145523070),e=md5_ii(e,a,c,d,b[g+11],10,-1120210379),d=md5_ii(d,e,a,c,b[g+2],15,718787259),c=md5_ii(c,d,e,a,b[g+9],21,-343485551),a=safe_add(a,h),c=safe_add(c,i),d=safe_add(d,l),e=safe_add(e,k);return[a,c,d,e]}function md5_cmn(b,f,a,c,d,e){return safe_add(bit_rol(safe_add(safe_add(f,b),safe_add(c,e)),d),a)}function md5_ff(b,f,a,c,d,e,g){return md5_cmn(f&a|~f&c,b,f,d,e,g)}function md5_gg(b,f,a,c,d,e,g){return md5_cmn(f&c|a&~c,b,f,d,e,g)}
function md5_hh(b,f,a,c,d,e,g){return md5_cmn(f^a^c,b,f,d,e,g)}function md5_ii(b,f,a,c,d,e,g){return md5_cmn(a^(f|~c),b,f,d,e,g)}function safe_add(b,f){var a=(b&65535)+(f&65535);return(b>>16)+(f>>16)+(a>>16)<<16|a&65535}function bit_rol(b,f){return b<<f|b>>>32-f};