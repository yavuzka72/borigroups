(function() {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 9685:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
;// CONCATENATED MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_namespaceObject = require("react-awesome-reveal");;
var external_react_awesome_reveal_default = /*#__PURE__*/__webpack_require__.n(external_react_awesome_reveal_namespaceObject);
// EXTERNAL MODULE: ./components/features/alink.jsx
var alink = __webpack_require__(7852);
// EXTERNAL MODULE: ./components/features/owl-carousel.jsx
var owl_carousel = __webpack_require__(4138);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(7659);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./store/wishlist.js
var wishlist = __webpack_require__(5708);
// EXTERNAL MODULE: ./store/cart.js
var cart = __webpack_require__(2806);
// EXTERNAL MODULE: ./store/compare.js
var compare = __webpack_require__(9792);
// EXTERNAL MODULE: ./store/demo.js
var demo = __webpack_require__(2870);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./components/features/products/product-twelve.jsx
var __jsx = (external_react_default()).createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function ProductTwelve(props) {
  const router = (0,router_.useRouter)();
  const {
    product,
    wishlist
  } = props;
  const {
    0: maxPrice,
    1: setMaxPrice
  } = (0,external_react_.useState)(0);
  const {
    0: minPrice,
    1: setMinPrice
  } = (0,external_react_.useState)(99999);
  (0,external_react_.useEffect)(() => {
    let min = minPrice;
    let max = maxPrice;
    product.variants.map(item => {
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

    if (!(0,utils/* isInWishlist */.QY)(props.wishlist, product)) {
      props.addToWishlist(product);
    } else {
      router.push('/pages/wishlist');
    }
  }

  function onCompareClick(e) {
    e.preventDefault();

    if (!(0,utils/* isInCompare */.V4)(props.comparelist, product)) {
      props.addToCompare(product);
    }
  }

  function onQuickView(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return __jsx("div", {
    className: "product product-7 text-center"
  }, __jsx("figure", {
    className: "product-media"
  }, product.new ? __jsx("span", {
    className: "product-label label-circle label-new"
  }, "New") : "", product.sale_price ? __jsx("span", {
    className: "product-label label-circle label-sale"
  }, "Sale") : "", product.top ? __jsx("span", {
    className: "product-label label-circle label-top"
  }, "Top") : "", !product.stock || product.stock == 0 ? __jsx("span", {
    className: "product-label label-circle label-out"
  }, "Out of Stock") : "", __jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[0].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image"
  }), product.pictures.length >= 2 ? __jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "product",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + product.pictures[1].url,
    threshold: 500,
    effect: "black and white",
    wrapperClassName: "product-image-hover"
  }) : ""), __jsx("div", {
    className: "product-action-vertical"
  }, (0,utils/* isInWishlist */.QY)(wishlist, product) ? __jsx(alink/* default */.Z, {
    href: "/shop/wishlist",
    className: "btn-product-icon btn-wishlist btn-expandable added-to-wishlist"
  }, __jsx("span", null, "go to wishlist")) : __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-wishlist btn-expandable",
    onClick: onWishlistClick
  }, __jsx("span", null, "add to wishlist")), __jsx("a", {
    href: "#",
    className: "btn-product-icon btn-quickview",
    title: "Quick View",
    onClick: onQuickView
  }, __jsx("span", null, "quick view"))), product.stock && product.stock !== 0 ? __jsx("div", {
    className: "product-action product-action-transparent"
  }, product.variants.length > 0 ? __jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "btn-product btn-cart btn-select"
  }, __jsx("span", null, "select options")) : __jsx("button", {
    className: "btn-product btn-cart",
    onClick: onCartClick
  }, __jsx("span", null, "add to cart"))) : ""), __jsx("div", {
    className: "product-body"
  }, __jsx("div", {
    className: "product-cat"
  }, product.category.map((item, index) => __jsx((external_react_default()).Fragment, {
    key: item.slug + '-' + index
  }, __jsx(alink/* default */.Z, {
    href: {
      pathname: '/shop/sidebar/list',
      query: {
        category: item.slug
      }
    }
  }, item.name), index < product.category.length - 1 ? ', ' : ""))), __jsx("h3", {
    className: "product-title"
  }, __jsx(alink/* default */.Z, {
    href: `/product/default/${product.slug}`
  }, product.name)), !product.stock || product.stock == 0 ? __jsx("div", {
    className: "product-price"
  }, __jsx("span", {
    className: "out-price"
  }, "$", product.price.toFixed(2))) : minPrice == maxPrice ? __jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2)) : product.variants.length == 0 ? __jsx("div", {
    className: "product-price"
  }, __jsx("span", {
    className: "new-price"
  }, "$", minPrice.toFixed(2)), __jsx("span", {
    className: "old-price"
  }, "$", maxPrice.toFixed(2))) : __jsx("div", {
    className: "product-price"
  }, "$", minPrice.toFixed(2), "\u2013$", maxPrice.toFixed(2)), __jsx("div", {
    className: "ratings-container"
  }, __jsx("div", {
    className: "ratings"
  }, __jsx("div", {
    className: "ratings-val",
    style: {
      width: product.ratings * 20 + '%'
    }
  }), __jsx("span", {
    className: "tooltip-text"
  }, product.ratings.toFixed(2))), __jsx("span", {
    className: "ratings-text"
  }, "( ", product.review, " Reviews )")), product.variants.length > 0 ? __jsx("div", {
    className: "product-nav product-nav-dots"
  }, __jsx("div", {
    className: "row no-gutters"
  }, product.variants.map((item, index) => __jsx(alink/* default */.Z, {
    href: "#",
    style: {
      backgroundColor: item.color
    },
    key: index
  }, __jsx("span", {
    className: "sr-only"
  }, "Color Name"))))) : ""));
}

