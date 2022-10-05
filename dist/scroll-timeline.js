!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}!function(){var e,n=new WeakMap;function r(e){for(var t,n=[],i=0;i<e.length;i++)n[i]="number"==typeof(t=e[i])?new CSSUnitValue(t,"number"):t;return n}var a=function(){function e(e,t,i,a){n.set(this,{values:r(e),operator:t,name:i||t,delimiter:a||", "})}return e.prototype.toString=function(){var e=n.get(this);return e.name+"("+e.values.join(e.delimiter)+")"},t(e,[{key:"operator",get:function(){return n.get(this).operator}},{key:"values",get:function(){return n.get(this).values}}]),e}(),o=((e={CSSUnitValue:function(){function e(e,t){n.set(this,{value:e,unit:t})}return e.prototype.toString=function(){var e=n.get(this);return""+e.value+function(e){switch(e){case"percent":return"%";case"number":return"";default:return e.toLowerCase()}}(e.unit)},t(e,[{key:"value",get:function(){return n.get(this).value},set:function(e){n.get(this).value=e}},{key:"unit",get:function(){return n.get(this).unit}}]),e}(),CSSKeywordValue:function(){function e(e){this.value=e}return e.prototype.toString=function(){return this.value.toString()},e}(),CSSMathSum:function(e){function t(t){return e.call(this,arguments,"sum","calc"," + ")||this}return i(t,e),t}(a),CSSMathProduct:function(e){function t(t){return e.call(this,arguments,"product","calc"," * ")||this}return i(t,e),t}(a),CSSMathNegate:function(e){function t(t){return e.call(this,[arguments[0]],"negate","-")||this}return i(t,e),t}(a)}).CSSMathNegate=function(e){function t(t){return e.call(this,[1,arguments[0]],"invert","calc"," / ")||this}return i(t,e),t}(a),e.CSSMathMax=function(e){function t(){return e.call(this,arguments,"max")||this}return i(t,e),t}(a),e.CSSMathMin=function(e){function t(){return e.call(this,arguments,"min")||this}return i(t,e),t}(a),e);if(!window.CSS&&!Reflect.defineProperty(window,"CSS",{value:{}}))throw Error("Error installing CSSOM support");for(var l in window.CSSUnitValue||["number","percent","em","ex","px","cm","mm","in","pt","pc","Q","vw","vh","vmin","vmax","rems","ch","deg","rad","grad","turn","ms","s","Hz","kHz","dppx","dpi","dpcm","fr"].forEach(function(e){if(!Reflect.defineProperty(CSS,e,{value:function(t){return new CSSUnitValue(t,e)}}))throw Error("Error installing CSS."+e)}),o)if(!(l in window)&&!Reflect.defineProperty(window,l,{value:o[l]}))throw Error("Error installing CSSOM support for "+l)}(),new CSSKeywordValue("auto");var s=new WeakMap;function u(e){return e===document.scrollingElement?document:e}function c(e){f(e);var t=s.get(e).animations;if(0!==t.length)for(var n=e.currentTime,i=0;i<t.length;i++)t[i].tickAnimation(n)}function m(e,t){if(!e)return null;var n="horizontal-tb"==getComputedStyle(e).writingMode,i=e.scrollTop;return("horizontal"==t||"inline"==t&&n||"block"==t&&!n)&&(i=Math.abs(e.scrollLeft)),i}function f(e){if(e instanceof M){var t=e.subject;t&&"none"!=getComputedStyle(t).display?h(e,k(t)):h(e,null)}}function h(e,t){var n=s.get(e),i=n.source,r=n.scrollListener;if(i!=t&&(i&&r&&u(i).removeEventListener("scroll",r),s.get(e).source=t,t)){var a=function(){c(e)};u(t).addEventListener("scroll",a),n.scrollListener=a}}function d(e,t){for(var n=s.get(e).animations,i=0;i<n.length;i++)n[i].animation==t&&n.splice(i,1)}function p(e,t,n){for(var i=s.get(e).animations,r=0;r<i.length;r++)if(i[r].animation==t)return;i.push({animation:t,tickAnimation:n}),c(e)}var v=function(){function e(e){s.set(this,{source:null,orientation:"block",subject:null,inset:e?e.inset:null,animations:[],scrollListener:null}),h(this,e&&void 0!==e.source?e.source:document.scrollingElement),this.orientation=e&&e.orientation||"block",c(this)}return t(e,[{key:"source",get:function(){return s.get(this).source},set:function(e){h(this,e),c(this)}},{key:"orientation",get:function(){return s.get(this).orientation},set:function(e){if(-1===["block","inline","horizontal","vertical"].indexOf(e))throw TypeError("Invalid orientation");s.get(this).orientation=e,c(this)}},{key:"duration",get:function(){return CSS.percent(100)}},{key:"phase",get:function(){var e=this.source;if(!e)return"inactive";var t=getComputedStyle(e);return"none"==t.display?"inactive":e==document.scrollingElement||"visible"!=t.overflow&&"clip"!=t.overflow?"active":"inactive"}},{key:"currentTime",get:function(){var e=this.source;if(!e)return null;if("inactive"==this.phase)return null;var t=this.orientation,n=m(e,t),i=function(e,t){var n="horizontal-tb"==getComputedStyle(e).writingMode;return"block"===t?t=n?"vertical":"horizontal":"inline"===t&&(t=n?"horizontal":"vertical"),"vertical"===t?e.scrollHeight-e.clientHeight:"horizontal"===t?e.scrollWidth-e.clientWidth:void 0}(e,t);return i>0?CSS.percent(100*n/i):CSS.percent(100)}},{key:"__polyfill",get:function(){return!0}}]),e}();function g(e,t){for(var n=e.parentElement;null!=n;){if(t(n))return n;n=n.parentElement}}function y(e){switch(getComputedStyle(e).display){case"block":case"inline-block":case"list-item":case"table":case"table-caption":case"flow-root":case"flex":case"grid":return!0}return!1}function T(e){var t=getComputedStyle(e);return"none"!=t.transform||"none"!=t.perspective||"transform"==t.willChange||"perspective"==t.willChange||"none"!=t.filter||"filter"==t.willChange||"none"!=t.backdropFilter}function S(e){return"static"!=getComputedStyle(e).position||T(e)}function b(e){switch(getComputedStyle(e).position){case"static":case"relative":case"sticky":return g(e,y);case"absolute":return g(e,S);case"fixed":return g(e,T)}}function k(e){if(e){for(;e=b(e);)switch(getComputedStyle(e)["overflow-x"]){case"auto":case"scroll":case"hidden":return e==document.body&&"visible"==getComputedStyle(document.scrollingElement).overflow?document.scrollingElement:e}return document.scrollingElement}}function w(e,t){var n=s.get(e);return"inactive"===e.phase?null:e instanceof M?E(t,e.source,e.subject,n.orientation,n.inset):null}function E(e,t,n,i,r){for(var a=0,o=0,l=n,s=t.offsetParent;l&&l!=s;)o+=l.offsetLeft,a+=l.offsetTop,l=l.offsetParent;o-=t.offsetLeft+t.clientLeft,a-=t.offsetTop+t.clientTop;var u=getComputedStyle(t),c="horizontal-tb"==u.writingMode,m=void 0,f=void 0,h=void 0;"horizontal"==i||"inline"==i&&c||"block"==i&&!c?(m=n.clientWidth,f=o,("rtl"==u.direction||"vertical-rl"==u.writingMode)&&(f+=t.scrollWidth-t.clientWidth),h=t.clientWidth):(m=n.clientHeight,f=a,h=t.clientHeight);var d=function(e,t){var n={start:0,end:0};if(!e)return n;var i=e.split(" "),r=[];if(i.forEach(function(e){e.endsWith("%")?r.push(t/100*parseFloat(e)):e.endsWith("px")?r.push(parseFloat(e)):"auto"===e&&r.push(0)}),r.length>2)throw TypeError("Invalid inset");return 1==r.length?(n.start=r[0],n.end=r[0]):2==r.length&&(n.start=r[0],n.end=r[1]),n}(r,h),p=f-h+d.end,v=f+m-d.start,g=p+m,y=v-m,T=Math.min(g,y),S=Math.max(g,y),b=void 0,k=void 0;switch(e){case"cover":b=p,k=v;break;case"contain":b=T,k=S;break;case"enter":b=p,k=T;break;case"exit":b=S,k=v}return{start:b,end:k}}function x(e,t,n){return I(w(e,t),n,w(e,"cover"))}function I(e,t,n){return e&&n?(t.value/100*(e.end-e.start)+e.start-n.start)/(n.end-n.start):0}var M=function(e){function n(t){var n;return t.axis&&(t.orientation=t.axis),n=e.call(this,t)||this,s.get(a(n)).subject=t&&t.subject?t.subject:void 0,f(a(n)),c(a(n)),n}return i(n,e),t(n,[{key:"source",get:function(){return f(this),s.get(this).source},set:function(e){throw new Error("Cannot set the source of a view timeline")}},{key:"subject",get:function(){return s.get(this).subject}},{key:"axis",get:function(){return s.get(this).orientation}},{key:"currentTime",get:function(){var e=null,t=m(this.source,this.orientation);if(t==e)return e;var n=w(this,"cover");return n?CSS.percent((t-n.start)/(n.end-n.start)*100):e}}]),n}(v),P=window.Element.prototype.animate,R=window.Animation,C=["enter","exit","cover","contain"],A=function(){function e(){var e=this;this.state="pending",this.nativeResolve=this.nativeReject=null,this.promise=new Promise(function(t,n){e.nativeResolve=t,e.nativeReject=n})}var t=e.prototype;return t.resolve=function(e){this.state="resolved",this.nativeResolve(e)},t.reject=function(e){this.state="rejected",this.promise.catch(function(){}),this.nativeReject(e)},e}();function N(e){e.readyPromise=new A,requestAnimationFrame(function(){null!==e.timeline.currentTime&&B(e)})}function O(){return new DOMException("The user aborted a request","AbortError")}function j(e,t){if(null===t)return t;if("number"!=typeof t)throw new DOMException("Unexpected value: "+t+".  Cannot convert to CssNumberish","InvalidStateError");var n=H(e);return CSS.percent(n?100*t/n:0)}function W(e,t){if(e.timeline){if(null===t)return t;if("percent"===t.unit){var n=H(e);return t.value*n/100}throw new DOMException("CSSNumericValue must be a percentage for progress based animations.","NotSupportedError")}if(null==t||"number"==typeof t)return t;var i=t.to("ms");if(convertTime)return i.value;throw new DOMException("CSSNumericValue must be either a number or a time value for time based animations.","InvalidStateError")}function L(e){if(e.finishedPromise&&"pending"==e.finishedPromise.state&&"finished"==e.proxy.playState){e.finishedPromise.resolve(e.proxy),e.animation.pause();var t=new CustomEvent("finish",{detail:{currentTime:e.proxy.currentTime,timelineTime:e.proxy.timeline.currentTime}});Object.defineProperty(t,"currentTime",{get:function(){return this.detail.currentTime}}),Object.defineProperty(t,"timelineTime",{get:function(){return this.detail.timelineTime}}),requestAnimationFrame(function(){queueMicrotask(function(){e.animation.dispatchEvent(t)})})}}function _(e){return null!==e.pendingPlaybackRate?e.pendingPlaybackRate:e.animation.playbackRate}function D(e){null!==e.pendingPlaybackRate&&(e.animation.playbackRate=e.pendingPlaybackRate,e.pendingPlaybackRate=null)}function V(e){if(!e.timeline)return null;var t=W(e,e.timeline.currentTime);if(null===t)return null;if(null===e.startTime)return null;var n=(t-e.startTime)*e.animation.playbackRate;return-0==n&&(n=0),n}function z(e,t){if(!e.timeline)return null;var n=W(e,e.timeline.currentTime);return null==n?null:n-t/e.animation.playbackRate}function U(e,t,n){if(e.timeline){var i=t?W(e,e.proxy.currentTime):V(e);if(i&&null!=e.startTime&&!e.proxy.pending){var r=_(e),a=H(e),o=e.previousCurrentTime;r>0&&i>=a?((null===o||o<a)&&(o=a),e.holdTime=t?i:o):r<0&&i<=0?((null==o||o>0)&&(o=0),e.holdTime=t?i:o):0!=r&&(t&&null!==e.holdTime&&(e.startTime=z(e,e.holdTime)),e.holdTime=null)}F(e),e.previousCurrentTime=W(e,e.proxy.currentTime),"finished"==e.proxy.playState?(e.finishedPromise||(e.finishedPromise=new A),"pending"==e.finishedPromise.state&&(n?L(e):Promise.resolve().then(function(){L(e)}))):(e.finishedPromise&&"resolved"==e.finishedPromise.state&&(e.finishedPromise=new A),"paused"!=e.animation.playState&&e.animation.pause())}}function H(e){var t=function(e){var t=e.proxy.effect.getTiming();return e.normalizedTiming||t}(e);return Math.max(0,t.delay+t.endDelay+t.iterations*t.duration)}function F(e){if(e.timeline)if(null!==e.startTime){var t=e.timeline.currentTime;if(null==t)return;K(e,(W(e,t)-e.startTime)*e.animation.playbackRate)}else null!==e.holdTime&&K(e,e.holdTime)}function K(e,t){var n=e.timeline,i=e.animation.playbackRate;e.animation.currentTime=t+(n.currentTime&&n.currentTime.value==(i<0?0:100)?i<0?.001:-.001:0)}function q(e,t){if(e.timeline){var n="paused"==e.proxy.playState&&e.proxy.pending,i=!1,r=null,a=W(e,e.proxy.currentTime);e.resetCurrentTimeOnResume&&(a=null,e.resetCurrentTimeOnResume=!1);var o=_(e),l=H(e);if(o>0&&t&&(null==a||a<0||a>=l))r=0;else if(o<0&&t&&(null==a||a<=0||a>l)){if(Infinity==l)return void e.animation.play();r=l}else 0==o&&null==a&&(r=0);null!=r&&(e.startTime=r,e.holdTime=null,D(e)),p(e.timeline,e.animation,Q.bind(e.proxy)),e.holdTime&&(e.startTime=null),e.pendingTask&&(e.pendingTask=null,i=!0),(null!==e.holdTime||null!==r||n||null!==e.pendingPlaybackRate)&&(e.readyPromise&&!i&&(e.readyPromise=null),F(e),e.readyPromise||N(e),e.pendingTask="play",U(e,!1,!1))}}function Q(e){var t=G.get(this);if(null!=e){t.pendingTask&&B(t);var n=this.playState;"running"!=n&&"finished"!=n||(K(t,(W(t,e)-W(t,this.startTime))*this.playbackRate),"finished"==n&&0!=_(t)&&(t.holdTime=null),U(t,!1,!1))}else"idle"!=t.animation.playState&&t.animation.cancel()}function B(e){"pause"==e.pendingTask?function(e){var t=W(e,e.timeline.currentTime);null!=e.startTime&&null==e.holdTime&&(e.holdTime=(t-e.startTime)*e.animation.playbackRate),D(e),e.startTime=null,e.readyPromise.resolve(e.proxy),U(e,!1,!1),F(e),e.pendingTask=null}(e):"play"==e.pendingTask&&function(e){var t=W(e,e.timeline.currentTime);if(null!=e.holdTime)D(e),0==e.animation.playbackRate?e.startTime=t:(e.startTime=t-e.holdTime/e.animation.playbackRate,e.holdTime=null);else if(null!==e.startTime&&null!==e.pendingPlaybackRate){var n=(t-e.startTime)*e.animation.playbackRate;D(e);var i=e.animation.playbackRate;0==i?(e.holdTime=null,e.startTime=t):e.startTime=t-n/i}e.readyPromise&&"pending"==e.readyPromise.state&&e.readyPromise.resolve(e.proxy),U(e,!1,!1),F(e),e.pendingTask=null}(e)}var G=new WeakMap,Y=function(){function e(e,t,n){void 0===n&&(n={});var i=e instanceof R?e:new R(e,a),r=t instanceof v,a=r?void 0:t;G.set(this,{animation:i,timeline:r?t:void 0,playState:r?"idle":null,readyPromise:null,finishedPromise:null,startTime:null,holdTime:null,previousCurrentTime:null,resetCurrentTimeOnResume:!1,pendingPlaybackRate:null,pendingTask:null,specifiedTiming:null,normalizedTiming:null,effect:null,timeRange:t instanceof ViewTimeline?Z(n):null,proxy:this})}var n=e.prototype;return n.finish=function(){var e=G.get(this);if(e.timeline){var t=_(e),n=H(e);if(0==t)throw new DOMException("Cannot finish Animation with a playbackRate of 0.","InvalidStateError");if(t>0&&Infinity==n)throw new DOMException("Cannot finish Animation with an infinite target effect end.","InvalidStateError");D(e);var i=t<0?0:n;this.currentTime=j(e,i);var r=W(e,e.timeline.currentTime);null===e.startTime&&null!==r&&(e.startTime=r-i/e.animation.playbackRate),"pause"==e.pendingTask&&null!==e.startTime&&(e.holdTime=null,e.pendingTask=null,e.readyPromise.resolve(this)),"play"==e.pendingTask&&null!==e.startTime&&(e.pendingTask=null,e.readyPromise.resolve(this)),U(e,!0,!0)}else e.animation.finish()},n.play=function(){var e=G.get(this);e.timeline?q(e,!0):e.animation.play()},n.pause=function(){var e=G.get(this);if(e.timeline){if("paused"!=this.playState){var t=null,n=e.animation.playbackRate,i=H(e);if(null===e.animation.currentTime)if(n>=0)t=0;else{if(Infinity==i)return void e.animation.pause();t=i}null!==t&&(e.startTime=t),"play"==e.pendingTask?e.pendingTask=null:e.readyPromise=null,e.readyPromise||N(e),e.pendingTask="pause"}}else e.animation.pause()},n.reverse=function(){var e=G.get(this),t=_(e),n=e.resetCurrentTimeOnResume?null:W(e,this.currentTime),i=Infinity==H(e),r=0!=t&&(t<0||n>0||!i);if(!e.timeline||!r)return r&&(e.pendingPlaybackRate=-_(e)),void e.animation.reverse();if("inactive"==e.timeline.phase)throw new DOMException("Cannot reverse an animation with no active timeline","InvalidStateError");this.updatePlaybackRate(-t),q(e,!0)},n.updatePlaybackRate=function(e){var t=G.get(this);if(t.pendingPlaybackRate=e,t.timeline){if(!t.readyPromise||"pending"!=t.readyPromise.state)switch(this.playState){case"idle":case"paused":D(t);break;case"finished":var n=W(t,t.timeline.currentTime),i=null!==n?(n-t.startTime)*t.animation.playbackRate:null;t.startTime=0==e?n:null!=n&&null!=i?(n-i)/e:null,D(t),U(t,!1,!1),F(t);break;default:q(t,!1)}}else t.animation.updatePlaybackRate(e)},n.persist=function(){G.get(this).animation.persist()},n.cancel=function(){var e=G.get(this);e.timeline?("idle"!=this.playState&&(function(e){e.pendingTask&&(e.pendingTask=null,D(e),e.readyPromise.reject(O()),N(e),e.readyPromise.resolve(e.proxy))}(e),e.finishedPromise&&"pending"==e.finishedPromise.state&&e.finishedPromise.reject(O()),e.finishedPromise=new A,e.animation.cancel()),e.startTime=null,e.holdTime=null,d(e.timeline,e.animation)):e.animation.cancel()},n.addEventListener=function(e,t,n){G.get(this).animation.addEventListener(e,t,n)},n.removeEventListener=function(e,t,n){G.get(this).animation.removeEventListener(e,t,n)},n.dispatchEvent=function(e){G.get(this).animation.dispatchEvent(e)},t(e,[{key:"effect",get:function(){var e=G.get(this);return e.timeline?(e.effect||(e.effect=function(e){var t=e.animation.effect,n=t.updateTiming,i={apply:function(n){t.getTiming();var i=n.apply(t);if(e.timeline){i.localTime=j(e,i.localTime),i.endTime=j(e,i.endTime),i.activeDuration=j(e,i.activeDuration);var r=H(e);i.duration=r?CSS.percent(100*(i.iterations?(r-i.delay-i.endDelay)/i.iterations:0)/r):CSS.percent(0),void 0===e.timeline.currentTime&&(i.localTime=null)}return i}},r={apply:function(i,r){var a=1e5;if(e.specifiedTiming)return e.specifiedTiming;e.specifiedTiming=i.apply(t);var o,l,s=Object.assign({},e.specifiedTiming),u=!1;return e.timeline instanceof ViewTimeline&&(o=function(e){if(!(e.timeline instanceof ViewTimeline))return 0;var t=e.timeRange.start;return x(e.timeline,t.name,t.offset)}(e),l=function(e){if(!(e.timeline instanceof ViewTimeline))return 0;var t=e.timeRange.end;return 1-x(e.timeline,t.name,t.offset)}(e),u=!0),(null===s.duration||"auto"===s.duration||u)&&e.timeline&&(u?(s.delay=o*a,s.endDelay=l*a):(s.delay=0,s.endDelay=0),s.duration=s.iterations?((s.iterations?a:0)-s.delay-s.endDelay)/s.iterations:0,n.apply(t,[s])),e.normalizedTiming=s,e.specifiedTiming}},a={apply:function(n,i,r){if(e.timeline){var a=r[0];if(Infinity===a.duration)throw TypeError("Effect duration cannot be Infinity when used with Scroll Timelines");if(Infinity===a.iterations)throw TypeError("Effect iterations cannot be Infinity when used with Scroll Timelines")}e.specifiedTiming&&n.apply(t,[e.specifiedTiming]),n.apply(t,r),e.specifiedTiming=null}},o=new Proxy(t,{get:function(e,n){var i=e[n];return"function"==typeof i?i.bind(t):i},set:function(e,t,n){return e[t]=n,!0}});return o.getComputedTiming=new Proxy(t.getComputedTiming,i),o.getTiming=new Proxy(t.getTiming,r),o.updateTiming=new Proxy(t.updateTiming,a),o}(e)),e.effect):e.animation.effect},set:function(e){G.get(this).animation.effect=e,details.effect=null}},{key:"timeline",get:function(){var e=G.get(this);return e.timeline||e.animation.timeline},set:function(e){var t=this.timeline;if(t!=e){var n=this.playState,i=this.currentTime,r=G.get(this),a=H(r),o=a>0?W(r,i)/a:0,l=t instanceof v,s=e instanceof v;r.resetCurrentTimeOnResume=!1;var u=this.pending;if(l&&d(r.timeline,r.animation),s){r.timeline=e,D(r);var c=r.animation.playbackRate>=0?0:H(r);switch(n){case"running":case"finished":r.startTime=c,p(r.timeline,r.animation,Q.bind(this));break;case"paused":r.resetCurrentTimeOnResume=!0,r.startTime=null,r.holdTime=W(r,CSS.percent(100*o));break;default:r.holdTime=null,r.startTime=null}return u&&(r.readyPromise&&"resolved"!=r.readyPromise.state||N(r),r.pendingTask="paused"==n?"pause":"play"),null!==r.startTime&&(r.holdTime=null),void U(r,!1,!1)}if(r.animation.timeline!=e)throw TypeError("Unsupported timeline: "+e);if(d(r.timeline,r.animation),r.timeline=null,l)switch(null!==i&&(r.animation.currentTime=o*H(r)),n){case"paused":r.animation.pause();break;case"running":case"finished":r.animation.play()}}}},{key:"startTime",get:function(){var e=G.get(this);return e.timeline?j(e,e.startTime):e.animation.startTime},set:function(e){var t=G.get(this);if(e=W(t,e),t.timeline){null==W(t,t.timeline.currentTime)&&null!=t.startTime&&(t.holdTime=null,F(t));var n=W(t,this.currentTime);D(t),t.startTime=e,t.resetCurrentTimeOnResume=!1,t.holdTime=null!==t.startTime&&0!=t.animation.playbackRate?null:n,t.pendingTask&&(t.pendingTask=null,t.readyPromise.resolve(this)),U(t,!0,!1),F(t)}else t.animation.startTime=e}},{key:"currentTime",get:function(){var e=G.get(this);return e.timeline?j(e,null!=e.holdTime?e.holdTime:V(e)):e.animation.currentTime},set:function(e){var t=G.get(this);if(e=W(t,e),t.timeline&&null!=e){var n=t.timeline.phase;null!==t.holdTime||null===t.startTime||"inactive"==n||0==t.animation.playbackRate?t.holdTime=e:t.startTime=z(t,e),t.resetCurrentTimeOnResume=!1,"inactive"==n&&(t.startTime=null),t.previousCurrentTime=null,"pause"==t.pendingTask&&(t.holdTime=e,D(t),t.startTime=null,t.pendingTask=null,t.readyPromise.resolve(this)),U(t,!0,!1)}else t.animation.currentTime=e}},{key:"playbackRate",get:function(){return G.get(this).animation.playbackRate},set:function(e){var t=G.get(this);if(t.timeline){t.pendingPlaybackRate=null;var n=this.currentTime;t.animation.playbackRate=e,null!==n&&(this.currentTime=n)}else t.animation.playbackRate=e}},{key:"playState",get:function(){var e=G.get(this);if(!e.timeline)return e.animation.playState;var t=W(e,this.currentTime);if(null===t&&null===e.startTime&&null==e.pendingTask)return"idle";if("pause"==e.pendingTask||null===e.startTime&&"play"!=e.pendingTask)return"paused";if(null!=t){if(e.animation.playbackRate>0&&t>=H(e))return"finished";if(e.animation.playbackRate<0&&t<=0)return"finished"}return"running"}},{key:"replaceState",get:function(){return G.get(this).animation.pending}},{key:"pending",get:function(){var e=G.get(this);return e.timeline?!!e.readyPromise&&"pending"==e.readyPromise.state:e.animation.pending}},{key:"id",get:function(){return G.get(this).animation.id}},{key:"onfinish",get:function(){return G.get(this).animation.onfinish},set:function(e){G.get(this).animation.onfinish=e}},{key:"oncancel",get:function(){return G.get(this).animation.oncancel},set:function(e){G.get(this).animation.oncancel=e}},{key:"onremove",get:function(){return G.get(this).animation.onremove},set:function(e){G.get(this).animation.onremove=e}},{key:"finished",get:function(){var e=G.get(this);return e.timeline?(e.finishedPromise||(e.finishedPromise=new A),e.finishedPromise.promise):e.animation.finished}},{key:"ready",get:function(){var e=G.get(this);return e.timeline?(e.readyPromise||(e.readyPromise=new A,e.readyPromise.resolve(this)),e.readyPromise.promise):e.animation.ready}}]),e}();function X(e,t){if(!e)return null;var n=e.split(" ");if(!C.includes(n[0])||2==n.length&&!n[1].endsWith("%"))throw TypeError("Invalid animation delay");var i=t;if(2==n.length){var r=parseFloat(n[1]);if(Number.isNaN(r))throw TypeError('"'+n[1]+'" is not a valid percentage for animation delay');i=CSS.percent(r)}return{name:n[0],offset:i}}function $(){return{name:"cover",offset:CSS.percent(0)}}function J(){return{name:"cover",offset:CSS.percent(100)}}function Z(e){var t=ee(e["animation-time-range"]);return e["animation-delay"]&&(t.start=X(e["animation-delay"],$().offset)),e["animation-end-delay"]&&(t.end=X(e["animation-end-delay"],J().offset)),t}function ee(e){var t={start:$(),end:J()};if(!e)return t;var n=e.split(" "),i=[],r=[];if(n.forEach(function(e){e.endsWith("%")?r.push(parseFloat(e)):i.push(e)}),i.length>2||r.length>2||1==r.length)throw TypeError("Invalid time range");return i.length&&(t.start.name=i[0],t.end.name=i.length>1?i[1]:i[0]),r.length>1&&(t.start.offset=CSS.percent(r[0]),t.end.offset=CSS.percent(r[1])),t}var te={IDENTIFIER:/[\w\\\@_-]+/g,WHITE_SPACE:/\s*/g,NUMBER:/^[0-9]+/,TIME:/^[0-9]+(s|ms)/,VIEW_TIMELINE:/view-timeline\s*:([^;}]+)/,VIEW_TIMELINE_NAME:/view-timeline-name\s*:([^;}]+)/,VIEW_TIMELINE_AXIS:/view-timeline-axis\s*:([^;}]+)/,ANIMATION_TIMELINE:/animation-timeline\s*:([^;}]+)/,ANIMATION_DELAY:/animation-delay\s*:([^;}]+)/,ANIMATION_END_DELAY:/animation-end-delay\s*:([^;}]+)/,ANIMATION_TIME_RANGE:/animation-time-range\s*:([^;}]+)/,ANIMATION_NAME:/animation-name\s*:([^;}]+)/,ANIMATION:/animation\s*:([^;}]+)/,SOURCE_ELEMENT:/selector\(#([^)]+)\)/},ne=["block","inline","vertical","horizontal"],ie=new(function(){function e(){this.cssRulesWithTimelineName=[],this.scrollTimelineOptions=new Map,this.subjectSelectorToViewTimeline=[],this.keyframeNamesSelectors=new Map}var t=e.prototype;return t.transpileStyleSheet=function(e,t,n){for(var i={sheetSrc:e,index:0,name:n};i.index<i.sheetSrc.length&&(this.eatWhitespace(i),!(i.index>=i.sheetSrc.length));)if(this.lookAhead("/*",i))for(;this.lookAhead("/*",i);)this.eatComment(i),this.eatWhitespace(i);else if(this.lookAhead("@scroll-timeline",i)){var r=this.parseScrollTimeline(i).scrollTimeline;t&&this.scrollTimelineOptions.set(r.name,r)}else{var a=this.parseQualifiedRule(i);if(!a)continue;t?this.parseKeyframesAndSaveNameMapping(a,i):this.handleScrollTimelineProps(a,i)}return i.sheetSrc},t.getAnimationTimelineOptions=function(e,t){for(var n=this.cssRulesWithTimelineName.length-1;n>=0;n--){var i=this.cssRulesWithTimelineName[n];if(t.matches(i.selector)&&(!i["animation-name"]||i["animation-name"]==e))return{"animation-timeline":i["animation-timeline"],"animation-delay":i["animation-delay"],"animation-end-delay":i["animation-end-delay"],"animation-time-range":i["animation-time-range"]}}return null},t.getSourceElement=function(e){var t=te.SOURCE_ELEMENT.exec(e);return t?document.getElementById(t[1]):"auto"===e?document.scrollingElement:null},t.getScrollTimelineOptions=function(e){var t=this.scrollTimelineOptions.get(e);if(null!=t&&t.source){var i=this.getSourceElement(t.source);return n({},i?{source:i}:{},"auto"!=t.orientation?{orientation:t.orientation}:{})}return null},t.findPreviousSiblingOrAncestorMatchingSelector=function(e,t){for(var n=e;n;){if(n.matches(t))return n;n=n.previousElementSibling||n.parentElement}return null},t.getViewTimelineOptions=function(e,t){for(var n=this.subjectSelectorToViewTimeline.length-1;n>=0;n--){var i=this.subjectSelectorToViewTimeline[n];if(i.name==e){var r=this.findPreviousSiblingOrAncestorMatchingSelector(t,i.selector);if(r)return{subject:r,axis:i.axis,inset:i.inset}}}return null},t.parseScrollTimeline=function(e){var t=e.index;this.assertString(e,"@scroll-timeline"),this.eatWhitespace(e);var n=this.parseIdentifier(e);this.eatWhitespace(e),this.assertString(e,"{"),this.eatWhitespace(e);for(var i={name:n,source:"auto",orientation:void 0};"}"!==this.peek(e);){var r=this.parseIdentifier(e);this.eatWhitespace(e),this.assertString(e,":"),this.eatWhitespace(e),i[r]=this.removeEnclosingDoubleQuotes(this.eatUntil(";",e)),this.assertString(e,";"),this.eatWhitespace(e)}this.assertString(e,"}");var a=e.index;return this.eatWhitespace(e),{scrollTimeline:i,startIndex:t,endIndex:a}},t.handleScrollTimelineProps=function(e,t){var n=this;if(!e.selector.includes("@keyframes")){var i=e.block.contents.includes("animation-name:"),r=e.block.contents.includes("animation-timeline:"),a=e.block.contents.includes("animation:");this.saveSubjectSelectorToViewTimeline(e);var o=[],l=[];r&&(o=this.extractMatches(e.block.contents,te.ANIMATION_TIMELINE)),i&&(l=this.extractMatches(e.block.contents,te.ANIMATION_NAME)),r&&i||a&&this.extractMatches(e.block.contents,te.ANIMATION).forEach(function(i){var a=n.extractAnimationName(i),s=n.extractTimelineName(i);a&&l.push(a),s&&(o.push(s),e.block.contents=e.block.contents.replace(s," ".repeat(s.length)),n.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,t)),(s||r)&&(n.hasDuration(i)||(e.block.contents=e.block.contents.replace("animation:","animation: 1s "),n.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,t)))}),this.saveRelationInList(e,o,l)}},t.saveSubjectSelectorToViewTimeline=function(e){var t=e.block.contents.includes("view-timeline:"),n=e.block.contents.includes("view-timeline-name:"),i=e.block.contents.includes("view-timeline-axis:");if(t||n){var r={selector:e.selector,name:"",axis:"block"};if(t){var a=this.extractMatches(e.block.contents,te.VIEW_TIMELINE,separator=" ");1==a.length?r.name=a[0]:2==a.length&&(ne.includes(a[0])?(r.axis=a[0],r.name=a[1]):(r.axis=a[1],r.name=a[0]))}if(n){var o=this.extractMatches(e.block.contents,te.VIEW_TIMELINE_NAME);r.name=o[0]}if(i){var l=this.extractMatches(e.block.contents,te.VIEW_TIMELINE_AXIS);ne.includes(l[0])&&(r.axis=l[0])}this.subjectSelectorToViewTimeline.push(r)}},t.hasDuration=function(e){return e.split(" ").filter(function(e){return te.TIME.exec(e)}).length>=1},t.saveRelationInList=function(e,t,i){var r=e.block.contents.includes("animation-delay:"),a=e.block.contents.includes("animation-end-delay:"),o=e.block.contents.includes("animation-time-range:"),l=[],s=[],u=[];r&&(l=this.extractMatches(e.block.contents,te.ANIMATION_DELAY)),a&&(s=this.extractMatches(e.block.contents,te.ANIMATION_END_DELAY)),o&&(u=this.extractMatches(e.block.contents,te.ANIMATION_TIME_RANGE));for(var c=Math.max(t.length,i.length,l.length,s.length,u.length),m=0;m<c;m++)this.cssRulesWithTimelineName.push(n({selector:e.selector,"animation-timeline":t[m%t.length]},i.length?{"animation-name":i[m%i.length]}:{},l.length?{"animation-delay":l[m%l.length]}:{},s.length?{"animation-end-delay":s[m%s.length]}:{},u.length?{"animation-time-range":u[m%u.length]}:{}))},t.extractAnimationName=function(e){return this.findMatchingEntryInContainer(e,this.keyframeNamesSelectors)},t.extractTimelineName=function(e){return this.findMatchingEntryInContainer(e,this.scrollTimelineOptions)},t.findMatchingEntryInContainer=function(e,t){var n=e.split(" ").filter(function(e){return t.has(e)});return n?n[0]:null},t.parseIdentifier=function(e){te.IDENTIFIER.lastIndex=e.index;var t=te.IDENTIFIER.exec(e.sheetSrc);if(!t)throw this.parseError(e,"Expected an identifier");return e.index+=t[0].length,t[0]},t.parseKeyframesAndSaveNameMapping=function(e,t){var n=this;if(e.selector.startsWith("@keyframes")){var i=this.replaceKeyframesAndGetMapping(e,t);e.selector.split(" ").forEach(function(e,t){t>0&&n.keyframeNamesSelectors.set(e,i)})}},t.replaceKeyframesAndGetMapping=function(e,t){function n(e){return C.some(function(t){return e.startsWith(t)})}var i=e.block.contents,r=function(e){for(var t=0,n=-1,i=[],r=0;r<e.length;r++)"{"==e[r]?t++:"}"==e[r]&&t--,1==t&&"{"!=e[r]&&"}"!=e[r]&&-1==n&&(n=r),2==t&&"{"==e[r]&&(i.push({start:n,end:r}),n=-1);return i}(i);if(0==r.length)return new Map;var a=new Map,o=!1,l=[];l.push(i.substring(0,r[0].start));for(var s=0;s<r.length;s++){var u=i.substring(r[s].start,r[s].end).split(" ").map(function(e){return e.trim()}).filter(function(e){return""!=e}).join(" "),c=a.size;a.set(c,u),l.push(c+"%"),n(u)&&(o=!0),l.push(s==r.length-1?i.substring(r[s].end):i.substring(r[s].end,r[s+1].start))}return o?(e.block.contents=l.join(""),this.replacePart(e.block.startIndex,e.block.endIndex,e.block.contents,t),a):new Map},t.parseQualifiedRule=function(e){var t=e.index,n=this.parseSelector(e).trim();if(n)return{selector:n,block:this.eatBlock(e),startIndex:t,endIndex:e.index}},t.removeEnclosingDoubleQuotes=function(e){return e.substring('"'==e[0]?1:0,'"'==e[e.length-1]?e.length-1:e.length)},t.assertString=function(e,t){if(e.sheetSrc.substr(e.index,t.length)!=t)throw this.parseError(e,"Did not find expected sequence "+t);e.index+=t.length},t.replacePart=function(e,t,n,i){i.sheetSrc=i.sheetSrc.slice(0,e)+n+i.sheetSrc.slice(t),i.index>=t&&(i.index=e+n.length+(i.index-t))},t.eatComment=function(e){this.assertString(e,"/*"),this.eatUntil("*/",e,!0),this.assertString(e,"*/")},t.eatBlock=function(e){var t=e.index;this.assertString(e,"{");for(var n=1;0!=n;)this.lookAhead("/*",e)?this.eatComment(e):("{"===e.sheetSrc[e.index]?n++:"}"===e.sheetSrc[e.index]&&n--,this.advance(e));var i=e.index;return{startIndex:t,endIndex:i,contents:e.sheetSrc.slice(t,i)}},t.advance=function(e){if(e.index++,e.index>e.sheetSrc.length)throw this.parseError(e,"Advanced beyond the end")},t.eatUntil=function(e,t,n){void 0===n&&(n=!1);for(var i=t.index;!this.lookAhead(e,t);)this.advance(t);return n&&(t.sheetSrc=t.sheetSrc.slice(0,i)+" ".repeat(t.index-i)+t.sheetSrc.slice(t.index)),t.sheetSrc.slice(i,t.index)},t.parseSelector=function(e){var t=e.index;if(this.eatUntil("{",e),t===e.index)throw Error("Empty selector");return e.sheetSrc.slice(t,e.index)},t.eatWhitespace=function(e){te.WHITE_SPACE.lastIndex=e.index;var t=te.WHITE_SPACE.exec(e.sheetSrc);t&&(e.index+=t[0].length)},t.lookAhead=function(e,t){return t.sheetSrc.substr(t.index,e.length)==e},t.peek=function(e){return e.sheetSrc[e.index]},t.extractMatches=function(e,t,n){return void 0===n&&(n=","),t.exec(e)[1].trim().split(n).map(function(e){return e.trim()})},e}());function re(e,t,n,i,r,a){return I(E(e,t,n,i,r),a,E("cover",t,n,i,r))}if(CSS.supports("animation-timeline: works")||(function(){function e(e){if(0!==e.innerHTML.trim().length){var t=ie.transpileStyleSheet(e.innerHTML,!0);t=ie.transpileStyleSheet(t,!1),e.innerHTML=t}}new MutationObserver(function(t){for(var n,i=l(t);!(n=i()).done;)for(var r,a=l(n.value.addedNodes);!(r=a()).done;){var o=r.value;o instanceof HTMLStyleElement&&e(o)}}).observe(document.documentElement,{childList:!0,subtree:!0}),document.querySelectorAll("style").forEach(function(t){return e(t)}),document.querySelectorAll("link").forEach(function(e){})}(),window.addEventListener("animationstart",function(e){e.target.getAnimations().filter(function(t){return t.animationName===e.animationName}).forEach(function(t){var n=function(e,t,n){var i=ie.getAnimationTimelineOptions(t,n),r=i["animation-timeline"];if(!r)return null;var a=ie.getScrollTimelineOptions(r)||ie.getViewTimelineOptions(r,n);return a?(a.subject&&function(e,t){var n=k(t.subject),i=t.axis||t.orientation,r=ie.keyframeNamesSelectors.get(e.animationName);if(r&&r.size){var a=[];e.effect.getKeyframes().forEach(function(e){var o=function(e,r){for(var a,o=null,s=l(e);!(a=s()).done;){var u=a.value,c=u[1];if(u[0]==100*r.offset){if("from"==c)o=0;else if("to"==c)o=100;else{var m=c.split(" ");o=1==m.length?parseFloat(m[0]):100*re(m[0],n,t.subject,i,t.inset,CSS.percent(parseFloat(m[1])))}break}}return o}(r,e);null!==o&&o>=0&&o<=100&&(e.offset=o/100,a.push(e))});var o=a.sort(function(e,t){return e.offset<t.offset?-1:e.affset>t.offset?1:0});e.effect.setKeyframes(o),ie.keyframeNamesSelectors.set(e.animationName,null)}}(e,a),{timeline:a.source?new v(a):new M(a),animOptions:i}):null}(t,t.animationName,e.target);if(n.timeline&&t.timeline!=n.timeline){var i=new Y(t,n.timeline,n.animOptions);t.pause(),i.play()}})})),[].concat(document.styleSheets).filter(function(e){return null!==e.href}).length&&console.warn("Non-Inline StyleSheets detected: ScrollTimeline polyfill currently only supports inline styles within style tags"),!Reflect.defineProperty(window,"ScrollTimeline",{value:v}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(window,"ViewTimeline",{value:M}))throw Error("Error installing ViewTimeline polyfill: could not attach ViewTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:function(e,t){var n=t.timeline;n instanceof v&&delete t.timeline;var i=function(e,t){if(t in e){var n=e[t];return"number"!=typeof n?(delete e[t],n):null}},r=function(e,t){t&&(t.phase&&(e.name=t.phase),t.percent&&(e.offset=t.percent))},a=i(t,"delay"),o=i(t,"endDelay"),l=P.apply(this,[e,t]),s=new Y(l,n);if(n instanceof v){if(l.pause(),n instanceof ViewTimeline){var u=G.get(s);u.timeRange=ee(t.timeRange),r(u.timeRange.start,a),r(u.timeRange.end,o)}s.play()}return s}}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");if(!Reflect.defineProperty(window,"Animation",{value:Y}))throw Error("Error installing Animation constructor.")}();
//# sourceMappingURL=scroll-timeline.js.map
