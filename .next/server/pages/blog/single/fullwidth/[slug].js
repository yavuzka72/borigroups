(function() {
var exports = {};
exports.id = 90;
exports.ids = [90];
exports.modules = {

/***/ 2105:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7530);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9290);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9058);
/* harmony import */ var react_sticky_box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_sticky_box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7852);
/* harmony import */ var _components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4138);
/* harmony import */ var _components_partials_blog_related_related_posts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3542);
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5438);
/* harmony import */ var _server_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4733);
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2870);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function BlogFullwidth(props) {
  const slug = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query.slug;
  const {
    data,
    loading,
    error
  } = (0,_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_server_queries__WEBPACK_IMPORTED_MODULE_10__/* .GET_POST */ .QI, {
    variables: {
      slug
    }
  });
  const post = data && data.post.single;
  const related = data && data.post.related;
  const prev = data && data.post.prev;
  const next = data && data.post.next;
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC"
  };

  const openVideoModal = e => {
    e.preventDefault();
    props.showVideo();
  };

  if (error) {
    return __jsx("div", null);
  }

  return __jsx("div", {
    className: "main"
  }, __jsx("nav", {
    className: "breadcrumb-nav"
  }, __jsx("div", {
    className: "container-fluid"
  }, __jsx("ol", {
    className: "breadcrumb"
  }, __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "/"
  }, "Home")), __jsx("li", {
    className: "breadcrumb-item"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "/blog/classic"
  }, "Blog")), __jsx("li", {
    className: "breadcrumb-item active"
  }, "Fullwidth")))), __jsx("div", {
    className: "page-content"
  }, !loading ? post.image.length <= 1 ? __jsx("figure", {
    className: `entry-media entry-media-fullwidth ${post.type == 'video' ? 'entry-video' : ''}`,
    style: {
      paddingTop: `500px`
    }
  }, post.type !== 'video' ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "Post",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + post.image[0].url,
    threshold: 500,
    effect: "blur"
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "Post",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + post.image[0].url,
    threshold: 500,
    effect: "blur"
  }), __jsx("a", {
    href: "https://www.youtube.com/watch?v=vBPgmASQ1A0",
    onClick: openVideoModal,
    className: "btn-video btn-iframe"
  }, __jsx("i", {
    className: "icon-play"
  })))) : __jsx("figure", {
    className: "entry-media entry-gallery",
    style: {
      paddingTop: `500px`
    }
  }, __jsx(_components_features_owl_carousel__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
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
  }, post.image.map((item, index) => __jsx("div", {
    key: index
  }, __jsx("div", {
    className: "lazy-overlay"
  }), __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImage, {
    alt: "Post",
    src: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + item.url}`,
    threshold: 500,
    effect: "blur"
  }))))) : "", __jsx("div", {
    className: `container skeleton-body ${!loading ? 'loaded' : ''}`
  }, loading ? __jsx("div", {
    className: "skel-single-post"
  }) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("article", {
    className: "entry single-entry entry-fullwidth"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-11"
  }, __jsx("div", {
    className: "entry-body"
  }, __jsx("div", {
    className: "entry-meta"
  }, __jsx("span", {
    className: "entry-author"
  }, "by ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, post.author)), __jsx("span", {
    className: "meta-separator"
  }, "|"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, new Date(post.date).toLocaleDateString('en-US', options)), __jsx("span", {
    className: "meta-separator"
  }, "|"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, post.comments, " Comments")), __jsx("h2", {
    className: "entry-title"
  }, post.title), __jsx("div", {
    className: "entry-cats"
  }, "in\xA0", post.blog_categories.map((cat, index) => __jsx("span", {
    key: index
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: {
      pathname: '/blog/classic',
      query: {
        category: cat.slug
      }
    }
  }, cat.name), index < post.blog_categories.length - 1 ? ', ' : ''))), __jsx("div", {
    className: "entry-content editor-content"
  }, __jsx("p", null, post.content), __jsx("div", {
    className: "pb-1"
  }), __jsx("img", {
    src: "images/blog/single/2.jpg",
    alt: "image",
    className: "float-sm-left"
  }), __jsx("h3", null, "Quisque volutpat mattiseros."), __jsx("ul", null, __jsx("li", null, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti."), __jsx("li", null, "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est."), __jsx("li", null, "Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.")), __jsx("div", {
    className: "pb-1 clearfix"
  }), __jsx("p", null, "Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula \xA0", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, "sollicitudin laoreet"), " viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis."), __jsx("blockquote", null, __jsx("p", null, "\u201C Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. \u201D")), __jsx("p", null, "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus."), __jsx("div", {
    className: "pb-1"
  }), __jsx("h3", null, "Morbi interdum mollis sapien."), __jsx("img", {
    src: "images/blog/single/3.jpg",
    alt: "image"
  }), __jsx("p", null, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent\xA0", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, "elementum hendrerit"), " tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."), __jsx("p", null, "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl. Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu.")), __jsx("div", {
    className: "entry-footer row no-gutters"
  }, __jsx("div", {
    className: "col"
  }, __jsx("div", {
    className: "entry-tags"
  }, __jsx("span", null, "Tags:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, "photography"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, "style")))))), __jsx("div", {
    className: "col-lg-1 order-lg-first mb-2 mb-lg-0"
  }, __jsx((react_sticky_box__WEBPACK_IMPORTED_MODULE_5___default()), {
    className: "sticky-content",
    offsetTop: 70
  }, __jsx("div", {
    className: "social-icons social-icons-colored social-icons-vertical"
  }, __jsx("span", {
    className: "social-label"
  }, "SHARE:"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#",
    className: "social-icon social-facebook",
    title: "Facebook"
  }, __jsx("i", {
    className: "icon-facebook-f"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#",
    className: "social-icon social-twitter",
    title: "Twitter"
  }, __jsx("i", {
    className: "icon-twitter"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#",
    className: "social-icon social-pinterest",
    title: "Pinterest"
  }, __jsx("i", {
    className: "icon-pinterest"
  })), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#",
    className: "social-icon social-linkedin",
    title: "Linkedin"
  }, __jsx("i", {
    className: "icon-linkedin"
  })))))), __jsx("div", {
    className: "entry-author-details"
  }, __jsx("figure", {
    className: "author-media"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, __jsx("img", {
    src: "images/blog/single/author.jpg",
    alt: "User name"
  }))), __jsx("div", {
    className: "author-body"
  }, __jsx("div", {
    className: "author-header row no-gutters flex-column flex-md-row"
  }, __jsx("div", {
    className: "col"
  }, __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, "John Doe"))), __jsx("div", {
    className: "col-auto mt-1 mt-md-0"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#",
    className: "author-link"
  }, "View all posts by John Doe", __jsx("i", {
    className: "icon-long-arrow-right"
  })))), __jsx("div", {
    className: "author-content"
  }, __jsx("p", null, "Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat."))))), __jsx("nav", {
    className: "pager-nav"
  }, prev ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    className: "pager-link pager-link-prev",
    href: `/blog/single/fullwidth/${prev.slug}`
  }, "Previous Post", __jsx("span", {
    className: "pager-link-title"
  }, prev.title)) : __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#",
    className: "pager-link"
  }, __jsx("span", {
    className: "page-link-title ml-4"
  }, "This is the first blog.")), next ? __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    className: "pager-link pager-link-next",
    href: `/blog/single/fullwidth/${next.slug}`
  }, "Next Post", __jsx("span", {
    className: "pager-link-title"
  }, next.title)) : __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#",
    className: "pager-link"
  }, __jsx("span", {
    className: "page-link-title mr-4"
  }, "This is the last blog."))), __jsx(_components_partials_blog_related_related_posts__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    related: related,
    loading: loading
  }), __jsx("div", {
    className: "comments"
  }, __jsx("h3", {
    className: "title"
  }, "3 Comments"), __jsx("ul", null, __jsx("li", null, __jsx("div", {
    className: "comment"
  }, __jsx("figure", {
    className: "comment-media"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, __jsx("img", {
    src: "images/blog/comments/1.jpg",
    alt: "User name"
  }))), __jsx("div", {
    className: "comment-body"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#",
    className: "comment-reply"
  }, "Reply"), __jsx("div", {
    className: "comment-user"
  }, __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, "Jimmy Pearson")), __jsx("span", {
    className: "comment-date"
  }, "November 9, 2018 at 2:19 pm")), __jsx("div", {
    className: "comment-content"
  }, __jsx("p", null, "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.")))), __jsx("ul", null, __jsx("li", null, __jsx("div", {
    className: "comment"
  }, __jsx("figure", {
    className: "comment-media"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, __jsx("img", {
    src: "images/blog/comments/2.jpg",
    alt: "User name"
  }))), __jsx("div", {
    className: "comment-body"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#",
    className: "comment-reply"
  }, "Reply"), __jsx("div", {
    className: "comment-user"
  }, __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, "Lena Knight")), __jsx("span", {
    className: "comment-date"
  }, "November 9, 2018 at 2:19 pm")), __jsx("div", {
    className: "comment-content"
  }, __jsx("p", null, "Morbi interdum mollis sapien. Sed ac risus."))))))), __jsx("li", null, __jsx("div", {
    className: "comment"
  }, __jsx("figure", {
    className: "comment-media"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, __jsx("img", {
    src: "images/blog/comments/3.jpg",
    alt: "User name"
  }))), __jsx("div", {
    className: "comment-body"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#",
    className: "comment-reply"
  }, "Reply"), __jsx("div", {
    className: "comment-user"
  }, __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    href: "#"
  }, "Johnathan Castillo")), __jsx("span", {
    className: "comment-date"
  }, "November 9, 2018 at 2:19 pm")), __jsx("div", {
    className: "comment-content"
  }, __jsx("p", null, "Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."))))))), __jsx("div", {
    className: "reply"
  }, __jsx("div", {
    className: "heading"
  }, __jsx("h3", {
    className: "title"
  }, "Leave A Reply"), __jsx("p", {
    className: "title-desc"
  }, "Your email address will not be published. Required fields are marked *")), __jsx("form", {
    action: "#"
  }, __jsx("label", {
    htmlFor: "reply-message",
    className: "sr-only"
  }, "Comment"), __jsx("textarea", {
    name: "reply-message",
    id: "reply-message",
    cols: "30",
    rows: "4",
    className: "form-control",
    required: true,
    placeholder: "Comment *"
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("label", {
    htmlFor: "reply-name",
    className: "sr-only"
  }, "Name"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "reply-name",
    name: "reply-name",
    required: true,
    placeholder: "Name *"
  })), __jsx("div", {
    className: "col-md-6"
  }, __jsx("label", {
    htmlFor: "reply-email",
    className: "sr-only"
  }, "Email"), __jsx("input", {
    type: "email",
    className: "form-control",
    id: "reply-email",
    name: "reply-email",
    required: true,
    placeholder: "Email *"
  }))), __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2"
  }, __jsx("span", null, "POST COMMENT"), __jsx("i", {
    className: "icon-long-arrow-right"
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)({
  ssr: false
})((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(null, _objectSpread({}, _store_demo__WEBPACK_IMPORTED_MODULE_11__/* .actions */ .Nw))(BlogFullwidth)));

/***/ }),

/***/ 7530:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ 7381:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

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

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ 9058:
/***/ (function(module) {

"use strict";
module.exports = require("react-sticky-box");;

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,8289,4590,3542], function() { return __webpack_exec__(2105); });
module.exports = __webpack_exports__;

})();