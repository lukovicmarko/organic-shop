import { combineReducers } from 'redux';
import { products, productDetails } from './products';

export default combineReducers({
    products,
    productDetails,
});