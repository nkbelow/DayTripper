import React from 'react';

class EventEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifRemoveEvent: false,
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
          <li onClick={this.props.removeEvent}>
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
                <input type="text" />
              </div>
          </li>
        </div>  
    )
  }
}

export default EventEntry;