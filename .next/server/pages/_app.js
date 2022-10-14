(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 7715:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-helmet"
var external_react_helmet_namespaceObject = require("react-helmet");;
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
var react_namespaceObject = require("redux-persist/integration/react");;
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");;
;// CONCATENATED MODULE: external "redux-saga"
var external_redux_saga_namespaceObject = require("redux-saga");;
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(5060);
// EXTERNAL MODULE: ./store/cart.js
var cart = __webpack_require__(2806);
// EXTERNAL MODULE: ./store/wishlist.js
var wishlist = __webpack_require__(5708);
// EXTERNAL MODULE: ./store/compare.js
var compare = __webpack_require__(9792);
;// CONCATENATED MODULE: ./store/root-saga.js




function* rootSaga() {
  yield (0,effects_.all)([(0,cart/* cartSaga */.xT)(), (0,wishlist/* wishlistSaga */.OP)(), (0,compare/* compareSaga */.dX)()]);
}
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(3643);
// EXTERNAL MODULE: ./store/demo.js
var demo = __webpack_require__(2870);
;// CONCATENATED MODULE: ./store/index.js




 // import storage from 'redux-persist/lib/storage';
// Import Reducers





const rootReducers = (0,external_redux_namespaceObject.combineReducers)({
  cartlist: cart/* default */.ZP,
  wishlist: wishlist/* default */.ZP,
  comparelist: compare/* default */.ZP,
  demo: demo/* default */.ZP
}); // const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducers)

const sagaMiddleware = external_redux_saga_default()();
const makeStore = context => {
  const store = (0,external_redux_namespaceObject.createStore)(rootReducers, (0,external_redux_namespaceObject.applyMiddleware)(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  store.__persistor = (0,external_redux_persist_.persistStore)(store);
  return store;
}; // export default makeStore;

const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
  debug: true
});
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(3326);
// EXTERNAL MODULE: ./components/features/alink.jsx
var alink = __webpack_require__(7852);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9997);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(7659);
;// CONCATENATED MODULE: ./components/features/modals/login-modal.jsx
var __jsx = (external_react_default()).createElement;




const customStyles = {
  overlay: {
    backgroundColor: 'rgba(77,77,77,0.6)',
    zIndex: '9000'
  }
};
external_react_modal_default().setAppElement('body');
function LoginModal() {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  let timer;
  (0,external_react_.useEffect)(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  function closeModal() {
    document.getElementById("login-modal").classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    timer = setTimeout(() => {
      setOpen(false);
    }, 350);
  }

  function openModal(e) {
    e.preventDefault();
    setOpen(true);
  }

  return __jsx("li", null, __jsx("a", {
    href: "#",
    onClick: openModal
  }, __jsx("i", {
    className: "icon-user"
  }), "Login"), open ? __jsx((external_react_modal_default()), {
    isOpen: open,
    style: customStyles,
    contentLabel: "login Modal",
    className: "modal-dialog",
    overlayClassName: "d-flex align-items-center justify-content-center",
    id: "login-modal",
    onRequestClose: closeModal,
    closeTimeoutMS: 10
  }, __jsx("div", {
    className: "modal-content"
  }, __jsx("div", {
    className: "modal-body"
  }, __jsx("button", {
    type: "button",
    className: "close",
    onClick: closeModal
  }, __jsx("span", {
    "aria-hidden": "true"
  }, __jsx("i", {
    className: "icon-close"
  }))), __jsx("div", {
    className: "form-box"
  }, __jsx("div", {
    className: "form-tab"
  }, __jsx(external_react_tabs_.Tabs, {
    selectedTabClassName: "show",
    defaultIndex: 0
  }, __jsx(external_react_tabs_.TabList, {
    className: "nav nav-pills nav-fill"
  }, __jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Sign In")), __jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, __jsx("span", {
    className: "nav-link"
  }, "Register"))), __jsx("div", {
    className: "tab-content"
  }, __jsx(external_react_tabs_.TabPanel, {
    style: {
      paddingTop: "2rem"
    }
  }, __jsx("div", null, __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "singin-email-2"
  }, "Username or email address *"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "singin-email-2",
    name: "singin-email",
    required: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "singin-password-2"
  }, "Password *"), __jsx("input", {
    type: "password",
    className: "form-control",
    id: "singin-password-2",
    name: "singin-password",
    required: true
  })), __jsx("div", {
    className: "form-footer"
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2"
  }, __jsx("span", null, "LOG IN"), __jsx("i", {
    className: "icon-long-arrow-right"
  })), __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "signin-remember-2"
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "signin-remember-2"
  }, "Remember Me")), __jsx(alink/* default */.Z, {
    href: "#",
    className: "forgot-link"
  }, "Forgot Your Password?"))), __jsx("div", {
    className: "form-choice"
  }, __jsx("p", {
    className: "text-center"
  }, "or sign in with"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-sm-6"
  }, __jsx(alink/* default */.Z, {
    href: "#",
    className: "btn btn-login btn-g"
  }, __jsx("i", {
    className: "icon-google"
  }), "Login With Google")), __jsx("div", {
    className: "col-sm-6"
  }, __jsx(alink/* default */.Z, {
    href: "#",
    className: "btn btn-login btn-f"
  }, __jsx("i", {
    className: "icon-facebook-f"
  }), "Login With Facebook")))))), __jsx(external_react_tabs_.TabPanel, null, __jsx("form", {
    action: "#"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "register-email-2"
  }, "Your email address *"), __jsx("input", {
    type: "email",
    className: "form-control",
    id: "register-email-2",
    name: "register-email",
    required: true
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "register-password-2"
  }, "Password *"), __jsx("input", {
    type: "password",
    className: "form-control",
    id: "register-password-2",
    name: "register-password",
    required: true
  })), __jsx("div", {
    className: "form-footer"
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-outline-primary-2"
  }, __jsx("span", null, "SIGN UP"), __jsx("i", {
    className: "icon-long-arrow-right"
  })), __jsx("div", {
    className: "custom-control custom-checkbox"
  }, __jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "register-policy-2",
    required: true
  }), __jsx("label", {
    className: "custom-control-label",
    htmlFor: "register-policy-2"
  }, "I agree to the privacy policy *")))), __jsx("div", {
    className: "form-choice"
  }, __jsx("p", {
    className: "text-center"
  }, "or sign in with"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx(alink/* default */.Z, {
    href: "#",
    className: "btn btn-login btn-g"
  }, __jsx("i", {
    className: "icon-google"
  }), "Login With Google")), __jsx("div", {
    className: "col-md-6 mt-1 mt-md-0"
  }, __jsx(alink/* default */.Z, {
    href: "#",
    className: "btn btn-login  btn-f"
  }, __jsx("i", {
    className: "icon-facebook-f"
  }), "Login With Facebook")))))))))))) : '');
}
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./components/partials/header/partials/header-search.jsx
var header_search_jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function HeaderSearch() {
  const router = (0,router_.useRouter)("");
  const {
    0: cat,
    1: setCat
  } = (0,external_react_.useState)("");
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,external_react_.useState)("");
  const {
    0: products,
    1: setProducts
  } = (0,external_react_.useState)([]);
  const [searchProducts, {
    data
  }] = (0,react_hooks_.useLazyQuery)(queries/* GET_PRODUCTS */.tT);
  const result = data && data.products;
  const {
    0: timer,
    1: setTimer
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    document.querySelector("body").addEventListener('click', closeSearchForm);
    return () => {
      document.querySelector("body").removeEventListener('click', closeSearchForm);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    if (result && searchTerm.length > 2) setProducts(result.reduce((acc, product) => {
      let max = 0;
      let min = 999999;
      product.variants.map(item => {
        if (min > item.price) min = item.price;
        if (max < item.price) max = item.price;
      }, []);

      if (product.variants.length == 0) {
        min = product.sale_price ? product.sale_price : product.price;
        max = product.price;
      }

      return [...acc, _objectSpread(_objectSpread({}, product), {}, {
        minPrice: min,
        maxPrice: max
      })];
    }, []));
  }, [result, searchTerm]);
  (0,external_react_.useEffect)(() => {
    if (searchTerm.length > 2) {
      if (timer) clearTimeout(timer);
      let timerId = setTimeout(() => {
        searchProducts({
          variables: {
            searchTerm: searchTerm,
            category: cat
          }
        });
      }, 500);
      setTimer(timerId);
    }
  }, [searchTerm, cat]);
  (0,external_react_.useEffect)(() => {
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }, [router.pathname]);

  function matchEmphasize(name) {
    let regExp = new RegExp(searchTerm, "i");
    return name.replace(regExp, match => "<strong>" + match + "</strong>");
  }

  function closeSearchForm(e) {
    document.querySelector('.header .header-search').classList.remove('show');
  }

  function onCatSelect(e) {
    setCat(e.target.value);
  }

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function showSearchForm(e) {
    document.querySelector('.header .header-search').classList.add('show');
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop/sidebar/list',
      query: {
        searchTerm: searchTerm,
        category: cat
      }
    });
  }

  function goProductPage() {
    setSearchTerm('');
    setProducts([]);
  }

  return header_search_jsx("div", {
    className: "header-search header-search-extended header-search-visible header-search-no-radius d-none d-xl-block"
  }, header_search_jsx("button", {
    className: "search-toggle"
  }, header_search_jsx("i", {
    className: "icon-search"
  })), header_search_jsx("form", {
    action: "#",
    method: "get",
    onSubmit: onSubmitSearchForm,
    onClick: showSearchForm
  }, header_search_jsx("div", {
    className: "header-search-wrapper search-wrapper-wide"
  }, header_search_jsx("label", {
    htmlFor: "q",
    className: "sr-only",
    value: searchTerm,
    required: true
  }, "Search"), header_search_jsx("input", {
    type: "text",
    onChange: onSearchChange,
    value: searchTerm,
    className: "form-control",
    name: "q",
    placeholder: "Search product ...",
    required: true
  }), header_search_jsx("button", {
    className: "btn btn-primary",
    type: "submit"
  }, header_search_jsx("i", {
    className: "icon-search"
  })), header_search_jsx("div", {
    className: "live-search-list",
    onClick: goProductPage
  }, products.length > 0 && searchTerm.length > 2 ? header_search_jsx("div", {
    className: "autocomplete-suggestions"
  }, searchTerm.length > 2 && products.map((product, index) => header_search_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "autocomplete-suggestion",
    key: `search-result-${index}`
  }, header_search_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.sm_pictures[0].url,
    width: 40,
    height: 40,
    alt: "product"
  }), header_search_jsx("div", {
    className: "search-name",
    dangerouslySetInnerHTML: (0,utils/* safeContent */.rJ)(matchEmphasize(product.name))
  }), header_search_jsx("span", {
    className: "search-price"
  }, product.stock == 0 ? header_search_jsx("div", {
    className: "product-price mb-0"
  }, header_search_jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : product.minPrice == product.maxPrice ? header_search_jsx("div", {
    className: "product-price mb-0"
  }, "$", product.minPrice.toFixed(2)) : product.variants.length == 0 ? header_search_jsx("div", {
    className: "product-price mb-0"
  }, header_search_jsx("span", {
    className: "new-price"
  }, "$", product.minPrice.toFixed(2)), header_search_jsx("span", {
    className: "old-price"
  }, "$", product.maxPrice.toFixed(2))) : header_search_jsx("div", {
    className: "product-price mb-0"
  }, "$", product.minPrice.toFixed(2), "\u2013$", product.maxPrice.toFixed(2)))))) : ""))));
}

