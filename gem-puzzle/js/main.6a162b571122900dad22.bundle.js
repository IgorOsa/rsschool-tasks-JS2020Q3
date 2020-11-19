(self.webpackChunkgem_puzzle=self.webpackChunkgem_puzzle||[]).push([[179],{312:(e,t,n)=>{"use strict";function r(){localStorage.setItem("gameData",JSON.stringify({time:0,moves:0}));var e=JSON.parse(localStorage.getItem("gameData")),t=function(){localStorage.setItem("gameData",JSON.stringify(e))};this.getProp=function(t){return e[t]},this.incrementMoves=function(){e.moves+=1,t()},this.incrementTime=function(){e.time+=1,t()},this.clearTime=function(){e.time=0,t()},this.clearMoves=function(){e.moves=0,t()}}function i(e){var t=e.top,n=e.left,r=e.height,i=e.width,o=e.inner,a=e.imageSrc;this.top=t,this.left=n,this.inner=o,this.isEmpty=!1;var s=document.createElement("div");s.style.width="".concat(i,"%"),s.style.height="".concat(r,"%"),s.style.top="".concat(this.top*r,"%"),s.style.left="".concat(this.left*i,"%"),s.classList.add("cell"),s.innerHTML=o||"",a&&(s.style.backgroundSize="400% 400%",s.style.backgroundImage="url(".concat(a,")"),s.style.backgroundPosition="-".concat((o-1)%4*100,"% -").concat(100*Math.floor((o-1)/4),"%")),this.get=function(){return s},this.node=this.get()}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=document.createElement(e);return t&&(o.innerText=t),n&&(o.className=n),r&&(o.id=r),i&&o.classList.add("disabled"),o},a=function(e){return'<i class="material-icons">'.concat(e,"</i>")};function s(){var e=o("span",null,"menu-overlay"),t=o("div","New game","menu-item","new-game"),n=o("div","Continue","menu-item","continue-game",!0),r=o("div","Save game","menu-item","save-game",!0),i=o("div","Load game","menu-item","load-game",!0);return e.append(t,n,r,i),{overlay:e,newGame:t,continueGame:n,saveGame:r,loadGame:i}}var c=o("header",null,"header"),l=o("h1","Gem Puzzle Game","heading"),u=o("div",null,"data-wrapper"),d=o("div",null,"timer"),f=o("span","Timer","timer__text"),p=o("span","00:00","timer__data");d.append(f,p);var m=o("div",null,"counter"),v=o("span","Moves","counter__text"),h=o("span","0","counter__data");m.append(v,h);var g=o("div","Pause","btn-pause",null,!0);c.appendChild(g);var y=o("div","Sound","btn-sound");u.append(y,d,m,g),c.append(l,u);const b=n.p+"assets/sounds/tink.wav",w=n.p+"assets/images/125.jpg";function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(){var e=this;this.storage=new r,this.cells=[],this.isFinished=!1,this.timerId=null,this.sounds=!0;var t,n=function(e){if(Array.isArray(e))return O(e)}(t=Array(15).keys())||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=document.querySelector("#root"),u=new s,d=function(){var t;e.storage.incrementTime(),p.innerHTML=(t=e.storage.getProp("time"),"".concat(Math.floor(t/60).toString().padStart(2,"0"),":").concat(Math.floor(t%60).toString().padStart(2,"0")))},f=function(){e.timerId&&clearTimeout(e.timerId),l.innerHTML="",h.innerHTML="0",p.innerText="00:00",e.storage.clearTime(),e.storage.clearMoves(),e.generate()};u.newGame.addEventListener("click",(function(){n.sort((function(){return.5-Math.random()})),f(),e.timerId=setInterval(d,1e3),g.classList.remove("disabled"),u.overlay.classList.add("hidden"),u.continueGame.classList.remove("disabled")})),u.continueGame.addEventListener("click",(function(){e.timerId=setInterval(d,1e3),g.classList.remove("disabled"),u.overlay.classList.toggle("hidden")})),g.addEventListener("click",(function(){clearInterval(e.timerId),e.timerId=null,g.classList.toggle("disabled"),u.overlay.classList.toggle("hidden")})),y.innerHTML=a(this.sounds?"volume_up":"volume_off"),y.addEventListener("click",(function(){e.sounds=!e.sounds,y.innerHTML=a(e.sounds?"volume_up":"volume_off")})),this.generate=function(){var t=o("div",null,"game-area","game-area"),r=function(){var e=window.innerWidth-2*parseInt(getComputedStyle(l).getPropertyValue("padding"),10);e<=600?(t.style.width="".concat(e,"px"),t.style.height="".concat(e,"px")):(t.style.width="".concat(600,"px"),t.style.height="".concat(600,"px"))};r(),window.addEventListener("resize",r);var a=document.createElement("div");a.style.fontSize="1.2rem",a.innerText="* Цифры оставлены для удобства проверки!",l.append(c,t,a);var s=new i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({height:25,width:25},{top:3,left:3}));s.isEmpty=!0,e.cells.push(s),s.node.classList.add("cell-empty"),t.appendChild(s.node);for(var d=function(r){var o=r%4,a=new i({height:25,width:25,top:(r-o)/4,left:o,inner:n[r]+1,imageSrc:w});e.cells.push(a),t.appendChild(a.node),a.node.addEventListener("click",(function(){var n;if(Math.abs(a.left-s.left)+Math.abs(a.top-s.top)===1){e.sounds&&((n=new Audio).src=b,n.currentTime=0,n.play());var r=[s.top,a.top];a.top=r[0],s.top=r[1];var i=[s.left,a.left];a.left=i[0],s.left=i[1];var o=[s.node.style.top,a.node.style.top];a.node.style.top=o[0],s.node.style.top=o[1];var c=[s.node.style.left,a.node.style.left];a.node.style.left=c[0],s.node.style.left=c[1],e.storage.incrementMoves(),h.innerText=e.storage.getProp("moves"),e.isFinished=e.cells.filter((function(e){return!e.isEmpty})).every((function(e){return e.inner===4*e.top+e.left+1})),e.isFinished&&(e.timerId&&clearInterval(e.timerId),setTimeout((function(){var e=function(e){var t=e.time,n=e.moves,r=e.menu,i=e.finishGame,o=e.btnPause,a=document.createElement("span");a.className="popup-overlay",a.innerHTML='<div class="popup__text">Ура!<br>Вы решили головоломку за '.concat(t," и ").concat(n," ходов</div>");var s=document.createElement("div");return s.className="popup__btn-close",s.innerText="X",o.classList.add("disabled"),s.addEventListener("click",(function(){a.classList.toggle("hidden"),r.overlay.classList.remove("hidden"),r.continueGame.classList.add("disabled"),i()})),a.appendChild(s),a}({time:p.innerText,moves:h.innerText,menu:u,btnPause:g,finishGame:f});t.appendChild(e)}),300))}}))},m=0;m<15;m+=1)d(m);t.append(u.overlay)}}var j=n(379),I=n.n(j),M=n(969);I()(M.Z,{insert:"head",singleton:!1}),M.Z.locals,window.onload=function(){(new T).generate()}},969:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(15),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,i=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],a=i[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),l="/*# ".concat(c," */"),u=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(u).concat([l]).join("\n")}return[o].join("\n")}},379:(e,t,n)=>{"use strict";var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=a(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:u,updater:v(f,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function v(e,t){var n,r,i;if(t.singleton){var o=m++;n=p||(p=c(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=c(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var c=s(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=c}}}}},0,[[312,666]]]);