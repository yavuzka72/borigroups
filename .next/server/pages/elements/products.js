(function() {
var exports = {};
exports.id = 5505;
exports.ids = [5505];
exports.modules = {

/***/ 2584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ products; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: ./components/features/alink.jsx
var alink = __webpack_require__(7852);
// EXTERNAL MODULE: ./components/features/page-header.jsx
var page_header = __webpack_require__(7882);
// EXTERNAL MODULE: ./components/partials/elements/element-list.jsx
var element_list = __webpack_require__(6683);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: ./store/wishlist.js
var wishlist = __webpack_require__(5708);
// EXTERNAL MODULE: ./store/cart.js
var cart = __webpack_require__(2806);
// EXTERNAL MODULE: ./store/compare.js
var compare = __webpack_require__(9792);
// EXTERNAL MODULE: ./store/demo.js
var demo = __webpack_require__(2870);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./components/features/products/product-one.jsx
var __jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductOne(props) {
  const router = (0,router_.useRouter)();
  const {
    product,
    wishlist
  } = props;
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,external_react_.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,external_react_.useState)(99999);
  (0,external_react_.useEffect)(() => {
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

    if (!(0,utils/* isInWishlist */.QY)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,utils/* isInCompare */.V4)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return __jsx("div", {
    className: "product text-center no-span"
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
  }, "Out of Stock") : "", __jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image"
  }), product.sm_pictures.length >= 2 ? __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover"
  }) : ""), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action"
  }, product.variants.length > 0 ? __jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select"
  }, __jsx("span", null, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick
  }, __jsx("span", null, "add to cart")), __jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, __jsx("span", null, "quick view"))) : __jsx("div", {
    className: "product-action"
  }, __jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, __jsx("span", null, "quick view")))), __jsx("div", {
    className: "product-body"
  }, __jsx("div", {
    className: "product-cat"
  }, product.category.map((item, index) => __jsx((external_react_default()).Fragment, {
    key: item.slug + '-' + index
  }, __jsx(alink/* default */.Z, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: item.slug
      }
    }
  }, item.name), index < product.category.length - 1 ? ', ' : ""))), __jsx("h3", {
    className: "product-title"
  }, __jsx(alink/* default */.Z, {
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
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "ratings-container"
  }, __jsx("div", {
    className: "ratings"
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), __jsx("span", {
    className: "tooltip-text"
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text"
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? __jsx("div", {
    className: "product-nav product-nav-dots"
  }, __jsx("div", {
    className: "row no-gutters"
  }, product.variants.map((item, index) => __jsx(alink/* default */.Z, {
    href: "#",
    style: {
      backgroundColor: item.color
    },
    key: index
  }, __jsx("span", {
    className: "sr-only"
  }, "Color Name"))))) : ""));
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ var product_one = ((0,external_react_redux_.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, wishlist/* actions */.Nw), cart/* actions */.Nw), compare/* actions */.Nw), demo/* actions */.Nw))(ProductOne));
;// CONCATENATED MODULE: ./components/features/products/product-two.jsx
var product_two_jsx = (external_react_default()).createElement;

