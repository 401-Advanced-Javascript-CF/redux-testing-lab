import React from 'react';
import { selectCartItems } from '../store/cart.js';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/cart.js';
import { updateInventory } from '../store/products.js';

function Cart(props){
let stuff = props.cart.cart.map((idk, index) => <><li key={index}>{idk.name}({idk.count}) <p onClick={() => {
    props.removeFromCart(idk)
    props.updateInventory(idk)
} }>X</p></li> </>)

    return (
        <div>
        <ul>
                {stuff}
        </ul>
        </div>
    )
}
const mapStateToProps = (state) => ({
  cart: state.cart,
  products: state.products
})

const mapDispatchToProps = ({
    selectCartItems,
    removeFromCart,
    updateInventory
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);