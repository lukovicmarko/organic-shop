import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartCount from './CartCount';
import { logout } from '../actions/userActions';

const Navbar = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;


    return (
        <nav className="navbar">
            <Link to="/">
                <h1>Organic Shop</h1>
            </Link>
            <ul>
                {
                    userInfo ? (
                        <>
                            <li className="dropdown">
                                <Link to="/" className="dropbtn">{userInfo.name.split(" ")[0]}</Link>
                                <div className="dropdown-content">
                                    <Link to="/profile">Profile</Link>
                                    <Link to="/" onClick={() => dispatch(logout())}>Logout</Link>
                                </div>
                            </li>
                            <div style={{ display: 'flex' }}>
                                <li id="navbar-cart">
                                    <Link to="/cart">
                                        <img src="/icons/shopping-bag.png" className="navbar-cart__image" alt="cart.png" />
                                    </Link>
                                </li>
                                <CartCount />
                            </div>
                        </>
                    ) : (

                            <li className="navbar-link">
                                <Link to="/login">Sign In</Link>
                            </li>

                        )
                }


            </ul>
        </nav>
    )
}

export default Navbar