function product_two_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_two_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_two_ownKeys(Object(source), true).forEach(function (key) { product_two_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_two_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_two_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductTwo(props) {
  const router = (0,router_.useRouter)();
  const {
    product,
    wishlist
  } = props;
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,external_react_.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,external_react_.useState)(99999);
  (0,external_react_.useEffect)(() => {
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

    if (!(0,utils/* isInWishlist */.QY)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,utils/* isInCompare */.V4)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return product_two_jsx("div", {
    className: "product"
  }, product_two_jsx("figure", {
    className: "product-media"
  }, product.new ? product_two_jsx("span", {
    className: "product-label label-new"
  }, "New") : "", product.sale_price ? product_two_jsx("span", {
    className: "product-label label-sale"
  }, "Sale") : "", product.top ? product_two_jsx("span", {
    className: "product-label label-top"
  }, "Top") : "", !product.stock || product.stock == 0 ? product_two_jsx("span", {
    className: "product-label label-out"
  }, "Out of Stock") : "", product_two_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product_two_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image"
  }), product.sm_pictures.length >= 2 ? product_two_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover"
  }) : ""), product.stock && product.stock !== 0 ? product_two_jsx("div", {
    className: "product-action action-icon-top"
  }, product.variants.length > 0 ? product_two_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select"
  }, product_two_jsx("span", null, "select options")) : product_two_jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick
  }, product_two_jsx("span", null, "add to cart")), product_two_jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, product_two_jsx("span", null, "quick view")), product_two_jsx("button", {
    className: "btn-product btn-compare",
    title: "Compare",
    onClick: onCompareClick
  }, product_two_jsx("span", null, "compare"))) : product_two_jsx("div", {
    className: "product-action action-icon-top"
  }, product_two_jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, product_two_jsx("span", null, "quick view")))), product_two_jsx("div", {
    className: "product-body product-action-inner"
  }, (0,utils/* isInWishlist */.QY)(wishlist, product) ? product_two_jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist"
  }, product_two_jsx("span", null, "go to wishlist")) : product_two_jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick
  }, product_two_jsx("span", null, "add to wishlist")), product_two_jsx("div", {
    className: "product-cat"
  }, product.category.map((item, index) => product_two_jsx((external_react_default()).Fragment, {
    key: item.slug + '-' + index
  }, product_two_jsx(alink/* default */.Z, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: item.slug
      }
    }
  }, item.name), index < product.category.length - 1 ? ', ' : ""))), product_two_jsx("h3", {
    className: "product-title"
  }, product_two_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), !product.stock || product.stock == 0 ? product_two_jsx("div", {
    className: "product-price"
  }, product_two_jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? product_two_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? product_two_jsx("div", {
    className: "product-price"
  }, product_two_jsx("span", {
    className: "new-price"
  }, "$", minPrice.toFixed(2)), product_two_jsx("span", {
    className: "old-price"
  }, "$", maxPrice.toFixed(2))) : product_two_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), product_two_jsx("div", {
    className: "ratings-container"
  }, product_two_jsx("div", {
    className: "ratings"
  }, product_two_jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), product_two_jsx("span", {
    className: "tooltip-text"
  }, product.ratings.toFixed(2))), product_two_jsx("span", {
    className: "ratings-text"
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? product_two_jsx("div", {
    className: "product-nav product-nav-dots"
  }, product_two_jsx("div", {
    className: "row no-gutters"
  }, product.variants.map((item, index) => product_two_jsx(alink/* default */.Z, {
    href: "#",
    style: {
      backgroundColor: item.color
    },
    key: index
  }, product_two_jsx("span", {
    className: "sr-only"
  }, "Color Name"))))) : ""));
}

const product_two_mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ var product_two = ((0,external_react_redux_.connect)(product_two_mapStateToProps, product_two_objectSpread(product_two_objectSpread(product_two_objectSpread(product_two_objectSpread({}, wishlist/* actions */.Nw), cart/* actions */.Nw), compare/* actions */.Nw), demo/* actions */.Nw))(ProductTwo));
;// CONCATENATED MODULE: ./components/features/products/product-three.jsx
var product_three_jsx = (external_react_default()).createElement;

