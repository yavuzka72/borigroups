(function() {
var exports = {};
exports.id = 1193;
exports.ids = [1193];
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

/***/ 1882:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7882);
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5708);
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2806);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Wishlist(props) {
  const {
    0: wishItems,
    1: setWishItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setWishItems(props.wishlist.reduce((acc, product) => {
      let max = 0;
      let min = 999999;
      console.log(product);

      if (product.length > 1) {
        console.log("bir büyük" + product);
        product.variants.map(item => {
          if (min > item.price) min = item.price;
          if (max < item.price) max = item.price;
        }, []);

        if (product.variants.length == 0) {
          min = product.sale_price ? product.sale_price : product.price;
          max = product.price;
        }
      }

      if (product.length == 1) {
        console.log("bir " + product[0]);
        product[0].variants.map(item => {
          if (min > item.price) min = item.price;
          if (max < item.price) max = item.price;
        }, []);

        if (product[0].variants.length == 0) {
          min = product.sale_price ? product.sale_price : product.price;
          max = product.price;
        }
      }

      return [...acc, _objectSpread(_objectSpread({}, product), {}, {
        minPrice: min,
        maxPrice: max
      })];
    }, []));
  }, [props.wishlist]);

  function moveToCart(product) {
    props.removeFromWishlist(product);
    props.addToCart(product);
  }

  return __jsx("main", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Wishlist",
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
  }, "Wishlist")))), __jsx("div", {
    className: "page-content pb-5"
  }, wishItems.length > 0 ? __jsx("div", {
    className: "container"
  }, __jsx("table", {
    className: "table table-wishlist table-mobile"
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "Product"), __jsx("th", null, "Price"), __jsx("th", null, "Stock Status"), __jsx("th", null), __jsx("th", null))), __jsx("tbody", null, wishItems.map((product, index) => __jsx("tr", {
    key: index
  }, __jsx("td", {
    className: "product-col"
  }, __jsx("div", {
    className: "product"
  }, __jsx("figure", {
    className: "product-media"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/product/default/${product.slug}`,
    className: "product-image"
  }, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[0].url,
    alt: "product"
  }))), __jsx("h4", {
    className: "product-title"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/product/default/${product.slug}`
  }, product.name)))), __jsx("td", {
    className: "price-col"
  }, product.stock == 0 ? __jsx("div", {
    className: "product-price d-inline-block mb-0"
  }, __jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : product.minPrice == product.maxPrice ? __jsx("div", {
    className: "product-price d-inline-block mb-0"
  }, "$", product.minPrice.toFixed(2)) : product[0].variants.length == 0 ? __jsx("div", {
    className: "product-price d-inline-block mb-0"
  }, __jsx("span", {
    className: "new-price"
  }, "$", product.minPrice.toFixed(2)), __jsx("span", {
    className: "old-price"
  }, "$", product.maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price d-inline-block mb-0"
  }, "$", product.minPrice.toFixed(2), "\u2013$", product.maxPrice.toFixed(2))), __jsx("td", {
    className: "stock-col"
  }, __jsx("span", {
    className: `${product.stock == 0 ? 'out-of-stock' : 'in-stock'}`
  }, product.stock == 0 ? 'Out of stock' : 'In stock')), __jsx("td", {
    className: "action-col"
  }, __jsx("div", {
    className: "dropdown"
  }, product[0].variants.length > 0 || product.stock == 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: `/product/default/${product.slug}`,
    className: "btn btn-block btn-outline-primary-2 btn-select"
  }, __jsx("i", {
    className: "icon-list-alt"
  }), product.stock == '0' ? 'read more' : 'select') : __jsx("button", {
    className: "btn btn-block btn-outline-primary-2",
    onClick: e => moveToCart(product)
  }, __jsx("i", {
    className: "icon-cart-plus"
  }), "add to cart"))), __jsx("td", {
    className: "remove-col"
  }, __jsx("button", {
    className: "btn-remove",
    onClick: e => props.removeFromWishlist(product)
  }, __jsx("i", {
    className: "icon-close"
  }))))))), __jsx("div", {
    className: "wishlist-share"
  }, __jsx("div", {
    className: "social-icons social-icons-sm mb-2"
  }, __jsx("label", {
    className: "social-label"
  }, "Share on:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "social-icon",
    title: "Facebook"
  }, __jsx("i", {
    className: "icon-facebook-f"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "social-icon",
    title: "Twitter"
  }, __jsx("i", {
    className: "icon-twitter"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "social-icon",
    title: "Instagram"
  }, __jsx("i", {
    className: "icon-instagram"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "social-icon",
    title: "Youtube"
  }, __jsx("i", {
    className: "icon-youtube"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "social-icon",
    title: "Pinterest"
  }, __jsx("i", {
    className: "icon-pinterest"
  }))))) : __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "text-center"
  }, __jsx("i", {
    className: "icon-heart-o wishlist-empty d-block",
    style: {
      fontSize: '15rem',
      lineHeight: '1'
    }
  }), __jsx("span", {
    className: "d-block mt-2"
  }, "No products added to wishlist"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/shop/sidebar/list",
    className: "btn btn-primary mt-2"
  }, "Go Shop")))));
}

const mapStateToProps = state => ({
  wishlist: state.wishlist.data
});

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, _objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_4__/* .actions */ .Nw), _store_cart__WEBPACK_IMPORTED_MODULE_5__/* .actions */ .Nw))(Wishlist));

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,2806,5708], function() { return __webpack_exec__(1882); });
module.exports = __webpack_exports__;

})();