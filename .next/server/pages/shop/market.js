(function() {
var exports = {};
exports.id = 4094;
exports.ids = [4094];
exports.modules = {

/***/ 9039:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ market; }
});

// EXTERNAL MODULE: external "react-sticky-box"
var external_react_sticky_box_ = __webpack_require__(9058);
var external_react_sticky_box_default = /*#__PURE__*/__webpack_require__.n(external_react_sticky_box_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: ./components/features/alink.jsx
var alink = __webpack_require__(7852);
// EXTERNAL MODULE: ./components/features/page-header.jsx
var page_header = __webpack_require__(7882);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: ./components/features/products/product-five.jsx
var product_five = __webpack_require__(1921);
;// CONCATENATED MODULE: ./components/partials/shop/list/shop-list-two.jsx
var __jsx = (external_react_default()).createElement;



function ShopListThree(props) {
  const {
    products = [],
    loading
  } = props;
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return __jsx("div", {
    className: `products mb-3 skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`
  }, products.length == 0 && !loading ? __jsx("p", {
    className: "no-results"
  }, "No products matching your selection.") : __jsx("div", {
    className: "row"
  }, loading ? fakeArray.map((item, index) => __jsx("div", {
    className: "col-6 col-md-4 col-xl-3 mb-2",
    key: index
  }, __jsx("div", {
    className: "skel-pro"
  }))) : products.map((product, index) => __jsx("div", {
    className: "col-6 col-md-4 col-xl-3",
    key: index
  }, __jsx(product_five/* default */.Z, {
    product: product
  })))));
}

/* harmony default export */ var shop_list_two = (/*#__PURE__*/external_react_default().memo(ShopListThree));
// EXTERNAL MODULE: ./components/features/pagination.jsx
var pagination = __webpack_require__(2078);
// EXTERNAL MODULE: ./utils/data.js
var utils_data = __webpack_require__(8289);
;// CONCATENATED MODULE: ./components/partials/shop/sidebar/shop-sidebar-three.jsx
var shop_sidebar_three_jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function ShopSidebarThree(props) {
  const {
    toggle = false
  } = props;
  const router = (0,router_.useRouter)();
  const query = (0,router_.useRouter)().query;

  function containsAttrInUrl(type, value) {
    const currentQueries = query[type] ? query[type].split(',') : [];
    return currentQueries && currentQueries.includes(value);
  }

  function containsPriceInUrl(price) {
    let flag = false;
    if (query.minPrice && query.minPrice == price.min) flag = true;else return false;

    if (price.max) {
      if (query.maxPrice && query.maxPrice == price.max) flag = true;else return false;
    }

    return true;
  }

  function getUrlForAttrs(type, value) {
    let currentQueries = query[type] ? query[type].split(',') : [];
    currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter(item => item !== value) : [...currentQueries, value];
    return {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        [type]: currentQueries.join(',')
      })
    };
  }

  function onAttrClick(e, attr, value) {
    if (getUrlForAttrs(attr, value)) router.push(getUrlForAttrs(attr, value));
  }

  function onPriceClick(value) {
    router.push({
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: 1,
        minPrice: value.min,
        maxPrice: value.max
      })
    });
  }

  return shop_sidebar_three_jsx((external_react_default()).Fragment, null, shop_sidebar_three_jsx("aside", {
    className: `${toggle ? 'sidebar-filter' : 'sidebar'} sidebar-shop`
  }, shop_sidebar_three_jsx("div", {
    className: toggle ? 'sidebar-filter-wrapper' : ''
  }, shop_sidebar_three_jsx("div", {
    className: "widget widget-collapsible"
  }, shop_sidebar_three_jsx("h3", {
    className: "widget-title mb-2"
  }, shop_sidebar_three_jsx("span", null, "Category")), shop_sidebar_three_jsx("div", {
    className: "widget-body pt-0"
  }, shop_sidebar_three_jsx("div", {
    className: "filter-items filter-items-count"
  }, utils_data/* shopData.categories.map */.JQ.categories.map((item, index) => shop_sidebar_three_jsx("div", {
    className: "filter-item",
    key: `cat_${index}`
  }, shop_sidebar_three_jsx(alink/* default */.Z, {
    className: `${query.category == item.slug ? 'active' : ''}`,
    href: {
      pathname: router.pathname,
      query: {
        category: item.slug
      }
    },
    scroll: false
  }, item.name), shop_sidebar_three_jsx("span", {
    className: "item-count"
  }, item.count)))))), shop_sidebar_three_jsx("div", {
    className: "widget widget-collapsible"
  }, shop_sidebar_three_jsx("h3", {
    className: "widget-title mb-2"
  }, shop_sidebar_three_jsx("span", null, "Brand")), shop_sidebar_three_jsx("div", {
    className: "widget-body pt-0"
  }, shop_sidebar_three_jsx("div", {
    className: "filter-items"
  }, utils_data/* shopData.brands.map */.JQ.brands.map((item, index) => shop_sidebar_three_jsx("div", {
    className: "filter-item",
    key: index
  }, shop_sidebar_three_jsx("div", {
    className: "custom-control custom-checkbox"
  }, shop_sidebar_three_jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: `brand-${index + 1}`,
    onChange: e => onAttrClick(e, 'brand', item.slug),
    checked: containsAttrInUrl('brand', item.slug) ? true : false
  }), shop_sidebar_three_jsx("label", {
    className: "custom-control-label",
    htmlFor: `brand-${index + 1}`
  }, item.brand))))))), shop_sidebar_three_jsx("div", {
    className: "widget widget-collapsible"
  }, shop_sidebar_three_jsx("h3", {
    className: "widget-title mb-2"
  }, shop_sidebar_three_jsx("span", null, "Price")), shop_sidebar_three_jsx("div", {
    className: "widget-body pt-0"
  }, shop_sidebar_three_jsx("div", {
    className: "filter-items"
  }, utils_data/* shopData.prices.map */.JQ.prices.map((item, index) => shop_sidebar_three_jsx("div", {
    className: "filter-item",
    key: index
  }, shop_sidebar_three_jsx("div", {
    className: "custom-control custom-radio"
  }, shop_sidebar_three_jsx("input", {
    type: "radio",
    className: "custom-control-input",
    id: `price-${index + 1}`,
    onChange: e => onPriceClick(item),
    checked: containsPriceInUrl(item) ? true : false
  }), shop_sidebar_three_jsx("label", {
    className: "custom-control-label",
    htmlFor: `price-${index + 1}`
  }, item.name))))))), shop_sidebar_three_jsx("div", {
    className: "widget widget-collapsible"
  }, shop_sidebar_three_jsx("h3", {
    className: "widget-title mb-2"
  }, shop_sidebar_three_jsx("span", null, "Customer Rating")), shop_sidebar_three_jsx("div", {
    className: "widget-body pt-0"
  }, shop_sidebar_three_jsx("div", {
    className: "filter-items"
  }, [5, 4, 3, 2, 1].map((item, index) => shop_sidebar_three_jsx("div", {
    className: "filter-item",
    key: index
  }, shop_sidebar_three_jsx("div", {
    className: "custom-control custom-checkbox"
  }, shop_sidebar_three_jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: `rating-${index + 1}`,
    onChange: e => onAttrClick(e, 'rating', item.toString()),
    checked: containsAttrInUrl('rating', item.toString()) ? true : false
  }), shop_sidebar_three_jsx("label", {
    className: "custom-control-label",
    htmlFor: `rating-${index + 1}`
  }, shop_sidebar_three_jsx("span", {
    className: "ratings-container"
  }, shop_sidebar_three_jsx("span", {
    className: "ratings"
  }, shop_sidebar_three_jsx("span", {
    className: "ratings-val",
    style: {
      width: `${item * 20}%`
    }
  })), shop_sidebar_three_jsx("span", {
    className: "ratings-text"
  }))))))))), shop_sidebar_three_jsx("div", {
    className: "widget widget-collapsible mb-0 pb-0"
  }, shop_sidebar_three_jsx("h3", {
    className: "widget-title mb-2"
  }, shop_sidebar_three_jsx("span", null, "Colour")), shop_sidebar_three_jsx("div", {
    className: "widget-body pt-0"
  }, shop_sidebar_three_jsx("div", {
    className: "filter-colors"
  }, utils_data/* shopData.colors.map */.JQ.colors.map((item, index) => shop_sidebar_three_jsx(alink/* default */.Z, {
    href: getUrlForAttrs('color', item.color_name),
    className: containsAttrInUrl('color', item.color_name) ? 'selected' : '',
    style: {
      backgroundColor: item.color
    },
    key: index,
    scroll: false
  }, shop_sidebar_three_jsx("span", {
    className: "sr-only"
  }, "Color Name")))))))));
}