/* harmony default export */ var header_search = ((0,apollo/* default */.Z)({
  ssr: true
})(HeaderSearch));
;// CONCATENATED MODULE: ./components/partials/header/partials/wishlist-menu.jsx
var wishlist_menu_jsx = (external_react_default()).createElement;




function WishlistMenu(props) {
  const {
    wishlist
  } = props;
  return wishlist_menu_jsx("li", null, wishlist_menu_jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    title: "Wishlist"
  }, wishlist_menu_jsx("i", {
    className: "icon-heart-o"
  }), "My Wishlist", wishlist_menu_jsx("span", null, "(", wishlist.length, ")")));
}

function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.data
  };
}

/* harmony default export */ var wishlist_menu = ((0,external_react_redux_.connect)(mapStateToProps, {})(WishlistMenu));
;// CONCATENATED MODULE: ./components/partials/header/partials/cart-menu.jsx

var cart_menu_jsx = (external_react_default()).createElement;

function cart_menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cart_menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_menu_ownKeys(Object(source), true).forEach(function (key) { cart_menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CartMenu(props) {
  const {
    cartlist
  } = props;
  return cart_menu_jsx("div", {
    className: "dropdown cart-dropdown"
  }, cart_menu_jsx(alink/* default */.Z, {
    href: "/shop/cart",
    className: "dropdown-toggle",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    "data-display": "static"
  }, cart_menu_jsx("i", {
    className: "icon-shopping-cart"
  }), cart_menu_jsx("span", {
    className: "cart-count"
  }, (0,utils/* cartQtyTotal */.xX)(cartlist))), cart_menu_jsx("div", {
    className: `dropdown-menu dropdown-menu-right ${cartlist.length === 0 ? 'text-center' : ''}`
  }, 0 === cartlist.length ? cart_menu_jsx("p", null, "No products in the cart.") : cart_menu_jsx((external_react_default()).Fragment, null, cart_menu_jsx("div", {
    className: "dropdown-cart-products"
  }, cartlist.map((item, index) => cart_menu_jsx("div", {
    className: "product justify-content-between",
    key: index
  }, cart_menu_jsx("div", {
    className: "product-cart-details"
  }, cart_menu_jsx("h4", {
    className: "product-title"
  }, cart_menu_jsx(alink/* default */.Z, {
    href: `/product/default/${item.slug}`
  }, item.name)), console.log(item[0]), cart_menu_jsx("span", {
    className: "cart-product-info"
  }, cart_menu_jsx("span", {
    className: "cart-product-qty"
  }, item.qty, " "), "x $", item.sale_price ? item.sale_price.toFixed(2) : item.price.toFixed(2))), cart_menu_jsx("figure", {
    className: "product-image-container ml-2"
  }, cart_menu_jsx(alink/* default */.Z, {
    href: `/product/default/${item.slug}`,
    className: "product-image"
  }, cart_menu_jsx("img", {
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + item[0].pictures[0].url,
    alt: "product"
  }))), cart_menu_jsx("button", {
    className: "btn-remove",
    title: "Remove Product",
    onClick: () => props.removeFromCart(item)
  }, cart_menu_jsx("i", {
    className: "icon-close"
  }))))), cart_menu_jsx("div", {
    className: "dropdown-cart-total"
  }, cart_menu_jsx("span", null, "Total"), cart_menu_jsx("span", {
    className: "cart-total-price"
  }, "$", (0,utils/* cartPriceTotal */.bS)(cartlist).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }))), cart_menu_jsx("div", {
    className: "dropdown-cart-action"
  }, cart_menu_jsx(alink/* default */.Z, {
    href: "/shop/cart",
    className: "btn btn-primary"
  }, "View Cart"), cart_menu_jsx(alink/* default */.Z, {
    href: "/shop/checkout",
    className: "btn btn-outline-primary-2"
  }, cart_menu_jsx("span", null, "Checkout"), cart_menu_jsx("i", {
    className: "icon-long-arrow-right"
  }))))));
}

function cart_menu_mapStateToProps(state) {
  return {
    cartlist: state.cartlist.data
  };
}

/* harmony default export */ var cart_menu = ((0,external_react_redux_.connect)(cart_menu_mapStateToProps, cart_menu_objectSpread({}, cart/* actions */.Nw))(CartMenu));
;// CONCATENATED MODULE: ./components/partials/header/partials/compare-menu.jsx

var compare_menu_jsx = (external_react_default()).createElement;

