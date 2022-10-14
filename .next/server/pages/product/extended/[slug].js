(function() {
var exports = {};
exports.id = 1578;
exports.ids = [1578];
exports.modules = {

/***/ 1341:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./components/partials/product/breadcrumb.jsx
var breadcrumb = __webpack_require__(2076);
// EXTERNAL MODULE: ./components/partials/product/gallery/gallery-default.jsx
var gallery_default = __webpack_require__(478);
// EXTERNAL MODULE: ./components/partials/product/details/detail-one.jsx
var detail_one = __webpack_require__(1547);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(7659);
// EXTERNAL MODULE: ./components/features/alink.jsx
var alink = __webpack_require__(7852);
;// CONCATENATED MODULE: ./components/partials/product/info-tabs/info-two.jsx
var __jsx = (external_react_default()).createElement;




function InfoTwo(props) {
  const {
    product
  } = props;

  const setRating = e => {
    e.preventDefault();

    if (e.currentTarget.parentNode.querySelector('.active')) {
      e.currentTarget.parentNode.querySelector('.active').classList.remove('active');
    }

    e.currentTarget.classList.add('active');
  };

  if (!product) {
    return __jsx("div", null);
  }

  return __jsx(external_react_tabs_.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active"
  }, __jsx("div", {
    className: "product-details-tab product-details-extended"
  }, __jsx(external_react_tabs_.TabList, {
    className: "nav nav-pills justify-content-center"
  }, __jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, " Description")), __jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, " Additional information")), __jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Shipping & Returns")), __jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Reviews (", product.review, ")"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(external_react_tabs_.TabPanel, {
    className: "tab-pane"
  }, __jsx("div", {
    className: "product-desc-content"
  }, __jsx("div", {
    className: "product-desc-row bg-image",
    style: {
      backgroundImage: `url(images/products/single/extended/bg-1.jpg)`
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row justify-content-end"
  }, __jsx("div", {
    className: "col-sm-6 col-lg-4"
  }, __jsx("h2", null, "Product Information"), __jsx("ul", null, __jsx("li", null, "Faux suede fabric upper"), __jsx("li", null, "Tie strap buckle detail"), __jsx("li", null, "Block heel"), __jsx("li", null, "Open toe"), __jsx("li", null, "Heel Height: 7cm / 2.5 inches")))))), __jsx("div", {
    className: "product-desc-row bg-image text-white",
    style: {
      backgroundImage: `url(images/products/single/extended/bg-2.jpg)`
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6 mb-2 mb-md-0"
  }, __jsx("h2", null, "Design"), __jsx("p", null, "The perfect choice for the summer months. These wedges are perfect for holidays and home, with the thick cross-over strap design and heel strap with an adjustable buckle fastening. Featuring chunky soles with an espadrille and cork-style wedge. ")), __jsx("div", {
    className: "col-md-6"
  }, __jsx("h2", null, "Fabric & care"), __jsx("p", null, "As part of our Forever Comfort collection, these wedges have ultimate cushioning with soft padding and flexi soles. Perfect for strolls into the old town on holiday or a casual wander into the village."))), __jsx("div", {
    className: "mb-5"
  }), __jsx("img", {
    src: "images/products/single/extended/sign.png",
    alt: "",
    className: "ml-auto mr-auto"
  }))), __jsx("div", {
    className: "product-desc-row bg-image",
    style: {
      backgroundImage: `url(images/products/single/extended/bg-3.jpg)`
    }
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-5"
  }, __jsx("blockquote", null, __jsx("p", null, "\u201C Everything is important - ", __jsx("br", null), "that success is in the details. \u201D"), __jsx("cite", null, "\u2013 Steve Jobs")), __jsx("p", null, "Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. "))))))), __jsx(external_react_tabs_.TabPanel, {
    className: "tab-pane"
  }, __jsx("div", {
    className: "product-desc-content pt-2"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h3", null, "Information"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "), __jsx("h3", {
    className: "pt-2"
  }, "Fabric & care"), __jsx("ul", null, __jsx("li", null, "Faux suede fabric"), __jsx("li", null, "Gold tone metal hoop handles."), __jsx("li", null, "RI branding"), __jsx("li", null, "Snake print trim interior "), __jsx("li", null, "Adjustable cross body strap"), __jsx("li", null, " Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm")), __jsx("h3", null, "Size"), __jsx("p", null, "one size")))), __jsx(external_react_tabs_.TabPanel, {
    className: "tab-pane"
  }, __jsx("div", {
    className: "product-desc-content pt-2"
  }, __jsx("div", {
    className: "container"
  }, __jsx("h3", null, "Delivery & returns"), __jsx("p", null, "We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ", __jsx(alink/* default */.Z, {
    href: "#"
  }, "Delivery information"), __jsx("br", null), "We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ", __jsx(alink/* default */.Z, {
    href: "#"
  }, "Returns information"))))), __jsx(external_react_tabs_.TabPanel, {
    className: "tab-pane"
  }, __jsx("div", {
    className: "container pt-2"
  }, __jsx("div", {
    className: "reviews"
  }, __jsx("h3", null, "Reviews (2)"), __jsx("div", {
    className: "review"
  }, __jsx("div", {
    className: "row no-gutters"
  }, __jsx("div", {
    className: "col-auto"
  }, __jsx("h4", null, __jsx(alink/* default */.Z, {
    href: "#"
  }, "Samanta J.")), __jsx("div", {
    className: "ratings-container"
  }, __jsx("div", {
    className: "ratings"
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), __jsx("span", {
    className: "tooltip-text"
  }, product.ratings.toFixed(2)))), __jsx("span", {
    className: "review-date mb-1"
  }, "6 days ago")), __jsx("div", {
    className: "col"
  }, __jsx("h4", null, "Good, perfect size"), __jsx("div", {
    className: "review-content"
  }, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!")), __jsx("div", {
    className: "review-action"
  }, __jsx(alink/* default */.Z, {
    href: "#"
  }, __jsx("i", {
    className: "icon-thumbs-up"
  }), "Helpful (2)"), __jsx(alink/* default */.Z, {
    href: "#"
  }, __jsx("i", {
    className: "icon-thumbs-down"
  }), "Unhelpful (0)"))))), __jsx("div", {
    className: "review"
  }, __jsx("div", {
    className: "row no-gutters"
  }, __jsx("div", {
    className: "col-auto"
  }, __jsx("h4", null, __jsx(alink/* default */.Z, {
    href: "#"
  }, "John Doe")), __jsx("div", {
    className: "ratings-container"
  }, __jsx("div", {
    className: "ratings"
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), __jsx("span", {
    className: "tooltip-text"
  }, product.ratings.toFixed(2)))), __jsx("span", {
    className: "review-date mb-1"
  }, "5 days ago")), __jsx("div", {
    className: "col"
  }, __jsx("h4", null, "Very good"), __jsx("div", {
    className: "review-content"
  }, __jsx("p", null, "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!")), __jsx("div", {
    className: "review-action"
  }, __jsx(alink/* default */.Z, {
    href: "#"
  }, __jsx("i", {
    className: "icon-thumbs-up"
  }), "Helpful (0)"), __jsx(alink/* default */.Z, {
    href: "#"
  }, __jsx("i", {
    className: "icon-thumbs-down"
  }), "Unhelpful (0)")))))), __jsx("div", {
    className: "reply"
  }, __jsx("div", {
    className: "title-wrapper text-left"
  }, __jsx("h3", {
    className: "title title-simple text-left text-normal"
  }, "Add a Review"), __jsx("p", null, "Your email address will not be published. Required fields are marked *")), __jsx("div", {
    className: "rating-form"
  }, __jsx("label", {
    htmlFor: "rating",
    className: "text-dark"
  }, "Your rating * "), __jsx("span", {
    className: "rating-stars selected"
  }, [1, 2, 3, 4, 5].map((num, index) => __jsx("a", {
    className: `star-${num}`,
    href: "#",
    onClick: setRating,
    key: 'star-' + index
  }, num))), __jsx("select", {
    name: "rating",
    id: "rating",
    required: "",
    style: {
      display: 'none'
    }
  }, __jsx("option", {
    value: ""
  }, "Rate\u2026"), __jsx("option", {
    value: "5"
  }, "Perfect"), __jsx("option", {
    value: "4"
  }, "Good"), __jsx("option", {
    value: "3"
  }, "Average"), __jsx("option", {
    value: "2"
  }, "Not that bad"), __jsx("option", {
    value: "1"
  }, "Very poor"))), __jsx("form", {
    action: "#"
  }, __jsx("textarea", {
    id: "reply-message",
    cols: "30",
    rows: "6",
    className: "form-control mb-2",
    placeholder: "Comment *",
    required: true
  }), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "reply-name",
    name: "reply-name",
    placeholder: "Name *",
    required: true
  })), __jsx("div", {
    className: "col-md-6"
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    id: "reply-email",
    name: "reply-email",
    placeholder: "Email *",
    required: true
  }))), __jsx("div", {
    className: "form-checkbox mb-2"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-checkbox",
    id: "signin-remember",
    name: "signin-remember"
  }), __jsx("label", {
    className: "form-control-label ml-3",
    htmlFor: "signin-remember"
  }, "Save my name, email, and website in this browser for the next time I comment.")), __jsx("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Submit"))))))));
}

