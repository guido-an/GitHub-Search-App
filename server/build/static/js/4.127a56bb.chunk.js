(this.webpackJsonpcomponents=this.webpackJsonpcomponents||[]).push([[4],{68:function(e,t,n){},69:function(e,t,n){"use strict";n(68);var r=n(0),i=n.n(r),o=n(9),a=n(14),s=Object(a.a)([{lang:"en",strings:{linkText:"View details"}},{lang:"nl",strings:{linkText:"Bekijk details"}},{lang:"ita",strings:{linkText:"Scopri di pi\xf9"}}]).linkText;t.a=function(e){var t=e.repo,n=t.description?t.description.substring(0,55):"";return i.a.createElement("div",{className:"repo-card"},i.a.createElement("div",{className:"repo-info"},i.a.createElement("div",{className:"repo-heading"},i.a.createElement("p",null,i.a.createElement("strong",null,t.full_name)),t.description&&i.a.createElement("p",{className:"desc text"},t.description.length<=55?n:"".concat(n," [...]"))),i.a.createElement("p",null,i.a.createElement("i",{className:"eye icon"})," Watchers: ",t.watchers)),i.a.createElement(o.b,{to:"/repos/".concat(t.owner.login,"/").concat(t.name),className:"text"},"> ",s))}},72:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(11),i=n.n(r),o=n(22),a=n(15),s=n(16),l=n(18),c=n(17),u=n(19),f=(n(72),n(0)),d=n.n(f),p=n(9),h=n(23),g=n(14),v=Object(g.a)([{lang:"en",strings:{author:"Author"}},{lang:"nl",strings:{author:"Auteur"}},{lang:"ita",strings:{author:"Autore"}}]).author,m=function(e){var t=e.singleRepo,n=t||{},r=n.full_name,i=n.description,o=n.svn_url,a=n.watchers,s=n.forks,l=n.subscribers_count,c=t?t.owner:{},u=c.login,f=c.avatar_url,p=c.html_url;return d.a.createElement("div",null,t&&d.a.createElement("div",{className:"ui raised very padded text container segment"},d.a.createElement("h1",{className:"ui header"},r),d.a.createElement("p",{className:"text"},i," ",d.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},o)),d.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},d.a.createElement("p",null,d.a.createElement("i",{className:"eye icon"}),"Watchers: ",a),d.a.createElement("p",null,d.a.createElement("i",{className:"code branch icon"}),"Forks: ",s),d.a.createElement("p",null,d.a.createElement("i",{className:"user icon"}),"Subscribers: ",l)),t.owner&&d.a.createElement("div",{style:{fontSize:"15px",marginTop:"20px"}},d.a.createElement("img",{className:"ui avatar image",src:f,alt:u}),d.a.createElement("span",null,v,": ",d.a.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer"},u)))))},y=n(21);function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function A(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var C=function(e){var t=e.basis,n=void 0===t?"100%":t,r=e.gutter,i=void 0===r?"1em":r,o=e.className,a=void 0===o?"":o,s=e.children,l=k(e,["basis","gutter","className","children"]);return Object(f.createElement)("div",S({className:a,style:{flex:"0 0 auto",width:n,marginLeft:i}},l),s)},P=function(e,t){return t.includes?t.includes(e):!!t.filter((function(t){return t===e})).length},_=function(e,t){return(e%t+t)%t},L=function(e,t){return Math.max(0,Math.min(t,e))},I=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n?_(e,t):L(e,t-1)},M=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},D=function(){},R=function(e){var t=e;return 1+--t*Math.pow(t,4)},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return function(r){if(r&&"function"===typeof r.addEventListener)return r.addEventListener(e,n,t),function(){return r.removeEventListener(e,n)}}}},K=function(e){return B("scroll",!0)(e)(window)},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.target,r=void 0===n?window:n;return K((function(t){return(r===window||r===t.target)&&e(t)}))},W=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.wait,i=void 0===r?100:r,o=n.target,a=void 0===o?window:o;return t=0,U((function(n){clearTimeout(t),t=setTimeout((function(){return n.target===a?e():void 0}),i)}))},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.target,r=void 0===n?window:n,i=!1,o=W((function(){i=!1}),{target:r}),a=U((function(t){i||(i=!0,e(t))}),{target:r});return function(){"function"===typeof a&&a(),"function"===typeof o&&o()}},X=function(e){var t=function(e){var t=[];return B("touchend")((function(e){var n=e.targetTouches;t=n}))(e),function(){return t.length}}(e),n=function(e){var t=!1;return B("mousedown")((function(){t=!0}))(e),B("mouseup")((function(){t=!1}))(document.body),function(){return t}}(e);return function(){return!!t()||n()}},q={getBoundingClientRect:function(){return{}}},z=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,n=t.getBoundingClientRect(),r=n.left,i=n.right,o=e.getBoundingClientRect(),a=o.left,s=o.right;return r>=a&&i<=s}},J=function(){try{return window.addEventListener("__rw_test__",null,{passive:!0}),window.removeEventListener("__rw_test__",null),!0}catch(e){return!1}},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.delta,r=void 0===n?0:n,i=t.immediate,o=void 0!==i&&i,a=t.duration,s=void 0===a?500:a,l=t.easing,c=void 0===l?R:l,u=t.prop,f=void 0===u?"scrollTop":u;return new Promise((function(t,n){if(!r)return t();var i=e[f];if(o)return e[f]=i+r,t();var a=!1;e.addEventListener("touchstart",(function t(){a=!0;var r=e[f];return e.removeEventListener("touchstart",t),e[f]=r,n("Animation interrupted by interaction")}),!!J()&&{passive:!0});var l=null;window.requestAnimationFrame((function n(o){if(!a){l||(l=o);var u=o-l,d=c(u/s);e[f]=i+r*d,u<s?window.requestAnimationFrame(n):(e[f]=i+r,t())}}))}))},V=function(e){function t(e){var n,r,i,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=E(t).call(this,e),n=!i||"object"!==typeof i&&"function"!==typeof i?T(r):i,w(T(n),"eventListeners",[]),w(T(n),"isScrolling",!1),w(T(n),"canSelfCorrect",(function(){return!n.props.preventAutoCorrect&&!n.state.isAnimating&&!n.isScrolling&&!n.isInteracting()})),w(T(n),"shouldSelfCorrect",(function(){return n.props.snapToSlide&&n.canSelfCorrect()})),w(T(n),"handleKeyUp",(o=n.props.nextKeys,a=n.props.prevKeys,function(e){var t=e.key,r=P(t,o),i=P(t,a);return n.setState({isAnimating:!0}),r&&n.next().catch(D),i&&n.prev().catch(D),!1})),w(T(n),"getPartiallyObscuredSlides",(function(){var e=T(n).whirligig,t=A(e.children).findIndex((function(t,n,r){return!z(e)(t)&&z(e)(r[n+1])})),r=Math.max(t,0),i=A(e.children).findIndex((function(t,n,r){return!z(e)(t)&&z(e)(r[n-1])}));return[r,Math.max(i,0)||e.children.length-1]})),w(T(n),"getNearestSlideIndex",(function(){var e=n.whirligig,t=e.children,r=e.scrollLeft,i=[].slice.call(t).map((function(e){var t=e.offsetLeft;return Math.abs(t-r)}));return i.indexOf(Math.min.apply(Math,A(i)))})),w(T(n),"setWhirligigRef",(function(e){n.whirligig=e})),n.state={activeIndex:e.startAt,isAnimating:!1,visibleSlides:n.props.visibleSlides||0,slideBy:n.props.slideBy||n.props.visibleSlides||0},n.next=n.next.bind(T(n)),n.prev=n.prev.bind(T(n)),n.slideTo=n.slideTo.bind(T(n)),n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;this.DOMNode=Object(y.findDOMNode)(this.whirligig),this.isInteracting=X(this.DOMNode),this.childCount=this.whirligig&&this.whirligig.children?this.whirligig.children.length:0;var t,n={left:function(){return-e.state.slideBy},right:function(){return e.state.slideBy},up:function(){return 0},down:function(){return 0}};this.eventListeners=[].concat(A(this.eventListeners),[F((function(){e.isScrolling=!0})),B("touchstart")((function(){e.isScrolling=!0}))(this.whirligig),W((function(){e.isScrolling=!1,e.canSelfCorrect()&&(e.props.snapToSlide?e.slideTo(e.getNearestSlideIndex()).catch(D):e.props.afterSlide(e.getNearestSlideIndex()))}),{target:this.DOMNode}),B("touchend")((function(){e.canSelfCorrect()&&(e.props.snapToSlide?e.slideTo(e.getNearestSlideIndex()).catch(D):e.props.afterSlide(e.getNearestSlideIndex()))}))(this.whirligig),(t=function(t){!e.props.preventSwipe&&e.props.snapToSlide&&e.slideTo(e.state.activeIndex+n[t]()).catch(D)},function(e){return B("touchstart")((function(n){var r=n.targetTouches[0],i=r.pageX,o=r.pageY,a=B("touchend")((function(e){var n=e.changedTouches[0],r=n.pageX,s=n.pageY,l=r-i,c=Math.abs(l),u=s-o,f=Math.abs(u);Math.max(c,f)>20&&t(c>f?l<0?"right":"left":u<0?"down":"up"),"function"===typeof a&&a()}))(e)}))(e)})(this.whirligig)]),this.slideTo(this.props.startAt,{immediate:!0}).catch(D)}},{key:"componentWillUnmount",value:function(){this.eventListeners.forEach((function(e){return"function"===typeof e&&e()}))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.slideBy,n=e.visibleSlides;t===this.props.slideBy&&n===this.props.visibleSlides||this.setState({slideBy:t||n||1})}},{key:"componentDidUpdate",value:function(e){this.childCount=this.whirligig&&this.whirligig.children?this.whirligig.children.length:0,this.shouldSelfCorrect()&&this.getNearestSlideIndex()!==this.state.activeIndex&&this.slideTo(this.getNearestSlideIndex()).catch(D),e.slideTo!==this.props.slideTo&&this.slideTo(this.props.slideTo).catch(D)}},{key:"shouldComponentUpdate",value:function(e,t){var n=t.isAnimating,r=[].concat(A(M(this.props)),[this.state.isAnimating]);return![].concat(A(M(e)),[n]).every((function(e,t){return e===r[t]}))}},{key:"next",value:function(){var e=this.childCount,t=this.props,n=this.state,r=n.activeIndex,i=n.slideBy,o=t.infinite,a=e-i;if(!i){var s=N(this.getPartiallyObscuredSlides(),2),l=(s[0],s[1]),c=l===e-1?0:l;return this.slideTo(o?c:l)}var u=r+i,f=Math.min(u,a),d=r===a?0:f;return this.slideTo(o?d:f)}},{key:"prev",value:function(){var e=this.childCount,t=this.state,n=this.props,r=t.activeIndex,i=t.slideBy,o=n.infinite,a=e-i;if(!i){var s=Math.max(r-1,0),l=s===r?e-1:s;return this.slideTo(o?l:s)}var c=Math.max(r-i,0),u=0===r?a:c;return this.slideTo(o?u:c)}},{key:"slideTo",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.immediate,i=void 0!==r&&r;if(0===this.childCount)return Promise.reject("No children to slide to");if(!this.whirligig)return Promise.reject("The Whirligig is not mounted");var o=this.props,a=o.afterSlide,s=o.beforeSlide,l=o.easing,c=o.animationDuration,u=o.infinite,f=o.preventScroll,d=o.snapPositionOffset,p=this.whirligig,h=p.children,g=p.scrollLeft,v=I(e,this.childCount,u),m=this.state.activeIndex,y=h[v].offsetLeft-g-d;return m!==v&&s(e),this.setState({isAnimating:!0,activeIndex:v}),new Promise((function(e,n){if(i)return t.whirligig.scrollLeft=h[v].offsetLeft,e();var r=f?"hidden":"auto";return e(Y(t.whirligig,{prop:"scrollLeft",delta:y,easing:l,duration:c,originalOverflowX:r}))})).then((function(){if(t.setState({isAnimating:!1}),m!==v)return a(v)})).catch((function(e){t.setState({isAnimating:!1})}))}},{key:"render",value:function(){var e=this.props,t=(e.afterSlide,e.animationDuration,e.beforeSlide,e.children),n=e.className,r=(e.easing,e.infinite,e.gutter),i=(e.nextKeys,e.prevKeys,e.preventScroll),o=(e.preventAutoCorrect,e.preventSwipe,e.snapToSlide,e.snapPositionOffset,e.onSlideClick),a=e.slideClass,s=(e.slideTo,e.slideBy,e.startAt,e.style),l=e.visibleSlides,c=k(e,["afterSlide","animationDuration","beforeSlide","children","className","easing","infinite","gutter","nextKeys","prevKeys","preventScroll","preventAutoCorrect","preventSwipe","snapToSlide","snapPositionOffset","onSlideClick","slideClass","slideTo","slideBy","startAt","style","visibleSlides"]),u={display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",overflowX:i?"hidden":"auto",msOverflowStyle:"-ms-autohiding-scrollbar",position:"relative",transition:"all .25s ease-in-quint",outline:"none",WebkitOverflowScrolling:"touch"};return Object(f.createElement)("div",S({className:n,style:x({},s,{},u),ref:this.setWhirligigRef,tabIndex:"0",onKeyUp:this.handleKeyUp,role:"list"},c),f.Children.map("function"===typeof t?t(this.next,this.prev):t,(function(e,t){return Object(f.createElement)(C,{className:a,key:"slide-".concat(t),basis:l?"calc((100% - (".concat(r," * ").concat(l-1,")) / ").concat(l,")"):"auto",gutter:t>0?r:"",onClick:o,role:"listitem"},e)})))}}])&&b(n.prototype,r),i&&b(n,i),t}(f.Component);w(V,"defaultProps",{afterSlide:D,animationDuration:500,beforeSlide:D,gutter:"1em",nextKeys:["ArrowRight"],onSlideClick:D,prevKeys:["ArrowLeft"],preventAutoCorrect:!1,preventScroll:!1,preventSwipe:!1,snapPositionOffset:0,snapToSlide:!1,startAt:0,style:{}});var G=V,H=n(69),Q=function(e){var t,n=e.repos.map((function(e){return d.a.createElement(H.a,{key:e.id,repo:e})}));return d.a.createElement("section",null,d.a.createElement("div",{className:"slider"},d.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},d.a.createElement("button",{onClick:function(){return t.prev()},className:"ui left labeled icon button"},"Prev",d.a.createElement("i",{className:"left arrow icon"})),d.a.createElement("button",{onClick:function(){return t.next()},className:"ui right labeled icon button"},d.a.createElement("i",{className:"right arrow icon"}),"Next")),d.a.createElement(G,{visibleSlides:3,gutter:"1em",ref:function(e){t=e}},n)),d.a.createElement("style",{jsx:"true"},"\n             @media(max-width: 968px){\n                .slider{\n                  display: none\n                }\n             }\n      "))},Z=Object(g.a)([{lang:"en",strings:{textLink:"Make a new search"}},{lang:"nl",strings:{textLink:"Maak een nieuwe zoekopdracht"}},{lang:"ita",strings:{textLink:"Fai una nuova ricerca"}}]).textLink,$=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={singleRepo:null},n.getSingleRepo=Object(o.a)(i.a.mark((function e(){var t,r,o,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params,r=t.owner,o=t.repo,e.prev=1,e.next=4,h.a.get("/api/repos/".concat(r,"/").concat(o));case 4:a=e.sent,n.setState({singleRepo:a.data.repo}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.getSingleRepo()}},{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&(window.scrollTo(0,0),this.getSingleRepo())}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(m,{singleRepo:this.state.singleRepo}),d.a.createElement("div",{style:{marginTop:"80px",textAlign:"center"}},this.props.repos.length>0?d.a.createElement(Q,{repos:this.props.repos}):d.a.createElement(p.b,{to:"/"},"> ",Z)))}}]),t}(d.a.Component);t.default=$}}]);
//# sourceMappingURL=4.127a56bb.chunk.js.map