import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({ match, history }) => {
    const dispatch = useDispatch();

    const productsList = useSelector(state => state.products);
    const { loading, error, products } = productsList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <Header />

            <div className="products">
                <h1 className="products-title">Latest Products</h1>
                {
                    loading ? <Spinner /> : error ? <Message>{error}</Message> :
                        <div className="products-list">
                            {
                                products.map(product => (
                                    <Product
                                        key={product._id}
                                        product={product}
                                        history={history}
                                        match={match}
                                    />
                                ))
                            }
                        </div>
                }
            </div>
        </>
    )
}

export default HomeScreen;
