exports.id = 5961;
exports.ids = [5961];
exports.modules = {

/***/ 5438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5766);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(806);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);


const API_URI = `${"https://borigroups-yavuzka72.vercel.app/react/molla/demo-7/"}/graphql`;
const apolloClient = new (apollo_boost__WEBPACK_IMPORTED_MODULE_1___default())({
  uri: API_URI,
  cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()
});
/* harmony default export */ __webpack_exports__["Z"] = ((0,next_apollo__WEBPACK_IMPORTED_MODULE_0__.withApollo)(apolloClient));

/***/ }),

/***/ 4733:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tT": function() { return /* binding */ GET_PRODUCTS; },
/* harmony export */   "N4": function() { return /* binding */ GET_PRODUCT; },
/* harmony export */   "xg": function() { return /* binding */ GET_ELEMENT_PRODUCTS; },
/* harmony export */   "Xg": function() { return /* binding */ GET_ELEMENT_POSTS; },
/* harmony export */   "AU": function() { return /* binding */ GET_POSTS_BY_PAGE; },
/* harmony export */   "QI": function() { return /* binding */ GET_POST; }
/* harmony export */ });
/* unused harmony export GET_HOME_DATA */
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9875);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_PRODUCTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
query products {
    products  { id name       slug   short_desc price sale_price review ratings new  category {  name     slug    } brands {name slug} pictures{   width height url } sm_pictures {   width height   url  }  variants {   color color_name  price  size {  name  } }  prev {slug} next {slug} related {   id   name  slug     price sale_price review    ratings  until stock   top  featured category {name  slug  } sm_pictures {width   height url } variants {     color  color_name     price     size {  name  } } 

} 
}  
            
              
    }
`;
const GET_PRODUCT = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
query product ($slug: String!, $onlyData: Boolean = false) {
    
    product(slug: $slug,onlyData: $onlyData) { id name       slug  short_desc  price sale_price review ratings new  category {  name     slug    } brands {name slug} pictures{   width height url } sm_pictures {   width height   url  }  variants {   color color_name  price  size {  name  } }  prev {slug} next {slug} related {   id   name  slug     price sale_price review    ratings  until stock   top  featured category {name  slug  } sm_pictures {width   height url } variants {     color  color_name     price     size {  name  } } 

} 
}  
            
              
    }
`;
const GET_ELEMENT_PRODUCTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
query products {
    products {
                id
                name
                slug
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                category {
                    name
                    slug
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
        }
    }
`;
const GET_ELEMENT_POSTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
       query products {
        products {
            id
            author
            comments
            content
            date
            slug
            title
            type
            blog_categories {
                name
                slug
            }
            image {
                width
                height
                url
            }
        }
    }
`;
const GET_POSTS_BY_PAGE = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query postsByPage ($page: String!, $category: String) {
        postsByPage(page: $page, category: $category) {
            data {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }

            categories {
                name
                slug
                count
            }
        }
    }
`;
const GET_POST = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query post($slug: String!) {
        post(slug: $slug) {
            single {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }

            prev {
                id
                slug
                title
            }

            next {
                id
                slug
                title
            }

            related {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }

            categories {
                name
                slug
                count
            }
        }
    }
`;
const GET_HOME_DATA = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`
    query homeData {
        homeData {
            products {
                id
                name
                slug
                short_desc
                price
                sale_price
                review
                ratings
                until
                stock
                top
                featured
                new
                category {
                    name
                    slug
                }
                sm_pictures {
                    width
                    height
                    url
                }
                variants {
                    color
                    color_name
                    price
                    size {
                        name
                    }
                }
            }

            posts {
                id
                author
                comments
                content
                date
                slug
                title
                type
                blog_categories {
                    name
                    slug
                }
                image {
                    width
                    height
                    url
                }
            }
        }
    }
`;

/***/ })

};
;