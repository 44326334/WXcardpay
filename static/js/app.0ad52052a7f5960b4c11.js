webpackJsonp([1],{"5iTR":function(t,e){},"8hDX":function(t,e){},"93lI":function(t,e){},FJj8:function(t,e){},KBvy:function(t,e){},Mwi1:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App",data:function(){return{rangeValue:0}}},s,!1,function(t){a("Mwi1")},null,null).exports,r=a("/ocq"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("mt-header",{attrs:{fixed:"",title:this.$route.meta.title}},[this.$route.path!==this.routes[0]?e("router-link",{attrs:{slot:"left",to:this.getNav()},slot:"left"},[e("mt-button",{attrs:{icon:"back"}})],1):this._e()],1)],1)},staticRenderFns:[]};var c=a("VU/8")({data:function(){return{routes:["/","infos","payment","complied"]}},methods:{getNav:function(){var t=this,e="";return this.routes.find(function(a,n){a===t.$route.name&&("/"===a&&(e=t.routes[0]),e=t.routes[n-1])}),e}}},i,!1,function(t){a("e1zQ")},"data-v-09cc5a10",null).exports,d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"card"},[this._t("header"),this._v(" "),this._t("content"),this._v(" "),this._t("footer")],2)},staticRenderFns:[]};var u=a("VU/8")({data:function(){return{}}},d,!1,function(t){a("FJj8")},"data-v-67c38c89",null).exports,l={name:"product",components:{Card:u},data:function(){return{card:{name:"健康检测礼包"}}},methods:{handleBuy:function(){this.$router.push({name:"infos",params:{data:this.card.name}})}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"warp"},[n("Card",[n("div",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[n("img",{attrs:{src:a("NQnJ"),alt:"",srcset:"",width:"50%"}})]),t._v(" "),n("div",{staticClass:"card-content",attrs:{slot:"content"},slot:"content"},[n("img",{attrs:{src:a("VPiv"),alt:"",srcset:""}})]),t._v(" "),n("div",{staticClass:"card-footer",attrs:{slot:"footer"},slot:"footer"},[n("h2",[t._v(t._s(t.card.name))]),t._v(" "),n("span",[t._v("(内含:尿检卡、检测结果分析、在线健康咨询)")]),t._v(" "),n("mt-button",{attrs:{slot:"footer",type:"primary"},nativeOn:{click:function(e){return t.handleBuy(e)}},slot:"footer"},[t._v("立即购买")])],1)]),t._v(" "),n("div",{staticClass:"wavy-line"})],1)},staticRenderFns:[]};var p={components:{Product:a("VU/8")(l,m,!1,function(t){a("8hDX")},null,null).exports},data:function(){return{}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-list"},[e("Product")],1)},staticRenderFns:[]};var f={components:{Header:c,Showlist:a("VU/8")(p,h,!1,function(t){a("v/35"),a("93lI")},"data-v-f1962632",null).exports},data:function(){return{}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("Showlist")],1)},staticRenderFns:[]};var g=a("VU/8")(f,v,!1,function(t){a("5iTR"),a("imgj")},null,null).exports,y=a("bOdI"),_=a.n(y),b=a("mtWM"),C=a.n(b),$=a("mw3O"),x=a.n($);let k="http://shop.unishep.cn/coupons",R={};C.a.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),C.a.interceptors.response.use(function(t){switch(t.code){case 0:R.code="0",R.message="返回成功";break;case 401:R.code="401",R.message="没有权限",console.log(R)}return t});const w=()=>k,A=(t,e,a,n,s,o)=>{t=t.toLowerCase();let r=e;return Object.keys(n).length>0&&(r=e+"?"+x.a.stringify(n)),a?C.a[t](r,a,o):"get"===t?C.a[t](r,{params:s},o):C.a[t](r,x.a.stringify(s),o)};var P={name:"userInfos",components:{Header:c},data:function(){var t;return t={title:"用户信息填写",code:this.$route.params.data,phone:{data:null,state:""}},_()(t,"code",{data:null,state:""}),_()(t,"sum",{data:1,state:""}),t},methods:{handleSendCode:function(){this.phone.state?function(t={}){const e=t.$domain?t.$domain:w(),a=t.$config;let n={};return void 0!==t.mobile&&(n.mobile=t.mobile),t.$queryParameters&&Object.keys(t.$queryParameters).forEach(function(e){n[e]=t.$queryParameters[e]}),A("get",e+"/api/sendsms",void 0,n,{},a)}({mobile:this.phone.data}).then(function(t){console.log(t)}):this.$toast({message:"请填写手机号",position:"top"})},handleSubmit:function(){var t=this;"success"===this.phone.state&&"success"===this.code.state?(this.$indicator.open(),function(t={}){const e=t.$domain?t.$domain:w(),a=t.$config;let n={};return void 0!==t.mobile&&(n.mobile=t.mobile),void 0!==t.code&&(n.code=t.code),void 0!==t.num&&(n.num=t.num),t.$queryParameters&&Object.keys(t.$queryParameters).forEach(function(e){n[e]=t.$queryParameters[e]}),A("post",e+"/api/createorder",void 0,n,{},a)}({mobile:this.phone.data,code:this.code.data,num:this.sum.data}).then(function(e){0===e.data.code&&t.$store.commit("createOrder",e.data.body)}),this.$store.commit("buyCard",{sum:this.sum.data,phone:this.phone.data,code:this.code.data,payed:!1}),setTimeout(function(){t.$router.push("/payment"),t.$indicator.close()},2e3)):this.$toast({message:"请填写正确",position:"top"})}},computed:{carded:function(){return this.$store.state.carded}},watch:{"phone.data":function(){/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phone.data)?this.phone.state="success":this.phone.state="error"},"code.data":function(){/^\d{6}$/.test(this.code.data)?this.code.state="success":this.code.state="error"},deep:!0},mounted:function(){console.log(this.$route.matched),console.log(this.$store.state),this.phone.data=this.$store.state.carded.phone,this.sum.data=this.$store.state.carded.sum}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userinfoswarp"},[a("p",{staticClass:"usertitle"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"userinfoscon"},[a("mt-field",{attrs:{label:"手机号：",type:"tel",state:t.phone.state},model:{value:t.phone.data,callback:function(e){t.$set(t.phone,"data",t._n(e))},expression:"phone.data"}}),t._v(" "),a("div",{staticClass:"validatewarp"},[a("mt-field",{staticClass:"validate",attrs:{label:"验证码：",disableClear:"",type:"number",state:t.code.state},model:{value:t.code.data,callback:function(e){t.$set(t.code,"data",t._n(e))},expression:"code.data"}}),t._v(" "),a("mt-button",{attrs:{size:"small",type:"primary",plain:""},nativeOn:{click:function(e){return t.handleSendCode(e)}}},[t._v("获取验证码")])],1),t._v(" "),a("mt-field",{attrs:{label:"数量：",type:"number",state:t.sum.state},model:{value:t.sum.data,callback:function(e){t.$set(t.sum,"data",t._n(e))},expression:"sum.data"}}),t._v(" "),a("mt-button",{staticClass:"nextbtn",attrs:{slot:"footer",size:"large",type:"primary"},nativeOn:{click:function(e){return t.handleSubmit(e)}},slot:"footer"},[t._v("下一步")])],1)])},staticRenderFns:[]};var N=a("VU/8")(P,F,!1,function(t){a("qINr")},null,null).exports,E={name:"payment",components:{Header:c,Card:u},data:function(){return{title:"支付页面",sumprice:null,pays:{}}},methods:{handlePay:function(){console.log(this.$store.state.order),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign},function(t){"get_brand_wcpay_request:ok"==t.err_msg?V.push({name:"complied",params:{msg:"支付成功"}}):"get_brand_wcpay_request:cancel"==t.err_msg?V.push({name:"complied",params:{msg:"支付过程中用户取消"}}):"get_brand_wcpay_request:fail"==t.err_msg?V.push({name:"complied",params:{msg:"支付失败"}}):V.push({name:"complied",params:{msg:"未知异常"}})})}(this.$store.state.order.payConfig)}},computed:{carded:function(){return this.$store.state.carded},order:function(){return this.$store.state.order},sum:function(){return(this.$store.state.carded.price*this.$store.state.carded.sum).toFixed(2)}},mounted:function(){console.log(this.$store.state.order)}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"paywarp"},[a("div",{staticClass:"paytitle",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"paycon",attrs:{slot:"content"},slot:"content"},[a("p",[t._v("您本次将购买康云健康服务礼包  "),a("span",[t._v("x"+t._s(this.$store.state.order.num))])]),t._v(" "),a("p",[t._v("总金额："),a("span",[t._v(t._s(this.$store.state.order.toal))]),t._v("元")])]),t._v(" "),a("div",{staticClass:"payfooter",attrs:{slot:"footer"},slot:"footer"},[a("mt-button",{attrs:{slot:"footer",size:"large",type:"primary"},nativeOn:{click:function(e){return t.handlePay(e)}},slot:"footer"},[t._v("确认支付")])],1)])])},staticRenderFns:[]};var S=a("VU/8")(E,O,!1,function(t){a("KBvy"),a("Rua1")},"data-v-82ffb48c",null).exports,q={data:function(){return{title:this.$route.params.msg,orderNo:""}},beforeMount:function(){var t=this,e={orderNo:this.$store.state.order.orderNo};e&&function(t={}){const e=t.$domain?t.$domain:w(),a=t.$config;let n={};return void 0!==t.orderNo&&(n.orderNo=t.orderNo),t.$queryParameters&&Object.keys(t.$queryParameters).forEach(function(e){n[e]=t.$queryParameters[e]}),A("get",e+"/api/getcoupon",void 0,n,{},a)}(e).then(function(e){t.orderNo=e.data.body}).catch(function(t){console.log(t)})}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"comwarp"},[n("div",{staticClass:"comtitle",attrs:{slot:"header"},slot:"header"},[n("img",{attrs:{src:a("xiWN"),alt:"",srcset:"",width:"50px",height:"50px"}}),t._v(" "),n("p",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"comcon",attrs:{slot:"content"},slot:"content"},[n("p",[t._v("卡券编号："+t._s(t.orderNo))])]),t._v(" "),n("div",{staticClass:"comfooter",attrs:{slot:"footer"},slot:"footer"},[n("router-link",{attrs:{to:"/"}},[t._v("页面将在5s内自动跳转，如没有跳转请点击")])],1)])])},staticRenderFns:[]};var U=a("VU/8")(q,I,!1,function(t){a("RV/n"),a("jsbT")},"data-v-2f1a87f4",null).exports;n.default.use(r.a);var V=new r.a({routes:[{path:"/",name:"home",component:g,meta:{title:"首页"}},{path:"/infos",name:"infos",component:N,meta:{title:"用户填写"}},{path:"/payment",name:"payment",component:S,meta:{title:"支付确认"}},{path:"/complied",name:"complied",component:U,meta:{title:"支付完成"}}]}),W=a("NYxO");n.default.use(W.a);var X=new W.a.Store({state:{carded:{name:"1",sum:null,price:10,phone:null,code:null,payed:!1},order:{}},mutations:{buyCard:function(t,e){var a=e.name,n=e.sum,s=e.phone,o=e.code,r=e.payed;t.carded.name=a,t.carded.sum=n,t.carded.phone=s,t.carded.code=o,t.carded.payed=r},createOrder:function(t,e){t.order=e},paying:function(t,e){t.carded.payed=e}},actions:{}}),j=a("Au9i"),H=a.n(j);a("d8/S");n.default.use(H.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:V,store:X,components:{App:o},template:"<App/>"})},NQnJ:function(t,e,a){t.exports=a.p+"static/img/LOGO.55319d7.png"},"RV/n":function(t,e){},Rua1:function(t,e){},VPiv:function(t,e,a){t.exports=a.p+"static/img/present.293213c.png"},"d8/S":function(t,e){},e1zQ:function(t,e){},imgj:function(t,e){},jsbT:function(t,e){},qINr:function(t,e){},"v/35":function(t,e){},xiWN:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAE0klEQVRogd3bS2xUVRzH8U9nKoUCnaqAJBAo2PLSFJCogAmJD/CBhERi4gYTg9IQeehCIYYliYGQYCCRBeoCVsS4EDVRgQUEFRdUkaCQgGJCF4AiWEF8oC7ODJZ2pr0zc+9M4btqZ+455/edM3Pnnjn/WzOgfYyEmIyZmIqJaMIwNKIWf+MCfsIpHMdhHMR3SQSqiVl2FhZjAUaX0c9pfIAd+CKGXIhHdhCex0o0l52oJyewGW/jcjkdlSM7ACvwKkaUEyIiZ7EBW/BnKR2kShz4IeHztVFlRGXH2Zgd9+FSOihWtk54ZfdiUikDxsAk7MnmqCumYTGy4/E5lhczQIIsF05ed0ZtEFV2Gj7DPSWESpLpOCDk65MosnOwDyPLCJUkI4V8c/o6sC/ZqdiFhhhCJUmDkLPXGe5Nthm7kYkxVJJk8KlevusLydbjPQxPIFSSDBdy1+d7spDsJrQmlShhWoX8PcgnOw9LE42TPEvxaPcHu8sOxNaKxEmerYLPNbrLrhAuHm4Gxul2AdR1ITBIWFdW6lq3JNI1aZnUUOevXohy+BlB+neun9mlbgDRd8ZusnfCu4bX3h6lyR26nH+6yvaXa9685ESfuXWhKQMn2N2yM6rwi7k/crKzJLPwjoWuojkmD2yxu2WnEbXD+mreIvhdk12cSMoYyCeaY0LdePcNnh6lm8X8L7sgvnjx0Zvo1X+veu7Hl314cXeUrhYQZCcq78exRIgiuvOX96N2NxqTUnggxoyxELNojtkpYRnXb0hIFFpzb+N+QYKiZN/GTWXk01w3rpzm10hYFMamEOmbOR9PNT7h8OQ9Vo14oZwQlRCFhpQSf4lY1DjfjqYtamtqbRi1tmThConC0BRuKbbVosb5tjdtVltTe+2xUoQrKEpW9q9iW82ob71ONEcxwhUWhc50ui2zUoHfbAqxt/OAoekhZg6e0eO5uQ1zdP5zyZeX2gu2r4Io/JxOt2WWCPumRbGnc39JwlUShY50ui3zpBJXPMUKV1EUDqXTbZl7cX+pPUQVrrIofFQrbAGWxeqOdeClPCenDaPWSqkxrf7uaorCNzUD2sdMElMNw/pRa/MKF6KCojA5hWPoiKO31R3rvHF2W6RjKyzagWO5xfuuuHqNIlxhUbJ+6XRbBs5jSVw993bSqoIorMLp3MweFKpSYiPfDFdJ9IRseVFuZgn1CfPiHKXrDFdJFF4XyiOu2xHI4HvcFvtoo17z9eWj1RA9L2znXKRnHdQa4ZW4WViD9bl/ussOxLfC/siNzg+Ygiu5B7rv4l3BskomSpBluoiSfzP6E7xZkTjJsVXwuI5CtYt1wuk60t5CP+MrzNZtVilcU/EHnsa5BEMlwTkhdw9Rei8NOonHZE/bNwAX8biQOy99FX21YyE6YwyVBJ1CzkO9HRSlnG8fHhS27PsjZ4R8+/o6MGqh5iFhA+xIGaGS4IiQq9cZzVFMCe5J4QaHaAvW5Nkm7KgX/Ix2p9ji6stCQcYjwt0a1eA45mZzXCqmYall83uFsrlXhNr9SnA2O16rUEleNHHc/VEvLPyTuvvjpHD3x1uqePdHPmbhWeH7uamMfk7hY2zXz+7rKcR4obr7LmHDu1lYMw8RiqF/xW/CxcAJ4bN4FPuFdXXs/AdCk628OOQ0LwAAAABJRU5ErkJggg=="}},["NHnr"]);
//# sourceMappingURL=app.0ad52052a7f5960b4c11.js.map