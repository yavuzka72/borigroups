(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9734],{6422:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/grid/4cols",function(){return a(6125)}])},5879:function(e,s,a){"use strict";var n=a(2477),l=a(8408);function c(e){var s=e.title,a=e.subTitle;return(0,n.jsx)("div",{className:"page-header text-center",style:{backgroundImage:"url(images/page-header-bg.jpg)"},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("h1",{className:"page-title",children:[s,(0,n.jsx)("span",{children:a})]})})})}s.Z=l.memo(c)},6044:function(e,s,a){"use strict";var n=a(4729),l=a(2477),c=a(4416),t=a(2679),r=a(9845),i=a(7788),o=a(257);s.Z=(0,c.$j)(null,(0,n.Z)({},o.Nw))((function(e){var s=e.post,a=e.adClass,n=void 0===a?"":a,c=e.isContent,o=void 0===c||c,d=e.isAuthor,h=void 0===d||d,m=new Date(s.date);return(0,l.jsxs)("article",{className:"entry ".concat(n),children:[s.image.length<=1?(0,l.jsx)("figure",{className:"entry-media ".concat("video"==s.type?"entry-video":""),style:{paddingTop:"".concat(s.image[0].height/s.image[0].width*100,"%")},children:"video"!==s.type?(0,l.jsxs)(r.Z,{href:"/blog/single/default/".concat(s.slug),children:[(0,l.jsx)("div",{className:"lazy-overlay"}),(0,l.jsx)(t.LazyLoadImage,{alt:"Post",src:"http://176.53.65.213:8000/api/"+s.image[0].url,threshold:500,effect:"blur",height:"auto"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.Z,{href:"/blog/single/default/".concat(s.slug),children:[(0,l.jsx)("div",{className:"lazy-overlay"}),(0,l.jsx)(t.LazyLoadImage,{alt:"Post",src:"http://176.53.65.213:8000/api/"+s.image[0].url,threshold:500,effect:"blur",height:"auto"})]}),(0,l.jsx)("a",{href:"https://www.youtube.com/watch?v=vBPgmASQ1A0",onClick:function(s){s.preventDefault(),e.showVideo()},className:"btn-video btn-iframe",children:(0,l.jsx)("i",{className:"icon-play"})})]})}):(0,l.jsx)("figure",{className:"entry-media",style:{paddingTop:"".concat(s.image[0].height/s.image[0].width*100,"%")},children:(0,l.jsx)(i.Z,{adClass:"owl-simple owl-light owl-nav-inside cols-1",options:{dots:!1,nav:!0,responsive:{992:{nav:!0}}},children:s.image.map((function(e,a){return(0,l.jsxs)(r.Z,{href:"/blog/single/default/".concat(s.slug),children:[(0,l.jsx)("div",{className:"lazy-overlay"}),(0,l.jsx)(t.LazyLoadImage,{alt:"Post",src:"".concat("http://176.53.65.213:8000/api/"+e.url),threshold:500,effect:"blur"})]},a)}))})}),(0,l.jsxs)("div",{className:"entry-body",children:[(0,l.jsxs)("div",{className:"entry-meta",children:[h?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("span",{className:"entry-author",children:["by ",(0,l.jsx)(r.Z,{href:"/blog/single/default/".concat(s.slug),children:s.author})]}),(0,l.jsx)("span",{className:"meta-separator",children:"|"})]}):"",(0,l.jsx)(r.Z,{href:"/blog/single/default/".concat(s.slug),children:m.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})}),(0,l.jsx)("span",{className:"meta-separator",children:"|"}),(0,l.jsxs)(r.Z,{href:"/blog/single/default/".concat(s.slug),children:[s.comments," Comments"]})]}),(0,l.jsx)("h2",{className:"entry-title",children:(0,l.jsx)(r.Z,{href:"/blog/single/default/".concat(s.slug),children:s.title})}),(0,l.jsxs)("div",{className:"entry-cats",children:["in\xa0",s.blog_categories.map((function(e,a){return(0,l.jsxs)("span",{children:[(0,l.jsx)(r.Z,{href:{pathname:"/blog/classic",query:{category:e.slug}},children:e.name}),a<s.blog_categories.length-1?", ":""]},a)}))]}),o?(0,l.jsxs)("div",{className:"entry-content",children:[(0,l.jsx)("p",{children:s.content}),(0,l.jsx)(r.Z,{href:"/blog/single/default/".concat(s.slug),className:"read-more",children:"Continue Reading"})]}):""]})]})}))},6125:function(e,s,a){"use strict";a.r(s);var n=a(8764),l=a(2477),c=a(8460),t=a(3169),r=a(8408),i=a(9845),o=a(5879),d=a(6044),h=a(3684),m=a(4727);s.default=(0,h.Z)({ssr:!1})((function(){var e=(0,n.Z)((0,c.t)(m.AU),2),s=e[0],a=e[1],h=a.data,g=a.loading,u=a.error,j=(0,t.useRouter)(),x=(0,t.useRouter)().query,p=h&&h.postsByPage.data;return(0,r.useEffect)((function(){s({variables:{page:"grid-4",category:x.category}})}),[x.category]),u?(0,l.jsx)("div",{}):(0,l.jsxs)("div",{className:"main",children:[(0,l.jsx)(o.Z,{title:"Blog Grid 4 Columns",subTitle:"Blog"}),(0,l.jsx)("nav",{className:"breadcrumb-nav",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("ol",{className:"breadcrumb",children:[(0,l.jsx)("li",{className:"breadcrumb-item",children:(0,l.jsx)(i.Z,{href:"/",children:"Home"})}),(0,l.jsx)("li",{className:"breadcrumb-item",children:(0,l.jsx)(i.Z,{href:"/blog/classic",children:"Blog"})}),(0,l.jsx)("li",{className:"breadcrumb-item active",children:"Grid 4 Columns"})]})})}),(0,l.jsx)("div",{className:"page-content",children:(0,l.jsx)("div",{className:"container skeleton-body ".concat(g?"":"loaded"),children:g||!p?(0,l.jsx)("div",{className:"row",children:[1,2,3,4,5,6].map((function(e){return(0,l.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:(0,l.jsx)("div",{className:"skel-grid-post"})},e)}))}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("nav",{className:"blog-nav",children:(0,l.jsxs)("ul",{className:"menu-cat entry-filter justify-content-center",children:[(0,l.jsx)("li",{className:"".concat(x.category?"":"active"),children:(0,l.jsxs)(i.Z,{href:{pathname:j.pathname,query:{category:""}},children:["All Blog Posts",(0,l.jsx)("span",{children:"8"})]})}),(0,l.jsx)("li",{className:"".concat("lifestyle"==x.category?"active":""),children:(0,l.jsxs)(i.Z,{href:{pathname:j.pathname,query:{category:"lifestyle"}},children:["Lifestyle",(0,l.jsx)("span",{children:"3"})]})}),(0,l.jsx)("li",{className:"".concat("shopping"==x.category?"active":""),children:(0,l.jsxs)(i.Z,{href:{pathname:j.pathname,query:{category:"shopping"}},children:["Shopping",(0,l.jsx)("span",{children:"1"})]})}),(0,l.jsx)("li",{className:"".concat("travel"==x.category?"active":""),children:(0,l.jsxs)(i.Z,{href:{pathname:j.pathname,query:{category:"travel"}},children:["Travel",(0,l.jsx)("span",{children:"3"})]})}),(0,l.jsx)("li",{className:"".concat("hobbies"==x.category?"active":""),children:(0,l.jsxs)(i.Z,{href:{pathname:j.pathname,query:{category:"hobbies"}},children:["Hobbies",(0,l.jsx)("span",{children:"2"})]})}),(0,l.jsx)("li",{className:"".concat("fashion"==x.category?"active":""),children:(0,l.jsxs)(i.Z,{href:{pathname:j.pathname,query:{category:"fashion"}},children:["Fashion",(0,l.jsx)("span",{children:"2"})]})})]})}),(0,l.jsx)("div",{className:"row",children:0==p.length?(0,l.jsx)("p",{className:"blogs-info",children:"No posts were found matching your selection."}):p.map((function(e,s){return(0,l.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:(0,l.jsx)(d.Z,{post:e,adClass:"text-center",isAuthor:!1})},s)}))})]})})})]})}))}},function(e){e.O(0,[9774,2888,179],(function(){return s=6422,e(e.s=s);var s}));var s=e.O();_N_E=s}]);