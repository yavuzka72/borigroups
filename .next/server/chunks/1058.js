"use strict";
exports.id = 1058;
exports.ids = [1058];
exports.modules = {

/***/ 1058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nw": () => (/* binding */ actions),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dX": () => (/* binding */ compareSaga)
/* harmony export */ });
/* unused harmony export actionTypes */
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8936);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6477);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);




const actionTypes = {
    addToCompare: "ADD_TO_COMPARE",
    removeFromCompare: "REMOVE_FROM_COMPARE",
    clearAllFromCompare: "CLEAR_ALL_FROM_COMPARE",
    refreshStore: "REFRESH_STORE"
};
const initialState = {
    data: []
};
const compareReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.addToCompare:
            var findIndex = state.data.findIndex((item)=>item.id == action.payload.product.id);
            if (findIndex == -1) {
                return {
                    data: [
                        ...state.data,
                        action.payload.product
                    ]
                };
            }
        case actionTypes.removeFromCompare:
            return {
                data: state.data.filter((item)=>item.id != action.payload.product.id)
            };
        case actionTypes.clearAllFromCompare:
            return initialState;
        case actionTypes.refreshStore:
            return initialState;
        default:
            return state;
    }
};
const actions = {
    addToCompare: (product)=>({
            type: actionTypes.addToCompare,
            payload: {
                product
            }
        }),
    removeFromCompare: (product)=>({
            type: actionTypes.removeFromCompare,
            payload: {
                product
            }
        }),
    clearAllFromCompare: ()=>({
            type: actionTypes.clearAllFromCompare,
            payload: {}
        }),
    refreshStore: ()=>({
            type: actionTypes.refreshStore,
            payload: {}
        })
};
function* compareSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.addToCompare, function* saga(e) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product added to Compare");
    });
}
const persistConfig = {
    keyPrefix: "molla-",
    key: "compare",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, compareReducer));


/***/ })

};
;