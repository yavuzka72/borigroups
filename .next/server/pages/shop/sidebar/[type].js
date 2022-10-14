(function() {
var exports = {};
exports.id = 7252;
exports.ids = [7252];
exports.modules = {

/***/ 306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _type_; }
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-sticky-box"
var external_react_sticky_box_ = __webpack_require__(9058);
var external_react_sticky_box_default = /*#__PURE__*/__webpack_require__.n(external_react_sticky_box_);
// EXTERNAL MODULE: ./components/features/alink.jsx
var alink = __webpack_require__(7852);
// EXTERNAL MODULE: ./components/features/page-header.jsx
var page_header = __webpack_require__(7882);
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
;// CONCATENATED MODULE: ./components/features/products/product-nine.jsx
var __jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductSix(props) {
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
    className: "product product-list"
  }, __jsx("div", {
    className: "row pr-2"
  }, __jsx("div", {
    className: "col-lg-3 col-md-3 col-6"
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
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image"
  }), product.pictures.length >= 2 ? __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover"
  }) : ""))), __jsx("div", {
    className: "col-md-6 order-last"
  }, __jsx("div", {
    className: "product-body product-action-inner"
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
  }, product.name)), __jsx("div", {
    className: "product-content"
  }, __jsx("p", null, product.short_desc)), product.variants.length > 0 ? __jsx("div", {
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
  }, "Color Name"))))) : "")), __jsx("div", {
    className: "col-md-3 col-6 order-md-last order-lg-last"
  }, __jsx("div", {
    className: "product-list-action"
  }, !product.stock || product.stock == 0 ? __jsx("div", {
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
  }, "( ", product.review, " Reviews )")), __jsx("div", {
    className: "product-action"
  }, __jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, __jsx("span", null, "quick view")), (0,utils/* isInWishlist */.QY)(wishlist, product) ? __jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist"
  }, __jsx("span", null, "wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick
  }, __jsx("span", null, "wishlist"))), product.stock > 0 ? product.variants.length > 0 ? __jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select"
  }, __jsx("span", null, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick
  }, __jsx("span", null, "add to cart")) : ""))));
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ var product_nine = ((0,external_react_redux_.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, wishlist/* actions */.Nw), cart/* actions */.Nw), compare/* actions */.Nw), demo/* actions */.Nw))(ProductSix));
;// CONCATENATED MODULE: ./components/features/products/product-eleven.jsx
var product_eleven_jsx = (external_react_default()).createElement;

function product_eleven_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_eleven_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_eleven_ownKeys(Object(source), true).forEach(function (key) { product_eleven_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_eleven_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_eleven_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductEleven(props) {
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

  return product_eleven_jsx("div", {
    className: "product product-7 text-center w-100"
  }, product_eleven_jsx("figure", {
    className: "product-media"
  }, product.new ? product_eleven_jsx("span", {
    className: "product-label label-new"
  }, "New") : "", product.sale_price ? product_eleven_jsx("span", {
    className: "product-label label-sale"
  }, "Sale") : "", product.top ? product_eleven_jsx("span", {
    className: "product-label label-top"
  }, "Top") : "", !product.stock || product.stock == 0 ? product_eleven_jsx("span", {
    className: "product-label label-out"
  }, "Out of Stock") : "", product_eleven_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product_eleven_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image"
  }), product.pictures.length >= 2 ? product_eleven_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover"
  }) : ""), product.stock > 0 ? product_eleven_jsx("div", {
    className: "product-action-vertical"
  }, (0,utils/* isInWishlist */.QY)(wishlist, product) ? product_eleven_jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
  }, product_eleven_jsx("span", null, "go to wishlist")) : product_eleven_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick
  }, product_eleven_jsx("span", null, "add to wishlist")), product_eleven_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, product_eleven_jsx("span", null, "quick view")), product_eleven_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-compare",
    onClick: onCompareClick
  }, product_eleven_jsx("span", null, "compare"))) : product_eleven_jsx("div", {
    className: "product-action-vertical"
  }, (0,utils/* isInWishlist */.QY)(wishlist, product) ? product_eleven_jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
  }, product_eleven_jsx("span", null, "go to wishlist")) : product_eleven_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick
  }, product_eleven_jsx("span", null, "add to wishlist")), product_eleven_jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, product_eleven_jsx("span", null, "quick view"))), product.stock && product.stock !== 0 ? product_eleven_jsx("div", {
    className: "product-action"
  }, product.variants.length > 0 ? product_eleven_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select"
  }, product_eleven_jsx("span", null, "select options")) : product_eleven_jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick
  }, product_eleven_jsx("span", null, "add to cart"))) : ""), product_eleven_jsx("div", {
    className: "product-body"
  }, product_eleven_jsx("div", {
    className: "product-cat"
  }, product.category.map((item, index) => product_eleven_jsx((external_react_default()).Fragment, {
    key: item.slug + '-' + index
  }, product_eleven_jsx(alink/* default */.Z, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: item.slug
      }
    }
  }, item.name), index < product.category.length - 1 ? ', ' : ""))), product_eleven_jsx("h3", {
    className: "product-title"
  }, product_eleven_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), !product.stock || product.stock == 0 ? product_eleven_jsx("div", {
    className: "product-price"
  }, product_eleven_jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? product_eleven_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? product_eleven_jsx("div", {
    className: "product-price"
  }, product_eleven_jsx("span", {
    className: "new-price"
  }, "$", minPrice.toFixed(2)), product_eleven_jsx("span", {
    className: "old-price"
  }, "$", maxPrice.toFixed(2))) : product_eleven_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), product_eleven_jsx("div", {
    className: "ratings-container"
  }, product_eleven_jsx("div", {
    className: "ratings"
  }, product_eleven_jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), product_eleven_jsx("span", {
    className: "tooltip-text"
  }, product.ratings.toFixed(2))), product_eleven_jsx("span", {
    className: "ratings-text"
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? product_eleven_jsx("div", {
    className: "product-nav product-nav-dots"
  }, product_eleven_jsx("div", {
    className: "row no-gutters"
  }, product.variants.map((item, index) => product_eleven_jsx(alink/* default */.Z, {
    href: "#",
    style: {
      backgroundColor: item.color
    },
    key: index
  }, product_eleven_jsx("span", {
    className: "sr-only"
  }, "Color Name"))))) : ""));
}

