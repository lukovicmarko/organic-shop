import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
    const product = products.find(p => p._id === match.params.id);
    const { name, image } = product;
    return (
        <>
            <Link className="btn-light" to="/" >
                <i className="fas fa-angle-left"></i>
            </Link>
            <div className="product-details">
                <img src={image} className="product-details__image" alt="product-image.png" />
                <div>
                    {name}
                </div>
            </div>
        </>
    )
}

export default ProductScreen
