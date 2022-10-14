exports.id = 3459;
exports.ids = [3459];
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

/***/ 101:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4766);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3920);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7852);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8289);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function ShopSidebarOne(props) {
  const {
    toggle = false
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;
  const {
    0: priceRange,
    1: setRange
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    min: 0,
    max: 1000
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (query.minPrice && query.maxPrice) {
      setRange({
        min: parseInt(query.minPrice),
        max: parseInt(query.maxPrice)
      });
    } else {
      setRange({
        min: 0,
        max: 1000
      });
    }
  }, [query]);

  function onChangePriceRange(value) {
    setRange(value);
  }

  function containsAttrInUrl(type, value) {
    const currentQueries = query[type] ? query[type].split(',') : [];
    return currentQueries && currentQueries.includes(value);
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
    if (getUrlForAttrs(attr, value)) {
      let queryObject = getUrlForAttrs(attr, value).query;
      let url = router.pathname.replace('[type]', query.type) + '?';

      for (let key in queryObject) {
        if (key !== "type") {
          url += key + '=' + queryObject[key] + '&';
        }
      }

      router.push(url);
    }
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("aside", {
    className: `${toggle ? 'sidebar-filter' : 'sidebar'} sidebar-shop`
  }, __jsx("div", {
    className: toggle ? 'sidebar-filter-wrapper' : ''
  }, __jsx("div", {
    className: "widget widget-clean"
  }, __jsx("label", null, "Filters:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        type: query.type
      }
    },
    className: "sidebar-filter-clear",
    scroll: false
  }, "Clean All")), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: "widget widget-collapsible"
  }, __jsx("h3", {
    className: "widget-title mb-2"
  }, __jsx("a", {
    href: "#category",
    className: `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}`,
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  }, "Category")), __jsx("div", {
    ref: setCollapsibleElement
  }, __jsx("div", {
    className: "widget-body pt-0"
  }, __jsx("div", {
    className: "filter-items filter-items-count"
  }, _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .shopData.categories.map */ .JQ.categories.map((item, index) => __jsx("div", {
    className: "filter-item",
    key: `cat_${index}`
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    className: `${query.category == item.slug ? 'active' : ''}`,
    href: {
      pathname: router.pathname,
      query: {
        type: query.type,
        category: item.slug
      }
    },
    scroll: false
  }, item.name), __jsx("span", {
    className: "item-count"
  }, item.count)))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: "widget widget-collapsible"
  }, __jsx("h3", {
    className: "widget-title mb-2"
  }, __jsx("a", {
    href: "#Size",
    className: `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}`,
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  }, "Size")), __jsx("div", {
    ref: setCollapsibleElement
  }, __jsx("div", {
    className: "widget-body pt-0"
  }, __jsx("div", {
    className: "filter-items"
  }, _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .shopData.sizes.map */ .JQ.sizes.map((item, index) => __jsx("div", {
    className: "filter-item",
    key: index
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: `size-${index + 1}`,
    onChange: e => onAttrClick(e, 'size', item.slug),
    checked: containsAttrInUrl('size', item.slug) ? true : false
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: `size-${index + 1}`
  }, item.size))))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: "widget widget-collapsible"
  }, __jsx("h3", {
    className: "widget-title mb-2"
  }, __jsx("a", {
    href: "#colour",
    className: `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}`,
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  }, "Colour")), __jsx("div", {
    ref: setCollapsibleElement
  }, __jsx("div", {
    className: "widget-body pt-0"
  }, __jsx("div", {
    className: "filter-colors"
  }, _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .shopData.colors.map */ .JQ.colors.map((item, index) => __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: getUrlForAttrs('color', item.color_name),
    className: containsAttrInUrl('color', item.color_name) ? 'selected' : '',
    style: {
      backgroundColor: item.color
    },
    key: index,
    scroll: false
  }, __jsx("span", {
    className: "sr-only"
  }, "Color Name")))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: "widget widget-collapsible"
  }, __jsx("h3", {
    className: "widget-title mb-2"
  }, __jsx("a", {
    href: "#brand",
    className: `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}`,
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  }, "Brand")), __jsx("div", {
    ref: setCollapsibleElement
  }, __jsx("div", {
    className: "widget-body pt-0"
  }, __jsx("div", {
    className: "filter-items"
  }, _utils_data__WEBPACK_IMPORTED_MODULE_5__/* .shopData.brands.map */ .JQ.brands.map((item, index) => __jsx("div", {
    className: "filter-item",
    key: index
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: `brand-${index + 1}`,
    onChange: e => onAttrClick(e, 'brand', item.slug),
    checked: containsAttrInUrl('brand', item.slug) ? true : false
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: `brand-${index + 1}`
  }, item.brand))))))))), __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_3___default()), {
    collapsed: false
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: "widget widget-collapsible"
  }, __jsx("h3", {
    className: "widget-title mb-2"
  }, __jsx("a", {
    href: "#price",
    className: `${toggleState.toLowerCase() == 'collapsed' ? 'collapsed' : ''}`,
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  }, "Price")), __jsx("div", {
    ref: setCollapsibleElement
  }, __jsx("div", {
    className: "widget-body pt-0"
  }, __jsx("div", {
    className: "filter-price"
  }, __jsx("div", {
    className: "filter-price-text d-flex justify-content-between"
  }, __jsx("span", null, "Price Range:\xA0", __jsx("span", {
    className: "filter-price-range"
  }, "$", priceRange.min, " - $", priceRange.max)), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        minPrice: priceRange.min,
        maxPrice: priceRange.max,
        page: 1
      })
    },
    className: "pr-2",
    scroll: false
  }, "Filter")), __jsx("div", {
    className: "price-slider"
  }, __jsx((react_input_range__WEBPACK_IMPORTED_MODULE_2___default()), {
    formatLabel: value => `$${value}`,
    maxValue: 1000,
    minValue: 0,
    step: 50,
    value: priceRange,
    onChange: onChangePriceRange
  }))))))))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ShopSidebarOne));

/***/ })

};
;