import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewBagForm(props){

  function handleNewBagFormSubmission(event) {
    event.preventDefault();
    props.onNewBagCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewBagFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewBagForm.propTypes = {
  onNewBagCreation: PropTypes.func
};

export default NewBagForm;