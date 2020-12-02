const initialState = {
    category: [{name: 'Rmpage', inventoryCount: 1, price: 10, category: 'Staffordshire Terrier' }],
    active: ''
  }
  
  
  // What should be done to our initial state?
  const productsReducer = (state = initialState, action) => {
    return state;
  }
  
  export default productsReducer;