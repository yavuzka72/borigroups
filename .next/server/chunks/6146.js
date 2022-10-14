"use strict";
exports.id = 6146;
exports.ids = [6146];
exports.modules = {

/***/ 6146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2224);
/* harmony import */ var react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4990);
/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_3__);




function GalleryDefault(props) {
    const { product , adClass ="product-gallery-vertical"  } = props;
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: photoIndex , 1: setPhotoIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    console.log(product);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (product[0]) {
            setIsOpen(false);
            setPhotoIndex(0);
        }
    }, [
        product
    ]);
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
        let imgs = document.querySelectorAll(".product-main-image img");
        for(let i = 0; i < imgs.length; i++){
            imgs[i].src = image;
        }
        document.querySelector(".product-image-gallery .active").classList.remove("active");
        document.querySelector(".product-main-image").setAttribute("index", index);
        e.currentTarget.classList.add("active");
    }
    if (!product) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `product-gallery ${adClass}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row m-0",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                            className: "product-main-image",
                            index: "0",
                            children: [
                                product.new ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "product-label label-new",
                                    children: "New"
                                }) : "",
                                product.sale_price ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "product-label label-sale",
                                    children: "Sale"
                                }) : "",
                                product.top ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "product-label label-top",
                                    children: "Top"
                                }) : "",
                                !product.stock || product.stock == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "product-label label-out",
                                    children: "Out of Stock"
                                }) : "",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_image_magnifiers__WEBPACK_IMPORTED_MODULE_1__.Magnifier, {
                                    imageSrc: "http://176.53.65.213:8000/api/" + product[0].pictures[0].url,
                                    imageAlt: "product",
                                    largeImageSrc: "http://176.53.65.213:8000/api/" + product[0].pictures[0].url,
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
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "btn-product-gallery",
                                    className: "btn-product-gallery",
                                    onClick: openLightBox,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-arrows"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "product-zoom-gallery",
                            className: "product-image-gallery",
                            children: product[0].pictures.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: `product-gallery-item ${0 === index ? "active" : ""}`,
                                    onClick: (e)=>changeBgImage(e, `${"http://176.53.65.213:8000/api/" + item.url}`, index),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img-wrapper h-100",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "http://176.53.65.213:8000/api/" + product[0].pictures[index].url,
                                            alt: "product back"
                                        })
                                    })
                                }, product[0].id + "-" + index))
                        })
                    ]
                })
            }),
            isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_image_lightbox__WEBPACK_IMPORTED_MODULE_3___default()), {
                mainSrc: "http://176.53.65.213:8000/api/" + product[0].pictures[photoIndex].url,
                nextSrc: "http://176.53.65.213:8000/api/" + product[0].pictures[(photoIndex + 1) % product[0].pictures.length].url,
                prevSrc: "http://176.53.65.213:8000/api/" + product[0].pictures[(photoIndex + product[0].pictures.length - 1) % product[0].pictures.length].url,
                onCloseRequest: closeLightBox,
                onMovePrevRequest: moveNextPhoto,
                onMoveNextRequest: movePrevPhoto,
                reactModalStyle: {
                    overlay: {
                        zIndex: 1041
                    }
                }
            }) : ""
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(GalleryDefault));


/***/ })

};
;