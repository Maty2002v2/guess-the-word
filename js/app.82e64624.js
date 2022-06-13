(function(e){function t(t){for(var o,a,i=t[0],l=t[1],u=t[2],s=0,d=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d225402":"d413c23d"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var u=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",u.name="ChunkLoadError",u.type=o,u.request=c,n[1](u)}r[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1644:function(e,t,n){"use strict";n("74fe")},"1d6a":function(e,t,n){"use strict";n("ded4")},"1de9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("be92");function c(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("board-game-component"),l=Object(o["resolveComponent"])("play-again-component"),u=Object(o["resolveComponent"])("tip-container-component");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["container",[r.wordObject?"show":"hide"]]),style:{transition:"opacity 0.5s linear"}},[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(i),Object(o["createVNode"])(l),Object(o["createVNode"])(u)])],2)}var a=n("c7eb"),i=n("1da1"),l=(n("d3b7"),n("3ca3"),n("ddb0"),Object(r["b"])("Words",{state:function(){return{wordObject:null,loading:!1,error:null}},getters:{getWord:function(e){return null===e.wordObject?"":e.wordObject.word},getCategpry:function(e){return null===e.wordObject?"":e.wordObject.category},getTip:function(e){return null===e.wordObject?"":e.wordObject.tip}},actions:{fetchWord:function(){var e=this;return Object(i["a"])(Object(a["a"])().mark((function t(){return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.wordObject=null,e.loading=!0,t.prev=2,t.next=5,fetch("https://matikster1.ct8.pl/").then((function(e){return e.json()})).then((function(e){return e}));case 5:e.wordObject=t.sent,t.next=14;break;case 8:return t.prev=8,t.t0=t["catch"](2),t.next=12,n.e("chunk-2d225402").then(n.t.bind(null,"e430",3));case 12:e.wordObject=t.sent.default.random(),e.error=t.t0;case 14:return t.prev=14,e.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[2,8,14,17]])})))()}}})),u=Object(r["b"])("Main",{state:function(){return{heart:1,finishedGame:!1,winningGame:!1,numberOfTipsAvailable:null===localStorage.getItem("numberOfTip")?3:parseInt(localStorage.getItem("numberOfTip")),showTipFlag:!1}},getters:{getFinishGame:function(e){return e.finishedGame},getGameResult:function(e){return e.winningGame},getNumberOfTipsAvailable:function(e){return e.numberOfTipsAvailable},getShowTipFlag:function(e){return e.showTipFlag},whetherTipIsAvailable:function(){return!this.getFinishGame&&this.getNumberOfTipsAvailable>0}},actions:{finishGame:function(){this.finishedGame=!0,this.showTipFlag=!1},changeGameResult:function(e){e&&this.changeNumberOfTipsAvailable(1),this.winningGame=e},restartGame:function(){this.finishedGame=!1,this.winningGame=!1,this.showTipFlag=!1},changeNumberOfTipsAvailable:function(e){this.numberOfTipsAvailable+e>=0&&(this.numberOfTipsAvailable+=e)},switchTipFlag:function(){this.showTipFlag=!this.showTipFlag}}}),s=Object(r["b"])("GlobalWatchs",(function(){var e=Object(r["c"])(u()),t=e.getNumberOfTipsAvailable;Object(o["watch"])(t,(function(e){localStorage.setItem("numberOfTip",e)}),{deep:!0})})),p={class:"boardGame"},d={class:"category"},b=Object(o["createTextVNode"])(" Kategoria: ");function f(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("word-block-component");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",p,[Object(o["createElementVNode"])("h1",d,[b,Object(o["createElementVNode"])("i",null,Object(o["toDisplayString"])(r.getCategpry),1)]),(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(5,(function(e,t){return Object(o["createVNode"])(i,{key:e,"line-number":t,"data-lineNumber":t,word:r.getWord,onCompleteWord:r.nextLineOfWord,onLineChange:r.lineChange},null,8,["line-number","data-lineNumber","word","onCompleteWord","onLineChange"])})),64))])}var m=n("2909"),O=(n("7db0"),{class:"wordBlock"});function v(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("letter-block-component");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",O,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.word,(function(c,a){return Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:a,letter:c,onPress:t[0]||(t[0]=function(e){return r.saveUserWord(e)}),onCompleteWord:r.completeWord,onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.$emit("lineChange",n.lineNumber)}),["prevent"]))},null,8,["letter","onCompleteWord"])})),128))])}n("a9e3");function h(e,t,n,r,c,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:Object(o["normalizeClass"])(["letterBlock",{goodAnswer:r.checkingTheLetter}]),"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.value=e}),onInput:t[1]||(t[1]=function(e){return r.goToTheNextLetter(e)})},null,34),[[o["vModelText"],r.value]])])}var g={name:"LetterBlockComponent",props:{letter:{type:String}},emits:["completeWord","press"],setup:function(e,t){var n=t.emit,r=Object(o["ref"])("");function c(e){var t=[260,262,280,321,323,211,346,377,379,261,263,281,322,324,243,347,378,380];return!!(e>=65&&e<=90||e>=97&&e<=122||t.find((function(t){return t===e})))}function a(e){var t=e.target.parentNode.nextSibling.firstChild;c(e.data.charCodeAt(0))?(n("press",e),e.target.disabled=!0,t?t.focus():n("completeWord")):r.value=""}var i=Object(o["computed"])((function(){return r.value.toLowerCase()==e.letter}));return{value:r,checkingTheLetter:i,goToTheNextLetter:a}}},j=(n("6c5d"),n("6b0d")),w=n.n(j);const k=w()(g,[["render",h],["__scopeId","data-v-c428a892"]]);var T=k,C={name:"WordBlockComponent",components:{LetterBlockComponent:T},props:{lineNumber:{type:Number},word:{type:String}},setup:function(e,t){var n=t.emit,c=Object(o["ref"])(""),a=Object(r["c"])(u()),i=a.getFinishGame,l=u(),s=l.finishGame,p=l.changeGameResult;function d(e){c.value+=e.target.value.toLowerCase()}function b(){if(c.value===e.word)return s(),void p(!0);n("completeWord")}return Object(o["watch"])(i,(function(e){e||(c.value="")})),{saveUserWord:d,completeWord:b,userWord:c}}};const y=w()(C,[["render",v]]);var B=y,N={name:"TheBoardGameComponent",components:{WordBlockComponent:B},setup:function(){var e=Object(o["ref"])([]),t=Object(o["ref"])(0),n=Object(o["ref"])(0),c=Object(r["c"])(u()),a=c.getFinishGame,i=u(),s=i.finishGame,p=Object(r["c"])(l()),d=p.getWord,b=p.getCategpry,f=l(),O=f.fetchWord;function v(){if(n.value>0){e.value[t.value]=null;var o=e.value.find((function(e){return null!==e}));t.value=parseInt(o.dataset.linenumber),o.firstElementChild.firstElementChild.focus()}else e.value[0].firstElementChild.firstElementChild.focus()}function h(){n.value++,5===n.value?s():v()}function g(e){t.value=e}function j(){e.value=Object(m["a"])(document.querySelectorAll(".wordBlock")),t.value=0,n.value=0,v()}return Object(o["onMounted"])((function(){O().then((function(){return e.value=Object(m["a"])(document.querySelectorAll(".wordBlock"))})).then((function(){return v()}))})),Object(o["watch"])(a,(function(e){e||j()})),{getWord:d,getCategpry:b,nextLineOfWord:h,lineChange:g}}};n("7597");const G=w()(N,[["render",f],["__scopeId","data-v-d60b4888"]]);var A=G,E={class:"palyAgainMessage"};function S(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("restart-game-button");return Object(o["withDirectives"])((Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("h2",E,[Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])(["displayInlineBlock animate__animated animate__tada",[r.getGameResult?"winGame":"lostGame"]])},Object(o["toDisplayString"])(r.getGameResult?"Gratulacje, ":"No niestety, "),3),Object(o["createTextVNode"])(" "+Object(o["toDisplayString"])(r.getGameResult?"udało Ci się!":"może innym razem."),1)]),Object(o["createVNode"])(i,{win:r.getGameResult},null,8,["win"])],512)),[[o["vShow"],r.getFinishGame]])}function W(e,t,n,r,c,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{class:Object(o["normalizeClass"])(["restart-button",[n.win?"winButton":"lostButotn"]]),onClick:t[0]||(t[0]=function(){return r.restart&&r.restart.apply(r,arguments)})}," Jeszcze raz ",2)}var _={name:"RestartGameButton",props:{win:{type:Boolean}},setup:function(){var e=u(),t=e.restartGame,n=l(),o=n.fetchWord;function r(){o().then((function(){return t()}))}return{restart:r}}};n("c1f6");const F=w()(_,[["render",W],["__scopeId","data-v-a2e5304a"]]);var V=F,x={name:"PlayAgaonComponent",components:{RestartGameButton:V},setup:function(){var e=Object(r["c"])(u()),t=e.getFinishGame,n=e.getGameResult;return{getFinishGame:t,getGameResult:n}}};n("1644");const I=w()(x,[["render",S],["__scopeId","data-v-7260cefc"]]);var L=I,P={class:"tipContainer"};function M(e,t,n,r,c,a){var i=Object(o["resolveComponent"])("tip-icon-component"),l=Object(o["resolveComponent"])("tip-content-block-component");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",P,[Object(o["withDirectives"])(Object(o["createVNode"])(i,{isBlockade:r.getShowTipFlag},null,8,["isBlockade"]),[[o["vShow"],r.whetherTipIsAvailable]]),Object(o["withDirectives"])(Object(o["createVNode"])(l,{tip:r.getTip},null,8,["tip"]),[[o["vShow"],r.getShowTipFlag]])])}function R(e,t,n,r,c,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("blockquote",null,[Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("i",null,Object(o["toDisplayString"])(n.tip),1)])])])}var z={name:"TipContentBlockComponent",props:{tip:{type:String}}};n("ec3a");const D=w()(z,[["render",R],["__scopeId","data-v-3c835c12"]]);var q=D,J=Object(o["createTextVNode"])(" ? "),U={class:"counterTip"};function K(e,t,n,r,c,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["icon noselect",{blockade:n.isBlockade}]),onClick:t[0]||(t[0]=function(){return r.showATip&&r.showATip.apply(r,arguments)})},[J,Object(o["createElementVNode"])("span",U,Object(o["toDisplayString"])(r.getNumberOfTipsAvailable),1)],2)])}var $={name:"TipBoxComponent",props:{isBlockade:{type:Boolean}},setup:function(e){var t=u(),n=t.changeNumberOfTipsAvailable,o=t.switchTipFlag,c=Object(r["c"])(u()),a=c.getNumberOfTipsAvailable;function i(){e.isBlockade||(n(-1),o())}return{getNumberOfTipsAvailable:a,showATip:i}}};n("97b7");const H=w()($,[["render",K],["__scopeId","data-v-00527dce"]]);var Q=H,X={name:"TipContainerComponent",components:{TipContentBlockComponent:q,TipIconComponent:Q},setup:function(){var e=Object(r["c"])(u()),t=e.whetherTipIsAvailable,n=e.getShowTipFlag,o=Object(r["c"])(l()),c=o.getTip;return{whetherTipIsAvailable:t,getShowTipFlag:n,getTip:c}}};n("1d6a");const Y=w()(X,[["render",M],["__scopeId","data-v-a54c7f70"]]);var Z=Y,ee=(n("77ed"),n("8cb4"),{name:"App",components:{BoardGameComponent:A,PlayAgainComponent:L,TipContainerComponent:Z},setup:function(){s();var e=Object(r["c"])(l()),t=e.wordObject;return{wordObject:t}}});n("fb7c");const te=w()(ee,[["render",c]]);var ne=te;Object(o["createApp"])(ne).use(Object(r["a"])()).mount("#app"),Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]}},"587e":function(e,t,n){},"68ce":function(e,t,n){},"6c5d":function(e,t,n){"use strict";n("b60a")},"74fe":function(e,t,n){},7597:function(e,t,n){"use strict";n("80c3")},"80c3":function(e,t,n){},"8cb4":function(e,t,n){},"97b7":function(e,t,n){"use strict";n("68ce")},b60a:function(e,t,n){},c1f6:function(e,t,n){"use strict";n("587e")},ded4:function(e,t,n){},ec3a:function(e,t,n){"use strict";n("1de9")},ef1d:function(e,t,n){},fb7c:function(e,t,n){"use strict";n("ef1d")}});
//# sourceMappingURL=app.82e64624.js.map