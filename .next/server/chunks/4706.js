"use strict";
exports.id = 4706;
exports.ids = [4706];
exports.modules = {

/***/ 4706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1808);
/* harmony import */ var _components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6044);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6963);





function RelatedPosts(props) {
    const { related =[] , loading =false  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "related-posts",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "title",
                children: "Related Posts"
            }),
            !loading && related.length == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "blogs-info",
                children: "No related posts were found."
            }) : loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                adClass: "owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-2",
                options: _utils_data__WEBPACK_IMPORTED_MODULE_4__/* .mainSlider1 */ .nB,
                children: [
                    1,
                    2,
                    3,
                    4
                ].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "skel-pro"
                    }, index))
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                adClass: "owl-simple",
                options: _utils_data__WEBPACK_IMPORTED_MODULE_4__/* .mainSlider1 */ .nB,
                children: related.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_posts_post_one__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        post: post,
                        isContent: false,
                        isAuthor: false,
                        adClass: "entry-grid"
                    }, "related_" + index))
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(RelatedPosts));


/***/ })

};
;