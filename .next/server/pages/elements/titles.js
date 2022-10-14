(function() {
var exports = {};
exports.id = 4289;
exports.ids = [4289];
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

/***/ 6208:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7659);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7882);
/* harmony import */ var _components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6683);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function ElementTitles() {
  const category = ["ALL PRODUCTS", "WOMEN", "MEN", "ACCESSORIES"];
  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Titles",
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
  }, "Titles")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title"
  }, "Simple title"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx("div", {
    className: "heading"
  }, __jsx("h2", {
    className: "title"
  }, "Simple title ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Subtitle"), __jsx("p", {
    className: "title-desc"
  }, "Donec consectetuer ligula vulputate sem tristique cursus. ")), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    selectedTabClassName: "show"
  }, __jsx("div", {
    className: "heading heading-flex"
  }, __jsx("div", {
    className: "heading-left"
  }, __jsx("h2", {
    className: "title"
  }, "Simple title ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Product Filter")), __jsx("div", {
    className: "heading-right"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills justify-content-center",
    role: "tablist"
  }, category.map((cat, index) => __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    key: index
  }, __jsx("span", {
    className: "nav-link"
  }, cat)))))), category.map((cat, index) => __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    key: index
  }, __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")))), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    selectedTabClassName: "show"
  }, __jsx("div", {
    className: "heading heading-flex align-items-start"
  }, __jsx("div", {
    className: "heading-left"
  }, __jsx("h2", {
    className: "title"
  }, "Simple title ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Subtitle ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Product Filter"), __jsx("p", {
    className: "title-desc"
  }, "Donec consectetuer ligula vulputate sem tristique cursus. ")), __jsx("div", {
    className: "heading-right"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills justify-content-center",
    role: "tablist"
  }, category.map((cat, index) => __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    key: index
  }, __jsx("span", {
    className: "nav-link"
  }, cat)))))), category.map((cat, index) => __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    key: index
  }, __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")))), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx("div", {
    className: "heading heading-flex"
  }, __jsx("div", {
    className: "heading-left"
  }, __jsx("h2", {
    className: "title"
  }, "Simple title ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Link")), __jsx("div", {
    className: "heading-right"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "title-link"
  }, "Click here to view ", __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx("div", {
    className: "heading heading-flex"
  }, __jsx("div", {
    className: "heading-left"
  }, __jsx("h2", {
    className: "title"
  }, "Simple title ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Substitle ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Link"), __jsx("p", {
    className: "title-desc"
  }, "Donec consectetuer ligula vulputate sem tristique cursus. ")), __jsx("div", {
    className: "heading-right"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "title-link link-underline"
  }, "Click here to view ", __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx("div", {
    className: "text-center"
  }, __jsx("h2", {
    className: "title"
  }, "Centered title"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    selectedTabClassName: "show"
  }, __jsx("div", {
    className: "heading heading-center"
  }, __jsx("div", {
    className: "heading-left"
  }, __jsx("h2", {
    className: "title"
  }, "Centered title ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Product Filter")), __jsx("div", {
    className: "heading-right"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills justify-content-center",
    role: "tablist"
  }, category.map((cat, index) => __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item",
    key: index
  }, __jsx("span", {
    className: "nav-link"
  }, cat)))))), category.map((cat, index) => __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    key: index
  }, __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")))), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx("h2", {
    className: "title-sm"
  }, "Small Title"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx("div", {
    className: "heading"
  }, __jsx("p", {
    className: "title-desc mb-1"
  }, "Quisque a lectus."), __jsx("h2", {
    className: "title-sm"
  }, "Small title ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Subtitle")), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx("div", {
    className: "text-center"
  }, __jsx("h2", {
    className: "title-sm"
  }, "Centered Small Title"), __jsx("p", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx("div", {
    className: "heading text-center"
  }, __jsx("p", {
    className: "title-desc mb-1"
  }, "Quisque a lectus."), __jsx("h2", {
    className: "title-sm"
  }, "Centered Small title ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Subtitle")), __jsx("p", {
    className: "text-center"
  }, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."))), __jsx(_components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null));
}

/* harmony default export */ __webpack_exports__["default"] = (ElementTitles);

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

/***/ 7659:
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,6683], function() { return __webpack_exec__(6208); });
module.exports = __webpack_exports__;

})();