/* harmony default export */ var shop_sidebar_three = (/*#__PURE__*/external_react_default().memo(ShopSidebarThree));
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
;// CONCATENATED MODULE: ./pages/shop/market.jsx
var market_jsx = (external_react_default()).createElement;















function ShopMarket() {
  const router = (0,router_.useRouter)();
  const query = router.query;
  const [getProducts, {
    data,
    loading,
    error
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_PRODUCTS */.tT);
  const {
    0: perPage,
    1: setPerPage
  } = (0,external_react_.useState)(8);
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
        rating: query.rating ? query.rating.split(',') : []
      }
    });
  }, [query, perPage]);

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
    return market_jsx("div", null);
  }

  return market_jsx("main", {
    className: "main shop-market"
  }, market_jsx(page_header/* default */.Z, {
    title: "Shop Market",
    subTitle: "Shop"
  }), market_jsx("nav", {
    className: "breadcrumb-nav mb-3"
  }, market_jsx("div", {
    className: "container"
  }, market_jsx("ol", {
    className: "breadcrumb"
  }, market_jsx("li", {
    className: "breadcrumb-item"
  }, market_jsx(alink/* default */.Z, {
    href: "/"
  }, "Home")), market_jsx("li", {
    className: "breadcrumb-item"
  }, market_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "Shop")), market_jsx("li", {
    className: "breadcrumb-item active"
  }, "Market")))), market_jsx("div", {
    className: "page-content"
  }, market_jsx("div", {
    className: "container"
  }, market_jsx("div", {
    className: "row"
  }, market_jsx("div", {
    className: "col-lg-9 col-xl-4-5col"
  }, market_jsx(owl_carousel/* default */.Z, {
    adClass: "category-banners-slider owl-simple owl-nav-inside cols-1",
    options: utils_data/* mainSlider10 */.Ju
  }, market_jsx("div", {
    className: "banner banner-poster"
  }, market_jsx(alink/* default */.Z, {
    href: "#"
  }, market_jsx("div", {
    className: "lazy-overlay"
  }), market_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "images/market/slider/slider-1.jpg",
    alt: "Banner",
    effect: "blur",
    width: 400,
    height: 260
  })), market_jsx("div", {
    className: "banner-content banner-content-right"
  }, market_jsx("h3", {
    className: "banner-subtitle"
  }, market_jsx(alink/* default */.Z, {
    href: "#"
  }, "Amazing Value")), market_jsx("h2", {
    className: "banner-title"
  }, market_jsx(alink/* default */.Z, {
    href: "#"
  }, "High Performance 4K TVs")), market_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "banner-link"
  }, "Shop Now ", market_jsx("i", {
    className: "icon-long-arrow-right"
  })))), market_jsx("div", {
    className: "banner banner-poster"
  }, market_jsx(alink/* default */.Z, {
    href: "#"
  }, market_jsx("div", {
    className: "lazy-overlay"
  }), market_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "images/market/slider/slider-2.jpg",
    alt: "Banner",
    effect: "blur",
    width: 400,
    height: 260
  })), market_jsx("div", {
    className: "banner-content"
  }, market_jsx("h3", {
    className: "banner-subtitle"
  }, market_jsx(alink/* default */.Z, {
    href: "#"
  }, "Weekend Deal")), market_jsx("h2", {
    className: "banner-title"
  }, market_jsx(alink/* default */.Z, {
    href: "#"
  }, "Apple & Accessories")), market_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "banner-link"
  }, "Shop Now ", market_jsx("i", {
    className: "icon-long-arrow-right"
  }))))), market_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-carousel owl-simple owl-nav-align brand-carousel cols-xl-7 cols-lg-5 cols-md-4 cols-sm-3 cols-2 pt-2 pb-2",
    options: utils_data/* mainSlider11 */._e
  }, utils_data/* homeData.brands.slice */.QL.brands.slice(0, 7).map((brand, index) => {
    return market_jsx(alink/* default */.Z, {
      href: "#",
      className: "brand mr-0",
      key: index
    }, market_jsx("img", {
      src: brand.image,
      alt: "brand",
      width: brand.width,
      height: brand.height
    }));
  })), market_jsx("div", {
    className: "cat-blocks-container"
  }, market_jsx("div", {
    className: "row"
  }, market_jsx("div", {
    className: "col-6 col-md-4 col-lg-3"
  }, market_jsx(alink/* default */.Z, {
    href: "/shop/market?category=computers",
    className: "cat-block",
    scroll: false
  }, market_jsx("figure", null, market_jsx("span", null, market_jsx("img", {
    src: "images/market/cats/1.jpg",
    alt: "Category"
  }))), market_jsx("h3", {
    className: "cat-block-title"
  }, "Desktop Computers"))), market_jsx("div", {
    className: "col-6 col-md-4 col-lg-3"
  }, market_jsx(alink/* default */.Z, {
    href: "/shop/market?category=monitors",
    className: "cat-block",
    scroll: false
  }, market_jsx("figure", null, market_jsx("span", null, market_jsx("img", {
    src: "images/market/cats/2.jpg",
    alt: "Category"
  }))), market_jsx("h3", {
    className: "cat-block-title"
  }, "Monitors"))), market_jsx("div", {
    className: "col-6 col-md-4 col-lg-3"
  }, market_jsx(alink/* default */.Z, {
    href: "/shop/market?category=laptops",
    className: "cat-block",
    scroll: false
  }, market_jsx("figure", null, market_jsx("span", null, market_jsx("img", {
    src: "images/market/cats/3.jpg",
    alt: "Category"
  }))), market_jsx("h3", {
    className: "cat-block-title"
  }, "Laptops"))), market_jsx("div", {
    className: "col-6 col-md-4 col-lg-3"
  }, market_jsx(alink/* default */.Z, {
    href: "/shop/market?category=tablets",
    className: "cat-block",
    scroll: false
  }, market_jsx("figure", null, market_jsx("span", null, market_jsx("img", {
    src: "images/market/cats/4.jpg",
    alt: "Category"
  }))), market_jsx("h3", {
    className: "cat-block-title"
  }, "iPads & Tablets"))), market_jsx("div", {
    className: "col-6 col-md-4 col-lg-3"
  }, market_jsx(alink/* default */.Z, {
    href: "/shop/market?category=storage",
    className: "cat-block",
    scroll: false
  }, market_jsx("figure", null, market_jsx("span", null, market_jsx("img", {
    src: "images/market/cats/5.jpg",
    alt: "Category"
  }))), market_jsx("h3", {
    className: "cat-block-title"
  }, "Hard Drives & Storage"))), market_jsx("div", {
    className: "col-6 col-md-4 col-lg-3"
  }, market_jsx(alink/* default */.Z, {
    href: "/shop/market?category=printers",
    className: "cat-block",
    scroll: false
  }, market_jsx("figure", null, market_jsx("span", null, market_jsx("img", {
    src: "images/market/cats/6.jpg",
    alt: "Category"
  }))), market_jsx("h3", {
    className: "cat-block-title"
  }, "Printers & Supplies"))), market_jsx("div", {
    className: "col-6 col-md-4 col-lg-3"
  }, market_jsx(alink/* default */.Z, {
    href: "/shop/market?category=accessories",
    className: "cat-block",
    scroll: false
  }, market_jsx("figure", null, market_jsx("span", null, market_jsx("img", {
    src: "images/market/cats/7.jpg",
    alt: "Category"
  }))), market_jsx("h3", {
    className: "cat-block-title"
  }, "Computer Accessories"))))), market_jsx("div", {
    className: "mb-2"
  }), market_jsx("div", {
    className: "toolbox"
  }, market_jsx("div", {
    className: "toolbox-left"
  }, !loading && products ? market_jsx("div", {
    className: "toolbox-info"
  }, "Showing", market_jsx("span", null, " ", products.length, " of ", totalCount), " Products") : ""), market_jsx("div", {
    className: "toolbox-right"
  }, market_jsx("div", {
    className: "toolbox-sort"
  }, market_jsx("label", {
    htmlFor: "sortby"
  }, "Sort by:"), market_jsx("div", {
    className: "select-custom"
  }, market_jsx("select", {
    name: "sortby",
    id: "sortby",
    className: "form-control bg-white",
    onChange: onSortByChange,
    value: query.sortBy ? query.sortBy : 'default'
  }, market_jsx("option", {
    value: "default"
  }, "Default"), market_jsx("option", {
    value: "featured"
  }, "Most Popular"), market_jsx("option", {
    value: "rating"
  }, "Most Rated"), market_jsx("option", {
    value: "new"
  }, "Date")))))), market_jsx(shop_list_two, {
    products: products,
    perPage: perPage,
    loading: loading
  }), totalCount > perPage ? market_jsx(pagination/* default */.Z, {
    perPage: perPage,
    total: totalCount
  }) : ""), market_jsx("aside", {
    className: "col-lg-3 col-xl-5col order-lg-first"
  }, market_jsx((external_react_sticky_box_default()), {
    className: "sticky-market-sidebar",
    offsetTop: 70
  }, market_jsx(shop_sidebar_three, {
    toggle: toggle
  })), toggle ? market_jsx("button", {
    className: "sidebar-fixed-toggler",
    onClick: toggleSidebar
  }, market_jsx("i", {
    className: "icon-cog"
  })) : '', market_jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSidebar
  }))))));
}

/* harmony default export */ var market = ((0,apollo/* default */.Z)({
  ssr: true
})(ShopMarket));

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,6442,8289,2806,5708,9792,8353,2078], function() { return __webpack_exec__(9039); });
module.exports = __webpack_exports__;

})();