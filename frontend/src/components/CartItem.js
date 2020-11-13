import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartItem = ({ item }) => {
    const { id, name, image, qty, price, countInStock } = item;

    const dispatch = useDispatch();

    const removeItem = id => {
        const confirm = window.confirm('Are u sure you want to remove this phone from cart?');

        if (confirm) {
            dispatch(removeFromCart(id));
        } else {
            return false;
        }
    }

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
            <i className="fas fa-trash" onClick={() => removeItem(id)}></i>
        </div>
    )
}

export default CartItem
