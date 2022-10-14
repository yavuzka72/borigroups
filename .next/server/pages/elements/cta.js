(function() {
var exports = {};
exports.id = 2853;
exports.ids = [2853];
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

/***/ 783:
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






function CTA() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.addEventListener("scroll", _utils__WEBPACK_IMPORTED_MODULE_4__/* .parallax */ .Tk, true);
    return () => {
      document.removeEventListener("scroll", _utils__WEBPACK_IMPORTED_MODULE_4__/* .parallax */ .Tk);
    };
  }, []);
  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: "Call to Action",
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
  }, "Call To Action")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title text-center mb-5"
  }, "Newsletter Banner ", __jsx("span", {
    className: "title-separator"
  }, "/"), " With Background"), __jsx("div", {
    className: "cta cta-horizontal cta-horizontal-box bg-image mb-5",
    style: {
      backgroundImage: `url(images/backgrounds/cta/bg-1.jpg)`,
      backgroundPosition: `center right`
    }
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-lg-4 col-xl-3 offset-xl-1"
  }, __jsx("h3", {
    className: "cta-title"
  }, "Join Our Newsletter"), __jsx("p", {
    className: "cta-desc"
  }, "Lorem ipsum dolor sit amet adipiscing.")), __jsx("div", {
    className: "col-lg-8 col-xl-7"
  }, __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "Enter your Email Address",
    "aria-label": "Email Adress",
    required: true
  }), __jsx("div", {
    className: "input-group-append"
  }, __jsx("button", {
    className: "btn btn-primary btn-rounded",
    type: "submit"
  }, __jsx("span", null, "Subscribe"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))))))), __jsx("hr", {
    className: "mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-5"
  }, "Newsletter Banner ", __jsx("span", {
    className: "title-separator"
  }, "/"), " With Dark Background")), __jsx("div", {
    className: "cta bg-image bg-dark pt-6 pb-7 mb-5 bg-parallax",
    style: {
      backgroundImage: `url(images/backgrounds/bg-large.jpg)`
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-sm-10 col-md-8 col-lg-6"
  }, __jsx("div", {
    className: "cta-heading text-center"
  }, __jsx("h3", {
    className: "cta-title text-white"
  }, "Join Our Newsletter"), __jsx("p", {
    className: "cta-desc text-light"
  }, "Lorem ipsum dolor sit amet adipiscing.")), __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("input", {
    type: "email",
    className: "form-control border-0",
    placeholder: "Enter your Email Address",
    "aria-label": "Email Adress",
    required: true
  }), __jsx("div", {
    className: "input-group-append"
  }, __jsx("button", {
    className: "btn btn-primary",
    type: "submit"
  }, __jsx("span", null, "Subscribe"), __jsx("i", {
    className: "icon-long-arrow-right"
  }))))))))), __jsx("hr", {
    className: "mb-5"
  }), __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title text-center mb-5"
  }, "Newsletter Banner ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Without Background"), __jsx("div", {
    className: "cta cta-horizontal mb-3"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-lg-4 col-xl-3 offset-xl-1"
  }, __jsx("h3", {
    className: "cta-title"
  }, "Join Our Newsletter"), __jsx("p", {
    className: "cta-desc"
  }, "Lorem ipsum dolor sit amet adipiscing.")), __jsx("div", {
    className: "col-lg-8 col-xl-7"
  }, __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "input-group"
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "Enter your Email Address",
    "aria-label": "Email Adress",
    required: true
  }), __jsx("div", {
    className: "input-group-append"
  }, __jsx("button", {
    className: "btn btn-primary btn-rounded",
    type: "submit"
  }, __jsx("span", null, "Subscribe"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))))))), __jsx("hr", {
    className: "mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-5"
  }, "Call to Action ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Newsletter Banner ", __jsx("span", {
    className: "title-separator"
  }, "/"), " With Background"), __jsx("div", {
    className: "cta cta-separator bg-image mb-5",
    style: {
      backgroundImage: `url(images/backgrounds/cta/bg-5.jpg)`,
      backgroundPosition: `center right`
    }
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6"
  }, __jsx("div", {
    className: "cta-wrapper cta-text text-center"
  }, __jsx("h3", {
    className: "cta-title"
  }, "Morbi in sem quis dui placerat pellentesque felis."), __jsx("p", {
    className: "cta-desc"
  }, "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, __jsx("span", null, "Click Here"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("div", {
    className: "cta-wrapper text-center"
  }, __jsx("h3", {
    className: "cta-title"
  }, "Join Our Newsletter"), __jsx("p", {
    className: "cta-desc"
  }, "Lorem ipsum dolor sit amet adipiscing."), __jsx("form", {
    action: "#"
  }, __jsx("input", {
    type: "email",
    className: "form-control form-control-rounded",
    placeholder: "Enter your Email Address",
    "aria-label": "Email Adress",
    required: true
  }), __jsx("button", {
    className: "btn btn-primary",
    type: "submit"
  }, __jsx("span", null, "Subscribe"), __jsx("i", {
    className: "icon-long-arrow-right"
  }))))))), __jsx("hr", {
    className: "mt-3 mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-5"
  }, "Call to Action ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Newsletter Banner ", __jsx("span", {
    className: "title-separator"
  }, "/"), " No Background"), __jsx("div", {
    className: "cta cta-separator mb-5"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6"
  }, __jsx("div", {
    className: "cta-wrapper cta-text text-center"
  }, __jsx("h3", {
    className: "cta-title"
  }, "Morbi in sem quis dui placerat pellentesque felis."), __jsx("p", {
    className: "cta-desc"
  }, "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, __jsx("span", null, "Click Here"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("div", {
    className: "cta-wrapper text-center"
  }, __jsx("h3", {
    className: "cta-title"
  }, "Join Our Newsletter"), __jsx("p", {
    className: "cta-desc"
  }, "Lorem ipsum dolor sit amet adipiscing."), __jsx("form", {
    action: "#"
  }, __jsx("input", {
    type: "email",
    className: "form-control form-control-rounded",
    placeholder: "Enter your Email Address",
    "aria-label": "Email Adress",
    required: true
  }), __jsx("button", {
    className: "btn btn-primary",
    type: "submit"
  }, __jsx("span", null, "Subscribe"), __jsx("i", {
    className: "icon-long-arrow-right"
  }))))))), __jsx("hr", {
    className: "mt-3 mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-5"
  }, "Call to Action ", __jsx("span", {
    className: "title-separator"
  }, "/"), " Newsletter Banner ", __jsx("span", {
    className: "title-separator"
  }, "/"), " With Background"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6"
  }, __jsx("div", {
    className: "cta bg-image mb-3",
    style: {
      backgroundImage: `url(images/backgrounds/cta/bg-3.jpg)`,
      backgroundPosition: `center right`
    }
  }, __jsx("div", {
    className: "cta-wrapper cta-text text-center"
  }, __jsx("h3", {
    className: "cta-title"
  }, "Morbi in sem quis dui placerat pellentesque felis."), __jsx("p", {
    className: "cta-desc"
  }, "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, __jsx("span", null, "Click Here"), __jsx("i", {
    className: "icon-long-arrow-right"
  }))))), __jsx("div", {
    className: "col-lg-6"
  }, __jsx("div", {
    className: "cta bg-image mb-3",
    style: {
      backgroundImage: `url(images/backgrounds/cta/bg-4.jpg)`,
      backgroundPosition: `center right`
    }
  }, __jsx("div", {
    className: "cta-wrapper text-center"
  }, __jsx("h3", {
    className: "cta-title"
  }, "Join Our Newsletter"), __jsx("p", {
    className: "cta-desc"
  }, "Lorem ipsum dolor sit amet adipiscing."), __jsx("form", {
    action: "#"
  }, __jsx("input", {
    type: "email",
    className: "form-control form-control-rounded",
    placeholder: "Enter your Email Address",
    "aria-label": "Email Adress",
    required: true
  }), __jsx("button", {
    className: "btn btn-primary",
    type: "submit"
  }, __jsx("span", null, "Subscribe"), __jsx("i", {
    className: "icon-long-arrow-right"
  }))))))), __jsx("hr", {
    className: "mt-3 mb-5"
  })), __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title text-center mb-5"
  }, "Sale Banner  ", __jsx("span", {
    className: "title-separator"
  }, "/"), " With Background"), __jsx("div", {
    className: "cta cta-border mb-5"
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-md-11 col-xl-10"
  }, __jsx("div", {
    className: "cta-content"
  }, __jsx("div", {
    className: "cta-heading"
  }, __jsx("h3", {
    className: "cta-title text-right"
  }, "Vivamus vestibulum ", __jsx("br", null), "ntulla nec ante")), __jsx("div", {
    className: "cta-text"
  }, __jsx("p", null, "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.")), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, __jsx("span", null, "Click Here"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))))), __jsx("hr", {
    className: "mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-5"
  }, "Sale Banner ", __jsx("span", {
    className: "title-separator"
  }, "/"), " With Background"), __jsx("div", {
    className: "cta bg-image pt-6 pb-7 mb-5",
    style: {
      backgroundImage: `url(images/backgrounds/cta/bg-2.jpg)`,
      backgroundPosition: `center right`
    }
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-sm-10 col-md-8 col-lg-6"
  }, __jsx("div", {
    className: "cta-text text-center"
  }, __jsx("h3", {
    className: "cta-title"
  }, "Morbi in sem quis dui placerat felis."), __jsx("p", {
    className: "cta-desc"
  }, "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, __jsx("span", null, "Click Here"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))))), __jsx("hr", {
    className: "mb-5"
  }), __jsx("h2", {
    className: "title text-center mb-5"
  }, "Sale Banner  ", __jsx("span", {
    className: "title-separator"
  }, "/"), " With Dark Background")), __jsx("div", {
    className: "cta bg-image bg-dark pt-6 pb-7 bg-parallax",
    style: {
      backgroundImage: `url(images/backgrounds/bg-large.jpg)`
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-sm-10 col-md-8 col-lg-6"
  }, __jsx("div", {
    className: "cta-text text-center"
  }, __jsx("h3", {
    className: "cta-title text-white"
  }, "Morbi in sem quis dui placerat felis."), __jsx("p", {
    className: "cta-desc text-light"
  }, "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    href: "#",
    className: "btn btn-primary btn-rounded"
  }, __jsx("span", null, "Click Here"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))))))), __jsx(_components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null));
}

/* harmony default export */ __webpack_exports__["default"] = (CTA);

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,6442,6683], function() { return __webpack_exec__(783); });
module.exports = __webpack_exports__;

})();