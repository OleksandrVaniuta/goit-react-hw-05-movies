"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[586],{586:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,c=t(861),a=t(439),u=t(687),o=t.n(u),i=t(791),s=t(689),f=t(59),p=t(168),h=t(444),d=t(87),v=(0,h.ZP)(d.OL)(r||(r=(0,p.Z)(["\n  display: block\n  padding: 5px 2px;\n  font-size: 14px;\n  color: black;\n  text-decoration: none;\n  margin-right: 10px;\n\n  &: hover {\n   text-decoration: underline;\n   color: blue;\n  }\n\n"]))),l=t(184),x=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],r=n[1],u=(0,s.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,c.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.fetchDataHome().then((function(e){r(e.results)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(Error);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Trending today"}),(0,l.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.title,r=e.name;return t?(0,l.jsx)("li",{children:(0,l.jsx)(v,{to:"/movies/".concat(n),state:{from:u},children:t})},n):(0,l.jsx)("li",{children:(0,l.jsx)(v,{to:"/movies/".concat(n),state:{from:u},children:r})},n)}))})]})}},59:function(e,n,t){var r=t(861),c=t(687),a=t.n(c),u=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=d3e4c0ed0eb793f86b8fa6645a19cccc&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/all/day?api_key=d3e4c0ed0eb793f86b8fa6645a19cccc");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=d3e4c0ed0eb793f86b8fa6645a19cccc&language=en-US&page=1&include_adult=false&query=".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=d3e4c0ed0eb793f86b8fa6645a19cccc&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=d3e4c0ed0eb793f86b8fa6645a19cccc&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p={fetchDataDetails:u,fetchDataHome:o,fetchDataSearch:i,fetchDataCasts:s,fetchDataReviews:f};n.Z=p},861:function(e,n,t){function r(e,n,t,r,c,a,u){try{var o=e[a](u),i=o.value}catch(s){return void t(s)}o.done?n(i):Promise.resolve(i).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var u=e.apply(n,t);function o(e){r(u,c,a,o,i,"next",e)}function i(e){r(u,c,a,o,i,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=586.d8eea73e.chunk.js.map