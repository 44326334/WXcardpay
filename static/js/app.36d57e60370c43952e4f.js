webpackJsonp([1],{"3g8d":function(t,e){},"5SD4":function(t,e){},DaWF:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App",data:function(){return{rangeValue:0}}},o,!1,function(t){n("tEwr")},null,null).exports,r=n("/ocq"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("mt-header",{attrs:{fixed:"",title:this.$route.meta.title}},[this.$route.path!==this.routes[0]?e("router-link",{attrs:{slot:"left",to:this.getNav()},slot:"left"},[e("mt-button",{attrs:{icon:"back"}},[this._v("返回")])],1):this._e(),this._v(" "),e("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),this._v("\n  "+this._s(this.$route.name)+"\n")],1)},staticRenderFns:[]};var c=n("VU/8")({data:function(){return{routes:["/","infos","payment","complied"]}},methods:{getNav:function(){var t=this,e="";return this.routes.find(function(n,a){n===t.$route.name&&("/"===n&&(e=t.routes[0]),e=t.routes[a-1])}),e}}},i,!1,function(t){n("5SD4")},"data-v-0a3a2610",null).exports,d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"card"},[this._t("header"),this._v(" "),this._t("content"),this._v(" "),this._t("footer")],2)},staticRenderFns:[]};var u=n("VU/8")({data:function(){return{}}},d,!1,function(t){n("3g8d")},"data-v-4ced1d99",null).exports,l={name:"product",components:{Card:u},data:function(){return{card:{name:"卡劵1"}}},methods:{handleBuy:function(){this.$router.push({name:"infos",params:{data:this.card.name}})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warp"},[a("Card",[a("div",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.card.name))]),t._v(" "),a("div",{staticClass:"card-content",attrs:{slot:"content"},slot:"content"},[a("img",{attrs:{src:n("dmOs"),alt:"",srcset:""}})]),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("mt-button",{attrs:{slot:"footer",size:"large",type:"primary"},nativeOn:{click:function(e){return t.handleBuy(e)}},slot:"footer"},[t._v("购买")])],1)])],1)},staticRenderFns:[]};var h={components:{Product:n("VU/8")(l,m,!1,function(t){n("YmIR")},null,null).exports},data:function(){return{}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-list"},[e("Product")],1)},staticRenderFns:[]};var f={components:{Header:c,Showlist:n("VU/8")(h,p,!1,function(t){n("Yk8j")},"data-v-2559a9fe",null).exports},data:function(){return{}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),e("Showlist")],1)},staticRenderFns:[]};var _=n("VU/8")(f,v,!1,function(t){n("zz8Y")},null,null).exports,$=n("mtWM"),y=n.n($),g=n("mw3O"),b=n.n(g);let k="http://shop.unishep.cn/coupons",S={};y.a.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),y.a.interceptors.response.use(function(t){switch(t.code){case 0:S.code="0",S.message="返回成功";break;case 401:S.code="401",S.message="没有权限",console.log(S)}return t});const x=()=>k,w=(t,e,n,a,o,s)=>{t=t.toLowerCase();let r=e;return Object.keys(a).length>0&&(r=e+"?"+b.a.stringify(a)),n?y.a[t](r,n,s):"get"===t?y.a[t](r,{params:o},s):y.a[t](r,b.a.stringify(o),s)};var C={name:"userInfos",components:{Header:c},data:function(){return{phone:{data:null,state:""},code:{data:null,state:""},sum:{data:null,state:""}}},methods:{handleSendCode:function(){(function(t={}){const e=t.$domain?t.$domain:x(),n=t.$config;let a={};return void 0!==t.mobile&&(a.mobile=t.mobile),t.$queryParameters&&Object.keys(t.$queryParameters).forEach(function(e){a[e]=t.$queryParameters[e]}),w("get",e+"/api/sendsms",void 0,a,{},n)})({mobile:this.phone.data}).then(function(t){console.log(t)})},handleSubmit:function(){var t=this;"success"===this.phone.state&&"success"===this.code.state&&"success"===this.sum.state?(this.$indicator.open(),function(t={}){const e=t.$domain?t.$domain:x(),n=t.$config;let a={};return void 0!==t.mobile&&(a.mobile=t.mobile),void 0!==t.code&&(a.code=t.code),void 0!==t.num&&(a.num=t.num),t.$queryParameters&&Object.keys(t.$queryParameters).forEach(function(e){a[e]=t.$queryParameters[e]}),w("post",e+"/api/createorder",void 0,a,{},n)}({mobile:this.phone.data,code:this.code.data,num:this.sum.data}).then(function(e){console.log(e),0===e.data.code&&t.$store.commit("createOrder",e.data.body)}),this.$store.commit("buyCard",{sum:this.sum.data,price:10,phone:this.phone.data,code:this.code.data,payed:!1}),setTimeout(function(){t.$router.push("/payment"),t.$indicator.close()},2e3)):this.$toast("请填写正确")}},computed:{carded:function(){return this.$store.state.carded}},watch:{"phone.data":function(){/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phone.data)?this.phone.state="success":this.phone.state="error"},"code.data":function(){/^\d{6}$/.test(this.code.data)?this.code.state="success":this.code.state="error"},"sum.data":function(){/^\d+$/.test(this.sum.data)?this.sum.state="success":this.sum.state="error"},deep:!0},mounted:function(){console.log(this.$route.matched),console.log(this.$store.state),this.phone.data=this.$store.state.carded.phone,this.sum.data=this.$store.state.carded.sum}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",[n("div",[t._v("你选择的卡劵为:"+t._s(this.$route.params.data))]),t._v(" "),n("div",[t._v(t._s(t.carded))]),t._v(" "),n("div",[t._v(t._s(this.phone.data))]),t._v(" "),n("mt-field",{attrs:{label:"手机号",placeholder:"请输入手机号",type:"tel",state:t.phone.state},model:{value:t.phone.data,callback:function(e){t.$set(t.phone,"data",t._n(e))},expression:"phone.data"}}),t._v(" "),n("mt-field",{attrs:{label:"验证码",placeholder:"请输入6位数验证码",type:"number",state:t.code.state},model:{value:t.code.data,callback:function(e){t.$set(t.code,"data",t._n(e))},expression:"code.data"}}),t._v(" "),n("mt-button",{attrs:{size:"large",type:"primary",plain:""},nativeOn:{click:function(e){return t.handleSendCode(e)}}},[t._v("获取手机验证码")]),t._v(" "),n("mt-field",{attrs:{label:"数量",placeholder:"请输入数量",type:"number",state:t.sum.state},model:{value:t.sum.data,callback:function(e){t.$set(t.sum,"data",t._n(e))},expression:"sum.data"}})],1),t._v(" "),n("mt-button",{attrs:{slot:"footer",size:"large",type:"primary"},nativeOn:{click:function(e){return t.handleSubmit(e)}},slot:"footer"},[t._v("确定")])],1)},staticRenderFns:[]};var P=n("VU/8")(C,O,!1,function(t){n("k3rF")},null,null).exports,E=n("fxnj"),F={name:"payment",components:{Header:c,Card:u},data:function(){return{pays:{}}},methods:{handlePay:function(){var t=this;this.$indicator.open(),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E.config({debug:!0,appId:t.appId,timestamp:t.timeStamp,nonceStr:t.nonceStr,signature:t.paySign,jsApiList:["config","chooseWXPay"]}),E.chooseWXPay({timestamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign,success:function(t){console.log(t)},fail:function(t){console.log(t)}})}(this.$store.state.order.payConfig),setTimeout(function(){t.$router.push("/complied"),t.$indicator.close()},1e3)}},computed:{carded:function(){return this.$store.state.carded},order:function(){return this.$store.state.order}},mounted:function(){}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("支付页面")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("p",[t._v("订单号:"+t._s(t.order.orderNo))]),t._v(" "),n("p",[t._v("手机号:"+t._s(t.carded.phone))]),t._v(" "),n("p",[t._v("数量:"+t._s(t.carded.sum))]),t._v(" "),n("p",[t._v("总金额:"+t._s(t.carded.price))])]),t._v(" "),n("div",[t._v(t._s(t.carded))]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("mt-button",{attrs:{slot:"footer",size:"large",type:"primary"},nativeOn:{click:function(e){return t.handlePay(e)}},slot:"footer"},[t._v("确认支付")])],1)])],1)},staticRenderFns:[]};var j=n("VU/8")(F,R,!1,function(t){n("DaWF")},"data-v-b74da974",null).exports,V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("div",{attrs:{slot:"header"},slot:"header"},[this._v("成功")]),this._v(" "),e("div",{attrs:{slot:"content"},slot:"content"},[this._v("手机号,数量,总金额")]),this._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"})])])},staticRenderFns:[]};var U=n("VU/8")({data:function(){return{}}},V,!1,function(t){n("bxlc")},"data-v-4ec1d758",null).exports;a.default.use(r.a);var q=new r.a({routes:[{path:"/",name:"home",component:_,meta:{title:"首页"}},{path:"/infos",name:"infos",component:P,meta:{title:"用户填写"}},{path:"/payment",name:"payment",component:j,meta:{title:"支付确认"}},{path:"/complied",name:"complied",component:U,meta:{title:"支付完成"}}]}),z=n("NYxO");a.default.use(z.a);var H=new z.a.Store({state:{carded:{name:"1",sum:null,price:null,phone:null,code:null,payed:!1},order:{}},mutations:{buyCard:function(t,e){var n=e.name,a=e.sum,o=e.price,s=e.phone,r=e.code,i=e.payed;t.carded.name=n,t.carded.sum=a,t.carded.price=o,t.carded.phone=s,t.carded.code=r,t.carded.payed=i},createOrder:function(t,e){t.order=e}},actions:{}}),Y=n("Au9i"),N=n.n(Y);n("d8/S");a.default.use(N.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:q,store:H,components:{App:s},template:"<App/>"})},Yk8j:function(t,e){},YmIR:function(t,e){},bxlc:function(t,e){},"d8/S":function(t,e){},dmOs:function(t,e,n){t.exports=n.p+"static/img/product1.bcfd13b.jpg"},k3rF:function(t,e){},tEwr:function(t,e){},zz8Y:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.36d57e60370c43952e4f.js.map