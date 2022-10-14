(function() {
var exports = {};
exports.id = 4817;
exports.ids = [4817];
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

/***/ 4834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7882);
/* harmony import */ var _components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4590);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4733);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function BlogGrid2Cols() {
  const [getPosts, {
    data,
    loading,
    error
  }] = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useLazyQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_7__/* .GET_POSTS_BY_PAGE */ .AU);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;
  const posts = data && data.postsByPage.data;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getPosts({
      variables: {
        page: 'grid-2',
        category: query.category
      }
    });
  }, [query.category]);

  if (error) {
    return __jsx("div", null);
  }

  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Blog Grid 2 Columns",
    subTitle: "Blog"
  }), __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/blog/classic"
  }, "Blog")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Grid 2 Columns")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: `container skeleton-body ${loading ? '' : 'loaded'}`
  }, loading || !posts ? __jsx("div", {
    className: "row"
  }, [1, 2, 3, 4, 5, 6].map(item => __jsx("div", {
    className: "col-sm-6",
    key: item
  }, __jsx("div", {
    className: "skel-grid-post"
  })))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("nav", {
    className: "blog-nav"
  }, __jsx("ul", {
    className: "menu-cat entry-filter justify-content-center"
  }, __jsx("li", {
    className: `${query.category ? '' : 'active'}`
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        category: ''
      }
    }
  }, "All Blog Posts", __jsx("span", null, "6"))), __jsx("li", {
    className: `${query.category == 'lifestyle' ? 'active' : ''}`
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        category: 'lifestyle'
      }
    }
  }, "Lifestyle", __jsx("span", null, "3"))), __jsx("li", {
    className: `${query.category == 'shopping' ? 'active' : ''}`
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        category: 'shopping'
      }
    }
  }, "Shopping", __jsx("span", null, "1"))), __jsx("li", {
    className: `${query.category == 'travel' ? 'active' : ''}`
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        category: 'travel'
      }
    }
  }, "Travel", __jsx("span", null, "2"))), __jsx("li", {
    className: `${query.category == 'hobbies' ? 'active' : ''}`
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        category: 'hobbies'
      }
    }
  }, "Hobbies", __jsx("span", null, "2"))), __jsx("li", {
    className: `${query.category == 'fashion' ? 'active' : ''}`
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        category: 'fashion'
      }
    }
  }, "Fashion", __jsx("span", null, "1"))))), __jsx("div", {
    className: "row"
  }, posts.length == 0 ? __jsx("p", {
    className: "blogs-info"
  }, "No posts were found matching your selection.") : posts.map((post, index) => __jsx("div", {
    className: "col-sm-6",
    key: index
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: post,
    adClass: "text-center"
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
  ssr: false
})(BlogGrid2Cols));

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,4590], function() { return __webpack_exec__(4834); });
module.exports = __webpack_exports__;

})();