import React from 'react';
import { selectCartItems } from '../store/cart.js';
import { connect } from 'react-redux';

function Cart(props){
let stuff = props.cart.cart.map((idk, index) => <li key={index}>{idk.name}</li>)
 

    return (
        <div>
        <ul>
                {stuff}
        </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
 return {cart: state.cart}
}

const mapDispatchToProps = {selectCartItems}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);