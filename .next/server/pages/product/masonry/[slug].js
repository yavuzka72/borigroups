(function() {
var exports = {};
exports.id = 6725;
exports.ids = [6725];
exports.modules = {

/***/ 3664:
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
// EXTERNAL MODULE: external "react-sticky-box"
var external_react_sticky_box_ = __webpack_require__(9058);
var external_react_sticky_box_default = /*#__PURE__*/__webpack_require__.n(external_react_sticky_box_);
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
// EXTERNAL MODULE: external "react-image-magnifiers"
var external_react_image_magnifiers_ = __webpack_require__(7773);
// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__(6302);
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_);
;// CONCATENATED MODULE: ./components/partials/product/gallery/gallery-masonry.jsx
var __jsx = (external_react_default()).createElement;




function GalleryMasonry(props) {
  const {
    product
  } = props;
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: photoIndex,
    1: setPhotoIndex
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    if (product) {
      setIsOpen(false);
      setPhotoIndex(0);
    }
  }, [product]);

  function moveNextPhoto() {
    setPhotoIndex((photoIndex + 1) % product.pictures.length);
  }

  function movePrevPhoto() {
    setPhotoIndex((photoIndex + product.pictures.length - 1) % product.pictures.length);
  }

  function openLightBox() {
    let index = parseInt(document.querySelector(".product-main-image").getAttribute("index"));

    if (!index) {
      index = 0;
    }

    setIsOpen(true);
    setPhotoIndex(index);
  }

  function closeLightBox() {
    setIsOpen(false);
  }

  function changeBgImage(e, image, index) {
    let imgs = document.querySelectorAll('.product-main-image img');

    for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = image;
    }

    document.querySelector('.product-image-gallery .active').classList.remove('active');
    document.querySelector('.product-main-image').setAttribute('index', index);
    e.currentTarget.classList.add('active');
  }

  if (!product) {
    return __jsx("div", null);
  }

  return __jsx((external_react_default()).Fragment, null, __jsx("div", {
    className: "product-gallery product-gallery-masonry"
  }, __jsx("div", {
    className: "row m-0"
  }, __jsx("figure", {
    className: "product-main-image",
    index: "0"
  }, product.new ? __jsx("span", {
    className: "product-label label-new"
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-sale"
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-top"
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-out"
  }, "Out of Stock") : "", __jsx(external_react_image_magnifiers_.Magnifier, {
    imageSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[0].url,
    imageAlt: "product",
    largeImageSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[0].url // Optional
    ,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "zoom-image overflow-hidden p-relative",
    width: product.pictures[0].width,
    height: '100%',
    style: {
      paddingTop: `${product.pictures[0].height / product.pictures[0].width * 100}%`
    }
  }), __jsx("button", {
    id: "btn-product-gallery",
    className: "btn-product-gallery",
    onClick: openLightBox
  }, __jsx("i", {
    className: "icon-arrows"
  }))), __jsx("div", {
    id: "product-zoom-gallery",
    className: "product-image-gallery mr-0 ml-0"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-5 d-flex mb-1"
  }, __jsx("button", {
    className: "active product-masonry-item p-0 w-100",
    onClick: e => changeBgImage(e, `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[0].url}`, 0)
  }, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[0].url,
    alt: "product back",
    className: "w-100"
  }))), product.sm_pictures.length > 1 ? __jsx("div", {
    className: "col-7 d-flex mb-1"
  }, __jsx("button", {
    className: "product-masonry-item p-0 w-100",
    onClick: e => changeBgImage(e, `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[1].url}`, 1)
  }, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[1].url,
    alt: "product back",
    className: "w-100"
  }))) : "", product.sm_pictures.length > 2 ? __jsx("div", {
    className: "col-7 d-flex mb-1"
  }, __jsx("button", {
    className: "product-masonry-item p-0 w-100",
    onClick: e => changeBgImage(e, `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[2].url}`, 2)
  }, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[2].url,
    alt: "product back",
    className: "w-100"
  }))) : "", product.sm_pictures.length > 3 ? __jsx("div", {
    className: "col-5 d-flex mb-1"
  }, __jsx("button", {
    className: "product-masonry-item p-0 w-100",
    onClick: e => changeBgImage(e, `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[3].url}`, 3)
  }, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[3].url,
    alt: "product back",
    className: "w-100"
  }))) : "")))), isOpen ? __jsx((external_react_image_lightbox_default()), {
    mainSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[photoIndex].url,
    nextSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[(photoIndex + 1) % product.pictures.length].url,
    prevSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[(photoIndex + product.pictures.length - 1) % product.pictures.length].url,
    onCloseRequest: closeLightBox,
    onMovePrevRequest: moveNextPhoto,
    onMoveNextRequest: movePrevPhoto,
    reactModalStyle: {
      overlay: {
        zIndex: 1041
      }
    }
  }) : '');
}

/* harmony default export */ var gallery_masonry = (/*#__PURE__*/external_react_default().memo(GalleryMasonry));
// EXTERNAL MODULE: ./components/partials/product/details/detail-one.jsx
var detail_one = __webpack_require__(1547);
// EXTERNAL MODULE: ./components/partials/product/info-tabs/info-three.jsx
var info_three = __webpack_require__(8062);
// EXTERNAL MODULE: ./components/partials/product/related/related-one.jsx
var related_one = __webpack_require__(378);
;// CONCATENATED MODULE: ./pages/product/masonry/[slug].jsx

var _slug_jsx = (external_react_default()).createElement;











function ProductSticky() {
  const slug = (0,router_.useRouter)().query.slug;
  if (!slug) return _slug_jsx("div", null);
  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_PRODUCT */.N4, {
    variables: {
      slug,
      onlyData: false
    }
  }); // const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );

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
    current: "Sticky Info"
  }), _slug_jsx("div", {
    className: "page-content"
  }, _slug_jsx("div", {
    className: "container skeleton-body"
  }, _slug_jsx("div", {
    className: "product-details-top"
  }, _slug_jsx("div", {
    className: `row skel-pro-single masonry_sticky ${loading ? '' : 'loaded'}`
  }, _slug_jsx("div", {
    className: "col-md-6"
  }, _slug_jsx("div", {
    className: "skel-product-gallery"
  }), !loading ? _slug_jsx(gallery_masonry, {
    product: product
  }) : ""), _slug_jsx("div", {
    className: "col-md-6"
  }, _slug_jsx((external_react_sticky_box_default()), {
    className: "sticky-content",
    offsetTop: 70
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
  }))), !loading ? _slug_jsx((external_react_default()).Fragment, null, _slug_jsx(detail_one/* default */.Z, {
    product: product
  }), _slug_jsx(info_three/* default */.Z, {
    product: product
  })) : "")))), _slug_jsx(related_one/* default */.Z, {
    products: related,
    loading: loading
  }))));
}

/* harmony default export */ var _slug_ = ((0,apollo/* default */.Z)({
  ssr: true
})(ProductSticky));

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

/***/ 9058:
/***/ (function(module) {

"use strict";
module.exports = require("react-sticky-box");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,6442,8289,2806,5708,9792,812,6359,2076,1547,378,5130,8062], function() { return __webpack_exec__(3664); });
module.exports = __webpack_exports__;

})();