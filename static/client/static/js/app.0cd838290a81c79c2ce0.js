webpackJsonp([1,2],[,,,,,,,,,function(t,e,s){"use strict";function i(t){return t.status>=200&&t.status<300?a.a.resolve(t):a.a.reject(new Error(t.statusText))}function n(t){var e="http://localhost:3000/api/"+t;return c.a.get(e).then(function(t){return i(t)}).then(function(t){var e=t.data;return e.success?a.a.resolve(e.result):a.a.reject(e.error)})}var r=s(69),a=s.n(r),o=s(44),c=s.n(o);e.a=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";var i=s(15),n=s(122),r=s(114),a=s.n(r);i.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"index",component:a.a}]})},function(t,e,s){var i=s(3)(s(64),s(116),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",ready:function(){this.update()},mounted:function(){this.update()},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&(this.$parent.swiper.destroyLoop(),this.$parent.swiper.createLoop()))}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=s(41),s(103)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){!t.swiper&&i&&(delete t.options.notNextTick,t.swiper=new Swiper(t.$el,t.options))};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(9);e.default={data:function(){return{cities:[],activeBtn:"all"}},created:function(){var t=this;s.i(i.a)("city").then(function(e){t.cities=e}).catch(function(t){alert("无法连接服务器")})},methods:{SetActiveBtnAndEmit:function(t,e){this.activeBtn=t,this.$emit("changeCityForShops",e)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(9);e.default={props:["cityForShops"],data:function(){return{shops:[]}},created:function(){var t=this;s.i(i.a)("shop").then(function(e){t.shops=e.sort(function(t,e){return t.rank-e.rank})}).catch(function(t){alert("无法连接服务器")})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(15),n=s(108),r=s.n(n),a=s(9);i.a.use(r.a),e.default={data:function(){return{options:{autoplay:3e3,grabCursor:!0,setWrapperSize:!0,autoHeight:!0,pagination:".swiper-pagination"},sliders:[]}},created:function(){var t=this;s.i(a.a)("slider").then(function(e){t.sliders=e}).catch(function(t){alert(t)})}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(113),n=s.n(i),r=s(111),a=s.n(r),o=s(112),c=s.n(o),l=s(9);e.default={components:{Sliders:n.a,Cities:a.a,Shops:c.a},data:function(){return{cityForShops:{name:"全部",district:"全部"},groupAd:{}}},created:function(){var t=this;s.i(l.a)("group-ad").then(function(e){t.groupAd=e[0]}).catch(function(t){alert("无法连接服务器")})},methods:{setCityForShops:function(t){this.cityForShops=t}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,s){var i=s(3)(s(62),s(121),null,null);t.exports=i.exports},function(t,e,s){var i=s(3)(s(63),s(118),null,null);t.exports=i.exports},function(t,e,s){s(105);var i=s(3)(s(65),s(119),null,null);t.exports=i.exports},function(t,e,s){s(104);var i=s(3)(s(66),s(115),null,null);t.exports=i.exports},function(t,e,s){s(106);var i=s(3)(s(67),s(120),null,null);t.exports=i.exports},function(t,e,s){var i=s(3)(s(68),s(117),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"margin-bottom":"100px"}},[s("div",{staticClass:"floor-header wrap"},[s("h1",{staticClass:"fl"},[t._v("身边社群")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:"全部"!=t.cityForShops.name,expression:"cityForShops.name != '全部'"}],staticClass:"shop-district fl"},[t._v("\n\t\t\t( "+t._s(t.cityForShops.name)+" - "+t._s(t.cityForShops.district)+" )\n\t\t")])]),t._v(" "),s("ul",{staticClass:"shops"},[t._l(t.shops,function(e){return e.show?s("li",{directives:[{name:"show",rawName:"v-show",value:"全部"==t.cityForShops.name||t.cityForShops.district==e.address.district&&t.cityForShops.name==e.address.city,expression:"cityForShops.name == '全部'\n\t\t\t\t\t\t\t\t|| cityForShops.district == shop.address.district\n\t\t\t\t\t\t\t\t&& cityForShops.name == shop.address.city"}],staticClass:"shop"},[s("a",{staticStyle:{display:"block"},attrs:{href:e.link}},[s("div",{staticClass:" wrap shop-t"},[s("div",{staticClass:"fl shop-t--l"},[s("img",{attrs:{src:e.logo}})]),t._v(" "),s("ul",{staticClass:"fl shop-t--m"},[s("li",[s("h2",{class:{"shop-name--recommend":e.recommend}},[t._v(t._s(e.name))])]),t._v(" "),s("li",{staticClass:"wrap"},t._l(e.star,function(t){return s("i",{staticClass:"icon-star fl"})})),t._v(" "),s("li",[s("p",[t._v("营业："+t._s(e.openTime))])])]),t._v(" "),s("ul",{staticClass:"fl shop-t--r"},[s("li",[s("span",{staticClass:"price-1"},[t._v("￥"+t._s(e.priceBeforePost))]),t._v(" "),s("span",{staticClass:"price-txt"},[t._v("起送")])]),t._v(" "),s("li",[s("span",{staticClass:"price-2"},[t._v("￥"+t._s(e.postage))]),t._v(" "),s("span",{staticClass:"price-txt"},[t._v("配送")])])])])]),t._v(" "),s("div",{staticClass:"shop-b"},[s("p",[t._v("简介："+t._s(e.desc))]),t._v(" "),s("p",[t._v("地址："+t._s(e.address.city+e.address.district+e.address.detail))]),t._v(" "),s("a",{staticClass:"shop-tel",attrs:{href:"tel:"+e.tel}},[t._v("电话："+t._s(e.tel))])])]):t._e()}),t._v(" "),t._m(0)],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",{staticClass:"no-more"},[t._v("没有更多结果了...")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Sliders",{staticClass:"floor"}),t._v(" "),s("div",{staticClass:"floor"},[t._m(0),t._v(" "),s("a",{attrs:{href:t.groupAd.link}},[s("img",{attrs:{src:t.groupAd.img,width:"100%"}})])]),t._v(" "),s("Cities",{staticClass:"floor",on:{changeCityForShops:t.setCityForShops}}),t._v(" "),s("Shops",{staticClass:"floor",attrs:{"city-for-shops":t.cityForShops}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"floor-header"},[s("h1",[t._v("拼团")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._v(" "),s("ul",{staticClass:"cities"},[s("li",{staticClass:"city wrap"},[s("button",{class:{"district-active":"all"==t.activeBtn},on:{click:function(e){t.SetActiveBtnAndEmit("all",{name:"全部",district:"全部"})}}},[t._v("\n\t\t\t\t全部\n\t\t\t")])]),t._v(" "),t._l(t.cities,function(e,i){return s("li",{staticClass:"city wrap"},[s("h2",{staticClass:"fl"},[t._v(t._s(e.name)+"：")]),t._v(" "),s("ul",{staticClass:"wrap fl districts"},t._l(e.districts.split("||"),function(n,r){return s("li",{staticClass:"fl"},[s("button",{class:{"district-active":t.activeBtn==i+"-"+r},on:{click:function(s){t.SetActiveBtnAndEmit(i+"-"+r,{name:e.name,district:n})}}},[t._v("\n\t\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t\t")])])}))])})],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"floor-header"},[s("h1",[t._v("城市")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{attrs:{options:t.options}},[t._l(t.sliders,function(e){return e.show?s("swiper-slide",[s("a",{staticClass:"slider",attrs:{href:e.link}},[s("img",{attrs:{src:e.img}})])]):t._e()}),t._v(" "),s("div",{staticClass:"swiper-pagination",slot:"pagination"})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"swiper-slide"},[t._t("default")],2)},staticRenderFns:[]}},,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(15),n=s(43),r=s.n(n),a=s(42);i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:r.a}})}],[125]);
//# sourceMappingURL=app.0cd838290a81c79c2ce0.js.map