import React from 'react';

class SearchListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createEvent: false,
      eventDescription: '',
      start: '',
      end: '',
    }
    this.createEvent = this.createEvent.bind(this);
  };

  createEvent() {
    this.setState({
      createEvent: !this.state.createEvent
    })
  };

  render () {
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

    if (this.state.createEvent) {
      return (
        <li>
          <div onClick={this.createEvent}>
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
            onChange={this.onStartChange}
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
          </div>
        </li>
      )

    } else {
      return (
        <li>
          <div onClick={this.createEvent}>
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