function product_three_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_three_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_three_ownKeys(Object(source), true).forEach(function (key) { product_three_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_three_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_three_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductThree(props) {
  const router = (0,router_.useRouter)();
  const {
    product,
    wishlist
  } = props;
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,external_react_.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,external_react_.useState)(99999);
  (0,external_react_.useEffect)(() => {
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

    if (!(0,utils/* isInWishlist */.QY)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,utils/* isInCompare */.V4)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return product_three_jsx("div", {
    className: "product product-2"
  }, product_three_jsx("figure", {
    className: "product-media"
  }, product.new ? product_three_jsx("span", {
    className: "product-label label-circle label-new"
  }, "New") : "", product.sale_price ? product_three_jsx("span", {
    className: "product-label label-circle label-sale"
  }, "Sale") : "", product.top ? product_three_jsx("span", {
    className: "product-label label-circle label-top"
  }, "Top") : "", !product.stock || product.stock == 0 ? product_three_jsx("span", {
    className: "product-label label-circle label-out"
  }, "Out of Stock") : "", product_three_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product_three_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image"
  }), product.sm_pictures.length >= 2 ? product_three_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover"
  }) : ""), product.stock > 0 ? product_three_jsx("div", {
    className: "product-action-vertical"
  }, (0,utils/* isInWishlist */.QY)(wishlist, product) ? product_three_jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
  }, product_three_jsx("span", null, "go to wishlist")) : product_three_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick
  }, product_three_jsx("span", null, "add to wishlist"))) : "", product.stock && product.stock !== 0 ? product_three_jsx("div", {
    className: "product-action product-action-dark"
  }, product.variants.length > 0 ? product_three_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select"
  }, product_three_jsx("span", null, "select options")) : product_three_jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick
  }, product_three_jsx("span", null, "add to cart")), product_three_jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, product_three_jsx("span", null, "quick view"))) : product_three_jsx("div", {
    className: "product-action product-action-dark"
  }, product_three_jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, product_three_jsx("span", null, "quick view")))), product_three_jsx("div", {
    className: "product-body"
  }, product_three_jsx("div", {
    className: "product-cat"
  }, product.category.map((item, index) => product_three_jsx((external_react_default()).Fragment, {
    key: item.slug + '-' + index
  }, product_three_jsx(alink/* default */.Z, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: item.slug
      }
    }
  }, item.name), index < product.category.length - 1 ? ', ' : ""))), product_three_jsx("h3", {
    className: "product-title"
  }, product_three_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), !product.stock || product.stock == 0 ? product_three_jsx("div", {
    className: "product-price"
  }, product_three_jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? product_three_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? product_three_jsx("div", {
    className: "product-price"
  }, product_three_jsx("span", {
    className: "new-price"
  }, "$", minPrice.toFixed(2)), product_three_jsx("span", {
    className: "old-price"
  }, "$", maxPrice.toFixed(2))) : product_three_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), product_three_jsx("div", {
    className: "ratings-container"
  }, product_three_jsx("div", {
    className: "ratings"
  }, product_three_jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), product_three_jsx("span", {
    className: "tooltip-text"
  }, product.ratings.toFixed(2))), product_three_jsx("span", {
    className: "ratings-text"
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? product_three_jsx("div", {
    className: "product-nav product-nav-dots"
  }, product_three_jsx("div", {
    className: "row no-gutters"
  }, product.variants.map((item, index) => product_three_jsx(alink/* default */.Z, {
    href: "#",
    style: {
      backgroundColor: item.color
    },
    key: index
  }, product_three_jsx("span", {
    className: "sr-only"
  }, "Color Name"))))) : ""));
}

const product_three_mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ var product_three = ((0,external_react_redux_.connect)(product_three_mapStateToProps, product_three_objectSpread(product_three_objectSpread(product_three_objectSpread(product_three_objectSpread({}, wishlist/* actions */.Nw), cart/* actions */.Nw), compare/* actions */.Nw), demo/* actions */.Nw))(ProductThree));
;// CONCATENATED MODULE: ./components/features/products/product-four.jsx
var product_four_jsx = (external_react_default()).createElement;

