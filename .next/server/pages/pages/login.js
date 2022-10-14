(function() {
var exports = {};
exports.id = 8158;
exports.ids = [8158];
exports.modules = {

/***/ 235:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7659);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Login() {
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
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, "Pages")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Login")))), __jsx("div", {
    className: "login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17",
    style: {
      backgroundImage: `url(images/backgrounds/login-bg.jpg)`
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "form-box"
  }, __jsx("div", {
    className: "form-tab"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    selectedTabClassName: "show",
    defaultIndex: 0
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills nav-fill"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Sign In")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Register"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    style: {
      paddingTop: "2rem"
    }
  }, __jsx("div", null, __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "singin-email-2"
  }, "Username or email address *"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "singin-email-2",
    name: "singin-email",
    required: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "singin-password-2"
  }, "Password *"), __jsx("input", {
    type: "password",
    className: "form-control",
    id: "singin-password-2",
    name: "singin-password",
    required: true
  })), __jsx("div", {
    className: "form-footer"
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2"
  }, __jsx("span", null, "LOG IN"), __jsx("i", {
    className: "icon-long-arrow-right"
  })), __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "signin-remember-2"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "signin-remember-2"
  }, "Remember Me")), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/pages/login",
    className: "forgot-link"
  }, "Forgot Your Password?"))), __jsx("div", {
    className: "form-choice"
  }, __jsx("p", {
    className: "text-center"
  }, "or sign in with"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/pages/login",
    className: "btn btn-login btn-g"
  }, __jsx("i", {
    className: "icon-google"
  }), "Login With Google")), __jsx("div", {
    className: "col-sm-6"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/pages/login",
    className: "btn btn-login btn-f"
  }, __jsx("i", {
    className: "icon-facebook-f"
  }), "Login With Facebook")))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "register-email-2"
  }, "Your email address *"), __jsx("input", {
    type: "email",
    className: "form-control",
    id: "register-email-2",
    name: "register-email",
    required: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "register-password-2"
  }, "Password *"), __jsx("input", {
    type: "password",
    className: "form-control",
    id: "register-password-2",
    name: "register-password",
    required: true
  })), __jsx("div", {
    className: "form-footer"
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2"
  }, __jsx("span", null, "SIGN UP"), __jsx("i", {
    className: "icon-long-arrow-right"
  })), __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "register-policy-2",
    required: true
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "register-policy-2"
  }, "I agree to the privacy policy *")))), __jsx("div", {
    className: "form-choice"
  }, __jsx("p", {
    className: "text-center"
  }, "or sign in with"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/pages/login",
    className: "btn btn-login btn-g"
  }, __jsx("i", {
    className: "icon-google"
  }), "Login With Google")), __jsx("div", {
    className: "col-sm-6"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/pages/login",
    className: "btn btn-login  btn-f"
  }, __jsx("i", {
    className: "icon-facebook-f"
  }), "Login With Facebook"))))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011], function() { return __webpack_exec__(235); });
module.exports = __webpack_exports__;

})();