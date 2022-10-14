exports.id = 2076;
exports.ids = [2076];
exports.modules = {

/***/ 2076:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Breadcrumb(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    prev,
    next,
    current,
    fullWidth = false
  } = props;
  return __jsx("nav", {
    className: "breadcrumb-nav border-0 mb-0"
  }, __jsx("div", {
    className: 'd-flex align-items-center ' + (fullWidth ? 'container-fluid' : 'container')
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress"
  }, "Product")), __jsx("li", {
    className: "breadcrumb-item active"
  }, current)), __jsx("nav", {
    className: "product-pager ml-auto"
  }, prev ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        slug: prev.slug
      }
    },
    className: `product-pager-link product-pager-prev ${!next ? 'prev-only' : ''}`
  }, __jsx("i", {
    className: "icon-angle-left"
  }), __jsx("span", null, "Prev"), __jsx("div", {
    className: "product-detail"
  }, __jsx("figure", null, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + prev.sm_pictures[0].url,
    alt: "product",
    width: prev.sm_pictures[0].width,
    height: prev.sm_pictures[0].height
  })), __jsx("h3", {
    className: "product-name mb-0"
  }, prev.name))) : "", next ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        slug: next.slug
      }
    },
    className: "product-pager-link product-pager-next"
  }, __jsx("span", null, "Next"), __jsx("i", {
    className: "icon-angle-right"
  }), __jsx("div", {
    className: "product-detail"
  }, __jsx("figure", null, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + next.sm_pictures[0].url,
    alt: "product",
    width: next.sm_pictures[0].width,
    height: next.sm_pictures[0].height
  })), __jsx("h3", {
    className: "product-name mb-0"
  }, next.name))) : "")));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Breadcrumb));

/***/ })

};
;