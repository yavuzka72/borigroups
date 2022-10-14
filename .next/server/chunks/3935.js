"use strict";
exports.id = 3935;
exports.ids = [3935];
exports.modules = {

/***/ 3935:
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
/* harmony import */ var _components_features_alink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4439);




function Pagination(props) {
    const { perPage , total  } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: lastPage , 1: setLastPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: pageNumbers , 1: setPageNumbers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCurrentPage(query.page ? parseInt(query.page) : 1);
    }, [
        query
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLastPage(parseInt(total / perPage) + (total % perPage ? 1 : 0));
    }, [
        total,
        perPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let tempArray = [];
        let pageCount = Math.floor(total / perPage) + (0 < total % perPage ? 1 : 0);
        for(let i = -1; i < 2 && pageCount >= 3; i++){
            if (1 < currentPage && currentPage < pageCount) tempArray.push(currentPage + i);
            if (1 === currentPage) tempArray.push(currentPage + i + 1);
            if (currentPage === pageCount) tempArray.push(currentPage + i - 1);
        }
        for(let i1 = 0; i1 < pageCount && pageCount < 3; i1++){
            tempArray.push(i1 + 1);
        }
        setPageNumbers(tempArray);
    }, [
        total,
        perPage,
        currentPage
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "pagination justify-content-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: `page-item ${currentPage < 2 ? "disabled" : ""}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "page-link page-link-prev",
                        href: {
                            pathname: router.pathname,
                            query: {
                                ...query,
                                page: currentPage - 1
                            }
                        },
                        scroll: false,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icon-long-arrow-left"
                                })
                            }),
                            "Prev"
                        ]
                    })
                }),
                pageNumbers.length ? pageNumbers.map((page, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: `page-item ${currentPage == page ? "active" : ""}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            className: "page-link",
                            href: {
                                pathname: router.pathname,
                                query: {
                                    ...query,
                                    page: page
                                }
                            },
                            scroll: false,
                            children: page
                        })
                    }, index)) : "",
                lastPage > 3 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "page-item-total",
                    children: [
                        "of ",
                        lastPage
                    ]
                }) : "",
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: `page-item ${currentPage == lastPage ? "disabled" : ""}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_features_alink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "page-link page-link-next",
                        href: {
                            pathname: router.pathname,
                            query: {
                                ...query,
                                page: currentPage + 1
                            }
                        },
                        scroll: false,
                        children: [
                            "Next",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "icon-long-arrow-right"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ })

};
;