function compare_menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function compare_menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { compare_menu_ownKeys(Object(source), true).forEach(function (key) { compare_menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { compare_menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function compare_menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function CompareMenu(props) {
  const {
    compareList
  } = props;
  return compare_menu_jsx("div", {
    className: "dropdown compare-dropdown"
  }, compare_menu_jsx(alink/* default */.Z, {
    href: "#",
    className: "dropdown-toggle"
  }, compare_menu_jsx("div", {
    className: "icon"
  }, compare_menu_jsx("i", {
    className: "icon-random"
  })), compare_menu_jsx("p", null, "Compare")), compareList.length > 0 ? compare_menu_jsx("div", {
    className: "dropdown-menu dropdown-menu-right"
  }, compare_menu_jsx("ul", {
    className: "compare-products"
  }, compareList.map((product, index) => compare_menu_jsx("li", {
    className: "compare-product",
    key: index
  }, compare_menu_jsx("a", {
    href: "#",
    className: "btn-remove",
    title: "Remove Product",
    onClick: e => props.removeFromCompare(product)
  }, compare_menu_jsx("i", {
    className: "icon-close"
  })), compare_menu_jsx("h4", {
    className: "compare-product-title"
  }, compare_menu_jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name))))), compare_menu_jsx("div", {
    className: "compare-actions"
  }, compare_menu_jsx("a", {
    href: "#",
    className: "action-link",
    onClick: e => props.clearAllFromCompare()
  }, "Clear All"), compare_menu_jsx(alink/* default */.Z, {
    href: "#",
    className: "btn btn-outline-primary-2"
  }, compare_menu_jsx("span", null, "Compare"), compare_menu_jsx("i", {
    className: "icon-long-arrow-right"
  })))) : compare_menu_jsx("div", {
    className: "dropdown-menu dropdown-menu-right"
  }, compare_menu_jsx("p", {
    className: "text-center"
  }, "No products in the compare.")));
}

function compare_menu_mapStateToProps(state) {
  return {
    compareList: state.comparelist.data
  };
}

/* harmony default export */ var compare_menu = ((0,external_react_redux_.connect)(compare_menu_mapStateToProps, compare_menu_objectSpread({}, compare/* actions */.Nw))(CompareMenu));
;// CONCATENATED MODULE: ./components/partials/header/partials/category-menu.jsx

var category_menu_jsx = (external_react_default()).createElement;



function CategoryMenu() {
  const query = useRouter().query;
  return category_menu_jsx("div", {
    className: "dropdown category-dropdown"
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/list",
    className: "dropdown-toggle",
    title: "Browse Categories",
    scroll: false
  }, "Browse Categories", category_menu_jsx("i", {
    className: "icon-angle-down"
  })), category_menu_jsx("div", {
    className: "dropdown-menu"
  }, category_menu_jsx("nav", {
    className: "side-nav"
  }, category_menu_jsx("ul", {
    className: "menu-vertical sf-arrows"
  }, category_menu_jsx("li", {
    className: query.category == 'electronics' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=electronics",
    scroll: false
  }, "Electronics")), category_menu_jsx("li", {
    className: query.category == 'gift-idea' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=gift-idea",
    scroll: false
  }, "Gift Ideas")), category_menu_jsx("li", {
    className: query.category == 'beds' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=beds",
    scroll: false
  }, "Beds")), category_menu_jsx("li", {
    className: query.category == 'lighting' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=lighting",
    scroll: false
  }, "Lighting")), category_menu_jsx("li", {
    className: query.category == 'sofas-and-sleeper-sofas' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=sofas-and-sleeper-sofas",
    scroll: false
  }, "Sofas & Sleeper sofas")), category_menu_jsx("li", {
    className: query.category == 'storage' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=storage",
    scroll: false
  }, "Storage")), category_menu_jsx("li", {
    className: query.category == 'armchairs-and-chaises' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=armchairs-and-chaises",
    scroll: false
  }, "Armchairs & Chaises")), category_menu_jsx("li", {
    className: query.category == 'decoration' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=decoration",
    scroll: false
  }, "Decoration ")), category_menu_jsx("li", {
    className: query.category == 'kitchen-cabinets' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=kitchen-cabinets",
    scroll: false
  }, "Kitchen Cabinets")), category_menu_jsx("li", {
    className: query.category == 'coffee-and-tables' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=coffee-and-tables",
    scroll: false
  }, "Coffee & Tables")), category_menu_jsx("li", {
    className: query.category == 'furniture' ? 'active' : ''
  }, category_menu_jsx(ALink, {
    href: "/shop/sidebar/3cols?category=furniture",
    scroll: false
  }, "Outdoor Furniture "))))));
}

/* harmony default export */ var category_menu = ((/* unused pure expression or super */ null && (CategoryMenu)));
;// CONCATENATED MODULE: ./components/partials/header/partials/main-menu.jsx

var main_menu_jsx = (external_react_default()).createElement;



