(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/word_list_detail/word_list_detail"],{"0c97":function(e,n,t){"use strict";t.r(n);var a=t("4a9f"),r=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=r.a},2681:function(e,n,t){"use strict";var a={"u-parse":()=>Promise.all([t.e("common/vendor"),t.e("components/u-parse/u-parse")]).then(t.bind(null,"200c"))},r=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return r}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return a})},3210:function(e,n,t){"use strict";t.r(n);var a=t("2681"),r=t("0c97");for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);t("3684");var c,u=t("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"34b7cf7f",null,!1,a["a"],c);n["default"]=s.exports},3684:function(e,n,t){"use strict";var a=t("a46f"),r=t.n(a);r.a},"4a9f":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return Promise.all([t.e("common/vendor"),t.e("components/u-parse/u-parse")]).then(t.bind(null,"200c"))},r={components:{uParse:a},data:function(){return{resemble:[],zh_explain:"",word:"",word_change:"",word_resemblance:"",soundmark:"",phrase_resemblance:"",en_explain:""}},onLoad:function(){this.get_word_lib()},methods:{get_word_lib:function(){var e=this,n={user_token:this.$store.getters.common_token,app_class:"wechat",word:"abandon"};this.$api.word_lib(n).then(function(n){console.log(n),e.word=n.data.content.result.word,e.soundmark=n.data.content.result.soundmark,e.zh_explain=n.data.content.result.zh_explain,e.en_explain=n.data.content.result.en_explain,e.word_change=n.data.content.result.word_change,e.word_resemblance=n.data.content.result.word_resemblance,e.phrase_resemblance=n.data.content.result.phrase_resemblance})}}};n.default=r},"52eb":function(e,n,t){"use strict";(function(e){t("e0fe"),t("921b");a(t("66fd"));var n=a(t("3210"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},a46f:function(e,n,t){}},[["52eb","common/runtime","common/vendor"]]]);