exports.id = 7484;
exports.ids = [7484];
exports.modules = {

/***/ 7484:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ product_sidebar; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: ./components/features/alink.jsx
var alink = __webpack_require__(7852);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
;// CONCATENATED MODULE: ./components/features/products/product-eight.jsx
var __jsx = (external_react_default()).createElement;



function ProductEight(props) {
  const {
    product
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
  return __jsx("div", {
    className: "product product-sm"
  }, __jsx("figure", {
    className: "product-media"
  }, __jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[0].url,
    alt: "Product",
    className: "product-image"
  }))), __jsx("div", {
    className: "product-body"
  }, __jsx("h5", {
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
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2))));
}

/* harmony default export */ var product_eight = (/*#__PURE__*/external_react_default().memo(ProductEight));
;// CONCATENATED MODULE: ./components/partials/product/related/related-two.jsx
var related_two_jsx = (external_react_default()).createElement;




function RelatedTwo(props) {
  const {
    products
  } = props;

  if (!products) {
    return related_two_jsx("div", null);
  }

  return related_two_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple"
  }, related_two_jsx("div", null, products.map((product, index) => related_two_jsx(product_eight, {
    product: product,
    key: index
  }))));
}

/* harmony default export */ var related_two = (/*#__PURE__*/external_react_default().memo(RelatedTwo));
;// CONCATENATED MODULE: ./components/partials/product/sidebar/product-sidebar.jsx
var product_sidebar_jsx = (external_react_default()).createElement;





function ProductSidebar(props) {
  const {
    0: toggle,
    1: setToggle
  } = (0,external_react_.useState)(0);
  const {
    products,
    loading = false
  } = props;
  (0,external_react_.useEffect)(() => {
    resizeHandle();
    window.addEventListener("resize", resizeHandle);
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  function resizeHandle() {
    if (document.querySelector("body").offsetWidth < 992) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }

  function hideSideBar() {
    if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
      document.querySelector('body').classList.remove('sidebar-filter-active');
    }
  }

  function toggleSideBar() {
    if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
      document.querySelector('body').classList.remove('sidebar-filter-active');
    } else {
      document.querySelector('body').classList.add('sidebar-filter-active');
    }
  }

  function closeSideBar() {
    if (document.querySelector('body').classList.contains('sidebar-filter-active')) {
      document.querySelector('body').classList.remove('sidebar-filter-active');
    }
  }

  if (!products) {
    return product_sidebar_jsx("div", null);
  }

  return product_sidebar_jsx((external_react_default()).Fragment, null, !loading ? product_sidebar_jsx((external_react_default()).Fragment, null, product_sidebar_jsx("div", {
    className: `${toggle ? 'sidebar-filter right' : 'sidebar'} sidebar-product`
  }, product_sidebar_jsx("div", {
    className: toggle ? 'sidebar-filter-wrapper product-sidebar-wrapper' : ''
  }, product_sidebar_jsx("button", {
    onClick: closeSideBar,
    className: "btn-product btn-close",
    style: {
      marginLeft: 'auto',
      marginRight: '5px'
    }
  }, product_sidebar_jsx("i", {
    className: "icon-close"
  })), product_sidebar_jsx("div", {
    className: "widget widget-products"
  }, product_sidebar_jsx("h4", {
    className: "widget-title mb-1"
  }, "Related Product"), product_sidebar_jsx("div", {
    className: "products"
  }, product_sidebar_jsx(related_two, {
    products: products.slice(0, 4)
  })), product_sidebar_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "btn btn-outline-dark-3 text-truncate"
  }, product_sidebar_jsx("span", null, "View More Products"), product_sidebar_jsx("i", {
    className: "icon-long-arrow-right"
  }))), product_sidebar_jsx("div", {
    className: "widget widget-banner-sidebar pb-2"
  }, product_sidebar_jsx("div", {
    className: "banner-sidebar-title"
  }, "ad box 280 x 280"), product_sidebar_jsx("div", {
    className: "banner-sidebar text-left banner-overlay ml-0"
  }, product_sidebar_jsx(alink/* default */.Z, {
    href: "#",
    className: "w-100"
  }, product_sidebar_jsx("div", {
    className: "lazy-overlay"
  }), product_sidebar_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "banner",
    src: "images/blog/sidebar/banner.jpg",
    threshold: 500,
    height: 277,
    width: 280,
    effect: "opacity"
  })), product_sidebar_jsx("div", {
    className: "banner-content text-left pt-0"
  }, product_sidebar_jsx("p", {
    className: "mb-1"
  }, "online & in-store"), product_sidebar_jsx("h3", {
    className: "banner-subtitle text-uppercase"
  }, "Spring Sale"), product_sidebar_jsx("h2", {
    className: "banner-title"
  }, "Up to 60% off", product_sidebar_jsx("br", null), "from $55"), product_sidebar_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/3cols",
    className: "btn btn-outline btn-md btn-outline-white text-uppercase m-0"
  }, "Shop Now")))))), toggle ? product_sidebar_jsx("button", {
    className: "sidebar-fixed-toggler right",
    onClick: toggleSideBar
  }, product_sidebar_jsx("i", {
    className: "icon-cog"
  })) : '', product_sidebar_jsx("div", {
    className: "sidebar-filter-overlay",
    onClick: hideSideBar
  })) : "");
}

/* harmony default export */ var product_sidebar = (/*#__PURE__*/external_react_default().memo(ProductSidebar));

/***/ })

};
;