function MainMenu() {
  const router = (0,router_.useRouter)();
  let path = router.asPath;
  let query = router.query;

  function showAllDemos(e) {
    let demoItems = document.querySelectorAll('.demo-item.hidden');

    for (let i = 0; i < demoItems.length; i++) {
      demoItems[i].classList.toggle('show');
    }

    document.querySelector('.view-all-demos').classList.toggle('disabled-hidden');
    e.preventDefault();
  }

  return main_menu_jsx("nav", {
    className: "main-nav"
  }, main_menu_jsx("ul", {
    className: "menu sf-arrows"
  }, main_menu_jsx("li", {
    className: `megamenu-container ${path === '/' ? 'active' : ''}`,
    id: "menu-home"
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/",
    className: "sf-with-ul"
  }, "Home"), main_menu_jsx("div", {
    className: "megamenu demo"
  }, main_menu_jsx("div", {
    className: "menu-col"
  }, main_menu_jsx("div", {
    className: "menu-title"
  }, "Choose your demo"), main_menu_jsx("div", {
    className: "demo-list"
  }, main_menu_jsx("div", {
    className: "demo-item"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-1`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/1.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "01 - furniture store"))), main_menu_jsx("div", {
    className: "demo-item"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-2`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/2.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "02 - furniture store"))), main_menu_jsx("div", {
    className: "demo-item"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-3`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/3.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "03 - electronic store"))), main_menu_jsx("div", {
    className: "demo-item"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-4`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/4.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "04 - electronic store"))), main_menu_jsx("div", {
    className: "demo-item"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-5`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/5.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "05 - fashion store"))), main_menu_jsx("div", {
    className: "demo-item"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-6`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/6.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "06 - fashion store"))), main_menu_jsx("div", {
    className: "demo-item"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-7`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/7.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "07 - fashion store"))), main_menu_jsx("div", {
    className: "demo-item"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-8`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/8.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "08 - fashion store"))), main_menu_jsx("div", {
    className: "demo-item"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-9`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/9.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "09 - fashion store"))), main_menu_jsx("div", {
    className: "demo-item"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-10`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/10.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "10 - shoes store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-11`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/11.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "11 - furniture simple store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-12`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/12.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "12 - fashion simple store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-13`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/13.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "13 - market"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-14`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/14.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "14 - market fullwidth"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-15`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/15.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "15 - lookbook 1"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-16`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/16.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "16 - lookbook 2"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-17`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/17.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "17 - fashion store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-18`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/18.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "18 - fashion store (with sidebar)"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-19`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/19.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "19 - games store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-20`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/20.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "20 - book store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-21`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/21.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "21 - sport store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-22`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/22.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "22 - tools store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-23`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/23.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "23 - fashion left navigation store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-24`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/24.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "24 - extreme sport store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-25`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/25.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "25 - jewelry store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-26`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/26.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "26 - market store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-27`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/27.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "27 - fashion store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-28`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/28.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "28 - food market store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-29`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/29.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "29 - t-shirts store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-30`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/30.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "30 - headphones store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-31`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/31.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "31 - yoga store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-32`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/32.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "32 - sunglasses store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-33`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/33.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "33 - cosmetics store"))), main_menu_jsx("div", {
    className: "demo-item hidden"
  }, main_menu_jsx("a", {
    href: `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}demo-34`
  }, main_menu_jsx("span", {
    className: "demo-bg",
    style: {
      backgroundImage: "url( 'images/menu/demos/34.jpg' )"
    }
  }), main_menu_jsx("span", {
    className: "demo-title"
  }, "34 - car parts")))), main_menu_jsx("div", {
    className: "megamenu-action text-center"
  }, main_menu_jsx("a", {
    href: "#",
    className: "btn btn-outline-primary-2 view-all-demos",
    onClick: showAllDemos
  }, main_menu_jsx("span", null, "View All Demos"), main_menu_jsx("i", {
    className: "icon-long-arrow-right"
  })))))), main_menu_jsx("li", {
    className: path.indexOf("/shop") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "sf-with-ul",
    scroll: false
  }, "Shop"), main_menu_jsx("div", {
    className: "megamenu megamenu-md"
  }, main_menu_jsx("div", {
    className: "row no-gutters"
  }, main_menu_jsx("div", {
    className: "col-md-8"
  }, main_menu_jsx("div", {
    className: "menu-col"
  }, main_menu_jsx("div", {
    className: "row"
  }, main_menu_jsx("div", {
    className: "col-md-6"
  }, main_menu_jsx("div", {
    className: "menu-title"
  }, "Shop with sidebar"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == 'list' ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    scroll: false
  }, "Shop List")), main_menu_jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == '2cols' ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/2cols",
    scroll: false
  }, "Shop Grid 2 Columns")), main_menu_jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == '3cols' ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/3cols",
    scroll: false
  }, "Shop Grid 3 Columns")), main_menu_jsx("li", {
    className: path.indexOf("shop/sidebar") > -1 && query.type == '4cols' ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/4cols",
    scroll: false
  }, "Shop Grid 4 Columns")), main_menu_jsx("li", {
    className: path.indexOf("shop/market") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/market"
  }, main_menu_jsx("span", null, "Shop Market", main_menu_jsx("span", {
    className: "tip tip-new"
  }, "New"))))), main_menu_jsx("div", {
    className: "menu-title"
  }, "Shop no sidebar"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("shop/nosidebar") > -1 && query.type == 'boxed' ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/nosidebar/boxed",
    scroll: false
  }, main_menu_jsx("span", null, "Shop Boxed No Sidebar", main_menu_jsx("span", {
    className: "tip tip-hot"
  }, "Hot")))), main_menu_jsx("li", {
    className: path.indexOf("shop/nosidebar") > -1 && query.type == 'fullwidth' ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/nosidebar/fullwidth",
    scroll: false
  }, "Shop Fullwidth No Sidebar")))), main_menu_jsx("div", {
    className: "col-md-6"
  }, main_menu_jsx("div", {
    className: "menu-title"
  }, "Product Category"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("shop/category/boxed") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/category/boxed",
    scroll: false
  }, "Product Category Boxed")), main_menu_jsx("li", {
    className: path.indexOf("shop/category/fullwidth") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/category/fullwidth",
    scroll: false
  }, main_menu_jsx("span", null, "Product Category Fullwidth", main_menu_jsx("span", {
    className: "tip tip-new"
  }, "New"))))), main_menu_jsx("div", {
    className: "menu-title"
  }, "Shop Pages"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("shop/cart") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/cart"
  }, "Cart")), main_menu_jsx("li", {
    className: path.indexOf("shop/checkout") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/checkout"
  }, "Checkout")), main_menu_jsx("li", {
    className: path.indexOf("shop/wishlist") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/wishlist"
  }, "Wishlist")), main_menu_jsx("li", {
    className: path.indexOf("shop/dashboard") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/dashboard"
  }, "My Account")), main_menu_jsx("li", {
    className: path.indexOf("#Lookbook") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "#"
  }, "Lookbook"))))))), main_menu_jsx("div", {
    className: "col-md-4"
  }, main_menu_jsx("div", {
    className: "banner banner-overlay"
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "banner banner-menu"
  }, main_menu_jsx("img", {
    src: "images/menu/banner-1.jpg",
    alt: "Banner"
  }), main_menu_jsx("div", {
    className: "banner-content banner-content-top"
  }, main_menu_jsx("div", {
    className: "banner-title text-white"
  }, "Last ", main_menu_jsx("br", null), "Chance", main_menu_jsx("br", null), main_menu_jsx("span", null, main_menu_jsx("strong", null, "Sale")))))))))), main_menu_jsx("li", {
    className: path.indexOf("product/") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    className: "sf-with-ul"
  }, "Product"), main_menu_jsx("div", {
    className: "megamenu megamenu-sm"
  }, main_menu_jsx("div", {
    className: "row no-gutters"
  }, main_menu_jsx("div", {
    className: "col-md-6"
  }, main_menu_jsx("div", {
    className: "menu-col"
  }, main_menu_jsx("div", {
    className: "menu-title"
  }, "Product Details"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("product/default") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress"
  }, "Default")), main_menu_jsx("li", {
    className: path.indexOf("product/centered") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/product/centered/beige-ring-handle-circle-cross-body-bag"
  }, "Centered")), main_menu_jsx("li", {
    className: path.indexOf("product/extended") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/product/extended/yellow-tie-strap-block-heel-sandals"
  }, main_menu_jsx("span", null, "Extended Info", main_menu_jsx("span", {
    className: "tip tip-new"
  }, "New")))), main_menu_jsx("li", {
    className: path.indexOf("product/gallery") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/product/gallery/beige-metal-hoop-tote-bag"
  }, "Gallery")), main_menu_jsx("li", {
    className: path.indexOf("product/sticky") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/product/sticky/brown-faux-fur-longline-coat"
  }, "Sticky Info")), main_menu_jsx("li", {
    className: path.indexOf("product/sidebar") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/product/sidebar/beige-v-neck-button-cardigan"
  }, "Boxed With Sidebar")), main_menu_jsx("li", {
    className: path.indexOf("product/fullwidth") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/product/fullwidth/black-faux-leather-chain-trim-sandals"
  }, "Full Width")), main_menu_jsx("li", {
    className: path.indexOf("product/masonry") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/product/masonry/black-denim-dungaree-dress"
  }, "Masonry Sticky Info"))))), main_menu_jsx("div", {
    className: "col-md-6"
  }, main_menu_jsx("div", {
    className: "banner banner-overlay"
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/product/centered/dark-yellow-lace-cut-out-swing-dress"
  }, main_menu_jsx("img", {
    src: "images/menu/banner-2.jpg",
    alt: "Banner"
  }), main_menu_jsx("div", {
    className: "banner-content banner-content-bottom"
  }, main_menu_jsx("div", {
    className: "banner-title text-white"
  }, "New Trends", main_menu_jsx("br", null), main_menu_jsx("span", null, main_menu_jsx("strong", null, "spring ", new Date().getFullYear())))))))))), main_menu_jsx("li", {
    className: path.indexOf("pages") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "#",
    className: "sf-with-ul"
  }, "Pages"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("pages/about") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/pages/about",
    className: "sf-with-ul"
  }, "About"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("pages/about") > -1 && path.indexOf("pages/about-2") === -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/pages/about"
  }, "About 01")), main_menu_jsx("li", {
    className: path.indexOf("pages/about-2") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/pages/about-2"
  }, "About 02")))), main_menu_jsx("li", {
    className: path.indexOf("pages/contact") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/pages/contact",
    className: "sf-with-ul"
  }, "Contact"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("pages/contact") > -1 && path.indexOf("pages/contact-2") === -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/pages/contact"
  }, "Contact 01")), main_menu_jsx("li", {
    className: path.indexOf("pages/contact-2") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/pages/contact-2"
  }, "Contact 02")))), main_menu_jsx("li", {
    className: path.indexOf("pages/login") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/pages/login"
  }, "Login")), main_menu_jsx("li", {
    className: path.indexOf("pages/faq") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/pages/faq"
  }, "FAQs")), main_menu_jsx("li", {
    className: path.indexOf("404") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/404"
  }, "Error 404")), main_menu_jsx("li", {
    className: path.indexOf("pages/coming-soon") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/pages/coming-soon"
  }, "Coming Soon")))), main_menu_jsx("li", {
    className: path.indexOf("blog/") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/classic",
    className: "sf-with-ul"
  }, "Blog"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("blog/classic") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/classic"
  }, "Classic")), main_menu_jsx("li", {
    className: path.indexOf("blog/listing") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/listing"
  }, "Listing")), main_menu_jsx("li", {
    className: path.indexOf("blog/grid") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/grid/2cols",
    className: "sf-with-ul"
  }, "Grid"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("blog/grid/2cols") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/grid/2cols"
  }, "Grid 2 columns")), main_menu_jsx("li", {
    className: path.indexOf("blog/grid/3cols") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/grid/3cols"
  }, "Grid 3 columns")), main_menu_jsx("li", {
    className: path.indexOf("blog/grid/4cols") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/grid/4cols"
  }, "Grid 4 columns")), main_menu_jsx("li", {
    className: path.indexOf("blog/grid/sidebar") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/grid/sidebar"
  }, "Grid sidebar")))), main_menu_jsx("li", {
    className: path.indexOf("blog/masonry") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/masonry/2cols",
    className: "sf-with-ul"
  }, "Masonry"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("blog/masonry/2cols") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/masonry/2cols"
  }, "Masonry 2 columns")), main_menu_jsx("li", {
    className: path.indexOf("blog/masonry/3cols") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/masonry/3cols"
  }, "Masonry 3 columns")), main_menu_jsx("li", {
    className: path.indexOf("blog/masonry/4cols") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/masonry/4cols"
  }, "Masonry 4 columns")), main_menu_jsx("li", {
    className: path.indexOf("blog/masonry/sidebar") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/masonry/sidebar"
  }, "Masonry sidebar")))), main_menu_jsx("li", {
    className: path.indexOf("blog/mask") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/mask/grid",
    className: "sf-with-ul"
  }, "Mask"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("blog/mask/grid") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/mask/grid"
  }, "Blog Mask Grid")), main_menu_jsx("li", {
    className: path.indexOf("blog/mask/masonry") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/mask/masonry"
  }, "Blog Mask Masonry")))), main_menu_jsx("li", {
    className: path.indexOf("blog/single") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/single/default/cras-ornare-tristique-elit.",
    className: "sf-with-ul"
  }, "Single Post"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("blog/single/default") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/single/default/cras-ornare-tristique-elit."
  }, "Default with sidebar")), main_menu_jsx("li", {
    className: path.indexOf("blog/single/fullwidth") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/single/fullwidth/fusce-pellentesque-suscipit."
  }, "Fullwidth no sidebar")), main_menu_jsx("li", {
    className: path.indexOf("blog/single/sidebar") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/blog/single/sidebar/utaliquam-sollicitzdvudin-leo"
  }, "Fullwidth with sidebar")))))), main_menu_jsx("li", {
    className: path.indexOf("element") > -1 ? 'active' : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements",
    className: "sf-with-ul"
  }, "Elements"), main_menu_jsx("ul", null, main_menu_jsx("li", {
    className: path.indexOf("elements/products") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/products"
  }, "Products")), main_menu_jsx("li", {
    className: path.indexOf("elements/typography") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/typography"
  }, "Typography")), main_menu_jsx("li", {
    className: path.indexOf("elements/titles") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/titles"
  }, "Titles")), main_menu_jsx("li", {
    className: path.indexOf("elements/banners") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/banners"
  }, "Banners")), main_menu_jsx("li", {
    className: path.indexOf("elements/categories") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/categories"
  }, "Product Category")), main_menu_jsx("li", {
    className: path.indexOf("elements/video-banners") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/video-banners"
  }, "Video Banners")), main_menu_jsx("li", {
    className: path.indexOf("elements/buttons") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/buttons"
  }, "Buttons")), main_menu_jsx("li", {
    className: path.indexOf("elements/accordions") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/accordions"
  }, "Accordions")), main_menu_jsx("li", {
    className: path.indexOf("elements/tabs") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/tabs"
  }, "Tabs")), main_menu_jsx("li", {
    className: path.indexOf("elements/testimonials") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/testimonials"
  }, "Testimonials")), main_menu_jsx("li", {
    className: path.indexOf("elements/blog-posts") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/blog-posts"
  }, "Blog Posts")), main_menu_jsx("li", {
    className: path.indexOf("elements/cta") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/cta"
  }, "Call to Action")), main_menu_jsx("li", {
    className: path.indexOf("elements/icon-boxes") > -1 ? "active" : ''
  }, main_menu_jsx(alink/* default */.Z, {
    href: "/elements/icon-boxes"
  }, "Icon Boxes"))))));
}

