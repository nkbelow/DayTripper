import React from 'react';

class SearchListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifCreateEvent: false,
      description: '',
      start: '',
      end: '',
    }
    this.ifCreateEvent = this.ifCreateEvent.bind(this);
    this.onCreateEvent = this.onCreateEvent.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
  };

  onCreateEvent() {
    var eventInfo =   {
      description: this.state.description,
      start: this.state.start,
      end: this.state.end,
      location: this.props.result.name,
      phone: this.props.result.display_phone,
      address: this.props.result.location.display_address,
      latitude: this.props.result.coordinates.latitude,
      longitude: this.props.result.coordinates.longitude
    };

    this.props.createEvent(eventInfo);
  };

  ifCreateEvent() {
    this.setState({
      ifCreateEvent: !this.state.ifCreateEvent
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

  render() {
    var timeBox = {
      width: 70,
      marginRight: 10,
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

    if (this.state.ifCreateEvent) {
      return (
        <li>
          <div onClick={this.ifCreateEvent}>
          <a href={this.props.result.url.slice(0, this.props.result.url.indexOf('?'))}>
          {this.props.result.name.toUpperCase()}
          </a>
          </div>

          <div>
          description:
          <input
            placeholder="life's purpose"
            style={descBox}
            type="text"
            onChange={this.onDescChange}
          />
          </div>

          <div>
          start:
          <input
            placeholder='9am'
            style={timeBox}
            type="text"
            onChange={this.onStartChange}
          />

          | end:
          <input
            placeholder='6pm'
            style={timeBox}
            type="text"
            onChange={this.onEndChange}
          />
          <button onClick={this.onCreateEvent}>CREATE EVENT</button>
          </div>
        </li>
      )

    } else {
      return (
        <li>
          <div onClick={this.ifCreateEvent}>
          <a href={this.props.result.url.slice(0, this.props.result.url.indexOf('?'))}>
          {this.props.result.name.toUpperCase()}
          </a>
          </div>
        </li>
      )
    }
  };
}

export default SearchListEntry;