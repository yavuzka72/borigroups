(function() {
var exports = {};
exports.id = 114;
exports.ids = [114];
exports.modules = {

/***/ 608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7882);
/* harmony import */ var _components_partials_shop_sidebar_shop_sidebar_two__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9688);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function CategoryBoxed() {
  function openSidebar() {
    document.querySelector('body').classList.add('sidebar-filter-active');
  }

  function closeSidebar() {
    document.querySelector('body').classList.remove('sidebar-filter-active');
  }

  return __jsx("div", {
    className: "main shop"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Product Category Boxed",
    subTitle: "Shop"
  }), __jsx("nav", {
    "aria-label": "breadcrumb",
    className: "breadcrumb-nav breadcrumb-with-filter"
  }, __jsx("div", {
    className: "container"
  }, __jsx("button", {
    className: "sidebar-toggler",
    onClick: openSidebar
  }, __jsx("i", {
    className: "icon-bars"
  }), "Filters"), __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list"
  }, "Shop")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list"
  }, "Product Category")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Boxed")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "categories-page"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "banner banner-cat banner-badge"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list?category=dresses"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "images/category/boxed/banner-1.jpg",
    alt: "banner",
    width: 320,
    height: 580,
    effect: "blur",
    threshold: 500
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list?category=dresses"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Dresses"), __jsx("h4", {
    className: "banner-subtitle"
  }, "3 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now"))), __jsx("div", {
    className: "banner banner-cat banner-badge"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list?category=jackets"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "images/category/boxed/banner-2.jpg",
    alt: "banner",
    width: 320,
    height: 280,
    effect: "blur",
    threshold: 500
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list?category=jackets"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Jackets"), __jsx("h4", {
    className: "banner-subtitle"
  }, "2 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now")))), __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx("div", {
    className: "banner banner-cat banner-badge"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list?category=t-shirts"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "images/category/boxed/banner-3.jpg",
    alt: "banner",
    width: 280,
    height: 280,
    effect: "blur",
    threshold: 500
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list?category=t-shirts"
  }, __jsx("h3", {
    className: "banner-title"
  }, "T-shirts"), __jsx("h4", {
    className: "banner-subtitle"
  }, "0 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now")))), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("div", {
    className: "banner banner-cat banner-badge"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list?category=jeans"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "images/category/boxed/banner-4.jpg",
    alt: "banner",
    width: 280,
    height: 280,
    effect: "blur",
    threshold: 500
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list?category=jeans"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Jeans"), __jsx("h4", {
    className: "banner-subtitle"
  }, "4 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now"))))), __jsx("div", {
    className: "banner banner-cat banner-badge"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list?category=bags"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "images/category/boxed/banner-5.jpg",
    alt: "banner",
    width: 320,
    height: 580,
    effect: "blur",
    threshold: 500
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list?category=bags"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Bags"), __jsx("h4", {
    className: "banner-subtitle"
  }, "0 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now")))), __jsx("div", {
    className: "col-sm-6 col-md-3"
  }, __jsx("div", {
    className: "banner banner-cat banner-badge"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list?category=sportswear"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "images/category/boxed/banner-6.jpg",
    alt: "banner",
    width: 280,
    height: 280,
    effect: "blur",
    threshold: 500
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list?category=sportswear"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Sportwear"), __jsx("h4", {
    className: "banner-subtitle"
  }, "1 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now")))), __jsx("div", {
    className: "col-sm-6 col-md-3 order-md-last"
  }, __jsx("div", {
    className: "banner banner-cat banner-badge"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list?category=jumpers"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "images/category/boxed/banner-8.jpg",
    alt: "banner",
    width: 280,
    height: 280,
    effect: "blur",
    threshold: 500
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list?category=jumpers"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Jumpers"), __jsx("h4", {
    className: "banner-subtitle"
  }, "2 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now")))), __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "banner banner-cat banner-badge"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list?category=shoes"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    src: "images/category/boxed/banner-7.jpg",
    alt: "banner",
    width: 320,
    height: 280,
    effect: "blur",
    threshold: 500
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list?category=shoes"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Shoes"), __jsx("h4", {
    className: "banner-subtitle"
  }, "3 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now"))))))), __jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: closeSidebar
  }), __jsx(_components_partials_shop_sidebar_shop_sidebar_two__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null)));
}

/* harmony default export */ __webpack_exports__["default"] = (CategoryBoxed);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,3311], function() { return __webpack_exec__(608); });
module.exports = __webpack_exports__;

})();