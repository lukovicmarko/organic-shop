import React from 'react'

const AddToCartButton = ({ history, id, qty }) => {

    const addToCartHandler = () => {
        history.push(`/cart/${id}?qty=${qty}`);
    }

    return (
        <a href="#" className="btn" onClick={addToCartHandler}>Add to cart</a>
    )
}

export default AddToCartButton;
