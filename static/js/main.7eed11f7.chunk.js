(this["webpackJsonptest-crazy-p"]=this["webpackJsonptest-crazy-p"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),i=n.n(s),r=(n(9),n(2)),o=n(0),l=function(e){var t=e.pages,n=e.currentPage,a=e.onNextPage,c=e.onPrevPage,s=e.isBtnNextDisabled,i=e.isBtnPrevDisabled,r=e.curPageActive,l=e.curPage;return Object(o.jsx)("nav",{"aria-label":"...",children:Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:"".concat(i," page-item"),children:Object(o.jsx)("button",{className:"page-link",onClick:function(){c()},children:"Previous"})}),t.map((function(e){return Object(o.jsx)("li",{className:l===e?"".concat(r," page-item"):"page-item",children:Object(o.jsx)("button",{className:"page-link",onClick:function(){return n(e)},children:e})},e)})),Object(o.jsx)("li",{className:"".concat(s," page-item"),children:Object(o.jsx)("button",{className:"page-link",onClick:function(){a()},children:"Next"})})]})})},j=(n(11),function(e){var t=e.searchValue;return Object(o.jsx)("div",{className:"search",children:Object(o.jsx)("input",{type:"text",placeholder:"Enter FirstName/SecondName/Email/Phone",className:"search__input",onChange:function(e){t(e)}})})}),u=n.p+"static/media/Arrow.d9123632.svg",b=(n(12),function(e){var t=e.arrowDirection;return Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:t,src:u,alt:"#"})})}),d=(n(13),function(){return Object(o.jsx)("div",{className:"spinner-border text-primary m-5",role:"status",children:Object(o.jsx)("span",{className:"sr-only"})})}),O=(n(14),function(e){var t=e.personInfo;return Object(o.jsxs)("div",{className:"string",children:[Object(o.jsx)("span",{className:"string__info",children:t.id}),Object(o.jsx)("span",{className:"string__info",children:t.firstName}),Object(o.jsx)("span",{className:"string__info",children:t.lastName}),Object(o.jsx)("span",{className:"string__info",children:t.email}),Object(o.jsx)("span",{className:"string__info",children:t.phone})]})}),f=function(e){var t=e.info;return Object(o.jsx)("div",{className:"TableBody",children:t.map((function(e){return Object(o.jsx)(O,{personInfo:e},e.phone)}))})},m=(n(15),function(e){var t=e.info,n=e.isLoading,c=e.sortData,s=e.arrowDirection,i=Object(a.useState)(),l=Object(r.a)(i,2),j=l[0],u=l[1],O=function(e){c(e),u(e)};return Object(o.jsxs)("div",{className:"Table",children:[Object(o.jsxs)("div",{className:"table-head",children:[Object(o.jsxs)("span",{className:"table-head__info",onClick:function(){return O("id")},children:["id","id"===j?Object(o.jsx)(b,{arrowDirection:s}):null]}),Object(o.jsxs)("span",{className:"table-head__info",onClick:function(){return O("FirstName")},children:["FirstName","FirstName"===j?Object(o.jsx)(b,{arrowDirection:s}):null]}),Object(o.jsxs)("span",{className:"table-head__info",onClick:function(){return O("SecondName")},children:["SecondName","SecondName"===j?Object(o.jsx)(b,{arrowDirection:s}):null]}),Object(o.jsxs)("span",{className:"table-head__info",onClick:function(){return O("email")},children:["email","email"===j?Object(o.jsx)(b,{arrowDirection:s}):null]}),Object(o.jsxs)("span",{className:"table-head__info",onClick:function(){return O("phone")},children:["phone","phone"===j?Object(o.jsx)(b,{arrowDirection:s}):null]})]}),n?Object(o.jsx)(d,{}):Object(o.jsx)(f,{info:t})]})}),x=(n(16),function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!0),i=Object(r.a)(s,2),u=i[0],b=i[1],d=Object(a.useState)(!1),O=Object(r.a)(d,2),f=O[0],x=O[1],h=Object(a.useState)(0),p=Object(r.a)(h,2),N=p[0],g=p[1],v=Object(a.useState)(1),w=Object(r.a)(v,2),_=w[0],S=w[1],P=Object(a.useState)(""),C=Object(r.a)(P,2),D=C[0],k=C[1],y=Object(a.useState)(""),L=Object(r.a)(y,2),B=L[0],E=L[1],A=Object(a.useState)(""),F=Object(r.a)(A,2),I=F[0],z=F[1],J=Object(a.useState)(!0),M=Object(r.a)(J,2),T=M[0],V=M[1],q=Object(a.useState)("arrow"),G=Object(r.a)(q,2),H=G[0],K=G[1],Q=Object(a.useState)(""),R=Object(r.a)(Q,2),U=R[0],W=R[1],X=50*_,Y=X-50;Object(a.useEffect)((function(){fetch("http://www.filltext.com/?rows=231&id={number|200}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}").then((function(e){return e.json()})).then((function(e){c(e),b(!1),x(!0)}))}),[]);for(var Z=[],$=1;$<=N;$++)Z.push($);var ee=U?n.filter((function(e){return e.firstName.toLowerCase().includes(U)||e.lastName.toLowerCase().includes(U)||e.email.toLowerCase().includes(U)||e.phone.toLowerCase().includes(U)})):n;Object(a.useEffect)((function(){if(f){var e=Math.ceil(ee.length/50);g(e)}}),[f,n.length,ee]);var te=ee.slice(Y,X);return Object(o.jsxs)("div",{className:"Layout",children:[Object(o.jsx)(j,{searchValue:function(e){W(e.target.value.toLowerCase())}}),Object(o.jsx)(m,{info:te,isLoading:u,sortData:function(e){var t,a=n.concat();T?(t=a.sort((function(t,n){return t[e]>n[e]?1:-1})),K("arrow")):(t=a.reverse((function(t,n){return t[e]>n[e]?1:-1})),K("arrow arrow--sort")),c(t),V(!T)},arrowDirection:H}),f&&n.length>50&&Object(o.jsx)(l,{pages:Z,currentPage:function(e){S(e),E(""),k(""),z("active")},onNextPage:function(){_>N-1?k("disabled"):(S(_+1),E(""))},onPrevPage:function(){_<2?E("disabled"):(S(_-1),k(""))},isBtnNextDisabled:D,isBtnPrevDisabled:B,curPageActive:I,curPage:_})]})});var h=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(x,{})})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.7eed11f7.chunk.js.map