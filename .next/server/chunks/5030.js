"use strict";
exports.id = 5030;
exports.ids = [5030];
exports.modules = {

/***/ 8238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nw": () => (/* binding */ actions),
/* harmony export */   "OP": () => (/* binding */ wishlistSaga),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
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
    addToWishlist: "ADD_TO_WISHLIST",
    removeFromWishlist: "REMOVE_FROM_WISHLIST",
    refreshStore: "REFRESH_STORE"
};
const initialState = {
    data: []
};
const wishlistReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.addToWishlist:
            var findIndex = state.data.findIndex((item)=>item.id === action.payload.product.id);
            if (findIndex == -1) {
                return {
                    data: [
                        ...state.data,
                        action.payload.product
                    ]
                };
            }
        case actionTypes.removeFromWishlist:
            return {
                data: state.data.filter((item)=>item.id !== action.payload.product.id)
            };
        case actionTypes.refreshStore:
            return initialState;
        default:
            return state;
    }
};
const actions = {
    addToWishlist: (product)=>({
            type: actionTypes.addToWishlist,
            payload: {
                product
            }
        }),
    removeFromWishlist: (product)=>({
            type: actionTypes.removeFromWishlist,
            payload: {
                product
            }
        })
};
function* wishlistSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.addToWishlist, function* saga(e) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product added to Wishlist");
    });
}
const persistConfig = {
    keyPrefix: "molla-",
    key: "wishlist",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, wishlistReducer));


/***/ })

};
;