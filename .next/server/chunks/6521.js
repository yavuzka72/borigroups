exports.id = 6521;
exports.ids = [6521];
exports.modules = {

/***/ 6521:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7852);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function BlogSidebar(props) {
  const {
    categories = [],
    toggle = false
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const query = router.query;
  return __jsx("div", {
    className: `sidebar mt-0 ${toggle ? 'sidebar-filter px-3 right pt-3' : ''}`
  }, __jsx("div", {
    className: "widget widget-search"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Search"), __jsx("form", {
    action: "#",
    method: "get"
  }, __jsx("div", {
    className: "header-search-wrapper search-wrapper-wide"
  }, __jsx("label", {
    htmlFor: "ws",
    className: "sr-only"
  }, "Search in blog"), __jsx("input", {
    type: "search",
    className: "form-control",
    name: "ws",
    id: "ws",
    placeholder: "Search in blog",
    required: true
  }), __jsx("button", {
    type: "submit",
    className: "btn"
  }, __jsx("i", {
    className: "icon-search"
  }), __jsx("span", {
    className: "sr-only"
  }, "Search"))))), __jsx("div", {
    className: "widget widget-cats"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Categories"), __jsx("ul", null, router.pathname.includes('single') ? categories.map((category, index) => __jsx("li", {
    key: index
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: '/blog/classic/',
      query: {
        category: category.slug
      }
    },
    className: `${query.category == category.slug ? 'active' : ''}`,
    scroll: false
  }, category.name, __jsx("span", null, category.count)))) : categories.map((category, index) => __jsx("li", {
    key: index
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: router.pathname,
      query: {
        category: category.slug
      }
    },
    className: `${query.category == category.slug ? 'active' : ''}`,
    scroll: false
  }, category.name, __jsx("span", null, category.count)))))), __jsx("div", {
    className: "widget"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Popular Posts"), __jsx("ul", {
    className: "posts-list"
  }, __jsx("li", null, __jsx("figure", {
    className: "position-relative"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/blog/single/default/sed-adipiscing-ornare.",
    className: "w-100"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "Post",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + '/uploads/post_1_b9361c0eac.jpg',
    threshold: 500,
    effect: "blur",
    height: "80"
  }))), __jsx("div", null, __jsx("span", null, "Nov 22, 2018"), __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/blog/single/default/sed-adipiscing-ornare."
  }, "Sed adipiscing ornare..")))), __jsx("li", null, __jsx("figure", {
    className: "position-relative"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/blog/single/default/fusce-pellentesque-suscipit.",
    className: "w-100"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "Post",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + '/uploads/post_4_be80872f91.jpg',
    threshold: 500,
    effect: "blur",
    height: "80"
  }))), __jsx("div", null, __jsx("span", null, "Nov 19, 2018"), __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/blog/single/default/fusce-pellentesque-suscipit."
  }, "Fusce pellentesque suscipit.")))), __jsx("li", null, __jsx("figure", {
    className: "position-relative"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/blog/single/default/donec-nec-justo-eget-felis-facilisis-fermentum.",
    className: "w-100"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "Post",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + '/uploads/post_5_3c9d9563f6.jpg',
    threshold: 500,
    effect: "blur",
    height: "80"
  }))), __jsx("div", null, __jsx("span", null, "Nov 12, 2018"), __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/blog/single/default/donec-nec-justo-eget-felis-facilisis-fermentum."
  }, "Donec nec justo eget felis facilisis  fermentum.")))), __jsx("li", null, __jsx("figure", {
    className: "position-relative"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/blog/single/default/vivamus-vestibulum-ngtulla-necante.",
    className: "w-100"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "Post",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + '/uploads/post_2_a2b4601de7.jpg',
    threshold: 500,
    effect: "blur",
    height: "80"
  }))), __jsx("div", null, __jsx("span", null, "Nov 25, 2018"), __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/blog/single/default/vivamus-vestibulum-ngtulla-necante."
  }, "Vivamus vestibulum ngtulla necante.")))))), __jsx("div", {
    className: "widget widget-banner-sidebar"
  }, __jsx("div", {
    className: "banner-sidebar-title"
  }, "ad box 280 x 280"), __jsx("div", {
    className: "banner-sidebar banner-overlay"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/shop/sidebar/3cols",
    className: "w-100"
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "banner",
    src: "images/blog/sidebar/banner.jpg",
    threshold: 500,
    height: 277,
    width: "280",
    effect: "opacity"
  })), __jsx("div", {
    className: "banner-content text-left"
  }, __jsx("p", {
    className: "mb-1"
  }, "online & in-store"), __jsx("h3", {
    className: "banner-subtitle text-uppercase"
  }, "Spring Sale"), __jsx("h2", {
    className: "banner-title"
  }, "Up to 60% off", __jsx("br", null), "from $55"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "/shop/sidebar/3cols",
    className: "btn btn-outline btn-md btn-outline-white text-uppercase m-0"
  }, "Shop Now")))), __jsx("div", {
    className: "widget"
  }, __jsx("h3", {
    className: "widget-title"
  }, "Browse Tags"), __jsx("div", {
    className: "tagcloud"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "fashion"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "style"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "women"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "photography"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "travel"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "shopping"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "hobbies"))), __jsx("div", {
    className: "widget widget-text"
  }, __jsx("h3", {
    className: "widget-title"
  }, "About Blog"), __jsx("div", {
    className: "widget-text-content"
  }, __jsx("p", null, "Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, pulvinar nunc sapien ornare nisl."))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(BlogSidebar));

/***/ })

};
;