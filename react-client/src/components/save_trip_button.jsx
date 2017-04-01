import React from 'react';
import {render} from 'react-dom';
import Modal from 'boron/DropModal';
import $ from 'jquery';




class SaveTripButton extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      title: '',
      accessToken: this.props.accessToken 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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


  handleSubmit (event) {
    event.preventDefault();
    let trip = {
      events: this.props.events,
      name: this.state.name,
      photos: [],
      participants: []
    };
    console.log(this.state.accessToken, 'imm passing down the access token in the savetripbutton file in the handlesubmit func');
    $.ajax({
      url: '/createTrip',
      type: 'POST',
      header: {access_token: this.state.accessToken},
      contentType: 'application/json',
      data: JSON.stringify(trip),
      success: (trip) => {
        console.log('success', trip);
        this.hideModal();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  render () {


    return (
      <div>
        <div><button onClick={this.showModal.bind(this)} id="save-trip">Save My Trip</button></div>
        <Modal ref="modal">
          <form onSubmit={this.handleSubmit}>

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
