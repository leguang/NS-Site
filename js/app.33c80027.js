(function(e){function t(t){for(var r,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1fb5e5cb":"14d31276","chunk-2d0b2ece":"8d91a6c5","chunk-5ecd3c20":"6d2cc023","chunk-7e27068c":"c1b658ae","chunk-9a077e06":"f9b36ef8","chunk-dd4ee04e":"06381b8e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1fb5e5cb":1,"chunk-5ecd3c20":1,"chunk-7e27068c":1,"chunk-9a077e06":1,"chunk-dd4ee04e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1fb5e5cb":"82825bf3","chunk-2d0b2ece":"31d6cfe0","chunk-5ecd3c20":"b3f15abe","chunk-7e27068c":"b0f796a9","chunk-9a077e06":"e05e2b8b","chunk-dd4ee04e":"66c7bd43"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3125:function(e,t,n){e.exports=n.p+"img/ic-qq.78c241cc.png"},4446:function(e,t,n){},"455d":function(e,t,n){},"4fca":function(e,t,n){e.exports=n.p+"img/ic-wechat.30ed5b0e.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("186a"),n("450d");var r=n("301f"),a=n.n(r),o=(n("96dc"),n("9cea")),c=n.n(o),s=(n("e612"),n("dd87")),i=n.n(s),u=(n("075a"),n("72aa")),l=n.n(u),d=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("main",{staticClass:"main"},[n("router-view"),n("Footer")],1),n("Support"),n("Go2top")],1)},h=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{header:!0,hover:e.isHover}},[e._m(0),e._m(1),e._m(2)])},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"logo"},[r("a",{attrs:{href:"/"}},[r("img",{attrs:{src:n("e347"),alt:"Node-Studio"}}),r("span",[e._v("NODE STUDIO")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("a",{attrs:{href:"/"}},[e._v("首页")]),n("b",[e._v("/")]),n("a",{attrs:{href:"#solutions"}},[e._v("解决方案")]),n("b",[e._v("/")]),n("a",{attrs:{href:"#services"}},[e._v("服务")]),n("b",[e._v("/")]),n("a",{attrs:{href:"#cases"}},[e._v("合作案例")]),n("b",[e._v("/")]),n("a",{attrs:{href:"#about"}},[e._v("关于我们")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"operation"},[n("div",[e._v("中文")])])}],m={name:"Header",data:function(){return{isHover:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(e){this.isHover=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}}},A=m,b=(n("6e1b"),n("2877")),g=Object(b["a"])(A,p,v,!1,null,"3c38cfb6",null),w=g.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("section",{staticClass:"w container"},[r("div",{staticClass:"logo"},[r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:n("e347"),alt:"Node-Studio"}}),r("span",[e._v("Node Studio")])]),r("p",[e._v("用科技连接美好生活")])]),r("dl",[r("dt",[e._v("解决方案")]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("区块链")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("物联网")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("电商")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("金融")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("IM/即时通讯")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("社交")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("SEO")])])]),r("dl",[r("dt",[e._v("定制服务")]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("App开发")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("网站开发")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("小程序")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("系统开发")])])]),r("dl",[r("dt",[e._v("关注我们")]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("微信公众号")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("微博")])]),r("dd",[r("a",{attrs:{href:"#"}},[e._v("抖音")])])]),r("div",{staticClass:"wechat"},[r("img",{attrs:{src:n("4fca"),alt:"wechat"}}),r("p",[e._v("微信求撩")])])]),r("section",{staticClass:"copyright"},[e._v("Copyright © 2019 Node Studio")])])}],E={name:"Footer"},S=E,y=(n("e49f"),Object(b["a"])(S,C,_,!1,null,"2d07b5c1",null)),T=y.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"support"},[r("div",{staticClass:"container"},[e._m(0),e._m(1),r("footer",[r("a",{attrs:{href:"#"},on:{mouseenter:function(t){e.isHover=!0},mouseleave:function(t){e.isHover=!1}}},[r("img",{staticClass:"wechat",attrs:{src:n("b2a6")}})]),e._m(2)])]),r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.isHover,expression:"isHover"}],staticClass:"extender",attrs:{href:"#"}},[r("img",{staticClass:"shangqiao",attrs:{src:n("4fca")}})])])],1)},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("a",{staticClass:"QQ",attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=137654686&site=qq&menu=yes",target:"_blank"}},[r("img",{staticClass:"img-qq",attrs:{src:n("3125")}})]),r("p",[e._v("QQ在线咨询")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"middle"},[n("p",[e._v("咨询热线")]),n("p",[e._v("13713762300")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"#"}},[r("img",{staticClass:"shangqiao",attrs:{src:n("ecca")}})])}],R={name:"Support",data:function(){return{isHover:!1}},mounted:function(){},methods:{}},Q=R,Y=(n("e539"),Object(b["a"])(Q,k,B,!1,null,"0e1aeea2",null)),O=Y.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isTop?r("section",{staticClass:"go2top",on:{click:e.go2Top}},[r("img",{attrs:{src:n("e6b4"),alt:"返回顶部"}})]):e._e()},K=[],M={name:"Go2top",data:function(){return{isTop:!1}},mounted:function(){this.needScroll()},methods:{go2Top:function(){window.scroll({top:0,left:0,behavior:"smooth"})},needScroll:function(){var e=this,t=document.documentElement.clientHeight;window.onscroll=function(){var n=document.documentElement.scrollTop||document.body.scrollTop;e.isTop=n>=t}}}},H=M,J=(n("92a8"),Object(b["a"])(H,x,K,!1,null,"831ad17e",null)),G=J.exports,N={name:"app",components:{Header:w,Footer:T,Support:O,Go2top:G}},P=N,U=(n("5c0b"),Object(b["a"])(P,f,h,!1,null,null,null)),j=U.exports,D=n("8c4f");d["default"].use(D["a"]);var F=new D["a"]({mode:"history",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-5ecd3c20").then(n.bind(null,"bb51"))},meta:{title:"节点工作室欢迎您"}},{path:"/solutions",name:"solutions",component:function(){return n.e("chunk-9a077e06").then(n.bind(null,"70e4"))},meta:{title:"Solutions"}},{path:"/services",name:"services",component:function(){return n.e("chunk-1fb5e5cb").then(n.bind(null,"f23e"))},meta:{title:"Services"}},{path:"/cases",name:"cases",component:function(){return n.e("chunk-2d0b2ece").then(n.bind(null,"25d9"))},meta:{title:"Cases"}},{path:"/tenet",name:"tenet",component:function(){return n.e("chunk-7e27068c").then(n.bind(null,"9b25"))},meta:{title:"Tenet"}},{path:"/about",name:"about",component:function(){return n.e("chunk-dd4ee04e").then(n.bind(null,"f820"))},meta:{title:"About"}}]});F.afterEach(function(e){window.scrollTo(0,0)}),F.beforeEach(function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()});var L=F;function q(){var e=document.body.clientWidth,t=1920,n=375,r=10;e>=1200?r=100:e>=2*n?r=e/t*100:e>=n&&(r=e/n*10),document.documentElement.style.fontSize=r+"px"}d["default"].use(l.a),d["default"].use(i.a),d["default"].use(c.a),d["default"].use(a.a),d["default"].config.productionTip=!1,new d["default"]({router:L,render:function(e){return e(j)}}).$mount("#app"),window.addEventListener("load",q),window.addEventListener("resize",q)},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(e,t,n){},"6d9c":function(e,t,n){},"6e1b":function(e,t,n){"use strict";var r=n("6d9c"),a=n.n(r);a.a},"92a8":function(e,t,n){"use strict";var r=n("455d"),a=n.n(r);a.a},b2a6:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABcElEQVQ4T62VvytFYRzGP89oY7EYhTKQJAPKpsxYxEIZZDAoyuBO/AEyYJMSRpPFYPKzLEox6S4WPxa2R2+dq9ftnvu6eOsMp54+5/t9v8/zPbJt0mcVELCYksr2i6T6PKHtWaApAz5K2qiiff0C2q4DeiPxk6TbSkDb7UBjpD2T9G77G7AFuAaugAbgTtJYDvAAaAWegW6gS9J9JeCepG7bQ8BUArgl6dh2KGIsD3gEzAA94UkAz4BLYBMYrgQMF78b3cuJpEJOyyvAYKQdl1T81vJ/TvkDWKvir9D+TWabDuCiinYx2CaUnzqnmWAgJfwLcEfSQ/wB20sBWEvLncA5MArMB9uUAd9qjV5R0rrtfWC7KtD2T2wTA9uypMRF9sdZDtFLGbsELM/yF7QcmIpeCRgbexooZBuJcmBqOZSAYTmE4UwAk8AhsBCSVuv6ioHbwDIwlwH7gPvfTjlUmAus5RcQVziSTaIrq7A5vH8CS8xQKqlIX6UAAAAASUVORK5CYII="},e347:function(e,t,n){e.exports=n.p+"img/logo.c74bcd5b.svg"},e49f:function(e,t,n){"use strict";var r=n("4446"),a=n.n(r);a.a},e539:function(e,t,n){"use strict";var r=n("e957"),a=n.n(r);a.a},e6b4:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAACaklEQVRYR+2WTYiNYRTHf3+EpBQR2dhY2EjZiGmSkY+Rj5gwIxtia2Mhe7K1lI+NryHkI+NjkIRsbGwsbJQFUaLkK/x1pvvenvvOnbnvnWuuu5ize9/nnPP8nv8573Ne0QKmFmBgDCKrQmsoYXs2cABY1OT++AbslfRGts8AO5oMkG3XK6k7IM4B3f8bYi5wHJjSZJAXwGFJ71qjMUd6etuzgM5SfJ+k9yPNVbcStmcAR4DdUL7sDJwC9kv6VC9MXRC25wBPgXlDbPQaWCrpbT0ghSFszwSeAPNrbPAKWCbpQ1GQQhC2pwOPgQVJ4u/A0dLzPmBysvYSaJP0sQhITQjb04BHwMIk4VdgtaQAw3YbcCf3mccn2C7pcy2QYSFsTwUeAouTRD+AlRlA9r4Ecg+YlPg+B5ZL+jIcyJAQtuPyug8syQF0SnpQLantFUBfDuQZ0CEp1KtqVSFsR31D3vYk6iewdiiARJEAuQVMTGKjnFG+6KNBNgjCdgTfDMlzABsl3a5V31KPrAGu5UCiVOskxWEqrALC9oRScHYThvMvYH1RgESRALkBRM7MolRxmMhZtjKE7fHAJWBTsh7OWyRdL6JA3sf2BuByDuQq0CXpd+Y/AGF7HBAjfVuSKJw2jxQgUSRArgBxyMwuAD2S/sSLDOIksCsHsF1SKNOw2e4CenMgJyTtGYCwHQ3Yn+wUw2jrvwJIFAmQi8nQi6X4Yu4GRAcQnTtQGWCnpLMNH79KAtvxG3k6AVklqT8rx6EYOsAxSedHAyBRpCd+cGMaSzpY7onR3LRI7poDrEiSRn3GICouq0blbDT+L3rwwSGBLuh+AAAAAElFTkSuQmCC"},e957:function(e,t,n){},ecca:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABW0lEQVQ4T7WUvytGcRTGP08UJeXHwG5EyT+gZEQpA5OBQaRMJhmUzcAfoNhMyosB2UgWKWIxMshkYHt7dHRf3ffthpfr1u2e+t7zOc95vqcjcn6UMw/ZrgdmgcYq4W/AkaSrdF4At4Bb4KJKYPw+CNxI2izlBrAgafgXMGyHZTuSRtLAPUlDvwFGju2y/FD4f0DbncA4UJe8cWERl74Rv0gaK3WUFmS7MTeFttuB1TKg7S5gNMPPM0nHWT5XKNyrBLYC3RmJd5KefgAs5NZycuMfwFOgT1Kx2tGxHR2tSJpOA+eBCeAAeJa0ngzsHNDyTZFeYEbSwycwCRqAOFwG+oEN4BE4+QL4ClymO7O9W7ZtbO8DYf61pLWkWA2wCGRtpnNJh7angA6guRIYo7EfbaeV2e4BmjLUTgLbwAKwBJz9aR/argVCRFHSQBT8EzCxJPZom6T7XICVNrwDCx+4cCZh38YAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.33c80027.js.map