exports.id = 3311;
exports.ids = [3311];
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

/***/ 9688:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7852);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ShopSidebarTwo() {
  function cleanAllFilter(e) {
    e.preventDefault();
    let allInputs = document.querySelectorAll('.sidebar-filter input[type=checkbox]');

    for (let i = 0; i < allInputs.length; i++) {
      allInputs[i].checked = false;
    }
  }

  function closeSidebar() {
    document.querySelector('body').classList.remove('sidebar-filter-active');
  }

  return __jsx("aside", {
    className: "sidebar-shop sidebar-filter sidebar-filter-banner"
  }, __jsx("div", {
    className: "sidebar-filter-wrapper"
  }, __jsx("div", {
    className: "widget widget-clean"
  }, __jsx("button", {
    onClick: closeSidebar
  }, __jsx("i", {
    className: "icon-close"
  }), "Filters"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "sidebar-filter-clear",
    onClick: cleanAllFilter
  }, "Clean All")), __jsx("div", {
    className: "widget"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Browse Category"), __jsx("div", {
    className: "widget-body"
  }, __jsx("div", {
    className: "filter-items filter-items-count"
  }, __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-1"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-1"
  }, "Women")), __jsx("span", {
    className: "item-count"
  }, "3")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-2"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-2"
  }, "Men")), __jsx("span", {
    className: "item-count"
  }, "0")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-3"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-3"
  }, "Holiday Shop")), __jsx("span", {
    className: "item-count"
  }, "0")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-4"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-4"
  }, "Gifts")), __jsx("span", {
    className: "item-count"
  }, "0")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-5"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-5"
  }, "Homeware")), __jsx("span", {
    className: "item-count"
  }, "0")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-6"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-6"
  }, "Grid Categories Fullwidth")), __jsx("span", {
    className: "item-count"
  }, "13")), __jsx("div", {
    className: "sub-filter-items"
  }, __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-7"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-7"
  }, "Dresses")), __jsx("span", {
    className: "item-count"
  }, "3")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-8"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-8"
  }, "T-shirts")), __jsx("span", {
    className: "item-count"
  }, "0")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-9"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-9"
  }, "Bags")), __jsx("span", {
    className: "item-count"
  }, "4")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-10"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-10"
  }, "Jackets")), __jsx("span", {
    className: "item-count"
  }, "2")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-11"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-11"
  }, "Shoes")), __jsx("span", {
    className: "item-count"
  }, "2")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-12"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-12"
  }, "Jumpers")), __jsx("span", {
    className: "item-count"
  }, "1")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-13"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-13"
  }, "Jeans")), __jsx("span", {
    className: "item-count"
  }, "1")), __jsx("div", {
    className: "filter-item"
  }, __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "cat-14"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "cat-14"
  }, "Sportwear")), __jsx("span", {
    className: "item-count"
  }, "0"))))))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ShopSidebarTwo));

/***/ })

};
;