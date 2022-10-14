(function() {
var exports = {};
exports.id = 3225;
exports.ids = [3225];
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

/***/ 8981:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapStateToProps": function() { return /* binding */ mapStateToProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3920);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7852);
/* harmony import */ var _components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7185);
/* harmony import */ var _components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2674);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7882);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6442);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function Checkout(props) {
  const {
    cartlist
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.querySelector('body').addEventListener("click", clearOpacity);
    return () => {
      document.querySelector('body').removeEventListener("click", clearOpacity);
    };
  }, []);

  function clearOpacity() {
    if (document.querySelector('#checkout-discount-input').value == '') document.querySelector('#checkout-discount-form label').removeAttribute('style');
  }

  function addOpacity(e) {
    e.currentTarget.parentNode.querySelector("label").setAttribute("style", "opacity: 0");
  }

  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    title: "Checkout",
    subTitle: "Shop"
  }), __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/shop/sidebar/list"
  }, "Shop")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Checkout")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "checkout"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "checkout-discount"
  }, __jsx("form", {
    action: "#",
    id: "checkout-discount-form"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    required: true,
    id: "checkout-discount-input",
    onClick: addOpacity
  }), __jsx("label", {
    htmlFor: "checkout-discount-input",
    className: "text-truncate"
  }, "Have a coupon? ", __jsx("span", null, "Click here to enter your code")))), __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-9"
  }, __jsx("h2", {
    className: "checkout-title"
  }, "Billing Details"), __jsx("div", {
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
  }))), __jsx("label", null, "Company Name (Optional)"), __jsx("input", {
    type: "text",
    className: "form-control"
  }), __jsx("label", null, "Country *"), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  }), __jsx("label", null, "Street address *"), __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "House number and Street name",
    required: true
  }), __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Appartments, suite, unit etc ...",
    required: true
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx("label", null, "Town / City *"), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  })), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("label", null, "State / County *"), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  }))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx("label", null, "Postcode / ZIP *"), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  })), __jsx("div", {
    className: "col-sm-6"
  }, __jsx("label", null, "Phone *"), __jsx("input", {
    type: "tel",
    className: "form-control",
    required: true
  }))), __jsx("label", null, "Email address *"), __jsx("input", {
    type: "email",
    className: "form-control",
    required: true
  }), __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "checkout-create-acc"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "checkout-create-acc"
  }, "Create an account?")), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_2___default()), {
    duration: 300,
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement
  }) => __jsx("div", {
    className: "form-group"
  }, __jsx("div", {
    className: "custom-control custom-checkbox mt-0 address-box"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "different-shipping",
    onChange: onToggle
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "different-shipping"
  }, "Ship to a different address?")), __jsx("div", {
    className: "shipping-info",
    ref: setCollapsibleElement,
    style: {
      overflow: 'hidden'
    }
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "First name ", __jsx("abbr", {
    className: "required",
    title: "required"
  }, "*")), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  }))), __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Last name ", __jsx("abbr", {
    className: "required",
    title: "required"
  }, "*")), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  })))), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Company name (optional)"), __jsx("input", {
    type: "text",
    className: "form-control"
  })), __jsx("div", {
    className: "select-custom"
  }, __jsx("label", null, "Country / Region ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("select", {
    name: "orderby",
    className: "form-control"
  }, __jsx("option", {
    value: "",
    defaultValue: "selected"
  }, "Vanuatu"), __jsx("option", {
    value: "1"
  }, "Brunei"), __jsx("option", {
    value: "2"
  }, "Bulgaria"), __jsx("option", {
    value: "3"
  }, "Burkina Faso"), __jsx("option", {
    value: "4"
  }, "Burundi"), __jsx("option", {
    value: "5"
  }, "Cameroon"))), __jsx("div", {
    className: "form-group mb-1 pb-2"
  }, __jsx("label", null, "Street address ", __jsx("abbr", {
    className: "required",
    title: "required"
  }, "*")), __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "House number and street name",
    required: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Apartment, suite, unit, etc. (optional)",
    required: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Town / City ", __jsx("abbr", {
    className: "required",
    title: "required"
  }, "*")), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  })), __jsx("div", {
    className: "select-custom"
  }, __jsx("label", null, "State / County ", __jsx("abbr", {
    className: "required",
    title: "required"
  }, "*")), __jsx("select", {
    name: "orderby",
    className: "form-control"
  }, __jsx("option", {
    value: "",
    defaultValue: "selected"
  }, "NY"), __jsx("option", {
    value: "1"
  }, "Brunei"), __jsx("option", {
    value: "2"
  }, "Bulgaria"), __jsx("option", {
    value: "3"
  }, "Burkina Faso"), __jsx("option", {
    value: "4"
  }, "Burundi"), __jsx("option", {
    value: "5"
  }, "Cameroon"))), __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Postcode / ZIP ", __jsx("abbr", {
    className: "required",
    title: "required"
  }, "*")), __jsx("input", {
    type: "text",
    className: "form-control",
    required: true
  }))))), __jsx("label", null, "Order notes (optional)"), __jsx("textarea", {
    className: "form-control",
    cols: "30",
    rows: "4",
    placeholder: "Notes about your order, e.g. special notes for delivery"
  })), __jsx("aside", {
    className: "col-lg-3"
  }, __jsx("div", {
    className: "summary"
  }, __jsx("h3", {
    className: "summary-title"
  }, "Your Order"), __jsx("table", {
    className: "table table-summary"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Product"), __jsx("th", null, "Total"))), __jsx("tbody", null, cartlist.map((item, index) => __jsx("tr", {
    key: index
  }, __jsx("td", null, " ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/product/default/${item.slug}`
  }, item.name)), __jsx("td", null, "$", item.sum.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })))), __jsx("tr", {
    className: "summary-subtotal"
  }, __jsx("td", null, "Subtotal:"), __jsx("td", null, "$", (0,_utils_index__WEBPACK_IMPORTED_MODULE_7__/* .cartPriceTotal */ .bS)(cartlist).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), __jsx("tr", null, __jsx("td", null, "Shipping:"), __jsx("td", null, "Free Shipping")), __jsx("tr", {
    className: "summary-total"
  }, __jsx("td", null, "Total:"), __jsx("td", null, "$", (0,_utils_index__WEBPACK_IMPORTED_MODULE_7__/* .cartPriceTotal */ .bS)(cartlist).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    type: "checkout"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "Direct bank transfer",
    expanded: true
  }, "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "Check payments"
  }, "Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "Cash on delivery"
  }, "Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "PayPal"
  }, __jsx("small", {
    className: "float-right paypal-link"
  }, "What is PayPal?"), "Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum."), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "Credit Card (Stripe)"
  }, __jsx("img", {
    src: "images/payments-summary.png",
    alt: "payments cards",
    className: "mb-1"
  }), "Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.")), __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2 btn-order btn-block"
  }, __jsx("span", {
    className: "btn-text"
  }, "Place Order"), __jsx("span", {
    className: "btn-hover-text"
  }, "Proceed to Checkout"))))))))));
}

const mapStateToProps = state => ({
  cartlist: state.cartlist.data
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Checkout));

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

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,6442,5130], function() { return __webpack_exec__(8981); });
module.exports = __webpack_exports__;

})();