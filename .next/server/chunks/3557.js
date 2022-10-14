"use strict";
exports.id = 3557;
exports.ids = [3557];
exports.modules = {

/***/ 3557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ product_sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9252);
// EXTERNAL MODULE: ./components/features/alink.jsx
var alink = __webpack_require__(4439);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(1808);
;// CONCATENATED MODULE: ./components/features/products/product-eight.jsx



function ProductEight(props) {
    const { product  } = props;
    const { 0: maxPrice , 1: setMaxPrice  } = (0,external_react_.useState)(0);
    const { 0: minPrice , 1: setMinPrice  } = (0,external_react_.useState)(99999);
    (0,external_react_.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "product product-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                className: "product-media",
                children: /*#__PURE__*/ jsx_runtime_.jsx(alink/* default */.Z, {
                    href: `/product/default/${product.slug}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "http://176.53.65.213:8000/api/" + product.sm_pictures[0].url,
                        alt: "Product",
                        className: "product-image"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "product-body",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "product-title",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(alink/* default */.Z, {
                            href: `/product/default/${product.slug}`,
                            children: product.name
                        })
                    }),
                    !product.stock || product.stock == 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "product-price",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "out-price",
                            children: [
                                "$",
                                product.price.toFixed(2)
                            ]
                        })
                    }) : minPrice == maxPrice ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-price",
                        children: [
                            "$",
                            minPrice.toFixed(2)
                        ]
                    }) : product.variants.length == 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-price",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "new-price",
                                children: [
                                    "$",
                                    minPrice.toFixed(2)
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "old-price",
                                children: [
                                    "$",
                                    maxPrice.toFixed(2)
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
/* harmony default export */ const product_eight = (/*#__PURE__*/external_react_default().memo(ProductEight));

;// CONCATENATED MODULE: ./components/partials/product/related/related-two.jsx




function RelatedTwo(props) {
    const { products  } = props;
    if (!products) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(owl_carousel/* default */.Z, {
        adClass: "owl-simple",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: products.map((product, index)=>/*#__PURE__*/ jsx_runtime_.jsx(product_eight, {
                    product: product
                }, index))
        })
    });
}
/* harmony default export */ const related_two = (/*#__PURE__*/external_react_default().memo(RelatedTwo));

;// CONCATENATED MODULE: ./components/partials/product/sidebar/product-sidebar.jsx





function ProductSidebar(props) {
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(0);
    const { products , loading =false  } = props;
    (0,external_react_.useEffect)(()=>{
        resizeHandle();
        window.addEventListener("resize", resizeHandle);
        return ()=>{
            window.removeEventListener("resize", resizeHandle);
        };
    }, []);
    function resizeHandle() {
        if (document.querySelector("body").offsetWidth < 992) {
            setToggle(true);
        } else {
            setToggle(false);
        }
    }
    function hideSideBar() {
        if (document.querySelector("body").classList.contains("sidebar-filter-active")) {
            document.querySelector("body").classList.remove("sidebar-filter-active");
        }
    }
    function toggleSideBar() {
        if (document.querySelector("body").classList.contains("sidebar-filter-active")) {
            document.querySelector("body").classList.remove("sidebar-filter-active");
        } else {
            document.querySelector("body").classList.add("sidebar-filter-active");
        }
    }
    function closeSideBar() {
        if (document.querySelector("body").classList.contains("sidebar-filter-active")) {
            document.querySelector("body").classList.remove("sidebar-filter-active");
        }
    }
    if (!products) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !loading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${toggle ? "sidebar-filter right" : "sidebar"} sidebar-product`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: toggle ? "sidebar-filter-wrapper product-sidebar-wrapper" : "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: closeSideBar,
                                className: "btn-product btn-close",
                                style: {
                                    marginLeft: "auto",
                                    marginRight: "5px"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "icon-close"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "widget widget-products",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "widget-title mb-1",
                                        children: "Related Product"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "products",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(related_two, {
                                            products: products.slice(0, 4)
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(alink/* default */.Z, {
                                        href: "/shop/sidebar/list",
                                        className: "btn btn-outline-dark-3 text-truncate",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "View More Products"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "icon-long-arrow-right"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "widget widget-banner-sidebar pb-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "banner-sidebar-title",
                                        children: "ad box 280 x 280"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "banner-sidebar text-left banner-overlay ml-0",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(alink/* default */.Z, {
                                                href: "#",
                                                className: "w-100",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "lazy-overlay"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
                                                        alt: "banner",
                                                        src: "images/blog/sidebar/banner.jpg",
                                                        threshold: 500,
                                                        height: 277,
                                                        width: 280,
                                                        effect: "opacity"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "banner-content text-left pt-0",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "mb-1",
                                                        children: "online & in-store"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "banner-subtitle text-uppercase",
                                                        children: "Spring Sale"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                        className: "banner-title",
                                                        children: [
                                                            "Up to 60% off",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                            "from $55"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(alink/* default */.Z, {
                                                        href: "/shop/sidebar/3cols",
                                                        className: "btn btn-outline btn-md btn-outline-white text-uppercase m-0",
                                                        children: "Shop Now"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                toggle ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "sidebar-fixed-toggler right",
                    onClick: toggleSideBar,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon-cog"
                    })
                }) : "",
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar-filter-overlay",
                    onClick: hideSideBar
                })
            ]
        }) : ""
    });
}
/* harmony default export */ const product_sidebar = (/*#__PURE__*/external_react_default().memo(ProductSidebar));


/***/ })

};
;