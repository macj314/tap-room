import React from "react";
import PropTypes from "prop-types";

function BagDetail(props){
  const { bag, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h1>Bag Detail</h1>
      <h3>{bag.name}</h3>
      <h3>{bag.roast}</h3>
      <button onClick={()=> onClickingDelete(bag.id) }>Close Bag</button> { /* new code */ }
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