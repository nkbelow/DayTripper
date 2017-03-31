import React from 'react';
import {render} from 'react-dom';
import Modal from 'boron/DropModal';
import $ from 'jquery';


class SaveTripButton extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    return (
      <div><button className="col-md-3" id="save-trip">Save My Trip</button></div>
    )
  }
}


export default SaveTripButton;