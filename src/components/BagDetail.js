import React from "react";
import PropTypes from "prop-types";

function BagDetail(props){
  const { bag, onClickingDelete, onClickingBrewCoffee, onClickingRestock} = props;

  return (
    <React.Fragment>
      <h1>Coffee Bag Details</h1>
      <h3>Name: {bag.name}</h3>
      <h3>Roast: {bag.roast}</h3>
      <h4>Price: ${bag.price}</h4>
      <h4>Beans Remaining: {bag.stock}oz</h4>
      <p>Note: our brewing standard is: 0.36oz/6oz of coffee grounds/water</p>
      <button onClick={()=> onClickingBrewCoffee(bag.id) }>Brew A Cup of Coffee</button>
      <button onClick={()=> onClickingRestock(bag.id) }>Restock Beans</button>
      <button onClick={()=> onClickingDelete(bag.id) }>Remove this bag from list</button>
      <hr/>
    </React.Fragment>
  );
}

BagDetail.propTypes = {
  bag: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingBrewCoffee: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default BagDetail;