(this.webpackJsonppaktolus=this.webpackJsonppaktolus||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),s=n(13),l=(n(38),n(39),n(56)),i=n(58),j=n(54),d=n(59),b=n(60),u=(n(40),n(2)),h=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){localStorage.getItem("username")&&r(!0)}),[]);return Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)("div",{className:"nav-logo",children:Object(u.jsx)("div",{className:"nav-logo-text",children:"Kasino"})}),Object(u.jsxs)("div",{className:"nav-menu",children:[Object(u.jsx)("div",{className:"nav-menu-item",children:Object(u.jsxs)("div",{id:"balance",children:["$",e.balance]})}),c?Object(u.jsx)("span",{onClick:function(){e.deleteData(),r(!1)},id:"login-avatar",className:"p-2 rounded-circle",title:"Logout",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"#ffffff",className:"bi bi-person-fill",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})})}):Object(u.jsx)("div",{className:"nav-menu-item",children:Object(u.jsx)(l.a,{trigger:"click",placement:"bottom",overlay:Object(u.jsx)(i.a,{id:"login-popover",children:Object(u.jsx)(i.a.Content,{children:Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),localStorage.setItem("username",t.target.username.value),e.onUserChange(t.target.username.value),console.log(t.target.username.value),localStorage.setItem("balance",e.balance),r(!0)},children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(d.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"username",name:"username",id:"username",required:!0}),Object(u.jsx)(j.a.Append,{children:Object(u.jsx)(b.a,{type:"submit",variant:"outline-dark",children:"Go"})})]})})})}),children:Object(u.jsx)("button",{className:"my-btn my-btn-dark nav-button",children:"Login"})})})]})]})},O=n(32),m=(n(47),n(57)),x=n(55),f=function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.data.id}),Object(u.jsx)("td",{children:e.data.slot[0]}),Object(u.jsx)("td",{children:e.data.slot[1]}),Object(u.jsx)("td",{children:e.data.slot[2]}),Object(u.jsx)("td",{children:e.data.time})]})},g=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),l=Object(s.a)(o,2),i=l[0],j=l[1],d=Object(a.useState)([0,0,0]),h=Object(s.a)(d,2),g=h[0],v=h[1],p=function(t){var n=Math.round(8*Math.random())+1,a=Math.round(8*Math.random())+1,o=Math.round(8*Math.random())+1;t&&(n=7,a=7,o=7),v([n,a,o]),n===a&&a===o&&n===o&&7===n?e.changeBalance(10):n===a&&a===o&&o===n?e.changeBalance(5):-1===[n,a].indexOf(o)&&-1===[a,o].indexOf(n)&&-1===[n,o].indexOf(a)||e.changeBalance(.5);var s,l=new Date,i="".concat(l.getDate(),"/").concat(l.getMonth(),"/").concat(l.getFullYear()," ").concat(l.getHours(),":").concat(l.getMinutes(),":").concat(l.getSeconds());s={id:c.length+1,slot:[n,a,o],time:i},r([].concat(Object(O.a)(c),[s]))};return Object(u.jsx)("div",{className:"bg-dark text-light py-2",id:"content",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(b.a,{className:"mb-3",variant:"outline-light",size:"lg",block:!0,onClick:function(){return j(!0)},children:"Play"}),Object(u.jsxs)(m.a,{show:i,onHide:function(){return j(!1)},children:[Object(u.jsx)(m.a.Body,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"slots border",children:g.map((function(e,t){return Object(u.jsx)("div",{className:"w-100 text-center slot-item",children:e},t)}))})})}),Object(u.jsxs)(m.a.Footer,{children:[Object(u.jsx)(b.a,{variant:"outline-dark",onClick:function(){return p(!1)},children:"Play"}),Object(u.jsx)(b.a,{variant:"outline-warning",onClick:function(){return p(!0)},children:Object(u.jsx)("i",{children:"Debug"})}),Object(u.jsx)(b.a,{variant:"outline-danger",onClick:function(){return j(!1)},children:"Close"})]})]}),Object(u.jsxs)(x.a,{bordered:!0,hover:!0,variant:"dark",className:"text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{style:{width:"50px",minWidth:"50px"},children:"#"}),Object(u.jsx)("th",{colSpan:"3",children:"Slots"}),Object(u.jsx)("th",{children:"Time"})]})}),Object(u.jsx)("tbody",{children:c.map((function(e){return Object(u.jsx)(f,{data:e},e.id)}))})]})]})})},v=(n(48),function(){return Object(u.jsxs)("div",{id:"footer",children:[Object(u.jsx)("div",{id:"footer-copyright",children:"Copyright \xa9 Paktolus Group LLC. All rights reserved"}),Object(u.jsxs)("div",{id:"footer-links",children:[Object(u.jsx)("a",{href:"http://paktolus.com",target:"_blank",rel:"noopener noreferrer",children:"Home"}),Object(u.jsx)("a",{href:"http://paktolus.com/about-us",target:"_blank",rel:"noopener noreferrer",children:"About Us"}),Object(u.jsx)("a",{href:"http://paktolus.com/services",target:"_blank",rel:"noopener noreferrer",children:"Services"}),Object(u.jsx)("a",{href:"http://paktolus.com/portfolio",target:"_blank",rel:"noopener noreferrer",children:"Portfolio"}),Object(u.jsx)("a",{href:"http://jobs.paktolus.com/",target:"_blank",rel:"noopener noreferrer",children:"Join Our Team"}),Object(u.jsx)("a",{href:"http://paktolus.com/contact-us",target:"_blank",rel:"noopener noreferrer",children:"Contact Us"})]})]})});var p=function(){var e=Object(a.useState)((Math.round(1e4)/100).toFixed(2)),t=Object(s.a)(e,2),n=t[0],c=t[1],r=function(e){return c((Math.round(100*(Number(n)+e))/100).toFixed(2))},o=Object(a.useState)(""),l=Object(s.a)(o,2),i=l[0],j=l[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("balance"),t=localStorage.getItem("username");e&&c(e),null===t&&""===t||j(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("balance",n),localStorage.setItem("username",i)}),[n,i]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(h,{balance:n,username:i,onUserChange:function(e){return j(e)},onChange:r,deleteData:function(){c((Math.round(1e4)/100).toFixed(2)),j(""),localStorage.removeItem("username"),localStorage.removeItem("balance")}}),Object(u.jsx)(g,{changeBalance:r,balance:n}),Object(u.jsx)(v,{})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b1fe7130.chunk.js.map