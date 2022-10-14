exports.id = 439;
exports.ids = [439];
exports.modules = {

/***/ 439:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7659);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7852);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function InfoOne(props) {
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

  return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tabs, {
    selectedTabClassName: "show",
    selectedTabPanelClassName: "active show"
  }, __jsx("div", {
    className: "product-details-tab"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabList, {
    className: "nav nav-pills justify-content-center"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, " Description")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, " Additional information")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Shipping & Returns")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Reviews (", product.review, ")"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane"
  }, __jsx("div", {
    className: "product-desc-content"
  }, __jsx("h3", null, "Product Information"), __jsx("p", {
    className: "pb-1"
  }, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. "), __jsx("ul", null, __jsx("li", null, "Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. "), __jsx("li", null, "Vivamus finibus vel mauris ut vehicula."), __jsx("li", null, "Nullam a magna porttitor, dictum risus nec, faucibus sapien.")), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. "))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane"
  }, __jsx("div", {
    className: "product-desc-content"
  }, __jsx("h3", null, "Information"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "), __jsx("h3", {
    className: "pt-2"
  }, "Fabric & care"), __jsx("ul", null, __jsx("li", null, "Faux suede fabric"), __jsx("li", null, "Gold tone metal hoop handles."), __jsx("li", null, "RI branding"), __jsx("li", null, "Snake print trim interior "), __jsx("li", null, "Adjustable cross body strap"), __jsx("li", null, " Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm")), __jsx("h3", null, "Size"), __jsx("p", null, "one size"))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane"
  }, __jsx("div", {
    className: "product-desc-content"
  }, __jsx("h3", null, "Delivery & returns"), __jsx("p", null, "We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, "Delivery information"), __jsx("br", null), "We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ", __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, "Returns information")))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: "tab-pane"
  }, __jsx("div", {
    className: "reviews"
  }, __jsx("h3", null, "Reviews (2)"), __jsx("div", {
    className: "review"
  }, __jsx("div", {
    className: "row no-gutters"
  }, __jsx("div", {
    className: "col-auto"
  }, __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
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
  }, product[0].ratings.toFixed(2)))), __jsx("span", {
    className: "review-date mb-1"
  }, "6 days ago")), __jsx("div", {
    className: "col"
  }, __jsx("h4", null, "Good, perfect size"), __jsx("div", {
    className: "review-content"
  }, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!")), __jsx("div", {
    className: "review-action"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("i", {
    className: "icon-thumbs-up"
  }), "Helpful (2)"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("i", {
    className: "icon-thumbs-down"
  }), "Unhelpful (0)"))))), __jsx("div", {
    className: "review"
  }, __jsx("div", {
    className: "row no-gutters"
  }, __jsx("div", {
    className: "col-auto"
  }, __jsx("h4", null, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
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
  }, product[0].ratings.toFixed(2)))), __jsx("span", {
    className: "review-date mb-1"
  }, "5 days ago")), __jsx("div", {
    className: "col"
  }, __jsx("h4", null, "Very good"), __jsx("div", {
    className: "review-content"
  }, __jsx("p", null, "Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!")), __jsx("div", {
    className: "review-action"
  }, __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    href: "#"
  }, __jsx("i", {
    className: "icon-thumbs-up"
  }), "Helpful (0)"), __jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
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
    className: "form-checkbox d-flex align-items-start mb-2"
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
  }, "Submit")))))));
}

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(InfoOne));

/***/ })

};
;