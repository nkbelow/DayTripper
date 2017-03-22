import React from 'react';

class EventEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifRemoveEvent: false,
      selectedEvent: {}
    }
    this.ifRemoveEvent = this.ifRemoveEvent.bind(this);
  }


  ifRemoveEvent() {
    this.setState({
      ifRemoveEvent: !this.state.ifRemoveEvent
    })
    console.log(this.state.ifRemoveEvent);
  }

  render () {
    if (!this.state.ifRemoveEvent) {
      return (
        <div id='event-entry' onClick={this.ifRemoveEvent}>
          <li>
            {this.props.event.description}
              <div>
                {this.props.event.start} – {this.props.event.end} at {this.props.event.location}
              </div>
          </li>
        </div>    
      )      
    } 
    return (
        <div id='event-entry'>
          <li>
            {this.props.event.description}
              <div>
                {this.props.event.start} – {this.props.event.end} at {this.props.event.location}
              </div>
              <div>
                <button onClick={this.props.removeEvent}>Remove</button>
              </div>
          </li>
        </div>  
    )
  }
}

export default EventEntry;