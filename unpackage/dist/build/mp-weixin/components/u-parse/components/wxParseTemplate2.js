(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/u-parse/components/wxParseTemplate2"],{"4e66":function(e,n,t){"use strict";t.r(n);var r=t("dea36"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n["default"]=a.a},a607:function(e,n,t){"use strict";t.r(n);var r=t("ef1e"),a=t("4e66");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);var u,s=t("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=c.exports},dea36:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return t.e("components/u-parse/components/wxParseTemplate3").then(t.bind(null,"facc"))},a=function(){return t.e("components/u-parse/components/wxParseImg").then(t.bind(null,"5673"))},o=function(){return t.e("components/u-parse/components/wxParseVideo").then(t.bind(null,"dd73"))},u=function(){return t.e("components/u-parse/components/wxParseAudio").then(t.bind(null,"b6a0"))},s={name:"wxParseTemplate2",props:{node:{}},components:{wxParseTemplate:r,wxParseImg:a,wxParseVideo:o,wxParseAudio:u},methods:{wxParseATap:function(e){var n=e.currentTarget.dataset.href;if(n){var t=this.$parent;while(!t.preview||"function"!==typeof t.preview)t=t.$parent;t.navigate(n,e)}}}};n.default=s},ef1e:function(e,n,t){"use strict";var r,a=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return r})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/u-parse/components/wxParseTemplate2-create-component',
    {
        'components/u-parse/components/wxParseTemplate2-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a607"))
        })
    },
    [['components/u-parse/components/wxParseTemplate2-create-component']]
]);
