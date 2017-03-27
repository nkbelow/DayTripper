import React from 'react';
import {Button} from 'react-bootstrap'

class EventEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifOptions: false,
      ifEditEvent: false,
      description: '',
      start: '',
      end: ''
    }
    this.ifOptions = this.ifOptions.bind(this);
    this.ifEditEvent = this.ifEditEvent.bind(this);
    this.onRemoveEvent = this.onRemoveEvent.bind(this);
    this.onUpdateEvent = this.onUpdateEvent.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
  };

  ifOptions() {
    this.setState({
      ifOptions: !this.state.ifOptions
    })
  };

  ifEditEvent() {
    this.setState({
      ifEditEvent: !this.state.ifEditEvent,
      ifOptions: false,
    })
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

  onUpdateEvent() {
    var newEventInfo = {
      location: {location: this.props.event.location},
      newInfo: {description: this.state.description,
                start: this.state.start,
                end: this.state.end}
    };
    this.props.updateEvent(newEventInfo);
    this.ifOptions();
    this.ifEditEvent();
  };

  onRemoveEvent() {
    console.log('DELETED EVENT:', this.props.events[this.props.index]);

    const selectedEvent = this.props.events[this.props.index];
    this.props.removeEvent(selectedEvent)
  };

  render() {
    const eventStyle = {
      width: 600,
      fontSize: 18,
      paddingBottom: 15,
      cursor: 'pointer'
    };

    const eventStyleIfOptions = {
      width: 600,
      fontSize: 18,
      cursor: 'pointer'
    };

    var timeBox = {
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

    var descBox = {
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

    if (this.state.ifEditEvent) {
      return (
        <li>
          <div>
            description:
            <input
              placeholder={this.props.event.description}
              style={descBox}
              type="text"
              onChange={this.onDescChange}
            />
          </div>

          <div style={{width:680}}>
            <input
              placeholder={this.props.event.start}
              style={timeBox}
              type="text"
              onChange={this.onStartChange}
            />

            |
            <input
              placeholder={this.props.event.end}
              style={timeBox}
              type="text"
              onChange={this.onEndChange}
            />

            <Button style={{marginBottom: 10}} onClick={this.onUpdateEvent}>UPDATE</Button>
            <Button style={{marginBottom: 10}} onClick={this.ifEditEvent}>CANCEL</Button>
          </div>
        </li>
      )
    };

    if (this.state.ifOptions) {
      return (
        <li>
          <div style={eventStyleIfOptions} onClick={this.ifOptions}>
            {this.props.event.description} – from {this.props.event.start} to {this.props.event.end}
            <div>
            at {this.props.event.location} ({this.props.event.address})
            </div>
          </div>

          <div>
            <Button style={{marginBottom: 10}} onClick={this.onRemoveEvent}>REMOVE</Button>
            <Button style={{marginBottom: 10}} onClick={this.ifEditEvent}>EDIT</Button>
          </div>
        </li>
      )

    } else {
      return (
        <li>
          <div style={eventStyle} onClick={this.ifOptions}>
            {this.props.event.description} – from {this.props.event.start} to {this.props.event.end}
            <div>
            at {this.props.event.location} ({this.props.event.address})
            </div>
          </div>
        </li>
      )
    }
  };
};

export default EventEntry;