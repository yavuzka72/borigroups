(function() {
var exports = {};
exports.id = 5304;
exports.ids = [5304];
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

/***/ 7224:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7882);
/* harmony import */ var _components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6683);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4138);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const sliderSetting = {
  nav: false,
  dots: false,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 2
    },
    480: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      nav: true,
      items: 4
    }
  }
};

function Categories() {
  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Product Category",
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
  }, "Product Category")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title text-center mb-3"
  }, "2 Columns"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 570,
    height: 280,
    src: "images/banners/banner-1.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Women"), __jsx("h4", {
    className: "banner-subtitle"
  }, "18 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now")))), __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 280,
    src: "images/banners/banner-2.jpg",
    width: 570,
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Men"), __jsx("h4", {
    className: "banner-subtitle"
  }, "12 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now"))))), __jsx("hr", {
    className: "mb-4"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "3 Columns Badge Style"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 370,
    height: 250,
    src: "images/category/3cols/banner-1.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content banner-content-overlay text-center"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Women"), __jsx("h4", {
    className: "banner-subtitle"
  }, "18 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now")))), __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 370,
    height: 250,
    src: "images/category/3cols/banner-2.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content banner-content-overlay text-center"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Men"), __jsx("h4", {
    className: "banner-subtitle"
  }, "12 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now")))), __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 370,
    height: 250,
    src: "images/category/3cols/banner-3.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content banner-content-overlay text-center"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Accessories"), __jsx("h4", {
    className: "banner-subtitle"
  }, "8 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now"))))), __jsx("hr", {
    className: "mb-4"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "4 Columns Carousel"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    adClass: "owl-simple",
    options: sliderSetting
  }, __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 270,
    height: 300,
    src: "images/category/4cols/banner-1.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content banner-content-static text-center"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Women"), __jsx("h4", {
    className: "banner-subtitle"
  }, "18 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now"))), __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 270,
    height: 300,
    src: "images/category/4cols/banner-2.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content banner-content-static text-center"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Men"), __jsx("h4", {
    className: "banner-subtitle"
  }, "12 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now"))), __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 270,
    height: 300,
    src: "images/category/4cols/banner-3.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content banner-content-static text-center"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Shoes & Boots"), __jsx("h4", {
    className: "banner-subtitle"
  }, "15 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now"))), __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 270,
    height: 300,
    src: "images/category/4cols/banner-4.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content banner-content-static text-center"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Accessories"), __jsx("h4", {
    className: "banner-subtitle"
  }, "8 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now"))), __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 270,
    height: 300,
    src: "images/category/4cols/banner-1.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content banner-content-static text-center"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Women"), __jsx("h4", {
    className: "banner-subtitle"
  }, "18 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now")))), __jsx("hr", {
    className: "mb-4"
  })), __jsx("div", {
    className: "container-fluid"
  }, __jsx("h2", {
    className: "title text-center mb-3"
  }, "3 Columns Fullwidth"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 600,
    height: 280,
    src: "images/category/fullwidth/banner-1.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Women"), __jsx("h4", {
    className: "banner-subtitle"
  }, "18 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now")))), __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 600,
    height: 280,
    src: "images/category/fullwidth/banner-2.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Men"), __jsx("h4", {
    className: "banner-subtitle"
  }, "12 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now")))), __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner banner-cat"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 600,
    height: 280,
    src: "images/category/fullwidth/banner-3.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Accessories"), __jsx("h4", {
    className: "banner-subtitle"
  }, "12 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now")))))), __jsx("div", {
    className: "container"
  }, __jsx("hr", {
    className: "mb-4"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "Masonry"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-sm-6 col-lg-3"
  }, __jsx("div", {
    className: "banner banner-cat banner-link-anim banner-large"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 270,
    height: 549,
    src: "images/category/grid/banner-1.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content banner-content-bottom"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Accessories"), __jsx("h4", {
    className: "banner-subtitle"
  }, "8 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now")))), __jsx("div", {
    className: "col-sm-6 col-lg-3 order-lg-last"
  }, __jsx("div", {
    className: "banner banner-cat banner-link-anim banner-large"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 270,
    height: 549,
    src: "images/category/grid/banner-4.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content banner-content-top"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Shoes & Boots"), __jsx("h4", {
    className: "banner-subtitle"
  }, "15 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now")))), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6 col-lg-12"
  }, __jsx("div", {
    className: "banner banner-cat banner-link-anim"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 750,
    height: 270,
    src: "images/category/grid/banner-2.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Women"), __jsx("h4", {
    className: "banner-subtitle"
  }, "18 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now")))), __jsx("div", {
    className: "col-sm-6 col-lg-12"
  }, __jsx("div", {
    className: "banner banner-cat banner-link-anim"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 750,
    height: 270,
    src: "images/category/grid/banner-3.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Men"), __jsx("h4", {
    className: "banner-subtitle"
  }, "12 Products"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "banner-link p-0"
  }, "Shop Now"))))))), __jsx("hr", {
    className: "mb-4"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "Grid Badge Style"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "banner banner-cat banner-badge"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 575,
    height: 545,
    src: "images/category/grid2/banner-1.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Accessories"), __jsx("h4", {
    className: "banner-subtitle"
  }, "8 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now")))), __jsx("div", {
    className: "col-md-6 d-flex flex-column"
  }, __jsx("div", {
    className: "banner banner-cat banner-badge"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 570,
    height: 260,
    src: "images/category/grid2/banner-2.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Women"), __jsx("h4", {
    className: "banner-subtitle"
  }, "15 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now"))), __jsx("div", {
    className: "banner banner-cat banner-badge flex-grow-1"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "h-100"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 570,
    height: 260,
    className: "h-100",
    src: "images/category/grid2/banner-3.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "banner-link",
    href: "/shop/sidebar/list"
  }, __jsx("h3", {
    className: "banner-title"
  }, "Men"), __jsx("h4", {
    className: "banner-subtitle"
  }, "12 Products"), __jsx("span", {
    className: "banner-link-text"
  }, "Shop Now"))))))), __jsx(_components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Categories);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,6683], function() { return __webpack_exec__(7224); });
module.exports = __webpack_exports__;

})();