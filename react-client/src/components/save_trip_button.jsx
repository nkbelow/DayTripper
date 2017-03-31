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

  handleSubmit (trip) {
    let context = this;
    event.preventDefault();

    $.ajax({
      url: '',
      method: 'POST',
      data: JSON.stringify(trip),
      contentType: 'application/json',
      success: function(data) {
        console.log('Save trip');
      },
      error: function(err) {
        console.log('Error in saving trip');
        // this.props.history.push('/');
      }
    });

  }


  render () {


    return (
      <div>
        <div><button onClick={this.showModal.bind(this)} id="save-trip">Save My Trip</button></div>
        <Modal ref="modal">
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div className="col-md-8">
              <h4 className='create'>Give your event a title</h4>

              <input
                value={this.state.title}
                type="text"
                onChange={this.handleChange.bind(this, 'title')} required
              />
            </div>
            <div className="col-md-4">
                <h4 className='create'>Who's Going?</h4>
            </div>
            <div className="col-md-12">
                  <button type="submit">Save My Trip</button>
            </div>
          </form>

        </Modal>
      </div>)
  }
}


export default SaveTripButton;