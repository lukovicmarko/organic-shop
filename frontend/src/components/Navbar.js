import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>Organic Shop</h1>
            </Link>
            <ul>
                <li><Link to="/">Explore</Link></li>
                <li><Link to="/">About</Link></li>
                <li className="navbar-link">
                    <Link to="/">Sing In</Link>
                </li>
                <li id="navbar-cart">
                    <Link to="/cart">
                        <img src="/icons/cart.png" className="navbar-cart__image" alt="cart.png" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
