import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Spinner from '../components/Spinner';
import Rating from '../components/Rating';
import AddToCartButton from '../components/AddToCartButton';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);

    const { loading, error, product } = productDetails;
    const { _id, name, image, price, rating, reviews, numReviews, countInStock, description } = product;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match]);


    return (
        <div style={{ padding: '3rem 10rem' }}>
            <Link className="btn-light" to="/" >
                <i className="fas fa-angle-left"></i>
            </Link>
            {
                loading ? <Spinner /> : error ? <Message>{error}</Message> : (
                    <div className="product-details">
                        <img src={image} className="product-details__image" alt="product.png" />
                        <div className="product-details__info">
                            <div>
                                <h1>{name}</h1>
                                <Rating value={rating} text={` ${numReviews} reviews`} />
                                <h2>Price: <span className="product-price">${price}</span></h2>

                                <div className="tabs-container">
                                    <ul className="tabs">
                                        <li className="tab active">1</li>
                                        <li className="tab">2</li>
                                    </ul>
                                    <div className="tabs-content-container">
                                        <div className="tab-content active">
                                            {description}
                                        </div>
                                        <div className="tab-content">
                                            reviews
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="product-details__status">
                                <div className="stock">
                                    <div>
                                        <p>Status: </p>
                                        {countInStock > 0 && <p>Quantity:</p>}
                                    </div>
                                    <div>
                                        <p>{countInStock > 0 ? 'In stock' : 'Sold out'}</p>

                                        {countInStock > 0 && (
                                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                                {
                                                    [...Array(countInStock).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))
                                                }
                                            </select>
                                        )}

                                    </div>
                                </div>

                                <AddToCartButton
                                    countInStock={countInStock}
                                    history={history}
                                    id={_id}
                                    qty={qty}
                                />
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default ProductScreen
