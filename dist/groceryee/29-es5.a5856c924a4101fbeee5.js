function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{e7lA:function(e,t,n){"use strict";n.r(t);var o=n("SVse"),i=n("iInd"),c=n("mrSG"),r=n("wd/R"),d=n("8Y7J"),a=n("2Rin"),s=n("H+bZ"),l=n("WzhS"),g=function(){return{"border-radius":"5px",height:"120px",width:"100%"}};function p(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",4),d["\u0275\u0275element"](1,"ngx-skeleton-loader",5),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("theme",d["\u0275\u0275pureFunction0"](1,g)))}function _(e,t){1&e&&d["\u0275\u0275element"](0,"img",18)}function m(e,t){1&e&&d["\u0275\u0275element"](0,"img",19)}var v=function(e){return{"background-image":e}};function f(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div",6),d["\u0275\u0275elementStart"](1,"div",7),d["\u0275\u0275elementStart"](2,"div",8),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"]().openStore(e)})),d["\u0275\u0275template"](3,_,1,0,"img",9),d["\u0275\u0275template"](4,m,1,0,"img",10),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"div",11),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](n);var e=t.$implicit;return d["\u0275\u0275nextContext"]().openStore(e)})),d["\u0275\u0275elementStart"](6,"p",12),d["\u0275\u0275text"](7),d["\u0275\u0275pipe"](8,"slice"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"p",13),d["\u0275\u0275text"](10),d["\u0275\u0275pipe"](11,"slice"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"p",14),d["\u0275\u0275text"](13),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"div",15),d["\u0275\u0275elementStart"](15,"div",16),d["\u0275\u0275elementStart"](16,"a",17),d["\u0275\u0275text"](17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit,i=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngStyle",d["\u0275\u0275pureFunction1"](16,v,"url("+i.api.mediaURL+o.cover+"),url(assets/imgs/user.png)")),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",o.isOpen&&"1"===o.isClosed),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!o.isOpen||"0"===o.isClosed),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"](" ",o.name.length>12?d["\u0275\u0275pipeBind3"](8,8,o.name,0,12)+"..":o.name,""),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"](" ",o.address.length>20?d["\u0275\u0275pipeBind3"](11,12,o.address,0,20)+"..":o.address," "),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate2"](" ",i.getTime(o.open_time)," - ",i.getTime(o.close_time)," "),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"](" ",i.util.translate("View")," ")}}var u,C,O=[{path:"",component:(u=function(){function e(t,n,o){_classCallCheck(this,e),this.util=t,this.api=n,this.router=o,this.stores=[],this.dummystores=[],this.dummystores=Array(30),this.getStore()}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getStore",value:function(){var e=this,t={id:localStorage.getItem("city")};this.api.post("stores/getByCity",t).then((function(t){console.log("stores by city",t),e.stores=[],e.dummystores=[],t&&200===t.status&&t.data&&t.data.length&&(e.stores=t.data,e.stores.forEach((function(t){return Object(c.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.isOpen(t.open_time,t.close_time);case 2:t.isOpen=e.sent;case 3:case"end":return e.stop()}}),e,this)})))})),console.log("store====>>>",e.stores))}),(function(t){e.dummystores=[],console.log(t),e.util.toast("error",e.util.translate("Error"),e.util.translate("Something went wrong"))}))}},{key:"isOpen",value:function(e,t){var n=r().format("HH:mm:ss"),o=r(n,"H:mm:ss"),i=r(e,"H:mm:ss"),c=r(t,"H:mm:ss");return!!o.isBetween(i,c)}},{key:"openStore",value:function(e){console.log("open store",e);var t=e.name.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase();this.router.navigate(["shop",e.uid,t])}},{key:"getTime",value:function(e){return r(e,["h:mm A"]).format("hh:mm A")}}]),e}(),u.\u0275fac=function(e){return new(e||u)(d["\u0275\u0275directiveInject"](a.a),d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](i.f))},u.\u0275cmp=d["\u0275\u0275defineComponent"]({type:u,selectors:[["app-stores"]],decls:5,vars:2,consts:[[1,"container"],[1,"row"],["class","col-12 col-md-6",4,"ngFor","ngForOf"],["class","content_div col-12 col-md-6",4,"ngFor","ngForOf"],[1,"col-12","col-md-6"],["appearance","circle",3,"theme"],[1,"content_div","col-12","col-md-6"],[1,"card_div"],[1,"image_div",3,"ngStyle","click"],["src","assets/imgs/open.png","class","isOpen","alt","Veg",4,"ngIf"],["src","assets/imgs/close.png","class","isOpen","alt","Non Veg",4,"ngIf"],[1,"desc_div",3,"click"],[1,"pro_name"],[1,"pro_detail"],[1,"price_lbl"],[1,"small_flex"],[1,"btnBtm"],[1,"ion-activatable","ripple-parent"],["src","assets/imgs/open.png","alt","Veg",1,"isOpen"],["src","assets/imgs/close.png","alt","Non Veg",1,"isOpen"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275template"](2,p,2,2,"div",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"div",1),d["\u0275\u0275template"](4,f,18,18,"div",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",t.dummystores),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",t.stores))},directives:[o.NgForOf,l.a,o.NgStyle,o.NgIf],pipes:[o.SlicePipe],styles:[".content_div[_ngcontent-%COMP%]{padding:10px 0;width:100%}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;box-shadow:3px 4px 6px rgba(0,0,0,.5);position:relative;border:1px solid #d3d3d3;margin:10px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .offer_tag[_ngcontent-%COMP%]{width:35px;position:absolute;top:0;left:0;z-index:99}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .off_lbl[_ngcontent-%COMP%]{position:absolute;width:-webkit-min-content;width:-moz-min-content;width:min-content;font-size:9px;top:4px;left:8px;text-align:center;color:#fff;z-index:999}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]{height:80px;width:80px;min-width:80px;background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;border-top-left-radius:5px;border-bottom-left-radius:5px;margin:5px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   .kind[_ngcontent-%COMP%]{height:15px;width:15px;position:absolute;right:5px;top:5px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   .isOpen[_ngcontent-%COMP%]{height:30px;width:30px;position:absolute;right:5px;top:5px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .image_div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]{text-align:right;padding:10px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .pro_name[_ngcontent-%COMP%]{font-size:15px;margin-bottom:5px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .pro_detail[_ngcontent-%COMP%]{font-size:11px;color:grey;margin-bottom:5px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]{font-weight:400;font-size:11px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{text-decoration:line-through;font-size:11px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .sell[_ngcontent-%COMP%]{font-weight:700}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .price_lbl[_ngcontent-%COMP%]   .dicount[_ngcontent-%COMP%]{font-weight:700;font-size:11px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:flex-end}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%]   .btnBtm[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;font-size:12px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .small_flex[_ngcontent-%COMP%]   .btnBtm[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%]{position:relative;overflow:hidden;padding:5px;color:#fff;background:#7fad39;border-radius:5px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]{width:100px;background:var(--ion-color-primary);height:30px;border-radius:15px;display:flex;justify-content:space-between;align-items:center;padding-left:3px;padding-right:3px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff;font-size:14px}.content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .desc_div[_ngcontent-%COMP%]   .abs_add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{color:#ff8e80;width:25px}"]}),u)}],P=((C=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[i.h.forChild(O)],i.h]}),C);n.d(t,"StoresModule",(function(){return x}));var M,x=((M=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:M}),M.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||M)},imports:[[o.CommonModule,P,l.b]]}),M)}}]);