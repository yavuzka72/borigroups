exports.id = 6359;
exports.ids = [6359];
exports.modules = {

/***/ 6359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7852);
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5708);
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2806);
/* harmony import */ var _store_compare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9792);
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2870);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductSix(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    product,
    wishlist
  } = props;
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(99999);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let min = minPrice;
    let max = maxPrice;
    product.variants.map(item => {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    }, []);

    if (product.variants.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  function onCartClick(e) {
    e.preventDefault();
    props.addToCart(product);
  }

  function onWishlistClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isInWishlist */ .QY)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isInCompare */ .V4)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return __jsx("div", {
    className: "product product-5 text-center"
  }, __jsx("figure", {
    className: "product-media"
  }, product.new ? __jsx("span", {
    className: "product-label label-new"
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale"
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top"
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-out"
  }, "Out of Stock") : "", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: `/product/default/${product.slug}`
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image"
  }), product.pictures.length >= 2 ? __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover"
  }) : ""), product.stock > 0 ? __jsx("div", {
    className: "product-action-vertical"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isInWishlist */ .QY)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
  }, __jsx("span", null, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick
  }, __jsx("span", null, "add to wishlist")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, __jsx("span", null, "quick view")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-compare",
    onClick: onCompareClick
  }, __jsx("span", null, "compare"))) : __jsx("div", {
    className: "product-action-vertical"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isInWishlist */ .QY)(wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
  }, __jsx("span", null, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick
  }, __jsx("span", null, "add to wishlist")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, __jsx("span", null, "quick view")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-compare",
    onClick: onCompareClick
  }, __jsx("span", null, "compare"))), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action"
  }, product.variants.length > 0 ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select"
  }, __jsx("span", null, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick
  }, __jsx("span", null, "add to cart"))) : ""), __jsx("div", {
    className: "product-body"
  }, __jsx("h3", {
    className: "product-title"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price"
  }, __jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price"
  }, __jsx("span", {
    className: "new-price"
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price"
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2))));
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_5__/* .actions */ .Nw), _store_cart__WEBPACK_IMPORTED_MODULE_6__/* .actions */ .Nw), _store_compare__WEBPACK_IMPORTED_MODULE_7__/* .actions */ .Nw), _store_demo__WEBPACK_IMPORTED_MODULE_8__/* .actions */ .Nw))(ProductSix));

/***/ })

};
;