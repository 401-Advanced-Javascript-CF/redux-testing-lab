import React from 'react';
import { selectProducts } from '../store/products.js';
import { connect } from 'react-redux';
import { addToCart } from '../store/cart.js'

function Products(props){
    let stuff = props.products.products.map((idk, index) => props.active.displayName === idk.category ?<><li key={index}>{idk.name}</li><button onClick={() => props.addToCart(idk)}>Add to Cart</button></>: "")
 

    return (
        <div>
        <ul>
                {stuff}
        </ul>
        </div>
    )
}
const mapStateToProps = (state) => ( {
  products: state.products,
  active: state.category.active
})

const mapDispatchToProps = ({
    selectProducts,
    addToCart
})
export default connect(mapStateToProps, mapDispatchToProps)(Products);