/* harmony default export */ var main_menu = (MainMenu);
;// CONCATENATED MODULE: ./components/features/sticky-header.jsx

var sticky_header_jsx = (external_react_default()).createElement;



function StickyHeader(props) {
  const {
    top = 210
  } = props;
  const router = (0,router_.useRouter)("");
  const ref = (0,external_react_.useRef)(null);
  const {
    0: height,
    1: setHeight
  } = (0,external_react_.useState)('auto');
  (0,external_react_.useEffect)(() => {
    router.events.on('hashChangeComplete', initSticky);
    scrollHandler();
    window.addEventListener('scroll', scrollHandler, {
      passive: true
    });
    window.addEventListener('resize', resizeHandler, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  function initSticky() {
    let stickyContent = ref.current.children[0];
    setHeight(stickyContent.offsetHeight + 'px');
  }

  function scrollHandler() {
    let stickyContent = ref.current.children[0];

    if (window.pageYOffset > top) {
      if (!stickyContent.classList.contains('fixed')) {
        stickyContent.classList.add('fixed');
      }
    } else if (stickyContent.classList.contains('fixed')) {
      stickyContent.classList.remove('fixed');
    } else {
      setHeight(stickyContent.offsetHeight + 'px');
    }
  }

  function resizeHandler() {
    let stickyContent = ref.current.children[0];
    setHeight(stickyContent.offsetHeight + 'px');
    scrollHandler();
  }

  return sticky_header_jsx("div", {
    ref: ref,
    className: "sticky-wrapper",
    style: {
      height: height
    }
  }, props.children);
}

/* harmony default export */ var sticky_header = (StickyHeader);
;// CONCATENATED MODULE: ./components/partials/header/header.jsx
var header_jsx = (external_react_default()).createElement;












function Header() {
  const router = (0,router_.useRouter)();
  const {
    0: containerClass,
    1: setContainerClass
  } = (0,external_react_.useState)('container');

  function openMobileMenu() {
    document.querySelector('body').classList.add('mmenu-active');
  }

  (0,external_react_.useEffect)(() => {
    setContainerClass(router.asPath.includes('fullwidth') ? 'container-fluid' : 'container');
  }, [router.asPath]);
  return header_jsx("header", {
    className: "header header-7"
  }, header_jsx("div", {
    className: "header-top"
  }, header_jsx("div", {
    className: "container-fluid"
  }, header_jsx("div", {
    className: "header-left"
  }, header_jsx("div", {
    className: "header-dropdown"
  }, header_jsx(alink/* default */.Z, {
    href: "#"
  }, "Usd"), header_jsx("div", {
    className: "header-menu"
  }, header_jsx("ul", null, header_jsx("li", null, header_jsx(alink/* default */.Z, {
    href: "#"
  }, "Eur")), header_jsx("li", null, header_jsx(alink/* default */.Z, {
    href: "#"
  }, "Usd"))))), header_jsx("div", {
    className: "header-dropdown"
  }, header_jsx(alink/* default */.Z, {
    href: "#"
  }, "Eng"), header_jsx("div", {
    className: "header-menu"
  }, header_jsx("ul", null, header_jsx("li", null, header_jsx(alink/* default */.Z, {
    href: "#"
  }, "English")), header_jsx("li", null, header_jsx(alink/* default */.Z, {
    href: "#"
  }, "French")), header_jsx("li", null, header_jsx(alink/* default */.Z, {
    href: "#"
  }, "Spanish")))))), header_jsx("div", {
    className: "header-right"
  }, header_jsx("ul", {
    className: "top-menu"
  }, header_jsx("li", null, header_jsx(alink/* default */.Z, {
    href: "#"
  }, "Links"), header_jsx("ul", null, header_jsx("li", null, header_jsx("a", {
    href: "tel:#"
  }, header_jsx("i", {
    className: "icon-phone"
  }), "Call: +0123 456 789")), header_jsx(wishlist_menu, null), header_jsx("li", null, header_jsx(alink/* default */.Z, {
    href: "/pages/about"
  }, "About Us")), header_jsx("li", null, header_jsx(alink/* default */.Z, {
    href: "/pages/contact"
  }, "Contact Us")), header_jsx(LoginModal, null))))))), header_jsx(sticky_header, null, header_jsx("div", {
    className: "header-middle sticky-header"
  }, header_jsx("div", {
    className: "container-fluid"
  }, header_jsx("div", {
    className: "header-left"
  }, header_jsx("button", {
    className: "mobile-menu-toggler",
    onClick: openMobileMenu
  }, header_jsx("span", {
    className: "sr-only"
  }, "Toggle mobile menu"), header_jsx("i", {
    className: "icon-bars"
  })), header_jsx(alink/* default */.Z, {
    href: "/",
    className: "logo"
  }, header_jsx("img", {
    src: "images/logo.png",
    alt: "Molla Logo",
    width: 105,
    height: 25
  })), header_jsx(main_menu, null)), header_jsx("div", {
    className: "header-right"
  }, header_jsx(header_search, null), header_jsx(cart_menu, null))))));
}

/* harmony default export */ var header = (Header);
;// CONCATENATED MODULE: ./components/partials/footer/footer.jsx
var footer_jsx = (external_react_default()).createElement;




function Footer() {
  const router = (0,router_.useRouter)("");
  const {
    0: isBottomSticky,
    1: setIsBottomSticky
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    handleBottomSticky();
  }, [router.asPath]);
  (0,external_react_.useEffect)(() => {
    window.addEventListener('resize', handleBottomSticky, {
      passive: true
    });
    return () => {
      window.removeEventListener('resize', handleBottomSticky);
    };
  }, []);

  function handleBottomSticky() {
    setIsBottomSticky(router.pathname.includes('product/default') && window.innerWidth > 991);
  }

  return footer_jsx("footer", {
    className: "footer footer-2"
  }, footer_jsx("div", {
    className: "footer-middle"
  }, footer_jsx("div", {
    className: "container-fluid"
  }, footer_jsx("div", {
    className: "row"
  }, footer_jsx("div", {
    className: "col-sm-12 col-lg-4"
  }, footer_jsx("div", {
    className: "widget widget-about"
  }, footer_jsx(alink/* default */.Z, {
    href: "/"
  }, footer_jsx("img", {
    src: "images/logo-footer.png",
    className: "footer-logo",
    alt: "Footer Logo",
    width: "105",
    height: "25"
  })), footer_jsx("p", null, "Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus."), footer_jsx("div", {
    className: "widget-about-info"
  }, footer_jsx("div", {
    className: "row"
  }, footer_jsx("div", {
    className: "col-sm-6 col-md-4"
  }, footer_jsx("span", {
    className: "widget-about-title"
  }, "Got Question? Call us 24/7"), footer_jsx("a", {
    href: "tel:123456789"
  }, "+0123 456 789")), footer_jsx("div", {
    className: "col-sm-6 col-md-8"
  }, footer_jsx("span", {
    className: "widget-about-title payment"
  }, "Payment Method"), footer_jsx("img", {
    src: "images/payments.png",
    alt: "Payment methods",
    width: "272",
    height: "20"
  })))))), footer_jsx("div", {
    className: "col-sm-4 col-lg-2"
  }, footer_jsx("div", {
    className: "widget"
  }, footer_jsx("h4", {
    className: "widget-title"
  }, "Useful links"), footer_jsx("ul", {
    className: "widget-list"
  }, footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "/pages/about"
  }, "About Molla")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "How to shop on Molla")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "FAQ")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "/pages/contact"
  }, "Contact us")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "/pages/login"
  }, "Log in"))))), footer_jsx("div", {
    className: "col-sm-4 col-lg-2"
  }, footer_jsx("div", {
    className: "widget"
  }, footer_jsx("h4", {
    className: "widget-title"
  }, "Customer Service"), footer_jsx("ul", {
    className: "widget-list"
  }, footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "Payment Methods")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "Money-back guarantee!")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "Returns")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "Shipping")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "Terms and conditions")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "Privacy Policy"))))), footer_jsx("div", {
    className: "col-sm-4 col-lg-2"
  }, footer_jsx("div", {
    className: "widget"
  }, footer_jsx("h4", {
    className: "widget-title"
  }, "My Account"), footer_jsx("ul", {
    className: "widget-list"
  }, footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "Sign In")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "/shop/cart"
  }, "View Cart")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "/shop/wishlist"
  }, "My Wishlist")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "/shop/dashboard"
  }, "Track My Order")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "Help"))))), footer_jsx("div", {
    className: "col-sm-6 col-lg-2"
  }, footer_jsx("div", {
    className: "widget widget-newsletter"
  }, footer_jsx("h4", {
    className: "widget-title"
  }, "Sign up to newsletter"), footer_jsx("p", null, "Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan."), footer_jsx("form", {
    action: "#"
  }, footer_jsx("div", {
    className: "input-group"
  }, footer_jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "Enter your Email Address",
    "aria-label": "Email Adress",
    required: true
  }), footer_jsx("div", {
    className: "input-group-append"
  }, footer_jsx("button", {
    className: "btn btn-dark",
    type: "submit"
  }, footer_jsx("i", {
    className: "icon-long-arrow-right"
  })))))))))), footer_jsx("div", {
    className: "footer-bottom"
  }, footer_jsx("div", {
    className: "container-fluid"
  }, footer_jsx("p", {
    className: "footer-copyright"
  }, "Copyright \xA9 ", new Date().getFullYear(), " Molla Store. All Rights Reserved."), footer_jsx("ul", {
    className: "footer-menu"
  }, footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "Terms Of Use")), footer_jsx("li", null, footer_jsx(alink/* default */.Z, {
    href: "#"
  }, "Privacy Policy"))), footer_jsx("div", {
    className: "social-icons social-icons-color"
  }, footer_jsx("span", {
    className: "social-label"
  }, "Social Media"), footer_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon social-facebook",
    title: "Facebook"
  }, footer_jsx("i", {
    className: "icon-facebook-f"
  })), footer_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon social-twitter",
    title: "Twitter",
    target: "_blank"
  }, footer_jsx("i", {
    className: "icon-twitter"
  })), footer_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon social-instagram",
    title: "Instagram"
  }, footer_jsx("i", {
    className: "icon-instagram"
  })), footer_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon social-youtube",
    title: "Youtube",
    target: "_blank"
  }, footer_jsx("i", {
    className: "icon-youtube"
  })), footer_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon social-pinterest",
    title: "Pinterest"
  }, footer_jsx("i", {
    className: "icon-pinterest"
  }))))), isBottomSticky ? footer_jsx("div", {
    className: "mb-10"
  }) : "");
}

