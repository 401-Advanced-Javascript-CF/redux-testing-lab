const initialState = {
    products: [{name: 'Rampage', inventoryCount: 1, price: 10, category: 'Staffordshire Terrier' }],
  }
  
  export const selectProducts = (stuff) => {
    return {
      type: 'Products',
      payload: stuff
    }
  }
  // What should be done to our initial state?
  const productsReducer = (state = initialState, action) => {
    return state;
  }
  
  export default productsReducer;