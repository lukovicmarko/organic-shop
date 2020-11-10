import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({});
    const { name, image } = product;

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        }

        fetchProduct();
    }, [match]);

    return (
        <>
            <Link className="btn-light" to="/" >
                <i className="fas fa-angle-left"></i>
            </Link>
            <div className="product-details">
                <img src={image} className="product-details__image" alt="product.png" />
                <div>
                    {name}
                </div>
            </div>
        </>
    )
}

export default ProductScreen
