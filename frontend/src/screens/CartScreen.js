import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { addToCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id;

    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            {
                cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <div className="cart-empty__items">
                            <Link className="btn-light" to="/" >
                                <i className="fas fa-angle-left"></i>
                            </Link>
                            <h1>Your cart is empty</h1>
                        </div>
                        <img src="images/empty-cart.png" alt="" />
                    </div>
                ) : (
                        <div className="cart-content">
                            <div className="cart-items">
                                {
                                    cartItems.map(item => (
                                        <CartItem item={item} key={item.id} />
                                    ))
                                }
                            </div>
                            <div>
                                subtotal
                            </div>
                        </div>
                    )
            }

        </div>
    )
}

export default CartScreen;
