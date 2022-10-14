exports.id = 1547;
exports.ids = [1547];
exports.modules = {

/***/ 1547:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3920);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7852);
/* harmony import */ var _components_features_qty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(812);
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5708);
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2806);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6442);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function DetailOne(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    product
  } = props;
  const {
    0: qty,
    1: setQty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: qty2,
    1: setQty2
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: colorArray,
    1: setColorArray
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: sizeArray,
    1: setSizeArray
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: variationGroup,
    1: setVariationGroup
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: selectedVariant,
    1: setSelectedVariant
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    color: null,
    colorName: null,
    price: null,
    size: ""
  });
  const {
    0: showClear,
    1: setShowClear
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showVariationPrice,
    1: setShowVariationPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(99999);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(product);
    window.addEventListener('scroll', scrollHandler, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let min = 99999;
    let max = 0;
    setVariationGroup(product[0].variants.reduce((acc, cur) => {
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

    if (product[0].variants.length == 0) {
      min = product.sale_price ? product.sale_price : product.price;
      max = product.price;
    }

    setMinPrice(min);
    setMaxPrice(max);
  }, [product]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSelectedVariant({
      color: null,
      colorName: null,
      price: null,
      size: ""
    });
    setQty(1);
    setQty2(1);
  }, [router.query.slug]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    refreshSelectableGroup();
  }, [variationGroup, selectedVariant]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    scrollHandler();
  }, [router.pathname]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setShowClear(selectedVariant.color || selectedVariant.size != "" ? true : false);
    setShowVariationPrice(selectedVariant.color && selectedVariant.size != "" ? true : false);
    let toggle = ref.current.querySelector('.variation-toggle');

    if (toggle) {
      if (selectedVariant.color && selectedVariant.size != "" && toggle.classList.contains('collapsed')) {
        toggle.click();
      }

      if (!(selectedVariant.color && selectedVariant.size != "") && !toggle.classList.contains('collapsed')) {
        toggle.click();
      }
    }
  }, [selectedVariant]);

  function scrollHandler() {
    if (router.pathname.includes('/product/default')) {
      let stickyBar = ref.current.querySelector('.sticky-bar');

      if (stickyBar.classList.contains('d-none') && ref.current.getBoundingClientRect().bottom < 0) {
        stickyBar.classList.remove('d-none');
        return;
      }

      if (!stickyBar.classList.contains('d-none') && ref.current.getBoundingClientRect().bottom > 0) {
        stickyBar.classList.add('d-none');
      }
    }
  }

  function onWishlistClick(e) {
    e.preventDefault();

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .isInWishlist */ .QY)(props.wishlist, product)) {
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

    setColorArray(product[0].variants.reduce((acc, cur) => {
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

  function onChangeQty2(current) {
    setQty2(current);
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

  function onCartClick(e, index = 0) {
    e.preventDefault();
    if (e.currentTarget.classList.contains('btn-disabled')) return;

    let newProduct = _objectSpread({}, product);

    if (product[0].variants.length > 0) {
      newProduct = _objectSpread(_objectSpread({}, product), {}, {
        name: product.name + ' - ' + selectedVariant.colorName + ', ' + selectedVariant.size,
        price: selectedVariant.price
      });
    }

    props.addToCart(newProduct, index == 0 ? qty : qty2);
  }

  if (!product) {
    return __jsx("div", null);
  }

  return __jsx("div", {
    className: "product-details",
    ref: ref
  }, __jsx("h1", {
    className: "product-title"
  }, product.name), __jsx("div", {
    className: "ratings-container"
  }, __jsx("div", {
    className: "ratings"
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  })), __jsx("span", {
    className: "ratings-text"
  }, "( ", product.review, " Reviews )")), product.stock == 0 ? __jsx("div", {
    className: "product-price"
  }, __jsx("span", {
    className: "out-price"
  }, minPrice == maxPrice ? __jsx("span", null, "$", product.price.toFixed(2)) : __jsx("span", null, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2)) : product[0].variants.length == 0 ? __jsx("div", {
    className: "product-price"
  }, __jsx("span", {
    className: "new-price"
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price"
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "product-content"
  }, __jsx("p", null, product.short_desc)), product[0].variants.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "details-filter-row details-row-size"
  }, __jsx("label", null, "Color:"), __jsx("div", {
    className: "product-nav product-nav-dots"
  }, colorArray.map((item, index) => __jsx("a", {
    href: "#",
    className: `${(item.color == selectedVariant.color ? 'active ' : '') + (item.disabled ? 'disabled' : '')}`,
    style: {
      backgroundColor: item.color
    },
    key: index,
    onClick: e => selectColor(e, item)
  })))), __jsx("div", {
    className: "details-filter-row details-row-size"
  }, __jsx("label", {
    htmlFor: "size"
  }, "Size:"), __jsx("div", {
    className: "select-custom"
  }, __jsx("select", {
    name: "size",
    className: "form-control",
    value: selectedVariant.size,
    onChange: selectSize
  }, __jsx("option", {
    value: ""
  }, "Select a size"), sizeArray.map((item, index) => __jsx("option", {
    value: item.size,
    key: index
  }, item.size)))), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "size-guide mr-4"
  }, __jsx("i", {
    className: "icon-th-list"
  }), "size guide"), showClear ? __jsx("a", {
    href: "#",
    onClick: clearSelection
  }, "clear") : ""), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", null, __jsx("button", {
    className: `d-none variation-toggle ${toggleState.toLowerCase()}`,
    onClick: onToggle
  }), __jsx("div", {
    ref: setCollapsibleElement,
    style: {
      overflow: 'hidden'
    }
  }, __jsx("div", {
    className: "product-price"
  }, "$", selectedVariant.price ? selectedVariant.price.toFixed(2) : 0))))) : "", __jsx("div", {
    className: "details-filter-row details-row-size"
  }, __jsx("label", {
    htmlFor: "qty"
  }, "Qty:"), __jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    changeQty: onChangeQty,
    max: product.stock,
    value: qty
  })), __jsx("div", {
    className: "product-details-action"
  }, __jsx("a", {
    href: "#",
    className: `btn-product btn-cart ${!(0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .canAddToCart */ .qr)(props.cartlist, product, qty) || product[0].variants.length > 0 && !showVariationPrice ? 'btn-disabled' : ''}`,
    onClick: e => onCartClick(e, 0)
  }, __jsx("span", null, "add to cart")), __jsx("div", {
    className: "details-action-wrapper"
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .isInWishlist */ .QY)(props.wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist"
  }, __jsx("span", null, "Go to Wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick
  }, __jsx("span", null, "Add to Wishlist")))), __jsx("div", {
    className: "product-details-footer"
  }, __jsx("div", {
    className: "product-cat w-100 text-truncate"
  }, __jsx("span", null, "Category:"), product[0].category.map((cat, index) => __jsx("span", {
    key: index
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: cat.slug
      }
    }
  }, cat.name), index < product[0].category.length - 1 ? ',' : ''))), __jsx("div", {
    className: "social-icons social-icons-sm"
  }, __jsx("span", {
    className: "social-label"
  }, "Share:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "social-icon",
    title: "Facebook"
  }, __jsx("i", {
    className: "icon-facebook-f"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "social-icon",
    title: "Twitter"
  }, __jsx("i", {
    className: "icon-twitter"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "social-icon",
    title: "Instagram"
  }, __jsx("i", {
    className: "icon-instagram"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "#",
    className: "social-icon",
    title: "Pinterest"
  }, __jsx("i", {
    className: "icon-pinterest"
  })))), __jsx("div", {
    className: "sticky-bar d-none"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6"
  }, __jsx("figure", {
    className: "product-media"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: `/product/default/${product.slug}`
  }, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product[0].pictures[0].url,
    alt: "product",
    width: product[0].pictures[0].width,
    height: product[0].pictures[0].height
  }))), __jsx("h3", {
    className: "product-title"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: `/product/default/${product.slug}`
  }, product.name))), __jsx("div", {
    className: "col-6 justify-content-end"
  }, selectedVariant.color && selectedVariant.size != "" ? __jsx("div", {
    className: "product-price"
  }, "$", selectedVariant.price ? selectedVariant.price.toFixed(2) : 0) : product.stock == 0 ? __jsx("div", {
    className: "product-price"
  }, __jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2)) : product[0].variants.length == 0 ? __jsx("div", {
    className: "product-price"
  }, __jsx("span", {
    className: "new-price"
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price"
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    changeQty: onChangeQty2,
    max: product.stock,
    value: qty2
  }), __jsx("div", {
    className: "product-details-action"
  }, __jsx("a", {
    href: "#",
    className: `btn-product btn-cart ${!(0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .canAddToCart */ .qr)(props.cartlist, product, qty) || product[0].variants.length > 0 && !showVariationPrice ? 'btn-disabled' : ''}`,
    onClick: e => onCartClick(e, 1)
  }, __jsx("span", null, "add to cart")), (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .isInWishlist */ .QY)(props.wishlist, product) ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: "/shop/wishlist",
    className: "btn-product btn-wishlist added-to-wishlist"
  }, __jsx("span", null, "Go to Wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product btn-wishlist",
    onClick: onWishlistClick
  }, __jsx("span", null, "Add to Wishlist"))))))));
}

const mapStateToProps = state => {
  return {
    cartlist: state.cartlist.data,
    wishlist: state.wishlist.data
  };
};

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, _objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_6__/* .actions */ .Nw), _store_cart__WEBPACK_IMPORTED_MODULE_7__/* .actions */ .Nw))(DetailOne));

/***/ })

};
;