const mapStateToProps = state => {
  return {
    wishlist: state.wishlist.data,
    comparelist: state.comparelist.data
  };
};

/* harmony default export */ var product_twelve = ((0,external_react_redux_.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, wishlist/* actions */.Nw), cart/* actions */.Nw), compare/* actions */.Nw), demo/* actions */.Nw))(ProductTwelve));
;// CONCATENATED MODULE: ./components/partials/home/new-collection.jsx

var new_collection_jsx = (external_react_default()).createElement;





function NewCollection(props) {
  const {
    products = [],
    loading
  } = props;
  return new_collection_jsx(external_react_tabs_.Tabs, {
    selectedTabClassName: "show",
    defaultIndex: 0
  }, new_collection_jsx("div", {
    className: "heading heading-center mb-3"
  }, new_collection_jsx("h2", {
    className: "title"
  }, "New Arrivals"), new_collection_jsx(external_react_tabs_.TabList, {
    className: "nav nav-pills justify-content-center",
    role: "tablist"
  }, new_collection_jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, new_collection_jsx("span", {
    className: "nav-link"
  }, "Womens Clothing")), new_collection_jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, new_collection_jsx("span", {
    className: "nav-link"
  }, "Mens Clothing")))), new_collection_jsx(external_react_tabs_.TabPanel, null, new_collection_jsx("div", {
    className: "products"
  }, new_collection_jsx("div", {
    className: "row justify-content-center"
  }, loading ? [1, 2, 3, 4, 5].map((item, index) => new_collection_jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index
  }, new_collection_jsx("div", {
    className: "skel-pro"
  }))) : (0,utils/* catFilter */.oq)(products, ['kat 1']).slice(0, 5).map((item, index) => new_collection_jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index
  }, new_collection_jsx(product_twelve, {
    product: item,
    key: index
  })))))), new_collection_jsx(external_react_tabs_.TabPanel, null, new_collection_jsx("div", {
    className: "products"
  }, new_collection_jsx("div", {
    className: "row justify-content-center"
  }, loading ? [1, 2, 3, 4, 5].map((item, index) => new_collection_jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index
  }, new_collection_jsx("div", {
    className: "skel-pro"
  }))) : (0,utils/* catFilter */.oq)(products, ['men']).slice(0, 5).map((item, index) => new_collection_jsx("div", {
    className: "col-6 col-md-4 col-lg-3 col-xl-5col",
    key: index
  }, new_collection_jsx(product_twelve, {
    product: item,
    key: index
  })))))), new_collection_jsx("div", {
    className: "more-container text-center mt-2 mb-7"
  }, new_collection_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/3cols",
    className: "btn btn-outline-dark-3 btn-more"
  }, new_collection_jsx("span", null, "Shop more"), new_collection_jsx("i", {
    className: "icon-long-arrow-right"
  }))));
}

