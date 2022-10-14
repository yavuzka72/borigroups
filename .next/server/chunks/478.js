exports.id = 478;
exports.ids = [478];
exports.modules = {

/***/ 478:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7773);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6302);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function GalleryDefault(props) {
  const {
    product,
    adClass = "product-gallery-vertical"
  } = props;
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: photoIndex,
    1: setPhotoIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  console.log(product);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (product[0]) {
      setIsOpen(false);
      setPhotoIndex(0);
    }
  }, [product]);

  function moveNextPhoto() {
    setPhotoIndex((photoIndex + 1) % product[0].pictures.length);
  }

  function movePrevPhoto() {
    setPhotoIndex((photoIndex + product[0].pictures.length - 1) % product[0].pictures.length);
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

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    className: `product-gallery ${adClass}`
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
  }, "Out of Stock") : "", __jsx(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__.Magnifier, {
    imageSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product[0].pictures[0].url,
    imageAlt: "product",
    largeImageSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product[0].pictures[0].url // Optional
    ,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    id: "product-zoom",
    className: "zoom-image position-relative overflow-hidden",
    width: product[0].pictures[0].width,
    height: product[0].pictures[0].height,
    style: {
      paddingTop: `${product[0].pictures[0].height / product[0].pictures[0].width * 100}%`
    }
  }), __jsx("button", {
    id: "btn-product-gallery",
    className: "btn-product-gallery",
    onClick: openLightBox
  }, __jsx("i", {
    className: "icon-arrows"
  }))), __jsx("div", {
    id: "product-zoom-gallery",
    className: "product-image-gallery"
  }, product[0].pictures.map((item, index) => __jsx("button", {
    className: `product-gallery-item ${0 === index ? 'active' : ''}`,
    key: product[0].id + '-' + index,
    onClick: e => changeBgImage(e, `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + item.url}`, index)
  }, __jsx("div", {
    className: "img-wrapper h-100"
  }, __jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product[0].pictures[index].url,
    alt: "product back"
  }))))))), isOpen ? __jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default()), {
    mainSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product[0].pictures[photoIndex].url,
    nextSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product[0].pictures[(photoIndex + 1) % product[0].pictures.length].url,
    prevSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product[0].pictures[(photoIndex + product[0].pictures.length - 1) % product[0].pictures.length].url,
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

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(GalleryDefault));

/***/ })

};
;