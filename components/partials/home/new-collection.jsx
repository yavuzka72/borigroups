import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import ALink from '~/components/features/alink';
import ProductTwelve from '~/components/features/products/product-twelve';

import { catFilter } from '~/utils';

function NewCollection ( props ) {
    const { products = [], loading } = props;

    return (
        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
            <div className="heading heading-center mb-3">
                <h2 className="title">New Arrivals</h2>

                <TabList className="nav nav-pills justify-content-center" role="tablist">
                    <Tab className="nav-item">
                        <span className="nav-link">Womens Clothing</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Mens Clothing</span>
                    </Tab>
                </TabList>
            </div>

            <TabPanel>
                <div className="products">
                    <div className="row justify-content-center">
                        {
                            loading ?
                                [ 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                        <div className="skel-pro"></div>
                                    </div>
                                )
                                :

                                catFilter( products, [ 'kat 1' ] ).slice( 0, 5 ).map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                        <ProductTwelve
                                            product={ item }
                                            key={ index } />
                                    </div>
                                )
                        }
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="products">
                    <div className="row justify-content-center">
                        {
                            loading ?
                                [ 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                        <div className="skel-pro"></div>
                                    </div>
                                )
                                :

                                catFilter( products, [ 'men' ] ).slice( 0, 5 ).map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                        <ProductTwelve
                                            product={ item }
                                            key={ index } />
                                    </div>
                                )
                        }
                    </div>
                </div>
            </TabPanel>

            <div className="more-container text-center mt-2 mb-7">
                <ALink href="/shop/sidebar/3cols" className="btn btn-outline-dark-3 btn-more"><span>Shop more</span><i className="icon-long-arrow-right"></i></ALink>
            </div>
        </Tabs>
    )
}

export default NewCollection;