/* harmony default export */ var footer = (/*#__PURE__*/external_react_default().memo(Footer));
;// CONCATENATED MODULE: ./components/features/modals/video-modal.jsx
var video_modal_jsx = (external_react_default()).createElement;




const video_modal_customStyles = {
  content: {
    top: '50%',
    transform: 'translateY(-50%)'
  },
  overlay: {
    backgroundColor: 'rgba(77,77,77,0.6)',
    zIndex: '9000'
  }
};
external_react_modal_default().setAppElement('body');

function VideoModal(props) {
  const {
    showModal
  } = props;

  const closeHandler = () => {
    document.querySelector("#video-modal").classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    setTimeout(() => {
      props.hideVideo();
    }, 350);
  };

  return video_modal_jsx((external_react_modal_default()), {
    isOpen: showModal,
    onRequestClose: closeHandler,
    style: video_modal_customStyles,
    contentLabel: "Video Modal",
    className: "video-modal p-3",
    shouldReturnFocusAfterClose: false,
    id: "video-modal"
  }, video_modal_jsx("button", {
    type: "button",
    className: "close",
    onClick: closeHandler
  }, video_modal_jsx("span", {
    "aria-hidden": "true"
  }, video_modal_jsx("i", {
    className: "icon-close"
  }))), video_modal_jsx("iframe", {
    className: "mfp-iframe modal-content",
    src: "//www.youtube.com/embed/vBPgmASQ1A0?autoplay=1",
    frameBorder: "0",
    allowFullScreen: "",
    title: "youtube"
  }));
}

const video_modal_mapStateToProps = state => {
  return {
    showModal: state.demo.videoShow
  };
};
/* harmony default export */ var video_modal = ((0,external_react_redux_.connect)(video_modal_mapStateToProps, demo/* actions */.Nw)(VideoModal));
// EXTERNAL MODULE: external "react-image-magnifiers"
var external_react_image_magnifiers_ = __webpack_require__(7773);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: ./components/partials/product/details/detail-one.jsx
var detail_one = __webpack_require__(1547);
;// CONCATENATED MODULE: ./components/features/modals/quickview-modal.jsx
var quickview_modal_jsx = (external_react_default()).createElement;

function quickview_modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quickview_modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quickview_modal_ownKeys(Object(source), true).forEach(function (key) { quickview_modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quickview_modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function quickview_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const quickview_modal_customStyles = {
  overlay: {
    backgroundColor: 'rgba(51,51,51,0.6)',
    zIndex: '9000'
  }
};
external_react_modal_default().setAppElement('body');

function QuickViewModal(props) {
  const {
    slug
  } = props;

  if (!slug) {
    return quickview_modal_jsx("div", null);
  }

  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_PRODUCT */.N4, {
    variables: {
      slug,
      onlyData: true
    }
  });
  const product = data && data.product;
  const router = (0,router_.useRouter)();
  const {
    0: carouselRef,
    1: setCarouselRef
  } = (0,external_react_.useState)(null);
  const events = {
    onTranslate: function (e) {
      let items = document.querySelectorAll('.quickView-content .product-gallery-item');
      document.querySelector('.quickView-content .product-gallery-item.active').classList.remove('active');
      items[e.item.index].classList.add('active');
    }
  };
  (0,external_react_.useEffect)(() => {
    router.events.on('routeChangeStart', closeModal);
    carouselRef && carouselRef.current && carouselRef.current.goTo(0);
    return () => {
      router.events.off('routeChangeStart', closeModal);
    };
  }, []);

  function closeModal() {
    if (document.querySelector(".ReactModal__Content")) {
      document.querySelector(".ReactModal__Content").classList.remove("ReactModal__Content--after-open");
    }

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    setTimeout(() => {
      props.hideQuick();
    }, 250);
  }

  function changeBgImage(e, index) {
    document.querySelector('.quickView-content .product-gallery-item.active').classList.remove('active');
    e.currentTarget.classList.add('active');
    carouselRef.current.goTo(index);
  }

  if (!slug || error) {
    return quickview_modal_jsx("div", null);
  }

  return quickview_modal_jsx((external_react_default()).Fragment, null, quickview_modal_jsx((external_react_modal_default()), {
    isOpen: props.modalShow,
    onRequestClose: closeModal,
    className: "container quickView-container",
    overlayClassName: "d-flex align-items-center justify-content-center",
    shouldReturnFocusAfterClose: false,
    closeTimeoutMS: 100,
    contentLabel: "QuickView",
    style: quickview_modal_customStyles,
    id: "product-quickview"
  }, quickview_modal_jsx("div", {
    className: "modal-content"
  }, quickview_modal_jsx("div", {
    className: "quickView-content horizontal skeleton-body"
  }, quickview_modal_jsx("div", {
    className: `row skel-pro-single skel-quickview mb-0 ${loading ? '' : 'loaded'}`
  }, quickview_modal_jsx("div", {
    className: "col-lg-6 p-0 pr-lg-2 mb-2 mb-lg-0"
  }, quickview_modal_jsx("div", {
    className: "skel-product-gallery"
  }), !loading ? quickview_modal_jsx((external_react_default()).Fragment, null, quickview_modal_jsx("div", {
    className: "product-lg mb-1 position-relative"
  }, product.new ? quickview_modal_jsx("span", {
    className: "product-label label-new"
  }, "New") : "", product.sale_price ? quickview_modal_jsx("span", {
    className: "product-label label-sale"
  }, "Sale") : "", product.top ? quickview_modal_jsx("span", {
    className: "product-label label-top"
  }, "Top") : "", product.stock == 0 ? quickview_modal_jsx("span", {
    className: "product-label label-out"
  }, "Out of Stock") : "", quickview_modal_jsx(owl_carousel/* default */.Z, {
    adClass: "product-gallery-carousel owl-full owl-nav-dark cols-1 cols-md-2 cols-lg-3",
    onChangeRef: setCarouselRef,
    events: events,
    options: {
      'dots': false,
      'nav': false
    }
  }, product[0].pictures.map((item, index) => quickview_modal_jsx(external_react_image_magnifiers_.Magnifier, {
    imageSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + item.url,
    imageAlt: "product",
    largeImageSrc: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + item.url // Optional
    ,
    dragToMove: false,
    mouseActivation: "hover",
    cursorStyleActive: "crosshair",
    className: "product-gallery-image",
    style: {
      paddingTop: `${product[0].pictures[0].height / product[0].pictures[0].width * 100}%`
    },
    key: "gallery-" + index
  })))), quickview_modal_jsx("div", {
    className: "product-sm row px-2",
    id: "owl-dots"
  }, product[0].pictures.map((item, index) => quickview_modal_jsx("button", {
    className: `product-gallery-item mb-0 ${0 === index ? 'active' : ''}`,
    key: product.id + '-' + index,
    onClick: e => changeBgImage(e, index)
  }, quickview_modal_jsx("div", {
    className: "lazy-media"
  }, quickview_modal_jsx("figure", {
    className: "mb-0"
  }, quickview_modal_jsx("div", {
    className: "lazy-overlay"
  }), quickview_modal_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "Thumbnail",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product[0].pictures[index].url,
    width: "100%",
    height: "auto",
    className: "d-block"
  }))))))) : ""), quickview_modal_jsx("div", {
    className: "col-lg-6 quickview-desc pl-0 pl-lg-4 pr-0"
  }, quickview_modal_jsx("div", {
    className: "entry-summary row"
  }, quickview_modal_jsx("div", {
    className: "col-md-12"
  }, quickview_modal_jsx("div", {
    className: "entry-summary1 mt-2 mt-md-0"
  })), quickview_modal_jsx("div", {
    className: "col-md-12"
  }, quickview_modal_jsx("div", {
    className: "entry-summary2"
  }))), !loading ? quickview_modal_jsx(detail_one/* default */.Z, {
    product: product
  }) : "")))), quickview_modal_jsx("button", {
    title: "Close (Esc)",
    type: "button",
    className: "mfp-close",
    onClick: closeModal
  }, quickview_modal_jsx("span", null, "\xD7"))));
}

