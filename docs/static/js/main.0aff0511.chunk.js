(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),i=n(2),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],u=r[1];return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("h2",{children:"Add Category"}),Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>0&&(t((function(e){return[a].concat(Object(s.a)(e))})),u(""))},children:Object(o.jsx)("input",{type:"text",value:a,placeholder:"Write a category",onChange:function(e){u(e.target.value)}})})]})},j=n(10),d=function(e){e.id;var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})},l=n(6),b=n.n(l),p=n(8),f=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,c,r,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?api_key=TlVGHv8IzaJuuRcEdKKW6g8PFum7Gdh9&q=".concat(encodeURI(t),"&limit=10"),console.log("fetching url:",n),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,a=r.data,i=a.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(e).then((function(e){console.log(e),a({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,a=n.loading;return Object(o.jsxs)(c.Fragment,{children:[a&&Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)("h3",{children:t}),Object(o.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(o.jsx)(d,Object(j.a)({},e),e.id)}))})]})},g=function(){var e=Object(c.useState)(["welcome"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("h1",{children:"Gif Expert App"}),Object(o.jsx)(u,{setCategories:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e,t){return console.log("category received:",e),Object(o.jsx)(h,{category:e},t)}))})]})};n(17);a.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0aff0511.chunk.js.map