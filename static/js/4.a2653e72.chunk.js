(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[4],{66:function(e,t,n){"use strict";e.exports={VerticalTimeline:n(67).default,VerticalTimelineElement:n(68).default}},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),i=l(n(9)),o=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t=e.animate,n=e.className,i=e.layout,l=e.children;return r.default.createElement("div",{className:(0,o.default)(n,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===i,"vertical-timeline--one-column-left":"1-column"===i||"1-column-left"===i,"vertical-timeline--one-column-right":"1-column-right"===i})},l)};a.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]).isRequired,className:i.default.string,animate:i.default.bool,layout:i.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"])},a.defaultProps={animate:!0,className:"",layout:"2-columns"};var s=a;t.default=s},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=a(n(9)),o=a(n(4)),l=n(69);function a(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t=e.children,n=e.className,i=e.contentArrowStyle,a=e.contentStyle,s=e.date,c=e.dateClassName,u=e.icon,d=e.iconClassName,f=e.iconOnClick,p=e.onTimelineElementClick,h=e.iconStyle,m=e.id,v=e.position,y=e.style,b=e.textClassName,g=e.intersectionObserverProps,w=e.visible;return r.default.createElement(l.InView,g,(function(e){var l=e.inView,g=e.ref;return r.default.createElement("div",{ref:g,id:m,className:(0,o.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===v,"vertical-timeline-element--right":"right"===v,"vertical-timeline-element--no-children":""===t}),style:y},r.default.createElement(r.default.Fragment,null,r.default.createElement("span",{style:h,onClick:f,className:(0,o.default)(d,"vertical-timeline-element-icon",{"bounce-in":l||w,"is-hidden":!(l||w)})},u),r.default.createElement("div",{style:a,onClick:p,className:(0,o.default)(b,"vertical-timeline-element-content",{"bounce-in":l||w,"is-hidden":!(l||w)})},r.default.createElement("div",{style:i,className:"vertical-timeline-element-content-arrow"}),t,r.default.createElement("span",{className:(0,o.default)(c,"vertical-timeline-element-date")},s))))}))};s.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),className:i.default.string,contentArrowStyle:i.default.shape({}),contentStyle:i.default.shape({}),date:i.default.node,dateClassName:i.default.string,icon:i.default.element,iconClassName:i.default.string,iconStyle:i.default.shape({}),iconOnClick:i.default.func,onTimelineElementClick:i.default.func,id:i.default.string,position:i.default.string,style:i.default.shape({}),textClassName:i.default.string,visible:i.default.bool,intersectionObserverProps:i.default.shape({root:i.default.object,rootMargin:i.default.string,threshold:i.default.number,triggerOnce:i.default.bool})},s.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px"}};var c=s;t.default=c},69:function(e,t,n){"use strict";n.r(t),n.d(t,"InView",(function(){return d})),n.d(t,"useInView",(function(){return f}));var r=n(0);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=new Map,l=new Map,a=0;function s(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(l.has(n)||(a+=1,l.set(n,a.toString())),l.get(n)):"0":e[t]);var n})).toString()}function c(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=s(e),n=o.get(t);if(!n){var r,i=new Map,l=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=i.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);r=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:i},o.set(t,n)}return n}(n),i=r.id,l=r.observer,a=r.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),l.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),l.unobserve(e)),0===a.size&&(l.disconnect(),o.delete(i))}}function u(e){return"function"!==typeof e.children}var d=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=o.prototype;return l.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},l.componentWillUnmount=function(){this.unobserve(),this.node=null},l.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,i=e.trackVisibility,o=e.delay;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:i,delay:o})}},l.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},l.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var o=this.props,l=o.children,a=o.as,s=o.tag,c=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(r.createElement)(a||s||"div",i({ref:this.handleNode},c),l)},o}(r.Component);function f(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,o=t.trackVisibility,l=t.rootMargin,a=t.root,s=t.triggerOnce,u=t.skip,d=t.initialInView,f=Object(r.useRef)(),p=Object(r.useState)({inView:!!d}),h=p[0],m=p[1],v=Object(r.useCallback)((function(e){void 0!==f.current&&(f.current(),f.current=void 0),u||e&&(f.current=c(e,(function(e,t){m({inView:e,entry:t}),t.isIntersecting&&s&&f.current&&(f.current(),f.current=void 0)}),{root:a,rootMargin:l,threshold:n,trackVisibility:o,delay:i}))}),[Array.isArray(n)?n.toString():n,a,l,s,u,o,i]);Object(r.useEffect)((function(){f.current||!h.entry||s||u||m({inView:!!d})}));var y=[v,h.inView,h.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}d.displayName="InView",d.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1},t.default=d},70:function(e,t,n){},76:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));var r=n(0),i=n.n(r),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=i.a.createContext&&i.a.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function c(e){return e&&e.map((function(e,t){return i.a.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function u(e){return function(t){return i.a.createElement(d,a({attr:a({},e.attr)},t),c(e.child))}}function d(e){var t=function(t){var n,r=e.attr,o=e.size,l=e.title,c=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.a.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&i.a.createElement("title",null,l),e.children)};return void 0!==l?i.a.createElement(l.Consumer,null,(function(e){return t(e)})):t(o)}function f(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}}]})(e)}function p(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"}}]})(e)}}}]);
//# sourceMappingURL=4.a2653e72.chunk.js.map