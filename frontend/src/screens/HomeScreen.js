import React from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import products from '../products';

const HomeScreen = () => {
    return (
        <div>
            <Header />

            <div className="products">
                <h1 className="products-title">Latest Products</h1>

                <div className="products-list">
                    {
                        products.map(product => (
                            <Product product={product} key={product._id} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default HomeScreen;
