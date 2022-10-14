(function() {
var exports = {};
exports.id = 5903;
exports.ids = [5903];
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

/***/ 642:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5403);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7882);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const MapComponent = ({
  text
}) => __jsx("div", null, text);

function Contact2() {
  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Contact us 2",
    subTitle: "Pages"
  }), __jsx("nav", {
    className: "breadcrumb-nav border-0 mb-0"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, "Pages")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Contact Us 2")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    id: "map",
    className: "w-100 mb-5"
  }, __jsx((google_map_react__WEBPACK_IMPORTED_MODULE_1___default()), {
    bootstrapURLKeys: {
      key: 'AIzaSyBgVsModMpsR59_OIK-2sEcmhBBkW4xUuw'
    },
    defaultCenter: {
      lat: 59.95,
      lng: 30.33
    },
    defaultZoom: 11
  }, __jsx(MapComponent, {
    lat: 59.955413,
    lng: 30.337844,
    text: "My Marker"
  }))), __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-4"
  }, __jsx("div", {
    className: "contact-box text-center"
  }, __jsx("h3", null, "Office"), __jsx("address", null, "1 New York Plaza, New York, ", __jsx("br", null), "NY 10004, USA"))), __jsx("div", {
    className: "col-md-4"
  }, __jsx("div", {
    className: "contact-box text-center"
  }, __jsx("h3", null, "Start a Conversation"), __jsx("div", null, __jsx("a", {
    href: "mailto:#"
  }, "info@Molla.com")), __jsx("div", null, __jsx("a", {
    href: "tel:#"
  }, "+1 987-876-6543"), ", ", __jsx("a", {
    href: "tel:#"
  }, "+1 987-976-1234")))), __jsx("div", {
    className: "col-md-4"
  }, __jsx("div", {
    className: "contact-box text-center"
  }, __jsx("h3", null, "Social"), __jsx("div", {
    className: "social-icons social-icons-color justify-content-center"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "social-icon social-facebook",
    title: "Facebook"
  }, __jsx("i", {
    className: "icon-facebook-f"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "social-icon social-twitter",
    title: "Twitter"
  }, __jsx("i", {
    className: "icon-twitter"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "social-icon social-instagram",
    title: "Instagram"
  }, __jsx("i", {
    className: "icon-instagram"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "social-icon social-youtube",
    title: "Youtube"
  }, __jsx("i", {
    className: "icon-youtube"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#",
    className: "social-icon social-pinterest",
    title: "Pinterest"
  }, __jsx("i", {
    className: "icon-pinterest"
  })))))), __jsx("hr", {
    className: "mt-3 mb-5 mt-md-1"
  }), __jsx("div", {
    className: "touch-container row justify-content-center"
  }, __jsx("div", {
    className: "col-md-9 col-lg-7"
  }, __jsx("div", {
    className: "text-center"
  }, __jsx("h2", {
    className: "title mb-1"
  }, "Get In Touch"), __jsx("p", {
    className: "lead text-primary"
  }, "We collaborate with ambitious brands and people; we\u2019d love to build something great together."), __jsx("p", {
    className: "mb-3"
  }, "Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")), __jsx("form", {
    action: "#",
    className: "contact-form mb-2"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-4"
  }, __jsx("label", {
    htmlFor: "cname",
    className: "sr-only"
  }, "Name"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "cname",
    placeholder: "Name *",
    required: true
  })), __jsx("div", {
    className: "col-sm-4"
  }, __jsx("label", {
    htmlFor: "cemail",
    className: "sr-only"
  }, "Name"), __jsx("input", {
    type: "email",
    className: "form-control",
    id: "cemail",
    placeholder: "Email *",
    required: true
  })), __jsx("div", {
    className: "col-sm-4"
  }, __jsx("label", {
    htmlFor: "cphone",
    className: "sr-only"
  }, "Phone"), __jsx("input", {
    type: "tel",
    className: "form-control",
    id: "cphone",
    placeholder: "Phone"
  }))), __jsx("label", {
    htmlFor: "csubject",
    className: "sr-only"
  }, "Subject"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "csubject",
    placeholder: "Subject"
  }), __jsx("label", {
    htmlFor: "cmessage",
    className: "sr-only"
  }, "Message"), __jsx("textarea", {
    className: "form-control",
    cols: "30",
    rows: "4",
    id: "cmessage",
    required: true,
    placeholder: "Message *"
  }), __jsx("div", {
    className: "text-center"
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2 btn-minwidth-sm"
  }, __jsx("span", null, "SUBMIT"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact2);

/***/ }),

/***/ 5403:
/***/ (function(module) {

"use strict";
module.exports = require("google-map-react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011], function() { return __webpack_exec__(642); });
module.exports = __webpack_exports__;

})();