/* harmony default export */ var new_collection = (NewCollection);
// EXTERNAL MODULE: ./utils/data.js
var utils_data = __webpack_require__(8289);
;// CONCATENATED MODULE: ./components/partials/home/featured-collection.jsx

var featured_collection_jsx = (external_react_default()).createElement;






function FeaturedCollection(props) {
  const {
    products = [],
    loading
  } = props;
  console.log(products);
  return featured_collection_jsx("div", {
    className: "bg-light-2 pt-6 pb-6 featured"
  }, featured_collection_jsx("div", {
    className: "container-fluid"
  }, featured_collection_jsx(external_react_tabs_.Tabs, {
    selectedTabClassName: "show",
    defaultIndex: 0
  }, featured_collection_jsx("div", {
    className: "heading heading-center mb-3"
  }, featured_collection_jsx("h2", {
    className: "title"
  }, "Featured Products"), featured_collection_jsx(external_react_tabs_.TabList, {
    className: "nav nav-pills justify-content-center",
    role: "tablist"
  }, featured_collection_jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, featured_collection_jsx("span", {
    className: "nav-link"
  }, "Women's Clothing")), featured_collection_jsx(external_react_tabs_.Tab, {
    className: "nav-item"
  }, featured_collection_jsx("span", {
    className: "nav-link"
  }, "Men's Clothing")))), featured_collection_jsx("div", {
    className: "tab-content tab-content-carousel"
  }, featured_collection_jsx(external_react_tabs_.TabPanel, null, loading ? featured_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow",
    options: utils_data/* productSlider */.sE,
    isTheme: false
  }, [1, 2, 3, 4, 5, 6].map((item, index) => featured_collection_jsx("div", {
    className: "skel-pro",
    key: index
  }))) : featured_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow",
    options: utils_data/* productSlider */.sE,
    isTheme: false
  }, (0,utils/* catFilter */.oq)(products, ['kat 1']).slice(0, 6).map((item, index) => featured_collection_jsx(product_twelve, {
    product: item,
    key: index
  })))), featured_collection_jsx(external_react_tabs_.TabPanel, null, loading ? featured_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow",
    options: utils_data/* productSlider */.sE,
    isTheme: false
  }, [1, 2, 3, 4, 5, 6].map((item, index) => featured_collection_jsx("div", {
    className: "skel-pro",
    key: index
  }))) : featured_collection_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple carousel-equal-height carousel-with-shadow",
    options: utils_data/* productSlider */.sE,
    isTheme: false
  }, (0,utils/* catFilter */.oq)(products, ['kat 1']).slice(0, 5).map((item, index) => featured_collection_jsx(product_twelve, {
    product: item,
    key: index
  }))))))));
}

/* harmony default export */ var featured_collection = (FeaturedCollection);
;// CONCATENATED MODULE: ./components/features/posts/post-four.jsx

var post_four_jsx = (external_react_default()).createElement;



function post_four_PostFour(props) {
  const {
    post
  } = props;
  let date = new Date(post.date);
  let options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "UTC"
  };
  return post_four_jsx("article", {
    className: "entry entry-display"
  }, post_four_jsx("figure", {
    className: "entry-media",
    style: {
      paddingTop: `${post.image[0].height / post.image[0].width * 100}%`
    }
  }, post_four_jsx(ALink, {
    href: `/blog/single/default/${post.slug}`
  }, post_four_jsx("div", {
    className: "lazy-overlay"
  }), post_four_jsx(LazyLoadImage, {
    alt: "Post",
    src: "https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/api/" + post.image[0].url,
    threshold: 500,
    effect: "blur",
    height: "auto"
  }))), post_four_jsx("div", {
    className: "entry-body text-center"
  }, post_four_jsx("div", {
    className: "entry-meta"
  }, post_four_jsx(ALink, {
    href: "#"
  }, date.toLocaleDateString('en-US', options)), post_four_jsx("span", {
    className: "meta-separator"
  }, "|"), post_four_jsx(ALink, {
    href: "#"
  }, post.comments, " Comments")), post_four_jsx("h2", {
    className: "entry-title"
  }, post_four_jsx(ALink, {
    href: `/blog/single/default/${post.slug}`
  }, post.title)), post_four_jsx("div", {
    className: "entry-content"
  }, post_four_jsx(ALink, {
    href: `/blog/single/default/${post.slug}`,
    className: "read-more"
  }, "Continue Reading"))));
}

