const initialState = {
    products: [
      {name: 'Rampage', inventoryCount: 5, price: 10, category: 'Staffordshire Terrier', id: 1},
      {name: 'Spike', inventoryCount: 6, price: 20, category: 'German Shepherd', id: 2},
      {name: 'Boots', inventoryCount: 3, price: 200, category: 'Border Collie', id: 3}
    ],
    current: {}
  }
  
  export const selectProducts = (stuff) => {
    return {
      type: 'Products',
      payload: stuff
    }
  }
  export const selectProductsById = (stuff) => {
    console.log(stuff)
    return {
      type: 'ProductsId',
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
          return {...state};
       case 'ProductsId':
         console.log('i made it');
         for(let ele of state.products){
           if(ele.id === payload){
             return {...state, current: ele}
           }
           else {
             return {...state}
           }
         }
        default:
         return state;
    }
  }
  
  export default productsReducer;