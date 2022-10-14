exports.id = 3542;
exports.ids = [3542];
exports.modules = {

/***/ 3542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4138);
/* harmony import */ var _components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4590);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8289);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function RelatedPosts(props) {
  const {
    related = [],
    loading = false
  } = props;
  return __jsx("div", {
    className: "related-posts"
  }, __jsx("h3", {
    className: "title"
  }, "Related Posts"), !loading && related.length == 0 ? __jsx("p", {
    className: "blogs-info"
  }, "No related posts were found.") : loading ? __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-2",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_3__/* .mainSlider1 */ .nB
  }, [1, 2, 3, 4].map((item, index) => __jsx("div", {
    className: "skel-pro",
    key: index
  }))) : __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    adClass: "owl-simple",
    options: _utils_data__WEBPACK_IMPORTED_MODULE_3__/* .mainSlider1 */ .nB
  }, related.map((post, index) => __jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    post: post,
    isContent: false,
    isAuthor: false,
    adClass: "entry-grid",
    key: "related_" + index
  }))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(RelatedPosts));

/***/ })

};
;