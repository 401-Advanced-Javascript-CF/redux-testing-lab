// import {useLocation} from "react-router-dom";
import { connect } from 'react-redux';
import { selectProductsById } from '../store/products.js'

function ProductDetails(props){

    let product = props.products.map(item => {
        if(item.id == props.id){
        return <p>{item.name} {item.price} {item.inventoryCount}</p>;
        }
    })


    
    return (
        <div>
            {product}
            
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return{
       id: ownProps.match.params.id,
       products: state.products.products
} 
  }

const mapDispatchToProps = ({
    selectProductsById
})

  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);