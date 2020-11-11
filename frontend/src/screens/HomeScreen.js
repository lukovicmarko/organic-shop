import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Header from '../components/Header';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const productsList = useSelector(state => state.products);
    const { loading, error, products } = productsList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            <Header />

            <div className="products">
                <h1 className="products-title">Latest Products</h1>
                {
                    loading ? <h2>Loading...</h2> : error ? <h3>error</h3> : <div className="products-list">
                        {
                            products.map(product => (
                                <Product product={product} key={product._id} />
                            ))
                        }
                    </div>
                }

            </div>

        </div>
    )
}

export default HomeScreen;
