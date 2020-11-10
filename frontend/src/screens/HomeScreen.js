import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        }

        fetchProducts();
    }, []);

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