/* harmony default export */ var post_four = ((/* unused pure expression or super */ null && (post_four_PostFour)));
;// CONCATENATED MODULE: ./components/partials/home/blog-collection.jsx

var blog_collection_jsx = (external_react_default()).createElement;






function BlogCollection(props) {
  const {
    loading,
    posts = []
  } = props;
  return blog_collection_jsx("section", {
    className: "blog-posts"
  }, blog_collection_jsx("div", {
    className: "container-fluid"
  }, blog_collection_jsx("h2", {
    className: "title text-center mb-3"
  }, "From Our Blog"), loading || posts.length == 0 ? blog_collection_jsx(OwlCarousel, {
    adClass: "owl-simple carousel-with-shadow cols-lg-3 cols-sm-2 cols-1",
    options: blogSlider
  }, [0, 1, 2, 3, 4].map((item, index) => blog_collection_jsx("div", {
    className: "skel-pro",
    key: index
  }))) : blog_collection_jsx(OwlCarousel, {
    adClass: "owl-simple pb-3 carousel-with-shadow cols-lg-3 cols-sm-2 cols-1",
    options: blogSlider
  }, posts.map((item, index) => blog_collection_jsx(Reveal, {
    keyframes: fadeIn,
    delay: 100,
    duration: 1000,
    triggerOnce: true,
    key: index
  }, blog_collection_jsx(PostFour, {
    post: item
  })))), blog_collection_jsx("div", {
    className: "text-center mb-7 mt-2"
  }, blog_collection_jsx(ALink, {
    href: "/blog/classic",
    className: "btn btn-outline-darker btn-more"
  }, blog_collection_jsx("span", null, "View more articles"), blog_collection_jsx("i", {
    className: "icon-long-arrow-right"
  })))));
}

/* harmony default export */ var blog_collection = ((/* unused pure expression or super */ null && (BlogCollection)));
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9997);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
;// CONCATENATED MODULE: external "js-cookie"
var external_js_cookie_namespaceObject = require("js-cookie");;
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_namespaceObject);
;// CONCATENATED MODULE: ./components/features/modals/newsletter-modal.jsx
var newsletter_modal_jsx = (external_react_default()).createElement;




const customStyles = {
  overlay: {
    backgroundColor: 'rgba(51,51,51,0.6)',
    zIndex: '9001'
  }
};
external_react_modal_default().setAppElement('body');

