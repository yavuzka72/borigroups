(function() {
var exports = {};
exports.id = 1594;
exports.ids = [1594];
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

/***/ 4479:
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

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function Banners() {
  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Banners",
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
  }, "Banners")))), __jsx("div", {
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
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 275,
    src: "images/banners/banner-1.jpg",
    threshold: 200,
    width: 300,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title"
  }, "Praesent elementum ", __jsx("br", null), "hendrerit tortor."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here")))), __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 275,
    width: 300,
    src: "images/banners/banner-2.jpg",
    threshold: 200,
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title"
  }, "Donec consectetuer ", __jsx("br", null), "ligula vulputate."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here"))))), __jsx("hr", {
    className: "mb-4"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "3 Columns"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 300,
    height: 224,
    src: "images/banners/3cols/banner-1.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title"
  }, "Praesent elementum ", __jsx("br", null), "hendrerit tortor."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here")))), __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 300,
    height: 224,
    src: "images/banners/3cols/banner-2.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title"
  }, "Donec consectetuer ", __jsx("br", null), "ligula vulputate."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here")))), __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    width: 300,
    height: 224,
    src: "images/banners/3cols/banner-3.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title text-white"
  }, "Phasellus ultrices ", __jsx("br", null), "nulla quisnibh."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here"))))), __jsx("hr", {
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
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 205,
    width: 300,
    src: "images/banners/3cols/banner-4.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title"
  }, "Praesent elementum ", __jsx("br", null), "hendrerit tortor."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here")))), __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 205,
    width: 300,
    src: "images/banners/3cols/banner-5.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title"
  }, "Donec consectetuer ", __jsx("br", null), "ligula vulputate."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here")))), __jsx("div", {
    className: "col-md-6 col-lg-4"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 205,
    width: 300,
    src: "images/banners/3cols/banner-6.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title text-white"
  }, "Phasellus ultrices ", __jsx("br", null), "nulla quisnibh."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here")))))), __jsx("div", {
    className: "container"
  }, __jsx("hr", {
    className: "mb-4"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "Large Banner"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("div", {
    className: "banner banner-big"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 470,
    width: 300,
    src: "images/banners/banner-fullwidth.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle text-primary"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title text-white"
  }, "Morbi interdum ", __jsx("br", null), "mollis sapien."), __jsx("p", {
    className: "d-none d-lg-block"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, posuere a, pede."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, __jsx("span", null, "Click Here"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))))), __jsx("hr", {
    className: "mb-4"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "Grid (3 Banners)"), __jsx("div", {
    className: "row "
  }, __jsx("div", {
    className: "col-lg-8"
  }, __jsx("div", {
    className: "banner banner-big"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 471,
    width: 300,
    src: "images/banners/grid/3cols/banner-1.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title"
  }, "Morbi in sem ", __jsx("br", null), "placerat."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, __jsx("span", null, "Click Here"), __jsx("i", {
    className: "icon-long-arrow-right"
  }))))), __jsx("div", {
    className: "col-lg-4"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6 col-lg-12"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 226,
    width: 300,
    src: "images/banners/grid/3cols/banner-2.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title text-white"
  }, "Donec consectetuer ", __jsx("br", null), "ligula vulputate."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here")))), __jsx("div", {
    className: "col-sm-6 col-lg-12"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 226,
    width: 300,
    src: "images/banners/grid/3cols/banner-3.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title"
  }, "Phasellus ", __jsx("br", null), "ultrices nulla."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here"))))))), __jsx("hr", {
    className: "mb-4"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "Grid (4 Banners)"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-sm-6 col-lg-4"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 559,
    width: 300,
    src: "images/banners/grid/4cols/banner-1.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title"
  }, "Phasellus ", __jsx("br", null), "ultrices nulla."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here")))), __jsx("div", {
    className: "col-sm-6 col-lg-4 order-lg-last"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 559,
    width: 300,
    src: "images/banners/grid/4cols/banner-4.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title text-white"
  }, "Donec consectetuer ", __jsx("br", null), "ligula vulputate."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here")))), __jsx("div", {
    className: "col-lg-4"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6 col-lg-12"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 269,
    width: 300,
    src: "images/banners/grid/4cols/banner-2.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title"
  }, "Phasellus ", __jsx("br", null), "ultrices nulla."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here")))), __jsx("div", {
    className: "col-sm-6 col-lg-12"
  }, __jsx("div", {
    className: "banner"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
    alt: "banner",
    height: 269,
    src: "images/banners/grid/4cols/banner-3.jpg",
    threshold: 200,
    effect: "black-and-white"
  })), __jsx("div", {
    className: "banner-content"
  }, __jsx("h4", {
    className: "banner-subtitle"
  }, "Quisque a lectus"), __jsx("h3", {
    className: "banner-title text-white"
  }, "Donec consectetuer ", __jsx("br", null), "ligula vulputate."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "banner-link"
  }, "Click here"))))))))), __jsx(_components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Banners);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,6683], function() { return __webpack_exec__(4479); });
module.exports = __webpack_exports__;

})();