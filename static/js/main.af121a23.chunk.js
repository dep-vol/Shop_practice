(this.webpackJsonpcounter_practice=this.webpackJsonpcounter_practice||[]).push([[0],[,,,,,,,,,,,function(t,e,a){t.exports={container:"OrderForm_container__jWC73",form:"OrderForm_form__3LvHM",input:"OrderForm_input__1J61X",invalid:"OrderForm_invalid__3iWy_",valid:"OrderForm_valid__3MDqX",invalidMsg:"OrderForm_invalidMsg__3lG12",btnBack:"OrderForm_btnBack__SuyZR"}},,,,,function(t,e,a){t.exports={modal1:"NewModal_modal1__2KXUm",modal3:"NewModal_modal3__2x_Rs",body:"NewModal_body__12UBF",closeContainer:"NewModal_closeContainer__1LNg8",close:"NewModal_close__2DjRM",btnSucess:"NewModal_btnSucess__tt55x",btnGo:"NewModal_btnGo__31ch0",btnDanger:"NewModal_btnDanger__22b6k"}},,,function(t,e,a){t.exports={container:"SideMenu_container__yOk0v",txt:"SideMenu_txt___WgMc",active:"SideMenu_active__N5Tgf"}},,function(t,e,a){t.exports={container:"Cart_container__1f835",tBody:"Cart_tBody__3weEk",btnDanger:"Cart_btnDanger__2VEIY",go:"Cart_go__2-1xx"}},,function(t,e,a){t.exports={container:"CartCard_container__2dNtM",logo:"CartCard_logo__BJwBY",cart:"CartCard_cart__25rkv",body:"CartCard_body__2z4ek",h_title:"CartCard_h_title__3o9V1"}},function(t,e,a){t.exports={main:"Products_main__3TKS3",card:"Products_card__2Iwl1",btnSuccess:"Products_btnSuccess__2wE1f",btnDanger:"Products_btnDanger__2IeNB",cardLink:"Products_cardLink__38-oa"}},,function(t,e,a){t.exports={container:"App_container__1MQN3",header:"App_header__3ZZ1n",mainContainer:"App_mainContainer__2o5r7",textCenter:"App_textCenter__1TO60",main:"App_main__3ZkGI"}},,function(t,e,a){t.exports={form:"Counter_form__KmPvy",btnCounter:"Counter_btnCounter__OaHc7"}},,,,function(t,e,a){t.exports={overlayLoader:"LoadingScreen_overlayLoader__LV5AY",loader:"LoadingScreen_loader__2RHMm",rotateAnim:"LoadingScreen_rotateAnim__1Q49Q"}},,,,,,function(t,e,a){t.exports=a.p+"static/media/cart.6b1a547c.jpg"},function(t,e,a){t.exports={container:"ResultScreen_container__OOSPm"}},function(t,e,a){t.exports=a.p+"static/media/iphone_PNG5733.cea54723.png"},function(t,e,a){t.exports=a(52)},,,,,function(t,e,a){},,,,,,function(t,e,a){"use strict";a.r(e);var r={};a.r(r),a.d(r,"loadAll",(function(){return Q}));var n={};a.r(n),a.d(n,"cartLoad",(function(){return X})),a.d(n,"add",(function(){return q})),a.d(n,"delItem",(function(){return tt})),a.d(n,"changeCount",(function(){return et})),a.d(n,"clean",(function(){return at}));var o=a(0),c=a.n(o),i=a(22),l=a.n(i),s=(a(46),a(26)),u=a.n(s),p=a(15),d=function(t){return Object(p.b)("stores")(Object(p.c)(t))},m=a(7),f=a(19),h=a.n(f);var b=function(t){return c.a.createElement("div",{className:h.a.container},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(m.c,{to:"/",className:h.a.txt,activeClassName:h.a.active,exact:!0},"Home")),c.a.createElement("li",null,c.a.createElement(m.c,{to:"/cart",className:h.a.txt,activeClassName:h.a.active,exact:!0},"Cart")),c.a.createElement("li",null,c.a.createElement(m.c,{to:"/order",className:h.a.txt,activeClassName:h.a.active,exact:!0},"Buy now"))))},v=a(23),y=a.n(v),O=a(38),g=a.n(O);var E=d((function(t){var e=t.stores.cart;return c.a.createElement("div",{className:y.a.container},c.a.createElement("div",{className:y.a.logo},"MEGA TECTO SHOP"),c.a.createElement("div",{className:y.a.cart},c.a.createElement("img",{src:g.a}),c.a.createElement("div",{className:y.a.body},c.a.createElement("div",{className:y.a.h_title},"Total in Cart:"),c.a.createElement("div",null,"Count: ",e.totalCount),c.a.createElement("div",null,"Total price: ",e.total))))})),_=a(17),j=function(t){var e=t.Components;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:u.a.container},c.a.createElement("div",{className:u.a.header},c.a.createElement(E,null)),c.a.createElement("div",{className:u.a.mainContainer},c.a.createElement(b,null),c.a.createElement("div",{className:u.a.main},c.a.createElement(_.c,null,e)))))};j.defaultProps={stores:{},Components:[]};var C=d(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k,N,P,w,x,S,R,D,M,I,A,B,F,z,L,T=a(3),G=a(18),Z=a(8),U=a(5),V=a(2),W=(a(27),a(1)),H=(k=function(){function t(e){Object(T.a)(this,t),Object(Z.a)(this,"products",N,this),this.rootStore=e,this.api=this.rootStore.api.cart,this.storage=this.rootStore.storage,this.token=this.storage.getItem("cartToken"),this.load()}return Object(U.a)(t,[{key:"load",value:function(){var t=this;this.api.cartLoad(this.token).then((function(e){t.products=e.cart,e.needUpdate&&(t.token=e.token,t.storage.setItem("cartToken",t.token))}))}},{key:"change",value:function(t,e){var a=this;this.rootStore.activeProducts.changeAct(t);var r=this.products.findIndex((function(e){return e.id===t}));this.api.changeCount(this.token,t,e).then((function(n){n&&(a.products[r].cnt=e,a.rootStore.activeProducts.changeAct(t))}))}},{key:"deleteItem",value:function(t){var e=this;this.rootStore.activeProducts.changeAct(t);var a=this.products.findIndex((function(e){return e.id===t}));this.api.delItem(this.token,t).then((function(r){r&&(e.products.splice(a,1),e.rootStore.activeProducts.changeAct(t))}))}},{key:"addCartItem",value:function(t){var e=this;this.rootStore.activeProducts.changeAct(t),this.api.add(this.token,t).then((function(a){a?(e.products.push({id:t,cnt:1}),e.rootStore.activeProducts.changeAct(t)):console.log("wtf")}))}},{key:"clean",value:function(){var t=this;this.api.clean(this.token).then((function(e){e&&(t.products=[])}))}},{key:"detailedProducts",get:function(){var t=this;return this.products.map((function(e){return Object(G.a)(Object(G.a)({},t.rootStore.products.getProduct(e.id)),{},{cnt:e.cnt})}))}},{key:"total",get:function(){return this.detailedProducts.reduce((function(t,e){return t+e.price*e.cnt}),0)}},{key:"inCart",get:function(){var t=this;return function(e){return t.products.some((function(t){return t.id===e}))}}},{key:"totalCount",get:function(){return this.products.reduce((function(t,e){return t+e.cnt}),0)}}]),t}(),N=Object(V.a)(k.prototype,"products",[W.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(V.a)(k.prototype,"load",[W.d],Object.getOwnPropertyDescriptor(k.prototype,"load"),k.prototype),Object(V.a)(k.prototype,"change",[W.d],Object.getOwnPropertyDescriptor(k.prototype,"change"),k.prototype),Object(V.a)(k.prototype,"deleteItem",[W.d],Object.getOwnPropertyDescriptor(k.prototype,"deleteItem"),k.prototype),Object(V.a)(k.prototype,"addCartItem",[W.d],Object.getOwnPropertyDescriptor(k.prototype,"addCartItem"),k.prototype),Object(V.a)(k.prototype,"detailedProducts",[W.e],Object.getOwnPropertyDescriptor(k.prototype,"detailedProducts"),k.prototype),Object(V.a)(k.prototype,"total",[W.e],Object.getOwnPropertyDescriptor(k.prototype,"total"),k.prototype),Object(V.a)(k.prototype,"inCart",[W.e],Object.getOwnPropertyDescriptor(k.prototype,"inCart"),k.prototype),Object(V.a)(k.prototype,"totalCount",[W.e],Object.getOwnPropertyDescriptor(k.prototype,"totalCount"),k.prototype),Object(V.a)(k.prototype,"clean",[W.d],Object.getOwnPropertyDescriptor(k.prototype,"clean"),k.prototype),k),$=(P=function(){function t(e){Object(T.a)(this,t),Object(Z.a)(this,"consumer",w,this),Object(Z.a)(this,"valid",x,this),Object(Z.a)(this,"lastOrderCache",S,this),Object(Z.a)(this,"setConsumer",R,this),Object(Z.a)(this,"error",D,this),Object(Z.a)(this,"succes",M,this),Object(Z.a)(this,"check",I,this),this.rootStore=e}return Object(U.a)(t,[{key:"setCache",value:function(){this.lastOrderCache=Object(G.a)(Object(G.a)({},this.lastOrderCache),{},{consumer:this.consumer,total:this.rootStore.cart.total})}},{key:"status",get:function(){return!(""!==this.consumer.name&&""!==this.consumer.email&&""!==this.consumer.phone)}}]),t}(),w=Object(V.a)(P.prototype,"consumer",[W.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:"",email:"",phone:""}}}),x=Object(V.a)(P.prototype,"valid",[W.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:"",email:"",phone:""}}}),S=Object(V.a)(P.prototype,"lastOrderCache",[W.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{consumer:{},total:null}}}),R=Object(V.a)(P.prototype,"setConsumer",[W.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.consumer=Object(G.a)(Object(G.a)({},t.consumer),e)}}}),Object(V.a)(P.prototype,"setCache",[W.d],Object.getOwnPropertyDescriptor(P.prototype,"setCache"),P.prototype),D=Object(V.a)(P.prototype,"error",[W.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.valid[e.target.id]="invalid"}}}),M=Object(V.a)(P.prototype,"succes",[W.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.valid[e.target.id]="valid"}}}),I=Object(V.a)(P.prototype,"check",[W.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e,a){switch(a){case"name":/^['A-Za-z\u0410-\u044F][ '\x2DA-Za-z\u0410-\u044F]+['A-Za-z\u0410-\u044F]?$/.test(e.target.value)?(t.setConsumer({name:e.target.value}),t.succes(e)):t.error(e,"name");break;case"email":/^[^@]+@[^@.]+\.[^@]+$/.test(e.target.value)?(t.setConsumer({email:e.target.value}),t.succes(e)):t.error(e,"name");break;case"phone":/^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(e.target.value)?(t.setConsumer({phone:e.target.value}),t.succes(e)):t.error(e,"name");break;default:console.log("error")}}}}),Object(V.a)(P.prototype,"status",[W.e],Object.getOwnPropertyDescriptor(P.prototype,"status"),P.prototype),P),J=(A=function(){function t(e){Object(T.a)(this,t),Object(Z.a)(this,"products",B,this),this.rootStore=e,this.api=this.rootStore.api.products}return Object(U.a)(t,[{key:"load",value:function(){var t=this;return new Promise((function(e,a){t.api.loadAll().then((function(a){setTimeout((function(){t.products=a,e(!0)}),200)}))}))}},{key:"productsMap",get:function(){var t={};return this.products.forEach((function(e,a){return t[e.id.toString()]=a})),t}},{key:"getProduct",get:function(){var t=this;return function(e){return t.products[t.productsMap[e]]}}}]),t}(),B=Object(V.a)(A.prototype,"products",[W.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(V.a)(A.prototype,"load",[W.d],Object.getOwnPropertyDescriptor(A.prototype,"load"),A.prototype),Object(V.a)(A.prototype,"productsMap",[W.e],Object.getOwnPropertyDescriptor(A.prototype,"productsMap"),A.prototype),Object(V.a)(A.prototype,"getProduct",[W.e],Object.getOwnPropertyDescriptor(A.prototype,"getProduct"),A.prototype),A),K=(F=function t(e){Object(T.a)(this,t),Object(Z.a)(this,"actionState",z,this),Object(Z.a)(this,"changeAct",L,this),this.rootStore=e},z=Object(V.a)(F.prototype,"actionState",[W.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),L=Object(V.a)(F.prototype,"changeAct",[W.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.actionState[e]||!1;t.actionState[e]=!a}}}),F);function Y(t){return fetch("https://market-try.000webhostapp.com/"+t).then((function(t){return 200!==t.status?t.text().then((function(t){throw new Error(t)})):t.json()}))}function Q(){return Y("products/all.php")}function X(t){var e="cart/load.php";return null!==t&&(e+="?token=".concat(t)),Y(e)}function q(t,e){return Y("cart/add.php?token=".concat(t,"&id=").concat(e))}function tt(t,e){return Y("cart/remove.php?token=".concat(t,"&id=").concat(e))}function et(t,e,a){return Y("cart/change.php?token=".concat(t,"&id=").concat(e,"&cnt=").concat(a))}function at(t){return Y("cart/clean.php?token=".concat(t))}var rt=new function t(){Object(T.a)(this,t),this.api={products:r,cart:n},this.storage=localStorage,this.cart=new H(this),this.order=new $(this),this.products=new J(this),this.activeProducts=new K(this)},nt=a(10),ot=a(9),ct=a(4);var it=function(t){Object(nt.a)(a,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,r=Object(ct.a)(t);if(e()){var n=Object(ct.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(ot.a)(this,a)}}(a);function a(){var t;Object(T.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).input=c.a.createRef(),t.makeChange=function(e){e.preventDefault(),t.props.value!==e.target.value&&t.props.onChange(e)},t}return Object(U.a)(a,[{key:"componentDidUpdate",value:function(t,e){var a=this.input.current;t.value===this.props.value&&this.props.value===a.value||(a.value=this.props.value)}},{key:"render",value:function(){var t=this;return c.a.createElement("input",Object.assign({ref:this.input},this.props.nativeProps,{defaultValue:this.props.value,onBlur:this.makeChange,onKeyPress:function(e){return"Enter"===e.key?t.makeChange(e):null}}))}}]),a}(c.a.Component);it.defaultProps={onChange:function(t){},nativeProps:{}};var lt=it,st=a(28),ut=a.n(st);var pt=function(t){Object(nt.a)(a,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,r=Object(ct.a)(t);if(e()){var n=Object(ct.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(ot.a)(this,a)}}(a);function a(){var t;Object(T.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={inpValue:t.props.cnt},t.plus=function(){t.set(t.props.cnt+1)},t.minus=function(){t.set(t.props.cnt-1)},t.onChange=function(e){var a=parseInt(e.target.value);t.set(isNaN(a)?t.props.cnt:a)},t}return Object(U.a)(a,[{key:"set",value:function(t){var e=Math.max(Math.min(t,this.props.max),this.props.min);this.setState({inpValue:e}),this.props.onChange(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:ut.a.form},c.a.createElement("button",{className:ut.a.btnCounter,onClick:this.minus,disabled:this.props.disabled},"-"),c.a.createElement(lt,{nativeProps:{type:"text",className:"form-control"},value:this.props.cnt,onChange:this.onChange}),c.a.createElement("button",{className:ut.a.btnCounter,onClick:this.plus,disabled:this.props.disabled},"+"))}}]),a}(c.a.Component);pt.defaultProps={onChange:function(t){}};var dt=pt,mt=a(21),ft=a.n(mt);function ht(t){return c.a.createElement("div",{className:ft.a.container},c.a.createElement("h2",null,"Cart"),c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",{className:ft.a.tBody},c.a.createElement("td",null,"Title"),c.a.createElement("td",null,"Price"),c.a.createElement("td",null,"Count"),c.a.createElement("td",null,"Total"),c.a.createElement("td",null,"Delete item")),t.productsRow,c.a.createElement("tr",{className:ft.a.tBody},c.a.createElement("td",{colSpan:"3",align:"right"},"Final amount:"),c.a.createElement("td",null,t.total)))),c.a.createElement(m.b,{to:Gt.order,className:ft.a.go}," Make order "))}ht.defaultProps={productsRow:[],total:0};var bt=ht;var vt=function(t){Object(nt.a)(a,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,r=Object(ct.a)(t);if(e()){var n=Object(ct.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(ot.a)(this,a)}}(a);function a(){return Object(T.a)(this,a),e.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){var t=this,e=this.props.stores.cart,a=e.detailedProducts.map((function(a){return c.a.createElement("tr",{key:a.id},c.a.createElement("td",null,a.title),c.a.createElement("td",null,a.price),c.a.createElement("td",null,c.a.createElement(dt,{min:1,max:a.rest,cnt:a.cnt,onChange:function(t){return e.change(a.id,t)},disabled:t.props.stores.activeProducts.actionState[a.id]})),c.a.createElement("td",null,a.cnt*a.price),c.a.createElement("td",null,c.a.createElement("button",{className:ft.a.btnDanger,onClick:function(t){return e.deleteItem(a.id)},disabled:t.props.stores.activeProducts.actionState[a.id]},"Delete")))}));return c.a.createElement(bt,{productsRow:a,total:e.total})}}]),a}(c.a.Component);vt.defaultProps={stores:{}};var yt,Ot,gt,Et=d(vt),_t=a(11),jt=a.n(_t),Ct=a(16),kt=a.n(Ct);var Nt=Object(p.b)("stores")((gt=Ot=function(t){Object(nt.a)(a,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,r=Object(ct.a)(t);if(e()){var n=Object(ct.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(ot.a)(this,a)}}(a);function a(t){var r;return Object(T.a)(this,a),(r=e.call(this,t)).state={show:!1},r.handleShow=function(t){t.preventDefault(),r.setState({show:!0})},r.handleClose=function(t){t.preventDefault(),r.setState({show:!1})},r.succes=function(){r.props.stores.order.setCache(),r.props.stores.cart.clean(),r.props.history.push(Gt.result)},r.createModalRef=function(t){return r.modal=t},r.modal=null,r}return Object(U.a)(a,[{key:"render",value:function(){var t=this.props.cartModel.detailedProducts.map((function(t){return c.a.createElement("tr",{key:t.id},c.a.createElement("td",null,t.title),c.a.createElement("td",null,t.price),c.a.createElement("td",null,t.cnt),c.a.createElement("td",null,t.cnt*t.price))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:this.handleShow,className:kt.a.btnGo,disabled:this.props.stores.order.status},"Confirm"),c.a.createElement("div",{className:kt.a.modal3,ref:this.createModalRef},c.a.createElement("div",{className:kt.a.body},c.a.createElement("div",{className:kt.a.closeContainer},c.a.createElement("div",{className:kt.a.close,onClick:this.handleClose},"\xd7")),c.a.createElement("h3",null,"Please, check and confirm your order:"),c.a.createElement("table",{className:"table table-bordered table-striped"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Title"),c.a.createElement("td",null,"Price"),c.a.createElement("td",null,"Count"),c.a.createElement("td",null,"Total")),t,c.a.createElement("tr",null,c.a.createElement("td",{colSpan:"3",align:"right",className:"font-weight-bold"},"Final amount:"),c.a.createElement("td",{className:"font-weight-bold"},this.props.cartModel.total)))),c.a.createElement("button",{className:kt.a.btnSucess,onClick:this.succes},"Confirm"))))}},{key:"componentDidUpdate",value:function(t,e,a){!0===this.state.show?this.modal.className=kt.a.modal1:this.modal.className=kt.a.modal3}}]),a}(c.a.Component),Ot.defaultProps={stores:{}},yt=gt))||yt;var Pt=function(t){Object(nt.a)(a,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,r=Object(ct.a)(t);if(e()){var n=Object(ct.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(ot.a)(this,a)}}(a);function a(){return Object(T.a)(this,a),e.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){var t=this.props.stores.order,e=t.valid,a=function(t){switch(e[t]){case"valid":return"".concat(jt.a.input," ").concat(jt.a.valid);case"invalid":return"".concat(jt.a.input," ").concat(jt.a.invalid);default:return"".concat(jt.a.input)}};return c.a.createElement("form",{className:jt.a.container,onSubmit:function(t){return t.preventDefault()}},c.a.createElement("h1",null,"Confirm your account data, please:"),c.a.createElement("div",{className:jt.a.form},c.a.createElement("label",{htmlFor:"formGroupExampleInput"},"Enter your name:"),c.a.createElement(lt,{nativeProps:{type:"text",className:a("name"),id:"name"},value:t.consumer.name,onChange:function(e){return t.check(e,"name")}}),c.a.createElement("div",{className:jt.a.invalidMsg})),c.a.createElement("div",{className:jt.a.form},c.a.createElement("label",{htmlFor:"formGroupExampleInput2"},"E-mail:"),c.a.createElement(lt,{nativeProps:{type:"text",className:a("email"),id:"email"},value:t.consumer.email,onChange:function(e){return t.check(e,"email")}}),c.a.createElement("div",{className:jt.a.invalidMsg})),c.a.createElement("div",{className:jt.a.form},c.a.createElement("label",{htmlFor:"formGroupExampleInput2"},"Phone:"),c.a.createElement(lt,{nativeProps:{type:"text",className:a("phone"),id:"phone"},value:t.consumer.phone,onChange:function(e){return t.check(e,"phone")}}),c.a.createElement("div",{className:jt.a.invalidMsg})),c.a.createElement(m.b,{to:Gt.cart},c.a.createElement("button",{className:jt.a.btnBack},"Back")),c.a.createElement(Nt,{cartModel:this.props.stores.cart,history:this.props.history}))}}]),a}(c.a.Component);Pt.defaultProps={stores:{}};var wt=d(Pt),xt=a(39),St=a.n(xt);var Rt=d((function(t){return c.a.createElement("div",{className:St.a.container},c.a.createElement("h1",{className:"h1"},"Congratulations!"),c.a.createElement("p",null,"Dear ",t.stores.order.lastOrderCache.consumer.name,". Your order with total amount ",t.stores.order.lastOrderCache.total,"$ is processing"),c.a.createElement("p",null,"We sent you mail to ",t.stores.order.lastOrderCache.consumer.email," or calling to ",t.stores.order.lastOrderCache.consumer.phone))}));var Dt=d(function(t){Object(nt.a)(a,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,r=Object(ct.a)(t);if(e()){var n=Object(ct.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(ot.a)(this,a)}}(a);function a(){return Object(T.a)(this,a),e.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){var t=this,e=this.props.stores.cart,a=this.props.stores.products.getProduct(this.props.match.params.id);return a?c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},a.title),c.a.createElement("p",{className:"card-text"},a.text),e.inCart(a.id)?c.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.deleteItem(a.id)},style:{marginRight:"5px"},disabled:t.props.stores.activeProducts.actionState[a.id]},"Remove from cart"):c.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.addCartItem(a.id)},style:{marginRight:"5px"},disabled:t.props.stores.activeProducts.actionState[a.id]},"Add to cart"),c.a.createElement(m.b,{className:"card-link",to:"/"},"Back"))):c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Product have not found"),c.a.createElement("p",{className:"card-text"},"Please check your URL")))}}]),a}(c.a.Component)),Mt=a(24),It=a.n(Mt),At=a(40),Bt=a.n(At),Ft=function(t){var e=t.warehouse.products.map((function(e){var a;return a=t.cartModel.inCart(e.id)?c.a.createElement("button",{className:It.a.btnDanger,onClick:function(){t.cartModel.deleteItem(e.id)},disabled:t.activeProducts.actionState[e.id]},"Remove"):c.a.createElement("button",{className:It.a.btnSuccess,onClick:function(){return t.cartModel.addCartItem(e.id)},disabled:t.activeProducts.actionState[e.id]},"Add"),c.a.createElement("div",{className:It.a.card,key:e.id},c.a.createElement("h5",null,e.title),c.a.createElement("img",{src:Bt.a}),c.a.createElement("p",null,e.text,c.a.createElement(m.b,{className:It.a.cardLink,to:"/product/".concat(e.id)},"...more info")),a)}));return c.a.createElement("div",{className:It.a.main},e)};Ft.defaultProps={warehouse:{},cartModel:{},activeProducts:{}};var zt=Object(p.c)(Ft);var Lt=function(t){Object(nt.a)(a,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var a,r=Object(ct.a)(t);if(e()){var n=Object(ct.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(ot.a)(this,a)}}(a);function a(){return Object(T.a)(this,a),e.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){var t=this.props.stores.cart,e=this.props.stores.products,a=this.props.stores.activeProducts;return c.a.createElement(zt,{cartModel:t,warehouse:e,activeProducts:a})}}]),a}(c.a.Component);Lt.defaultProps={stores:{}};var Tt=[{name:"index",url:"/",component:d(Lt),exact:!0},{name:"cart",url:"/cart",component:Et,exact:!0},{name:"order",url:"/order",component:wt,exact:!0},{name:"result",url:"/result",component:Rt,exact:!0},{name:"product",url:"/product/:id",component:Dt,exact:!0}],Gt={};Tt.forEach((function(t){t.hasOwnProperty("name")&&(Gt[t.name]=t.url)}));var Zt=Tt,Ut=a(32),Vt=a.n(Ut),Wt=function(t){return c.a.createElement("div",{className:Vt.a.overlayLoader},c.a.createElement("div",{className:Vt.a.loader},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))},Ht=Zt.map((function(t){return c.a.createElement(_.a,{path:t.url,component:t.component,exact:t.exact,key:t.url})}));l.a.render(c.a.createElement(Wt,null),document.getElementById("root")),rt.products.load().then((function(){l.a.render(c.a.createElement(p.a,{stores:rt},c.a.createElement(m.a,null,c.a.createElement(C,{Components:Ht}))),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[41,1,2]]]);
//# sourceMappingURL=main.af121a23.chunk.js.map