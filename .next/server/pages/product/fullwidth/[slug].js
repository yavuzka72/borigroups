(function() {
var exports = {};
exports.id = 5518;
exports.ids = [5518];
exports.modules = {

/***/ 3757:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9058);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sticky_box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4733);
/* harmony import */ var _components_partials_product_breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2076);
/* harmony import */ var _components_partials_product_gallery_gallery_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(478);
/* harmony import */ var _components_partials_product_details_detail_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1547);
/* harmony import */ var _components_partials_product_info_tabs_info_three__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8062);
/* harmony import */ var _components_partials_product_sidebar_product_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7484);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);











function ProductFullwidth() {
  const slug = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.slug;
  if (!slug) return __jsx("div", null);
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_5__/* .GET_PRODUCT */ .N4, {
    variables: {
      slug
    }
  });
  const product = data && data.product.single;
  const related = data && data.product.related;
  const prev = data && data.product.prev;
  const next = data && data.product.next;

  if (error) {
    return __jsx("div", null);
  }

  return __jsx("div", {
    className: "main"
  }, __jsx(_components_partials_product_breadcrumb__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    prev: prev,
    next: next,
    current: "Sidebar",
    fullWidth: true
  }), __jsx("div", {
    className: "page-content pb-3"
  }, __jsx("div", {
    className: `container-fluid skeleton-body horizontal`
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-xxl-10 col-lg-9"
  }, __jsx("div", {
    className: "product-details-top mb-0"
  }, __jsx("div", {
    className: `row skel-pro-single fullwidth ${loading ? '' : 'loaded'}`
  }, __jsx("div", {
    className: "col-md-6 col-lg-7"
  }, __jsx("div", {
    className: "skel-product-gallery"
  }), !loading ? __jsx(_components_partials_product_gallery_gallery_default__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    product: product,
    adClass: ""
  }) : ""), __jsx("div", {
    className: "col-md-6 col-lg-5"
  }, __jsx("div", {
    className: "entry-summary row"
  }, __jsx("div", {
    className: "col-md-12"
  }, __jsx("div", {
    className: "entry-summary1 mt-2 mt-md-0"
  })), __jsx("div", {
    className: "col-md-12"
  }, __jsx("div", {
    className: "entry-summary2"
  }))), !loading ? __jsx(_components_partials_product_details_detail_one__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    product: product
  }) : "", __jsx(_components_partials_product_info_tabs_info_three__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    product: product
  }))))), __jsx("div", {
    className: "col-xxl-2 col-lg-3 skeleton-body"
  }, __jsx((react_sticky_box__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: `sticky-content skel-pro-single ${loading ? '' : 'loaded'}`,
    offsetTop: 70
  }, __jsx("div", {
    className: "skel-widget"
  }), __jsx("div", {
    className: "skel-widget"
  }), __jsx(_components_partials_product_sidebar_product_sidebar__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
    products: related,
    loading: loading
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
  ssr: true
})(ProductFullwidth));

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

/***/ 6302:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

/***/ }),

/***/ 7773:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-magnifiers");;

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

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ }),

/***/ 9058:
/***/ (function(module) {

"use strict";
module.exports = require("react-sticky-box");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

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

/***/ }),

/***/ 5060:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,6442,2806,5708,812,2076,1547,5130,478,8062,7484], function() { return __webpack_exec__(3757); });
module.exports = __webpack_exports__;

})();