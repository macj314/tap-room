import React from "react";
import Bag from "./Bag";
import PropTypes from "prop-types";

function BagList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.bagList.map((bag) =>
        <Bag
          whenBagClicked = { props.onBagSelection }
          names={bag.names}
          location={bag.location}
          issue={bag.issue}
          id={bag.id}
          key={bag.id}/>
      )}
    </React.Fragment>
  );
}

BagList.propTypes = {
  bagList: PropTypes.array,
  onBagSelection: PropTypes.func
};

export default BagList;