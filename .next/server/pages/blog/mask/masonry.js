(function() {
var exports = {};
exports.id = 4331;
exports.ids = [4331];
exports.modules = {

/***/ 653:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6558);
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7852);
/* harmony import */ var _components_features_page_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7882);
/* harmony import */ var _components_features_posts_post_three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6059);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4733);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function BlogMaskMasonry() {
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_7__/* .GET_POSTS_BY_PAGE */ .AU, {
    variables: {
      page: 'mask-masonry'
    }
  });
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const posts = data && data.postsByPage.data;
  let iso;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (posts && posts.length > 0) {
      imagesloaded__WEBPACK_IMPORTED_MODULE_2___default()('.page-content').on('done', async function () {
        const Isotope = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7613, 23))).default;
        iso = new Isotope(ref.current, {
          itemSelector: '.grid-item'
        });
      });
    }
  }, [posts]);

  function getPostCategory(post) {
    return post.blog_categories.reduce((acc, cur) => {
      return acc + " " + cur.slug;
    }, "");
  }

  function isoFilter(e, cat) {
    e.preventDefault();
    e.currentTarget.closest('.menu-cat').querySelector('.active').classList.remove('active');
    e.currentTarget.parentElement.classList.add('active');
    iso.arrange({
      filter: function (index, itemElem) {
        if (cat == '') return true;
        return itemElem.classList.contains(cat);
      }
    });
  }

  if (error) {
    return __jsx("div", null);
  }

  return __jsx("div", {
    className: "main"
  }, __jsx(_components_features_page_header__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "Blog Mask Masonry",
    subTitle: "Blog"
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
    href: "/blog/classic"
  }, "Blog")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Mask Masonry")))), __jsx("div", {
    className: "page-content"
  }, __jsx("div", {
    className: `container skeleton-body ${loading ? '' : 'loaded'}`
  }, loading || !posts ? __jsx("div", {
    className: "row"
  }, [1, 2, 3, 4, 5, 6].map(item => __jsx("div", {
    className: "col-sm-6 col-md-4",
    key: item
  }, __jsx("div", {
    className: "skel-grid-post"
  })))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("nav", {
    className: "blog-nav"
  }, __jsx("ul", {
    className: "menu-cat entry-filter justify-content-center"
  }, __jsx("li", {
    className: "active"
  }, __jsx("a", {
    href: "#",
    onClick: e => isoFilter(e, '')
  }, "All Blog Posts", __jsx("span", null, "9"))), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => isoFilter(e, 'lifestyle')
  }, "Lifestyle", __jsx("span", null, "3"))), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => isoFilter(e, 'shopping')
  }, "Shopping", __jsx("span", null, "1"))), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => isoFilter(e, 'travel')
  }, "Travel", __jsx("span", null, "4"))), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => isoFilter(e, 'hobbies')
  }, "Hobbies", __jsx("span", null, "2"))), __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: e => isoFilter(e, 'fashion')
  }, "Fashion", __jsx("span", null, "2"))))), posts.length == 0 ? __jsx("div", {
    className: "row"
  }, __jsx("p", {
    className: "blogs-info"
  }, "No posts were found matching your selection.")) : __jsx("div", {
    className: "row",
    ref: ref
  }, posts.map((post, index) => __jsx("div", {
    className: `col-sm-6 col-md-4 grid-item${getPostCategory(post)}`,
    key: index
  }, __jsx(_components_features_posts_post_three__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    post: post,
    adClass: "text-center"
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
  ssr: false
})(BlogMaskMasonry));

/***/ }),

/***/ 7530:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ 806:
/***/ (function(module) {

"use strict";
module.exports = require("apollo-boost");;

/***/ }),

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 6558:
/***/ (function(module) {

"use strict";
module.exports = require("imagesloaded");;

/***/ }),

/***/ 7613:
/***/ (function(module) {

"use strict";
module.exports = require("isotope-layout");;

/***/ }),

/***/ 5766:
/***/ (function(module) {

"use strict";
module.exports = require("next-apollo");;

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

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,9163], function() { return __webpack_exec__(653); });
module.exports = __webpack_exports__;

})();