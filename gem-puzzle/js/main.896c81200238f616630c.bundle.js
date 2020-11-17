(self.webpackChunkgem_puzzle=self.webpackChunkgem_puzzle||[]).push([[179],{729:(e,t,n)=>{"use strict";function r(){localStorage.setItem("gameData",JSON.stringify({time:0,moves:0}));var e=JSON.parse(localStorage.getItem("gameData")),t=function(){localStorage.setItem("gameData",JSON.stringify(e))};this.getProp=function(t){return e[t]},this.incrementMoves=function(){e.moves+=1,t()},this.incrementTime=function(){e.time+=1,t()},this.clearTime=function(){e.time=0,t()},this.clearMoves=function(){e.moves=0,t()}}function a(e){var t=e.top,n=e.left,r=e.height,a=e.width,i=e.inner;this.top=t,this.left=n,this.inner=i;var o=document.createElement("div");o.style.width="".concat(a,"%"),o.style.height="".concat(r,"%"),o.style.top="".concat(this.top*r,"%"),o.style.left="".concat(this.left*a,"%"),o.classList.add("cell"),o.innerHTML=i||"",o.dataset.top=t,o.dataset.left=n,this.get=function(){return o}}function i(e){this.continue=!1;var t=document.createElement("span");t.className="menu-overlay";var n={newGame:function(){e.startNewGame(),t.classList.add("hidden")},continue:function(){e.continueGame(),t.classList.add("hidden")},bestScores:function(){},settings:function(){}};return[{itemName:"New game",onClick:n.newGame,disabled:!1},{itemName:"Continue",onClick:n.continue,disabled:!1}].forEach((function(e){var n=document.createElement("div");n.className="menu-item",n.innerText=e.itemName,e.disabled&&n.classList.add("disabled"),n.addEventListener("click",e.onClick),t.appendChild(n)})),{show:t}}var o=document.createElement("header");o.className="header";var c=document.createElement("h1");c.className="heading",c.textContent="Gem Puzzle Game";var s=document.createElement("div");s.className="data-wrapper";var l=document.createElement("div"),u=document.createElement("span");u.className="timer__text",u.innerText="Timer";var d=document.createElement("span");d.className="timer__data",d.innerText="00:00",l.className="timer",l.append(u,d);var m=document.createElement("div"),f=document.createElement("span");f.className="counter__text",f.innerText="Moves";var p=document.createElement("span");p.className="counter__data",p.innerText="0",m.className="counter",m.append(f,p);var h=document.createElement("div");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(){var e=this;this.storage=new r,this.cells=[],this.isFinished=!1,this.timerId=null;var t,n=function(e){if(Array.isArray(e))return y(e)}(t=Array(15).keys())||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=document.querySelector("#root"),s=function(){var t;e.storage.incrementTime(),d.innerHTML=(t=e.storage.getProp("time"),"".concat(Math.floor(t/60).toString().padStart(2,"0"),":").concat(Math.floor(t%60).toString().padStart(2,"0")))},l=function(){e.timerId&&clearTimeout(e.timerId),c.innerHTML="",p.innerHTML="0",d.innerText="00:00",e.storage.clearTime(),e.storage.clearMoves(),e.generate()},u=new i({startNewGame:function(){n.sort((function(){return.5-Math.random()})),l(),e.timerId=setInterval(s,1e3),h.classList.remove("disabled")},continueGame:function(){e.timerId=setInterval(s,1e3),h.classList.remove("disabled")}});h.addEventListener("click",(function(){clearInterval(e.timerId),e.timerId=null,h.classList.toggle("disabled"),u.show.classList.toggle("hidden")})),this.generate=function(){var t=document.createElement("div"),r=function(){var e=window.innerWidth-2*parseInt(getComputedStyle(c).getPropertyValue("padding"),10);e<=600?(t.style.width="".concat(e,"px"),t.style.height="".concat(e,"px")):(t.style.width="".concat(600,"px"),t.style.height="".concat(600,"px"))};t.id="game-area",t.className="game-area",r(),window.addEventListener("resize",r),c.append(o,t);var i=new a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({height:25,width:25},{top:3,left:3})),s=i.get();s.classList.add("cell-empty"),t.appendChild(s);for(var m=function(r){var o=r%4,c=new a({height:25,width:25,top:(r-o)/4,left:o,inner:n[r]+1}),m=c.get();e.cells.push(c),t.appendChild(m),m.addEventListener("click",(function(){if(Math.abs(c.left-i.left)+Math.abs(c.top-i.top)===1){var n=[i.top,c.top];c.top=n[0],i.top=n[1];var r=[i.left,c.left];c.left=r[0],i.left=r[1];var a=[s.style.top,m.style.top];m.style.top=a[0],s.style.top=a[1];var o=[s.style.left,m.style.left];m.style.left=o[0],s.style.left=o[1],e.storage.incrementMoves(),p.innerText=e.storage.getProp("moves"),e.isFinished=e.cells.every((function(e){return e.inner===4*e.top+e.left+1})),e.isFinished&&(e.timerId&&clearInterval(e.timerId),setTimeout((function(){var e=function(e){var t=e.time,n=e.moves,r=e.menu,a=e.finishGame,i=document.createElement("span");i.className="popup-overlay",i.innerHTML='<div class="popup__text">Ура!<br>Вы решили головоломку за '.concat(t," и ").concat(n," ходов</div>");var o=document.createElement("div");return o.className="popup__btn-close",o.innerText="X",o.addEventListener("click",(function(){i.classList.toggle("hidden"),r.classList.remove("hidden"),a()})),i.appendChild(o),i}({time:d.innerText,moves:p.innerText,menu:u.show,finishGame:l});t.appendChild(e)}),300))}}))},f=0;f<15;f+=1)m(f);t.append(u.show)}}h.className="btn-pause",h.classList.toggle("disabled"),h.innerText="pause",o.appendChild(h),s.append(l,m,h),o.append(c,s);var w=n(379),S=n.n(w),T=n(922);S()(T.Z,{insert:"head",singleton:!1}),T.Z.locals,window.onload=function(){(new b).generate()}},922:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(15),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const c=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,a=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[1],o=a[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),l="/*# ".concat(s," */"),u=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[i].concat(u).concat([l]).join("\n")}return[i].join("\n")}},379:(e,t,n)=>{"use strict";var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var c=e[a],s=t.base?c[0]+t.base:c[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=o(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(m)):i.push({identifier:u,updater:h(m,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function m(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,p=0;function h(e,t){var n,r,a;if(t.singleton){var i=p++;n=f||(f=s(t)),r=d.bind(null,n,i,!1),a=d.bind(null,n,i,!0)}else n=s(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=o(n[r]);i[a].references--}for(var s=c(e,t),l=0;l<n.length;l++){var u=o(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=s}}}}},0,[[729,666]]]);