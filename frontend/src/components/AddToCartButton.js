import React from 'react';

const AddToCartButton = ({ history, id, qty, countInStock }) => {

    const addToCartHandler = () => {
        history.push(`/cart/${id}?qty=${qty}`);
    }

    return (
        <button
            className="btn"
            onClick={addToCartHandler}
            type="button"
            disabled={countInStock === 0}
            style={{
                backgroundColor: countInStock === 0 ? '#BEBEBD' : '#22BBA7'
            }}
        >
            Add to cart
        </button>
    )
}

export default AddToCartButton;
