import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class PictureModal extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    picData: ''
  };
  // this.handleOpen = this.handleOpen.bind(this);
  this.updatePicData = this.updatePicData.bind(this);
  this.handleDataSubmit = this.handleDataSubmit.bind(this);
}

// handleOpen() {
//   this.setState({open: true});
// };

updatePicData(e) {
// console.log('submitted data', e.target.value)
const imageData = document.getElementById('takePictureField').files[0];
this.setState({picData: imageData})
console.log('submitted data test var', imageData);
}

handleDataSubmit() {
this.props.handleClose();
this.props.handleSubmit(this.state.picData);
}


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onClick={this.handleDataSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Click or tap here to take/upload a photo for this memory"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
        <input type="file" capture="camera" accept="image/*" id="takePictureField" onChange={this.updatePicData}/>
        </Dialog>
      </div>
    );
  }
}

export default PictureModal;