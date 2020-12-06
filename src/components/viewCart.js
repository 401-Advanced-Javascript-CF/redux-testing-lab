import { connect } from 'react-redux';
import { removeFromAllCart } from '../store/cart.js';
import { useState } from 'react';

function ViewCart(props){
    const [message, setMessage] = useState();
    console.log(props);
    let product = props.cartItems.map(item => {
        return <><p>{item.name} {item.price} {item.count}</p></>;
    })
    if(product.length > 0){
        product.push(<button onClick={() => handleCheckout()}>Checkout</button>)
    }
    console.log(product);
    function handleCheckout(){
        console.log(message);
        setMessage('Thank you for shopping with us you peasant');
        props.removeFromAllCart();
    }
    return (
        <div>
            <h1>{message}</h1>
            {product}
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
       cartItems: state.cart.cart
} 
  }
  const mapDispatchToProps = ({
    removeFromAllCart
})
  export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);