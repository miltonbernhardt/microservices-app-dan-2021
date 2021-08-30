(this["webpackJsonpdan-lab-ui"]=this["webpackJsonpdan-lab-ui"]||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){},43:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(1),r=n(17),o=(n(43),n(3)),i=n(10),s=n(6),u=n(12),l=(n(18),n(0)),j=function(e){var t=e.opciones,n=e.value,a=e.onChange,c=e.label,r=e.name,o=t?t.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)})):Object(l.jsx)(l.Fragment,{});return Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:c}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("select",{name:r,value:n,onChange:a,children:o})})]})},d=function(e){var t=e.value;return Object(l.jsx)("div",{className:"form-label",children:Object(l.jsx)("label",{children:t})})},b=function(e){var t=e.action,n=e.label;return Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{onClick:t,children:n})})},p=function(e){var t=e.value,n=e.onChange,a=e.label,c=e.name,r=e.pattern,o=e.readOnly;return Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:a}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:c,pattern:r,value:t,onChange:n,readOnly:o})})]})},O=function(e){var t=e.cliente,n=e.actualizarCliente,a=e.saveOrUpdate,c=e.clean,r=function(e){var t=e.target.name,a="checkbox"===e.target.type?e.target.checked:e.target.value;e.target.validity.valid&&n(t,a)};return Object(l.jsx)("div",{className:"panel-form-simple",children:Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"Raz\xf3n Social:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:"razonSocial",value:t.razonSocial,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"Cuit:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{type:"text",pattern:"[0-9]*",name:"cuit",value:t.cuit,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"Email:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:"mail",value:t.mail,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"M\xe1ximo descubierto:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{type:"text",pattern:"[0-9.]*",name:"maxCuentaCorriente",value:t.maxCuentaCorriente,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"Habilitado online:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:"habilitadoOnline",type:"checkbox",checked:t.habilitadoOnline,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)(b,{label:"Guardar / actualizar",action:function(){return a()}}),Object(l.jsx)(b,{label:"Cancelar",action:c})]})]})})},m=function(e){var t=e.encabezado,n=e.filas;return Object(l.jsx)("div",{className:"table-box",children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:t})}),Object(l.jsx)("tbody",{children:n})]})})},f=function(e){var t=e.children;return Object(l.jsx)("th",{className:!0,children:t})},h=function(e){var t=e.children;return Object(l.jsx)("tr",{children:t})},x=function(e){var t=e.dato;return Object(l.jsx)("td",{children:t})},v=function(e){var t=e.titulo,n=e.action;return Object(l.jsx)("td",{children:Object(l.jsx)("button",{className:"table-button",onClick:n,children:t})})},g=(n(26),n(38)),k=n(2),C=n.n(k),N=n(5),w=n(19),S=n.n(w),y="http://localhost",E="9000",I="9001",z="9002",P="9004",A="producto",D="pedido",T="obra",R="detallepedido",U="liquidacion",L="cliente",F="empleado",q={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},G=function(){var e=Object(N.a)(C.a.mark((function e(t){var n,a,c,r,o,i,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,c="".concat(y,":8181/login"),e.prev=2,e.next=5,S.a.post(c,{username:n,password:a},{headers:q});case 5:if(r=e.sent,o=r.data,i=r.status,"string"!==typeof o&&200===i){e.next=11;break}404===i&&localStorage.removeItem("token"),e.next=12;break;case 11:return e.abrupt("return",o);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),s="".concat(e.t0.response?e.t0.message:e.t0),console.log("Error en el login: ",{method:"login",URL:c,message:s});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(N.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je(E,"".concat(T)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(E,"".concat(T),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",le(E,"".concat(T,"/").concat(t.id),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(N.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je(z,"".concat(D)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(z,"".concat(D),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",le(z,"".concat(D,"/").concat(t.id),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(N.a)(C.a.mark((function e(t,n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(z,"".concat(R,"/?idPedido=").concat(n.id),t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",le(z,"".concat(R),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(z,"".concat(R,"/id?idDetalle=").concat(t.id)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(N.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je(I,"".concat(A)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(I,"".concat(A),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",le(I,"".concat(A),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(N.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je(P,"".concat(U)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(N.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(P,"".concat(U,"/todos")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(P,"".concat(U,"/empleado?idEmpleado=").concat(t.id)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(P,"".concat(U,"/sueldo"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je(P,"".concat(U,"/empleado/sueldo?idEmpleado=").concat(t.id)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(N.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je(E,"".concat(L)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(E,"".concat(L),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",le(E,"".concat(L),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(N.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je(E,"".concat(F)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=localStorage.getItem("token");return Object(a.a)(Object(a.a)({},q),{},{Authorization:"Bearer ".concat(e)})},ue=function(){var e=Object(N.a)(C.a.mark((function e(t,n,a){var c,r,o,i,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(y,":").concat(t,"/api/").concat(n),console.log({request:c,data:a}),e.prev=2,e.next=5,S.a.post(c,a,{headers:se()});case 5:if(r=e.sent,o=r.data,i=r.status,"string"!==typeof o&&200===i){e.next=11;break}401===i&&(localStorage.removeItem("token"),localStorage.removeItem("username")),e.next=13;break;case 11:return console.log({response:c,dataResponse:o}),e.abrupt("return",o);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),s="".concat(e.t0.response?e.t0.message:e.t0),console.log("Error en m\xe9todo: ",{method:"POST",URL:c,message:s,error:e.t0.response});case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,n,a){return e.apply(this,arguments)}}(),le=function(){var e=Object(N.a)(C.a.mark((function e(t,n,a){var c,r,o,i,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(y,":").concat(t,"/api/").concat(n),console.log({request:c,data:a}),e.prev=2,e.next=5,S.a.put(c,a,{headers:se()});case 5:if(r=e.sent,o=r.data,i=r.status,"string"!==typeof o&&200===i){e.next=12;break}throw 401===i&&(localStorage.removeItem("token"),localStorage.removeItem("username")),new Error(o);case 12:return console.log({response:c,dataResponse:o}),e.abrupt("return",o);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),s="".concat(e.t0.response?e.t0.message:e.t0),console.log("Error en m\xe9todo: ",{method:"PUT",URL:c,message:s,error:e.t0.response});case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,n,a){return e.apply(this,arguments)}}(),je=function(){var e=Object(N.a)(C.a.mark((function e(t,n){var a,c,r,o,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(y,":").concat(t,"/api/").concat(n),console.log({request:a}),e.prev=2,e.next=5,S.a.get(a,{headers:se()});case 5:if(c=e.sent,r=c.data,o=c.status,"string"!==typeof r&&200===o){e.next=12;break}throw 401===o&&(localStorage.removeItem("token"),localStorage.removeItem("username")),new Error(r);case 12:return console.log("Error en m\xe9todo: ",{response:a,dataResponse:r}),e.abrupt("return",r);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),i="".concat(e.t0.response?e.t0.message:e.t0),console.error({method:"GET",URL:a,message:i,error:e.t0.response});case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,n){return e.apply(this,arguments)}}(),de=function(){var e=Object(N.a)(C.a.mark((function e(t,n){var a,c,r,o,i,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(y,":").concat(t,"/api/").concat(n),console.log({request:a}),e.prev=2,c=[].concat(Object(g.a)(q),[{Authorization:"Bearer ".concat(window.accessToken)}]),e.next=6,S.a.delete(a,{headers:c});case 6:if(r=e.sent,o=r.data,i=r.status,"string"!==typeof o&&200===i){e.next=13;break}throw 401===i&&(localStorage.removeItem("token"),localStorage.removeItem("username")),new Error(o);case 13:return console.log("Error en m\xe9todo: ",{response:a,dataResponse:o}),e.abrupt("return",o);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),s="".concat(e.t0.response?e.t0.message:e.t0),console.error({method:"DELETE",URL:a,message:s,error:e.t0.response});case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,n){return e.apply(this,arguments)}}(),be={razonSocial:"",habilitadoOnline:!0,maxCuentaCorriente:0,mail:"",cuit:""},pe=function(){var e=Object(c.useState)(be),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),j=Object(o.a)(i,2),d=j[0],b=j[1],p=Object(s.f)();Object(c.useEffect)((function(){localStorage.getItem("token")?ce().then((function(e){e&&b(e)})):p.push(Le.login[2])}),[p]);var g=function(){ce().then((function(e){e&&b(e)}))},k=["ID Usuario","Raz\xf3n social","Email",""].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Gesti\xf3n de clientes"})}),Object(l.jsx)(O,{cliente:n,actualizarCliente:function(e,t){var c=Object(a.a)(Object(a.a)({},n),{},Object(u.a)({},e,t));r(c)},saveOrUpdate:function(){n.id?oe(n).then((function(){return g()})):re(n).then((function(){return g()})),r(be)},clean:function(){r(be)}}),Object(l.jsx)(m,{encabezado:k,filas:d?d.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.razonSocial}),Object(l.jsx)(x,{dato:e.mail}),Object(l.jsx)(v,{titulo:"Seleccionar",accion:function(){return r(e)}})]},t)})):Object(l.jsx)(l.Fragment,{})})]})},Oe=n(16),me=function(e){var t=e.logged,n=e.setLogged,a=Object(c.useState)(""),r=Object(o.a)(a,2),i=r[0],s=r[1],u=Object(c.useState)(""),j=Object(o.a)(u,2),b=j[0],p=j[1],O=Object(Oe.d)(),m=function(){t||G({username:i,password:b}).then((function(e){e&&e.accessToken?(n(!0),localStorage.setItem("token",e.accessToken),localStorage.setItem("username",i),O.success("Se ha logueado correctamente!")):(O.error("Revise usuario y/o contrase\xf1a"),n(!1),localStorage.removeItem("token"),localStorage.removeItem("username"))}))};return t?Object(l.jsxs)("h1",{children:["Bienvenido ",localStorage.getItem("username"),"!"]}):Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"form-step",children:" Login "}),Object(l.jsxs)("form",{id:"formLogin",children:[Object(l.jsxs)("div",{className:"col-75",children:[Object(l.jsx)(d,{value:"Nombre de usuario"}),Object(l.jsx)("div",{className:"col-75",children:Object(l.jsx)("input",{name:"nombre",type:"text",placeholder:"Username (dan2021)",value:i,onChange:function(e){return s(e.target.value)},onKeyPress:function(e){return function(e){if("Enter"===e.key){var t=e.target.form,n=Array.prototype.indexOf.call(t,e.target);t.elements[n+1].focus(),e.preventDefault()}}(e)}})})]}),Object(l.jsxs)("div",{className:"col-75",children:[Object(l.jsx)(d,{value:"Contrase\xf1a"}),Object(l.jsx)("div",{className:"col-75",children:Object(l.jsx)("input",{name:"password",type:"password",placeholder:"Password (dan2021)",value:b,onChange:function(e){return p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&m()}})})]})]}),Object(l.jsx)("div",{className:"col-75 button-login",children:Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn-wide",onClick:m,children:"Ingresar"})})})]})},fe=function(e){var t=e.obra,n=e.actualizarCampos,a=e.saveOrUpdate,c=e.clean,r=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;e.target.validity.valid&&n(t,a)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)("h3",{children:"Obra"}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"Descripci\xf3n:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:"descripcion",value:t.descripcion,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"Latitud:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{type:"text",pattern:"[0-9]*",name:"latitud",value:t.latitud,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"Longitud:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{type:"text",pattern:"[0-9]*",name:"longitud",value:t.longitud,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"Direcci\xf3n:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:"direccion",value:t.direccion,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"Superficie:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{type:"text",pattern:"[0-9]*",name:"superficie",value:t.superficie,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(d,{value:"Tipo de obra:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsxs)("select",{name:"tipoObra",value:t.tipoObra,onChange:r,children:[Object(l.jsx)("option",{value:"REFORMA",children:"Reforma"}),Object(l.jsx)("option",{value:"CASA",children:"Casa"}),Object(l.jsx)("option",{value:"EDIFICIO",children:"Edificio"}),Object(l.jsx)("option",{value:"VIAL",children:"Vial"})]})})]}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:c,children:"Limpiar"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:a,children:"Guardar"})})]})]})},he=function(e){var t=e.cliente,n=e.actualizarCampos,a=e.listaClientes,c=function(e){var t=e.target.name,a=e.target.value;e.target.validity.valid&&n(t,a)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)("h3",{children:"Cliente"}),Object(l.jsx)(j,{label:"Razon Social",placeholder:"Razon Social",name:"razonSocial",value:t.razonSocial,onChange:c,opciones:a.map((function(e){return e.razonSocial}))}),Object(l.jsx)(j,{label:"CUIT",placeholder:"CUIT",name:"cuit",value:t.cuit,onChange:c,opciones:a.map((function(e){return e.cuit}))})]})},xe={id:null,razonSocial:"",cuit:""},ve={id:null,descripcion:"",latitud:0,longitud:0,direccion:"",superficie:0,tipoObra:"",cliente:xe},ge=function(){var e=Object(s.f)(),t=Object(Oe.d)(),n=Object(c.useState)(ve),r=Object(o.a)(n,2),i=r[0],j=r[1],d=Object(c.useState)(xe),b=Object(o.a)(d,2),p=b[0],O=b[1],g=Object(c.useState)([]),k=Object(o.a)(g,2),C=k[0],N=k[1],w=Object(c.useState)([]),S=Object(o.a)(w,2),y=S[0],E=S[1];Object(c.useEffect)((function(){localStorage.getItem("token")?(I(),z()):e.push(Le.login)}),[e]);var I=function(){ce().then((function(e){e&&N(e)}))},z=function(){M().then((function(e){e&&E(e)}))},P=["ID Obra","Descripcion","Direccion","Superficie","Tipo de Obra",""].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Gestion de Obras"}),Object(l.jsxs)("div",{className:"panel-form-doble",children:[Object(l.jsx)(fe,{obra:i,actualizarCampos:function(e,t){var n=Object(a.a)(Object(a.a)({},i),{},Object(u.a)({},e,t));j(n)},clean:function(){j(ve),O(xe)},saveOrUpdate:function(){if(i.descripcion&&i.latitud&&i.longitud&&i.superficie&&i.tipoObra){i.cliente=p;var e=function(){z()};i.id?H(i).then(e):B(i).then(e),j(ve),O(xe)}else t.error("Faltan indicar ciertos datos de la obra")}}),Object(l.jsx)(he,{cliente:p,actualizarCampos:function(e,t){var n=C.findIndex((function(n){return n[e]===t}));O(C[n]);var c=Object(a.a)(Object(a.a)({},i),{},{cliente:C[n]});j(c)},listaClientes:C})]}),Object(l.jsx)("div",{className:"panel",children:Object(l.jsx)(m,{encabezado:P,filas:y?y.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.descripcion}),Object(l.jsx)(x,{dato:e.direccion}),Object(l.jsx)(x,{dato:e.superficie}),Object(l.jsx)(x,{dato:e.tipoObra}),Object(l.jsx)(v,{titulo:"Seleccionar",accion:function(){j(e),O(e.cliente)}})]},t)})):Object(l.jsx)(l.Fragment,{})})})]})},ke=function(e){var t=e.producto,n=e.unidades,a=e.actualizarCampos,c=e.clean,r=e.saveOrUpdate,o=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;e.target.validity.valid&&a(t,n)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)("h3",{children:"Producto"}),Object(l.jsx)(p,{label:"Nombre:",name:"nombre",value:t.nombre,onChange:o}),Object(l.jsx)(p,{label:"Descripci\xf3n:",name:"descripcion",value:t.descripcion,onChange:o}),Object(l.jsx)(p,{label:"Precio:",name:"precio",pattern:"[0-9.]*",value:t.precio,onChange:o}),Object(l.jsx)(p,{label:"Stock actual:",name:"stockActual",pattern:"[0-9.]*",value:t.stockActual,onChange:o}),Object(l.jsx)(p,{label:"Stock m\xednimo:",name:"stockMinimo",pattern:"[0-9.]*",value:t.stockMinimo,onChange:o}),Object(l.jsx)(j,{label:"Unidad:",name:"unidad",value:t.unidad.descripcion,opciones:n?n.map((function(e){return e.descripcion})):[],onChange:o}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:c,children:"Limpiar"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:r,children:"Guardar"})})]})]})},Ce={descripcion:""},Ne={nombre:"",descripcion:"",precio:0,stockActual:0,stockMinimo:0,unidad:Ce},we=function(){var e=Object(s.f)(),t=Object(c.useState)(Ne),n=Object(o.a)(t,2),r=n[0],i=n[1],j=Object(c.useState)([]),d=Object(o.a)(j,2),b=d[0],p=d[1],O=Object(c.useState)([]),g=Object(o.a)(O,2),k=g[0],C=g[1];Object(c.useEffect)((function(){localStorage.getItem("token")?N():e.push(Le.login)}),[e]);var N=function(){Z().then((function(e){e&&p(e)})),je(I,"".concat(A,"/unidades")).then((function(e){e&&C(e)}))},w=["ID Producto","Nombre","Descripcion","Precio","Stock Actual","Stock Minimo",""].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Gesti\xf3n productos"}),Object(l.jsx)("div",{className:"panel-form-simple",children:Object(l.jsx)(ke,{producto:r,unidades:k,actualizarCampos:function(e,t){"unidad"===e&&(t=Object(a.a)(Object(a.a)({},Ce),{},{descripcion:t}));var n=Object(a.a)(Object(a.a)({},r),{},Object(u.a)({},e,t));i(n)},clean:function(){i(Ne)},saveOrUpdate:function(){r.id?Y(r).then((function(){return N()})):Q(r).then((function(){return N()})),i(Ne)}})}),Object(l.jsx)("div",{className:"panel",children:Object(l.jsx)(m,{encabezado:w,filas:function(){return b?b.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.nombre}),Object(l.jsx)(x,{dato:e.descripcion}),Object(l.jsx)(x,{dato:e.precio}),Object(l.jsx)(x,{dato:e.stockActual}),Object(l.jsx)(x,{dato:e.stockMinimo}),Object(l.jsx)(v,{titulo:"Seleccionar",accion:function(){return i(e)}})]},t)})):Object(l.jsx)(l.Fragment,{})}})})]})},Se=function(e){var t=e.pedido,n=e.actualizarCampos,a=e.clean,c=e.saveOrUpdate,r=e.verDetalle,o=e.obras,i=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;e.target.validity.valid&&n(t,a)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)("div",{className:"form-row",children:Object(l.jsx)("h2",{children:"Pedido"})}),Object(l.jsx)(p,{label:"Fecha:",name:"fechaPedido",value:t.fechaPedido,onChange:i}),Object(l.jsx)(j,{label:"Obra:",name:"obra",onChange:i,opciones:o.map((function(e){return e.id}))}),Object(l.jsx)(j,{label:"Estado:",name:"estado",value:t.estado,onChange:i,opciones:["NUEVO","CONFIRMADO","PENDIENTE","CANCELADO","ACEPTADO","RECHAZADO","EN_PREPARACION","ENTREGADO"]}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:a,children:"Limpiar"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:r,children:"Ver Detalle"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:c,children:"Guardar"})})]})]})},ye=function(e){var t,n,a=e.detallePedido,c=e.actualizarCampos,r=e.listaProductos,o=e.saveOrUpdate,i=function(e){var t=e.target.name,n=e.target.value;e.target.validity.valid&&c(t,n)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)("div",{className:"form-row",children:Object(l.jsx)("h2",{children:"Detalle pedido"})}),Object(l.jsx)(p,{label:"Cantidad:",pattern:"[0-9.]*",name:"cantidad",value:a.cantidad,onChange:i}),Object(l.jsx)(p,{label:"Precio:",name:"precio",readOnly:!0,value:(null!==(t=a.cantidad)&&void 0!==t?t:0)*(null!==(n=a.producto.precio)&&void 0!==n?n:1)}),Object(l.jsx)(j,{label:"Producto:",name:"producto",onChange:i,value:a.producto.nombre,opciones:r.map((function(e){return e.nombre}))}),Object(l.jsx)("div",{className:"form-buttons",children:Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{className:"btn-wide",type:"button",onClick:o,children:"Guardar"})})})]})},Ee={id:null,fechaPedido:"",obra:"",estado:"NUEVO",detalle:[]},Ie={id:null,cantidad:"",precio:0,producto:""},ze=function(){var e=Object(s.f)(),t=Object(c.useState)(Ee),n=Object(o.a)(t,2),r=n[0],i=n[1],j=Object(c.useState)([]),d=Object(o.a)(j,2),b=d[0],p=d[1],O=Object(c.useState)(Ie),g=Object(o.a)(O,2),k=g[0],C=g[1],N=Object(c.useState)([]),w=Object(o.a)(N,2),S=w[0],y=w[1],E=Object(c.useState)([]),I=Object(o.a)(E,2),z=I[0],P=I[1],A=Object(c.useState)([]),D=Object(o.a)(A,2),T=D[0],R=D[1];Object(c.useEffect)((function(){localStorage.getItem("token")?(U(),L(),F()):e.push(Le.login)}),[b,S,e]);var U=function(){V().then((function(e){e&&p(e)}))},L=function(){Z().then((function(e){e&&P(e)}))},F=function(){M().then((function(e){e&&R(e)}))},q=function(){i(Ee),y([]),C(Ie)},G=["ID Pedido","Fecha de Pedido","ID Obra","Estado"].map((function(e,t){return Object(l.jsx)(f,{children:e},t)})),B=function(e){i(e),y(e.detalle),C(Ie)},H=S.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.cantidad}),Object(l.jsx)(x,{dato:e.precio}),Object(l.jsx)(x,{dato:e.producto.nombre}),Object(l.jsx)(v,{titulo:"Eliminar",accion:function(){X(e).then((function(){return U()}))}}),Object(l.jsx)(v,{titulo:"Seleccionar",accion:function(){return C(e)}})]},t)})),Q=["ID Detalle","Cantidad","Precio","Producto","Eliminar","Seleccionar"].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Gesti\xf3n pedidos"}),Object(l.jsxs)("div",{className:"panel-form-doble",children:[Object(l.jsx)(Se,{pedido:r,actualizarCampos:function(e,t){if("obra"===e){var n=T.findIndex((function(e){return e.id===t})),c=Object(a.a)(Object(a.a)({},r),{},{obra:T[n]});i(c)}else{var o=Object(a.a)(Object(a.a)({},r),{},Object(u.a)({},e,t));i(o)}},clean:q,saveOrUpdate:function(){r.id?K(r).then((function(){return U()})):J(r).then((function(){return U()})),q()},obras:T}),Object(l.jsx)(ye,{detallePedido:k,listaProductos:z,actualizarCampos:function(e,t){if("producto"===e){var n,c=z.findIndex((function(e){return e.nombre===t})),r=Object(a.a)(Object(a.a)({},k),{},{producto:z[c],precio:(null!==(n=k.cantidad)&&void 0!==n?n:0)*(z[c]?z[c].precio:1)});C(r)}else{var o=Object(a.a)(Object(a.a)({},k),{},Object(u.a)({},e,t));C(o)}},saveOrUpdate:function(){k.id?W(k).then((function(){return U()})):_(k,r).then((function(){return U()}))}})]}),Object(l.jsxs)("div",{className:"panel",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Detalle"})}),Object(l.jsx)(m,{encabezado:Q,filas:H}),Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Pedidos"})}),Object(l.jsx)(m,{encabezado:G,filas:function(){if(!b)return Object(l.jsx)(l.Fragment,{});b.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.fechaPedido}),Object(l.jsx)(x,{dato:e.obra.id}),Object(l.jsx)(x,{dato:e.estado}),Object(l.jsx)(v,{titulo:"Seleccionar",accion:function(){return B(e)}})]},t)}))}()})]})]})},Pe=function(){var e=Object(s.f)(),t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0];n[1];Object(c.useEffect)((function(){localStorage.getItem("token")||e.push(Le.login)}),[e]);var r=["ID Pedido","Fecha de Pedido","ID Obra","Estado",""].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Gesti\xf3n de pagos"}),Object(l.jsxs)("div",{className:"panel",children:[Object(l.jsx)("h2",{children:"Pedidos"}),Object(l.jsx)(m,{encabezado:r,filas:a?a.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.fechaPedido}),Object(l.jsx)(x,{dato:e.obra}),Object(l.jsx)(x,{dato:e.estado}),Object(l.jsx)(v,{titulo:"Abonar",accion:function(){console.log("Abonar pedido listo")}})]},t)})):Object(l.jsx)(l.Fragment,{})})]})]})},Ae=function(e){var t=e.empleado,n=e.actualizarCampos,a=e.listaEmpleados,c=e.liquidarTodos,r=e.liquidarEmpleado,o=e.actualizarCamposSueldo,i=e.actualizarSueldoEmpleado,s=e.sueldoEmpleado,u=function(e){var t=e.target.name,n=e.target.value;e.target.validity.valid&&o(t,n)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)(j,{label:"Empleado",name:"nombre",value:t.nombre,onChange:function(e){var t=e.target.value;e.target.validity.valid&&n(t)},opciones:a.map((function(e){return e.nombre}))}),Object(l.jsx)(p,{label:"Monto",name:"monto",pattern:"[0-9.]*",value:s.monto,onChange:u}),Object(l.jsx)(p,{label:"Porcentaje de comisi\xf3n:",name:"comision",pattern:"[0-9.]*",value:s.comision,onChange:u}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:i,children:"Actualizar Sueldo"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:r,children:"Liquidar Empleado"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:c,children:"Liquidar a todos"})})]})]})},De={nombre:""},Te={monto:0,comision:0},Re=function(){var e=Object(s.f)(),t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],i=n[1],j=Object(c.useState)([]),d=Object(o.a)(j,2),b=d[0],p=d[1],O=Object(c.useState)(De),v=Object(o.a)(O,2),g=v[0],k=v[1],C=Object(c.useState)(Te),N=Object(o.a)(C,2),w=N[0],S=N[1],y=function(){$().then((function(e){e&&i(e)}))},E=function(e){ae(e).then((function(e){e&&S(e)}))};Object(c.useState)((function(){localStorage.getItem("token")?(ie().then((function(e){e&&p(e)})),y()):e.push(Le.login)}),[e]);var I=["ID Liquidaci\xf3n","Empleado","Fecha","Monto"].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Gesti\xf3n de liquidaciones"}),Object(l.jsx)("div",{className:"panel-form-simple",children:Object(l.jsx)(Ae,{empleado:g,listaEmpleados:b,actualizarCampos:function(e){var t=b.findIndex((function(t){return t.nombre===e}));k(b[t]),E(b[t])},actualizarCamposSueldo:function(e,t){var n=Object(a.a)(Object(a.a)({},w),{},Object(u.a)({},e,t));S(n)},actualizarSueldoEmpleado:function(){console.log(w),ne(w).then((function(){E()}))},liquidarEmpleado:function(){te(g).then((function(){return y()}))},liquidarTodos:function(){ee().then((function(){return y()}))},sueldoEmpleado:w})}),Object(l.jsx)(m,{encabezado:I,filas:r?r.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:b[b.findIndex((function(t){return t.id===e.empleado.id}))].nombre}),Object(l.jsx)(x,{dato:e.fecha}),Object(l.jsx)(x,{dato:e.monto})]},t)})):Object(l.jsx)(l.Fragment,{})})]})},Ue=function(e){var t=e.logout;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)(i.b,{className:"nav-links",to:Le.clientes,children:Object(l.jsx)("li",{children:"Clientes"})}),Object(l.jsx)(i.b,{className:"nav-links",to:Le.obras,children:Object(l.jsx)("li",{children:"Obras"})}),Object(l.jsx)(i.b,{className:"nav-links",to:Le.pagos,children:Object(l.jsx)("li",{children:"Pagos"})}),Object(l.jsx)(i.b,{className:"nav-links",to:Le.pedidos,children:Object(l.jsx)("li",{children:"Pedidos"})}),Object(l.jsx)(i.b,{className:"nav-links",to:Le.productos,children:Object(l.jsx)("li",{children:"Productos"})}),Object(l.jsx)(i.b,{className:"nav-links",to:Le.liquidacion,children:Object(l.jsx)("li",{children:"Liquidaci\xf3n"})}),Object(l.jsx)(i.b,{className:"nav-links",to:Le.login,onClick:function(){return t()},children:Object(l.jsx)("li",{children:"Cerrar Sesi\xf3n"})})]})})},Le={login:"/",clientes:"/page/clientes",obras:"/page/obras",productos:"/page/productos",pedidos:"/page/pedidos",pagos:"/page/pagos",liquidacion:"/page/liquidacion",logout:"/logout"};var Fe=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(Oe.d)();return Object(c.useEffect)((function(){a(null!==localStorage.getItem("token")&&void 0!==localStorage.getItem("token"))}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(i.a,{children:[n?Object(l.jsx)(Ue,{logout:function(){r.info("Sesi\xf3n cerrada"),a(!1),localStorage.removeItem("token")}}):Object(l.jsx)(l.Fragment,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:Le.login,children:Object(l.jsx)(me,{logged:n,setLogged:a})}),Object(l.jsx)(s.a,{path:Le.clientes,component:pe}),Object(l.jsx)(s.a,{path:Le.obras,component:ge}),Object(l.jsx)(s.a,{path:Le.productos,component:we}),Object(l.jsx)(s.a,{path:Le.pedidos,component:ze}),Object(l.jsx)(s.a,{path:Le.pagos,component:Pe}),Object(l.jsx)(s.a,{path:Le.liquidacion,component:Re})]})]})})},qe=n(37),Ge={position:Oe.b.BOTTOM_RIGHT,timeout:3e3,offset:"10px",transition:Oe.c.SCALE},Me=function(){return Object(l.jsx)(Oe.a,Object(a.a)(Object(a.a)({template:qe.a},Ge),{},{children:Object(l.jsx)(Fe,{})}))};Object(r.render)(Object(l.jsx)(Me,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.5267c03c.chunk.js.map