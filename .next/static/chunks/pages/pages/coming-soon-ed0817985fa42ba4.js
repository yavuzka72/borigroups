(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2929],{9879:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/coming-soon",function(){return n(6601)}])},6601:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var o=n(2477),s=n(8408),r=n(5697);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function p(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=u(t);if(e){var s=u(this).constructor;n=Reflect.construct(o,arguments,s)}else n=o.apply(this,arguments);return p(this,n)}}function f(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),s=o?o[1]:"",r=o?o[3]:"",a=o?o[2]:n,i=a.length>=e?a:(f(Array(e)).map((function(){return"0"})).join("")+a).slice(-1*e);return"".concat(s).concat(i).concat(r)}var y={daysInHours:!1,zeroPadTime:2};function T(t,e){var n=t.days,o=t.hours,s=t.minutes,r=t.seconds,a=Object.assign(Object.assign({},y),e),i=a.daysInHours,c=a.zeroPadTime,l=a.zeroPadDays,u=void 0===l?c:l,m=Math.min(2,c),p=i?v(o+24*n,c):v(o,m);return{days:i?"":v(n,u),hours:p,minutes:v(s,m),seconds:v(r,m)}}var g=function(t){l(n,t);var e=d(n);function n(){var t;return a(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return c(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,s.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(s.Component);g.propTypes={count:r.number,children:r.element,onComplete:r.func};var b=function(t){l(n,t);var e=d(n);function n(t){var o;if(a(this,n),(o=e.call(this,t)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=(0,s.createRef)(),o.tick=function(){var t=o.calcTimeDelta(),e=t.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(t,void 0,e)},o.start=function(){if(!o.isStarted()){var t=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=t?o.calcOffsetStartTimestamp()-t:0;var e=o.calcTimeDelta();o.setTimeDeltaState(e,"STARTED",o.props.onStart),o.props.controlled||e.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},o.handleOnComplete=function(t){o.props.onComplete&&o.props.onComplete(t)},t.date){var r=o.calcTimeDelta();o.state={timeDelta:r,status:r.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return c(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,o=t.precision,s=t.controlled,r=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,s=void 0===o?Date.now:o,r=n.precision,a=void 0===r?0:r,i=n.controlled,c=n.offsetTime,l=void 0===c?0:c,u=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,i||(e+=l);var m=i?e:e-s(),p=Math.min(20,Math.max(0,a)),d=Math.round(1e3*parseFloat(((u?m:Math.max(0,m))/1e3).toFixed(p))),f=Math.abs(d)/1e3;return{total:d,days:Math.floor(f/86400),hours:Math.floor(f/3600%24),minutes:Math.floor(f/60%60),seconds:Math.floor(f%60),milliseconds:Number((f%1*1e3).toFixed()),completed:d<=0}}(e,{now:n,precision:o,controlled:s,offsetTime:this.offsetTime,overtime:r})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var o=this;if(this.mounted){var s;!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),s=this.handleOnComplete);return this.setState((function(n){var s=e||n.status;return t.completed&&!o.props.overtime?s="COMPLETED":e||"COMPLETED"!==s||(s="STOPPED"),{timeDelta:t,status:s}}),(function(){n&&n(o.state.timeDelta),s&&s(o.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,o=t.zeroPadDays,s=this.state.timeDelta;return Object.assign(Object.assign({},s),{api:this.getApi(),props:this.props,formatted:T(s,{daysInHours:e,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,o=t.onComplete;return(0,s.createElement)(g,{ref:this.legacyCountdownRef,count:e,onComplete:o},n)}var r=this.props,a=r.className,i=r.overtime,c=r.children,l=r.renderer,u=this.getRenderProps();if(l)return l(u);if(c&&this.state.timeDelta.completed&&!i)return(0,s.cloneElement)(c,{countdown:u});var m=u.formatted,p=m.days,d=m.hours,f=m.minutes,h=m.seconds;return(0,s.createElement)("span",{className:a},u.total<0?"-":"",p,p?":":"",d,":",f,":",h)}}]),n}(s.Component);b.defaultProps=Object.assign(Object.assign({},y),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),b.propTypes={date:(0,r.oneOfType)([(0,r.instanceOf)(Date),r.string,r.number]),daysInHours:r.bool,zeroPadTime:r.number,zeroPadDays:r.number,controlled:r.bool,intervalDelay:r.number,precision:r.number,autoStart:r.bool,overtime:r.bool,className:r.string,children:r.element,renderer:r.func,now:r.func,onMount:r.func,onStart:r.func,onPause:r.func,onStop:r.func,onTick:r.func,onComplete:r.func};var w=b,S=function(t){var e=t.days,n=t.hours,s=t.minutes,r=t.seconds;return(0,o.jsxs)("span",{className:"count-row countdown-show4",children:[(0,o.jsxs)("span",{className:"countdown-section",children:[(0,o.jsx)("span",{className:"countdown-amount",children:e}),(0,o.jsx)("span",{className:"countdown-period",children:"Days"})]}),(0,o.jsxs)("span",{className:"countdown-section",children:[(0,o.jsx)("span",{className:"countdown-amount",children:n>9?n:"0"+n}),(0,o.jsx)("span",{className:"countdown-period",children:"Hours"})]}),(0,o.jsxs)("span",{className:"countdown-section",children:[(0,o.jsx)("span",{className:"countdown-amount",children:s>9?s:"0"+s}),(0,o.jsx)("span",{className:"countdown-period",children:"Minutes"})]}),(0,o.jsxs)("span",{className:"countdown-section",children:[(0,o.jsx)("span",{className:"countdown-amount",children:r>9?r:"0"+r}),(0,o.jsx)("span",{className:"countdown-period",children:"Seconds"})]})]})},j=n(9845);var x=function(){return(0,o.jsxs)("div",{className:"soon",children:[(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-9 col-lg-8",children:(0,o.jsx)("div",{className:"soon-content text-center",children:(0,o.jsxs)("div",{className:"soon-content-wrapper",children:[(0,o.jsx)("img",{src:"images/logo-icon.png",alt:"Logo",className:"soon-logo mx-auto"}),(0,o.jsx)("h1",{className:"soon-title",children:"Coming Soon"}),(0,o.jsx)("div",{className:"coming-countdown countdown-separator",children:(0,o.jsx)(w,{date:"2022-02-01T01:02:03",renderer:S})}),(0,o.jsx)("hr",{className:"mt-2 mb-3 mt-md-3"}),(0,o.jsx)("p",{className:"mb-2",children:"We are currently working on an awesome new site. Stay tuned for more information. Subscribe to our newsletter to stay updated on our progress."}),(0,o.jsx)("form",{action:"#",children:(0,o.jsxs)("div",{className:"input-group mb-5",children:[(0,o.jsx)("input",{type:"email",className:"form-control bg-transparent",placeholder:"Enter your Email Address",required:!0}),(0,o.jsx)("div",{className:"input-group-append",children:(0,o.jsxs)("button",{className:"btn btn-outline-primary-2",type:"submit",children:[(0,o.jsx)("span",{children:"SUBSCRIBE"}),(0,o.jsx)("i",{className:"icon-long-arrow-right"})]})})]})}),(0,o.jsxs)("div",{className:"social-icons justify-content-center mb-0",children:[(0,o.jsx)(j.Z,{href:"#",className:"social-icon",title:"Facebook",children:(0,o.jsx)("i",{className:"icon-facebook-f"})}),(0,o.jsx)(j.Z,{href:"#",className:"social-icon",title:"Twitter",children:(0,o.jsx)("i",{className:"icon-twitter"})}),(0,o.jsx)(j.Z,{href:"#",className:"social-icon",title:"Instagram",children:(0,o.jsx)("i",{className:"icon-instagram"})}),(0,o.jsx)(j.Z,{href:"#",className:"social-icon",title:"Youtube",children:(0,o.jsx)("i",{className:"icon-youtube"})}),(0,o.jsx)(j.Z,{href:"#",className:"social-icon",title:"Pinterest",children:(0,o.jsx)("i",{className:"icon-pinterest"})})]})]})})})})}),(0,o.jsx)("div",{className:"soon-bg bg-image",style:{backgroundImage:"url(images/backgrounds/soon-bg.jpg)"}})]})}}},function(t){t.O(0,[9774,2888,179],(function(){return e=9879,t(t.s=e);var e}));var e=t.O();_N_E=e}]);