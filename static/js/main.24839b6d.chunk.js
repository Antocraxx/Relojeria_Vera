(this["webpackJsonpshoprelojes.ec"]=this["webpackJsonpshoprelojes.ec"]||[]).push([[0],{18:function(e,c,s){},19:function(e,c,s){},23:function(e,c,s){"use strict";s.r(c);var t=s(4),a=s.n(t),n=s(13),r=s.n(n),i=(s(18),s(19),s(1));var j=function(){return Object(i.jsx)("div",{className:"cont-divisor center",children:Object(i.jsx)("h2",{children:"Inventario Relojes "})})},d=s(9),o=s(21).default;s(24);!o.apps.length&&o.initializeApp({apiKey:"AIzaSyAWm3ufmkJpDQZmQC1duExp4MTS7PlrUlU",authDomain:"shoprelojes-a5ef4.firebaseapp.com",projectId:"shoprelojes-a5ef4",storageBucket:"shoprelojes-a5ef4.appspot.com",messagingSenderId:"1036965777062",appId:"1:1036965777062:web:830ad8099f2a3181b92e67"});var l=o.firestore();function h(){var e=Object(t.useState)([]),c=Object(d.a)(e,2),s=c[0],a=c[1];return Object(t.useEffect)((function(){var e=[];l.collection("Productos").onSnapshot((function(c){c.forEach((function(c){e.push(c.data())})),a(e)}))}),[]),{Info:s}}var b=function(){return Object(i.jsx)("div",{className:"cont-boton-principal",children:Object(i.jsxs)("a",{href:"https://wa.me/5930960847188/?text=Hola!,me interesa el producto, como procederia la compra",target:"__blank",className:"",children:["Comprar",Object(i.jsx)("span",{children:Object(i.jsx)("i",{class:"bx bxl-whatsapp"})})]})})};s.p;var p=function(e){return Object(i.jsx)("div",{className:"cont-card ",children:Object(i.jsxs)("div",{className:"contenido-card  ",children:[Object(i.jsx)("div",{className:"fav-card",children:Object(i.jsx)("i",{class:"bx bx-heart"})}),Object(i.jsx)("div",{className:"img-card",children:Object(i.jsx)("img",{src:e.url,alt:""})}),Object(i.jsx)("div",{className:"preciocard",children:Object(i.jsxs)("p",{children:["$ ",e.precio," "]})}),Object(i.jsx)("div",{className:"botoncard",children:Object(i.jsx)(b,{})})]})})};var x=function(){var e=h().Info;return Object(i.jsxs)("div",{className:"cont-productos",children:[Object(i.jsx)("div",{className:"cont-header-producto",children:Object(i.jsx)(j,{})}),Object(i.jsxs)("div",{className:"cont-cards-productos",children:[Object(i.jsx)("div",{className:"center",children:Object(i.jsx)("h3",{children:"Productos"})}),Object(i.jsx)("div",{className:"map-cards",children:e.map((function(e){return Object(i.jsx)(p,{url:e.url,precio:e.precio},e.id)}))})]})]})};var O=function(){return Object(i.jsx)("div",{className:"cont-header",children:Object(i.jsxs)("div",{className:"contenido-head",children:[Object(i.jsxs)("div",{className:"align-izquierda",children:[Object(i.jsxs)("div",{className:"title-logo",children:[Object(i.jsx)("span",{className:"t",children:"T"}),"-Reloj",Object(i.jsx)("span",{children:".ec"})]}),Object(i.jsx)("div",{className:"nav-head",children:Object(i.jsxs)("nav",{children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"",children:"Relojes"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"",children:"Productos"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"",children:"Inventario"})})]})})]}),Object(i.jsx)("div",{className:"herramientas-shop"})]})})},u=s.p+"static/media/Banner.dc6ce5ff.png",m=function(){return Object(i.jsx)("article",{children:Object(i.jsx)("img",{src:u,alt:""})})};var f=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsx)(O,{})}),Object(i.jsx)(m,{}),Object(i.jsx)(x,{})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;s(e),t(e),a(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),v()}},[[23,1,2]]]);
//# sourceMappingURL=main.24839b6d.chunk.js.map