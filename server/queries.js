import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
query products {
    products  { id name       slug   short_desc price sale_price review ratings new  category {  name     slug    } brands {name slug} pictures{   width height url } sm_pictures {   width height   url  }  variants {   color color_name  price  size {  name  } }  prev {slug} next {slug} related {   id   name  slug     price sale_price review    ratings  until stock   top  featured category {name  slug  } sm_pictures {width   height url } variants {     color  color_name     price     size {  name  } } 

} 
}  
            
              
    }
`

export const GET_PRODUCT = gql`
query product ($slug: String!, $onlyData: Boolean = false) {
    
    product(slug: $slug,onlyData: $onlyData) { id name       slug  short_desc  price sale_price review ratings new  category {  name     slug    } brands {name slug} pictures{   width height url } sm_pictures {   width height   url  }  variants {   color color_name  price  size {  name  } }  prev {slug} next {slug} related {   id   name  slug     price sale_price review    ratings  until stock   top  featured category {name  slug  } sm_pictures {width   height url } variants {     color  color_name     price     size {  name  } } 

} 
}  
            
              
    }
`

export const GET_ELEMENT_PRODUCTS = gql`
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
`

export const GET_ELEMENT_POSTS = gql`
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
`

export const GET_POSTS_BY_PAGE = gql`
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
`

export const GET_POST = gql`
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
`

export const GET_HOME_DATA = gql`
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
`