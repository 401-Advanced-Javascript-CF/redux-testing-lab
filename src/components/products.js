import React from 'react';
import { selectProducts, reduceInventoryCount } from '../store/products.js';
import { connect } from 'react-redux';
import { addToCart } from '../store/cart.js'
import { Link } from 'react-router-dom';

function Products(props){
    let stuff = props.products.products.map((idk, index) => props.active.displayName === idk.category ?<><li key={index}>{idk.name}</li><button onClick={() => {
        props.addToCart(idk)
        props.reduceInventoryCount(idk);
    }}>Add to Cart</button>
    <Link to={`/product/${idk.id}`}>View Details</Link></>: "")


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
    addToCart,
    reduceInventoryCount
})
export default connect(mapStateToProps, mapDispatchToProps)(Products);