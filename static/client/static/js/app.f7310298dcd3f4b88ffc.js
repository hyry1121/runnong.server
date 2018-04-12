webpackJsonp([1,2],[,,,,,,,,,function(t,s,e){"use strict";function i(t){return t.status>=200&&t.status<300?o.a.resolve(t):o.a.reject(new Error(t.statusText))}function n(t){var s="http://localhost:3000/api/"+t;return c.a.get(s).then(function(t){return i(t)}).then(function(t){var s=t.data;return s.success?o.a.resolve(s.result):o.a.reject(s.error)})}var r=e(30),o=e.n(r),a=e(24),c=e.n(a);s.a=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";var i=e(15),n=e(126),r=e(117),o=e.n(r);i.a.use(n.a),s.a=new n.a({routes:[{path:"/",name:"index",component:o.a}]})},function(t,s,e){var i=e(3)(e(65),e(119),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"swiper-slide",ready:function(){this.update()},mounted:function(){this.update()},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&(this.$parent.swiper.destroyLoop(),this.$parent.swiper.createLoop()))}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=e(43),e(104)),s.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,s=function(){!t.swiper&&i&&(delete t.options.notNextTick,t.swiper=new Swiper(t.$el,t.options))};this.options.notNextTick?s():this.$nextTick(s)},updated:function(){this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app"}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(9);s.default={data:function(){return{cities:[],activeBtn:"all"}},created:function(){var t=this;e.i(i.a)("city").then(function(s){t.cities=s}).catch(function(t){alert("无法连接服务器")})},methods:{SetActiveBtnAndEmit:function(t,s){this.activeBtn=t,this.$emit("changeCityForShops",s)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(30),n=e.n(i),r=e(24),o=e.n(r);s.default={data:function(){return{kws:"",isWarnShow:!1,isInfoShow:!1,info:"",isSearching:!1}},watch:{kws:function(t){this.isSearching=!1}},methods:{search:function(){var t=this;if(!this.isSearching){var s=this.kws.trim();if(""!==s){if(this.kws.length>=10)return this.isWarnShow=!0,void(this.isInfoShow=!1);if(this.isWarnShow=!1,this.isInfoShow=!0,this.isSearching=!0,1===this.kws.length)return this.info="以下是搜索“"+s+"”的结果，如果搜索不到，请缩短关键词再试试",void this.$emit("doSearch",s);var e="http://api.pullword.com/get.php?source="+s+"&param1=0.6&param2=0&json=1";this.info="正在搜索...",o.a.get("https://bird.ioliu.cn/v1"+"?url="+e,{timeout:5e3}).then(function(t){return t.status>=200&&t.status<300?t.data:n.a.reject("抱歉，搜索时发生网络错误，请重试")}).then(function(e){t.info="以下是搜索“"+s+"”的结果，如果搜索不到，请缩短关键词再试试",t.$emit("doSearch",e.map(function(t){return t.t}))}).catch(function(t){return alert(t)})}}},resetSearch:function(){this.kws="",this.isInfoShow=!1,this.$emit("clearSearch")}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(9);s.default={props:["cityForShops","pullWordsForShops"],data:function(){return{shops:[]}},watch:{pullWordsForShops:function(t){if(null===t&&(this.shops=window._shops),"string"==typeof t)return void(this.shops=window._shops.filter(function(s){return s.name.indexOf(t)!==-1}));Array.isArray(t)&&(this.shops=window._shops.filter(function(s){for(var e,i=0;e=t[i++];)if(s.name.indexOf(e)!==-1)return!0;return!1}))}},created:function(){var t=this;e.i(i.a)("shop").then(function(s){t.shops=s.sort(function(t,s){return t.rank-s.rank}),window._shops=t.shops}).catch(function(t){alert("无法连接服务器")})}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(15),n=e(110),r=e.n(n),o=e(9);i.a.use(r.a),s.default={data:function(){return{options:{autoplay:3e3,grabCursor:!0,setWrapperSize:!0,autoHeight:!0,pagination:".swiper-pagination"},sliders:[]}},created:function(){var t=this;e.i(o.a)("slider").then(function(s){t.sliders=s}).catch(function(t){alert(t)})}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(116),n=e.n(i),r=e(113),o=e.n(r),a=e(115),c=e.n(a),l=e(114),u=e.n(l),p=e(9);s.default={components:{Sliders:n.a,Cities:o.a,Shops:c.a,Search:u.a},data:function(){return{cityForShops:{name:"全部",district:"全部"},groupAd:{},pullWordsForShops:null}},created:function(){var t=this;e.i(p.a)("group-ad").then(function(s){t.groupAd=s[0]}).catch(function(t){alert("无法连接服务器")})},methods:{setCityForShops:function(t){this.cityForShops=t},searchShops:function(t){this.pullWordsForShops=t},resetShops:function(){this.pullWordsForShops=null}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,function(t,s,e){var i=e(3)(e(63),e(125),null,null);t.exports=i.exports},function(t,s,e){var i=e(3)(e(64),e(121),null,null);t.exports=i.exports},function(t,s,e){e(107);var i=e(3)(e(66),e(123),null,null);t.exports=i.exports},function(t,s,e){e(106);var i=e(3)(e(67),e(122),null,null);t.exports=i.exports},function(t,s,e){e(105);var i=e(3)(e(68),e(118),null,null);t.exports=i.exports},function(t,s,e){e(108);var i=e(3)(e(69),e(124),null,null);t.exports=i.exports},function(t,s,e){var i=e(3)(e(70),e(120),null,null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{"margin-bottom":"100px"}},[e("div",{staticClass:"floor-header wrap"},[e("h1",{staticClass:"fl"},[t._v("好邻居社群")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"全部"!=t.cityForShops.name,expression:"cityForShops.name != '全部'"}],staticClass:"shop-district fl"},[t._v("\n\t\t\t( "+t._s(t.cityForShops.name)+" - "+t._s(t.cityForShops.district)+" )\n\t\t")])]),t._v(" "),e("ul",{staticClass:"shops"},[t._l(t.shops,function(s){return s.show?e("li",{directives:[{name:"show",rawName:"v-show",value:"全部"==t.cityForShops.name||t.cityForShops.district==s.address.district&&t.cityForShops.name==s.address.city,expression:"cityForShops.name == '全部'\n\t\t\t\t\t\t\t\t|| cityForShops.district == shop.address.district\n\t\t\t\t\t\t\t\t&& cityForShops.name == shop.address.city"}],staticClass:"shop"},[e("a",{staticStyle:{display:"block"},attrs:{href:s.link}},[e("div",{staticClass:" wrap shop-t"},[e("div",{staticClass:"fl shop-t--l"},[e("img",{attrs:{src:s.logo}})]),t._v(" "),e("ul",{staticClass:"fl shop-t--m"},[e("li",[e("h2",{class:{"shop-name--recommend":s.recommend}},[t._v(t._s(s.name))])]),t._v(" "),e("li",{staticClass:"wrap"},t._l(s.star,function(t){return e("i",{staticClass:"icon-star fl"})})),t._v(" "),e("li",[e("p",[t._v("营业："+t._s(s.openTime))])])]),t._v(" "),e("ul",{staticClass:"fl shop-t--r"},[e("li",[e("span",{staticClass:"price-1"},[t._v("￥"+t._s(s.priceBeforePost))]),t._v(" "),e("span",{staticClass:"price-txt"},[t._v("起送")])]),t._v(" "),e("li",[e("span",{staticClass:"price-2"},[t._v("￥"+t._s(s.postage))]),t._v(" "),e("span",{staticClass:"price-txt"},[t._v("配送")])])])])]),t._v(" "),e("div",{staticClass:"shop-b"},[e("p",[t._v("简介："+t._s(s.desc))]),t._v(" "),e("p",[t._v("地址："+t._s(s.address.city+s.address.district+s.address.detail))]),t._v(" "),e("a",{staticClass:"shop-tel",attrs:{href:"tel:"+s.tel}},[t._v("电话："+t._s(s.tel))])])]):t._e()}),t._v(" "),t._m(0)],2)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",{staticClass:"no-more"},[t._v("没有更多结果了...")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Sliders",{staticClass:"floor"}),t._v(" "),e("div",{staticClass:"floor"},[t._m(0),t._v(" "),e("a",{attrs:{href:t.groupAd.link}},[e("img",{attrs:{src:t.groupAd.img,width:"100%"}})])]),t._v(" "),e("Cities",{staticClass:"floor",on:{changeCityForShops:t.setCityForShops}}),t._v(" "),e("Search",{on:{doSearch:t.searchShops,clearSearch:t.resetShops}}),t._v(" "),e("Shops",{staticClass:"floor",attrs:{"city-for-shops":t.cityForShops,"pull-words-for-shops":t.pullWordsForShops}})],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"floor-header"},[e("h1",[t._v("拼团")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),e("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search floor"},[e("div",{staticClass:"search-top"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.kws,expression:"kws"}],attrs:{type:"text",placeholder:"搜索小区名"},domProps:{value:t.kws},on:{keyup:function(s){if(t._k(s.keyCode,"enter",13))return null;t.search(s)},input:function(s){s.target.composing||(t.kws=s.target.value)}}}),t._v(" "),e("button",{on:{click:t.search}},[t._v("搜索")])]),t._v(" "),e("div",{staticClass:"search-bottom"},[t.isWarnShow?e("p",{staticClass:"kws-warn"},[t._v("搜索关键词不能超过10个字符")]):t._e(),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.isInfoShow,expression:"isInfoShow"}],staticClass:"kws-info"},[e("button",{directives:[{name:"show",rawName:"v-show",value:"正在搜索..."!==t.info,expression:"info !== '正在搜索...'"}],staticClass:"search-clear",on:{click:t.resetSearch}},[t._v("(清空搜索)")]),t._v("\n\t\t\t"+t._s(t.info)+"\n\t\t")])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),t._v(" "),e("ul",{staticClass:"cities"},[e("li",{staticClass:"city wrap"},[e("button",{class:{"district-active":"all"==t.activeBtn},on:{click:function(s){t.SetActiveBtnAndEmit("all",{name:"全部",district:"全部"})}}},[t._v("\n\t\t\t\t全部\n\t\t\t")])]),t._v(" "),t._l(t.cities,function(s,i){return e("li",{staticClass:"city wrap"},[e("h2",{staticClass:"fl"},[t._v(t._s(s.name)+"：")]),t._v(" "),e("ul",{staticClass:"wrap fl districts"},t._l(s.districts.split("||"),function(n,r){return e("li",{staticClass:"fl"},[e("button",{class:{"district-active":t.activeBtn==i+"-"+r},on:{click:function(e){t.SetActiveBtnAndEmit(i+"-"+r,{name:s.name,district:n})}}},[t._v("\n\t\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t\t")])])}))])})],2)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"floor-header"},[e("h1",[t._v("城市")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("swiper",{attrs:{options:t.options}},[t._l(t.sliders,function(s){return s.show?e("swiper-slide",{key:s._id},[e("a",{staticClass:"slider",attrs:{href:s.link}},[e("img",{attrs:{src:s.img}})])]):t._e()}),t._v(" "),e("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"swiper-slide"},[t._t("default")],2)},staticRenderFns:[]}},,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(15),n=e(45),r=e.n(n),o=e(44);i.a.config.productionTip=!0,String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),new i.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})}],[129]);
//# sourceMappingURL=app.f7310298dcd3f4b88ffc.js.map