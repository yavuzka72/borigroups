(function() {
var exports = {};
exports.id = 6617;
exports.ids = [6617];
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

/***/ 758:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7659);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7882);
/* harmony import */ var _components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6683);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function ElementTabs() {
  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Tabs",
    subTitle: "Elements"
  }), __jsx("nav", {
    className: "breadcrumb-nav"
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
    href: "/elements"
  }, "Elements")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Tabs")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("h2", {
    className: "title mb-3"
  }, "Left Align Style")), __jsx("div", {
    className: "col-md-6 mb-2"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-tabs nav-tabs-bg",
    id: "tabs-1",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 1")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 2")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 3")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 4"))), __jsx("div", {
    className: "tab-pane tab-content tab-content-border"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. ")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut."))))), __jsx("div", {
    className: "col-md-6"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-tabs",
    id: "tabs-2",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 1")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 2")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 3")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 4"))), __jsx("div", {
    className: "tab-pane tab-content tab-content-border"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. ")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")))))), __jsx("hr", {
    className: "mt-5 mb-4"
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("h2", {
    className: "title mb-3"
  }, "Centered Align Style")), __jsx("div", {
    className: "col-md-6 mb-2"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-tabs nav-tabs-bg justify-content-center",
    id: "tabs-3",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 1")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 2")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 3")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 4"))), __jsx("div", {
    className: "tab-pane tab-content tab-content-border"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. ")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut."))))), __jsx("div", {
    className: "col-md-6"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-tabs justify-content-center",
    id: "tabs-4",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 1")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 2")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 3")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 4"))), __jsx("div", {
    className: "tab-pane tab-content tab-content-border"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. ")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")))))), __jsx("hr", {
    className: "mt-5 mb-4"
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("h2", {
    className: "title mb-3"
  }, "Line Style Tabs")), __jsx("div", {
    className: "col-md-6 mb-2"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills",
    id: "tabs-5",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 1")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 2")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 3")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 4"))), __jsx("div", {
    className: "tab-pane tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. ")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut."))))), __jsx("div", {
    className: "col-md-6"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills justify-content-center",
    id: "tabs-6",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 1")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 2")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 3")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 4"))), __jsx("div", {
    className: "tab-pane tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. ")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")))))), __jsx("hr", {
    className: "mt-4 mb-4"
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-12"
  }, __jsx("h2", {
    className: "title mb-3"
  }, "Vertical Style")), __jsx("div", {
    className: "col-md-6 mb-2"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show"
  }, __jsx("div", {
    className: "tabs-vertical"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-tabs nav-tabs-bg flex-column",
    id: "tabs-7",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 1")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 2")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 3")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 4"))), __jsx("div", {
    className: "tab-pane tab-content tab-content-border"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum int dolore earum rerum tempora aspernatur numquam velit. "), "           "), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")))))), __jsx("div", {
    className: "col-md-6"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    defaultIndex: 0,
    selectedTabClassName: "show"
  }, __jsx("div", {
    className: "tabs-vertical"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-tabs flex-column",
    id: "tabs-8",
    role: "tablist"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 1")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 2")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 3")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Tab 4"))), __jsx("div", {
    className: "tab-pane tab-content tab-content-border"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum int dolore earum rerum tempora aspernatur numquam velit. "), "           "), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, null, __jsx("p", null, "Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut."))))))))), __jsx(_components_partials_elements_element_list__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, null));
}

/* harmony default export */ __webpack_exports__["default"] = (ElementTabs);

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

/***/ 7659:
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,6683], function() { return __webpack_exec__(758); });
module.exports = __webpack_exports__;

})();