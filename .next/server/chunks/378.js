exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_products_product_six__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6359);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4138);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8289);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function RelatedProductsOne(props) {
  const {
    products
  } = props;
  console.log(products);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("h2", {
    className: "title text-center mb-4"
  }, "You May Also Like"), props.loading ? __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2",
    isTheme: false,
    options: _utils_data__WEBPACK_IMPORTED_MODULE_3__/* .mainSlider8 */ .jc
  }, [1, 2, 3, 4].map((item, index) => __jsx("div", {
    className: "skel-pro",
    key: index
  }))) : __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-xs-2 cols-1",
    isTheme: false,
    options: _utils_data__WEBPACK_IMPORTED_MODULE_3__/* .mainSlider8 */ .jc
  }, products.map((product, index) => __jsx(_components_features_products_product_six__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    product: product,
    key: index
  }))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(RelatedProductsOne));

/***/ })

};
;