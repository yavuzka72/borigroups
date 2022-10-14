exports.id = 2078;
exports.ids = [2078];
exports.modules = {

/***/ 2078:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Pagination(props) {
  const {
    perPage,
    total
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: lastPage,
    1: setLastPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: pageNumbers,
    1: setPageNumbers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setCurrentPage(query.page ? parseInt(query.page) : 1);
  }, [query]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLastPage(parseInt(total / perPage) + (total % perPage ? 1 : 0));
  }, [total, perPage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let tempArray = [];
    let pageCount = Math.floor(total / perPage) + (0 < total % perPage ? 1 : 0);

    for (let i = -1; i < 2 && pageCount >= 3; i++) {
      if (1 < currentPage && currentPage < pageCount) tempArray.push(currentPage + i);
      if (1 === currentPage) tempArray.push(currentPage + i + 1);
      if (currentPage === pageCount) tempArray.push(currentPage + i - 1);
    }

    for (let i = 0; i < pageCount && pageCount < 3; i++) {
      tempArray.push(i + 1);
    }

    setPageNumbers(tempArray);
  }, [total, perPage, currentPage]);
  return __jsx("nav", null, __jsx("ul", {
    className: "pagination justify-content-center"
  }, __jsx("li", {
    className: `page-item ${currentPage < 2 ? 'disabled' : ''}`
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "page-link page-link-prev",
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: currentPage - 1
      })
    },
    scroll: false
  }, __jsx("span", {
    "aria-hidden": "true"
  }, __jsx("i", {
    className: "icon-long-arrow-left"
  })), "Prev")), pageNumbers.length ? pageNumbers.map((page, index) => __jsx("li", {
    className: `page-item ${currentPage == page ? 'active' : ''}`,
    key: index
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "page-link",
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: page
      })
    },
    scroll: false
  }, page))) : "", lastPage > 3 ? __jsx("li", {
    className: "page-item-total"
  }, "of ", lastPage) : "", __jsx("li", {
    className: `page-item ${currentPage == lastPage ? 'disabled' : ''}`
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    className: "page-link page-link-next",
    href: {
      pathname: router.pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        page: currentPage + 1
      })
    },
    scroll: false
  }, "Next", __jsx("span", {
    "aria-hidden": "true"
  }, __jsx("i", {
    className: "icon-long-arrow-right"
  }))))));
}

/* harmony default export */ __webpack_exports__["Z"] = (Pagination);

/***/ })

};
;