(function() {
var exports = {};
exports.id = 7870;
exports.ids = [7870];
exports.modules = {

/***/ 7882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function PageHeader(props) {
  const {
    title,
    subTitle
  } = props;
  return __jsx("div", {
    className: "page-header text-center",
    style: {
      backgroundImage: `url(images/page-header-bg.jpg)`
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("h1", {
    className: "page-title"
  }, title, __jsx("span", null, subTitle))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(PageHeader));

/***/ }),

/***/ 2295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6558);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9058);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sticky_box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7882);
/* harmony import */ var _components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4590);
/* harmony import */ var _components_partials_blog_sidebar_blog_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6521);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4733);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);












function BlogMasonrySidebar() {
  const [getPosts, {
    data,
    loading,
    error
  }] = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_10__/* .GET_POSTS_BY_PAGE */ .AU);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const posts = data && data.postsByPage.data;
  const categories = data && data.postsByPage.categories;
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  let iso;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getPosts({
      variables: {
        page: 'masonry-sidebar',
        category: query.category
      }
    });
  }, [query.category]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (posts && posts.length > 0) {
      imagesloaded__WEBPACK_IMPORTED_MODULE_3___default()('.page-content').on('done', async function () {
        const Isotope = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7613, 23))).default;
        iso = new Isotope(ref.current, {
          itemSelector: '.grid-item'
        });
      });
    }
  }, [posts]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);else setToggle(false);
  }

  function toggleSidebar() {
    if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
      document.querySelector('body').classList.remove('sidebar-filter-active');
    } else {
      document.querySelector('body').classList.add('sidebar-filter-active');
    }
  }

  function hideSidebar() {
    document.querySelector('body').classList.remove('sidebar-filter-active');
  }

  if (error) {
    return __jsx("div", null);
  }

  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    title: "Blog Masonry Sidebar",
    subTitle: "Blog"
  }), __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    href: "/blog/classic"
  }, "Blog")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Masonry Sidebar")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: `container skeleton-body ${loading ? '' : 'loaded'}`
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-9"
  }, loading || !posts ? __jsx("div", {
    className: "row"
  }, [1, 2, 3, 4, 5, 6].map(item => __jsx("div", {
    className: "col-sm-6",
    key: item
  }, __jsx("div", {
    className: "skel-grid-post"
  })))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, posts.length == 0 ? __jsx("div", {
    className: "row"
  }, __jsx("p", {
    className: "blogs-info"
  }, "No posts were found matching your selection.")) : __jsx("div", {
    className: "row",
    ref: ref
  }, posts.map((post, index) => __jsx("div", {
    className: `col-sm-6 grid-item`,
    key: index
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    post: post,
    adClass: "text-center"
  })))))), __jsx("div", {
    className: `col-lg-3 skel-shop-sidebar skeleton-body ${!loading ? 'loaded' : ''}`
  }, __jsx("div", {
    className: "skel-widget"
  }), __jsx("div", {
    className: "skel-widget"
  }), __jsx("div", {
    className: "skel-widget"
  }), __jsx("div", {
    className: "skel-widget"
  }), __jsx((react_sticky_box__WEBPACK_IMPORTED_MODULE_4___default()), {
    className: "sticky-content",
    offsetTop: 70
  }, __jsx(_components_partials_blog_sidebar_blog_sidebar__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    categories: categories,
    toggle: toggle
  }), toggle ? __jsx("button", {
    className: "sidebar-fixed-toggler right",
    onClick: toggleSidebar
  }, __jsx("i", {
    className: "icon-cog"
  })) : '', __jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSidebar
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)({
  ssr: false
})(BlogMasonrySidebar));

/***/ }),

/***/ 7530:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ 806:
/***/ (function(module) {

"use strict";
module.exports = require("apollo-boost");;

/***/ }),

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 6558:
/***/ (function(module) {

"use strict";
module.exports = require("imagesloaded");;

/***/ }),

/***/ 7613:
/***/ (function(module) {

"use strict";
module.exports = require("isotope-layout");;

/***/ }),

/***/ 5766:
/***/ (function(module) {

"use strict";
module.exports = require("next-apollo");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 9058:
/***/ (function(module) {

"use strict";
module.exports = require("react-sticky-box");;

/***/ }),

/***/ 3643:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ 584:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,4590,6521], function() { return __webpack_exec__(2295); });
module.exports = __webpack_exports__;

})();