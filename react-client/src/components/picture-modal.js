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
    open: false,
  };
  this.handleOpen = this.handleOpen.bind(this);

}

handleOpen() {
  this.setState({open: true});
};



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
        onClick={this.props.handleClose}
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
          
          <input type="file" capture="camera" accept="image/*" id="takePictureField"/>
        </Dialog>
      </div>
    );
  }
}

export default PictureModal;