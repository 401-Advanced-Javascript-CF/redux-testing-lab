import React from 'react';
import { selectCategory } from '../store/categories.js';
import { connect } from 'react-redux';

function Categories(props){
    // console.log(props.category.category);
let stuff = props.category.category.map((idk, index) => <li><a key={index} href="#" onClick={()=> props.selectCategory(idk)} >{idk.displayName}</a></li>);

    return (
        <div>
        <ul>
                {stuff}
        </ul>
    <h1>{props.category.active.displayName}</h1>
    <p>{props.category.active.description}</p>
        </div>
    )
}
const mapStateToProps = (state) => ( {
  category: state.category
})

const mapDispatchToProps = {selectCategory}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);