import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class SearchDialogModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      description: '',
      start: '',
      end: '',
    };
    this.onCreateEvent = this.onCreateEvent.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
  }

  onCreateEvent() {
    var eventInfo = {
      description: this.state.description,
      start: this.state.start,
      end: this.state.end,
      location: this.props.result.name,
      phone: this.props.result.display_phone,
      address: this.props.result.location.display_address.join(', '),
      latitude: this.props.result.coordinates.latitude,
      longitude: this.props.result.coordinates.longitude,
      image_url: this.props.result.image_url
    };
    console.log('on create event info', eventInfo)
    this.props.createEvent(eventInfo);
    this.props.handleClose();
  };


  onDescChange(e) {
    this.setState({
      description: e.target.value
    })
  };

  onStartChange(e) {
    this.setState({
      start: e.target.value
    })
  };

  onEndChange(e) {
    this.setState({
      end: e.target.value
    })
  };

  render() {
      const timeBox = {
      width: 70,
      marginRight: 10,
      marginLeft: 10,
      textAlign: 'center',
      fontFamily: 'Century Gothic',
      fontSize: 17,
      border: 0,
      outline: 0,
      background: 'transparent',
      borderBottom: '1px solid black',
      display: 'inline-block'
    };

    const descBox = {
      width: 300,
      marginRight: 15,
      marginLeft: 5,
      textAlign: 'center',
      fontFamily: 'Century Gothic',
      fontSize: 17,
      border: 0,
      outline: 0,
      background: 'transparent',
      borderBottom: '1px solid black',
      display: 'inline-block'
    };

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Create"
        primary={true}
        onClick={this.onCreateEvent}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Schedule an event"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
          <div>
            description:
            <input
              style={descBox}
              type="text"
              onChange={this.onDescChange}
            />
          </div>

          <div>
            <input
              placeholder='start'
              style={timeBox}
              type="text"
              onChange={this.onStartChange}
            />

            |
            <input
              placeholder='end'
              style={timeBox}
              type="text"
              onChange={this.onEndChange}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}