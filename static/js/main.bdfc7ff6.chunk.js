(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),l=n(16),a=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),j=r.NODE_ENV,b=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(b);var o=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=n(5),h=n(23),d=[{index:!0,label:"Rutvik Patel",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(4).then(n.t.bind(null,168,7))})),m=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Rutvik Patel"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:patelrutvik1702@gmail.com",children:"patelrutvik1702@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Rutvik. I like building things. I am a ",Object(c.jsx)("a",{href:"https://www.centennialcollege.ca/",children:"Centennial College"})," alumni, and the front end developer of ",Object(c.jsx)("a",{href:"https://cakepm.com",children:"Cake"}),". Before Cake I was at ",Object(c.jsx)("a",{href:"https://mitel.com",children:"Mitel"}),"."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Rutvik Patel ",Object(c.jsx)(u.b,{to:"/",children:"rutvikpatel.ca"}),"."]})]})]})},k=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(k,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Rutvik Patel",defaultTitle:"Rutvik Patel",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Rutvik Patel's personal website."};t.a=v},25:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(29)),l=n(30),a=n(31),s=n(32),r=n(33),j=n(34),b=n(35),o=[{link:"https://github.com/Rutvik17",label:"Github",icon:l.faGithub},{link:"https://www.instagram.com/iamrutvik_/",label:"Instagram",icon:a.faInstagram},{link:"https://www.linkedin.com/in/rutvik1702/",label:"LinkedIn",icon:s.faLinkedinIn},{link:"https://angel.co/u/rutvik-patel-4",label:"Angel List",icon:r.faAngellist},{link:"https://twitter.com/rutvik1702",label:"Twitter",icon:j.faTwitter},{link:"mailto:patelrutvik1702@gmail.com",label:"Email",icon:b.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),l=n.n(i),a=n(15),s=n(5),r=n(3),j=n(21),b=(n(48),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,165))}))),o=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,172))})),u=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,166))})),h=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,167))})),d=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,171))})),O=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,169))})),m=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,170))})),x=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:b}),Object(c.jsx)(r.a,{path:"/projects",component:d}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:o}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:h,status:404})]})})})},p=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(p,{}),f):Object(a.render)(Object(c.jsx)(p,{}),f)}},[[49,1,3]]]);
//# sourceMappingURL=main.bdfc7ff6.chunk.js.map