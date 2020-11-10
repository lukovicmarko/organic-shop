import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


const Product = ({ product }) => {
    const { _id, name, image, price, rating } = product;

    return (
        <div className="product">
            <Link to={`/product/${_id}`}>
                <img src={image} className="product-image" alt="product.png" />
            </Link>

            <Link to={`/product/${_id}`}>
                <div>
                    <strong>{name} - 1 Kg</strong>
                </div>
            </Link>

            <h3 className="product-price">$ {price}</h3>


            <a href="#" className="btn">Add to cart</a>
        </div>
    )
}

export default Product;
