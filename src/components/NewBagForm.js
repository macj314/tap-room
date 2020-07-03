import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBagForm(props){

  function handleNewBagFormSubmission(event) {
    event.preventDefault();
    props.onNewBagCreation({name: event.target.name.value, roast: event.target.roast.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewBagFormSubmission}
        buttonText="Add Coffee" />
    </React.Fragment>
  );
}

NewBagForm.propTypes = {
  onNewBagCreation: PropTypes.func
};

export default NewBagForm;