function NewsletterModal() {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const {
    0: doNotShow,
    1: setDoNotShow
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    let timer;
    external_js_cookie_default().get(`hideNewsletter-${process.env.NEXT_PUBLIC_DEMO}`) || (timer = setTimeout(() => {
      setOpen(true);
    }, 5000));
    return () => {
      timer && clearTimeout(timer);
    };
  }, []);

  function closeModal(e) {
    document.getElementById("newsletter-popup-form").classList.remove("ReactModal__Content--after-open");

    if (document.querySelector(".ReactModal__Overlay")) {
      document.querySelector(".ReactModal__Overlay").style.opacity = '0';
    }

    setTimeout(() => {
      setOpen(false);
      doNotShow && external_js_cookie_default().set(`hideNewsletter-${process.env.NEXT_PUBLIC_DEMO}`, "true", {
        expires: 7
      });
    }, 350);
  }

  function handleChange(e) {
    setDoNotShow(e.target.checked);
  }

  return newsletter_modal_jsx((external_react_modal_default()), {
    isOpen: open,
    onRequestClose: closeModal,
    style: customStyles,
    shouldReturnFocusAfterClose: false,
    contentLabel: "Newsletter Modal",
    className: "container newsletter-popup-container h-auto",
    overlayClassName: "d-flex align-items-center justify-content-center",
    id: "newsletter-popup-form"
  }, newsletter_modal_jsx("div", {
    className: "modal-content overflow-hidden"
  }, newsletter_modal_jsx("div", {
    className: "row justify-content-center position-relative"
  }, newsletter_modal_jsx("div", {
    className: "col-12"
  }, newsletter_modal_jsx("div", {
    className: "row no-gutters bg-white newsletter-popup-content"
  }, newsletter_modal_jsx("div", {
    className: "col-xl-3-5col col-lg-7 banner-content-wrap"
  }, newsletter_modal_jsx("div", {
    className: "banner-content text-center"
  }, newsletter_modal_jsx("img", {
    src: "images/popup/newsletter/logo.png",
    alt: "logo",
    className: "logo",
    width: "60",
    height: "15"
  }), newsletter_modal_jsx("h2", {
    className: "banner-title"
  }, "get ", newsletter_modal_jsx("span", null, "25", newsletter_modal_jsx("span", {
    style: {
      fontWeight: '400'
    }
  }, "%")), " off"), newsletter_modal_jsx("p", null, "Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite products."), newsletter_modal_jsx("form", {
    action: "#"
  }, newsletter_modal_jsx("div", {
    className: "input-group input-group-round"
  }, newsletter_modal_jsx("input", {
    type: "email",
    className: "form-control form-control-white",
    placeholder: "Your Email Address",
    "aria-label": "Email Adress",
    required: true
  }), newsletter_modal_jsx("div", {
    className: "input-group-append"
  }, newsletter_modal_jsx("button", {
    className: "btn",
    type: "submit"
  }, newsletter_modal_jsx("span", null, "go"))))), newsletter_modal_jsx("div", {
    className: "custom-control custom-checkbox pl-4 ml-3"
  }, newsletter_modal_jsx("input", {
    type: "checkbox",
    className: "custom-control-input",
    id: "register-policy",
    onChange: handleChange
  }), newsletter_modal_jsx("label", {
    className: "custom-control-label",
    htmlFor: "register-policy"
  }, "Do not show this popup again")))), newsletter_modal_jsx("div", {
    className: "col-xl-2-5col col-lg-5 d-none d-lg-block"
  }, newsletter_modal_jsx("div", {
    className: "lazy-overlay"
  }), newsletter_modal_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "newsletter",
    src: "images/popup/newsletter/img-1.jpg",
    threshold: 0,
    width: 396,
    height: 420,
    effect: "blur",
    className: "newsletter-img"
  })))), newsletter_modal_jsx("button", {
    title: "Close (Esc)",
    type: "button",
    className: "mfp-close",
    onClick: closeModal
  }, newsletter_modal_jsx("span", null, "\xD7")))));
}

/* harmony default export */ var newsletter_modal = (NewsletterModal);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
;// CONCATENATED MODULE: ./pages/index.jsx

var pages_jsx = (external_react_default()).createElement;













