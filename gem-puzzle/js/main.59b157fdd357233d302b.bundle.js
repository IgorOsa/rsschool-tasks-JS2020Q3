(self.webpackChunkgem_puzzle=self.webpackChunkgem_puzzle||[]).push([[179],{312:(e,t,n)=>{"use strict";function r(){var e=JSON.parse(localStorage.getItem("gameData"))?JSON.parse(localStorage.getItem("gameData")):localStorage.setItem("gameData",JSON.stringify({time:"0",moves:"0",dimension:"4"})),t=function(){localStorage.setItem("gameData",JSON.stringify(e))};this.getProp=function(t){return e[t]},this.setProp=function(n,r){e[n]=r,t()},this.incrementMoves=function(){e.moves+=1,t()},this.incrementTime=function(){e.time+=1,t()},this.clearTime=function(){e.time=0,t()},this.clearMoves=function(){e.moves=0,t()}}function i(e){var t=e.top,n=e.left,r=e.height,i=e.width,o=e.inner,a=e.imageSrc,s=e.dimension;this.top=t,this.left=n,this.inner=o,this.isEmpty=!1;var c=document.createElement("div");if(c.style.width="".concat(i,"%"),c.style.height="".concat(r,"%"),c.style.top="".concat(this.top*r,"%"),c.style.left="".concat(this.left*i,"%"),c.classList.add("cell"),c.innerHTML=o||"",c.style.fontSize="".concat(4/s,"em"),a){var l=100*s;c.style.backgroundSize="".concat(l,"% ").concat(l,"%"),c.style.backgroundImage="url(".concat(a,")"),c.style.backgroundPosition="-".concat((o-1)%s*100,"% -").concat(100*Math.floor((o-1)/s),"%")}this.get=function(){return c},this.node=this.get()}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=document.createElement(e);return t&&(o.innerText=t),n&&(o.className=n),r&&(o.id=r),i&&o.classList.add("disabled"),o},a=function(e){return'<i class="material-icons">'.concat(e,"</i>")};function s(e){var t=e.storage,n=parseInt(t.getProp("dimension"),10),r=o("span",null,"menu-overlay"),i=o("div","New game","menu-item","new-game"),a=o("div","Continue","menu-item","continue-game",!0),s=o("div","Save game","menu-item","save-game",!0),c=o("div","Load game","menu-item","load-game",!0),l=o("div",null,"dimension","");l.innerHTML="Board dimension<br>";var d=o("select",null,"dimension__select");l.appendChild(d);for(var u=3;u<=10;u+=1){var m=o("option","".concat(u,"x").concat(u));m.value=u,u===n&&(m.selected=!0),d.appendChild(m)}return r.append(i,a,s,c,l),{overlay:r,newGame:i,continueGame:a,saveGame:s,loadGame:c,dimentionSelect:d}}var c=o("header",null,"header"),l=o("h1","Gem Puzzle Game","heading"),d=o("div",null,"data-wrapper"),u=o("div",null,"timer"),m=o("span","Timer","timer__text"),p=o("span","00:00","timer__data");u.append(m,p);var f=o("div",null,"counter"),v=o("span","Moves","counter__text"),h=o("span","0","counter__data");f.append(v,h);var g=o("div","Pause","btn-pause",null,!0);c.appendChild(g);var y=o("div","Sound","btn-sound");d.append(y,u,f,g),c.append(l,d);const b=n.p+"assets/sounds/tink.wav",w=n.p+"assets/images/125.jpg";function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(){var e=this;this.storage=new r,this.isFinished=!1,this.timerId=null,this.sounds=!0,this.cells=[],this.dimension=parseInt(this.storage.getProp("dimension"),10),this.totalCells=Math.pow(this.dimension,2)-1,this.randomNumbers=I(Array(this.totalCells).keys());var t=document.querySelector("#root"),n=new s({storage:this.storage}),l=function(){var t;e.storage.incrementTime(),p.innerHTML=(t=e.storage.getProp("time"),"".concat(Math.floor(t/60).toString().padStart(2,"0"),":").concat(Math.floor(t%60).toString().padStart(2,"0")))},d=function(){e.cells=[],e.timerId&&clearTimeout(e.timerId),t.innerHTML="",h.innerHTML="0",p.innerText="00:00",e.storage.clearTime(),e.storage.clearMoves(),e.generate()};n.newGame.addEventListener("click",(function(){e.randomNumbers.sort((function(){return.5-Math.random()})),d(),e.timerId=setInterval(l,1e3),g.classList.remove("disabled"),n.overlay.classList.add("hidden"),n.continueGame.classList.remove("disabled")})),n.continueGame.addEventListener("click",(function(){e.timerId=setInterval(l,1e3),g.classList.remove("disabled"),n.overlay.classList.toggle("hidden")})),n.dimentionSelect.addEventListener("change",(function(t){var n=parseInt(t.target.value,10);e.storage.setProp("dimension",n),e.dimension=n,e.dimension=parseInt(e.storage.getProp("dimension"),10),e.totalCells=Math.pow(e.dimension,2)-1,e.randomNumbers=I(Array(e.totalCells).keys()),d()})),g.addEventListener("click",(function(){clearInterval(e.timerId),e.timerId=null,g.classList.toggle("disabled"),n.overlay.classList.toggle("hidden")})),y.innerHTML=a(this.sounds?"volume_up":"volume_off"),y.addEventListener("click",(function(){e.sounds=!e.sounds,y.innerHTML=a(e.sounds?"volume_up":"volume_off")})),this.generate=function(){var r={top:e.dimension-1,left:e.dimension-1},a=100/e.dimension,s=o("div",null,"game-area","game-area"),l=function(){var e=window.innerWidth-2*parseInt(getComputedStyle(t).getPropertyValue("padding"),10);e<=600?(s.style.width="".concat(e,"px"),s.style.height="".concat(e,"px"),s.style.fontSize="".concat(e/100,"rem")):(s.style.width="".concat(600,"px"),s.style.height="".concat(600,"px"),s.style.fontSize="".concat(6,"rem"))};l(),window.addEventListener("resize",l);var u=document.createElement("div");u.style.fontSize="1.2rem",u.innerText="* Цифры оставлены для удобства проверки!",t.append(c,s,u);var m=new i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({height:a,width:a,dimension:e.dimension},r));m.isEmpty=!0,e.cells.push(m),m.node.classList.add("cell-empty"),s.appendChild(m.node);for(var f=function(t){var r=t%e.dimension,o=(t-r)/e.dimension,c=new i({height:a,width:a,top:o,left:r,inner:e.randomNumbers[t]+1,imageSrc:w,dimension:e.dimension});e.cells.push(c),s.appendChild(c.node),c.node.addEventListener("click",(function(){var t;if(Math.abs(c.left-m.left)+Math.abs(c.top-m.top)===1){e.sounds&&((t=new Audio).src=b,t.currentTime=0,t.play());var r=[m.top,c.top];c.top=r[0],m.top=r[1];var i=[m.left,c.left];c.left=i[0],m.left=i[1];var o=[m.node.style.top,c.node.style.top];c.node.style.top=o[0],m.node.style.top=o[1];var a=[m.node.style.left,c.node.style.left];c.node.style.left=a[0],m.node.style.left=a[1],e.storage.incrementMoves(),h.innerText=e.storage.getProp("moves"),e.isFinished=e.cells.filter((function(e){return!e.isEmpty})).every((function(t){return t.inner===t.top*e.dimension+t.left+1})),e.isFinished&&(e.timerId&&clearInterval(e.timerId),setTimeout((function(){var e=function(e){var t=e.time,n=e.moves,r=e.menu,i=e.finishGame,o=e.btnPause,a=document.createElement("span");a.className="popup-overlay",a.innerHTML='<div class="popup__text">Hurray!<br>You solved the puzzle in '.concat(t," and ").concat(n," moves.</div>");var s=document.createElement("div");return s.className="popup__btn-close",s.innerText="X",o.classList.add("disabled"),s.addEventListener("click",(function(){a.classList.toggle("hidden"),r.overlay.classList.remove("hidden"),r.continueGame.classList.add("disabled"),i()})),a.appendChild(s),a}({time:p.innerText,moves:h.innerText,menu:n,btnPause:g,finishGame:d});s.appendChild(e)}),300))}}))},v=0;v<e.totalCells;v+=1)f(v);s.append(n.overlay)}}var M=n(379),j=n.n(M),C=n(969);j()(C.Z,{insert:"head",singleton:!1}),C.Z.locals,window.onload=function(){(new T).generate()}},969:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(15),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,i=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[1],a=i[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),l="/*# ".concat(c," */"),d=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[o].concat(d).concat([l]).join("\n")}return[o].join("\n")}},379:(e,t,n)=>{"use strict";var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=a(d),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(m)):o.push({identifier:d,updater:v(m,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,f=0;function v(e,t){var n,r,i;if(t.singleton){var o=f++;n=p||(p=c(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=c(t),r=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var c=s(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=c}}}}},0,[[312,666]]]);