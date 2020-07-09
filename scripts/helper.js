// https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)
hexo.extend.helper.register("pSBC",(r,e,t,l)=>{let n,g,i,s,a,p,b,h=parseInt,u=Math.round,o="string"==typeof t;return"number"!=typeof r||r<-1||r>1||"string"!=typeof e||"r"!=e[0]&&"#"!=e[0]||t&&!o?null:(this.pSBCr||(this.pSBCr=(r=>{let e=r.length,t={};if(e>9){if([n,g,i,o]=r=r.split(","),(e=r.length)<3||e>4)return null;t.r=h("a"==n[3]?n.slice(5):n.slice(4)),t.g=h(g),t.b=h(i),t.a=o?parseFloat(o):-1}else{if(8==e||6==e||e<4)return null;e<6&&(r="#"+r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+(e>4?r[4]+r[4]:"")),r=h(r.slice(1),16),9==e||5==e?(t.r=r>>24&255,t.g=r>>16&255,t.b=r>>8&255,t.a=u((255&r)/.255)/1e3):(t.r=r>>16,t.g=r>>8&255,t.b=255&r,t.a=-1)}return t})),b=e.length>9,b=o?t.length>9||"c"==t&&!b:b,a=this.pSBCr(e),s=r<0,p=t&&"c"!=t?this.pSBCr(t):s?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},s=1-(r=s?-1*r:r),a&&p?(l?(n=u(s*a.r+r*p.r),g=u(s*a.g+r*p.g),i=u(s*a.b+r*p.b)):(n=u((s*a.r**2+r*p.r**2)**.5),g=u((s*a.g**2+r*p.g**2)**.5),i=u((s*a.b**2+r*p.b**2)**.5)),o=a.a,p=p.a,o=(a=o>=0||p>=0)?o<0?p:p<0?o:o*s+p*r:0,b?"rgb"+(a?"a(":"(")+n+","+g+","+i+(a?","+u(1e3*o)/1e3:"")+")":"#"+(4294967296+16777216*n+65536*g+256*i+(a?u(255*o):0)).toString(16).slice(1,a?void 0:-2)):null)});

// https://raw.githubusercontent.com/willin/hexo-wordcount/master/index.js
var util=require("hexo-util"),stripHTML=util.stripHTML,counter=function(u){return[((u=stripHTML(u)).match(/[\u4E00-\u9FA5]/g)||[]).length,(u.replace(/[\u4E00-\u9FA5]/g,"").match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g)||[]).length]};hexo.extend.helper.register("min2read",function(u,{cn:e=300,en:t=160}={}){var r=counter(u),n=r[0]/e+r[1]/t;return n<1?"1":parseInt(n,10)}),hexo.extend.helper.register("wordcount",function(u){var e=counter(u),t=e[0]+e[1];return t<1e3?t:Math.round(t/100)/10+"k"}),hexo.extend.helper.register("totalcount",function(u){var e=0;return u.posts.forEach(function(u){var t=counter(u.content);e+=t[0]+t[1]}),e<1e3?e:Math.round(e/100)/10+"k"});

hexo.extend.helper.register("has_image", content => {
    return !!content.match(/<img.*?>/);
});

hexo.extend.helper.register("has_highlight", content => {
    return !!content.match(/class="hljs.*?"/);
})