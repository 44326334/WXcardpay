webpackJsonp([1],{"0Mrp":function(t,e){},"5iTR":function(t,e){},"7FMa":function(t,e){},"93lI":function(t,e){},FJj8:function(t,e){},Mwi1:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=o("VU/8")({name:"App",data:function(){return{rangeValue:0}}},a,!1,function(t){o("Mwi1")},null,null).exports,r=o("/ocq"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("mt-header",{attrs:{fixed:"",title:this.$route.meta.title}},[this.$route.path!==this.routes[0]?e("router-link",{attrs:{slot:"left",to:this.getNav()},slot:"left"},[e("mt-button",{attrs:{icon:"back"}})],1):this._e()],1)],1)},staticRenderFns:[]};var c=o("VU/8")({data:function(){return{routes:["/","infos","payment","complied"]}},methods:{getNav:function(){var t=this,e="";return this.routes.find(function(o,s){o===t.$route.name&&("/"===o&&(e=t.routes[0]),e=t.routes[s-1])}),e}}},i,!1,function(t){o("e1zQ")},"data-v-09cc5a10",null).exports,d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"card"},[this._t("header"),this._v(" "),this._t("content"),this._v(" "),this._t("footer")],2)},staticRenderFns:[]};var u=o("VU/8")({data:function(){return{}}},d,!1,function(t){o("FJj8")},"data-v-67c38c89",null).exports,l={name:"product",components:{Card:u},data:function(){return{card:{name:"健康检测礼包"}}},methods:{handleBuy:function(){this.$router.push({name:"infos",params:{data:this.card.name}})}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warp"},[s("Card",[s("div",{staticClass:"card-header",attrs:{slot:"header"},slot:"header"},[s("img",{attrs:{src:o("NQnJ"),alt:"",srcset:"",width:"50%"}})]),t._v(" "),s("div",{staticClass:"card-content",attrs:{slot:"content"},slot:"content"},[s("img",{attrs:{src:o("VPiv"),alt:"",srcset:""}})]),t._v(" "),s("div",{staticClass:"card-footer",attrs:{slot:"footer"},slot:"footer"},[s("h2",[t._v(t._s(t.card.name))]),t._v(" "),s("span",[t._v("(内含:尿检卡、检测结果分析、在线健康咨询)")]),t._v(" "),s("mt-button",{attrs:{slot:"footer",type:"primary"},nativeOn:{click:function(e){return t.handleBuy(e)}},slot:"footer"},[t._v("立即购买")]),t._v(" "),s("div",[s("router-link",{attrs:{to:"/checkrecord"}},[t._v("查询购买记录")])],1)],1)])],1)},staticRenderFns:[]};var m={components:{Product:o("VU/8")(l,h,!1,function(t){o("rBgI")},null,null).exports},data:function(){return{}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-list"},[e("Product")],1)},staticRenderFns:[]};var f={components:{Header:c,Showlist:o("VU/8")(m,p,!1,function(t){o("v/35"),o("93lI")},"data-v-f1962632",null).exports},data:function(){return{}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("Showlist")],1)},staticRenderFns:[]};var y=o("VU/8")(f,v,!1,function(t){o("5iTR"),o("imgj")},null,null).exports,g=o("bOdI"),b=o.n(g),_=o("mtWM"),$=o.n(_),C=o("mw3O"),w=o.n(C);let x="http://127.0.0.1:8023",k={};$.a.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),$.a.interceptors.response.use(function(t){switch(t.code){case 0:k.code="0",k.message="返回成功";break;case 401:k.code="401",k.message="没有权限",console.log(k)}return t});const N=()=>x,S=(t,e,o,s,a,n)=>{t=t.toLowerCase();let r=e;return Object.keys(s).length>0&&(r=e+"?"+w.a.stringify(s)),o?$.a[t](r,o,n):"get"===t?$.a[t](r,{params:a},n):$.a[t](r,w.a.stringify(a),n)},P=function(t={}){const e=t.$domain?t.$domain:N(),o=t.$config;let s={};return void 0!==t.mobile&&(s.mobile=t.mobile),t.$queryParameters&&Object.keys(t.$queryParameters).forEach(function(e){s[e]=t.$queryParameters[e]}),S("get",e+"/api/sendsms",void 0,s,{},o)};var A={name:"userInfos",components:{Header:c},data:function(){var t;return t={title:"用户信息填写",code:this.$route.params.data,show:!0,count:"",timer:null,phone:{data:null,state:""}},b()(t,"code",{data:null,state:""}),b()(t,"sum",{data:1,state:""}),t},methods:{handleSendCode:function(){var t=this;this.phone.state?(P({mobile:this.phone.data}).then(function(t){console.log(t)}),this.timer||(this.count=60,this.show=!1,this.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3))):this.$toast({message:"请填写手机号",position:"top"})},handleSubmit:function(){var t=this;"success"===this.phone.state&&"success"===this.code.state?(this.$indicator.open(),function(t={}){const e=t.$domain?t.$domain:N(),o=t.$config;let s={};return void 0!==t.mobile&&(s.mobile=t.mobile),void 0!==t.code&&(s.code=t.code),void 0!==t.num&&(s.num=t.num),t.$queryParameters&&Object.keys(t.$queryParameters).forEach(function(e){s[e]=t.$queryParameters[e]}),S("post",e+"/api/createorder",void 0,s,{},o)}({mobile:this.phone.data,code:this.code.data,num:this.sum.data}).then(function(e){0===e.data.code&&t.$store.commit("createOrder",e.data.body)}),this.$store.commit("buyCard",{sum:this.sum.data,phone:this.phone.data,code:this.code.data,payed:!1}),setTimeout(function(){t.$router.push("/payment"),t.$indicator.close()},2e3)):this.$toast({message:"请填写正确",position:"top"})}},computed:{carded:function(){return this.$store.state.carded}},watch:{"phone.data":function(){/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phone.data)?this.phone.state="success":this.phone.state="error"},"code.data":function(){/^\d{6}$/.test(this.code.data)?this.code.state="success":this.code.state="error"},deep:!0},mounted:function(){console.log(this.$route.matched),console.log(this.$store.state),this.$store.state.carded.phone&&(this.phone.data=this.$store.state.carded.phone,this.sum.data=this.$store.state.carded.sum)}},E={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"userinfoswarp"},[o("p",{staticClass:"usertitle"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"userinfoscon"},[o("mt-field",{attrs:{label:"手机号：",type:"tel",state:t.phone.state},model:{value:t.phone.data,callback:function(e){t.$set(t.phone,"data",t._n(e))},expression:"phone.data"}}),t._v(" "),o("mt-field",{staticClass:"validate",attrs:{label:"验证码：",type:"number",state:t.code.state},model:{value:t.code.data,callback:function(e){t.$set(t.code,"data",t._n(e))},expression:"code.data"}},[o("mt-button",{attrs:{size:"small",type:"primary",plain:"",disabled:!t.show},nativeOn:{click:function(e){return t.handleSendCode(e)}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("获取验证码")]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"count"},[t._v(t._s(t.count)+" s")])])],1),t._v(" "),o("mt-field",{attrs:{label:"数量：",type:"number",state:t.sum.state},model:{value:t.sum.data,callback:function(e){t.$set(t.sum,"data",t._n(e))},expression:"sum.data"}}),t._v(" "),o("mt-button",{staticClass:"nextbtn",attrs:{slot:"footer",size:"large",type:"primary"},nativeOn:{click:function(e){return t.handleSubmit(e)}},slot:"footer"},[t._v("下一步")])],1)])},staticRenderFns:[]};var F=o("VU/8")(A,E,!1,function(t){o("RZUv")},null,null).exports,R={name:"payment",components:{Header:c,Card:u},data:function(){return{title:"支付页面",sumprice:null,pays:{}}},methods:{handlePay:function(){console.log(this.$store.state.order),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.appId,timeStamp:t.timeStamp,nonceStr:t.nonceStr,package:t.package,signType:t.signType,paySign:t.paySign},function(t){"get_brand_wcpay_request:ok"==t.err_msg?j.replace({name:"complied",params:{msg:"支付成功"}}):"get_brand_wcpay_request:cancel"==t.err_msg?j.replace({name:"complied",params:{msg:"支付过程中用户取消"}}):"get_brand_wcpay_request:fail"==t.err_msg?j.replace({name:"complied",params:{msg:"支付失败"}}):j.replace({name:"complied",params:{msg:"未知异常"}})})}(this.$store.state.order.payConfig)}},computed:{carded:function(){return this.$store.state.carded},order:function(){return this.$store.state.order},sum:function(){return(this.$store.state.carded.price*this.$store.state.carded.sum).toFixed(2)}},mounted:function(){console.log(this.$store.state.order)}},O={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"paywarp"},[o("div",{staticClass:"paytitle",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"paycon",attrs:{slot:"content"},slot:"content"},[o("p",[t._v("您本次将购买康云健康服务礼包  "),o("span",[t._v("x"+t._s(this.$store.state.order.num))])]),t._v(" "),o("p",[t._v("总金额："),o("span",[t._v(t._s(this.$store.state.order.toal))]),t._v("元")])]),t._v(" "),o("div",{staticClass:"payfooter",attrs:{slot:"footer"},slot:"footer"},[o("mt-button",{attrs:{slot:"footer",size:"large",type:"primary"},nativeOn:{click:function(e){return t.handlePay(e)}},slot:"footer"},[t._v("确认支付")])],1)])])},staticRenderFns:[]};var I=o("VU/8")(R,O,!1,function(t){o("sSBa"),o("7FMa")},"data-v-59ba34ce",null).exports,q={data:function(){return{title:this.$route.params.msg,orderNo:"",responseCon:""}},methods:{onCopy:function(t){var e=this;this.$toast({message:"复制成功",position:"top"}),this.$indicator.open("跳转中..."),setTimeout(function(){t.text&&(e.$indicator.close(),window.location.href="http://devlopapp.unishep.cn:8080/coupons/")},1e3)},onError:function(t){this.$toast({message:"复制失败",position:"top"})}},created:function(){},mounted:function(){var t=this,e={orderNo:this.$store.state.order.orderNo};e&&function(t={}){const e=t.$domain?t.$domain:N(),o=t.$config;let s={};return void 0!==t.orderNo&&(s.orderNo=t.orderNo),t.$queryParameters&&Object.keys(t.$queryParameters).forEach(function(e){s[e]=t.$queryParameters[e]}),S("get",e+"/api/getcoupon",void 0,s,{},o)}(e).then(function(e){t.orderNo=e.data.body,t.responseCon="show"}).catch(function(e){console.log(e),t.responseCon="show"})}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.responseCon,expression:"responseCon"}]},[s("div",{staticClass:"comwarp"},[s("div",{staticClass:"comtitle",attrs:{slot:"header"},slot:"header"},[s("img",{attrs:{src:o("xiWN"),alt:"",srcset:"",width:"50px",height:"50px"}}),t._v(" "),s("p",[t._v(t._s(t.title))])]),t._v(" "),s("div",{staticClass:"comcon",attrs:{slot:"content"},slot:"content"},[s("p",[t._v("卡券编号："+t._s(t.orderNo))])]),t._v(" "),s("div",{staticClass:"comfooter",attrs:{slot:"footer"},slot:"footer"},[s("mt-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.orderNo,expression:"orderNo",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{slot:"footer",size:"small",type:"primary",disabled:!t.orderNo},slot:"footer"},[t._v("\n        复制并前往兑换\n      ")])],1)])])},staticRenderFns:[]};var W=o("VU/8")(q,U,!1,function(t){o("0Mrp"),o("z8SA")},"data-v-e6594c00",null).exports,V={name:"userInfos",components:{Header:c},data:function(){return b()({title:"用户信息填写",code:this.$route.params.data,show:!0,count:"",timer:null,phone:{data:null,state:""}},"code",{data:null,state:""})},methods:{handleSendCode:function(){var t=this;this.phone.state?(P({mobile:this.phone.data}).then(function(t){console.log(t)}),this.timer||(this.count=60,this.show=!1,this.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3))):this.$toast({message:"请填写手机号",position:"top"})},handleSubmit:function(){var t=this;"success"===this.phone.state&&"success"===this.code.state?(this.$indicator.open(),function(t={}){const e=t.$domain?t.$domain:N(),o=t.$config;let s={};return void 0!==t.mobile&&(s.mobile=t.mobile),void 0!==t.code&&(s.code=t.code),t.$queryParameters&&Object.keys(t.$queryParameters).forEach(function(e){s[e]=t.$queryParameters[e]}),S("get",e+"/api/query",void 0,s,{},o)}({mobile:this.phone.data,code:this.code.data}).then(function(e){0===e.data.code&&(console.log(e.data.list),t.$store.commit("checkrecord",e.data.list))}),this.$store.commit("buyCard",{sum:this.sum.data,phone:this.phone.data,code:this.code.data,payed:!1}),setTimeout(function(){t.$router.push("/record"),t.$indicator.close()},2e3)):this.$toast({message:"请填写正确",position:"top"})}},computed:{carded:function(){return this.$store.state.carded}},watch:{"phone.data":function(){/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phone.data)?this.phone.state="success":this.phone.state="error"},"code.data":function(){/^\d{6}$/.test(this.code.data)?this.code.state="success":this.code.state="error"},deep:!0},mounted:function(){console.log(this.$route.matched),console.log(this.$store.state),this.$store.state.carded.phone&&(this.phone.data=this.$store.state.carded.phone,this.sum.data=this.$store.state.carded.sum)}},z={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"userinfoswarp"},[o("p",{staticClass:"usertitle"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"userinfoscon"},[o("mt-field",{attrs:{label:"手机号：",type:"tel",state:t.phone.state},model:{value:t.phone.data,callback:function(e){t.$set(t.phone,"data",t._n(e))},expression:"phone.data"}}),t._v(" "),o("mt-field",{staticClass:"validate",attrs:{label:"验证码：",type:"number",state:t.code.state},model:{value:t.code.data,callback:function(e){t.$set(t.code,"data",t._n(e))},expression:"code.data"}},[o("mt-button",{attrs:{size:"small",type:"primary",plain:"",disabled:!t.show},nativeOn:{click:function(e){return t.handleSendCode(e)}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("获取验证码")]),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"count"},[t._v(t._s(t.count)+" s")])])],1),t._v(" "),o("mt-button",{staticClass:"nextbtn",attrs:{slot:"footer",size:"large",type:"primary"},nativeOn:{click:function(e){return t.handleSubmit(e)}},slot:"footer"},[t._v("下一步")])],1)])},staticRenderFns:[]};var X=o("VU/8")(V,z,!1,function(t){o("anyZ")},null,null).exports,H=o("VU/8")(null,null,!1,null,null,null).exports;s.default.use(r.a);var j=new r.a({routes:[{path:"/",name:"home",component:y,meta:{title:"首页"}},{path:"/infos",name:"infos",component:F,meta:{title:"用户填写"}},{path:"/payment",name:"payment",component:I,meta:{title:"支付确认"}},{path:"/complied",name:"complied",component:W,meta:{title:"支付完成"}},{path:"/checkrecord",name:"checkrecord",component:X,meta:{title:"购买查询"}},{path:"/record",name:"record",component:H,meta:{title:"购买记录"}}]}),J=o("NYxO");s.default.use(J.a);var M=new J.a.Store({state:{carded:{name:"1",sum:null,price:10,phone:null,code:null,payed:!1},order:{},WXresult:{},recordlist:{}},mutations:{buyCard:function(t,e){var o=e.name,s=e.sum,a=e.phone,n=e.code,r=e.payed;t.carded.name=o,t.carded.sum=s,t.carded.phone=a,t.carded.code=n,t.carded.payed=r},createOrder:function(t,e){t.order=e},WXresult:function(t,e){t.WXresult=e},checkrecord:function(t,e){t.recordlist=e},paying:function(t,e){t.carded.payed=e}},actions:{}}),Z=o("Au9i"),Q=o.n(Z),Y=(o("d8/S"),o("wvfG")),B=o.n(Y);s.default.use(Q.a),s.default.use(B.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:j,store:M,components:{App:n},template:"<App/>"})},NQnJ:function(t,e,o){t.exports=o.p+"static/img/LOGO.55319d7.png"},RZUv:function(t,e){},VPiv:function(t,e,o){t.exports=o.p+"static/img/present.293213c.png"},anyZ:function(t,e){},"d8/S":function(t,e){},e1zQ:function(t,e){},imgj:function(t,e){},rBgI:function(t,e){},sSBa:function(t,e){},"v/35":function(t,e){},xiWN:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAE0klEQVRogd3bS2xUVRzH8U9nKoUCnaqAJBAo2PLSFJCogAmJD/CBhERi4gYTg9IQeehCIYYliYGQYCCRBeoCVsS4EDVRgQUEFRdUkaCQgGJCF4AiWEF8oC7ODJZ2pr0zc+9M4btqZ+455/edM3Pnnjn/WzOgfYyEmIyZmIqJaMIwNKIWf+MCfsIpHMdhHMR3SQSqiVl2FhZjAUaX0c9pfIAd+CKGXIhHdhCex0o0l52oJyewGW/jcjkdlSM7ACvwKkaUEyIiZ7EBW/BnKR2kShz4IeHztVFlRGXH2Zgd9+FSOihWtk54ZfdiUikDxsAk7MnmqCumYTGy4/E5lhczQIIsF05ed0ZtEFV2Gj7DPSWESpLpOCDk65MosnOwDyPLCJUkI4V8c/o6sC/ZqdiFhhhCJUmDkLPXGe5Nthm7kYkxVJJk8KlevusLydbjPQxPIFSSDBdy1+d7spDsJrQmlShhWoX8PcgnOw9LE42TPEvxaPcHu8sOxNaKxEmerYLPNbrLrhAuHm4Gxul2AdR1ITBIWFdW6lq3JNI1aZnUUOevXohy+BlB+neun9mlbgDRd8ZusnfCu4bX3h6lyR26nH+6yvaXa9685ESfuXWhKQMn2N2yM6rwi7k/crKzJLPwjoWuojkmD2yxu2WnEbXD+mreIvhdk12cSMoYyCeaY0LdePcNnh6lm8X8L7sgvnjx0Zvo1X+veu7Hl314cXeUrhYQZCcq78exRIgiuvOX96N2NxqTUnggxoyxELNojtkpYRnXb0hIFFpzb+N+QYKiZN/GTWXk01w3rpzm10hYFMamEOmbOR9PNT7h8OQ9Vo14oZwQlRCFhpQSf4lY1DjfjqYtamtqbRi1tmThConC0BRuKbbVosb5tjdtVltTe+2xUoQrKEpW9q9iW82ob71ONEcxwhUWhc50ui2zUoHfbAqxt/OAoekhZg6e0eO5uQ1zdP5zyZeX2gu2r4Io/JxOt2WWCPumRbGnc39JwlUShY50ui3zpBJXPMUKV1EUDqXTbZl7cX+pPUQVrrIofFQrbAGWxeqOdeClPCenDaPWSqkxrf7uaorCNzUD2sdMElMNw/pRa/MKF6KCojA5hWPoiKO31R3rvHF2W6RjKyzagWO5xfuuuHqNIlxhUbJ+6XRbBs5jSVw993bSqoIorMLp3MweFKpSYiPfDFdJ9IRseVFuZgn1CfPiHKXrDFdJFF4XyiOu2xHI4HvcFvtoo17z9eWj1RA9L2znXKRnHdQa4ZW4WViD9bl/ussOxLfC/siNzg+Ygiu5B7rv4l3BskomSpBluoiSfzP6E7xZkTjJsVXwuI5CtYt1wuk60t5CP+MrzNZtVilcU/EHnsa5BEMlwTkhdw9Rei8NOonHZE/bNwAX8biQOy99FX21YyE6YwyVBJ1CzkO9HRSlnG8fHhS27PsjZ4R8+/o6MGqh5iFhA+xIGaGS4IiQq9cZzVFMCe5J4QaHaAvW5Nkm7KgX/Ix2p9ji6stCQcYjwt0a1eA45mZzXCqmYall83uFsrlXhNr9SnA2O16rUEleNHHc/VEvLPyTuvvjpHD3x1uqePdHPmbhWeH7uamMfk7hY2zXz+7rKcR4obr7LmHDu1lYMw8RiqF/xW/CxcAJ4bN4FPuFdXXs/AdCk628OOQ0LwAAAABJRU5ErkJggg=="},z8SA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a01da93e4709dfa91dd5.js.map