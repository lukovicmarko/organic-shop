import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartItem = ({ item }) => {
    const { id, name, image, qty, price, countInStock } = item;

    const dispatch = useDispatch();


    return (
        <div className="cart-item">
            <img src={image} className="cart-item__image" alt="" />
            <p>{name}</p>
            <select value={qty} onChange={(e) => dispatch(addToCart(id, Number(e.target.value)))}>
                {
                    [...Array(countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))
                }
            </select>
            <p>$ {price}</p>
            <i className="fas fa-trash" onClick={() => dispatch(removeFromCart(id))}></i>
        </div>
    )
}

export default CartItem
