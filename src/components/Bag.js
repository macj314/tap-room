import React from "react";
import PropTypes from "prop-types";

function Bag(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBagClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.roast}</h4>
        {/* <p><em>{props.flavors}</em></p> */}
        <hr/>
      </div>
    </React.Fragment>
  );
}

Bag.propTypes = {
  name: PropTypes.string,
  roast: PropTypes.string,
  // flavors: PropTypes.string,
  id: PropTypes.string,
  whenBagClicked: PropTypes.func
};

export default Bag;