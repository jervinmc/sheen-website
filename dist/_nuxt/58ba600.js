(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{630:function(t,e,n){"use strict";n(13),n(10),n(21),n(22);var r=n(3),o=(n(4),n(37),n(14),n(27),n(47),n(614),n(45),n(615),n(616),n(617),n(618),n(619),n(620),n(621),n(622),n(623),n(624),n(625),n(626),n(627),n(46),n(57),n(16),n(71),n(431),n(1)),c=n(87),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.E)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(O)};function j(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);if(!d){var v,h;for(h in d=[],y)y[h].forEach((function(t){var e=n[t],r=j(h,t,e);r&&d.push(r)}));var m=d.some((function(t){return t.startsWith("col-")}));d.push((v={col:!m||!n.cols},Object(r.a)(v,"col-".concat(n.cols),n.cols),Object(r.a)(v,"offset-".concat(n.offset),n.offset),Object(r.a)(v,"order-".concat(n.order),n.order),Object(r.a)(v,"align-self-".concat(n.alignSelf),n.alignSelf),v)),w.set(l,d)}return t(n.tag,Object(c.a)(data,{class:d}),o)}})},637:function(t,e,n){var content=n(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("4c72cfc6",content,!0,{sourceMap:!1})},657:function(t,e,n){"use strict";n(637)},658:function(t,e,n){var r=n(25)((function(i){return i[1]}));r.push([t.i,".image-wrapper[data-v-1e656f19],.v-img[data-v-1e656f19]{position:relative}.v-img[data-v-1e656f19]{overflow:hidden}.overlay[data-v-1e656f19]{background-color:rgba(0,0,0,.4);height:100%;left:0;top:0;z-index:1}.overlay[data-v-1e656f19],.text-content[data-v-1e656f19]{position:absolute;width:100%}.text-content[data-v-1e656f19]{opacity:0;text-align:center;top:50%;transform:translateY(20px) translateY(-50%);transition:opacity 2s ease,transform 3s ease;z-index:2}.text-content.animate-in[data-v-1e656f19]{opacity:1;transform:translateY(-50%)}@media screen and (max-width:600px){.v-img[data-v-1e656f19]{height:50vh}.text-content[data-v-1e656f19]{font-size:1.5rem;padding:0 20px;top:60%}}@media screen and (min-width:600px){.v-img[data-v-1e656f19]{height:70vh}.text-content[data-v-1e656f19]{font-size:2rem;top:50%}}",""]),r.locals={},t.exports=r},666:function(t,e,n){"use strict";n.r(e);var r=n(630),o=n(169),c=n(742),l=n(15),f={data:function(){return{isVisible:!1}},mounted:function(){var t=this,e=new IntersectionObserver((function(n){Object(l.a)(n,1)[0].isIntersecting&&(t.isVisible=!0,e.disconnect())}),{threshold:.3});e.observe(this.$refs.heroSection)}},d=(n(657),n(95)),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e(c.a,{staticClass:"pa-0"},[e(r.a,{attrs:{align:"center",cols:"12"}},[e("div",{ref:"heroSection",staticClass:"image-wrapper"},[e(o.a,{staticClass:"d-flex justify-center align-center",attrs:{src:"/images/preview-image-2.jpeg",height:"70vh","max-width":"100%",cover:""}},[e("div",{staticClass:"overlay"}),t._v(" "),e("div",{staticClass:"text-h1 white--text text-content",class:{"animate-in":t.isVisible}},[t._v("\n            Residential Architect"),e("br"),t._v("\n            design\n          ")])])],1)])],1)],1)}),[],!1,null,"1e656f19",null);e.default=component.exports}}]);