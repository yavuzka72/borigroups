import { useQuery } from '@apollo/react-hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';
import NewCollection from '~/components/partials/home/new-collection';
import FeaturedCollection from '~/components/partials/home/featured-collection';
import BlogCollection from "~/components/partials/home/blog-collection";
import NewsletterModal from "~/components/features/modals/newsletter-modal";

import withApollo from '~/server/apollo';
import { GET_PRODUCTS } from '~/server/queries';

import { homeData, brandSlider, fadeInLeftShorter, fadeInRightShorter, fadeIn, testiSlider, fadeInUpShorter } from '~/utils/data';

function Home () {
    const { data, loading, error } = useQuery( GET_PRODUCTS );
   // const products = data && data.homeData.products;
    const products = data && data.products;
  //  const posts = data && data.homeData.posts;
     
    if ( error ) {
        return <div></div>
    }

    return (
        <div className="main home-page skeleton-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-big banner-overlay">
                                <ALink href="#" className="lazy-media">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-1.jpg"
                                        threshold={ 200 }
                                        width="880"
                                        height="auto"
                                        effect="blur"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-center">
                                    <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                        <>
                                            <h3 className="banner-subtitle text-white"><ALink href="/shop/sidebar/list">New Collection</ALink></h3>
                                            <h2 className="banner-title text-white"><ALink href="/shop/sidebar/list">Shop Women's</ALink></h2>
                                            <ALink href="/shop/sidebar/list" className="btn underline"><span>Discover Now</span></ALink>
                                        </>
                                    </Reveal>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-lg-6">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-big banner-overlay">
                                <ALink href="/shop/sidebar/list" className="lazy-media">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-2.jpg"
                                        threshold={ 200 }
                                        width="880"
                                        height="auto"
                                        effect="blur"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-center">
                                    <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                        <>
                                            <h3 className="banner-subtitle text-white"><ALink href="/shop/sidebar/list">New Collection</ALink></h3>
                                            <h2 className="banner-title text-white"><ALink href="/shop/sidebar/list">Shop Men's</ALink></h2>
                                            <ALink href="/shop/sidebar/list" className="btn underline"><span>Discover Now</span></ALink>
                                        </>
                                    </Reveal>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-overlay text-white banner-2">
                                <ALink href="/shop/sidebar/list" className="lazy-media">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-3.jpg"
                                        threshold={ 200 }
                                        width="580"
                                        height="auto"
                                        effect="blur"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-right">
                                    <h4 className="banner-subtitle"><ALink href="/shop/sidebar/list">Flip Flop</ALink></h4>
                                    <h3 className="banner-title"><ALink href="/shop/sidebar/list">Summer<br />sale -70% off</ALink></h3>
                                    <ALink href="/shop/sidebar/list" className="btn underline btn-outline-white-3 banner-link">Shop Now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-overlay color-grey banner-2">
                                <ALink href="/shop/sidebar/list" className="lazy-media">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-4.jpg"
                                        threshold={ 200 }
                                        width="580"
                                        height="auto"
                                        effect="blur"
                                    />
                                </ALink>

                                <div className="banner-content">
                                    <h4 className="banner-subtitle"><ALink href="/shop/sidebar/list">Accessories</ALink></h4>
                                    <h3 className="banner-title"><ALink href="/shop/sidebar/list">2021 Winter<br />up to 50% off</ALink></h3>
                                    <ALink href="/shop/sidebar/list" className="btn underline banner-link">Shop Now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                            <div className="banner banner-overlay text-white banner-2">
                                <ALink href="/shop/sidebar/list" className="lazy-media">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        src="images/home/banners/banner-5.jpg"
                                        threshold={ 200 }
                                        width="580"
                                        height="auto"
                                        effect="blur"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-right mr">
                                    <h4 className="banner-subtitle"><ALink href="/shop/sidebar/list">New in</ALink></h4>
                                    <h3 className="banner-title"><ALink href="/shop/sidebar/list">Women’s<br />sportswear</ALink></h3>
                                    <ALink href="/shop/sidebar/list" className="btn underline btn-outline-white-3 banner-link">Shop Now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="icon-boxes-container bg-transparent">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-12 icon-boxes">
                            <div className="col-sm-6 col-lg-4">
                                <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon">
                                            <i className="icon-truck"></i>
                                        </span>

                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">Payment & Delivery</h3>
                                            <p>Free shipping for orders over $50</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon">
                                            <i className="icon-rotate-left"></i>
                                        </span>

                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">Return & Refund</h3>
                                            <p>Free 100% money back guarantee</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1000 } triggerOnce>
                                    <div className="icon-box icon-box-side">
                                        <span className="icon-box-icon">
                                            <i className="icon-headphones"></i>
                                        </span>

                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">Quality Support</h3>
                                            <p>Alway online feedback 24/7</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <FeaturedCollection products={ products } loading={ loading } />
            </Reveal>

            <div className="mb-6"></div>

            <div className="container-fluid">
                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                    <NewCollection products={ products } loading={ loading } />
                </Reveal>

                <hr className="mt-0 mb-6" />
                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
               {
                 //   <BlogCollection posts={ posts } loading={ loading } />
                }
                </Reveal>
            </div>

            <div className="bg-light-2 pt-7 pb-6 testimonials">
                <div className="container">
                    <h2 className="title text-center mb-2">Our Customers Say</h2>
                    <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                        <OwlCarousel adClass="owl-simple owl-testimonials" options={ testiSlider }>
                            <blockquote className="testimonial testimonial-icon text-center">
                                <p className="lead">“Really great store”</p>
                                <p>“ Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra<br />a, ultricies in, diam. Sed arcu. ”</p>

                                <cite>
                                    Charly Smith,
                                    <span>Customer</span>
                                </cite>
                            </blockquote>

                            <blockquote className="testimonial testimonial-icon text-center">
                                <p className="lead">“Friendly Support”</p>
                                <p>“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.”</p>

                                <cite>
                                    Damon Stone
                                    <span>Customer</span>
                                </cite>
                            </blockquote>

                            <blockquote className="testimonial testimonial-icon text-center">
                                <p className="lead">“Free Shipping”</p>
                                <p>“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis perspiciatis, voluptate, distinctio earum veritatis animi tempora eget blandit nunc tortor mollis ”</p>

                                <cite>
                                    John Smith
                                    <span>Customer</span>
                                </cite>
                            </blockquote>
                        </OwlCarousel>
                    </Reveal>
                </div>
            </div>

            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 500 } triggerOnce>
                <OwlCarousel adClass="brands-border owl-simple brand-carousel" options={ brandSlider }>
                    {
                        homeData.brands.map( ( brand, index ) => (
                            <ALink href="#" className="brand mr-0" key={ index } >
                                <img src={ brand.image } alt="brand" width={ brand.width } height={ brand.height } />
                            </ALink>
                        ) )
                    }
                </OwlCarousel>
            </Reveal>

            <NewsletterModal />
        </div >
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Home );