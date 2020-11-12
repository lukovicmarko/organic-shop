import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import AddToCartButton from './AddToCartButton';

const Product = ({ product }) => {
    const { _id, name, image, price, countInStock, rating, numReviews } = product;

    return (
        <div className="product">
            <div className="product-countInStock" style={{ backgroundColor: countInStock == 0 ? '#EE3C43' : '#FFFFFF' }}>
                {countInStock == 0 && 'Sold out'}
            </div>
            <Link to={`/product/${_id}`}>
                <img src={image} className="product-image" alt="product.png" />
            </Link>

            <Link to={`/product/${_id}`} className="product-name">
                <strong>{name} - 1 Kg</strong>
            </Link>

            <Rating value={rating} text={` ${numReviews} reviews`} />

            <h3 className="product-price">$ {price}</h3>

            {/* <AddToCartButton
                history={history}
                id={_id}
                qty={countInStock}
            /> */}

        </div>
    )
}

export default Product;