function product_four_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_four_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_four_ownKeys(Object(source), true).forEach(function (key) { product_four_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_four_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_four_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductFour(props) {
  const router = (0,router_.useRouter)();
  const ref = (0,external_react_.useRef)(null);
  const {
    product,
    wishlist
  } = props;
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,external_react_.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,external_react_.useState)(99999);
  (0,external_react_.useEffect)(() => {
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
    ref.current.addEventListener('mouseover', mouseOverHandler, {
      passive: true
    });
    ref.current.addEventListener('mouseleave', mouseLeaveHandler, {
      passive: true
    });
  }, []);

  function onCartClick(e) {
    e.preventDefault();
    props.addToCart(product);
  }

  function onWishlistClick(e) {
    e.preventDefault();

    if (!(0,utils/* isInWishlist */.QY)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,utils/* isInCompare */.V4)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  function mouseOverHandler() {
    let animDiff = ref.current.offsetHeight - (ref.current.querySelector('.product-body').offsetHeight + ref.current.querySelector('.product-media').offsetHeight);
    let animDistance = ref.current.querySelector('.product-footer').offsetHeight - animDiff;
    ref.current.querySelector('.product-footer').setAttribute('style', 'visibility: visible; transform: translateY(0);');
    ref.current.querySelector('.product-body').setAttribute('style', 'transform: translateY(' + -animDistance + 'px)');
  }

  function mouseLeaveHandler() {
    ref.current.querySelector('.product-footer').setAttribute('style', 'visibility: hidden; transform: translateY(100%);');
    ref.current.querySelector('.product-body').setAttribute('style', 'transform: translateY(0)');
  }

  return product_four_jsx("div", {
    className: "product product-3",
    ref: ref
  }, product_four_jsx("figure", {
    className: "product-media"
  }, product.new ? product_four_jsx("span", {
    className: "product-label label-new"
  }, "New") : "", product.sale_price ? product_four_jsx("span", {
    className: "product-label label-sale"
  }, "Sale") : "", product.top ? product_four_jsx("span", {
    className: "product-label label-top"
  }, "Top") : "", !product.stock || product.stock == 0 ? product_four_jsx("span", {
    className: "product-label label-out"
  }, "Out of Stock") : "", product_four_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product_four_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image"
  }), product.sm_pictures.length >= 2 ? product_four_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover"
  }) : ""), product.stock > 0 ? product_four_jsx("div", {
    className: "product-action-vertical"
  }, (0,utils/* isInWishlist */.QY)(wishlist, product) ? product_four_jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
  }, product_four_jsx("span", null, "go to wishlist")) : product_four_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick
  }, product_four_jsx("span", null, "add to wishlist")), product_four_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, product_four_jsx("span", null, "quick view")), product_four_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-compare",
    onClick: onCompareClick
  }, product_four_jsx("span", null, "compare"))) : product_four_jsx("div", {
    className: "product-action-vertical"
  }, (0,utils/* isInWishlist */.QY)(wishlist, product) ? product_four_jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
  }, product_four_jsx("span", null, "go to wishlist")) : product_four_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick
  }, product_four_jsx("span", null, "add to wishlist")), product_four_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, product_four_jsx("span", null, "quick view")))), product_four_jsx("div", {
    className: "product-body"
  }, product.stock && product.stock !== 0 ? product_four_jsx("div", {
    className: "product-action"
  }, product.variants.length > 0 ? product_four_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select"
  }, product_four_jsx("span", null, "select options")) : product_four_jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick
  }, product_four_jsx("span", null, "add to cart"))) : "", product_four_jsx("div", {
    className: "product-cat"
  }, product.category.map((item, index) => product_four_jsx((external_react_default()).Fragment, {
    key: item.slug + '-' + index
  }, product_four_jsx(alink/* default */.Z, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: item.slug
      }
    }
  }, item.name), index < product.category.length - 1 ? ', ' : ""))), product_four_jsx("h3", {
    className: "product-title"
  }, product_four_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), !product.stock || product.stock == 0 ? product_four_jsx("div", {
    className: "product-price"
  }, product_four_jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? product_four_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? product_four_jsx("div", {
    className: "product-price"
  }, product_four_jsx("span", {
    className: "new-price"
  }, "$", minPrice.toFixed(2)), product_four_jsx("span", {
    className: "old-price"
  }, "$", maxPrice.toFixed(2))) : product_four_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2))), product_four_jsx("div", {
    className: "product-footer"
  }, product_four_jsx("div", {
    className: "ratings-container"
  }, product_four_jsx("div", {
    className: "ratings"
  }, product_four_jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), product_four_jsx("span", {
    className: "tooltip-text"
  }, product.ratings.toFixed(2))), product_four_jsx("span", {
    className: "ratings-text"
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? product_four_jsx("div", {
    className: "product-nav product-nav-dots"
  }, product_four_jsx("div", {
    className: "row no-gutters"
  }, product.variants.map((item, index) => product_four_jsx(alink/* default */.Z, {
    href: "#",
    style: {
      backgroundColor: item.color
    },
    key: index
  }, product_four_jsx("span", {
    className: "sr-only"
  }, "Color Name"))))) : ""));
}

