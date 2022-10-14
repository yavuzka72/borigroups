"use strict";
exports.id = 3011;
exports.ids = [3011];
exports.modules = {

/***/ 5879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function PageHeader(props) {
    const { title , subTitle  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "page-header text-center",
        style: {
            backgroundImage: `url(images/page-header-bg.jpg)`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "page-title",
                children: [
                    title,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: subTitle
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(PageHeader));


/***/ }),

/***/ 7845:
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
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3984);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slide_toggle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4439);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6963);








function ShopSidebarOne(props) {
    const { toggle =false  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;
    const { 0: priceRange , 1: setRange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        min: 0,
        max: 1000
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (query.minPrice && query.maxPrice) {
            setRange({
                min: parseInt(query.minPrice),
                max: parseInt(query.maxPrice)
            });
        } else {
            setRange({
                min: 0,
                max: 1000
            });
        }
    }, [
        query
    ]);
    function onChangePriceRange(value) {
        setRange(value);
    }
    function containsAttrInUrl(type, value) {
        const currentQueries = query[type] ? query[type].split(",") : [];
        return currentQueries && currentQueries.includes(value);
    }
    function getUrlForAttrs(type, value) {
        let currentQueries = query[type] ? query[type].split(",") : [];
        currentQueries = containsAttrInUrl(type, value) ? currentQueries.filter((item)=>item !== value) : [
            ...currentQueries,
            value
        ];
        return {
            pathname: router.pathname,
            query: {
                ...query,
                page: 1,
                [type]: currentQueries.join(",")
            }
        };
    }
    function onAttrClick(e, attr, value) {
        if (getUrlForAttrs(attr, value)) {
            let queryObject = getUrlForAttrs(attr, value).query;
            let url = router.pathname.replace("[type]", query.type) + "?";
            for(let key in queryObject){
                if (key !== "type") {
                    url += key + "=" + queryObject[key] + "&";
                }
            }
            router.push(url);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
            className: `${toggle ? "sidebar-filter" : "sidebar"} sidebar-shop`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: toggle ? "sidebar-filter-wrapper" : "",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "widget widget-clean",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Filters:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                href: {
                                    pathname: router.pathname,
                                    query: {
                                        type: query.type
                                    }
                                },
                                className: "sidebar-filter-clear",
                                scroll: false,
                                children: "Clean All"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                        collapsed: false,
                        children: ({ onToggle , setCollapsibleElement , toggleState  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-collapsible",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "widget-title mb-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#category",
                                            className: `${toggleState.toLowerCase() == "collapsed" ? "collapsed" : ""}`,
                                            onClick: (e)=>{
                                                onToggle(e);
                                                e.preventDefault();
                                            },
                                            children: "Category"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: setCollapsibleElement,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "widget-body pt-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "filter-items filter-items-count",
                                                children: _utils_data__WEBPACK_IMPORTED_MODULE_6__/* .shopData.categories.map */ .JQ.categories.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "filter-item",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                className: `${query.category == item.slug ? "active" : ""}`,
                                                                href: {
                                                                    pathname: router.pathname,
                                                                    query: {
                                                                        type: query.type,
                                                                        category: item.slug
                                                                    }
                                                                },
                                                                scroll: false,
                                                                children: item.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "item-count",
                                                                children: item.count
                                                            })
                                                        ]
                                                    }, `cat_${index}`))
                                            })
                                        })
                                    })
                                ]
                            })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                        collapsed: false,
                        children: ({ onToggle , setCollapsibleElement , toggleState  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-collapsible",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "widget-title mb-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#Size",
                                            className: `${toggleState.toLowerCase() == "collapsed" ? "collapsed" : ""}`,
                                            onClick: (e)=>{
                                                onToggle(e);
                                                e.preventDefault();
                                            },
                                            children: "Size"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: setCollapsibleElement,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "widget-body pt-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "filter-items",
                                                children: _utils_data__WEBPACK_IMPORTED_MODULE_6__/* .shopData.sizes.map */ .JQ.sizes.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "filter-item",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "custom-control custom-checkbox",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "checkbox",
                                                                    className: "custom-control-input",
                                                                    id: `size-${index + 1}`,
                                                                    onChange: (e)=>onAttrClick(e, "size", item.slug),
                                                                    checked: containsAttrInUrl("size", item.slug) ? true : false
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "custom-control-label",
                                                                    htmlFor: `size-${index + 1}`,
                                                                    children: item.size
                                                                })
                                                            ]
                                                        })
                                                    }, index))
                                            })
                                        })
                                    })
                                ]
                            })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                        collapsed: false,
                        children: ({ onToggle , setCollapsibleElement , toggleState  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-collapsible",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "widget-title mb-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#colour",
                                            className: `${toggleState.toLowerCase() == "collapsed" ? "collapsed" : ""}`,
                                            onClick: (e)=>{
                                                onToggle(e);
                                                e.preventDefault();
                                            },
                                            children: "Colour"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: setCollapsibleElement,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "widget-body pt-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "filter-colors",
                                                children: _utils_data__WEBPACK_IMPORTED_MODULE_6__/* .shopData.colors.map */ .JQ.colors.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        href: getUrlForAttrs("color", item.color_name),
                                                        className: containsAttrInUrl("color", item.color_name) ? "selected" : "",
                                                        style: {
                                                            backgroundColor: item.color
                                                        },
                                                        scroll: false,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "sr-only",
                                                            children: "Color Name"
                                                        })
                                                    }, index))
                                            })
                                        })
                                    })
                                ]
                            })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                        collapsed: false,
                        children: ({ onToggle , setCollapsibleElement , toggleState  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-collapsible",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "widget-title mb-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#brand",
                                            className: `${toggleState.toLowerCase() == "collapsed" ? "collapsed" : ""}`,
                                            onClick: (e)=>{
                                                onToggle(e);
                                                e.preventDefault();
                                            },
                                            children: "Brand"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: setCollapsibleElement,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "widget-body pt-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "filter-items",
                                                children: _utils_data__WEBPACK_IMPORTED_MODULE_6__/* .shopData.brands.map */ .JQ.brands.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "filter-item",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "custom-control custom-checkbox",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "checkbox",
                                                                    className: "custom-control-input",
                                                                    id: `brand-${index + 1}`,
                                                                    onChange: (e)=>onAttrClick(e, "brand", item.slug),
                                                                    checked: containsAttrInUrl("brand", item.slug) ? true : false
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "custom-control-label",
                                                                    htmlFor: `brand-${index + 1}`,
                                                                    children: item.brand
                                                                })
                                                            ]
                                                        })
                                                    }, index))
                                            })
                                        })
                                    })
                                ]
                            })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slide_toggle__WEBPACK_IMPORTED_MODULE_4___default()), {
                        collapsed: false,
                        children: ({ onToggle , setCollapsibleElement , toggleState  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "widget widget-collapsible",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "widget-title mb-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#price",
                                            className: `${toggleState.toLowerCase() == "collapsed" ? "collapsed" : ""}`,
                                            onClick: (e)=>{
                                                onToggle(e);
                                                e.preventDefault();
                                            },
                                            children: "Price"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        ref: setCollapsibleElement,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "widget-body pt-0",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "filter-price",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "filter-price-text d-flex justify-content-between",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    "Price Range:\xa0",
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "filter-price-range",
                                                                        children: [
                                                                            "$",
                                                                            priceRange.min,
                                                                            " - $",
                                                                            priceRange.max
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                href: {
                                                                    pathname: router.pathname,
                                                                    query: {
                                                                        ...query,
                                                                        minPrice: priceRange.min,
                                                                        maxPrice: priceRange.max,
                                                                        page: 1
                                                                    }
                                                                },
                                                                className: "pr-2",
                                                                scroll: false,
                                                                children: "Filter"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "price-slider",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_input_range__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            formatLabel: (value)=>`$${value}`,
                                                            maxValue: 1000,
                                                            minValue: 0,
                                                            step: 50,
                                                            value: priceRange,
                                                            onChange: onChangePriceRange
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(ShopSidebarOne));


/***/ })

};
;