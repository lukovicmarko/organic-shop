import { combineReducers } from 'redux';
import { products, productDetails } from './products';
import { cart } from './cart';
import { userLogin } from './users';

export default combineReducers({
    products,
    productDetails,
    cart,
    userLogin
});