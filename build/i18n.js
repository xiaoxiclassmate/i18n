/*!
* @xiui/i18n v1.0.0
* Author: xiui
* Documentation: js-国际化语言插件
* License: MIT
* Date: Sun Jun 06 2021 22:07:21 GMT+0800 (中国标准时间)
*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.i18n=e():t.i18n=e()}(self,(function(){return function(){"use strict";var t={d:function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e={};t.d(e,{default:function(){return n}});var n=function(){function t(e){void 0===e&&(e={}),this.locale=e.locale,this.baseURL=e.baseURL,this.elTag=e.elTag||"font",this.suffix=e.suffix||"json",Object.assign(t.langMap,e.messages||{}),this.locale&&t.langMap[this.locale]&&(this.langlib=t.langMap[this.locale])}return t.prototype.load=function(t){return function(t){return new Promise((function(e,n){if(/.json$/.test(t)){var o=new XMLHttpRequest;o.overrideMimeType("application/json"),o.open("GET",t,!0),o.onreadystatechange=function(){4===o.readyState&&"200"==o.status?e(JSON.parse(o.responseText)):4===o.readyState&&o.status>=400&&n({status:o.status,statusText:o.statusText})},o.send()}else{window.module=window.module||{};var a=document.createElement("script");a.type="text/javascript",a.src=t,document.head.appendChild(a),a.onload=function(t){var n=window.module.exports;n&&e(n),a.onload=a.onerror=null,a.remove(),delete window.module},a.onerror=function(){a.onload=a.onerror=null,a.remove(),delete window.module,n({status:404,statusText:"get "+t+" error"})}}}))}(this.baseURL+t+"."+this.suffix)},t.prototype.setLanguage=function(e,n){var o=this;return this.locale=e,n&&(t.langMap[e]=n),new Promise((function(t,e){o.run.bind(o)((function(){o.re(),t(o.langlib)}),e)}))},t.prototype.then=function(t){return this.run(t,t),this},t.prototype.run=function(e,n){var o=this;t.langMap[this.locale]?(this.langlib=t.langMap[this.locale],e&&e(this.langlib)):this.load(this.locale).then((function(n){o.langlib=t.langMap[o.locale]=n,e&&e(o.langlib)})).catch((function(t){n&&n(t)}))},t.prototype.destroy=function(){t.langMap={},this.langlib=null,this.locale=null,this.baseURL=null},t.prototype.t=function(t,e){for(var n=t.split("."),o=this.langlib,a=function(t,e){var a=n[t];if(t<e&&/\[(\w+)\]$/.test(a)){var i,r=a.replace(/\[(\w+)\]/,(function(t,e){return i=e,""}));o=o[r][i]}else o=o[a]},i=0,r=n.length;i<r;i++)a(i,r);return e?o.replace(/{(\w+)}/g,(function(t,n){return e[n]||t})):o},t.prototype.h=function(t,e){void 0===e&&(e={});var n=this.t(t,e);return"<"+this.elTag+' data-i18n-key="'+t+'" data-i18n-opt="'+JSON.stringify(e)+'">'+n+"</"+this.elTag+">"},t.prototype.re=function(){var t=this,e=document.querySelectorAll(this.elTag+"[data-i18n-key]");Array.from(e).forEach((function(e){var n=e.getAttribute("data-i18n-key"),o=e.getAttribute("data-i18n-opt");e.innerText=t.t(n,JSON.parse(o))}))},t.langMap={},t}();return e=e.default}()}));
//# sourceMappingURL=i18n.js.map