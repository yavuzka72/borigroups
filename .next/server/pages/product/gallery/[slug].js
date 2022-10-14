(function() {
var exports = {};
exports.id = 8238;
exports.ids = [8238];
exports.modules = {

/***/ 6835:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./components/partials/product/breadcrumb.jsx
var breadcrumb = __webpack_require__(2076);
// EXTERNAL MODULE: external "react-image-magnifiers"
var external_react_image_magnifiers_ = __webpack_require__(7773);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: ./utils/data.js
var data = __webpack_require__(8289);
;// CONCATENATED MODULE: ./components/partials/product/gallery/gallery-extended.jsx
var __jsx = (external_react_default()).createElement;





function GalleryExtended(props) {
  const {
    product
  } = props;

  if (!product) {
    return __jsx("div", null);
  }

  return __jsx("div", {
    className: "product-lg position-relative"
  }, product.new ? __jsx("span", {
    className: "product-label label-new"
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale"
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top"
  }, "Top") : "", product.stock == 0 ? __jsx("span", {
    className: "product-label label-out"
  }, "Out of Stock") : "", __jsx(owl_carousel/* default */.Z, {
    adClass: "product-gallery-carousel owl-full owl-nav-dark cols-1 cols-md-2 cols-lg-3",
    options: data/* mainSlider9 */.if
  }, product.pictures.map((item, index) => __jsx(external_react_image_magnifiers_.Magnifier, {
    imageSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + item.url,
    imageAlt: "product",
    largeImageSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + item.url // Optional
    ,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-gallery-image",
    style: {
      paddingTop: `${product.pictures[0].height / product.pictures[0].width * 100}%`
    },
    key: "gallery-" + index
  }))));
}

/* harmony default export */ var gallery_extended = (/*#__PURE__*/external_react_default().memo(GalleryExtended));
// EXTERNAL MODULE: external "react-slide-toggle"
var external_react_slide_toggle_ = __webpack_require__(3920);
var external_react_slide_toggle_default = /*#__PURE__*/__webpack_require__.n(external_react_slide_toggle_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/features/alink.jsx
var alink = __webpack_require__(7852);
// EXTERNAL MODULE: ./components/features/qty.jsx
var features_qty = __webpack_require__(812);
// EXTERNAL MODULE: ./store/wishlist.js
var wishlist = __webpack_require__(5708);
// EXTERNAL MODULE: ./store/cart.js
var cart = __webpack_require__(2806);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./components/partials/product/details/detail-three.jsx

var detail_three_jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function DetailThree(props) {
  const router = (0,router_.useRouter)();
  const {
    product
  } = props;
  const {
    0: qty,
    1: setQty
  } = (0,external_react_.useState)(1);
  const {
    0: colorArray,
    1: setColorArray
  } = (0,external_react_.useState)([]);
  const {
    0: sizeArray,
    1: setSizeArray
  } = (0,external_react_.useState)([]);
  const {
    0: variationGroup,
    1: setVariationGroup
  } = (0,external_react_.useState)([]);
  const {
    0: selectedVariant,
    1: setSelectedVariant
  } = (0,external_react_.useState)({
    color: null,
    colorName: null,
    price: null,
    size: ""
  });
  const {
    0: showClear,
    1: setShowClear
  } = (0,external_react_.useState)(false);
  const {
    0: showVariationPrice,
    1: setShowVariationPrice
  } = (0,external_react_.useState)(false);
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,external_react_.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,external_react_.useState)(99999);
  (0,external_react_.useEffect)(() => {
    let min = 99999;
    let max = 0;
    setVariationGroup(product.variants.reduce((acc, cur) => {
      cur.size.map(item => {
        acc.push({
          color: cur.color,
          colorName: cur.color_name,
          size: item.name,
          price: cur.price
        });
      });
      if (min > cur.price) min = cur.price;
      if (max < cur.price) max = cur.price;
      return acc;
    }, []));

    if (product.variants.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, [product]);
  (0,external_react_.useEffect)(() => {
    setSelectedVariant({
      color: null,
      colorName: null,
      price: null,
      size: ""
    });
    setQty(1);
  }, [router.query.slug]);
  (0,external_react_.useEffect)(() => {
    refreshSelectableGroup();
  }, [variationGroup, selectedVariant]);
  (0,external_react_.useEffect)(() => {
    setShowClear(selectedVariant.color || selectedVariant.size != "" ? true : false);
    setShowVariationPrice(selectedVariant.color && selectedVariant.size != "" ? true : false);
    let toggle = document.querySelector('.product-details-top .variation-toggle');

    if (toggle) {
      if (selectedVariant.color && selectedVariant.size != "" && toggle.classList.contains('collapsed')) {
        toggle.click();
      }

      if (!(selectedVariant.color && selectedVariant.size != "") && !toggle.classList.contains('collapsed')) {
        toggle.click();
      }
    }
  }, [selectedVariant]);

  function onWishlistClick(e) {
    e.preventDefault();

    if (!(0,utils/* isInWishlist */.QY)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function refreshSelectableGroup() {
    let tempArray = [...variationGroup];

    if (selectedVariant.color) {
      tempArray = variationGroup.reduce((acc, cur) => {
        if (selectedVariant.color !== cur.color) {
          return acc;
        }

        return [...acc, cur];
      }, []);
    }

    setSizeArray(tempArray.reduce((acc, cur) => {
      if (acc.findIndex(item => item.size == cur.size) !== -1) return acc;
      return [...acc, cur];
    }, []));
    tempArray = [...variationGroup];

    if (selectedVariant.size) {
      tempArray = variationGroup.reduce((acc, cur) => {
        if (selectedVariant.size !== cur.size) {
          return acc;
        }

        return [...acc, cur];
      }, []);
    }

    setColorArray(product.variants.reduce((acc, cur) => {
      if (tempArray.findIndex(item => item.color == cur.color) == -1) {
        return [...acc, {
          color: cur.color,
          colorName: cur.color_name,
          price: cur.price,
          disabled: true
        }];
      }

      return [...acc, {
        color: cur.color,
        colorName: cur.color_name,
        price: cur.price,
        disabled: false
      }];
    }, []));
  }

  function selectColor(e, item) {
    e.preventDefault();

    if (item.color == selectedVariant.color) {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        color: null,
        colorName: null,
        price: item.price
      }));
    } else {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        color: item.color,
        colorName: item.colorName,
        price: item.price
      }));
    }
  }

  function selectSize(e) {
    if (e.target.value == "") {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        size: ""
      }));
    } else {
      setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
        size: e.target.value
      }));
    }
  }

  function onChangeQty(current) {
    setQty(current);
  }

  function clearSelection(e) {
    e.preventDefault();
    setSelectedVariant(_objectSpread(_objectSpread({}, selectedVariant), {}, {
      color: null,
      colorName: null,
      size: ""
    }));
    refreshSelectableGroup();
  }

  function onCartClick(e) {
    e.preventDefault();
    if (e.currentTarget.classList.contains('btn-disabled')) return;

    let newProduct = _objectSpread({}, product);

    if (product.variants.length > 0) {
      newProduct = _objectSpread(_objectSpread({}, product), {}, {
        name: product.name + ' - ' + selectedVariant.colorName + ', ' + selectedVariant.size,
        price: selectedVariant.price
      });
    }

    props.addToCart(newProduct, qty);
  }

  if (!product) {
    return detail_three_jsx("div", null);
  }

  return detail_three_jsx("div", {
    className: "product-details product-details-centered product-details-separator"
  }, detail_three_jsx("div", {
    className: "container"
  }, detail_three_jsx("div", {
    className: "row"
  }, detail_three_jsx("div", {
    className: "col-md-6"
  }, detail_three_jsx("h1", {
    className: "product-title"
  }, product.name), detail_three_jsx("div", {
    className: "ratings-container"
  }, detail_three_jsx("div", {
    className: "ratings"
  }, detail_three_jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), detail_three_jsx("span", {
    className: "tooltip-text"
  }, product.ratings.toFixed(2))), detail_three_jsx("span", {
    className: "ratings-text"
  }, "( ", product.review, " Reviews )")), !product.stock || product.stock == 0 ? detail_three_jsx("div", {
    className: "product-price"
  }, detail_three_jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? detail_three_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? detail_three_jsx("div", {
    className: "product-price"
  }, detail_three_jsx("span", {
    className: "new-price"
  }, "$", minPrice.toFixed(2)), detail_three_jsx("span", {
    className: "old-price"
  }, "$", maxPrice.toFixed(2))) : detail_three_jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), detail_three_jsx("div", {
    className: "product-content"
  }, detail_three_jsx("p", null, product.short_desc)), product.variants.length > 0 ? detail_three_jsx((external_react_default()).Fragment, null, detail_three_jsx("div", {
    className: "details-filter-row details-row-size"
  }, detail_three_jsx("label", null, "Color:"), detail_three_jsx("div", {
    className: "product-nav product-nav-dots"
  }, colorArray.map((item, index) => detail_three_jsx("a", {
    href: "#",
    className: `${(item.color == selectedVariant.color ? 'active ' : '') + (item.disabled ? 'disabled' : '')}`,
    style: {
      backgroundColor: item.color
    },
    key: index,
    onClick: e => selectColor(e, item)
  })))), detail_three_jsx("div", {
    className: "details-filter-row details-row-size"
  }, detail_three_jsx("label", {
    htmlFor: "size"
  }, "Size:"), detail_three_jsx("div", {
    className: "select-custom"
  }, detail_three_jsx("select", {
    name: "size",
    className: "form-control",
    value: selectedVariant.size,
    onChange: selectSize
  }, detail_three_jsx("option", {
    value: ""
  }, "Select a size"), sizeArray.map((item, index) => detail_three_jsx("option", {
    value: item.size,
    key: index
  }, item.size)))), detail_three_jsx(alink/* default */.Z, {
    href: "#",
    className: "size-guide mr-4"
  }, detail_three_jsx("i", {
    className: "icon-th-list"
  }), "size guide"), showClear ? detail_three_jsx("a", {
    href: "#",
    onClick: clearSelection
  }, "clear") : ""), detail_three_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => detail_three_jsx("div", null, detail_three_jsx("button", {
    className: `d-none variation-toggle ${toggleState.toLowerCase()}`,
    onClick: onToggle
  }), detail_three_jsx("div", {
    ref: setCollapsibleElement,
    style: {
      overflow: 'hidden'
    }
  }, detail_three_jsx("div", {
    className: "product-price"
  }, "$", selectedVariant.price ? selectedVariant.price.toFixed(2) : 0))))) : ""), detail_three_jsx("div", {
    className: "col-md-6"
  }, detail_three_jsx("div", {
    className: "product-details-action mb-1"
  }, detail_three_jsx("div", {
    className: "details-action-col"
  }, detail_three_jsx(features_qty/* default */.Z, {
    changeQty: onChangeQty,
    max: product.stock,
    adClass: " mr-2 mr-sm-3"
  }), detail_three_jsx("a", {
    href: "#",
    className: `btn-product btn-cart ml-sm-2 ${!(0,utils/* canAddToCart */.qr)(props.cartlist, product, qty) || product.variants.length > 0 && !showVariationPrice ? 'btn-disabled' : ''}`,
    onClick: onCartClick
  }, detail_three_jsx("span", null, "add to cart"))), detail_three_jsx("div", {
    className: "details-action-wrapper"
  }, (0,utils/* isInWishlist */.QY)(props.wishlist, product) ? detail_three_jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist"
  }, detail_three_jsx("span", null, "Go to Wishlist")) : detail_three_jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick
  }, detail_three_jsx("span", null, "Add to Wishlist")))), detail_three_jsx("div", {
    className: "product-details-footer details-footer-col"
  }, detail_three_jsx("div", {
    className: "product-cat"
  }, detail_three_jsx("span", null, "Category:"), product.category.map((cat, index) => detail_three_jsx("span", {
    key: index
  }, detail_three_jsx(alink/* default */.Z, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: cat.slug
      }
    }
  }, cat.name), index < product.category.length - 1 ? ',' : ''))), detail_three_jsx("div", {
    className: "social-icons social-icons-sm"
  }, detail_three_jsx("span", {
    className: "social-label"
  }, "Share:"), detail_three_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Facebook"
  }, detail_three_jsx("i", {
    className: "icon-facebook-f"
  })), detail_three_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Twitter"
  }, detail_three_jsx("i", {
    className: "icon-twitter"
  })), detail_three_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Instagram"
  }, detail_three_jsx("i", {
    className: "icon-instagram"
  })), detail_three_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Pinterest"
  }, detail_three_jsx("i", {
    className: "icon-pinterest"
  }))))))));
}

