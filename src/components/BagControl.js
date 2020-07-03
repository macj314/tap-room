import React from 'react';
import NewBagForm from './NewBagForm';
import BagList from './BagList';
import BagDetail from './BagDetail';
import EditBagForm from './EditBagForm';

class BagControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBagList: [],
      selectedBag: null
    };
  }

  handleClick = () => {
    if (this.state.selectedBag != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBag: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedBag = (id) => {
    const selectedBag = this.state.masterBagList.filter(bag => bag.id === id)[0];
    this.setState({selectedBag: selectedBag});
  }

  handleDeletingBag = (id) => {
    const newMasterBagList = this.state.masterBagList.filter(bag => bag.id !== id);
    this.setState({
      masterBagList: newMasterBagList,
      selectedBag: null,
      editing: false
    });
  }

  handleAddingNewBagToList = (newBag) => {
    const newMasterBagList = this.state.masterBagList.concat(newBag);
    this.setState({
      masterBagList: newMasterBagList,
      formVisibleOnPage: false
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingBagInList = (bagToEdit) => {
    const editedMasterBagList = this.state.masterBagList
      .filter(bag => bag.id !== this.state.selectedBag.id)
      .concat(bagToEdit);
    this.setState({
        masterBagList: editedMasterBagList,
        editing: false,
        selectedBag: null
      });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditBagForm bag = {this.state.selectedBag} />
      buttonText = "Return to Bag List";
    } 
    else if (this.state.selectedBag != null) {
      currentlyVisibleState = 
      <BagDetail 
        bag = {this.state.selectedBag} 
        onClickingDelete = {this.handleDeletingBag} 
        onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Bag List";
      // While our BagDetail component only takes placeholder data, we will eventually be passing the value of selectedBag as a prop.
    }
    else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <NewBagForm onNewBagCreation={this.handleAddingNewBagToList}  />;
      buttonText = "Return to Bag List";
    } else {
      currentlyVisibleState = <BagList bagList={this.state.masterBagList} onBagSelection={this.handleChangingSelectedBag} />;
      // Because a user will actually be clicking on the bag in the Bag component, we will need to pass our new handleChangingSelectedBag method as a prop.
      buttonText = "Add Bag";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default BagControl;