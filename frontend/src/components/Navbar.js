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
                <li><Link to="/">Explore</Link></li>
                <li><Link to="/">About</Link></li>
                {
                    userInfo ? (
                        <li className="dropdown">
                            <Link to="/" className="dropbtn">{userInfo.name}</Link>
                            <div className="dropdown-content">
                                <Link to="/">Link 1</Link>
                                <Link to="/" onClick={() => dispatch(logout())}>Logout</Link>
                            </div>
                        </li>
                    ) : (
                            <>
                                <li className="navbar-link">
                                    <Link to="/login">Sign In</Link>
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
                        )
                }


            </ul>
        </nav>
    )
}

export default Navbar
