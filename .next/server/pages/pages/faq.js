(function() {
var exports = {};
exports.id = 1742;
exports.ids = [1742];
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

/***/ 242:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7882);
/* harmony import */ var _components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2674);
/* harmony import */ var _components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7185);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function FAQ() {
  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: "F.A.Q",
    subTitle: "Pages"
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
    href: "#"
  }, "Pages")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "FAQ")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title text-center mb-3"
  }, "Shipping Information"), __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "accordion-rounded"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "How will my parcel be delivered?",
    adClass: "card-box card-sm bg-light"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Do I pay for delivery?",
    adClass: "card-box card-sm bg-light"
  }, "Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Will I be charged customs fees?",
    adClass: "card-box card-sm bg-light"
  }, "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "My item has become faulty",
    adClass: "card-box card-sm bg-light"
  }, "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")), __jsx("h2", {
    className: "title text-center mb-3"
  }, "Orders and Returns"), __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "accordion-rounded"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Tracking my order",
    adClass: "card-box card-sm bg-light"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "I haven\u2019t received my order",
    adClass: "card-box card-sm bg-light"
  }, "Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "How can I return an item?",
    adClass: "card-box card-sm bg-light"
  }, "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")), __jsx("h2", {
    className: "title text-center mb-3"
  }, "Payments"), __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "accordion-rounded"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "What payment types can I use?",
    adClass: "card-box card-sm bg-light"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Can I pay by Gift Card?",
    adClass: "card-box card-sm bg-light"
  }, "Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "I can't make a payment",
    adClass: "card-box card-sm bg-light"
  }, "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Has my payment gone through?",
    adClass: "card-box card-sm bg-light"
  }, "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.")))), __jsx("div", {
    className: "cta cta-display bg-image pt-4 pb-4",
    style: {
      backgroundImage: `url(images/backgrounds/cta/bg-7.jpg)`
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-md-10 col-lg-9 col-xl-7"
  }, __jsx("div", {
    className: `row no-gutters flex-sm-row align-items-sm-center`
  }, __jsx("div", {
    className: "col"
  }, __jsx("h3", {
    className: "cta-title text-white"
  }, "If You Have More Questions"), __jsx("p", {
    className: "cta-desc text-white"
  }, "Quisque volutpat mattis eros")), __jsx("div", {
    className: "col-auto"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/pages/contact",
    className: "btn btn-outline-white"
  }, __jsx("span", null, "CONTACT US"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (FAQ);

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

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,6442,5130], function() { return __webpack_exec__(242); });
module.exports = __webpack_exports__;

})();