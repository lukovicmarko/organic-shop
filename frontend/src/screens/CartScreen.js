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

    const checkouttHandler = () => {
        history.push('/login?redirect=shipping');
    }

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
                            <div className="cart-subtotal">
                                <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                                <p>$ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}</p>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={checkouttHandler}
                                    type="button"
                                    disabled={cartItems.length === 0}
                                    style={{
                                        backgroundColor: cartItems.length === 0 ? '#BEBEBD' : '#22BBA7'
                                    }}
                                >
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                    )
            }

        </div>
    )
}

export default CartScreen;
