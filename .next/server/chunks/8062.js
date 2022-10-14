exports.id = 8062;
exports.ids = [8062];
exports.modules = {

/***/ 8062:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_features_accordion_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2674);
/* harmony import */ var _components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7185);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7852);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function InfoThree(props) {
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

  return __jsx(_components_features_accordion_accordion__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    adClass: "accordion-plus product-details-accordion pb-2 mb-0"
  }, __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    title: "Description",
    adClass: "card-box card-sm"
  }, __jsx("div", {
    className: "product-desc-content"
  }, __jsx("p", {
    className: "pb-1"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci."), __jsx("ul", null, __jsx("li", null, "Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. "), __jsx("li", null, "Vivamus finibus vel mauris ut vehicula."), __jsx("li", null, "Nullam a magna porttitor, dictum risus nec, faucibus sapien.")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede."))), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    title: "Additional information",
    adClass: "card-box card-sm"
  }, __jsx("div", {
    className: "product-desc-content"
  }, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci."), __jsx("h3", {
    className: "pt-2"
  }, "Fabric & care"), __jsx("ul", null, __jsx("li", null, "100% Polyester"), __jsx("li", null, "Do not iron"), __jsx("li", null, "Do not wash"), __jsx("li", null, "Do not bleach"), __jsx("li", null, "Do not tumble dry"), __jsx("li", null, "Professional dry clean only")), __jsx("h3", null, "Size"), __jsx("p", null, "S, M, L, XL"))), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    title: "Shipping & Returns",
    expanded: true,
    adClass: "card-box card-sm"
  }, __jsx("div", {
    className: "product-desc-content"
  }, __jsx("p", null, "We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Delivery information"), __jsx("br", null), "We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, "Returns information")))), __jsx(_components_features_accordion_card__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    title: `Reviews (${product.review})`,
    adClass: "card-box card-sm"
  }, __jsx("div", {
    className: "reviews"
  }, __jsx("div", {
    className: "review"
  }, __jsx("div", {
    className: "row no-gutters"
  }, __jsx("div", {
    className: "col-auto"
  }, __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
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
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("i", {
    className: "icon-thumbs-up"
  }), "Helpful (2)"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("i", {
    className: "icon-thumbs-down"
  }), "Unhelpful (0)"))))), __jsx("div", {
    className: "review border-0"
  }, __jsx("div", {
    className: "row no-gutters"
  }, __jsx("div", {
    className: "col-auto"
  }, __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
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
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    href: "#"
  }, __jsx("i", {
    className: "icon-thumbs-up"
  }), "Helpful (0)"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
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
  }, "Submit")))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(InfoThree));

/***/ })

};
;