import React from 'react';
import { Link } from 'react-router-dom';
import CartCount from './CartCount';

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
                <div style={{ display: 'flex' }}>
                    <li id="navbar-cart">
                        <Link to="/cart">
                            <img src="/icons/shopping-bag.png" className="navbar-cart__image" alt="cart.png" />
                        </Link>
                    </li>
                    <CartCount />
                </div>

            </ul>
        </nav>
    )
}

export default Navbar
