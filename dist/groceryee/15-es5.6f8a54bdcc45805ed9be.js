function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{HK0l:function(e,t,r){"use strict";r.r(t);var o,a,l=r("SVse"),c=r("iInd"),n=r("mrSG"),i=r("wd/R"),s=r("8Y7J"),m=r("H+bZ"),d=r("2Rin"),u=r("c14U"),g=[{path:"",component:(o=function(){function e(t,r,o,a,l){var c=this;_classCallCheck(this,e),this.route=t,this.api=r,this.util=o,this.cart=a,this.router=l,this.route.queryParams.subscribe((function(e){console.log(e),e&&"successful"===e.status?function(e){try{return JSON.parse(e),!0}catch(t){return!1}}(localStorage.getItem("cartItems"))?(c.cart.cart=JSON.parse(localStorage.getItem("cartItems")),c.cart.deliveryAt=localStorage.getItem("deliveryAt"),c.cart.datetime=localStorage.getItem("datetime"),c.cart.totalPrice=localStorage.getItem("totalPrice"),c.cart.orderTax=localStorage.getItem("orderTax"),c.cart.grandTotal=localStorage.getItem("grandTotal"),c.cart.deliveryPrice=localStorage.getItem("deliveryPrice"),c.cart.coupon=function(e){try{return JSON.parse(e),!0}catch(t){return!1}}(localStorage.getItem("appliedCoupon"))?JSON.parse(localStorage.getItem("appliedCoupon")):null,c.cart.userOrderTaxByStores=function(e){try{return JSON.parse(e),!0}catch(t){return!1}}(localStorage.getItem("userOrderTaxByStores"))?JSON.parse(localStorage.getItem("userOrderTaxByStores")):[],c.cart.deliveryAddress=function(e){try{return JSON.parse(e),!0}catch(t){return!1}}(localStorage.getItem("selectedAddress"))?JSON.parse(localStorage.getItem("selectedAddress")):null,c.cart.discount=localStorage.getItem("discount"),console.log("cart instance calcuatelllll,,,,,",c.cart),c.createOrder("flutterwave",e.transaction_id)):(console.log("somerthing went wrong"),localStorage.removeItem("cartItems"),localStorage.removeItem("deliveryAt"),localStorage.removeItem("datetime"),localStorage.removeItem("totalPrice"),localStorage.removeItem("orderTax"),localStorage.removeItem("grandTotal"),localStorage.removeItem("deliveryPrice"),localStorage.removeItem("appliedCoupon"),localStorage.removeItem("userOrderTaxByStores"),localStorage.removeItem("discount"),localStorage.removeItem("selectedAddress"),c.util.errorMessage(c.util.translate("Something went wrong"))):(localStorage.removeItem("cartItems"),localStorage.removeItem("deliveryAt"),localStorage.removeItem("datetime"),localStorage.removeItem("totalPrice"),localStorage.removeItem("orderTax"),localStorage.removeItem("grandTotal"),localStorage.removeItem("deliveryPrice"),localStorage.removeItem("appliedCoupon"),localStorage.removeItem("userOrderTaxByStores"),localStorage.removeItem("discount"),localStorage.removeItem("selectedAddress"),c.util.errorMessage(c.util.translate("Something went wrong")),c.router.navigate([""]))}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"createOrder",value:function(e,t){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark((function r(){var o,a,l,c,n=this;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=_toConsumableArray(new Set(this.cart.cart.map((function(e){return e.store_id})))),a=[],o.forEach((function(e){a.push({id:e,status:"created"})})),l=[{status:1,value:"Order Created",time:i().format("lll")}],this.cart.deliveryAt=this.cart.deliveryAt?this.cart.deliveryAt:"",c={uid:localStorage.getItem("uid"),store_id:o.join(),date_time:"today"===this.cart.datetime?i().format("YYYY-MM-DD HH:mm:ss"):i().add(1,"days").format("YYYY-MM-DD HH:mm:ss"),paid_method:e,order_to:this.cart.deliveryAt,orders:JSON.stringify(this.cart.cart),notes:JSON.stringify(l),address:"home"===this.cart.deliveryAt?JSON.stringify(this.cart.deliveryAddress):"",driver_id:"",total:this.cart.totalPrice,tax:this.cart.orderTax,grand_total:this.cart.grandTotal,delivery_charge:this.cart.deliveryPrice,coupon_code:this.cart.coupon?JSON.stringify(this.cart.coupon):"",discount:this.cart.discount,pay_key:t,status:JSON.stringify(a),assignee:"",extra:JSON.stringify(this.cart.userOrderTaxByStores)},console.log("param-----\x3e",c),this.util.start(),this.api.post_private("orders/save",c).then((function(e){console.log(e),n.util.stop(),localStorage.removeItem("cartItems"),localStorage.removeItem("deliveryAt"),localStorage.removeItem("datetime"),localStorage.removeItem("totalPrice"),localStorage.removeItem("orderTax"),localStorage.removeItem("grandTotal"),localStorage.removeItem("deliveryPrice"),localStorage.removeItem("appliedCoupon"),localStorage.removeItem("userOrderTaxByStores"),localStorage.removeItem("discount"),localStorage.removeItem("selectedAddress"),n.util.errorMessage(n.util.translate("Something went wrong")),n.api.createOrderNotification(n.cart.stores),n.cart.clearCart(),n.util.publishNewOrder();var t=(n.util.userInfo.first_name+"-"+n.util.userInfo.last_name).toLowerCase();n.router.navigate(["user",t,"order"])}),(function(e){console.log(e),n.util.stop(),localStorage.removeItem("cartItems"),localStorage.removeItem("deliveryAt"),localStorage.removeItem("datetime"),localStorage.removeItem("totalPrice"),localStorage.removeItem("orderTax"),localStorage.removeItem("grandTotal"),localStorage.removeItem("deliveryPrice"),localStorage.removeItem("appliedCoupon"),localStorage.removeItem("userOrderTaxByStores"),localStorage.removeItem("discount"),localStorage.removeItem("selectedAddress"),n.util.errorMessage(n.util.translate("Something went wrong")),n.util.errorMessage(n.util.translate("Something went wrong"))})).catch((function(e){console.log(e),n.util.stop(),localStorage.removeItem("cartItems"),localStorage.removeItem("deliveryAt"),localStorage.removeItem("datetime"),localStorage.removeItem("totalPrice"),localStorage.removeItem("orderTax"),localStorage.removeItem("grandTotal"),localStorage.removeItem("deliveryPrice"),localStorage.removeItem("appliedCoupon"),localStorage.removeItem("userOrderTaxByStores"),localStorage.removeItem("discount"),localStorage.removeItem("selectedAddress"),n.util.errorMessage(n.util.translate("Something went wrong")),n.util.errorMessage(n.util.translate("Something went wrong"))}));case 6:case"end":return r.stop()}}),r,this)})))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](m.a),s["\u0275\u0275directiveInject"](d.a),s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](c.f))},o.\u0275cmp=s["\u0275\u0275defineComponent"]({type:o,selectors:[["app-flutterwavecallback"]],decls:2,vars:1,consts:[[2,"text-align","center"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"h2",0),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",t.util.translate("Please wait, we are processing your order")," "))},styles:[""]}),o)}],v=((a=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},imports:[[c.h.forChild(g)],c.h]}),a);r.d(t,"FlutterwavecallbackModule",(function(){return I}));var S,I=((S=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:S}),S.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||S)},imports:[[l.CommonModule,v]]}),S)}}]);