const product_eleven_mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ var product_eleven = ((0,external_react_redux_.connect)(product_eleven_mapStateToProps, product_eleven_objectSpread(product_eleven_objectSpread(product_eleven_objectSpread(product_eleven_objectSpread({}, wishlist/* actions */.Nw), cart/* actions */.Nw), compare/* actions */.Nw), demo/* actions */.Nw))(ProductEleven));
;// CONCATENATED MODULE: ./components/partials/shop/list/shop-list-one.jsx
var shop_list_one_jsx = (external_react_default()).createElement;





function ShopListOne(props) {
  const {
    loading,
    products = [],
    perPage
  } = props;
  const router = (0,router_.useRouter)();
  const {
    0: fakeArray,
    1: setFakeArray
  } = (0,external_react_.useState)([]);
  const {
    0: gridClass,
    1: setGridClass
  } = (0,external_react_.useState)('col-6');
  const type = router.query.type;
  (0,external_react_.useEffect)(() => {
    let temp = [];

    for (let i = 0; i < perPage; i++) {
      temp.push(i);
    }

    setFakeArray(temp);
  }, [perPage]);
  (0,external_react_.useEffect)(() => {
    if (type === 'list' || type === '2cols') setGridClass('col-6');
    if (type === '3cols') setGridClass('col-6 col-md-4 col-lg-4');
    if (type === '4cols') setGridClass('col-6 col-md-4 col-lg-4 col-xl-3');
  }, [type]);
  return shop_list_one_jsx("div", {
    className: "products mb-3"
  }, products.length == 0 && !loading ? shop_list_one_jsx("p", {
    className: "no-results"
  }, "No products matching your selection.") : shop_list_one_jsx((external_react_default()).Fragment, null, type == 'list' ? loading ? fakeArray.map((item, index) => shop_list_one_jsx("div", {
    className: "skel-pro skel-pro-list",
    key: index
  })) : products.map((product, index) => shop_list_one_jsx(product_nine, {
    product: product,
    key: index
  })) : shop_list_one_jsx("div", {
    className: "row"
  }, loading ? fakeArray.map((item, index) => shop_list_one_jsx("div", {
    className: gridClass,
    key: index
  }, shop_list_one_jsx("div", {
    className: "skel-pro"
  }))) : products.map((product, index) => shop_list_one_jsx("div", {
    className: gridClass,
    key: index
  }, shop_list_one_jsx(product_eleven, {
    product: product
  }))))));
}

