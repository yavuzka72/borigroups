(function() {
var exports = {};
exports.id = 3672;
exports.ids = [3672];
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

/***/ 784:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
/* harmony import */ var _components_features_qty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(812);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7882);
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2806);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function Cart(props) {
  const {
    0: cartList,
    1: setCartList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: shippingCost,
    1: setShippingCost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCartList(props.cartItems);
  }, [props.cartItems]);

  function onChangeShipping(value) {
    setShippingCost(value);
  }

  function changeQty(value, index) {
    setCartList(cartList.map((item, ind) => {
      if (ind == index) return _objectSpread(_objectSpread({}, item), {}, {
        qty: value,
        sum: (item.sale_price ? item.sale_price : item.price) * value
      });
      return item;
    }));
  }

  function updateCart(e) {
    let button = e.currentTarget;
    button.querySelector('.icon-refresh').classList.add('load-more-rotating');
    setTimeout(() => {
      props.updateCart(cartList);
      button.querySelector('.icon-refresh').classList.remove('load-more-rotating');
    }, 400);
  }

  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Shopping Cart",
    subTitle: "Shop"
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
    href: "/shop/sidebar/list"
  }, "Shop")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Shopping Cart")))), __jsx("div", {
    className: "page-content pb-5"
  }, __jsx("div", {
    className: "cart"
  }, __jsx("div", {
    className: "container"
  }, cartList.length > 0 ? __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-9"
  }, __jsx("table", {
    className: "table table-cart table-mobile"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Product"), __jsx("th", null, "Price"), __jsx("th", null, "Quantity"), __jsx("th", null, "Total"), __jsx("th", null))), __jsx("tbody", null, cartList.length > 0 ? cartList.map((item, index) => __jsx("tr", {
    key: index
  }, __jsx("td", {
    className: "product-col"
  }, __jsx("div", {
    className: "product"
  }, __jsx("figure", {
    className: "product-media"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/product/default/${item.slug}`,
    className: "product-image"
  }, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + item[0].pictures[0].url,
    alt: "product"
  }))), __jsx("h4", {
    className: "product-title"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/product/default/${item.slug}`
  }, item.name)))), __jsx("td", {
    className: "price-col"
  }, "$", item.sale_price ? item.sale_price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) : item.price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), __jsx("td", {
    className: "quantity-col"
  }, __jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    value: item.qty,
    changeQty: current => changeQty(current, index),
    adClass: "cart-product-quantity"
  })), __jsx("td", {
    className: "total-col"
  }, "$", item.sum.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), __jsx("td", {
    className: "remove-col"
  }, __jsx("button", {
    className: "btn-remove",
    onClick: () => props.removeFromCart(item)
  }, __jsx("i", {
    className: "icon-close"
  }))))) : __jsx("tr", null, __jsx("td", null, __jsx("p", {
    className: "pl-2 pt-1 pb-1"
  }, " No Products in Cart "))))), __jsx("div", {
    className: "cart-bottom"
  }, __jsx("div", {
    className: "cart-discount"
  }, __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    required: true,
    placeholder: "coupon code"
  }), __jsx("div", {
    className: "input-group-append"
  }, __jsx("button", {
    className: "btn btn-outline-primary-2",
    type: "submit"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  })))))), __jsx("button", {
    className: "btn btn-outline-dark-2",
    onClick: updateCart
  }, __jsx("span", null, "UPDATE CART"), __jsx("i", {
    className: "icon-refresh"
  })))), __jsx("aside", {
    className: "col-lg-3"
  }, __jsx("div", {
    className: "summary summary-cart"
  }, __jsx("h3", {
    className: "summary-title"
  }, "Cart Total"), __jsx("table", {
    className: "table table-summary"
  }, __jsx("tbody", null, __jsx("tr", {
    className: "summary-subtotal"
  }, __jsx("td", null, "Subtotal:"), __jsx("td", null, "$", (0,_utils_index__WEBPACK_IMPORTED_MODULE_6__/* .cartPriceTotal */ .bS)(props.cartItems).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), __jsx("tr", {
    className: "summary-shipping"
  }, __jsx("td", null, "Shipping:"), __jsx("td", null, "\xA0")), __jsx("tr", {
    className: "summary-shipping-row"
  }, __jsx("td", null, __jsx("div", {
    className: "custom-control custom-radio"
  }, __jsx("input", {
    type: "radio",
    id: "free-shipping",
    name: "shipping",
    className: "custom-control-input",
    onChange: e => onChangeShipping(0),
    defaultChecked: true
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "free-shipping"
  }, "Free Shipping"))), __jsx("td", null, "$0.00")), __jsx("tr", {
    className: "summary-shipping-row"
  }, __jsx("td", null, __jsx("div", {
    className: "custom-control custom-radio"
  }, __jsx("input", {
    type: "radio",
    id: "standard-shipping",
    name: "shipping",
    className: "custom-control-input",
    onChange: e => onChangeShipping(10)
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "standard-shipping"
  }, "Standard:"))), __jsx("td", null, "$10.00")), __jsx("tr", {
    className: "summary-shipping-row"
  }, __jsx("td", null, __jsx("div", {
    className: "custom-control custom-radio"
  }, __jsx("input", {
    type: "radio",
    id: "express-shipping",
    name: "shipping",
    className: "custom-control-input",
    onChange: e => onChangeShipping(20)
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "express-shipping"
  }, "Express:"))), __jsx("td", null, "$20.00")), __jsx("tr", {
    className: "summary-shipping-estimate"
  }, __jsx("td", null, "Estimate for Your Country", __jsx("br", null), " ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/dashboard"
  }, "Change address")), __jsx("td", null, "\xA0")), __jsx("tr", {
    className: "summary-total"
  }, __jsx("td", null, "Total:"), __jsx("td", null, "$", ((0,_utils_index__WEBPACK_IMPORTED_MODULE_6__/* .cartPriceTotal */ .bS)(props.cartItems) + shippingCost).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))))), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "btn btn-outline-primary-2 btn-order btn-block",
    href: "/shop/checkout"
  }, "PROCEED TO CHECKOUT")), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "btn btn-outline-dark-2 btn-block mb-3"
  }, __jsx("span", null, "CONTINUE SHOPPING"), __jsx("i", {
    className: "icon-refresh"
  })))) : __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("div", {
    className: "cart-empty-page text-center"
  }, __jsx("i", {
    className: "cart-empty icon-shopping-cart",
    style: {
      lineHeight: 1,
      fontSize: '15rem'
    }
  }), __jsx("p", {
    className: "px-3 py-2 cart-empty mb-3"
  }, "No products added to the cart"), __jsx("p", {
    className: "return-to-shop mb-0"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "btn btn-primary"
  }, "RETURN TO SHOP")))))))));
}

const mapStateToProps = state => ({
  cartItems: state.cartlist.data
});

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, _objectSpread({}, _store_cart__WEBPACK_IMPORTED_MODULE_5__/* .actions */ .Nw))(Cart));

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

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 3643:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ 584:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ 5060:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,6442,2806,812], function() { return __webpack_exec__(784); });
module.exports = __webpack_exports__;

})();