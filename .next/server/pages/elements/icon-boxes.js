(function() {
var exports = {};
exports.id = 192;
exports.ids = [192];
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

/***/ 3691:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7882);
/* harmony import */ var _components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6683);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function IconBoxes() {
  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: "Icon Boxes",
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
  }, "Icon Boxes")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title mb-4 text-center"
  }, "Simple Icons", __jsx("span", {
    className: "title-separator"
  }, "/"), " Centered Align", __jsx("span", {
    className: "title-separator"
  }, "/"), " 3 Columns"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-info-circle"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Quisque a lectus"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.")))), __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-star-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Suspendisse potenti"), __jsx("p", null, "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.")))), __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-heart-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Phasellus hendrerit"), __jsx("p", null, "Pellentesque a diam sit amet mi ullamcorper vehicula. Nullam quis massa sit amet nibh viverra malesuada."))))), __jsx("hr", {
    className: "mb-6"
  }), __jsx("h2", {
    className: "title mb-5 text-center"
  }, "Simple Icons", __jsx("span", {
    className: "title-separator"
  }, "/"), " Left Align", __jsx("span", {
    className: "title-separator"
  }, "/"), " 3 Columns"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-left"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-info-circle"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Quisque a lectus"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.")))), __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-left"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-star-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Suspendisse potenti"), __jsx("p", null, "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.")))), __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-left"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-heart-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Phasellus hendrerit"), __jsx("p", null, "Pellentesque a diam sit amet vehicula. Nullam quis massa sit amet nibh viverra malesuada."))))), __jsx("hr", {
    className: "mb-6"
  }), __jsx("h2", {
    className: "title mb-4 text-center"
  }, "Circle Icons", __jsx("span", {
    className: "title-separator"
  }, "/"), " Centered Align", __jsx("span", {
    className: "title-separator"
  }, "/"), " 3 Columns"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-circle text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-info-circle"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Quisque a lectus"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.")))), __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-circle text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-star-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Suspendisse potenti"), __jsx("p", null, "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.")))), __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-circle text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-heart-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Phasellus hendrerit"), __jsx("p", null, "Pellentesque a diam sit amet mi ullamcorper vehicula. Nullam quis massa sit amet nibh viverra malesuada."))))), __jsx("hr", {
    className: "mb-6"
  }), __jsx("h2", {
    className: "title mb-5 text-center"
  }, "Circle Icons", __jsx("span", {
    className: "title-separator"
  }, "/"), " Left Align", __jsx("span", {
    className: "title-separator"
  }, "/"), " 3 Columns"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-left icon-box-circle"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-info-circle"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Quisque a lectus"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus augue.")))), __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-left icon-box-circle"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-star-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Suspendisse potenti"), __jsx("p", null, "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate eu erat.")))), __jsx("div", {
    className: "col-lg-4 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-left icon-box-circle"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-heart-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Phasellus hendrerit"), __jsx("p", null, "Pellentesque a diam sit amet vehicula. Nullam quis massa sit amet nibh viverra malesuada."))))), __jsx("hr", {
    className: "mb-6"
  }), __jsx("h2", {
    className: "title mb-4 text-center"
  }, "Simple Icons", __jsx("span", {
    className: "title-separator"
  }, "/"), " Centered Align", __jsx("span", {
    className: "title-separator"
  }, "/"), " 4 Columns"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-info-circle"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Quisque a lectus"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper")))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-star-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Suspendisse potenti"), __jsx("p", null, "Praesent dapibus, neque id cursus faucibus, tortor neque egestas")))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-heart-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Phasellus hendrerit"), __jsx("p", null, "Pellentesque a diam sit amet mi ullamcorper vehicula.")))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-cog"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Fusce pellentesque"), __jsx("p", null, "Nullam quis massa sit amet nibh viverra malesuada."))))), __jsx("hr", {
    className: "mb-6"
  }), __jsx("h2", {
    className: "title mb-5 text-center"
  }, "Simple Icons", __jsx("span", {
    className: "title-separator"
  }, "/"), " Left Align", __jsx("span", {
    className: "title-separator"
  }, "/"), " 4 Columns"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-left"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-info-circle"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Quisque a lectus"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat eros")))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-left"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-star-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Suspendisse potenti"), __jsx("p", null, "Praesent dapibus, neque id cursus faucibus tortor")))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-left"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-heart-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Phasellus hendrerit"), __jsx("p", null, "Pellentesque a diam sit amet vehicula.")))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-left"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-cog"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Fusce pellentesque"), __jsx("p", null, "Nullam quis massa sit amet nibh viverra"))))), __jsx("hr", {
    className: "mb-6"
  }), __jsx("h2", {
    className: "title mb-4 text-center"
  }, "Circle Icons", __jsx("span", {
    className: "title-separator"
  }, "/"), " Centered Align", __jsx("span", {
    className: "title-separator"
  }, "/"), " 4 Columns"), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-circle text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-info-circle"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Quisque a lectus"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper")))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-circle text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-star-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Suspendisse potenti"), __jsx("p", null, "Praesent dapibus, neque id cursus faucibus, tortor neque egestas")))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-circle text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-heart-o"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Phasellus hendrerit"), __jsx("p", null, "Pellentesque a diam sit amet mi ullamcorper vehicula.")))), __jsx("div", {
    className: "col-lg-3 col-sm-6"
  }, __jsx("div", {
    className: "icon-box icon-box-circle text-center"
  }, __jsx("span", {
    className: "icon-box-icon"
  }, __jsx("i", {
    className: "icon-cog"
  })), __jsx("div", {
    className: "icon-box-content"
  }, __jsx("h3", {
    className: "icon-box-title"
  }, "Fusce pellentesque"), __jsx("p", null, "Nullam quis massa sit amet nibh viverra malesuada."))))))), __jsx(_components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null));
}

/* harmony default export */ __webpack_exports__["default"] = (IconBoxes);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,6683], function() { return __webpack_exec__(3691); });
module.exports = __webpack_exports__;

})();