/* harmony default export */ var info_two = (/*#__PURE__*/external_react_default().memo(InfoTwo));
// EXTERNAL MODULE: ./components/partials/product/related/related-one.jsx
var related_one = __webpack_require__(378);
;// CONCATENATED MODULE: ./pages/product/extended/[slug].jsx
var _slug_jsx = (external_react_default()).createElement;











function ProductDefault() {
  const slug = (0,router_.useRouter)().query.slug;
  if (!slug) return _slug_jsx("div", null); //  const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );

  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_PRODUCT */.N4, {
    variables: {
      slug,
      onlyData: false
    }
  });
  const product = data && data.product;
  const related = data && data.product;
  const prev = data && data.product.prev;
  const next = data && data.product.next;

  if (error) {
    return _slug_jsx("div", null);
  }

  return _slug_jsx("div", {
    className: "main"
  }, _slug_jsx(breadcrumb/* default */.Z, {
    prev: prev,
    next: next,
    current: "Extended"
  }), _slug_jsx("div", {
    className: "page-content"
  }, _slug_jsx("div", {
    className: "container skeleton-body horizontal"
  }, _slug_jsx("div", {
    className: "product-details-top"
  }, _slug_jsx("div", {
    className: `row skel-pro-single ${loading ? '' : 'loaded'}`
  }, _slug_jsx("div", {
    className: "col-md-6"
  }, _slug_jsx("div", {
    className: "skel-product-gallery"
  }), !loading ? _slug_jsx(gallery_default/* default */.Z, {
    product: product,
    adClass: ""
  }) : ""), _slug_jsx("div", {
    className: "col-md-6"
  }, _slug_jsx("div", {
    className: "entry-summary row"
  }, _slug_jsx("div", {
    className: "col-md-12"
  }, _slug_jsx("div", {
    className: "entry-summary1 mt-2 mt-md-0"
  })), _slug_jsx("div", {
    className: "col-md-12"
  }, _slug_jsx("div", {
    className: "entry-summary2"
  }))), !loading ? _slug_jsx(detail_one/* default */.Z, {
    product: product
  }) : "")))), loading ? _slug_jsx("div", {
    className: "skel-pro-tabs"
  }) : _slug_jsx(info_two, {
    product: product
  }), _slug_jsx("div", {
    className: "container"
  }, _slug_jsx(related_one/* default */.Z, {
    products: related,
    loading: loading
  }))));
}

/* harmony default export */ var _slug_ = ((0,apollo/* default */.Z)({
  ssr: true
})(ProductDefault));

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

/***/ 6302:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

/***/ }),

/***/ 7773:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-magnifiers");;

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

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ }),

/***/ 7659:
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

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

/***/ }),

/***/ 5060:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,6442,8289,2806,5708,9792,812,6359,2076,1547,378,478], function() { return __webpack_exec__(1341); });
module.exports = __webpack_exports__;

})();