const product_four_mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ var product_four = ((0,external_react_redux_.connect)(product_four_mapStateToProps, product_four_objectSpread(product_four_objectSpread(product_four_objectSpread(product_four_objectSpread({}, wishlist/* actions */.Nw), cart/* actions */.Nw), compare/* actions */.Nw), demo/* actions */.Nw))(ProductFour));
// EXTERNAL MODULE: ./components/features/products/product-five.jsx
var product_five = __webpack_require__(1921);
// EXTERNAL MODULE: ./components/features/products/product-six.jsx
var product_six = __webpack_require__(6359);
;// CONCATENATED MODULE: ./components/features/products/product-seven.jsx
var product_seven_jsx = (external_react_default()).createElement;

function product_seven_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_seven_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_seven_ownKeys(Object(source), true).forEach(function (key) { product_seven_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_seven_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_seven_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductSeven(props) {
  const router = (0,router_.useRouter)();
  const {
    product,
    wishlist
  } = props;
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,external_react_.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,external_react_.useState)(99999);
  (0,external_react_.useEffect)(() => {
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

    if (!(0,utils/* isInWishlist */.QY)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,utils/* isInCompare */.V4)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return product_seven_jsx("div", {
    className: "product product-6 no-span"
  }, product_seven_jsx("figure", {
    className: "product-media"
  }, product.new ? product_seven_jsx("span", {
    className: "product-label"
  }, "New") : "", product.sale_price ? product_seven_jsx("span", {
    className: "product-label"
  }, "Sale") : "", product.top ? product_seven_jsx("span", {
    className: "product-label"
  }, "Top") : "", !product.stock || product.stock == 0 ? product_seven_jsx("span", {
    className: "product-label"
  }, "Out of Stock") : "", product_seven_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product_seven_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image"
  }), product.sm_pictures.length >= 2 ? product_seven_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover"
  }) : ""), product_seven_jsx("div", {
    className: "product-action-vertical"
  }, (0,utils/* isInWishlist */.QY)(wishlist, product) ? product_seven_jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
  }, product_seven_jsx("span", null, "go to wishlist")) : product_seven_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick
  }, product_seven_jsx("span", null, "add to wishlist")))), product_seven_jsx("div", {
    className: "product-body"
  }, product_seven_jsx("div", {
    className: "product-cat"
  }, product.category.map((item, index) => product_seven_jsx((external_react_default()).Fragment, {
    key: item.slug + '-' + index
  }, product_seven_jsx(alink/* default */.Z, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: item.slug
      }
    }
  }, item.name), index < product.category.length - 1 ? ', ' : ""))), product_seven_jsx("h3", {
    className: "product-title"
  }, product_seven_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), !product.stock || product.stock == 0 ? product_seven_jsx("div", {
    className: "product-price"
  }, product_seven_jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? product_seven_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? product_seven_jsx("div", {
    className: "product-price"
  }, product_seven_jsx("span", {
    className: "new-price"
  }, "$", minPrice.toFixed(2)), product_seven_jsx("span", {
    className: "old-price"
  }, "$", maxPrice.toFixed(2))) : product_seven_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), product_seven_jsx("div", {
    className: "ratings-container d-none d-xl-block"
  }, product_seven_jsx("div", {
    className: "ratings"
  }, product_seven_jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), product_seven_jsx("span", {
    className: "tooltip-text"
  }, product.ratings.toFixed(2))), product_seven_jsx("span", {
    className: "ratings-text"
  }, "( ", product.review, " Reviews )")), product.stock && product.stock !== 0 ? product_seven_jsx("div", {
    className: "product-action"
  }, product.variants.length > 0 ? product_seven_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select"
  }, product_seven_jsx("span", null, "select options")) : product_seven_jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick
  }, product_seven_jsx("span", null, "add to cart")), product_seven_jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, product_seven_jsx("span", null, "quick view"))) : ""));
}

