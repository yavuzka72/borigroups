(function() {
var exports = {};
exports.id = 6235;
exports.ids = [6235];
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

/***/ 2910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7659);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7882);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function DashBoard() {
  function toOrder(e) {
    e.preventDefault();
    document.querySelector('.nav-dashboard .react-tabs__tab-list .nav-item:nth-child(2)').click();
  }

  function toAddress(e) {
    e.preventDefault();
    document.querySelector('.nav-dashboard .react-tabs__tab-list .nav-item:nth-child(4)').click();
  }

  function toAccount(e) {
    e.preventDefault();
    document.querySelector('.nav-dashboard .react-tabs__tab-list .nav-item:nth-child(5)').click();
  }

  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "My Account",
    subTitle: "Shop"
  }), __jsx("nav", {
    className: "breadcrumb-nav mb-3"
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
    href: "/shop/sidebar/list"
  }, "Shop")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "My Account")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "dashboard"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ul", {
    className: "nav nav-dashboard flex-column mb-3 mb-md-0",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    selectedTabClassName: "active show"
  }, __jsx("div", {
    className: "row"
  }, __jsx("aside", {
    className: "col-md-4 col-lg-3 mb-md-0 mb-2"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, null, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Dashboard")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Orders")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Downloads")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Addresses")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Account Details")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/",
    className: "nav-link"
  }, "Sign Out")))), __jsx("div", {
    className: "col-md-8 col-lg-9",
    style: {
      marginTop: "1rem"
    }
  }, __jsx("div", {
    className: "tab-pane"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Hello ", __jsx("span", {
    className: "font-weight-normal text-dark"
  }, "User"), " (not ", __jsx("span", {
    className: "font-weight-normal text-dark"
  }, "User"), "? ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/"
  }, "Log out"), ")", __jsx("br", null), "From your account dashboard you can view your ", __jsx("a", {
    href: "#tab-orders",
    onClick: toOrder,
    className: "tab-trigger-link link-underline"
  }, "recent orders"), ", manage your ", __jsx("a", {
    href: "#tab-address",
    onClick: toAddress,
    className: "tab-trigger-link"
  }, "shipping and billing addresses"), ", and ", __jsx("a", {
    href: "#tab-account",
    onClick: toAccount,
    className: "tab-trigger-link"
  }, "edit your password and account details"), ".")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "No order has been made yet."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "btn btn-outline-primary-2"
  }, __jsx("span", null, "GO SHOP"), __jsx("i", {
    className: "icon-long-arrow-right"
  }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "No downloads available yet."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "btn btn-outline-primary-2"
  }, __jsx("span", null, "GO SHOP"), __jsx("i", {
    className: "icon-long-arrow-right"
  }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "The following addresses will be used on the checkout page by default."), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6"
  }, __jsx("div", {
    className: "card card-dashboard"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("h3", {
    className: "card-title"
  }, "Billing Address"), __jsx("p", null, "User Name", __jsx("br", null), "User Company", __jsx("br", null), "John str", __jsx("br", null), "New York, NY 10001", __jsx("br", null), "1-234-987-6543", __jsx("br", null), "yourmail@mail.com", __jsx("br", null), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, "Edit ", __jsx("i", {
    className: "icon-edit"
  })))))), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("div", {
    className: "card card-dashboard"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("h3", {
    className: "card-title"
  }, "Shipping Address"), __jsx("p", null, "You have not set up this type of address yet.", __jsx("br", null), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, "Edit ", __jsx("i", {
    className: "icon-edit"
  })))))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx("label", null, "First Name *"), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  })), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("label", null, "Last Name *"), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  }))), __jsx("label", null, "Display Name *"), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  }), __jsx("small", {
    className: "form-text"
  }, "This will be how your name will be displayed in the account section and in reviews"), __jsx("label", null, "Email address *"), __jsx("input", {
    type: "email",
    className: "form-control",
    required: true
  }), __jsx("label", null, "Current password (leave blank to leave unchanged)"), __jsx("input", {
    type: "password",
    className: "form-control"
  }), __jsx("label", null, "New password (leave blank to leave unchanged)"), __jsx("input", {
    type: "password",
    className: "form-control"
  }), __jsx("label", null, "Confirm new password"), __jsx("input", {
    type: "password",
    className: "form-control mb-2"
  }), __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2"
  }, __jsx("span", null, "SAVE CHANGES"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("div", null)))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(DashBoard));

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011], function() { return __webpack_exec__(2910); });
module.exports = __webpack_exports__;

})();