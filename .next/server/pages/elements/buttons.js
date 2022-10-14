(function() {
var exports = {};
exports.id = 2489;
exports.ids = [2489];
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

/***/ 1360:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7882);
/* harmony import */ var _components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6683);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6442);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function Buttons() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener('scroll', _utils__WEBPACK_IMPORTED_MODULE_4__/* .parallax */ .Tk, true);
    return () => {
      document.removeEventListener('scroll', _utils__WEBPACK_IMPORTED_MODULE_4__/* .parallax */ .Tk);
    };
  }, []);
  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: "Buttons",
    subTitle: "Elements"
  }), __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "/elements"
  }, "Elements")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Buttons")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title"
  }, "Default Style"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-round"
  }, "Button text")))), __jsx("hr", {
    className: "mt-3 mb-4"
  }), __jsx("h2", {
    className: "title"
  }, "Border Style"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary btn-rounded"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary btn-round"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark btn-rounded"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark btn-round"
  }, "Button text")))), __jsx("hr", {
    className: "mt-3 mb-4"
  }), __jsx("h2", {
    className: "title"
  }, "Button With Icon Style"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-round"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text")))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text")))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-round"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text"))))), __jsx("hr", {
    className: "mt-3 mb-4"
  }), __jsx("h2", {
    className: "title"
  }, "Border Style With Icons"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary btn-rounded"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary btn-round"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary btn-rounded"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text")))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text")))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary btn-round"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text"))))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark btn-rounded"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark btn-round"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark btn-rounded"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text")))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text")))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark btn-round"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text"))))), __jsx("hr", {
    className: "mt-3 mb-4"
  }), __jsx("h2", {
    className: "title"
  }, "Buttons With Shadow Style"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded btn-shadow"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-shadow"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-round btn-shadow"
  }, "Button text")))), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded btn-shadow"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-shadow"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-round btn-shadow"
  }, __jsx("span", null, "Button text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded btn-shadow"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text")))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-shadow"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text")))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-round btn-shadow"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button text"))))), __jsx("hr", {
    className: "mt-3 mb-4"
  }), __jsx("h2", {
    className: "title"
  }, "Simple Button Styles"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link"
  }, "Button Text"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link"
  }, __jsx("span", null, "Button Text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button Text")), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link btn-link-dark"
  }, "Button Text"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link btn-link-dark"
  }, __jsx("span", null, "Button Text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link btn-link-dark"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button Text")))), __jsx("hr", {
    className: "mt-3 mb-1"
  }))), __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title mb-3"
  }, "Button on Backgrounds")), __jsx("div", {
    className: "bg-image bg-overlay pt-5 pb-6 mb-5 bg-parallax",
    style: {
      backgroundImage: `url(images/backgrounds/bg-large.jpg)`
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-round"
  }, "Button text")))), __jsx("div", {
    className: "mb-2"
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary btn-rounded"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary btn-round"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Rounded Corners Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark btn-rounded"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Square Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark"
  }, "Button text"))), __jsx("div", {
    className: "col-6 col-lg-4 col-xl-2"
  }, __jsx("div", {
    className: "btn-wrap"
  }, __jsx("span", null, "Round Style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-dark btn-round"
  }, "Button text")))), __jsx("div", {
    className: "mb-2"
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link"
  }, "Button Text"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link"
  }, __jsx("span", null, "Button Text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button Text")), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link btn-link-dark"
  }, "Button Text"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link btn-link-dark"
  }, __jsx("span", null, "Button Text"), __jsx("i", {
    className: "icon-long-arrow-right"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-link btn-link-dark"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }), __jsx("span", null, "Button Text")))))), __jsx(_components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

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

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,6442,6683], function() { return __webpack_exec__(1360); });
module.exports = __webpack_exports__;

})();