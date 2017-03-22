import React from 'react';

class EventEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifRemoveEvent: false,
    }
    this.ifRemoveEvent = this.ifRemoveEvent.bind(this);
    this.onRemoveEvent = this.onRemoveEvent.bind(this);
  }


  ifRemoveEvent() {
    this.setState({
      ifRemoveEvent: !this.state.ifRemoveEvent
    })
  }



  onRemoveEvent() {
    console.log('index', this.props.events[this.props.index]);
    const selectedEvent = this.props.events[this.props.index];
    this.props.removeEvent(selectedEvent)
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
                <button onClick={this.onRemoveEvent}>Remove</button>
              </div>
          </li>
        </div>  
    )
  }
}

export default EventEntry;