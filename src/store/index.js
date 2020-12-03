import { createStore, combineReducers } from 'redux';

// these are the reducers that will manage our store.
import category from './categories.js';
import products from './products.js';
import cart from './cart.js';


// all the magic happends
const reducers = combineReducers({
    category,
    products,
    cart
});

// create this funciton to be run when we feed it to our Provider
const store = () => {
  return createStore(reducers); // add reducers and middleware to our createStore function
}

export default store;