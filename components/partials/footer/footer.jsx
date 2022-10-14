import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';

function Footer () {
    const router = useRouter( "" );
    const [ isBottomSticky, setIsBottomSticky ] = useState( false );

    useEffect( () => {
        handleBottomSticky();
    }, [ router.asPath ] );

    useEffect( () => {
        window.addEventListener( 'resize', handleBottomSticky, { passive: true } );
        return () => {
            window.removeEventListener( 'resize', handleBottomSticky );
        }
    }, [] )

    function handleBottomSticky () {
        setIsBottomSticky( router.pathname.includes( 'product/default' ) && ( window.innerWidth > 991 ) );
    }

    return (
        <footer className="footer footer-2">
            <div className="footer-middle">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4">
                            <div className="widget widget-about">
                                <ALink href="/">
                                    <img src="images/logo-footer.png" className="footer-logo" alt="Footer Logo" width="105" height="25" />
                                </ALink>
                                <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>

                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title">Got Question? Call us 24/7</span>
                                            <a href="tel:123456789">+0123 456 789</a>
                                        </div>

                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title payment">Payment Method</span>
                                            <img src="images/payments.png" alt="Payment methods" width="272" height="20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Useful links</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="/pages/about">About Molla</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">How to shop on Molla</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">FAQ</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/contact">Contact us</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/pages/login">Log in</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Customer Service</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="#">Payment Methods</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Money-back guarantee!</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Returns</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Shipping</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Terms and conditions</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Privacy Policy</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">My Account</h4>

                                <ul className="widget-list">
                                    <li>
                                        <ALink href="#">Sign In</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/cart">View Cart</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/wishlist">My Wishlist</ALink>
                                    </li>
                                    <li>
                                        <ALink href="/shop/dashboard">Track My Order</ALink>
                                    </li>
                                    <li>
                                        <ALink href="#">Help</ALink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <div className="widget widget-newsletter">
                                <h4 className="widget-title">Sign up to newsletter</h4>

                                <p>Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.</p>

                                <form action="#">
                                    <div className="input-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your Email Address"
                                            aria-label="Email Adress"
                                            required
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-dark" type="submit">
                                                <i className="icon-long-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container-fluid">
                    <p
                        className="footer-copyright"
                    >Copyright © { new Date().getFullYear() } Molla Store. All Rights Reserved.</p>

                    <ul className="footer-menu">
                        <li>
                            <ALink href="#">Terms Of Use</ALink>
                        </li>
                        <li>
                            <ALink href="#">Privacy Policy</ALink>
                        </li>
                    </ul>

                    <div className="social-icons social-icons-color">
                        <span className="social-label">Social Media</span>
                        <ALink
                            href="#"
                            className="social-icon social-facebook"
                            title="Facebook"
                        >
                            <i className="icon-facebook-f"></i>
                        </ALink>
                        <ALink href="#" className="social-icon social-twitter" title="Twitter" target="_blank">
                            <i className="icon-twitter"></i>
                        </ALink>
                        <ALink
                            href="#"
                            className="social-icon social-instagram"
                            title="Instagram"
                        >
                            <i className="icon-instagram"></i>
                        </ALink>
                        <ALink href="#" className="social-icon social-youtube" title="Youtube" target="_blank">
                            <i className="icon-youtube"></i>
                        </ALink>
                        <ALink
                            href="#"
                            className="social-icon social-pinterest"
                            title="Pinterest"
                        >
                            <i className="icon-pinterest"></i>
                        </ALink>
                    </div>
                </div>
            </div>
            {
                isBottomSticky ?
                    <div className="mb-10"></div>
                    : ""
            }
        </footer>
    );
}

export default React.memo( Footer );