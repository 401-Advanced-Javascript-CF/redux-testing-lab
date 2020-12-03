const initialState = {
    cart: [],
    total: 0
  }
  
  export const selectCartItems = (stuff) => {
    return {
      type: 'SELECT_CART_ITEMS',
      payload: stuff
    }
  }

  export const addToCart = (stuff) => {
      console.log(stuff);
    return {
      type: 'ADD_TO_CART',
      payload: stuff
    }
  }

  export const removeFromCart = (stuff) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: stuff
    }
  }
  
  
  // What should be done to our initial state?
  const cartReducer = (state = initialState, action) => {
    let { payload, type } = action;
    switch(type){
      case 'SELECT_CART_ITEMS':
       return state;
       case 'ADD_TO_CART':
           let newArray = {count: state.count +1, cart: [...state.cart, payload]};
       return newArray;
       case 'REMOVE_FROM_CART':
        let removal = state.cart.filter(value => value.name !== payload.name)
           return removal;
       default:
         return state;
    }
    // this returns the new state.
}
  
  export default cartReducer;