(function() {
var exports = {};
exports.id = 5522;
exports.ids = [5522];
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

/***/ 4504:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7882);
/* harmony import */ var _components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6683);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6442);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4138);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8289);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








function Testimonials() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener('scroll', _utils__WEBPACK_IMPORTED_MODULE_6__/* .parallax */ .Tk, true);
    return () => {
      document.removeEventListener('scroll', _utils__WEBPACK_IMPORTED_MODULE_6__/* .parallax */ .Tk);
    };
  }, []);
  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: "Testimonials",
    subTitle: "Elements"
  }), __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/elements"
  }, "Elements")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Testimonials")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title text-center mb-3"
  }, "Quote Sign ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Centered Align"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "owl-testimonials cols-1",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider5 */ .cD
  }, __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, __jsx("p", null, "\u201C Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. \u201D"), __jsx("cite", null, "Jenson Gregory", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, __jsx("p", null, "\u201C Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. \u201D"), __jsx("cite", null, "Damon Stone", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, __jsx("p", null, "\u201C Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis perspiciatis, voluptate, distinctio earum veritatis animi tempora eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. \u201D"), __jsx("cite", null, "John Smith", __jsx("span", null, "Customer")))), __jsx("hr", {
    className: "mt-5 mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "Quote Sign ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Centered Align ", __jsx("span", {
    className: "title-separator"
  }, "/"), " 2 Columns"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "owl-testimonials cols-md-2 cols-1",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider6 */ .wf
  }, __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, __jsx("p", null, "\u201C  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi tortor eu nibh. Nullam mollis.  \u201D"), __jsx("cite", null, "Jenson Gregory", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, __jsx("p", null, "\u201C Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus. \u201D"), __jsx("cite", null, "Victoria Ventura", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, __jsx("p", null, "\u201C Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis, voluptate, distinctio earum veritatis animi. \u201D"), __jsx("cite", null, "John Smith", __jsx("span", null, "Customer")))), __jsx("hr", {
    className: "mt-5 mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "Quote Sign ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Centered Align ", __jsx("span", {
    className: "title-separator"
  }, "/"), " 3 Columns"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "owl-testimonials cols-1 cols-md-2 cols-lg-3",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider7 */ .wI
  }, __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, __jsx("p", null, "\u201C Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus quet vel, dapibus id, mattis vel, nisi tortor eu nibh. Nullam mollis. \u201D"), __jsx("cite", null, "Jenson Gregory", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, __jsx("p", null, "\u201C Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusand. \u201D"), __jsx("cite", null, "Victoria Ventura", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, __jsx("p", null, "\u201C Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicab, modi animi. \u201D"), __jsx("cite", null, "Angelica Lynch", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, __jsx("p", null, "\u201C Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicab. \u201D"), __jsx("cite", null, "John Smith", __jsx("span", null, "Customer"))))), __jsx("div", {
    className: "mb-5"
  }), __jsx("div", {
    className: "bg-image bg-overlay pt-5 pb-4",
    style: {
      backgroundImage: 'url(images/backgrounds/bg-1.jpg)'
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title text-center text-white mb-3"
  }, "Quote Sign ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Centered Align ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Dark Background"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "owl-testimonials owl-light cols-1",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider5 */ .cD
  }, __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center text-white"
  }, __jsx("p", null, "\u201C Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. \u201D"), __jsx("cite", null, "Jenson Gregory", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center text-white"
  }, __jsx("p", null, "\u201C Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. \u201D"), __jsx("cite", null, "Damon Stone", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial testimonial-icon text-center text-white"
  }, __jsx("p", null, "\u201C Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis perspiciatis, voluptate, distinctio earum veritatis animi tempora eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. \u201D"), __jsx("cite", null, "John Smith", __jsx("span", null, "Customer")))))), __jsx("div", {
    className: "mb-5"
  }), __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title text-center mb-3"
  }, "Customer Photo ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Centered Align"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "owl-testimonials-photo cols-1",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider5 */ .cD
  }, __jsx("blockquote", {
    className: "testimonial text-center"
  }, __jsx("img", {
    src: "images/testimonials/user-1.jpg",
    alt: "user"
  }), __jsx("p", null, "\u201C Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. \u201D"), __jsx("cite", null, "Jenson Gregory", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial text-center"
  }, __jsx("img", {
    src: "images/testimonials/user-2.jpg",
    alt: "user"
  }), __jsx("p", null, "\u201C Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. \u201D"), __jsx("cite", null, "Victoria Ventura", __jsx("span", null, "Customer")))), __jsx("hr", {
    className: "mt-5 mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-3"
  }, "Customer Photo ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Centered Align ", __jsx("span", {
    className: "title-separator"
  }, "/"), " 2 Columns"), __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "owl-testimonials-photo cols-1 cols-md-2",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .mainSlider6 */ .wf
  }, __jsx("blockquote", {
    className: "testimonial text-center"
  }, __jsx("img", {
    src: "images/testimonials/user-1.jpg",
    alt: "user"
  }), __jsx("p", null, "\u201C  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi tortor eu nibh. Nullam mollis.  \u201D"), __jsx("cite", null, "Jenson Gregory", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial text-center"
  }, __jsx("img", {
    src: "images/testimonials/user-2.jpg",
    alt: "user"
  }), __jsx("p", null, "\u201C Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus. \u201D"), __jsx("cite", null, "Victoria Ventura", __jsx("span", null, "Customer"))), __jsx("blockquote", {
    className: "testimonial text-center"
  }, __jsx("img", {
    src: "images/testimonials/user-1.jpg",
    alt: "user"
  }), __jsx("p", null, "\u201C Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis, voluptate, distinctio earum veritatis animi. \u201D"), __jsx("cite", null, "John Smith", __jsx("span", null, "Customer")))))), __jsx(_components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ }),

/***/ 7381:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,6442,8289,6683], function() { return __webpack_exec__(4504); });
module.exports = __webpack_exports__;

})();