import React from 'react';
import {render} from 'react-dom';
import Modal from 'boron/DropModal';
import $ from 'jquery';




class SaveTripButton extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  showModal () {
    this.refs.modal.show();
  }

  hideModal () {
    this.refs.modal.hide();
  }

  handleChange (name, event) {
    let newState = {};
    newState[name] = event.target.value;
    this.setState(newState);
  }


  render () {


    return (
      <div>
        <div><button onClick={this.showModal.bind(this)} id="save-trip">Save My Trip</button></div>
        <Modal ref="modal">
          <div className="col-md-8">
            <h4 className='create'>Give your event a title</h4>

            <input
              value={this.state.title}
              type="text"
              onChange={this.handleChange.bind(this, 'title')} required
            />
          </div>
          <div className="col-md-4">
              <h4 className='create'>Invite Friends</h4>
            </div>
        </Modal>
      </div>)
  }
}


export default SaveTripButton;