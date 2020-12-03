import React from 'react';
import { selectProducts } from '../store/products.js';
import { connect } from 'react-redux';

function Products(props){
    console.log(props);
let display;
    let stuff = props.products.products.map((idk, index) => props.active.displayName === idk.category ?<li key={index}>{idk.name}</li>: "")
console.log(stuff)
 

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

const mapDispatchToProps = {selectProducts}
export default connect(mapStateToProps, mapDispatchToProps)(Products);