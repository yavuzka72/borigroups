"use strict";
exports.id = 5905;
exports.ids = [5905];
exports.modules = {

/***/ 5905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nw": () => (/* binding */ actions),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "xT": () => (/* binding */ cartSaga)
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
    addToCart: "ADD_TO_CART",
    removeFromCart: "REMOVE_FROM_CART",
    refreshStore: "REFRESH_STORE",
    updateCart: "UPDATE_CART"
};
const initialState = {
    data: []
};
const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.addToCart:
            var findIndex = state.data.findIndex((item)=>item.id == action.payload.product.id);
            let qty = action.payload.qty ? action.payload.qty : 1;
            console.log(action.payload.product[0].variants.length);
            if (findIndex !== -1 && action.payload.product[0].variants.length > 0) {
                findIndex = state.data.findIndex((item)=>item.name == action.payload.product.name);
            }
            if (findIndex !== -1) {
                return {
                    data: [
                        ...state.data.reduce((acc, product, index)=>{
                            if (findIndex == index) {
                                acc.push({
                                    ...product,
                                    qty: product.qty + qty,
                                    sum: (action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price) * (product.qty + qty)
                                });
                            } else {
                                acc.push(product);
                            }
                            return acc;
                        }, [])
                    ]
                };
            } else {
                return {
                    data: [
                        ...state.data,
                        {
                            ...action.payload.product,
                            qty: qty,
                            price: action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price,
                            sum: qty * (action.payload.product.sale_price ? action.payload.product.sale_price : action.payload.product.price)
                        }
                    ]
                };
            }
        case actionTypes.removeFromCart:
            return {
                data: [
                    ...state.data.filter((item)=>{
                        if (item.id !== action.payload.product.id) return true;
                        if (item.name !== action.payload.product.name) return true;
                        return false;
                    })
                ]
            };
        case actionTypes.updateCart:
            return {
                data: [
                    ...action.payload.cartItems
                ]
            };
        case actionTypes.refreshStore:
            return initialState;
        default:
            return state;
    }
};
const actions = {
    addToCart: (product, qty = 1)=>({
            type: actionTypes.addToCart,
            payload: {
                product: product,
                qty: qty
            }
        }),
    removeFromCart: (product)=>({
            type: actionTypes.removeFromCart,
            payload: {
                product: product
            }
        }),
    updateCart: (cartItems)=>({
            type: actionTypes.updateCart,
            payload: {
                cartItems: cartItems
            }
        })
};
function* cartSaga() {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.addToCart, function* saga(e) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product added to Cart");
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.removeFromCart, function* saga(e) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Product removed from Cart");
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeEvery)(actionTypes.updateCart, function* saga(e) {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success("Cart updated successfully");
    });
}
const persistConfig = {
    keyPrefix: "molla-",
    key: "cart",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default())
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)(persistConfig, cartReducer));


/***/ })

};
;