const quickview_modal_mapStateToProps = state => {
  return {
    slug: state.demo.single,
    modalShow: state.demo.quickShow
  };
};

/* harmony default export */ var quickview_modal = ((0,apollo/* default */.Z)({
  ssr: true
})((0,external_react_redux_.connect)(quickview_modal_mapStateToProps, quickview_modal_objectSpread({}, demo/* actions */.Nw))(QuickViewModal)));
// EXTERNAL MODULE: external "react-slide-toggle"
var external_react_slide_toggle_ = __webpack_require__(3920);
var external_react_slide_toggle_default = /*#__PURE__*/__webpack_require__.n(external_react_slide_toggle_);
;// CONCATENATED MODULE: ./components/features/mobile-menu.jsx
var mobile_menu_jsx = (external_react_default()).createElement;





function MobileMenu() {
  const router = (0,router_.useRouter)();
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    router.events.on('routeChangeComplete', hideMobileMenu);
  }, []);

  function hideMobileMenu() {
    document.querySelector('body').classList.remove('mmenu-active');
  }

  function onSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop/sidebar/list',
      query: {
        searchTerm: searchTerm,
        category: ""
      }
    });
  }

  return mobile_menu_jsx("div", {
    className: "mobile-menu-container"
  }, mobile_menu_jsx("div", {
    className: "mobile-menu-wrapper"
  }, mobile_menu_jsx("span", {
    className: "mobile-menu-close",
    onClick: hideMobileMenu
  }, mobile_menu_jsx("i", {
    className: "icon-close"
  })), mobile_menu_jsx("form", {
    action: "#",
    method: "get",
    onSubmit: onSubmitSearchForm,
    className: "mobile-search"
  }, mobile_menu_jsx("label", {
    htmlFor: "mobile-search",
    className: "sr-only"
  }, "Search"), mobile_menu_jsx("input", {
    type: "text",
    className: "form-control",
    value: searchTerm,
    onChange: onSearchChange,
    name: "mobile-search",
    id: "mobile-search",
    placeholder: "Search product ...",
    required: true
  }), mobile_menu_jsx("button", {
    className: "btn btn-primary",
    type: "submit"
  }, mobile_menu_jsx("i", {
    className: "icon-search"
  }))), mobile_menu_jsx("nav", {
    className: "mobile-nav"
  }, mobile_menu_jsx("ul", {
    className: "mobile-menu"
  }, mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "/"
  }, "Home", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-1/",
    target: "_blank"
  }, "01 - furniture store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-2/",
    target: "_blank"
  }, "02 - furniture store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-3/",
    target: "_blank"
  }, "03 - electronic store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-4/",
    target: "_blank"
  }, "04 - electronic store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-5/",
    target: "_blank"
  }, "05 - fashion store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-6/",
    target: "_blank"
  }, "06 - fashion store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-7/",
    target: "_blank"
  }, "07 - fashion store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-8/",
    target: "_blank"
  }, "08 - fashion store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-9/",
    target: "_blank"
  }, "09 - fashion store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-10/",
    target: "_blank"
  }, "10 - shoes store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-11/",
    target: "_blank"
  }, "11 - furniture simple store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-12/",
    target: "_blank"
  }, "12 - fashion simple store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-13/",
    target: "_blank"
  }, "13 - market")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-14/",
    target: "_blank"
  }, "14 - market fullwidth")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-15/",
    target: "_blank"
  }, "15 - lookbook 1")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-16/",
    target: "_blank"
  }, "16 - lookbook 2")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-17/",
    target: "_blank"
  }, "17 - fashion store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-18/",
    target: "_blank"
  }, "18 - fashion store (with sidebar)")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-19/",
    target: "_blank"
  }, "19 - games store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-20/",
    target: "_blank"
  }, "20 - book store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-21/",
    target: "_blank"
  }, "21 - sport store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-22/",
    target: "_blank"
  }, "22 - tools store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-23/",
    target: "_blank"
  }, "23 - fashion left navigation store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-24/",
    target: "_blank"
  }, "24 - extreme sport store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-25/",
    target: "_blank"
  }, "25 - jewelry store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-26/",
    target: "_blank"
  }, "26 - market store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-27/",
    target: "_blank"
  }, "27 - fashion store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-28/",
    target: "_blank"
  }, "28 - food market store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-29/",
    target: "_blank"
  }, "29 - t-shirts store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-30/",
    target: "_blank"
  }, "30 - headphones store")), mobile_menu_jsx("li", null, mobile_menu_jsx("a", {
    href: "https://d-themes.com/react/molla/demo-31/",
    target: "_blank"
  }, "31 - yoga store"))))), mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "Shop", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "Shop List")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/2cols"
  }, "Shop Grid 2 Columns")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/3cols"
  }, "Shop Grid 3 Columns")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/4cols"
  }, "Shop Grid 4 Columns")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/market"
  }, mobile_menu_jsx("span", null, "Shop Market", mobile_menu_jsx("span", {
    className: "tip tip-new"
  }, "New")))), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/nosidebar/boxed"
  }, mobile_menu_jsx("span", null, "Shop Boxed No Sidebar", mobile_menu_jsx("span", {
    className: "tip tip-hot"
  }, "Hot")))), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/nosidebar/fullwidth"
  }, "Shop Fullwidth No Sidebar")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/category/boxed"
  }, "Product Category Boxed")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/category/fullwidth"
  }, mobile_menu_jsx("span", null, "Product Category Fullwidth", mobile_menu_jsx("span", {
    className: "tip tip-new"
  }, "New")))), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/cart"
  }, "Cart")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/checkout"
  }, "Checkout")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/wishlist"
  }, "Wishlist")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/shop/dashboard"
  }, "My Account")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "#"
  }, "Lookbook"))))), mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress",
    className: "sf-with-ul"
  }, "Product", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/product/default/dark-yellow-lace-cut-out-swing-dress"
  }, "Default")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/product/centered/beige-ring-handle-circle-cross-body-bag"
  }, "Centered")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/product/extended/yellow-tie-strap-block-heel-sandals"
  }, mobile_menu_jsx("span", null, "Extended Info", mobile_menu_jsx("span", {
    className: "tip tip-new"
  }, "New")))), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/product/gallery/beige-metal-hoop-tote-bag"
  }, "Gallery")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/product/sticky/brown-faux-fur-longline-coat"
  }, "Sticky Info")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/product/sidebar/beige-v-neck-button-cardigan"
  }, "Boxed With Sidebar")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/product/fullwidth/black-faux-leather-chain-trim-sandals"
  }, "Full Width")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/product/masonry/black-denim-dungaree-dress"
  }, "Masonry Sticky Info"))))), mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "#"
  }, "Pages", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "/pages/about",
    className: "sf-with-ul"
  }, "About ", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/pages/about"
  }, "About 01")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/pages/about-2"
  }, "About 02"))))), mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "/pages/contact",
    className: "sf-with-ul"
  }, "Contact ", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/pages/contact"
  }, "Contact 01")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/pages/contact-2"
  }, "Contact 02"))))), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/pages/login"
  }, "Login")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/pages/faq"
  }, "FAQs")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/pages/404"
  }, "Error 404")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/pages/coming-soon"
  }, "Coming Soon"))))), mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/classic"
  }, "Blog", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/classic"
  }, "Classic")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/listing"
  }, "Listing")), mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "#",
    className: "sf-with-ul"
  }, "Grid ", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/grid/2cols"
  }, "Grid 2 columns")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/grid/3cols"
  }, "Grid 3 columns")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/grid/4cols"
  }, "Grid 4 columns")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/grid/sidebar"
  }, "Grid sidebar"))))), mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "#",
    className: "sf-with-ul"
  }, "Masonry ", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/masonry/2cols"
  }, "Masonry 2 columns")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/masonry/3cols"
  }, "Masonry 3 columns")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/masonry/4cols"
  }, "Masonry 4 columns")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/masonry/sidebar"
  }, "Masonry sidebar"))))), mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "#",
    className: "sf-with-ul"
  }, "Mask ", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/mask/grid"
  }, "Blog Mask Grid")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/mask/masonry"
  }, "Blog Mask Masonry"))))), mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/single/default/cras-ornare-tristique-elit.",
    className: "sf-with-ul"
  }, "Single Post ", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/single/default/cras-ornare-tristique-elit."
  }, "Default with sidebar")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/single/fullwidth/fusce-pellentesque-suscipit."
  }, "Fullwidth no sidebar")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/blog/single/sidebar/utaliquam-sollicitzdvudin-leo"
  }, "Fullwidth with sidebar")))))))), mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx("li", {
    className: toggleState.toLowerCase() == 'expanded' ? 'open' : ''
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements",
    className: "sf-with-ul"
  }, "Elements", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      onToggle(e);
      e.preventDefault();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/products"
  }, "Products")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/typography"
  }, "Typography")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/titles"
  }, "Titles")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/banners"
  }, "Banners")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/categories"
  }, "Product Category")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/video-banners"
  }, "Video Banners")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/buttons"
  }, "Buttons")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/accordions"
  }, "Accordions")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/tabs"
  }, "Tabs")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/testimonials"
  }, "Testimonials")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/blog-posts"
  }, "Blog Posts")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/cta"
  }, "Call to Action")), mobile_menu_jsx("li", null, mobile_menu_jsx(alink/* default */.Z, {
    href: "/elements/icon-boxes"
  }, "Icon Boxes"))))))), mobile_menu_jsx("div", {
    className: "social-icons"
  }, mobile_menu_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Facebook"
  }, mobile_menu_jsx("i", {
    className: "icon-facebook-f"
  })), mobile_menu_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Twitter"
  }, mobile_menu_jsx("i", {
    className: "icon-twitter"
  })), mobile_menu_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Instagram"
  }, mobile_menu_jsx("i", {
    className: "icon-instagram"
  })), mobile_menu_jsx(alink/* default */.Z, {
    href: "#",
    className: "social-icon",
    title: "Youtube"
  }, mobile_menu_jsx("i", {
    className: "icon-youtube"
  })))));
}

