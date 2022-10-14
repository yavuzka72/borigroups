"use strict";
exports.id = 257;
exports.ids = [257];
exports.modules = {

/***/ 257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nw": () => (/* binding */ actions),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export actionTypes */
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8936);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);


const actionTypes = {
    showQuick: "SHOW_QUICKVIEW",
    hideQuick: "HIDE_QUICKVIEW",
    showVideo: "SHOW_VIDEO",
    hideVideo: "HIDE_VIDEO",
    refreshStore: "REFRESH_STORE"
};
let initialState = {
    current: process.env.NEXT_PUBLIC_DEMO,
    single: null,
    quickShow: false,
    videoShow: false
};
const demoReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.showQuick:
            return {
                ...state,
                single: action.payload.slug,
                quickShow: true
            };
        case actionTypes.hideQuick:
            return {
                ...state,
                quickShow: false,
                single: null
            };
        case actionTypes.showVideo:
            return {
                ...state,
                videoShow: true
            };
        case actionTypes.hideVideo:
            return {
                ...state,
                videoShow: false
            };
        case actionTypes.refreshStore:
            return {
                current: action.payload.current,
                single: null,
                quickShow: false,
                videoShow: false
            };
        default:
            return state;
    }
};
const actions = {
    refreshStore: (current)=>({
            type: actionTypes.refreshStore,
            payload: {
                current: current
            }
        }),
    showQuickView: (slug)=>({
            type: actionTypes.showQuick,
            payload: {
                slug: slug
            }
        }),
    hideQuick: ()=>({
            type: actionTypes.hideQuick
        }),
    showVideo: ()=>({
            type: actionTypes.showVideo
        }),
    hideVideo: ()=>({
            type: actionTypes.hideVideo
        })
};
const persistConfig = {
    keyPrefix: "molla-",
    key: "demo",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, demoReducer));


/***/ })

};
;