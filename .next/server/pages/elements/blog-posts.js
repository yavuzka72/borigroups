(function() {
var exports = {};
exports.id = 6053;
exports.ids = [6053];
exports.modules = {

/***/ 9850:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7882);
/* harmony import */ var _components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6683);
/* harmony import */ var _components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4590);
/* harmony import */ var _components_features_posts_post_two__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6704);
/* harmony import */ var _components_features_posts_post_three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6059);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4733);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










function BlogPosts() {
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_9__/* .GET_ELEMENT_POSTS */ .Xg);
  const posts = data && data.elementPosts;

  if (error) {
    return __jsx("div", null, error);
  }

  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Blog Posts",
    subTitle: "Elements"
  }), __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/elements"
  }, "Elements")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Blog Posts")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container skeleton-body"
  }, __jsx("h2", {
    className: "title text-center mb-2"
  }, "Classic"), loading ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "skel-list-post mb-6"
  }), __jsx("div", {
    className: "skel-list-post"
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_features_posts_post_two__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    post: posts[0]
  }), __jsx(_components_features_posts_post_two__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    post: posts[1]
  })), __jsx("hr", {
    className: "mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-2"
  }, "Grid 2 Columns"), __jsx("div", {
    className: "row max-col-2"
  }, loading ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "col-md-6 skel-grid-post mb-2"
  }), __jsx("div", {
    className: "col-md-6 skel-grid-post"
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "col-md-6"
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: posts[5],
    adClass: "entry-grid text-center"
  })), __jsx("div", {
    className: "col-md-6"
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: posts[6],
    adClass: "entry-grid text-center"
  })))), __jsx("hr", {
    className: "mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-2"
  }, "Grid 3 Columns"), __jsx("div", {
    className: "row justify-content-center"
  }, loading ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "col-sm-6 col-md-4 skel-grid-post mb-2"
  }), __jsx("div", {
    className: "col-sm-6 col-md-4 skel-grid-post mb-2"
  }), __jsx("div", {
    className: "col-sm-6 col-md-4 skel-grid-post mb-2"
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "col-sm-6 col-md-4"
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: posts[7],
    adClass: "entry-grid text-center",
    isAuthor: false
  })), __jsx("div", {
    className: "col-sm-6 col-md-4"
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: posts[8],
    adClass: "entry-grid text-center",
    isAuthor: false
  })), __jsx("div", {
    className: "col-sm-6 col-md-4"
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: posts[9],
    adClass: "entry-grid text-center",
    isAuthor: false
  })))), __jsx("hr", {
    className: "mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-2"
  }, "Grid 4 Columns"), loading ? __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 skel-grid-post"
  }), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 skel-grid-post"
  }), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 skel-grid-post"
  }), __jsx("div", {
    className: "col-sm-6 col-md-4 col-lg-3 skel-grid-post"
  })) : __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-sm-6 col-lg-3"
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: posts[7],
    adClass: "entry-grid text-center",
    isAuthor: false
  })), __jsx("div", {
    className: "col-sm-6 col-lg-3"
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: posts[8],
    adClass: "entry-grid text-center",
    isAuthor: false
  })), __jsx("div", {
    className: "col-sm-6 col-lg-3"
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: posts[9],
    adClass: "entry-grid text-center",
    isAuthor: false
  })), __jsx("div", {
    className: "col-sm-6 col-lg-3"
  }, __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: posts[10],
    adClass: "entry-grid text-center",
    isAuthor: false
  }))), __jsx("hr", {
    className: "mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-2"
  }, "Grid 3 Columns ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Mask"), loading ? __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-sm-6 col-md-4 skel-mask-post"
  }), __jsx("div", {
    className: "col-sm-6 col-md-4 skel-mask-post"
  }), __jsx("div", {
    className: "col-sm-6 col-md-4 skel-mask-post"
  })) : __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-sm-6 col-md-4"
  }, __jsx(_components_features_posts_post_three__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    post: posts[11]
  })), __jsx("div", {
    className: "col-sm-6 col-md-4"
  }, __jsx(_components_features_posts_post_three__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    post: posts[12]
  })), __jsx("div", {
    className: "col-sm-6 col-md-4"
  }, __jsx(_components_features_posts_post_three__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    post: posts[13]
  }))))), __jsx(_components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
  ssr: true
})(BlogPosts));

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,6683,4590,9163,6704], function() { return __webpack_exec__(9850); });
module.exports = __webpack_exports__;

})();