import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProductDetails } from '../actions/productActions';
import Message from '../components/Message';
import Spinner from '../components/Spinner';

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(0);

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);

    const { loading, error, product } = productDetails;
    const { name, image } = product;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match]);


    return (
        <>
            <Link className="btn-light" to="/" >
                <i className="fas fa-angle-left"></i>
            </Link>
            {
                loading ? <Spinner /> : error ? <Message>{error}</Message> : (
                    <div className="product-details">
                        <img src={image} className="product-details__image" alt="product.png" />
                        <div>
                            {name}
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default ProductScreen
