(function() {
var exports = {};
exports.id = 6325;
exports.ids = [6325];
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

/***/ 6570:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7882);
/* harmony import */ var _components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6683);
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2870);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function VideoBanners(props) {
  const openVideoModal = e => {
    e.preventDefault();
    props.showVideo();
  };

  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Video Banner",
    subTitle: "Elements"
  }), __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container"
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/elements"
  }, "Elements")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Video Banner")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "title mb-3 text-center"
  }, "Fullwidth Banner")), __jsx("div", {
    className: "video-banner video-banner-bg bg-image text-center",
    style: {
      backgroundImage: "url('images/video/bg-1.jpg')"
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("h3", {
    className: "video-banner-title h1 text-white"
  }, __jsx("span", null, "New Video"), __jsx("strong", null, "Womens New Arrivals")), __jsx("a", {
    href: "https://www.youtube.com/watch?v=vBPgmASQ1A0",
    onClick: openVideoModal,
    className: "btn-video btn-iframe"
  }, __jsx("i", {
    className: "icon-play"
  })))), __jsx("div", {
    className: "container"
  }, __jsx("hr", {
    className: "mt-5 mb-4"
  }), __jsx("h2", {
    className: "title mb-3 text-center"
  }, "Video Banner with Description")), __jsx("div", {
    className: "video-banner video-banner-poster text-center"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-md-6 mb-3 mb-md-0"
  }, __jsx("h3", {
    className: "video-banner-title h3"
  }, __jsx("span", {
    className: "text-primary"
  }, "New Video"), "Womens New Arrivals"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper ...")), __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "video-poster"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "poster",
    width: 570,
    height: 390,
    src: "images/video/poster-1.jpg",
    threshold: 200,
    effect: "opacity"
  }), __jsx("div", {
    className: "video-poster-content"
  }, __jsx("a", {
    href: "https://www.youtube.com/watch?v=vBPgmASQ1A0",
    onClick: openVideoModal,
    className: "btn-video btn-iframe"
  }, __jsx("i", {
    className: "icon-play"
  })))))))), __jsx("div", {
    className: "container"
  }, __jsx("hr", {
    className: "mt-5 mb-4"
  }), __jsx("h2", {
    className: "title mb-3 text-center"
  }, "Video Banner with Background")), __jsx("div", {
    className: "video-banner bg-image text-center pt-8 pb-8",
    style: {
      backgroundImage: "url('images/video/bg-2.jpg')"
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-10 offset-sm-1 col-md-8 offset-md-2"
  }, __jsx("div", {
    className: "video-poster"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "poster",
    width: 770,
    height: 400,
    src: "images/video/poster-2.jpg",
    threshold: 200,
    effect: "opacity"
  }), __jsx("div", {
    className: "video-poster-content"
  }, __jsx("h3", {
    className: "h4 video-poster-title text-white"
  }, "Womens New Arrivals"), __jsx("a", {
    href: "https://www.youtube.com/watch?v=vBPgmASQ1A0",
    onClick: openVideoModal,
    className: "btn-video btn-iframe"
  }, __jsx("i", {
    className: "icon-play"
  })))))))), __jsx("div", {
    className: "container"
  }, __jsx("hr", {
    className: "mt-5 mb-4"
  }), __jsx("h2", {
    className: "title mb-3 text-center"
  }, "Deal Video Banner")), __jsx("div", {
    className: "video-banner bg-light pt-5 pb-5"
  }, __jsx("div", {
    className: "container align-items-center"
  }, __jsx("div", {
    className: "video-banner-box bg-white"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-md-6 mb-3 mb-md-0"
  }, __jsx("div", {
    className: "video-box-content"
  }, __jsx("h3", {
    className: "video-banner-title h1"
  }, __jsx("span", {
    className: "text-primary"
  }, "New Video"), __jsx("strong", null, "Deal Banner")), __jsx("p", null, "Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#",
    className: "btn btn-outline-primary"
  }, __jsx("span", null, "Click Here"), __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "col-md-6"
  }, __jsx("div", {
    className: "video-poster"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "poster",
    width: 540,
    height: 440,
    src: "images/video/poster-3.jpg",
    threshold: 200,
    effect: "opacity"
  }), __jsx("div", {
    className: "video-poster-content"
  }, __jsx("a", {
    href: "https://www.youtube.com/watch?v=vBPgmASQ1A0",
    onClick: openVideoModal,
    className: "btn-video btn-iframe"
  }, __jsx("i", {
    className: "icon-play"
  })))))))))), __jsx(_components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, null));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, _store_demo__WEBPACK_IMPORTED_MODULE_6__/* .actions */ .Nw)(VideoBanners));

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

/***/ }),

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 3643:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ 584:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,2870,6683], function() { return __webpack_exec__(6570); });
module.exports = __webpack_exports__;

})();