/* harmony default export */ var mobile_menu = (/*#__PURE__*/external_react_default().memo(MobileMenu));
;// CONCATENATED MODULE: ./components/layout.jsx

var layout_jsx = (external_react_default()).createElement;

function layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layout_ownKeys(Object(source), true).forEach(function (key) { layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function Layout({
  children,
  hideQuick,
  hideVideo
}) {
  const router = (0,router_.useRouter)("");
  let scrollTop;
  (0,external_react_.useEffect)(() => {
    if (router.pathname.includes('pages/coming-soon')) {
      document.querySelector("header").classList.add("d-none");
      document.querySelector("footer").classList.add("d-none");
    } else {
      document.querySelector("header").classList.remove("d-none");
      document.querySelector("footer").classList.remove("d-none");
    }
  }, [router.pathname]);
  (0,external_react_.useEffect)(() => {
    hideQuick();
    hideVideo();
    scrollTop = document.querySelector('#scroll-top');
    window.addEventListener('scroll', scrollHandler, false);
  }, []);

  function toScrollTop() {
    if ((0,utils/* isSafariBrowser */.fr)() || (0,utils/* isEdgeBrowser */.NA)()) {
      let pos = window.pageYOffset;
      let timerId = setInterval(() => {
        if (pos <= 0) clearInterval(timerId);
        window.scrollBy(0, -120);
        pos -= 120;
      }, 1);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  function scrollHandler() {
    if (window.pageYOffset >= 400) {
      scrollTop.classList.add('show');
    } else {
      scrollTop.classList.remove('show');
    }
  }

  function hideMobileMenu() {
    document.querySelector('body').classList.remove('mmenu-active');
  }

  return layout_jsx((external_react_default()).Fragment, null, layout_jsx("div", {
    className: "page-wrapper"
  }, layout_jsx(header, null), children, layout_jsx(footer, null)), layout_jsx("div", {
    className: "mobile-menu-overlay",
    onClick: hideMobileMenu
  }), layout_jsx("button", {
    id: "scroll-top",
    title: "Back to top",
    onClick: toScrollTop
  }, layout_jsx("i", {
    className: "icon-arrow-up"
  })), layout_jsx(mobile_menu, null), layout_jsx(external_react_toastify_.ToastContainer, {
    autoClose: 3000,
    duration: 300,
    newestOnTo: true,
    className: "toast-container",
    position: "top-right",
    closeButton: false,
    hideProgressBar: true,
    newestOnTop: true,
    draggable: false
  }), layout_jsx(quickview_modal, null), layout_jsx(video_modal, null));
}

/* harmony default export */ var layout = ((0,external_react_redux_.connect)(null, layout_objectSpread({}, demo/* actions */.Nw))(Layout));
;// CONCATENATED MODULE: ./pages/_app.jsx

var _app_jsx = (external_react_default()).createElement;











const WrappedApp = ({
  Component,
  pageProps
}) => {
  const store = (0,external_react_redux_.useStore)();
  (0,external_react_.useEffect)(() => {
    if (store.getState().demo.current != process.env.NEXT_PUBLIC_DEMO) {
      store.dispatch(demo/* actions.refreshStore */.Nw.refreshStore(process.env.NEXT_PUBLIC_DEMO));
    }
  }, []);
  return _app_jsx(external_react_redux_.Provider, {
    store: store
  }, _app_jsx(react_namespaceObject.PersistGate, {
    persistor: store.__persistor,
    loading: _app_jsx("div", {
      className: "loading-overlay"
    }, _app_jsx("div", {
      className: "bounce-loader"
    }, _app_jsx("div", {
      className: "bounce1"
    }), _app_jsx("div", {
      className: "bounce2"
    }), _app_jsx("div", {
      className: "bounce3"
    })))
  }, _app_jsx((external_react_helmet_default()), null, _app_jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }), _app_jsx("meta", {
    name: "keywords",
    content: "Molla React Template"
  }), _app_jsx("meta", {
    name: "description",
    content: "Molla \u2013  eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites."
  }), _app_jsx("meta", {
    name: "author",
    content: "d-themes"
  }), _app_jsx("meta", {
    name: "apple-mobile-web-app-title",
    content: "Molla"
  }), _app_jsx("meta", {
    name: "application-name",
    content: "Molla React eCommerce Template"
  }), _app_jsx("meta", {
    name: "msapplication-TileColor",
    content: "#cc9966"
  }), _app_jsx("meta", {
    name: "msapplication-config",
    content: "images/icons/browserconfig.xml"
  }), _app_jsx("meta", {
    name: "theme-color",
    content: "#ffffff"
  }), _app_jsx("title", null, "Molla - React eCommerce Template"), _app_jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "images/icons/apple-touch-icon.png"
  }), _app_jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "images/icons/favicon-32x32.png"
  }), _app_jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "images/icons/favicon-16x16.png"
  }), _app_jsx("link", {
    rel: "manifest",
    href: "images/icons/site.webmanifest"
  }), _app_jsx("link", {
    rel: "mask-icon",
    href: "images/icons/safari-pinned-tab.svg",
    color: "#666666"
  }), _app_jsx("link", {
    rel: "shortcut icon",
    href: "images/icons/favicon.ico"
  })), _app_jsx(layout, null, _app_jsx(Component, pageProps))));
};

WrappedApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ var _app = (wrapper.withRedux(WrappedApp));

/***/ }),

/***/ 3326:
/***/ (function() {



/***/ }),

/***/ 7530:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ 806:
/***/ (function(module) {

"use strict";
module.exports = require("apollo-boost");;

/***/ }),

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 5766:
/***/ (function(module) {

"use strict";
module.exports = require("next-apollo");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 7773:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-magnifiers");;

/***/ }),

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ 9997:
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

/***/ }),

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ }),

/***/ 7659:
/***/ (function(module) {

"use strict";
module.exports = require("react-tabs");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 3643:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ 584:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ 5060:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,6442,2806,5708,9792,812,1547], function() { return __webpack_exec__(7715); });
module.exports = __webpack_exports__;

})();