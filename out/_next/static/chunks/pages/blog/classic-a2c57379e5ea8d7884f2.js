(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2283],{7882:function(e,a,t){"use strict";var s=t(7294),l=s.createElement;function i(e){var a=e.title,t=e.subTitle;return l("div",{className:"page-header text-center",style:{backgroundImage:"url(images/page-header-bg.jpg)"}},l("div",{className:"container"},l("h1",{className:"page-title"},a,l("span",null,t))))}a.Z=s.memo(i)},4590:function(e,a,t){"use strict";var s=t(6265),l=t(7294),i=t(8216),n=t(2679),r=t(8335),o=t(4138),c=t(2870),u=l.createElement;function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}a.Z=(0,i.$j)(null,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){(0,s.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},c.Nw))((function(e){var a=e.post,t=e.adClass,s=void 0===t?"":t,i=e.isContent,c=void 0===i||i,d=e.isAuthor,m=void 0===d||d,g=new Date(a.date);return u("article",{className:"entry ".concat(s)},a.image.length<=1?u("figure",{className:"entry-media ".concat("video"==a.type?"entry-video":""),style:{paddingTop:"".concat(a.image[0].height/a.image[0].width*100,"%")}},"video"!==a.type?u(r.Z,{href:"/blog/single/default/".concat(a.slug)},u("div",{className:"lazy-overlay"}),u(n.LazyLoadImage,{alt:"Post",src:"http://176.53.65.213:8000/api/"+a.image[0].url,threshold:500,effect:"blur",height:"auto"})):u(l.Fragment,null,u(r.Z,{href:"/blog/single/default/".concat(a.slug)},u("div",{className:"lazy-overlay"}),u(n.LazyLoadImage,{alt:"Post",src:"http://176.53.65.213:8000/api/"+a.image[0].url,threshold:500,effect:"blur",height:"auto"})),u("a",{href:"https://www.youtube.com/watch?v=vBPgmASQ1A0",onClick:function(a){a.preventDefault(),e.showVideo()},className:"btn-video btn-iframe"},u("i",{className:"icon-play"})))):u("figure",{className:"entry-media",style:{paddingTop:"".concat(a.image[0].height/a.image[0].width*100,"%")}},u(o.Z,{adClass:"owl-simple owl-light owl-nav-inside cols-1",options:{dots:!1,nav:!0,responsive:{992:{nav:!0}}}},a.image.map((function(e,t){return u(r.Z,{href:"/blog/single/default/".concat(a.slug),key:t},u("div",{className:"lazy-overlay"}),u(n.LazyLoadImage,{alt:"Post",src:"".concat("http://176.53.65.213:8000/api/"+e.url),threshold:500,effect:"blur"}))})))),u("div",{className:"entry-body"},u("div",{className:"entry-meta"},m?u(l.Fragment,null,u("span",{className:"entry-author"},"by ",u(r.Z,{href:"/blog/single/default/".concat(a.slug)},a.author)),u("span",{className:"meta-separator"},"|")):"",u(r.Z,{href:"/blog/single/default/".concat(a.slug)},g.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})),u("span",{className:"meta-separator"},"|"),u(r.Z,{href:"/blog/single/default/".concat(a.slug)},a.comments," Comments")),u("h2",{className:"entry-title"},u(r.Z,{href:"/blog/single/default/".concat(a.slug)},a.title)),u("div",{className:"entry-cats"},"in\xa0",a.blog_categories.map((function(e,t){return u("span",{key:t},u(r.Z,{href:{pathname:"/blog/classic",query:{category:e.slug}}},e.name),t<a.blog_categories.length-1?", ":"")}))),c?u("div",{className:"entry-content"},u("p",null,a.content),u(r.Z,{href:"/blog/single/default/".concat(a.slug),className:"read-more"},"Continue Reading")):""))}))},7205:function(e,a,t){"use strict";var s=t(1163),l=t(7294),i=t(2679),n=t(8335),r=l.createElement;function o(e){var a=e.categories,t=void 0===a?[]:a,l=e.toggle,o=void 0!==l&&l,c=(0,s.useRouter)(),u=c.query;return r("div",{className:"sidebar mt-0 ".concat(o?"sidebar-filter px-3 right pt-3":"")},r("div",{className:"widget widget-search"},r("h3",{className:"widget-title"},"Search"),r("form",{action:"#",method:"get"},r("div",{className:"header-search-wrapper search-wrapper-wide"},r("label",{htmlFor:"ws",className:"sr-only"},"Search in blog"),r("input",{type:"search",className:"form-control",name:"ws",id:"ws",placeholder:"Search in blog",required:!0}),r("button",{type:"submit",className:"btn"},r("i",{className:"icon-search"}),r("span",{className:"sr-only"},"Search"))))),r("div",{className:"widget widget-cats"},r("h3",{className:"widget-title"},"Categories"),r("ul",null,c.pathname.includes("single")?t.map((function(e,a){return r("li",{key:a},r(n.Z,{href:{pathname:"/blog/classic/",query:{category:e.slug}},className:"".concat(u.category==e.slug?"active":""),scroll:!1},e.name,r("span",null,e.count)))})):t.map((function(e,a){return r("li",{key:a},r(n.Z,{href:{pathname:c.pathname,query:{category:e.slug}},className:"".concat(u.category==e.slug?"active":""),scroll:!1},e.name,r("span",null,e.count)))})))),r("div",{className:"widget"},r("h3",{className:"widget-title"},"Popular Posts"),r("ul",{className:"posts-list"},r("li",null,r("figure",{className:"position-relative"},r(n.Z,{href:"/blog/single/default/sed-adipiscing-ornare.",className:"w-100"},r("div",{className:"lazy-overlay"}),r(i.LazyLoadImage,{alt:"Post",src:"http://176.53.65.213:8000/api//uploads/post_1_b9361c0eac.jpg",threshold:500,effect:"blur",height:"80"}))),r("div",null,r("span",null,"Nov 22, 2018"),r("h4",null,r(n.Z,{href:"/blog/single/default/sed-adipiscing-ornare."},"Sed adipiscing ornare..")))),r("li",null,r("figure",{className:"position-relative"},r(n.Z,{href:"/blog/single/default/fusce-pellentesque-suscipit.",className:"w-100"},r("div",{className:"lazy-overlay"}),r(i.LazyLoadImage,{alt:"Post",src:"http://176.53.65.213:8000/api//uploads/post_4_be80872f91.jpg",threshold:500,effect:"blur",height:"80"}))),r("div",null,r("span",null,"Nov 19, 2018"),r("h4",null,r(n.Z,{href:"/blog/single/default/fusce-pellentesque-suscipit."},"Fusce pellentesque suscipit.")))),r("li",null,r("figure",{className:"position-relative"},r(n.Z,{href:"/blog/single/default/donec-nec-justo-eget-felis-facilisis-fermentum.",className:"w-100"},r("div",{className:"lazy-overlay"}),r(i.LazyLoadImage,{alt:"Post",src:"http://176.53.65.213:8000/api//uploads/post_5_3c9d9563f6.jpg",threshold:500,effect:"blur",height:"80"}))),r("div",null,r("span",null,"Nov 12, 2018"),r("h4",null,r(n.Z,{href:"/blog/single/default/donec-nec-justo-eget-felis-facilisis-fermentum."},"Donec nec justo eget felis facilisis  fermentum.")))),r("li",null,r("figure",{className:"position-relative"},r(n.Z,{href:"/blog/single/default/vivamus-vestibulum-ngtulla-necante.",className:"w-100"},r("div",{className:"lazy-overlay"}),r(i.LazyLoadImage,{alt:"Post",src:"http://176.53.65.213:8000/api//uploads/post_2_a2b4601de7.jpg",threshold:500,effect:"blur",height:"80"}))),r("div",null,r("span",null,"Nov 25, 2018"),r("h4",null,r(n.Z,{href:"/blog/single/default/vivamus-vestibulum-ngtulla-necante."},"Vivamus vestibulum ngtulla necante.")))))),r("div",{className:"widget widget-banner-sidebar"},r("div",{className:"banner-sidebar-title"},"ad box 280 x 280"),r("div",{className:"banner-sidebar banner-overlay"},r(n.Z,{href:"/shop/sidebar/3cols",className:"w-100"},r("div",{className:"lazy-overlay"}),r(i.LazyLoadImage,{alt:"banner",src:"images/blog/sidebar/banner.jpg",threshold:500,height:277,width:"280",effect:"opacity"})),r("div",{className:"banner-content text-left"},r("p",{className:"mb-1"},"online & in-store"),r("h3",{className:"banner-subtitle text-uppercase"},"Spring Sale"),r("h2",{className:"banner-title"},"Up to 60% off",r("br",null),"from $55"),r(n.Z,{href:"/shop/sidebar/3cols",className:"btn btn-outline btn-md btn-outline-white text-uppercase m-0"},"Shop Now")))),r("div",{className:"widget"},r("h3",{className:"widget-title"},"Browse Tags"),r("div",{className:"tagcloud"},r(n.Z,{href:"#"},"fashion"),r(n.Z,{href:"#"},"style"),r(n.Z,{href:"#"},"women"),r(n.Z,{href:"#"},"photography"),r(n.Z,{href:"#"},"travel"),r(n.Z,{href:"#"},"shopping"),r(n.Z,{href:"#"},"hobbies"))),r("div",{className:"widget widget-text"},r("h3",{className:"widget-title"},"About Blog"),r("div",{className:"widget-text-content"},r("p",null,"Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, pulvinar nunc sapien ornare nisl."))))}a.Z=l.memo(o)},8290:function(e,a,t){"use strict";t.r(a);var s=t(4121),l=t(8460),i=t(1163),n=t(7294),r=t(1243),o=t(8335),c=t(7882),u=t(4590),d=t(7205),m=t(5584),g=t(9638),f=t(6442),p=n.createElement;a.default=(0,m.Z)({ssr:!1})((function(){var e=(0,i.useRouter)(),a=(0,l.t)(g.AU),t=(0,s.Z)(a,2),m=t[0],h=t[1],b=h.data,v=h.loading,y=h.error,N=(0,n.useState)(!1),w=N[0],Z=N[1],k=b&&b.postsByPage.data,L=b&&b.postsByPage.categories;function P(){document.querySelector("body").offsetWidth<992?Z(!0):Z(!1)}return(0,n.useEffect)((function(){m({variables:{page:"classic",category:e.query.category}}),(0,f.qN)()}),[e.query]),(0,n.useEffect)((function(){return window.addEventListener("resize",P),P(),function(){window.removeEventListener("resize",P)}}),[]),y?p("div",null):p("div",{className:"main"},p(c.Z,{title:"Blog Classic",subTitle:"Blog"}),p("nav",{className:"breadcrumb-nav"},p("div",{className:"container"},p("ol",{className:"breadcrumb"},p("li",{className:"breadcrumb-item"},p(o.Z,{href:"/"},"Home")),p("li",{className:"breadcrumb-item"},p(o.Z,{href:"/blog/classic"},"Blog")),p("li",{className:"breadcrumb-item active"},"Classic")))),p("div",{className:"page-content"},p("div",{className:"container"},p("div",{className:"row skeleton-body ".concat(v?"":"loaded")},p("div",{className:"col-lg-9"},v||!k?[1,2,3,4,5,6].map((function(e){return p("div",{className:"skel-single-post",key:e})})):0==k.length?p("p",{className:"blogs-info"},"No posts were found matching your selection."):k.map((function(e,a){return p(u.Z,{post:e,key:a})}))),p("div",{className:"col-lg-3 skel-shop-sidebar skeleton-body ".concat(v?"":"loaded")},p("div",{className:"skel-widget"}),p("div",{className:"skel-widget"}),p("div",{className:"skel-widget"}),p("div",{className:"skel-widget"}),p(r.Z,{className:"sticky-content",offsetTop:70},p(d.Z,{categories:L,toggle:w}),w?p("button",{className:"sidebar-fixed-toggler right",onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")?document.querySelector("body").classList.remove("sidebar-filter-active"):document.querySelector("body").classList.add("sidebar-filter-active")}},p("i",{className:"icon-cog"})):"",p("div",{className:"sidebar-filter-overlay",onClick:function(){document.querySelector("body").classList.remove("sidebar-filter-active")}})))))))}))},511:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/classic",function(){return t(8290)}])}},function(e){e.O(0,[1243,9774,2888,179],(function(){return a=511,e(e.s=a);var a}));var a=e.O();_N_E=a}]);