(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/yu-kefu/yu-kefu"],{"4e9d":function(t,e,n){"use strict";var u,o=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return u})},"9c8a":function(t,e,n){},b834:function(t,e,n){"use strict";var u=n("9c8a"),o=n.n(u);o.a},c06c:function(t,e,n){"use strict";n.r(e);var u=n("f525"),o=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);e["default"]=o.a},cfcd:function(t,e,n){"use strict";n.r(e);var u=n("4e9d"),o=n("c06c");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("b834");var i,a=n("f0c5"),r=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);e["default"]=r.exports},f525:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{x:0,y:0,x1:0,x2:0,y1:0,y2:0,move:{x:0,y:0}}},name:"kefu",props:{qq:{type:Number,default:null},damping:{type:Number,default:10},direction:{type:String,default:"all"},position:{type:Number,default:4}},methods:{onChange:function(t){"touch"===t.detail.source&&(this.move.x=t.detail.x,this.move.y=t.detail.y)},onTouchend:function(){var t=this;this.x=this.move.x,this.y=this.move.y,console.log(this.x2),setTimeout(function(){t.move.x<t.x2/2?t.x=t.x1:t.x=t.x2,t.move.y>215&&(t.y=215),console.log(t.x,t.y)},100)},onTap:function(){console.log("tap")}}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/yu-kefu/yu-kefu-create-component',
    {
        'components/yu-kefu/yu-kefu-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cfcd"))
        })
    },
    [['components/yu-kefu/yu-kefu-create-component']]
]);