function Home() {
  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_PRODUCTS */.tT); // const products = data && data.homeData.products;

  const products = data && data.products; //  const posts = data && data.homeData.posts;

  if (error) {
    return pages_jsx("div", null);
  }

  return pages_jsx("div", {
    className: "main home-page skeleton-body"
  }, pages_jsx("div", {
    className: "container-fluid"
  }, pages_jsx("div", {
    className: "row"
  }, pages_jsx("div", {
    className: "col-lg-6"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeIn */.Ji,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx("div", {
    className: "banner banner-big banner-overlay"
  }, pages_jsx(alink/* default */.Z, {
    href: "#",
    className: "lazy-media"
  }, pages_jsx("div", {
    className: "lazy-overlay"
  }), pages_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "banner",
    src: "images/home/banners/banner-1.jpg",
    threshold: 200,
    width: "880",
    height: "auto",
    effect: "blur"
  })), pages_jsx("div", {
    className: "banner-content banner-content-center"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeInUpShorter */.lN,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx((external_react_default()).Fragment, null, pages_jsx("h3", {
    className: "banner-subtitle text-white"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "New Collection")), pages_jsx("h2", {
    className: "banner-title text-white"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "Shop Women's")), pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "btn underline"
  }, pages_jsx("span", null, "Discover Now")))))))), pages_jsx("div", {
    className: "col-lg-6"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeIn */.Ji,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx("div", {
    className: "banner banner-big banner-overlay"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "lazy-media"
  }, pages_jsx("div", {
    className: "lazy-overlay"
  }), pages_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "banner",
    src: "images/home/banners/banner-2.jpg",
    threshold: 200,
    width: "880",
    height: "auto",
    effect: "blur"
  })), pages_jsx("div", {
    className: "banner-content banner-content-center"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeInUpShorter */.lN,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx((external_react_default()).Fragment, null, pages_jsx("h3", {
    className: "banner-subtitle text-white"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "New Collection")), pages_jsx("h2", {
    className: "banner-title text-white"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "Shop Men's")), pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "btn underline"
  }, pages_jsx("span", null, "Discover Now"))))))))), pages_jsx("div", {
    className: "row justify-content-center"
  }, pages_jsx("div", {
    className: "col-md-6 col-lg-4"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeInLeftShorter */.h6,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx("div", {
    className: "banner banner-overlay text-white banner-2"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "lazy-media"
  }, pages_jsx("div", {
    className: "lazy-overlay"
  }), pages_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "banner",
    src: "images/home/banners/banner-3.jpg",
    threshold: 200,
    width: "580",
    height: "auto",
    effect: "blur"
  })), pages_jsx("div", {
    className: "banner-content banner-content-right"
  }, pages_jsx("h4", {
    className: "banner-subtitle"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "Flip Flop")), pages_jsx("h3", {
    className: "banner-title"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "Summer", pages_jsx("br", null), "sale -70% off")), pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "btn underline btn-outline-white-3 banner-link"
  }, "Shop Now"))))), pages_jsx("div", {
    className: "col-md-6 col-lg-4"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeIn */.Ji,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx("div", {
    className: "banner banner-overlay color-grey banner-2"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "lazy-media"
  }, pages_jsx("div", {
    className: "lazy-overlay"
  }), pages_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "banner",
    src: "images/home/banners/banner-4.jpg",
    threshold: 200,
    width: "580",
    height: "auto",
    effect: "blur"
  })), pages_jsx("div", {
    className: "banner-content"
  }, pages_jsx("h4", {
    className: "banner-subtitle"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "Accessories")), pages_jsx("h3", {
    className: "banner-title"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "2021 Winter", pages_jsx("br", null), "up to 50% off")), pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "btn underline banner-link"
  }, "Shop Now"))))), pages_jsx("div", {
    className: "col-md-6 col-lg-4"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeInRightShorter */.uT,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx("div", {
    className: "banner banner-overlay text-white banner-2"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "lazy-media"
  }, pages_jsx("div", {
    className: "lazy-overlay"
  }), pages_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    alt: "banner",
    src: "images/home/banners/banner-5.jpg",
    threshold: 200,
    width: "580",
    height: "auto",
    effect: "blur"
  })), pages_jsx("div", {
    className: "banner-content banner-content-right mr"
  }, pages_jsx("h4", {
    className: "banner-subtitle"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "New in")), pages_jsx("h3", {
    className: "banner-title"
  }, pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list"
  }, "Women\u2019s", pages_jsx("br", null), "sportswear")), pages_jsx(alink/* default */.Z, {
    href: "/shop/sidebar/list",
    className: "btn underline btn-outline-white-3 banner-link"
  }, "Shop Now"))))))), pages_jsx("div", {
    className: "icon-boxes-container bg-transparent"
  }, pages_jsx("div", {
    className: "container-fluid"
  }, pages_jsx("div", {
    className: "row justify-content-center"
  }, pages_jsx("div", {
    className: "col-xxl-8 col-12 icon-boxes"
  }, pages_jsx("div", {
    className: "col-sm-6 col-lg-4"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeInRightShorter */.uT,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx("div", {
    className: "icon-box icon-box-side"
  }, pages_jsx("span", {
    className: "icon-box-icon"
  }, pages_jsx("i", {
    className: "icon-truck"
  })), pages_jsx("div", {
    className: "icon-box-content"
  }, pages_jsx("h3", {
    className: "icon-box-title"
  }, "Payment & Delivery"), pages_jsx("p", null, "Free shipping for orders over $50"))))), pages_jsx("div", {
    className: "col-sm-6 col-lg-4"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeIn */.Ji,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx("div", {
    className: "icon-box icon-box-side"
  }, pages_jsx("span", {
    className: "icon-box-icon"
  }, pages_jsx("i", {
    className: "icon-rotate-left"
  })), pages_jsx("div", {
    className: "icon-box-content"
  }, pages_jsx("h3", {
    className: "icon-box-title"
  }, "Return & Refund"), pages_jsx("p", null, "Free 100% money back guarantee"))))), pages_jsx("div", {
    className: "col-sm-6 col-lg-4"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeInLeftShorter */.h6,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx("div", {
    className: "icon-box icon-box-side"
  }, pages_jsx("span", {
    className: "icon-box-icon"
  }, pages_jsx("i", {
    className: "icon-headphones"
  })), pages_jsx("div", {
    className: "icon-box-content"
  }, pages_jsx("h3", {
    className: "icon-box-title"
  }, "Quality Support"), pages_jsx("p", null, "Alway online feedback 24/7"))))))))), pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeIn */.Ji,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx(featured_collection, {
    products: products,
    loading: loading
  })), pages_jsx("div", {
    className: "mb-6"
  }), pages_jsx("div", {
    className: "container-fluid"
  }, pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeIn */.Ji,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx(new_collection, {
    products: products,
    loading: loading
  })), pages_jsx("hr", {
    className: "mt-0 mb-6"
  }), pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeIn */.Ji,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  })), pages_jsx("div", {
    className: "bg-light-2 pt-7 pb-6 testimonials"
  }, pages_jsx("div", {
    className: "container"
  }, pages_jsx("h2", {
    className: "title text-center mb-2"
  }, "Our Customers Say"), pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeIn */.Ji,
    delay: 200,
    duration: 1000,
    triggerOnce: true
  }, pages_jsx(owl_carousel/* default */.Z, {
    adClass: "owl-simple owl-testimonials",
    options: utils_data/* testiSlider */.OD
  }, pages_jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, pages_jsx("p", {
    className: "lead"
  }, "\u201CReally great store\u201D"), pages_jsx("p", null, "\u201C Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra", pages_jsx("br", null), "a, ultricies in, diam. Sed arcu. \u201D"), pages_jsx("cite", null, "Charly Smith,", pages_jsx("span", null, "Customer"))), pages_jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, pages_jsx("p", {
    className: "lead"
  }, "\u201CFriendly Support\u201D"), pages_jsx("p", null, "\u201C Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.\u201D"), pages_jsx("cite", null, "Damon Stone", pages_jsx("span", null, "Customer"))), pages_jsx("blockquote", {
    className: "testimonial testimonial-icon text-center"
  }, pages_jsx("p", {
    className: "lead"
  }, "\u201CFree Shipping\u201D"), pages_jsx("p", null, "\u201C Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis perspiciatis, voluptate, distinctio earum veritatis animi tempora eget blandit nunc tortor mollis \u201D"), pages_jsx("cite", null, "John Smith", pages_jsx("span", null, "Customer"))))))), pages_jsx((external_react_awesome_reveal_default()), {
    keyframes: utils_data/* fadeIn */.Ji,
    delay: 100,
    duration: 500,
    triggerOnce: true
  }, pages_jsx(owl_carousel/* default */.Z, {
    adClass: "brands-border owl-simple brand-carousel",
    options: utils_data/* brandSlider */.mI
  }, utils_data/* homeData.brands.map */.QL.brands.map((brand, index) => pages_jsx(alink/* default */.Z, {
    href: "#",
    className: "brand mr-0",
    key: index
  }, pages_jsx("img", {
    src: brand.image,
    alt: "brand",
    width: brand.width,
    height: brand.height
  }))))), pages_jsx(newsletter_modal, null));
}

/* harmony default export */ var pages = ((0,apollo/* default */.Z)({
  ssr: true
})(Home));

/***/ }),

/***/ 7530:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ 7381:
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,1011,4138,5961,2870,6442,8289,2806,5708,9792], function() { return __webpack_exec__(9685); });
module.exports = __webpack_exports__;

})();