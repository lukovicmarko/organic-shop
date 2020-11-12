import React from 'react'

const CartItem = ({ item }) => {
    const { name, image, qty, price } = item;

    return (
        <div className="cart-item">
            <img src={image} className="cart-item__image" alt="" />
            <p>{name}</p>
            <p>{qty}</p>
            <p>$ {price}</p>
        </div>
    )
}

export default CartItem
