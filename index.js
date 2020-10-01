!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue-demi")):"function"==typeof define&&define.amd?define(["vue-demi"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).VueResizeSensor=t(e.VueDemi)}(this,(function(e){"use strict";function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t(u={},1,"TEXT"),t(u,2,"CLASS"),t(u,4,"STYLE"),t(u,8,"PROPS"),t(u,16,"FULL_PROPS"),t(u,32,"HYDRATE_EVENTS"),t(u,64,"STABLE_FRAGMENT"),t(u,128,"KEYED_FRAGMENT"),t(u,256,"UNKEYED_FRAGMENT"),t(u,1024,"DYNAMIC_SLOTS"),t(u,512,"NEED_PATCH"),t(u,-1,"HOISTED"),t(u,-2,"BAIL");var u,a=function(){},f=!!e.onServerPrefetch,c=e.defineComponent({name:"VueResizeSensor",props:{tag:{type:String,default:"div"}},setup:function(t,r){var i=r.emit,u=r.refs,c=r.slots,l=e.ref(0),s=e.ref(0);e.watch([l,s],(function(e){var t=o(e,2),r=t[0],n=t[1];i("resize",{width:r,height:n,w:r,h:n})}));var d=e.ref(null),p=function(){var e=f?u.el:d.value;e&&(l.value=e.offsetWidth,s.value=e.offsetHeight)};e.onActivated(p),e.onMounted(p);var y=function(e){e.target.contentWindow.addEventListener("resize",p)};return function(){var r=t.tag,o=l.value,i=s.value,u=n({default:a},c);return e.h(r,n({style:{position:"relative"}},f?{ref:"el"}:{ref:d}),[e.h("iframe",n({style:{border:"none",height:"100%",opacity:0,position:"absolute",width:"100%"}},f?{on:{load:y}}:{onLoad:y})),u.default({width:o,height:i,w:o,h:i})])}}});if(f){var l=globalThis.Vue;l&&l.component(c.name,c)}return c}));