/* harmony default export */ var shop_list_one = (/*#__PURE__*/external_react_default().memo(ShopListOne));
// EXTERNAL MODULE: ./components/features/pagination.jsx
var pagination = __webpack_require__(2078);
// EXTERNAL MODULE: ./components/partials/shop/sidebar/shop-sidebar-one.jsx
var shop_sidebar_one = __webpack_require__(101);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
;// CONCATENATED MODULE: ./pages/shop/sidebar/[type].jsx
var _type_jsx = (external_react_default()).createElement;













function ShopGrid() {
  const router = (0,router_.useRouter)();
  const type = router.query.type;
  const query = router.query;
  const [getProducts, {
    data,
    loading,
    error
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_PRODUCTS */.tT);
  const {
    0: firstLoading,
    1: setFirstLoading
  } = (0,external_react_.useState)(false);
  const {
    0: perPage,
    1: setPerPage
  } = (0,external_react_.useState)(5);
  const {
    0: pageTitle,
    1: setPageTitle
  } = (0,external_react_.useState)('List');
  const {
    0: toggle,
    1: setToggle
  } = (0,external_react_.useState)(false);
  const products = data && data.products;
  const totalCount = data && data.products.totalCount;
  (0,external_react_.useEffect)(() => {
    window.addEventListener("resize", resizeHandle);
    resizeHandle();
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) setToggle(true);else setToggle(false);
  }

  (0,external_react_.useEffect)(() => {
    getProducts({
      variables: {
        searchTerm: query.searchTerm,
        color: query.color ? query.color.split(',') : [],
        size: query.size ? query.size.split(',') : [],
        brand: query.brand ? query.brand.split(',') : [],
        minPrice: parseInt(query.minPrice),
        maxPrice: parseInt(query.maxPrice),
        category: query.category,
        sortBy: query.sortBy ? query.sortBy : 'default',
        page: query.page ? parseInt(query.page) : 1,
        perPage: perPage,
        list: true
      }
    });
    (0,utils/* scrollToPageContent */.qN)();
  }, [query, perPage]);
  (0,external_react_.useEffect)(() => {
    if (products) setFirstLoading(true);
  }, [products]);
  (0,external_react_.useEffect)(() => {
    if (type == 'list') {
      setPageTitle('List');
      setPerPage(5);
    } else if (type == '2cols') {
      setPageTitle('Grid 2 Columns');
      setPerPage(6);
    } else if (type == '3cols') {
      setPageTitle('Grid 3 Columns');
      setPerPage(9);
    } else if (type == '4cols') {
      setPageTitle('Grid 4 Columns');
      setPerPage(12);
    }
  }, [type]);

  function onSortByChange(e) {
    let queryObject = router.query;
    let url = router.pathname.replace('[type]', query.type) + '?';

    for (let key in queryObject) {
      if (key !== "type" && key !== "sortBy") {
        url += key + '=' + queryObject[key] + '&';
      }
    }

    router.push(url + 'sortBy=' + e.target.value);
  }

  function toggleSidebar() {
    if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
      document.querySelector('body').classList.remove('sidebar-filter-active');
    } else {
      document.querySelector('body').classList.add('sidebar-filter-active');
    }
  }

  function hideSidebar() {
    document.querySelector('body').classList.remove('sidebar-filter-active');
  }

  if (error) {
    return _type_jsx("div", null);
  }

  return _type_jsx("main", {
    className: "main shop"
  }, _type_jsx(page_header/* default */.Z, {
    title: pageTitle,
    subTitle: "Shop"
  }), _type_jsx("nav", {
    className: "breadcrumb-nav mb-2"
  }, _type_jsx("div", {
    className: "container"
  }, _type_jsx("ol", {
    className: "breadcrumb"
  }, _type_jsx("li", {
    className: "breadcrumb-item"
  }, _type_jsx(alink/* default */.Z, {
    href: "/"
  }, "Home")), _type_jsx("li", {
    className: "breadcrumb-item"
  }, _type_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "Shop")), _type_jsx("li", {
    className: "breadcrumb-item active"
  }, pageTitle), query.search ? _type_jsx("li", {
    className: "breadcrumb-item"
  }, _type_jsx("span", null, "Search - ", query.searchTerm)) : ""))), _type_jsx("div", {
    className: "page-content"
  }, _type_jsx("div", {
    className: "container"
  }, _type_jsx("div", {
    className: "row skeleton-body"
  }, _type_jsx("div", {
    className: `col-lg-9 skel-shop-products ${!loading ? 'loaded' : ''}`
  }, _type_jsx("div", {
    className: "toolbox"
  }, _type_jsx("div", {
    className: "toolbox-left"
  }, !loading && products ? _type_jsx("div", {
    className: "toolbox-info"
  }, "Showing", _type_jsx("span", null, " ", products.length, " of ", totalCount), " Products") : ""), _type_jsx("div", {
    className: "toolbox-right"
  }, _type_jsx("div", {
    className: "toolbox-sort"
  }, _type_jsx("label", {
    htmlFor: "sortby"
  }, "Sort by:"), _type_jsx("div", {
    className: "select-custom"
  }, _type_jsx("select", {
    name: "sortby",
    id: "sortby",
    className: "form-control",
    onChange: onSortByChange,
    value: query.sortBy ? query.sortBy : 'default'
  }, _type_jsx("option", {
    value: "default"
  }, "Default"), _type_jsx("option", {
    value: "featured"
  }, "Most Popular"), _type_jsx("option", {
    value: "rating"
  }, "Most Rated"), _type_jsx("option", {
    value: "new"
  }, "Date")))), _type_jsx("div", {
    className: "toolbox-layout"
  }, _type_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: `btn-layout ${type == 'list' ? 'active' : ''}`,
    scroll: false
  }, _type_jsx("svg", {
    width: "16",
    height: "10"
  }, _type_jsx("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "6",
    y: "0",
    width: "10",
    height: "4"
  }), _type_jsx("rect", {
    x: "0",
    y: "6",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "6",
    y: "6",
    width: "10",
    height: "4"
  }))), _type_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/2cols",
    className: `btn-layout ${type == '2cols' ? 'active' : ''}`,
    scroll: false
  }, _type_jsx("svg", {
    width: "10",
    height: "10"
  }, _type_jsx("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "6",
    y: "0",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "0",
    y: "6",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "6",
    y: "6",
    width: "4",
    height: "4"
  }))), _type_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/3cols",
    className: `btn-layout ${type == '3cols' ? 'active' : ''}`,
    scroll: false
  }, _type_jsx("svg", {
    width: "16",
    height: "10"
  }, _type_jsx("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "6",
    y: "0",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "12",
    y: "0",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "0",
    y: "6",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "6",
    y: "6",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "12",
    y: "6",
    width: "4",
    height: "4"
  }))), _type_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/4cols",
    className: `btn-layout ${type == '4cols' ? 'active' : ''}`,
    scroll: false
  }, _type_jsx("svg", {
    width: "22",
    height: "10"
  }, _type_jsx("rect", {
    x: "0",
    y: "0",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "6",
    y: "0",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "12",
    y: "0",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "18",
    y: "0",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "0",
    y: "6",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "6",
    y: "6",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "12",
    y: "6",
    width: "4",
    height: "4"
  }), _type_jsx("rect", {
    x: "18",
    y: "6",
    width: "4",
    height: "4"
  })))))), _type_jsx(shop_list_one, {
    products: products,
    perPage: perPage,
    loading: loading
  }), totalCount > perPage ? _type_jsx(pagination/* default */.Z, {
    perPage: perPage,
    total: totalCount
  }) : ""), _type_jsx("aside", {
    className: `col-lg-3 skel-shop-sidebar order-lg-first skeleton-body ${!loading || firstLoading ? 'loaded' : ''}`
  }, _type_jsx("div", {
    className: "skel-widget"
  }), _type_jsx("div", {
    className: "skel-widget"
  }), _type_jsx("div", {
    className: "skel-widget"
  }), _type_jsx("div", {
    className: "skel-widget"
  }), _type_jsx((external_react_sticky_box_default()), {
    className: "sticky-content",
    offsetTop: 70
  }, _type_jsx(shop_sidebar_one/* default */.Z, {
    toggle: toggle
  })), toggle ? _type_jsx("button", {
    className: "sidebar-fixed-toggler",
    onClick: toggleSidebar
  }, _type_jsx("i", {
    className: "icon-cog"
  })) : '', _type_jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSidebar
  }))))));
}

/* harmony default export */ var _type_ = ((0,apollo/* default */.Z)({
  ssr: true
})(ShopGrid));

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

/***/ 4766:
/***/ (function(module) {

"use strict";
module.exports = require("react-input-range");;

/***/ }),

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

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

/***/ }),

/***/ 9058:
/***/ (function(module) {

"use strict";
module.exports = require("react-sticky-box");;

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,5961,2870,6442,8289,2806,5708,9792,3459,2078], function() { return __webpack_exec__(306); });
module.exports = __webpack_exports__;

})();