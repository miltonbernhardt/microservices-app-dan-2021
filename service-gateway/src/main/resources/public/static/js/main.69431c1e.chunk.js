(this["webpackJsonpdan-lab-ui"]=this["webpackJsonpdan-lab-ui"]||[]).push([[0],{16:function(e,t,n){},26:function(e,t,n){},42:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(20),r=(n(42),n(3)),o=n(9),i=n(7),s=n(11),u=n(5),l=(n(16),n(0)),d=function(e){var t=e.opciones,n=e.value,a=e.onChange,c=e.label,r=e.name,o=t?t.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)})):Object(l.jsx)(l.Fragment,{});return Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:c}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("select",{name:r,value:n,onChange:a,children:o})})]})},j=function(e){var t=e.value;return Object(l.jsx)("label",{className:"form-label",children:t})},b=function(e){var t=e.action,n=e.label;return Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{onClick:function(e){return t(e)},children:n})})},p=function(e){var t=e.value,n=e.onChange,a=e.label,c=e.name,r=e.pattern,o=e.readOnly;return Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:a}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:c,pattern:r,value:t,onChange:n,readOnly:o})})]})},O=function(e){var t=e.cliente,n=e.actualizarCliente,a=e.saveOrUpdate,c=e.clean,r=function(e){var t=e.target.name,a="checkbox"===e.target.type?e.target.checked:e.target.value;e.target.validity.valid&&n(t,a)};return Object(l.jsx)("div",{className:"panel-form-simple",children:Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"Raz\xf3n Social:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:"razonSocial",value:t.razonSocial,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"Cuit:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{type:"text",pattern:"[0-9]*",name:"cuit",value:t.cuit,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"Email:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:"mail",value:t.mail,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"M\xe1ximo descubierto:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{type:"text",pattern:"[0-9.]*",name:"maxCuentaCorriente",value:t.maxCuentaCorriente,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"Habilitado online:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:"habilitadoOnline",type:"checkbox",checked:t.habilitadoOnline,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)(b,{label:"Guardar / Actualizar",action:a}),Object(l.jsx)(b,{label:"Limpiar",action:c})]})]})})},m=function(e){var t=e.encabezado,n=e.filas;return Object(l.jsx)("div",{className:"table-box",children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:t})}),Object(l.jsx)("tbody",{children:n})]})})},f=function(e){var t=e.children;return Object(l.jsx)("th",{children:t})},h=function(e){var t=e.children;return Object(l.jsx)("tr",{children:t})},x=function(e){var t=e.dato;return Object(l.jsx)("td",{children:t})},v=function(e){var t=e.titulo,n=e.action;return Object(l.jsx)("td",{children:Object(l.jsx)("button",{className:"table-button",onClick:function(){return n()},children:t})})},g=(n(26),n(37)),k=n(2),N=n.n(k),C=n(4),w=n(17),S=n.n(w),y="http://localhost",E="9000",I="9001",z="9002",P="9004",D="producto",A="pedido",F="obra",L="detallepedido",R="liquidacion",T="cliente",U="empleado",q={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},G=function(){var e=Object(C.a)(N.a.mark((function e(t){var n,a,c,r,o,i,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,c="".concat(y,":8181/login"),e.prev=2,e.next=5,S.a.post(c,{username:n,password:a},{headers:q});case 5:if(r=e.sent,o=r.data,i=r.status,"string"!==typeof o&&200===i){e.next=11;break}404===i&&localStorage.removeItem("token"),e.next=12;break;case 11:return e.abrupt("return",o);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),s="".concat(e.t0.response?e.t0.message:e.t0),console.log("Error en el login: ",{method:"login",URL:c,message:s});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(E,"".concat(F)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(E,"".concat(F),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",le(E,"".concat(F,"/").concat(t.id),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(z,"".concat(A)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(z,"".concat(A),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",le(z,"".concat(A,"/").concat(t.id),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(C.a)(N.a.mark((function e(t,n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(z,"".concat(L,"/?idPedido=").concat(n.id),t));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",le(z,"".concat(L),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",je(z,"".concat(L,"/id?idDetalle=").concat(t.id)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(I,"".concat(D)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(I,"".concat(D),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",le(I,"".concat(D),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(P,"".concat(R)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(P,"".concat(R,"/todos")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(P,"".concat(R,"/empleado?idEmpleado=").concat(t.id)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(P,"".concat(R,"/sueldo"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(P,"".concat(R,"/empleado/sueldo?idEmpleado=").concat(t.id)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(E,"".concat(T)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ue(E,"".concat(T),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",le(E,"".concat(T),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",de(E,"".concat(U)));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=localStorage.getItem("token");return Object(u.a)(Object(u.a)({},q),{},{Authorization:"Bearer ".concat(e)})},ue=function(){var e=Object(C.a)(N.a.mark((function e(t,n,a){var c,r,o,i,s,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(y,":").concat(t,"/api/").concat(n),r="POST ".concat(c),console.log({request:r,data:a}),e.prev=3,e.next=6,S.a.post(c,a,{headers:se()});case 6:if(o=e.sent,i=o.data,s=o.status,"string"!==typeof i&&200===s){e.next=12;break}401===s&&(localStorage.removeItem("token"),localStorage.removeItem("username")),e.next=14;break;case 12:return console.log({response:r,dataResponse:i}),e.abrupt("return",{data:i});case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(3),u="".concat(e.t0.response?e.t0.response.data:e.t0),console.error({method:r,message:u,error:e.t0.response}),e.abrupt("return",{error:u});case 21:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t,n,a){return e.apply(this,arguments)}}(),le=function(){var e=Object(C.a)(N.a.mark((function e(t,n,a){var c,r,o,i,s,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(y,":").concat(t,"/api/").concat(n),r="PUT ".concat(c),console.log({request:r,data:a}),e.prev=3,e.next=6,S.a.put(c,a,{headers:se()});case 6:if(o=e.sent,i=o.data,s=o.status,"string"!==typeof i&&200===s){e.next=13;break}throw 401===s&&(localStorage.removeItem("token"),localStorage.removeItem("username")),new Error(i);case 13:return console.log({response:r,dataResponse:i}),e.abrupt("return",{data:i});case 15:e.next=22;break;case 17:return e.prev=17,e.t0=e.catch(3),u="".concat(e.t0.response?e.t0.response.data:e.t0),console.error({method:r,URL:c,message:u,error:e.t0.response}),e.abrupt("return",{error:u});case 22:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t,n,a){return e.apply(this,arguments)}}(),de=function(){var e=Object(C.a)(N.a.mark((function e(t,n){var a,c,r,o,i,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(y,":").concat(t,"/api/").concat(n),c="GET ".concat(a),console.log({request:c}),e.prev=3,e.next=6,S.a.get(a,{headers:se()});case 6:if(r=e.sent,o=r.data,i=r.status,"string"!==typeof o&&200===i){e.next=12;break}401===i&&(localStorage.removeItem("token"),localStorage.removeItem("username")),e.next=14;break;case 12:return console.log({response:c,dataResponse:o}),e.abrupt("return",{data:o});case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(3),s="".concat(e.t0.response?e.t0.response.data:e.t0),console.error({method:c,URL:a,message:s,error:e.t0.response}),e.abrupt("return",{error:s});case 21:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t,n){return e.apply(this,arguments)}}(),je=function(){var e=Object(C.a)(N.a.mark((function e(t,n){var a,c,r,o,i,s,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(y,":").concat(t,"/api/").concat(n),c="DELETE ".concat(a),console.log({request:c}),e.prev=3,r=[].concat(Object(g.a)(q),[{Authorization:"Bearer ".concat(window.accessToken)}]),e.next=7,S.a.delete(a,{headers:r});case 7:if(o=e.sent,i=o.data,s=o.status,"string"!==typeof i&&200===s){e.next=14;break}throw 401===s&&(localStorage.removeItem("token"),localStorage.removeItem("username")),new Error(i);case 14:return console.log({response:c,dataResponse:i}),e.abrupt("return",{data:i});case 16:e.next=23;break;case 18:return e.prev=18,e.t0=e.catch(3),u="".concat(e.t0.response?e.t0.response.data:e.t0),console.error({method:c,URL:a,message:u,error:e.t0.response}),e.abrupt("return",{error:u});case 23:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t,n){return e.apply(this,arguments)}}(),be=n(6),pe={razonSocial:"",habilitadoOnline:!0,maxCuentaCorriente:0,mail:"",cuit:""},Oe=function(){var e=Object(i.f)(),t=Object(a.useState)(pe),n=Object(r.a)(t,2),c=n[0],o=n[1],d=Object(a.useState)([]),j=Object(r.a)(d,2),b=j[0],p=j[1],g=function(){ce().then((function(e){var t=e.data;t&&p(t)}))};Object(a.useEffect)((function(){localStorage.getItem("token")?g():e.push(Te.login[2])}),[e]);var k=!!(c.cuit&&c.razonSocial&&c.mail&&c.maxCuentaCorriente),N=["ID Usuario","Raz\xf3n social","Email",""].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Gesti\xf3n de clientes"})}),Object(l.jsx)(O,{cliente:c,actualizarCliente:function(e,t){var n=Object(u.a)(Object(u.a)({},c),{},Object(s.a)({},e,t));o(n)},saveOrUpdate:function(e){e.preventDefault(),k?c.id?oe(c).then((function(e){var t=e.data,n=e.error,a=void 0===n?"No se ha podido actualizar el cliente":n;t?(be.b.success("El cliente se ha actualizado correctamente"),g(),o(pe)):be.b.error(a)})):re(c).then((function(e){var t=e.data,n=e.error,a=void 0===n?"No se ha podido guardar el cliente":n;t?(be.b.success("El cliente se ha guardado correctamente"),g(),o(pe)):be.b.error(a)})):be.b.error("Faltan campos del cliente")},clean:function(e){e.preventDefault(),o(pe)}}),Object(l.jsx)(m,{encabezado:N,filas:b?b.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.razonSocial}),Object(l.jsx)(x,{dato:e.mail}),Object(l.jsx)(v,{titulo:"Seleccionar",action:function(){return o(e)}})]},t)})):Object(l.jsx)(l.Fragment,{})})]})},me=function(e){var t=e.logged,n=e.setLogged,c=Object(a.useState)(""),o=Object(r.a)(c,2),i=o[0],s=o[1],u=Object(a.useState)(""),d=Object(r.a)(u,2),b=d[0],p=d[1],O=function(){t||G({username:i,password:b}).then((function(e){e&&e.accessToken?(n(!0),localStorage.setItem("token",e.accessToken),localStorage.setItem("username",i),be.b.success("Se ha logueado correctamente!")):(be.b.error("Revise usuario y/o contrase\xf1a"),n(!1),localStorage.removeItem("token"),localStorage.removeItem("username"))}))};return t?Object(l.jsxs)("h1",{children:["Bienvenido ",localStorage.getItem("username"),"!"]}):Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"form-step",children:" Login "}),Object(l.jsxs)("form",{id:"formLogin",children:[Object(l.jsxs)("div",{className:"col-75",children:[Object(l.jsx)(j,{value:"Nombre de usuario"}),Object(l.jsx)("div",{className:"col-75",children:Object(l.jsx)("input",{name:"nombre",type:"text",placeholder:"Username (dan2021)",value:i,onChange:function(e){return s(e.target.value)},onKeyPress:function(e){return function(e){if("Enter"===e.key){var t=e.target.form,n=Array.prototype.indexOf.call(t,e.target);t.elements[n+1].focus(),e.preventDefault()}}(e)}})})]}),Object(l.jsxs)("div",{className:"col-75",children:[Object(l.jsx)(j,{value:"Contrase\xf1a"}),Object(l.jsx)("div",{className:"col-75",children:Object(l.jsx)("input",{name:"password",type:"password",placeholder:"Password (dan2021)",value:b,onChange:function(e){return p(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&O()}})})]})]}),Object(l.jsx)("div",{className:"col-75 button-login",children:Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn-wide",onClick:O,children:"Ingresar"})})})]})},fe=function(e){var t=e.obra,n=e.actualizarCampos,a=e.saveOrUpdate,c=e.clean,r=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;e.target.validity.valid&&n(t,a)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)("h3",{children:"Obra"}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"Descripci\xf3n:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:"descripcion",value:t.descripcion,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"Latitud:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{type:"text",pattern:"[0-9]*",name:"latitud",value:t.latitud,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"Longitud:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{type:"text",pattern:"[0-9]*",name:"longitud",value:t.longitud,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"Direcci\xf3n:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{name:"direccion",value:t.direccion,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"Superficie:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsx)("input",{type:"text",pattern:"[0-9]*",name:"superficie",value:t.superficie,onChange:r})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(j,{value:"Tipo de obra:"}),Object(l.jsx)("div",{className:"form-input",children:Object(l.jsxs)("select",{name:"tipoObra",value:t.tipoObra,onChange:r,children:[Object(l.jsx)("option",{value:"REFORMA",children:"Reforma"}),Object(l.jsx)("option",{value:"CASA",children:"Casa"}),Object(l.jsx)("option",{value:"EDIFICIO",children:"Edificio"}),Object(l.jsx)("option",{value:"VIAL",children:"Vial"})]})})]}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:function(e){return a(e)},children:"Guardar"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:c,children:"Limpiar"})})]})]})},he=function(e){var t=e.cliente,n=e.actualizarCampos,a=e.listaClientes,c=function(e){var t=e.target.name,a=e.target.value;e.target.validity.valid&&n(t,a)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)("h3",{children:"Cliente"}),Object(l.jsx)(d,{label:"Razon social:",placeholder:"Razon Social",name:"razonSocial",value:t.razonSocial,onChange:c,opciones:a.map((function(e){return e.razonSocial}))}),Object(l.jsx)(d,{label:"CUIT:",placeholder:"CUIT",name:"cuit",value:t.cuit,onChange:c,opciones:a.map((function(e){return e.cuit}))})]})},xe={id:null,razonSocial:"",cuit:""},ve={id:null,descripcion:"",latitud:"",longitud:"",direccion:"",superficie:"",tipoObra:"REFORMA",cliente:xe},ge=function(){var e=Object(i.f)(),t=Object(a.useState)(ve),n=Object(r.a)(t,2),c=n[0],o=n[1],d=Object(a.useState)(xe),j=Object(r.a)(d,2),b=j[0],p=j[1],O=Object(a.useState)([]),g=Object(r.a)(O,2),k=g[0],N=g[1],C=Object(a.useState)([]),w=Object(r.a)(C,2),S=w[0],y=w[1];Object(a.useEffect)((function(){localStorage.getItem("token")?(E(),I()):e.push(Te.login)}),[e]);var E=function(){ce().then((function(e){var t=e.data;t&&(N(t),p(t[0]))}))},I=function(){M().then((function(e){var t=e.data;t&&y(t)}))},z=["ID Obra","Descripcion","Direccion","Superficie","Tipo de Obra",""].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Gestion de Obras"}),Object(l.jsxs)("div",{className:"panel-form-doble",children:[Object(l.jsx)(fe,{obra:c,actualizarCampos:function(e,t){var n=Object(u.a)(Object(u.a)({},c),{},Object(s.a)({},e,t));o(n)},clean:function(){o(ve),p(xe)},saveOrUpdate:function(e){e.preventDefault(),c.descripcion&&c.latitud&&c.longitud&&c.superficie?(c.cliente=b,c.id?H(c).then((function(e){var t=e.data,n=e.error,a=void 0===n?"No se ha podido actualizar la obra correctamente":n;t?(p(t),be.b.success("La obra se ha actualizado correctamente"),I(),o(ve),p(xe)):be.b.error(a)})):B(c).then((function(e){var t=e.data,n=e.error,a=void 0===n?"No se ha podido guardar la obra correctamente":n;t?(be.b.success("La obra se ha guardado correctamente"),I(),o(ve),p(xe)):be.b.error(a)}))):be.b.error("Faltan indicar ciertos datos de la obra")}}),Object(l.jsx)(he,{cliente:b,actualizarCampos:function(e,t){var n=k.findIndex((function(n){return n[e]===t}));p(k[n]);var a=Object(u.a)(Object(u.a)({},c),{},{cliente:b});o(a)},listaClientes:k})]}),Object(l.jsx)("div",{className:"panel",children:Object(l.jsx)(m,{encabezado:z,filas:S?(console.log(S),S.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.descripcion}),Object(l.jsx)(x,{dato:e.direccion}),Object(l.jsx)(x,{dato:e.superficie}),Object(l.jsx)(x,{dato:e.tipoObra}),Object(l.jsx)(v,{titulo:"Seleccionar",action:function(){o(e),p(e.cliente)}})]},t)}))):Object(l.jsx)(l.Fragment,{})})})]})},ke=function(e){var t=e.producto,n=e.unidades,a=e.actualizarCampos,c=e.clean,r=e.saveOrUpdate,o=function(e){e.preventDefault();var t=e.target.name,n=e.target.value;e.target.validity.valid&&a(t,n)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)("h3",{children:"Producto"}),Object(l.jsx)(p,{label:"Nombre:",name:"nombre",value:t.nombre,onChange:o}),Object(l.jsx)(p,{label:"Descripci\xf3n:",name:"descripcion",value:t.descripcion,onChange:o}),Object(l.jsx)(p,{label:"Precio:",name:"precio",pattern:"[0-9.]*",value:t.precio,onChange:o}),Object(l.jsx)(p,{label:"Stock actual:",name:"stockActual",pattern:"[0-9.]*",value:t.stockActual,onChange:o}),Object(l.jsx)(p,{label:"Stock m\xednimo:",name:"stockMinimo",pattern:"[0-9.]*",value:t.stockMinimo,onChange:o}),Object(l.jsx)(d,{label:"Unidad:",name:"unidad",value:t.unidad.descripcion,opciones:n&&n.length>0?n.map((function(e){return e.descripcion})):[],onChange:o}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:r,children:"Guardar"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:c,children:"Limpiar"})})]})]})},Ne={descripcion:""},Ce={nombre:"",descripcion:"",precio:"",stockActual:"",stockMinimo:"",unidad:Ne},we=function(){var e=Object(i.f)(),t=Object(a.useState)(Ce),n=Object(r.a)(t,2),c=n[0],o=n[1],d=Object(a.useState)([]),j=Object(r.a)(d,2),b=j[0],p=j[1],O=Object(a.useState)([]),g=Object(r.a)(O,2),k=g[0],N=g[1];Object(a.useEffect)((function(){localStorage.getItem("token")?C():e.push(Te.login)}),[e]);var C=function(){_().then((function(e){var t=e.data;t&&p(t)})),de(I,"".concat(D,"/unidades")).then((function(e){var t=e.data;t&&N(t)}))},w=!!(c.nombre&&c.precio&&c.descripcion&&c.stockActual&&c.stockMinimo&&c.unidad),S=["ID Producto","Nombre","Descripcion","Precio","Stock Actual","Stock Minimo",""].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Gesti\xf3n productos"}),Object(l.jsx)("div",{className:"panel-form-simple",children:Object(l.jsx)(ke,{producto:c,unidades:k,actualizarCampos:function(e,t){"unidad"===e&&(t=Object(u.a)(Object(u.a)({},Ne),{},{descripcion:t}));var n=Object(u.a)(Object(u.a)({},c),{},Object(s.a)({},e,t));o(n)},clean:function(){o(Ce)},saveOrUpdate:function(e){e.preventDefault(),w?c.id?Y(c).then((function(e){var t=e.data,n=e.error,a=void 0===n?"No se ha podido actualizar el producto":n;t?(be.b.success("El producto se ha actualizado correctamente"),C(),o(Ce)):be.b.error(a)})):Q(c).then((function(e){var t=e.data,n=e.error,a=void 0===n?"No se ha podido guardar el producto":n;t?(be.b.success("El producto se ha guardado correctamente"),C(),o(Ce)):be.b.error(a)})):be.b.error("Faltan campos del producto")}})}),Object(l.jsx)("div",{className:"panel",children:Object(l.jsx)(m,{encabezado:S,filas:b&&b.length>0?b.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.nombre}),Object(l.jsx)(x,{dato:e.descripcion}),Object(l.jsx)(x,{dato:e.precio}),Object(l.jsx)(x,{dato:e.stockActual}),Object(l.jsx)(x,{dato:e.stockMinimo}),Object(l.jsx)(v,{titulo:"Seleccionar",action:function(){return o(e)}})]},t)})):Object(l.jsx)(l.Fragment,{})})})]})},Se=function(e){var t=e.pedido,n=e.actualizarCampos,a=e.clean,c=e.saveOrUpdate,r=e.verDetalle,o=e.obras,i=function(e){e.preventDefault();var t=e.target.name,a=e.target.value;e.target.validity.valid&&n(t,a)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)("div",{className:"form-row",children:Object(l.jsx)("h2",{children:"Pedido"})}),Object(l.jsx)(p,{label:"Fecha:",name:"fechaPedido",value:t.fechaPedido,onChange:i}),Object(l.jsx)(d,{label:"Obra:",name:"obra",onChange:i,opciones:o.map((function(e){return e.id}))}),Object(l.jsx)(d,{label:"Estado:",name:"estado",value:t.estado,onChange:i,opciones:["NUEVO","CONFIRMADO","PENDIENTE","CANCELADO","ACEPTADO","RECHAZADO","EN_PREPARACION","ENTREGADO"]}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:a,children:"Limpiar"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:r,children:"Ver Detalle"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:c,children:"Guardar"})})]})]})},ye=function(e){var t,n,a=e.detallePedido,c=e.actualizarCampos,r=e.listaProductos,o=e.saveOrUpdate,i=function(e){var t=e.target.name,n=e.target.value;e.target.validity.valid&&c(t,n)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)("div",{className:"form-row",children:Object(l.jsx)("h2",{children:"Detalle pedido"})}),Object(l.jsx)(p,{label:"Cantidad:",pattern:"[0-9.]*",name:"cantidad",value:a.cantidad,onChange:i}),Object(l.jsx)(p,{label:"Precio:",name:"precio",readOnly:!0,value:(null!==(t=a.cantidad)&&void 0!==t?t:0)*(null!==(n=a.producto.precio)&&void 0!==n?n:1)}),Object(l.jsx)(d,{label:"Producto:",name:"producto",onChange:i,value:a.producto.nombre,opciones:r.map((function(e){return e.nombre}))}),Object(l.jsx)("div",{className:"form-buttons",children:Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{className:"btn-wide",type:"button",onClick:o,children:"Guardar"})})})]})},Ee={id:null,fechaPedido:"",obra:"",estado:"NUEVO",detalle:[]},Ie={id:null,cantidad:"",precio:0,producto:""},ze=function(){var e=Object(i.f)(),t=Object(a.useState)(Ee),n=Object(r.a)(t,2),c=n[0],o=n[1],d=Object(a.useState)([]),j=Object(r.a)(d,2),b=j[0],p=j[1],O=Object(a.useState)(Ie),g=Object(r.a)(O,2),k=g[0],N=g[1],C=Object(a.useState)([]),w=Object(r.a)(C,2),S=w[0],y=w[1],E=Object(a.useState)([]),I=Object(r.a)(E,2),z=I[0],P=I[1],D=Object(a.useState)([]),A=Object(r.a)(D,2),F=A[0],L=A[1];Object(a.useEffect)((function(){localStorage.getItem("token")?(R(),T(),U()):e.push(Te.login)}),[b,S,e]);var R=function(){V().then((function(e){var t=e.data;t&&p(t)}))},T=function(){_().then((function(e){var t=e.data;t&&P(t)}))},U=function(){M().then((function(e){var t=e.data;t&&L(t)}))},q=function(){o(Ee),y([]),N(Ie)},G=["ID Pedido","Fecha de Pedido","ID Obra","Estado"].map((function(e,t){return Object(l.jsx)(f,{children:e},t)})),B=function(e){o(e),y(e.detalle),N(Ie)},H=S.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.cantidad}),Object(l.jsx)(x,{dato:e.precio}),Object(l.jsx)(x,{dato:e.producto.nombre}),Object(l.jsx)(v,{titulo:"Eliminar",action:function(){Z(e).then((function(){return R()}))}}),Object(l.jsx)(v,{titulo:"Seleccionar",action:function(){return N(e)}})]},t)})),Q=["ID Detalle","Cantidad","Precio","Producto","Eliminar","Seleccionar"].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Gesti\xf3n pedidos"}),Object(l.jsxs)("div",{className:"panel-form-doble",children:[Object(l.jsx)(Se,{pedido:c,actualizarCampos:function(e,t){if("obra"===e){var n=F.findIndex((function(e){return e.id===t})),a=Object(u.a)(Object(u.a)({},c),{},{obra:F[n]});o(a)}else{var r=Object(u.a)(Object(u.a)({},c),{},Object(s.a)({},e,t));o(r)}},clean:q,saveOrUpdate:function(){c.id?K(c).then((function(){return R()})):J(c).then((function(){return R()})),q()},obras:F}),Object(l.jsx)(ye,{detallePedido:k,listaProductos:z,actualizarCampos:function(e,t){if("producto"===e){var n,a=z.findIndex((function(e){return e.nombre===t})),c=Object(u.a)(Object(u.a)({},k),{},{producto:z[a],precio:(null!==(n=k.cantidad)&&void 0!==n?n:0)*(z[a]?z[a].precio:1)});N(c)}else{var r=Object(u.a)(Object(u.a)({},k),{},Object(s.a)({},e,t));N(r)}},saveOrUpdate:function(){k.id?X(k).then((function(){return R()})):W(k,c).then((function(){return R()}))}})]}),Object(l.jsxs)("div",{className:"panel",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Detalle"})}),Object(l.jsx)(m,{encabezado:Q,filas:H}),Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Pedidos"})}),Object(l.jsx)(m,{encabezado:G,filas:function(){if(!b)return Object(l.jsx)(l.Fragment,{});b.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.fechaPedido}),Object(l.jsx)(x,{dato:e.obra.id}),Object(l.jsx)(x,{dato:e.estado}),Object(l.jsx)(v,{titulo:"Seleccionar",action:function(){return B(e)}})]},t)}))}()})]})]})},Pe=function(){var e=Object(i.f)(),t=Object(a.useState)([]),n=Object(r.a)(t,2),c=n[0];n[1];Object(a.useEffect)((function(){localStorage.getItem("token")||e.push(Te.login)}),[e]);var o=["ID Pedido","Fecha de Pedido","ID Obra","Estado",""].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Gesti\xf3n de pagos"}),Object(l.jsxs)("div",{className:"panel",children:[Object(l.jsx)("h2",{children:"Pedidos"}),Object(l.jsx)(m,{encabezado:o,filas:c?c.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:e.fechaPedido}),Object(l.jsx)(x,{dato:e.obra}),Object(l.jsx)(x,{dato:e.estado}),Object(l.jsx)(v,{titulo:"Abonar",action:function(){console.log("Abonar pedido listo")}})]},t)})):Object(l.jsx)(l.Fragment,{})})]})]})},De=function(e){var t=e.empleado,n=e.actualizarCampos,a=e.listaEmpleados,c=e.liquidarTodos,r=e.liquidarEmpleado,o=e.actualizarCamposSueldo,i=e.actualizarSueldoEmpleado,s=e.sueldoEmpleado,u=function(e){var t=e.target.name,n=e.target.value;e.target.validity.valid&&o(t,n)};return Object(l.jsxs)("form",{className:"form-box",children:[Object(l.jsx)(d,{label:"Empleado",name:"nombre",value:t.nombre,onChange:function(e){var t=e.target.value;e.target.validity.valid&&n(t)},opciones:a.map((function(e){return e.nombre}))}),Object(l.jsx)(p,{label:"Monto",name:"monto",pattern:"[0-9.]*",value:s.monto,onChange:u}),Object(l.jsx)(p,{label:"Porcentaje de comisi\xf3n:",name:"comision",pattern:"[0-9.]*",value:s.comision,onChange:u}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:i,children:"Actualizar Sueldo"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:r,children:"Liquidar Empleado"})}),Object(l.jsx)("div",{className:"form-button",children:Object(l.jsx)("button",{type:"button",onClick:c,children:"Liquidar a todos"})})]})]})},Ae={nombre:""},Fe={monto:0,comision:0},Le=function(){var e=Object(i.f)(),t=Object(a.useState)([]),n=Object(r.a)(t,2),c=n[0],o=n[1],d=Object(a.useState)([]),j=Object(r.a)(d,2),b=j[0],p=j[1],O=Object(a.useState)(Ae),v=Object(r.a)(O,2),g=v[0],k=v[1],N=Object(a.useState)(Fe),C=Object(r.a)(N,2),w=C[0],S=C[1],y=function(){$().then((function(e){var t=e.data;t&&o(t)}))},E=function(e){ae(e).then((function(e){var t=e.data;t&&S(t)}))};Object(a.useState)((function(){localStorage.getItem("token")?(ie().then((function(e){var t=e.data;t&&p(t)})),y()):e.push(Te.login)}),[e]);var I=["ID Liquidaci\xf3n","Empleado","Fecha","Monto"].map((function(e,t){return Object(l.jsx)(f,{children:e},t)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Gesti\xf3n de liquidaciones"}),Object(l.jsx)("div",{className:"panel-form-simple",children:Object(l.jsx)(De,{empleado:g,listaEmpleados:b,actualizarCampos:function(e){var t=b.findIndex((function(t){return t.nombre===e}));k(b[t]),E(b[t])},actualizarCamposSueldo:function(e,t){var n=Object(u.a)(Object(u.a)({},w),{},Object(s.a)({},e,t));S(n)},actualizarSueldoEmpleado:function(){ne(w).then((function(){E()}))},liquidarEmpleado:function(){te(g).then((function(){return y()}))},liquidarTodos:function(){ee().then((function(){return y()}))},sueldoEmpleado:w})}),Object(l.jsx)(m,{encabezado:I,filas:c?c.map((function(e,t){return Object(l.jsxs)(h,{children:[Object(l.jsx)(x,{dato:e.id}),Object(l.jsx)(x,{dato:b[b.findIndex((function(t){return t.id===e.empleado.id}))].nombre}),Object(l.jsx)(x,{dato:e.fecha}),Object(l.jsx)(x,{dato:e.monto})]},t)})):Object(l.jsx)(l.Fragment,{})})]})},Re=function(e){var t=e.logout;return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)(o.b,{className:"nav-links",to:Te.clientes,children:Object(l.jsx)("li",{children:"Clientes"})}),Object(l.jsx)(o.b,{className:"nav-links",to:Te.obras,children:Object(l.jsx)("li",{children:"Obras"})}),Object(l.jsx)(o.b,{className:"nav-links",to:Te.pagos,children:Object(l.jsx)("li",{children:"Pagos"})}),Object(l.jsx)(o.b,{className:"nav-links",to:Te.pedidos,children:Object(l.jsx)("li",{children:"Pedidos"})}),Object(l.jsx)(o.b,{className:"nav-links",to:Te.productos,children:Object(l.jsx)("li",{children:"Productos"})}),Object(l.jsx)(o.b,{className:"nav-links",to:Te.liquidacion,children:Object(l.jsx)("li",{children:"Liquidaci\xf3n"})}),Object(l.jsx)(o.b,{className:"nav-links",to:Te.login,onClick:function(){return t()},children:Object(l.jsx)("li",{children:"Cerrar Sesi\xf3n"})})]})})},Te=(n(68),{login:"/",clientes:"/page/clientes",obras:"/page/obras",productos:"/page/productos",pedidos:"/page/pedidos",pagos:"/page/pagos",liquidacion:"/page/liquidacion",logout:"/logout"});var Ue=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){c(null!==localStorage.getItem("token")&&void 0!==localStorage.getItem("token"))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(be.a,{position:"bottom-right",autoClose:2500,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!1,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!1}),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(o.a,{children:[n?Object(l.jsx)(Re,{logout:function(){be.b.success("Sesi\xf3n cerrada"),c(!1),localStorage.removeItem("token")}}):Object(l.jsx)(l.Fragment,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{exact:!0,path:Te.login,children:Object(l.jsx)(me,{logged:n,setLogged:c})}),Object(l.jsx)(i.a,{path:Te.clientes,component:Oe}),Object(l.jsx)(i.a,{path:Te.obras,component:ge}),Object(l.jsx)(i.a,{path:Te.productos,component:we}),Object(l.jsx)(i.a,{path:Te.pedidos,component:ze}),Object(l.jsx)(i.a,{path:Te.pagos,component:Pe}),Object(l.jsx)(i.a,{path:Te.liquidacion,component:Le})]})]})})]})},qe=function(){return Object(l.jsx)(Ue,{})};Object(c.render)(Object(l.jsx)(qe,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.69431c1e.chunk.js.map