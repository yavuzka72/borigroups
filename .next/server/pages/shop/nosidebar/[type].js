(function() {
var exports = {};
exports.id = 3402;
exports.ids = [3402];
exports.modules = {

/***/ 7795:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _type_; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
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
;// CONCATENATED MODULE: ./components/features/products/product-ten.jsx
var __jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductTen(props) {
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
    className: "product"
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
    className: "product-action action-icon-top"
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
    className: "product-action action-icon-top"
  }, __jsx("button", {
    className: "btn-product btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, __jsx("span", null, "quick view")))), __jsx("div", {
    className: "product-body product-action-inner"
  }, (0,utils/* isInWishlist */.QY)(wishlist, product) ? __jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist"
  }, __jsx("span", null, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick
  }, __jsx("span", null, "add to wishlist")), __jsx("div", {
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

/* harmony default export */ var product_ten = ((0,external_react_redux_.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, wishlist/* actions */.Nw), cart/* actions */.Nw), compare/* actions */.Nw), demo/* actions */.Nw))(ProductTen));
;// CONCATENATED MODULE: ./components/partials/shop/list/shop-list-three.jsx
var shop_list_three_jsx = (external_react_default()).createElement;




function ShopListThree(props) {
  const {
    products = [],
    loading
  } = props;
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const {
    0: cols,
    1: setCols
  } = (0,external_react_.useState)("");
  const query = (0,router_.useRouter)().query;
  (0,external_react_.useEffect)(() => {
    setCols(query.type == 'boxed' ? 'col-6 col-md-4 col-lg-4 col-xl-3' : 'col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2');
  }, [query]);
  return shop_list_three_jsx("div", {
    className: `products mb-3 content-overlay skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`
  }, products.length == 0 && !loading ? shop_list_three_jsx("p", {
    className: "no-results"
  }, "No products matching your selection.") : shop_list_three_jsx("div", {
    className: "row"
  }, loading ? fakeArray.map((item, index) => shop_list_three_jsx("div", {
    className: cols,
    key: index
  }, shop_list_three_jsx("div", {
    className: "skel-pro"
  }))) : products.map((product, index) => shop_list_three_jsx("div", {
    className: cols,
    key: index
  }, shop_list_three_jsx(product_ten, {
    product: product
  })))));
}

/* harmony default export */ var shop_list_three = (/*#__PURE__*/external_react_default().memo(ShopListThree));
// EXTERNAL MODULE: ./components/partials/shop/sidebar/shop-sidebar-one.jsx
var shop_sidebar_one = __webpack_require__(101);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
;// CONCATENATED MODULE: ./pages/shop/nosidebar/[type].jsx

var _type_jsx = (external_react_default()).createElement;











function ShopNoSidebar() {
  const router = (0,router_.useRouter)();
  const type = router.query.type;
  const query = router.query;
  const [getProducts, {
    data,
    loading,
    error
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_PRODUCTS */.tT);
  const [loadMoreProducts, {
    data: newData
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_PRODUCTS */.tT);
  const {
    0: perPage,
    1: setPerPage
  } = (0,external_react_.useState)(8);
  const {
    0: containerClass,
    1: setContainerClass
  } = (0,external_react_.useState)("container");
  const {
    0: pageTitle,
    1: setPageTitle
  } = (0,external_react_.useState)('Boxed No Sidebar');
  const {
    0: moreLoading,
    1: setMoreLoading
  } = (0,external_react_.useState)(false);
  const {
    0: products,
    1: setProducts
  } = (0,external_react_.useState)([]);
  const totalCount = data && data.products.totalCount;
  (0,external_react_.useLayoutEffect)(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);
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
        page: 1,
        perPage: perPage
      }
    });
    (0,utils/* scrollToPageContent */.qN)();
  }, [query]);
  (0,external_react_.useEffect)(() => {
    loadMoreProducts({
      variables: {
        searchTerm: query.searchTerm,
        color: query.color ? query.color.split(',') : [],
        size: query.size ? query.size.split(',') : [],
        brand: query.brand ? query.brand.split(',') : [],
        minPrice: parseInt(query.minPrice),
        maxPrice: parseInt(query.maxPrice),
        category: query.category,
        sortBy: query.sortBy ? query.sortBy : 'default',
        page: 1,
        from: perPage,
        perPage: 4
      }
    });
  }, [perPage]);
  (0,external_react_.useEffect)(() => {
    if (newData) {
      setProducts([...products, ...newData.products.data]);
    }
  }, [newData]);
  (0,external_react_.useEffect)(() => {
    if (type == 'boxed') {
      setPageTitle('Boxed No Sidebar');
    } else {
      setPageTitle('Fullwidth No Sidebar');
    }

    if (type == 'fullwidth') {
      setContainerClass('container-fluid');
    } else {
      setContainerClass('container');
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

  function showSidebar(e) {
    e.preventDefault();
    document.querySelector('body').classList.add('sidebar-filter-active');
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

  function loadMore(e) {
    e.preventDefault();

    if (perPage < totalCount) {
      setMoreLoading(true);
      setTimeout(() => {
        setPerPage(perPage + 4);
        setMoreLoading(false);
      }, 500);
    }
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
    className: containerClass
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
    className: containerClass
  }, _type_jsx("div", {
    className: "toolbox"
  }, _type_jsx("div", {
    className: "toolbox-left d-none d-lg-flex"
  }, _type_jsx("a", {
    href: "#",
    className: "sidebar-toggler mr-0 mr-md-5",
    onClick: showSidebar
  }, _type_jsx("i", {
    className: "icon-bars"
  }), "Filters")), _type_jsx("div", {
    className: "toolbox-center"
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
  }, "Date")))))), _type_jsx(shop_list_three, {
    products: products,
    loading: loading
  }), _type_jsx("div", {
    className: `load-more-container text-center ${totalCount > perPage || moreLoading ? '' : 'd-none'}`
  }, _type_jsx("a", {
    href: "#",
    className: "btn btn-outline-darker btn-load-more",
    onClick: loadMore
  }, "More Products", _type_jsx("i", {
    className: `icon-refresh ${moreLoading ? 'load-more-rotating' : ''}`
  }))), _type_jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSidebar
  }), _type_jsx(shop_sidebar_one/* default */.Z, {
    toggle: true
  }), _type_jsx("button", {
    className: "sidebar-fixed-toggler d-lg-none",
    onClick: toggleSidebar
  }, _type_jsx("i", {
    className: "icon-cog"
  })))));
}

/* harmony default export */ var _type_ = ((0,apollo/* default */.Z)({
  ssr: true
})(ShopNoSidebar));

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,5961,2870,6442,8289,2806,5708,9792,3459], function() { return __webpack_exec__(7795); });
module.exports = __webpack_exports__;

})();