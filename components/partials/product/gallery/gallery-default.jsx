import { Magnifier } from 'react-image-magnifiers';
import React, { useState, useEffect } from 'react';
import LightBox from 'react-image-lightbox';

function GalleryDefault ( props ) {
    const { product, adClass = "product-gallery-vertical" } = props;
    const [ isOpen, setIsOpen ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );

    console.log(product);
    useEffect( () => {
        if ( product[0] ) {
            setIsOpen( false );
            setPhotoIndex( 0 );
        }
    }, [ product ] )

    function moveNextPhoto () {
        setPhotoIndex( ( photoIndex + 1 ) % product[0].pictures.length );
    }

    function movePrevPhoto () {
        setPhotoIndex( ( photoIndex + product[0].pictures.length - 1 ) % product[0].pictures.length );
    }

    function openLightBox () {
        let index = parseInt( document.querySelector( ".product-main-image" ).getAttribute( "index" ) );

        if ( !index ) {
            index = 0;
        }
        setIsOpen( true );
        setPhotoIndex( index );
    }

    function closeLightBox () {
        setIsOpen( false );
    }

    function changeBgImage ( e, image, index ) {
        let imgs = document.querySelectorAll( '.product-main-image img' );
        for ( let i = 0; i < imgs.length; i++ ) {
            imgs[ i ].src = image;
        }

        document.querySelector( '.product-image-gallery .active' ).classList.remove( 'active' );

        document.querySelector( '.product-main-image' ).setAttribute( 'index', index );
        e.currentTarget.classList.add( 'active' );
    }

    if ( !product ) {
        return <div></div>
    }

    return (
        <>
            <div className={ `product-gallery ${adClass}` }>
                <div className="row m-0">
                    <figure className="product-main-image" index="0">
                        {
                            product.new ?
                                <span className="product-label label-new">New</span>
                                : ""
                        }

                        {
                            product.sale_price ?
                                <span className="product-label label-sale">Sale</span>
                                : ""
                        }

                        {
                            product.top ?
                                <span className="product-label label-top">Top</span>
                                : ""
                        }

                        {
                            !product.stock || product.stock == 0 ?
                                <span className="product-label label-out">Out of Stock</span>
                                : ""
                        }

                        <Magnifier
                           imageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + product[0].pictures[ 0 ].url }
                            imageAlt="product"
                           largeImageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + product[0].pictures[ 0 ].url } // Optional
                            dragToMove={ false }
                            mouseActivation="hover"
                            cursorStyleActive="crosshair"
                            id="product-zoom"
                            className="zoom-image position-relative overflow-hidden"
                           width={ product[0].pictures[ 0 ].width }
                           height={ product[0].pictures[ 0 ].height }
                            style={ { paddingTop: `${product[0].pictures[ 0 ].height / product[0].pictures[ 0 ].width * 100}%` } }
                        />

                        <button id="btn-product-gallery" className="btn-product-gallery" onClick={ openLightBox }>
                            <i className="icon-arrows"></i>
                        </button>
                    </figure>

                    <div id="product-zoom-gallery" className="product-image-gallery">
                        {
                            product[0].pictures.map( ( item, index ) =>
                                <button className={ `product-gallery-item ${0 === index ? 'active' : ''}` } key={ product[0].id + '-' + index } onClick={ e => changeBgImage( e, `${process.env.NEXT_PUBLIC_ASSET_URI + item.url}`, index ) }>
                                    <div className="img-wrapper h-100">
                                        <img src={ process.env.NEXT_PUBLIC_ASSET_URI + product[0].pictures[ index ].url } alt="product back" />
                                    </div>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>

            {
                isOpen ?
                    <LightBox
                        mainSrc={ process.env.NEXT_PUBLIC_ASSET_URI + product[0].pictures[ photoIndex ].url }
                        nextSrc={ process.env.NEXT_PUBLIC_ASSET_URI + product[0].pictures[ ( photoIndex + 1 ) % product[0].pictures.length ].url }
                        prevSrc={ process.env.NEXT_PUBLIC_ASSET_URI + product[0].pictures[ ( photoIndex + product[0].pictures.length - 1 ) % product[0].pictures.length ].url }
                        onCloseRequest={ closeLightBox }
                        onMovePrevRequest={ moveNextPhoto }
                        onMoveNextRequest={ movePrevPhoto }
                        reactModalStyle={ {
                            overlay: {
                                zIndex: 1041
                            },
                        }
                        }
                    />
                    : ''
            }
        </>
    )
}

export default React.memo( GalleryDefault );