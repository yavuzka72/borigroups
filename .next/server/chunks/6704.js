exports.id = 6704;
exports.ids = [6704];
exports.modules = {

/***/ 6704:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7852);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4138);
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2870);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function PostTwo(props) {
  const {
    post,
    imageSize = 4
  } = props;

  const openVideoModal = e => {
    e.preventDefault();
    props.showVideo();
  };

  let date = new Date(post.date);
  let options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC"
  };
  return __jsx("article", {
    className: "entry entry-list"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: `col-md-${imageSize}`
  }, post.image.length <= 1 ? __jsx("figure", {
    className: `entry-media ${post.type == 'video' ? 'entry-video' : ''}`,
    style: {
      paddingTop: `${post.image[0].height / post.image[0].width * 100}%`
    }
  }, post.type !== 'video' ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/blog/single/default/${post.slug}`
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "Post",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + post.image[0].url,
    threshold: 500,
    effect: "blur"
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/blog/single/default/${post.slug}`
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "Post",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + post.image[0].url,
    threshold: 500,
    effect: "blur"
  })), __jsx("a", {
    href: "https://www.youtube.com/watch?v=vBPgmASQ1A0",
    onClick: openVideoModal,
    className: "btn-video btn-iframe"
  }, __jsx("i", {
    className: "icon-play"
  })))) : __jsx("figure", {
    className: "entry-media",
    style: {
      paddingTop: `${post.image[0].height / post.image[0].width * 100}%`
    }
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    adClass: "owl-simple owl-light owl-nav-inside cols-1",
    options: {
      dots: false,
      nav: true,
      responsive: {
        992: {
          nav: true
        }
      }
    }
  }, post.image.map((item, index) => __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/blog/single/default/${post.slug}`,
    key: index
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImage, {
    alt: "Post",
    src: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + item.url}`,
    threshold: 500,
    effect: "blur"
  })))))), __jsx("div", {
    className: `col-md-${12 - imageSize}`
  }, __jsx("div", {
    className: "entry-body"
  }, __jsx("div", {
    className: "entry-meta"
  }, __jsx("span", {
    className: "entry-author"
  }, "by ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/blog/single/default/${post.slug}`
  }, post.author)), __jsx("span", {
    className: "meta-separator"
  }, "|"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/blog/single/default/${post.slug}`
  }, date.toLocaleDateString('en-US', options)), __jsx("span", {
    className: "meta-separator"
  }, "|"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/blog/single/default/${post.slug}`
  }, post.comments, " Comments")), __jsx("h2", {
    className: "entry-title"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/blog/single/default/${post.slug}`
  }, post.title)), __jsx("div", {
    className: "entry-cats"
  }, "in\xA0", post.blog_categories.map((cat, index) => __jsx("span", {
    key: index
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: {
      pathname: '/blog/classic',
      query: {
        category: cat.slug
      }
    }
  }, cat.name), index < post.blog_categories.length - 1 ? ', ' : ''))), __jsx("div", {
    className: "entry-content"
  }, __jsx("p", null, post.content), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: `/blog/single/default/${post.slug}`,
    className: "read-more"
  }, "Continue Reading"))))));
}

/* harmony default export */ __webpack_exports__["Z"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, _store_demo__WEBPACK_IMPORTED_MODULE_5__/* .actions */ .Nw)(PostTwo));

/***/ })

};
;