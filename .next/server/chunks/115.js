"use strict";
exports.id = 115;
exports.ids = [115];
exports.modules = {

/***/ 115:
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
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4439);
/* harmony import */ var _components_features_qty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2631);
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8238);
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5905);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6024);










function DetailOne(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { product  } = props;
    const { 0: qty , 1: setQty  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: qty2 , 1: setQty2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: colorArray , 1: setColorArray  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: sizeArray , 1: setSizeArray  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: variationGroup , 1: setVariationGroup  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: selectedVariant , 1: setSelectedVariant  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        color: null,
        colorName: null,
        price: null,
        size: ""
    });
    const { 0: showClear , 1: setShowClear  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showVariationPrice , 1: setShowVariationPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: maxPrice , 1: setMaxPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: minPrice , 1: setMinPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(99999);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(product);
        window.addEventListener("scroll", scrollHandler, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let min = 99999;
        let max = 0;
        setVariationGroup(product[0].variants.reduce((acc, cur)=>{
            cur.size.map((item)=>{
                acc.push({
                    color: cur.color,
                    colorName: cur.color_name,
                    size: item.name,
                    price: cur.price
                });
            });
            if (min > cur.price) min = cur.price;
            if (max < cur.price) max = cur.price;
            return acc;
        }, []));
        if (product[0].variants.length == 0) {
            min = product.sale_price ? product.sale_price : product.price;
            max = product.price;
        }
        setMinPrice(min);
        setMaxPrice(max);
    }, [
        product
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSelectedVariant({
            color: null,
            colorName: null,
            price: null,
            size: ""
        });
        setQty(1);
        setQty2(1);
    }, [
        router.query.slug
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        refreshSelectableGroup();
    }, [
        variationGroup,
        selectedVariant
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        scrollHandler();
    }, [
        router.pathname
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShowClear(selectedVariant.color || selectedVariant.size != "" ? true : false);
        setShowVariationPrice(selectedVariant.color && selectedVariant.size != "" ? true : false);
        let toggle = ref.current.querySelector(".variation-toggle");
        if (toggle) {
            if (selectedVariant.color && selectedVariant.size != "" && toggle.classList.contains("collapsed")) {
                toggle.click();
            }
            if (!(selectedVariant.color && selectedVariant.size != "") && !toggle.classList.contains("collapsed")) {
                toggle.click();
            }
        }
    }, [
        selectedVariant
    ]);
    function scrollHandler() {
        if (router.pathname.includes("/product/default")) {
            let stickyBar = ref.current.querySelector(".sticky-bar");
            if (stickyBar.classList.contains("d-none") && ref.current.getBoundingClientRect().bottom < 0) {
                stickyBar.classList.remove("d-none");
                return;
            }
            if (!stickyBar.classList.contains("d-none") && ref.current.getBoundingClientRect().bottom > 0) {
                stickyBar.classList.add("d-none");
            }
        }
    }
    function onWishlistClick(e) {
        e.preventDefault();
        if (!(0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isInWishlist */ .QY)(props.wishlist, product)) {
            props.addToWishlist(product);
        } else {
            router.push("/pages/wishlist");
        }
    }
    function refreshSelectableGroup() {
        let tempArray = [
            ...variationGroup
        ];
        if (selectedVariant.color) {
            tempArray = variationGroup.reduce((acc, cur)=>{
                if (selectedVariant.color !== cur.color) {
                    return acc;
                }
                return [
                    ...acc,
                    cur
                ];
            }, []);
        }
        setSizeArray(tempArray.reduce((acc, cur)=>{
            if (acc.findIndex((item)=>item.size == cur.size) !== -1) return acc;
            return [
                ...acc,
                cur
            ];
        }, []));
        tempArray = [
            ...variationGroup
        ];
        if (selectedVariant.size) {
            tempArray = variationGroup.reduce((acc, cur)=>{
                if (selectedVariant.size !== cur.size) {
                    return acc;
                }
                return [
                    ...acc,
                    cur
                ];
            }, []);
        }
        setColorArray(product[0].variants.reduce((acc, cur)=>{
            if (tempArray.findIndex((item)=>item.color == cur.color) == -1) {
                return [
                    ...acc,
                    {
                        color: cur.color,
                        colorName: cur.color_name,
                        price: cur.price,
                        disabled: true
                    }
                ];
            }
            return [
                ...acc,
                {
                    color: cur.color,
                    colorName: cur.color_name,
                    price: cur.price,
                    disabled: false
                }
            ];
        }, []));
    }
    function selectColor(e, item) {
        e.preventDefault();
        if (item.color == selectedVariant.color) {
            setSelectedVariant({
                ...selectedVariant,
                color: null,
                colorName: null,
                price: item.price
            });
        } else {
            setSelectedVariant({
                ...selectedVariant,
                color: item.color,
                colorName: item.colorName,
                price: item.price
            });
        }
    }
    function selectSize(e) {
        if (e.target.value == "") {
            setSelectedVariant({
                ...selectedVariant,
                size: ""
            });
        } else {
            setSelectedVariant({
                ...selectedVariant,
                size: e.target.value
            });
        }
    }
    function onChangeQty(current) {
        setQty(current);
    }
    function onChangeQty2(current) {
        setQty2(current);
    }
    function clearSelection(e) {
        e.preventDefault();
        setSelectedVariant({
            ...selectedVariant,
            color: null,
            colorName: null,
            size: ""
        });
        refreshSelectableGroup();
    }
    function onCartClick(e, index = 0) {
        e.preventDefault();
        if (e.currentTarget.classList.contains("btn-disabled")) return;
        let newProduct = {
            ...product
        };
        if (product[0].variants.length > 0) {
            newProduct = {
                ...product,
                name: product.name + " - " + selectedVariant.colorName + ", " + selectedVariant.size,
                price: selectedVariant.price
            };
        }
        props.addToCart(newProduct, index == 0 ? qty : qty2);
    }
    if (!product) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "product-details",
        ref: ref,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "product-title",
                children: product.name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "ratings-container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ratings",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "ratings-val",
                            style: {
                                width: product.ratings * 20 + "%"
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "ratings-text",
                        children: [
                            "( ",
                            product.review,
                            " Reviews )"
                        ]
                    })
                ]
            }),
            product.stock == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "product-price",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "out-price",
                    children: minPrice == maxPrice ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "$",
                            product.price.toFixed(2)
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "$",
                            minPrice.toFixed(2),
                            "–$",
                            maxPrice.toFixed(2)
                        ]
                    })
                })
            }) : minPrice == maxPrice ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product-price",
                children: [
                    "$",
                    minPrice.toFixed(2)
                ]
            }) : product[0].variants.length == 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "product-content",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: product.short_desc
                })
            }),
            product[0].variants.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "details-filter-row details-row-size",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Color:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-nav product-nav-dots",
                                children: colorArray.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#",
                                        className: `${(item.color == selectedVariant.color ? "active " : "") + (item.disabled ? "disabled" : "")}`,
                                        style: {
                                            backgroundColor: item.color
                                        },
                                        onClick: (e)=>selectColor(e, item)
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "details-filter-row details-row-size",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "size",
                                children: "Size:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "select-custom",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    name: "size",
                                    className: "form-control",
                                    value: selectedVariant.size,
                                    onChange: selectSize,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "",
                                            children: "Select a size"
                                        }),
                                        sizeArray.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: item.size,
                                                children: item.size
                                            }, index))
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: "#",
                                className: "size-guide mr-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-th-list"
                                    }),
                                    "size guide"
                                ]
                            }),
                            showClear ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#",
                                onClick: clearSelection,
                                children: "clear"
                            }) : ""
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                        collapsed: true,
                        children: ({ onToggle , setCollapsibleElement , toggleState  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: `d-none variation-toggle ${toggleState.toLowerCase()}`,
                                        onClick: onToggle
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: setCollapsibleElement,
                                        style: {
                                            overflow: "hidden"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "product-price",
                                            children: [
                                                "$",
                                                selectedVariant.price ? selectedVariant.price.toFixed(2) : 0
                                            ]
                                        })
                                    })
                                ]
                            })
                    })
                ]
            }) : "",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "details-filter-row details-row-size",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "qty",
                        children: "Qty:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        changeQty: onChangeQty,
                        max: product.stock,
                        value: qty
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product-details-action",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: `btn-product btn-cart ${!(0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .canAddToCart */ .qr)(props.cartlist, product, qty) || product[0].variants.length > 0 && !showVariationPrice ? "btn-disabled" : ""}`,
                        onClick: (e)=>onCartClick(e, 0),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "add to cart"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "details-action-wrapper",
                        children: (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isInWishlist */ .QY)(props.wishlist, product) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            href: "/shop/wishlist",
                            className: "btn-product btn-wishlist added-to-wishlist",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Go to Wishlist"
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            className: "btn-product btn-wishlist",
                            onClick: onWishlistClick,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Add to Wishlist"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "product-details-footer",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-cat w-100 text-truncate",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Category:"
                            }),
                            product[0].category.map((cat, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            href: {
                                                pathname: "/shop/sidebar/list",
                                                query: {
                                                    category: cat.slug
                                                }
                                            },
                                            children: cat.name
                                        }),
                                        index < product[0].category.length - 1 ? "," : ""
                                    ]
                                }, index))
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "social-icons social-icons-sm",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "social-label",
                                children: "Share:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: "#",
                                className: "social-icon",
                                title: "Facebook",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icon-facebook-f"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: "#",
                                className: "social-icon",
                                title: "Twitter",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icon-twitter"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: "#",
                                className: "social-icon",
                                title: "Instagram",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icon-instagram"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: "#",
                                className: "social-icon",
                                title: "Pinterest",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icon-pinterest"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sticky-bar d-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                        className: "product-media",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            href: `/product/default/${product.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "http://176.53.65.213:8000/api/" + product[0].pictures[0].url,
                                                alt: "product",
                                                width: product[0].pictures[0].width,
                                                height: product[0].pictures[0].height
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "product-title",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            href: `/product/default/${product.slug}`,
                                            children: product.name
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-6 justify-content-end",
                                children: [
                                    selectedVariant.color && selectedVariant.size != "" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "product-price",
                                        children: [
                                            "$",
                                            selectedVariant.price ? selectedVariant.price.toFixed(2) : 0
                                        ]
                                    }) : product.stock == 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                    }) : product[0].variants.length == 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_qty__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        changeQty: onChangeQty2,
                                        max: product.stock,
                                        value: qty2
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "product-details-action",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                className: `btn-product btn-cart ${!(0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .canAddToCart */ .qr)(props.cartlist, product, qty) || product[0].variants.length > 0 && !showVariationPrice ? "btn-disabled" : ""}`,
                                                onClick: (e)=>onCartClick(e, 1),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "add to cart"
                                                })
                                            }),
                                            (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isInWishlist */ .QY)(props.wishlist, product) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                href: "/shop/wishlist",
                                                className: "btn-product btn-wishlist added-to-wishlist",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Go to Wishlist"
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                className: "btn-product btn-wishlist",
                                                onClick: onWishlistClick,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Add to Wishlist"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}
const mapStateToProps = (state)=>{
    return {
        cartlist: state.cartlist.data,
        wishlist: state.wishlist.data
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, {
    ..._store_wishlist__WEBPACK_IMPORTED_MODULE_7__/* .actions */ .Nw,
    ..._store_cart__WEBPACK_IMPORTED_MODULE_8__/* .actions */ .Nw
})(DetailOne));


/***/ })

};
;