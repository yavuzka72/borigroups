exports.id = 5130;
exports.ids = [5130];
exports.modules = {

/***/ 7185:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function Accordion(props) {
  const {
    adClass = "",
    type = "normal"
  } = props;

  function onHandleClick(e) {
    if (e.target.classList.contains("toggle-button") || e.target.querySelector(".toggle-button")) {
      if (e.target.classList.contains("collapsed") || e.target.querySelector(".toggle-button") && e.target.querySelector(".toggle-button").classList.contains("collapsed") || e.target.classList.contains("collapsing") || e.target.querySelector(".toggle-button") && e.target.querySelector(".toggle-button").classList.contains("collapsing")) {
        if (e.currentTarget.querySelector(".toggle-button.expanded")) {
          e.currentTarget.querySelector(".toggle-button.expanded").click();
        }

        if (e.currentTarget.querySelector(".toggle-button.expanding")) {
          e.currentTarget.querySelector(".toggle-button.expanding").click();
        }
      }
    }
  }

  return type === "normal" ? __jsx("div", {
    className: `accordion  ${adClass}`,
    onClick: onHandleClick
  }, props.children) : type === "checkout" ? __jsx("div", {
    className: "accordion-summary",
    onClick: onHandleClick
  }, props.children) : '';
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Accordion));

/***/ }),

/***/ 2674:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3920);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6442);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Card(props) {
  const {
    title,
    expanded,
    adClass = "",
    type = "default"
  } = props;
  return "default" === type ? __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_1___default()), {
    collapsed: expanded ? false : true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: `card ${adClass}`
  }, __jsx("div", {
    className: "card-header",
    onClick: onToggle
  }, __jsx("h2", {
    className: "card-title"
  }, __jsx("span", {
    className: `toggle-button ${toggleState.toLowerCase()}`,
    dangerouslySetInnerHTML: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .safeContent */ .rJ)(title),
    style: {
      height: 'auto'
    }
  }))), __jsx("div", {
    ref: setCollapsibleElement
  }, __jsx("div", {
    className: "card-body"
  }, props.children)))) : __jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_1___default()), {
    collapsed: expanded ? false : true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => __jsx("div", {
    className: `acc-item ${adClass}`
  }, __jsx("h5", null, __jsx("span", {
    className: `toggle-button ${toggleState.toLowerCase()}`,
    dangerouslySetInnerHTML: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .safeContent */ .rJ)(title),
    onClick: onToggle,
    style: {
      height: 'auto'
    }
  })), __jsx("div", {
    ref: setCollapsibleElement
  }, __jsx("div", {
    className: "collapse-wrap"
  }, props.children))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Card));

/***/ })

};
;