const product_seven_mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ var product_seven = ((0,external_react_redux_.connect)(product_seven_mapStateToProps, product_seven_objectSpread(product_seven_objectSpread(product_seven_objectSpread(product_seven_objectSpread({}, wishlist/* actions */.Nw), cart/* actions */.Nw), compare/* actions */.Nw), demo/* actions */.Nw))(ProductSeven));
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./utils/data.js
var utils_data = __webpack_require__(8289);
;// CONCATENATED MODULE: ./pages/elements/products.jsx

var products_jsx = (external_react_default()).createElement;
















function Products() {
  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_ELEMENT_PRODUCTS */.xg);
  const products = data && data.elementProducts;
  const productGroup1 = data && data.elementProducts.slice(0, 3);
  const productGroup2 = data && data.elementProducts.slice(0, 4);
  const productGroup3 = data && data.elementProducts.slice(0, 5);

  if (error) {
    return products_jsx("div", null, error);
  }

  return products_jsx("div", {
    className: "main"
  }, products_jsx(page_header/* default */.Z, {
    title: "Products",
    subTitle: "Elements"
  }), products_jsx("nav", {
    className: "breadcrumb-nav"
  }, products_jsx("div", {
    className: "container"
  }, products_jsx("ol", {
    className: "breadcrumb"
  }, products_jsx("li", {
    className: "breadcrumb-item"
  }, products_jsx(alink/* default */.Z, {
    href: "/"
  }, "Home")), products_jsx("li", {
    className: "breadcrumb-item"
  }, products_jsx(alink/* default */.Z, {
    href: "/elements"
  }, "Elements")), products_jsx("li", {
    className: "breadcrumb-item active"
  }, "Products")))), products_jsx("div", {
    className: "page-content skeleton-body"
  }, products_jsx("div", {
    className: "container"
  }, products_jsx("h2", {
    className: "title text-center mb-3"
  }, "3 Columns Large"), products_jsx("div", {
    className: "row"
  }, loading ? [1, 2, 3].map((item, index) => products_jsx("div", {
    className: "col-6 col-md-4 col-lg-4 mb-2",
    key: index
  }, products_jsx("div", {
    className: "skel-pro"
  }))) : productGroup1.map((item, index) => products_jsx("div", {
    className: "col-6 col-md-4 col-lg-4",
    key: `one_${index}`
  }, products_jsx(product_one, {
    product: item
  })))), products_jsx("hr", {
    className: "mt-1 mb-5"
  }), products_jsx("h2", {
    className: "title text-center mb-3"
  }, "4 Columns Carousel"), loading ? products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-xl-4 cols-lg-3 cols-2",
    options: utils_data/* mainSlider2 */.XP
  }, [1, 2, 3, 4].map((item, index) => products_jsx("div", {
    className: "skel-pro",
    key: index
  }))) : products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-xl-4 cols-lg-3 cols-2",
    options: utils_data/* mainSlider2 */.XP
  }, productGroup2.map((product, index) => products_jsx(product_two, {
    product: product,
    key: index
  }))), products_jsx("hr", {
    className: "mt-3 mb-5"
  }), products_jsx("h2", {
    className: "title text-center mb-3"
  }, "4 Columns Carousel 2"), loading ? products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-xl-4 cols-lg-3 cols-2",
    options: utils_data/* mainSlider2 */.XP
  }, [1, 2, 3, 4].map((item, index) => products_jsx("div", {
    className: "skel-pro",
    key: index
  }))) : products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-xl-4 cols-lg-3 cols-2",
    options: utils_data/* mainSlider2 */.XP
  }, productGroup2.map((product, index) => products_jsx(product_three, {
    product: product,
    key: index
  }))), products_jsx("hr", {
    className: "mt-3 mb-5"
  }), products_jsx("h2", {
    className: "title text-center mb-3"
  }, "4 Columns Simple"), products_jsx("div", {
    className: "row"
  }, loading ? [1, 2, 3, 4].map((item, index) => products_jsx("div", {
    className: "col-6 col-md-4 col-lg-3 mb-2",
    key: index
  }, products_jsx("div", {
    className: "skel-pro"
  }))) : productGroup2.map((product, index) => products_jsx("div", {
    className: "col-6 col-md-4 col-lg-3",
    key: index
  }, products_jsx(product_four, {
    product: product
  })))), products_jsx("hr", {
    className: "mt-2 mb-5"
  }), products_jsx("h2", {
    className: "title text-center mb-3"
  }, "5 Columns Simple"), loading ? products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2",
    options: utils_data/* mainSlider4 */.s1
  }, [1, 2, 3, 4, 5].map((item, index) => products_jsx("div", {
    className: "skel-pro",
    key: index
  }))) : products_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2",
    options: utils_data/* mainSlider4 */.s1
  }, productGroup3.map((product, index) => products_jsx(product_five/* default */.Z, {
    product: product,
    key: index
  }))), products_jsx("hr", {
    className: "mt-0 mb-5"
  })), products_jsx("div", {
    className: "container-fluid"
  }, products_jsx("h2", {
    className: "title text-center mb-3"
  }, "Fullwidth"), products_jsx("div", {
    className: "row"
  }, loading ? [1, 2, 3, 4].map((item, index) => products_jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-2 mb-2",
    key: index
  }, products_jsx("div", {
    className: "skel-pro"
  }))) : products.map((product, index) => products_jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-2",
    key: index
  }, products_jsx(product_six/* default */.Z, {
    product: product
  }))))), products_jsx("div", {
    className: "container"
  }, products_jsx("hr", {
    className: "mt-2 mb-5"
  }), products_jsx("h2", {
    className: "title text-center mb-3"
  }, "4 Columns Without Space"), products_jsx("div", {
    className: "row no-gutters"
  }, loading ? [1, 2, 3, 4].map((item, index) => products_jsx("div", {
    className: "col-sm-6 col-12 col-md-4 col-lg-3 mb-2",
    key: index
  }, products_jsx("div", {
    className: "skel-pro"
  }))) : productGroup2.map((product, index) => products_jsx("div", {
    className: "col-sm-6 col-12 col-md-4 col-lg-3",
    key: index
  }, products_jsx(product_seven, {
    product: product
  })))))), products_jsx(element_list/* default */.Z, null));
}

/* harmony default export */ var products = ((0,apollo/* default */.Z)({
  ssr: true
})(Products));

/***/ }),

/***/ 7530:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ 7381:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ 806:
/***/ (function(module) {

"use strict";
module.exports = require("apollo-boost");;

/***/ }),

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 5766:
/***/ (function(module) {

"use strict";
module.exports = require("next-apollo");;

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

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,6442,8289,2806,5708,6683,9792,6359,8353], function() { return __webpack_exec__(2584); });
module.exports = __webpack_exports__;

})();