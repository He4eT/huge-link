(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{TqeA:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=n("ox/y"),a=n("tP7B"),i=n.n(a);e.default=({markdown:t,setMarkdown:e})=>Object(r.h)("section",null,Object(r.h)("h1",null,"Huge link"),Object(r.h)("p",null,"A minimalist serverless publishing tool that allows you to create markdown posts and push them to the Web by sharing the link."),Object(r.h)("textarea",{class:i.a.textarea,placeholder:"Write a post using markdown and click Preview",onInput:({target:t})=>e(t.value)},t),Object(r.h)("nav",null,Object(r.h)(o.Link,{href:"/huge-link/preview"},"Preview")))},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n("hosL"),i=n("Y3FI"),s=e.Match=function(t){function e(){for(var e,n,o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=n=r(this,t.call.apply(t,[this].concat(a))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){i.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){i.subscribers.splice(i.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,i.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,i.exec)(n,t.path,{})})},e}(a.Component),c=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,a.h)(s,{path:n||r.href},(function(t){return(0,a.h)(i.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=c,e.default=s,s.Link=c},tP7B:function(t){t.exports={textarea:"textarea__1UKFm"}}}]);
//# sourceMappingURL=route-editor.chunk.6c9ac.esm.js.map