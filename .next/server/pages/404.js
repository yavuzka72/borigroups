(function() {
var exports = {};
exports.id = 2197;
exports.ids = [2197];
exports.modules = {

/***/ 7752:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7852);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ErrorPage() {
  return __jsx("div", {
    className: "main"
  }, __jsx("nav", {
    className: "breadcrumb-nav border-0 mb-0"
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
  }, "404")))), __jsx("div", {
    className: "error-content text-center position-relative",
    style: {
      backgroundImage: `url(images/backgrounds/error-bg.jpg)`,
      marginBottom: '-1px'
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("h1", {
    className: "error-title"
  }, "Error 404"), __jsx("p", null, "We are sorry, the page you've requested is not available."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/",
    className: "btn btn-outline-primary-2 btn-minwidth-lg"
  }, __jsx("span", null, "BACK TO HOMEPAGE"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ErrorPage));

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011], function() { return __webpack_exec__(7752); });
module.exports = __webpack_exports__;

})();