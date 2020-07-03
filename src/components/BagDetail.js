import React from "react";
import PropTypes from "prop-types";

function BagDetail(props){
  const { bag, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Bag Details</h1>
      <h3>Name: {bag.name}</h3>
      <h3>Roast: {bag.roast}</h3>
      <h4>Price: ${bag.price}</h4>
      <h4>Beans Remaining: {bag.stock}oz</h4>
      <button onClick={()=> onClickingDelete(bag.id) }>Remove this bag from list</button>
      <hr/>
    </React.Fragment>
  );
}

BagDetail.propTypes = {
  bag: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BagDetail;