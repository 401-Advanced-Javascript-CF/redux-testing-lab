const initialState = {
    products: [{name: 'Rampage', inventoryCount: 5, price: 10, category: 'Staffordshire Terrier'}],
  }
  
  export const selectProducts = (stuff) => {
    return {
      type: 'Products',
      payload: stuff
    }
  }

  export const updateInventory = (stuff) => {
    return {
      type: 'UPDATE',
      payload: stuff
    }
  }

  export const reduceInventoryCount = (stuff) => {
    return {
      type: 'REMOVE',
      payload: stuff
    }
  }
  // What should be done to our initial state?
  const productsReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch(type){
      case 'UPDATE':
        let newProducts = state.products;
        for(let i = 0; i < newProducts.length; i++){
          if(newProducts[i].name == payload.name){
            newProducts[i].inventoryCount += payload.count;
            newProducts[i].count = 0;
            console.log(newProducts[i]);
            return {products: [...newProducts]}
          }
        }
       return {...state};
       case 'REMOVE':
        let newProducts2 = state.products;
        for(let i = 0; i < newProducts2.length; i++){
          if(newProducts2[i] == payload){
            newProducts2[i].inventoryCount--;
            console.log(newProducts2[i]);
            return {products: [...newProducts2]}
          }
        }
          return {...state}
       default:
         return state;
    }
  }
  
  export default productsReducer;