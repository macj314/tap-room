import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBagForm(props) {
  const { bag } = props;

  function handleEditBagFormSubmission(event) {
    event.preventDefault();
    props.onEditBag({ names: event.target.names.value, location: event.target.location.value, id: bag.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBagFormSubmission}
        buttonText="Update Bag" />
    </React.Fragment>
  );
}

EditBagForm.propTypes = {
  onEditBag: PropTypes.func
}

export default EditBagForm;