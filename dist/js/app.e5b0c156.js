(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0276":function(t,e,s){"use strict";var n=s("8eb8"),a=s.n(n);a.a},"034f":function(t,e,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"199d":function(t,e,s){},"25d9":function(t,e,s){"use strict";var n=s("e4fa"),a=s.n(n);a.a},"270b":function(t,e,s){},"304c":function(t,e,s){"use strict";var n=s("71da"),a=s.n(n);a.a},3532:function(t,e,s){"use strict";var n=s("7c26"),a=s.n(n);a.a},"4db3":function(t,e,s){"use strict";var n=s("f983"),a=s.n(n);a.a},"53d7":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=s("2b27"),r=s.n(a),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.showSidebar?s("the-sidebar",{on:{"toggle-sidebar":function(e){return t.toggleSidebar()}}}):t._e(),s("the-header",{on:{"toggle-sidebar":function(e){return t.toggleSidebar()}}}),s("router-view"),s("the-cart",{directives:[{name:"show",rawName:"v-show",value:t.getShowCart,expression:"getShowCart"}]})],1)},o=[],c=s("5530"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"modal d-flex justify-content-between"},[s("div",{staticClass:"menu border-right d-flex flex-column justify-content-start position-relative"},[s("div",{staticClass:"w-100"},[s("div",{staticClass:"d-flex justify-content-between bg-cream"},[s("h3",{staticClass:"m-2 ml-4 font-secondary text-uppercase font-weight-normal"},[t._v(" Menu ")]),s("button",{staticClass:"btn",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[s("i",{staticClass:"fas fa-times fa-2x"})])]),s("div",{staticClass:"hr"})])]),s("div",{staticClass:"w-100 d-none d-md-block",on:{click:function(e){return t.$emit("toggle-sidebar")}}})])])},u=[],d={emits:["toggle-sidebar"]},f=d,m=(s("7bbb"),s("2877")),p=Object(m["a"])(f,l,u,!1,null,"2ca3c67c",null),v=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[t.windowWidth>768?s("section",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"d-flex justify-content-around align-items-center"},[s("button",{staticClass:"btn link",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[s("i",{staticClass:"fas fa-bars"})])]),s("div",{staticClass:"d-flex justify-content-around align-items-center"},[s("router-link",{staticClass:"link router-link font-secondary font-weight-normal",attrs:{to:"/order",tag:"div"}},[t._v("Order")]),t.isAuthenticated?t._e():s("router-link",{staticClass:"link router-link font-secondary font-weight-normal",attrs:{to:"/login",tag:"div"}},[t._v("Login")]),t.isAuthenticated?s("div",{staticClass:"link d-flex flex-col justify-items-center align-items-center"},[s("svg",{staticClass:"bi bi-person",attrs:{width:"2rem",height:"2rem",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.logout()}}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}})])]):t._e(),s("div",{staticClass:"link d-flex flex-col justify-items-center align-items-center"},["/checkout"!==t.$route.path?s("svg",{staticClass:"bi bi-bag",attrs:{width:"2rem",height:"2rem",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.toggleShowCart()}}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"}})]):t._e()])],1)]):t._e(),t.windowWidth<=768?s("section",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"d-flex justify-content-around align-items-center"},[s("div",{staticClass:"link",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[s("i",{staticClass:"fas fa-bars"})])]),s("div",{staticClass:"d-flex justify-content-around align-items-center"},[t.isAuthenticated?s("div",{staticClass:"link d-flex flex-col justify-items-center align-items-center"},[s("svg",{staticClass:"bi bi-person",attrs:{width:"2rem",height:"2rem",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.logout()}}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}})])]):t._e(),s("div",{staticClass:"link d-flex flex-col justify-items-center align-items-center"},["/checkout"!==t.$route.path?s("svg",{staticClass:"bi bi-bag",attrs:{width:"2rem",height:"2rem",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.toggleShowCart()}}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"}})]):t._e()])])]):t._e()])},g=[],b=(s("96cf"),s("1da1")),C=s("2f62"),w=s("52a2"),x={emits:["toggle-sidebar"],setup:function(){var t=Object(w["useWindowSize"])(),e=t.width,s=t.height;return{windowWidth:e,windowHeight:s}},computed:Object(c["a"])(Object(c["a"])({},Object(C["c"])("cart",["getDisableCart"])),Object(C["c"])("user",["isAuthenticated"])),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(C["b"])("cart",["toggleShowCart"])),Object(C["b"])("user",["logout"])),{},{logoutUser:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.logout().then().then(t.$router.push("/order"));case 2:case"end":return e.stop()}}),e)})))()}})},_=x,y=(s("7cb2"),Object(m["a"])(_,h,g,!1,null,"1ef8934b",null)),k=y.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"modal d-flex justify-content-between"},[s("div",{staticClass:"w-100 d-none d-md-block",on:{click:function(e){return t.toggleShowCart()}}}),s("div",{staticClass:"cart border-left d-flex flex-column justify-content-start position-relative"},[s("div",{staticClass:"w-100"},[s("div",{staticClass:"d-flex justify-content-between bg-cream"},[s("h3",{staticClass:"m-2 ml-4 font-secondary text-uppercase font-weight-normal"},[t._v(" Cart ")]),s("button",{staticClass:"btn",on:{click:function(e){return t.toggleShowCart()}}},[s("i",{staticClass:"fas fa-times fa-2x"})])]),s("div",{staticClass:"hr"})]),s("div",{staticClass:"cart-items w-100 mb-5"},t._l(t.getCart.order_items,(function(t){return s("cart-item",{key:t.id,attrs:{id:t.product.id,name:t.product.name,quantity:t.quantity,size:t.size}})})),1),s("button",{staticClass:"rounded-0 btn btn-success btn-block text-uppercase btn-lg font-secondary position-absolute checkout-btn",on:{click:function(e){return t.$router.push("/checkout")}}},[t._v(" Checkout ")])])])])},O=[],z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full d-flex flex-column mx-4 my-2"},[s("div",{staticClass:"d-flex justify-content-between"},[s("h6",{staticClass:"header-border"},[t._v(t._s(t.name))]),s("h6",[t._v("$ "+t._s(t.size.price))])]),t._m(0),s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("h6",{staticClass:"mb-0"},[t._v(t._s(t.size.name))]),s("div",[s("button",{staticClass:"btn btn-danger btn-sm mr-2",on:{click:function(e){return t.deleteFromCart()}}},[t._v(" Remove ")]),s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn btn-dark btn-sm",on:{click:function(e){return t.removeOneFromCart()}}},[s("i",{staticClass:"fas fa-minus"})]),s("div",{staticClass:"size-btn-sm d-flex justify-content-center align-items-center"},[s("p",{staticClass:"d-block my-auto"},[t._v(t._s(t.quantity))])]),s("button",{staticClass:"btn btn-success btn-sm",on:{click:function(e){return t.addOneToCart()}}},[s("i",{staticClass:"fas fa-plus"})])])])]),s("div",{staticClass:"w-full hr mt-2"})])},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",{staticClass:"font-italic"},[t._v("with Grilled Chicken, Brown Rice, and Broccoli")])])}],$={props:["id","name","quantity","size"],methods:Object(c["a"])(Object(c["a"])({},Object(C["b"])("cart",["updateCart"])),{},{addOneToCart:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={action:"add",device:t.$cookies.get("device"),productId:t.id,size:t.size,quantity:1},e.next=3,t.updateCart(s);case 3:case"end":return e.stop()}}),e)})))()},removeOneFromCart:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={action:"remove",device:t.$cookies.get("device"),productId:t.id,size:t.size,quantity:1},e.next=3,t.updateCart(s);case 3:case"end":return e.stop()}}),e)})))()},deleteFromCart:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={action:"delete",device:t.$cookies.get("device"),productId:t.id,size:t.size,quantity:t.quantity},e.next=3,t.updateCart(s);case 3:case"end":return e.stop()}}),e)})))()}})},R=$,P=(s("4db3"),Object(m["a"])(R,z,S,!1,null,"28056ade",null)),E=P.exports,q={components:{CartItem:E},computed:Object(c["a"])({},Object(C["c"])("cart",["getCart"])),methods:Object(c["a"])({},Object(C["b"])("cart",["toggleShowCart","loadCart"])),mounted:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={device:t.$cookies.get("device")},e.next=3,t.loadCart(s);case 3:case"end":return e.stop()}}),e)})))()}},A=q,T=(s("25d9"),Object(m["a"])(A,j,O,!1,null,"37f2bcba",null)),M=T.exports,N={components:{TheSidebar:v,TheHeader:k,TheCart:M},data:function(){return{showSidebar:!1}},computed:Object(c["a"])({},Object(C["c"])("cart",["getShowCart"])),methods:{toggleSidebar:function(){this.showSidebar=!this.showSidebar}}},U=N,D=(s("034f"),Object(m["a"])(U,i,o,!1,null,null,null)),I=D.exports,L=s("8c4f"),B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[t._v("Home Page")])},F=[],H={},V=H,J=Object(m["a"])(V,B,F,!1,null,"5d88685e",null),W=J.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],Q={},Z=Object(m["a"])(Q,K,G,!1,null,null,null),X=Z.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("base-card",{staticClass:"max-width-720"},[s("h1",{staticClass:"text-uppercase font-secondary font-weight-normal text-center"},[t._v(" login ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Enter username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),s("button",{staticClass:"btn btn-block btn-success",on:{click:function(e){return t.loginUser()}}},[t._v(" Login ")]),s("p",{staticClass:"mt-3 text-muted"},[t._v(" Don't have an account? "),s("router-link",{attrs:{to:"/register"}},[t._v("Register here")])],1)])],1)},tt=[],et={data:function(){return{username:"",password:""}},methods:Object(c["a"])(Object(c["a"])({},Object(C["b"])("user",["login"])),{},{loginUser:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={username:t.username,password:t.password},e.next=3,t.login(s).then().then(t.$router.push("/order"));case 3:case"end":return e.stop()}}),e)})))()}})},st=et,nt=Object(m["a"])(st,Y,tt,!1,null,"79452922",null),at=nt.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("base-card",{staticClass:"max-width-720"},[s("h1",{staticClass:"text-uppercase font-secondary font-weight-normal text-center"},[t._v(" Register ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Enter username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),s("button",{staticClass:"btn btn-block btn-success",on:{click:function(e){return t.registerUser()}}},[t._v(" Register ")])])],1)},it=[],ot={data:function(){return{username:"",email:"",password:""}},methods:Object(c["a"])(Object(c["a"])({},Object(C["b"])("user",["register"])),{},{registerUser:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={username:t.username,email:t.email,password:t.password},e.next=3,t.register(s).then().then(t.$router.push("/login"));case 3:case"end":return e.stop()}}),e)})))()}})},ct=ot,lt=Object(m["a"])(ct,rt,it,!1,null,"304c4b5a",null),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("product-grid",{scopedSlots:t._u([{key:"header",fn:function(){return[s("h1",{staticClass:"text-uppercase font-secondary font-weight-normal"},[t._v("Order")])]},proxy:!0},{key:"products",fn:function(){return[s("div",{staticClass:"product-card col-xl-3 col-md-4 col-sm-6 col-12 p-2"},[s("div",{staticClass:"text-center h-100 d-flex flex-column justify-content-between"},[s("router-link",{staticClass:"link",attrs:{tag:"div",to:"/signature-meals/"}},[s("img",{attrs:{src:"https://picsum.photos/300/300",alt:"none"}}),s("h6",{staticClass:"text-uppercase mt-1 mb-0 font-secondary font-weight-normal"},[t._v(" Signature Meals ")]),s("p",{staticClass:"font-sm font-italic mb-1"},[t._v("Handpicked, protein packed meals ready to be eaten")])])],1)]),s("div",{staticClass:"product-card col-xl-3 col-md-4 col-sm-6 col-12 p-2"},[s("div",{staticClass:"text-center h-100 d-flex flex-column justify-content-between"},[s("router-link",{staticClass:"link",attrs:{tag:"div",to:"#"}},[s("img",{attrs:{src:"https://picsum.photos/300/300",alt:"none"}}),s("h6",{staticClass:"text-uppercase mt-1 mb-0 font-secondary font-weight-normal"},[t._v(" Custom Meals ")]),s("p",{staticClass:"font-sm font-italic mb-1"},[t._v("Made-to-order, fresh, 100% custom meals")])])],1)]),s("div",{staticClass:"product-card col-xl-3 col-md-4 col-sm-6 col-12 p-2"},[s("div",{staticClass:"text-center h-100 d-flex flex-column justify-content-between"},[s("router-link",{staticClass:"link",attrs:{tag:"div",to:"#"}},[s("img",{attrs:{src:"https://picsum.photos/300/300",alt:"none"}}),s("h6",{staticClass:"text-uppercase mt-1 mb-0 font-secondary font-weight-normal"},[t._v(" Just Protein ")]),s("p",{staticClass:"font-sm font-italic mb-1"},[t._v("8, 12, or 18 oz of our finest cooked protein meals")])])],1)]),s("div",{staticClass:"product-card col-xl-3 col-md-4 col-sm-6 col-12 p-2"},[s("div",{staticClass:"text-center h-100 d-flex flex-column justify-content-between"},[s("router-link",{staticClass:"link",attrs:{tag:"div",to:"#"}},[s("img",{attrs:{src:"https://picsum.photos/300/300",alt:"none"}}),s("h6",{staticClass:"text-uppercase mt-1 mb-0 font-secondary font-weight-normal"},[t._v(" Just Sides ")]),s("p",{staticClass:"font-sm font-italic mb-1"},[t._v("No meat? No problem.")])])],1)]),s("div",{staticClass:"product-card col-xl-3 col-md-4 col-sm-6 col-12 p-2"},[s("div",{staticClass:"text-center h-100 d-flex flex-column justify-content-between"},[s("router-link",{staticClass:"link",attrs:{tag:"div",to:"#"}},[s("img",{attrs:{src:"https://picsum.photos/300/300",alt:"none"}}),s("h6",{staticClass:"text-uppercase mt-1 mb-0 font-secondary font-weight-normal"},[t._v(" Soups ")]),s("p",{staticClass:"font-sm font-italic mb-1"},[t._v("Our finest soups")])])],1)]),s("div",{staticClass:"product-card col-xl-3 col-md-4 col-sm-6 col-12 p-2"},[s("div",{staticClass:"text-center h-100 d-flex flex-column justify-content-between"},[s("router-link",{staticClass:"link",attrs:{tag:"div",to:"#"}},[s("img",{attrs:{src:"https://picsum.photos/300/300",alt:"none"}}),s("h6",{staticClass:"text-uppercase mt-1 mb-0 font-secondary font-weight-normal"},[t._v(" Sauces ")]),s("p",{staticClass:"font-sm font-italic mb-1"},[t._v("I got lazy with the captions")])])],1)])]},proxy:!0}])})],1)},ft=[],mt={},pt=mt,vt=(s("ec13"),Object(m["a"])(pt,dt,ft,!1,null,"670bc7e7",null)),ht=vt.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("product-grid",{scopedSlots:t._u([{key:"header",fn:function(){return[s("h1",{staticClass:"text-uppercase font-secondary font-weight-normal"},[t._v(" Signature Meals ")])]},proxy:!0},t.products.length?{key:"products",fn:function(){return t._l(t.products,(function(t){return s("product-card",{key:t.id,attrs:{link:"signature-meals",id:t.id,name:t.name,recipes:t.recipes,imageURL:t.imageURL,sizes:t.sizes}})}))},proxy:!0}:{key:"default",fn:function(e){return s("div",[t._v("Loading...")])}}],null,!0)})],1)},bt=[],Ct={data:function(){return{products:[]}},computed:Object(c["a"])({},Object(C["c"])("products",["getSignatureMeals"])),methods:Object(c["a"])({},Object(C["b"])("products",["loadProducts"])),mounted:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadProducts();case 2:t.products=t.getSignatureMeals;case 3:case"end":return e.stop()}}),e)})))()}},wt=Ct,xt=Object(m["a"])(wt,gt,bt,!1,null,"67b7d948",null),_t=xt.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"mx-auto p-2"},[null!==t.selectedProduct?s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-5 col-sm-6 col-12"},[s("img",{attrs:{src:t.selectedProduct.imageURL,alt:""}})]),s("div",{staticClass:"col-lg-7 col-sm-6 col-12"},[s("base-card",[s("h4",{staticClass:"font-secondary font-weight-normal"},[t._v(t._s(t.selectedProduct.name))]),s("hr",{staticClass:"mt-0"}),s("p",{staticClass:"font-italic"},[t._v("with "+t._s(t.getRecipeStr(t.selectedProduct.id)))]),s("div",{staticClass:"my-2"},[s("h6",[t._v("Select size:")]),t._l(t.selectedProduct.sizes,(function(e){return s("button",{key:e.id,class:t.getSizeBtnClass(e.id),on:{click:function(s){return t.selectSize(e)}}},[t._v(" "+t._s(e.name)+" ")])}))],2),s("div",{staticClass:"my-2"},[s("h6",[t._v("Quantity:")]),s("div",{staticClass:"btn-group mt-2"},[s("button",{staticClass:"btn btn-dark",on:{click:function(e){return t.quantityDown()}}},[s("i",{staticClass:"fas fa-minus"})]),s("div",{staticClass:"size-btn-lg text-center"},[s("div",{staticClass:"pt-2"},[t._v(t._s(t.quantity))])]),s("button",{staticClass:"btn btn-success",on:{click:function(e){return t.quantityUp()}}},[s("i",{staticClass:"fas fa-plus"})])])]),s("div",{staticClass:"my-2 d-flex justify-start"},[s("div",{staticClass:"mr-5"},[s("h6",[t._v("Weight:")]),s("h4",{staticClass:"my-2"},[t._v(t._s(t.size.weight)+"oz")])]),s("div",[s("h6",[t._v("Unit Price:")]),s("h4",{staticClass:"my-2"},[t._v("$"+t._s(t.size.price.toFixed(2)))])])]),s("button",{staticClass:"btn btn-block btn-success font-secondary",on:{click:function(e){return t.addToCart()}}},[t._v("Add To Cart")])]),s("base-card",[s("h4",{staticClass:"font-secondary font-weight-normal"},[t._v("Ingredients")]),s("p",[t._v(t._s(t.getIngredientStr(t.selectedProduct.id)))])]),s("base-card",[s("h4",{staticClass:"font-secondary font-weight-normal"},[t._v("Macros")]),s("div",{staticClass:"d-flex justify-content-around"},[s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center mt-3"},[s("h4",[t._v(t._s(t.size.macro_protein.toFixed(2))+"g")]),s("p",{staticClass:"font-secondary text-uppercase font-weight-light"},[t._v("Protein")])]),s("div",{staticClass:"border-right"}),s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center mt-3"},[s("h4",[t._v(t._s(t.size.macro_carbs.toFixed(2))+"g")]),s("p",{staticClass:"font-secondary text-uppercase font-weight-light"},[t._v("carbs")])]),t._v(" "),s("div",{staticClass:"border-left"}),t._v(" "),s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center mt-3"},[s("h4",[t._v(t._s(t.size.macro_fat.toFixed(2))+"g")]),s("p",{staticClass:"font-secondary text-uppercase font-weight-light"},[t._v("fat")])])])])],1)]):s("div",[t._v(" Loading... ")])])},kt=[],jt=(s("7db0"),s("a9e3"),{props:["name","id"],data:function(){return{selectedProduct:null,quantity:1,size:null}},computed:Object(c["a"])({},Object(C["c"])("products",["getProducts","getRecipeStr","getIngredientStr"])),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(C["b"])("products",["loadProducts"])),Object(C["b"])("cart",["updateCart","toggleShowCart"])),{},{quantityUp:function(){this.quantity++},quantityDown:function(){1!==this.quantity&&this.quantity--},selectSize:function(t){this.size=t},getSizeBtnClass:function(t){return this.size.id!==t?["btn","btn-sm","btn-outline-success","mr-2","mt-2"]:["btn","btn-sm","btn-outline-success","mr-2","mt-2","active"]},addToCart:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={action:"add",device:t.$cookies.get("device"),productId:t.id,size:t.size,quantity:t.quantity},e.next=3,t.updateCart(s);case 3:t.toggleShowCart();case 4:case"end":return e.stop()}}),e)})))()}}),mounted:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadProducts();case 2:t.selectedProduct=t.getProducts.find((function(e){return e.id===Number(t.id)})),t.size=t.selectedProduct.sizes[0];case 4:case"end":return e.stop()}}),e)})))()}}),Ot=jt,zt=(s("0276"),Object(m["a"])(Ot,yt,kt,!1,null,"fd1ef64a",null)),St=zt.exports,$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column justify-content-start align-items-center"},[s("div",{staticClass:"col-lg-10 col-12 max-width-720"},[s("base-card",[s("div",{staticClass:"w-full"},[s("h4",{staticClass:"font-secondary text-uppercase font-weight-normal"},[t._v(" Delivery address ")]),s("hr"),s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[s("div",{staticClass:"row w-100"},[s("div",{staticClass:"form-group col-md-9 col-12 pr-1 p-0"},[s("label",{attrs:{for:"address"}},[t._v("Address")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"address",placeholder:"Enter address",required:""}})]),s("div",{staticClass:"form-group col-md-3 col-12 pl-1 p-0"},[s("label",{attrs:{for:"address"}},[t._v("Apt Number")]),s("input",{staticClass:"form-control",attrs:{type:"email",id:"address",placeholder:"Enter apt. number",required:""}})]),s("div",{staticClass:"form-group col-9 pr-1 p-0"},[s("label",{attrs:{for:"city"}},[t._v("City")]),s("select",{staticClass:"form-control",attrs:{id:"city",required:""}},[s("option",[t._v("Tempe")]),s("option",[t._v("Scottsdale")]),s("option",[t._v("Glendale")])])]),s("div",{staticClass:"form-group col-3 pl-1 p-0"},[s("label",{attrs:{for:"city"}},[t._v("State")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"city",placeholder:"AZ",readonly:""}})])])]),s("hr")]),s("div",{staticClass:"w-full"},[s("h4",{staticClass:"font-secondary text-uppercase font-weight-normal"},[t._v(" Delivery day ")]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-12"},[s("button",{staticClass:"btn btn-block btn-outline-success my-1"},[t._v(" Mon. January 7th ")])]),s("div",{staticClass:"col-md-4 col-12"},[s("button",{staticClass:"btn btn-block btn-outline-success my-1"},[t._v(" Tues. January 7th ")])]),s("div",{staticClass:"col-md-4 col-12"},[s("button",{staticClass:"btn btn-block btn-outline-success my-1"},[t._v(" Thurs. January 7th ")])])]),s("hr")]),s("div",{staticClass:"w-full"},[s("h4",{staticClass:"font-secondary text-uppercase font-weight-normal"},[t._v(" Delivery info ")]),s("hr"),s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[s("div",{staticClass:"form-group w-100"},[s("label",{attrs:{for:"name"}},[t._v("Name")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Enter name",required:""}})]),s("div",{staticClass:"form-group w-100"},[s("label",{attrs:{for:"phone"}},[t._v("Phone Number")]),s("input",{staticClass:"form-control",attrs:{type:"tel",id:"phone",placeholder:"Enter phone number",required:""}})]),s("div",{staticClass:"form-group w-100"},[s("label",{attrs:{for:"email"}},[t._v("Email Address")]),s("input",{staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Enter email address",required:""}})])]),s("hr")]),s("div",{staticClass:"w-full"},[s("h4",{staticClass:"font-secondary text-uppercase font-weight-normal"},[t._v(" Order detail ")]),s("hr")]),s("div",{staticClass:"w-full"},[s("h4",{staticClass:"font-secondary text-uppercase font-weight-normal"},[t._v(" Pay $10.00 ")]),s("hr")]),s("button",{staticClass:"btn btn-block font-secondary btn-success font-lg"},[t._v(" Place order ")])])],1)])},Rt=[],Pt={methods:Object(c["a"])({},Object(C["b"])("cart",["toggleShowCart","toggleDisableCart"])),mounted:function(){this.toggleShowCart(),this.toggleDisableCart()}},Et=Pt,qt=Object(m["a"])(Et,$t,Rt,!1,null,"3631c17f",null),At=qt.exports,Tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[t._v("Page not found")])},Mt=[],Nt={},Ut=Object(m["a"])(Nt,Tt,Mt,!1,null,null,null),Dt=Ut.exports;n["default"].use(L["a"]);var It=[{path:"/",component:W},{path:"/about",component:X},{path:"/login",component:at},{path:"/register",component:ut},{path:"/order",component:ht},{path:"/checkout",component:At},{path:"/signature-meals",component:_t},{path:"/signature-meals/:name/:id",name:"signature-meals",props:!0,component:St},{path:"/:notFound(.*)",component:Dt}],Lt=new L["a"]({mode:"history",base:"/",routes:It}),Bt=Lt,Ft=s("bc3a"),Ht=s.n(Ft),Vt=Ht.a.create({baseURL:"http://localhost:8000/store",headers:{Accept:"application/json","Content-Type":"application/json"}}),Jt={getProducts:function(){return Vt.get("/get-products/")},getCart:function(t){return Vt.post("/get-cart/",t)},updateCart:function(t){return Vt.post("/update-cart/",t)},login:function(t){return Vt.post("/auth/login/",t)},register:function(t){return Vt.post("/auth/register/",t)},logout:function(){var t=n["default"].$cookies.get("auth").token,e={headers:{"Content-Type":"application/json"}};return t&&(e.headers["Authorization"]="Token ".concat(t)),Ht.a.post("http://localhost:8000/store/auth/logout/",null,e)}},Wt={loadProducts:function(t){return Object(b["a"])(regeneratorRuntime.mark((function e(){var s,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Jt.getProducts();case 2:if(s=e.sent,n=s.status,a=s.data,200===n){e.next=8;break}return console.error("Network Error"),e.abrupt("return");case 8:t.commit("setProducts",a);case 9:case"end":return e.stop()}}),e)})))()}},Kt=(s("4de4"),s("b0c0"),{getProducts:function(t){return t.products},getSignatureMeals:function(t){return t.products.filter((function(t){return"Signature"===t.product_type}))},getRecipeStr:function(t){return function(e){for(var s=t.products.find((function(t){return t.id===e})),n="",a=0;a<s.recipes.length-1;a++)n+=s.recipes[a].name+", ";return n+="and "+s.recipes[a].name,n}},getIngredientStr:function(t){return function(e){for(var s=t.products.find((function(t){return t.id===e})),n="",a=0;a<s.ingredients.length-1;a++)n+=s.ingredients[a].name+", ";return n+=s.ingredients[a].name,n}}}),Gt={setProducts:function(t,e){t.products=e}},Qt={namespaced:!0,state:function(){return{products:[]}},actions:Wt,getters:Kt,mutations:Gt},Zt={toggleShowCart:function(t){return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.commit("toggleShowCart");case 1:case"end":return e.stop()}}),e)})))()},loadCart:function(t,e){return Object(b["a"])(regeneratorRuntime.mark((function s(){var n,a,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Jt.getCart(e);case 2:if(n=s.sent,a=n.status,r=n.data,200===a){s.next=8;break}return console.log("Network Error"),s.abrupt("return");case 8:t.commit("setCart",r);case 9:case"end":return s.stop()}}),s)})))()},updateCart:function(t,e){return Object(b["a"])(regeneratorRuntime.mark((function s(){var n,a,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Jt.updateCart(e);case 2:if(n=s.sent,a=n.status,r=n.data,200===a){s.next=8;break}return console.log("Network Error"),s.abrupt("return");case 8:t.commit("setCart",r);case 9:case"end":return s.stop()}}),s)})))()},toggleDisableCart:function(t){t.commit("toggleDisableCart")}},Xt={getShowCart:function(t){return t.showCart},getCart:function(t){return t.cart},getDisableCart:function(t){return t.disableCart}},Yt={toggleShowCart:function(t){t.showCart=!t.showCart},setCart:function(t,e){t.cart=e},toggleDisableCart:function(t){t.disableCart=!t.disableCart}},te={namespaced:!0,state:function(){return{showCart:!1,disableCart:!1,cart:{}}},actions:Zt,getters:Xt,mutations:Yt},ee={login:function(t,e){return Object(b["a"])(regeneratorRuntime.mark((function s(){var n,a,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Jt.login(e);case 2:if(n=s.sent,a=n.status,r=n.data,200===a){s.next=8;break}return console.error("Network Error"),s.abrupt("return");case 8:t.commit("login",r);case 9:case"end":return s.stop()}}),s)})))()},register:function(t,e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var s,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Jt.register(e);case 2:if(s=t.sent,n=s.status,a=s.data,200===n){t.next=8;break}return console.error("Network Error"),t.abrupt("return");case 8:console.log(a);case 9:case"end":return t.stop()}}),t)})))()},logout:function(t){return Object(b["a"])(regeneratorRuntime.mark((function e(){var s,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Jt.logout();case 2:if(s=e.sent,n=s.status,a=s.data,204===n){e.next=9;break}return console.log(a),console.error("Network Error"),e.abrupt("return");case 9:t.commit("logout");case 10:case"end":return e.stop()}}),e)})))()}},se={isAuthenticated:function(t){return t.isAuthenticated}},ne={login:function(t,e){n["default"].$cookies.set("isAuthenticated",!0),n["default"].$cookies.set("auth",e),t.isAuthenticated=!0,t.auth=e.auth},logout:function(t){t.isAuthenticated=!1,t.auth="",n["default"].$cookies.set("isAuthenticated",!1),n["default"].$cookies.set("auth","")}},ae={namespaced:!0,state:function(){return{isAuthenticated:r.a.get("auth"),auth:r.a.get("auth")}},actions:ee,getters:se,mutations:ne};n["default"].use(C["a"]);var re=new C["a"].Store({modules:{products:Qt,cart:te,user:ae}}),ie=(s("4989"),s("ab8b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-card col-xl-3 col-md-4 col-sm-6 col-12 p-2"},[s("div",{staticClass:"text-center h-100 d-flex flex-column justify-content-between"},[s("router-link",{staticClass:"link",attrs:{tag:"div",to:{name:t.link,params:{name:t.convertToKebabCase(t.name),id:t.id}}}},[s("img",{attrs:{src:t.imageURL,alt:t.name+"Image"}}),s("h6",{staticClass:"text-uppercase mt-1 mb-0 font-secondary font-weight-normal"},[t._v(t._s(t.name))]),s("p",{staticClass:"font-sm font-italic mb-1"},[t._v("with "+t._s(t.recipeStr(t.id)))])]),s("div",[s("div",{staticClass:"d-flex align-items-center justify-content-center"},[s("div",{staticClass:"d-flex align-items-center justify-content-start"},[s("div",{staticClass:"font-sm font-secondary font-weight-normal"},[t._v(" Size: ")]),t._l(t.sizes,(function(e,n){return s("button",{key:n,staticClass:"btn btn-outline-success btn-sm mx-1 size-btn text-uppercase",class:t.getSizeBtnClass(e.id),on:{click:function(s){return t.selectSize(e)}}},[t._v(" "+t._s(e.name.charAt(0))+" ")])}))],2),s("h6",{staticClass:"my-auto ml-1"},[t._v("$"+t._s(t.size.price.toFixed(2)))])]),s("div",{staticClass:"justify-content-between mt-1"},[s("router-link",{staticClass:"btn btn-dark btn-sm mx-1",attrs:{tag:"button",to:{name:t.link,params:{name:t.convertToKebabCase(t.name),id:t.id}}}},[t._v("View")]),s("button",{staticClass:"btn btn-success btn-sm mx-1",on:{click:function(e){return t.addToCart()}}},[t._v(" Add to Cart ")])],1)])],1)])}),oe=[],ce=(s("ac1f"),s("5319"),{props:["link","id","name","recipes","imageURL","sizes"],data:function(){return{size:this.sizes[0]}},computed:{},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({convertToKebabCase:function(t){return t.replace(/\s+/g,"-").toLowerCase()}},Object(C["c"])("products",["getRecipeStr"])),Object(C["b"])("cart",["updateCart","toggleShowCart"])),{},{recipeStr:function(){var t=this.getRecipeStr(this.id);return t(this.id)},selectSize:function(t){this.size=t},getSizeBtnClass:function(t){return this.size.id!==t?[""]:["active"]},addToCart:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={action:"add",device:t.$cookies.get("device"),productId:t.id,size:t.size,quantity:1},e.next=3,t.updateCart(s);case 3:t.toggleShowCart();case 4:case"end":return e.stop()}}),e)})))()}})}),le=ce,ue=(s("304c"),Object(m["a"])(le,ie,oe,!1,null,"387847c4",null)),de=ue.exports,fe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-grid mx-auto text-center px-4"},[t._t("header"),t._t("filters"),s("div",{staticClass:"row"},[t._t("products")],2)],2)},me=[],pe=(s("3532"),{}),ve=Object(m["a"])(pe,fe,me,!1,null,"689f7a63",null),he=ve.exports,ge=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[t._t("default")],2)},be=[],Ce=(s("bac2"),{}),we=Object(m["a"])(Ce,ge,be,!1,null,"f1de3a0a",null),xe=we.exports,_e=s("9612");n["default"].config.productionTip=!1,n["default"].component("product-card",de),n["default"].component("product-grid",he),n["default"].component("base-card",xe),n["default"].use(r.a),n["default"].use(_e["a"]),n["default"].$cookies.config("14d"),null!==n["default"].$cookies.get("device")&&void 0!==n["default"].$cookies.get("device")||n["default"].$cookies.set("device",_e["b"].v4()),null!==n["default"].$cookies.get("isAuthenticated")&&void 0!==n["default"].$cookies.get("isAuthenticated")||(n["default"].$cookies.set("isAuthenticated",!1),n["default"].$cookies.set("auth","")),new n["default"]({router:Bt,store:re,render:function(t){return t(I)}}).$mount("#app")},"615b":function(t,e,s){},"71da":function(t,e,s){},"7bbb":function(t,e,s){"use strict";var n=s("615b"),a=s.n(n);a.a},"7c26":function(t,e,s){},"7cb2":function(t,e,s){"use strict";var n=s("270b"),a=s.n(n);a.a},"85ec":function(t,e,s){},"8eb8":function(t,e,s){},bac2:function(t,e,s){"use strict";var n=s("53d7"),a=s.n(n);a.a},e4fa:function(t,e,s){},ec13:function(t,e,s){"use strict";var n=s("199d"),a=s.n(n);a.a},f983:function(t,e,s){}});
//# sourceMappingURL=app.e5b0c156.js.map