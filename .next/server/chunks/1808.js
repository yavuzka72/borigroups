"use strict";
exports.id = 1808;
exports.ids = [1808];
exports.modules = {

/***/ 1808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9042);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_2__);



function OwlCarousel(props) {
    const { adClass , options , events , isTheme =true  } = props;
    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const defaultOptions = {
        items: 1,
        loop: false,
        margin: 0,
        responsiveClass: "true",
        nav: true,
        navText: [
            '<i class="icon-angle-left">',
            '<i class="icon-angle-right">'
        ],
        dots: true,
        smartSpeed: 400,
        autoplay: false,
        responsive: {
            320: {
                nav: false
            },
            375: {
                nav: false
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.onChangeRef) {
            props.onChangeRef(carouselRef);
        }
    }, [
        carouselRef
    ]);
    let settings = Object.assign({}, defaultOptions, options);
    return props.children !== undefined ? props.children.length > 0 || props.children && props.children.length === undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_owl_carousel2__WEBPACK_IMPORTED_MODULE_2___default()), {
        ref: carouselRef,
        className: `owl-carousel ${isTheme ? "owl-theme" : ""} ${adClass}`,
        options: settings,
        events: events,
        children: props.children
    }) : "" : "";
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(OwlCarousel));


/***/ })

};
;