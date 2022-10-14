import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';
import LoginModal from '~/components/features/modals/login-modal';
import HeaderSearch from '~/components/partials/header/partials/header-search';
import WishlistMenu from '~/components/partials/header/partials/wishlist-menu';
import CartMenu from '~/components/partials/header/partials/cart-menu';
import CompareMenu from './partials/compare-menu';
import CategoryMenu from '~/components/partials/header/partials/category-menu';
import MainMenu from '~/components/partials/header/partials/main-menu';
import StickyHeader from '~/components/features/sticky-header';

function Header () {
    const router = useRouter();
    const [ containerClass, setContainerClass ] = useState( 'container' );

    function openMobileMenu () {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    useEffect( () => {
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    return (
        <header className="header header-7">
            <div className="header-top">
                <div className="container-fluid">
                    <div className="header-left">
                        <div className="header-dropdown">
                            <ALink href="#">Usd</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">Eur</ALink></li>
                                    <li><ALink href="#">Usd</ALink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-dropdown">
                            <ALink href="#">Eng</ALink>
                            <div className="header-menu">
                                <ul>
                                    <li><ALink href="#">English</ALink></li>
                                    <li><ALink href="#">French</ALink></li>
                                    <li><ALink href="#">Spanish</ALink></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <ALink href="#">Links</ALink>
                                <ul>
                                    <li><a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a></li>
                                    <WishlistMenu />
                                    <li><ALink href="/pages/about">About Us</ALink></li>
                                    <li><ALink href="/pages/contact">Contact Us</ALink></li>
                                    <LoginModal />
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <StickyHeader>
                <div className="header-middle sticky-header">
                    <div className="container-fluid">
                        <div className="header-left">
                            <button className="mobile-menu-toggler" onClick={ openMobileMenu }>
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>

                            <ALink href="/" className="logo">
                                <img src="images/logo.png" alt="Molla Logo" width={ 105 } height={ 25 } />
                            </ALink>

                            <MainMenu />
                        </div>

                        <div className="header-right">
                            <HeaderSearch />

                            <CartMenu />
                        </div>
                    </div>
                </div>
            </StickyHeader>
        </header>
    )
}

export default Header;