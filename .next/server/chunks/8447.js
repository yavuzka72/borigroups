"use strict";
exports.id = 8447;
exports.ids = [8447];
exports.modules = {

/***/ 8447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3169);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9252);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4439);
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8238);
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5905);
/* harmony import */ var _store_compare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1058);
/* harmony import */ var _store_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(257);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6024);











function ProductSix(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { product , wishlist  } = props;
    const { 0: maxPrice , 1: setMaxPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: minPrice , 1: setMinPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(99999);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let min = minPrice;
        let max = maxPrice;
        product.variants.map((item)=>{
            if (min > item.price) min = item.price;
            if (max < item.price) max = item.price;
        }, []);
        if (product.variants.length == 0) {
            min = product.sale_price ? product.sale_price : product.price;
            max = product.price;
        }
        setMinPrice(min);
        setMaxPrice(max);
    }, []);
    function onCartClick(e) {
        e.preventDefault();
        props.addToCart(product);
    }
    function onWishlistClick(e) {
        e.preventDefault();
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .isInWishlist */ .QY)(props.wishlist, product)) {
            props.addToWishlist(product);
        } else {
            router.push("/pages/wishlist");
        }
    }
    function onCompareClick(e) {
        e.preventDefault();
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .isInCompare */ .V4)(props.comparelist, product)) {
            props.addToCompare(product);
        }
    }
    function onQuickView(e) {
        e.preventDefault();
        props.showQuickView(product.slug);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "product product-5 text-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                className: "product-media",
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        href: `/product/default/${product.slug}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__.LazyLoadImage, {
                                alt: "product",
                                src: "http://176.53.65.213:8000/api/" + product.pictures[0].url,
                                threshold: 500,
                                effect: "black and white",
                                wrapperClassName: "product-image"
                            }),
                            product.pictures.length >= 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__.LazyLoadImage, {
                                alt: "product",
                                src: "http://176.53.65.213:8000/api/" + product.pictures[1].url,
                                threshold: 500,
                                effect: "black and white",
                                wrapperClassName: "product-image-hover"
                            }) : ""
                        ]
                    }),
                    product.stock > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-action-vertical",
                        children: [
                            (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .isInWishlist */ .QY)(wishlist, product) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: "/shop/wishlist",
                                className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "go to wishlist"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "btn-product-icon btn-wishlist btn-expandable",
                                onClick: onWishlistClick,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "add to wishlist"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "btn-product-icon btn-quickview",
                                title: "Quick View",
                                onClick: onQuickView,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "quick view"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "btn-product-icon btn-compare",
                                onClick: onCompareClick,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "compare"
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-action-vertical",
                        children: [
                            (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .isInWishlist */ .QY)(wishlist, product) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: "/shop/wishlist",
                                className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "go to wishlist"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "btn-product-icon btn-wishlist btn-expandable",
                                onClick: onWishlistClick,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "add to wishlist"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "btn-product-icon btn-quickview",
                                title: "Quick View",
                                onClick: onQuickView,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "quick view"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                className: "btn-product-icon btn-compare",
                                onClick: onCompareClick,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "compare"
                                })
                            })
                        ]
                    }),
                    product.stock && product.stock !== 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "product-action",
                        children: product.variants.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            href: `/product/default/${product.slug}`,
                            className: "btn-product btn-cart btn-select",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "select options"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn-product btn-cart",
                            onClick: onCartClick,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "add to cart"
                            })
                        })
                    }) : ""
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product-body",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "product-title",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            href: `/product/default/${product.slug}`,
                            children: product.name
                        })
                    }),
                    !product.stock || product.stock == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "product-price",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "out-price",
                            children: [
                                "$",
                                product.price.toFixed(2)
                            ]
                        })
                    }) : minPrice == maxPrice ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-price",
                        children: [
                            "$",
                            minPrice.toFixed(2)
                        ]
                    }) : product.variants.length == 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-price",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "new-price",
                                children: [
                                    "$",
                                    minPrice.toFixed(2)
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "old-price",
                                children: [
                                    "$",
                                    maxPrice.toFixed(2)
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-price",
                        children: [
                            "$",
                            minPrice.toFixed(2),
                            "–$",
                            maxPrice.toFixed(2)
                        ]
                    })
                ]
            })
        ]
    });
}
const mapStateToProps = (state)=>{
    return {
        wishlist: state.wishlist.data,
        comparelist: state.comparelist.data
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, {
    ..._store_wishlist__WEBPACK_IMPORTED_MODULE_6__/* .actions */ .Nw,
    ..._store_cart__WEBPACK_IMPORTED_MODULE_7__/* .actions */ .Nw,
    ..._store_compare__WEBPACK_IMPORTED_MODULE_8__/* .actions */ .Nw,
    ..._store_demo__WEBPACK_IMPORTED_MODULE_9__/* .actions */ .Nw
})(ProductSix));


/***/ })

};
;