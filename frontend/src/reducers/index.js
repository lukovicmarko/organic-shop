import { combineReducers } from 'redux';
import { products, productDetails } from './products';
import { cart } from './cart';

export default combineReducers({
    products,
    productDetails,
    cart
});