const mapStateToProps = state => {
  return {
    cartlist: state.cartlist.data,
    wishlist: state.wishlist.data
  };
};

/* harmony default export */ var detail_three = ((0,external_react_redux_.connect)(mapStateToProps, _objectSpread(_objectSpread({}, wishlist/* actions */.Nw), cart/* actions */.Nw))(DetailThree));
// EXTERNAL MODULE: ./components/partials/product/info-tabs/info-one.jsx
var info_one = __webpack_require__(439);
// EXTERNAL MODULE: ./components/partials/product/related/related-one.jsx
var related_one = __webpack_require__(378);
;// CONCATENATED MODULE: ./pages/product/gallery/[slug].jsx

var _slug_jsx = (external_react_default()).createElement;










function ProductDefault() {
  const slug = (0,router_.useRouter)().query.slug;
  if (!slug) return _slug_jsx("div", null);
  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_PRODUCT */.N4, {
    variables: {
      slug,
      onlyData: false
    }
  }); // const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );

  const product = data && data.product;
  const related = data && data.product;
  const prev = data && data.product.prev;
  const next = data && data.product.next;

  if (error) {
    return _slug_jsx("div", null);
  }

  return _slug_jsx("div", {
    className: "main"
  }, _slug_jsx(breadcrumb/* default */.Z, {
    prev: prev,
    next: next,
    current: "Gallery"
  }), _slug_jsx("div", {
    className: "page-content"
  }, _slug_jsx("div", {
    className: "container skeleton-body"
  }, _slug_jsx("div", {
    className: "product-details-top"
  }, _slug_jsx("div", {
    className: `skel-pro-single gallery mb-4 ${loading ? '' : 'loaded'}`
  }, _slug_jsx("div", {
    className: "row"
  }, _slug_jsx("div", {
    className: "col-12"
  }, _slug_jsx("div", {
    className: "skel-product-gallery"
  }), !loading ? _slug_jsx(gallery_extended, {
    product: product
  }) : ""), _slug_jsx("div", {
    className: "col-12"
  }, _slug_jsx("div", {
    className: "entry-summary row mt-5"
  }, _slug_jsx("div", {
    className: "col-md-12"
  }, _slug_jsx("div", {
    className: "entry-summary1"
  })), _slug_jsx("div", {
    className: "col-md-12"
  }, _slug_jsx("div", {
    className: "entry-summary2"
  })))))), !loading ? _slug_jsx(detail_three, {
    product: product
  }) : ""), loading ? _slug_jsx("div", {
    className: "skel-pro-tabs"
  }) : _slug_jsx(info_one/* default */.Z, {
    product: product
  }), _slug_jsx(related_one/* default */.Z, {
    products: related,
    loading: loading
  }))));
}

/* harmony default export */ var _slug_ = ((0,apollo/* default */.Z)({
  ssr: true
})(ProductDefault));

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

/***/ 7773:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-magnifiers");;

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

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ }),

/***/ 7659:
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,6442,8289,2806,5708,9792,812,6359,2076,378,439], function() { return __webpack_exec__(6835); });
module.exports = __webpack_exports__;

})();