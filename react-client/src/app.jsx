import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';
import MapView from './components/map.jsx';
import EventList from './components/event-list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    this.getEvents = this.getEvents.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.getEvents();
  };

  getEvents() {
    $.ajax({
      url: '/getEvents',
      type: 'GET',
      success: (data) => {
        this.setState({
          events: data
        })
      },
      error: () => {
        console.error(error)
      }
    })
  };

  createEvent(eventInfo) {
    $.ajax({
      url: '/createEvent',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(eventInfo),
      success: () => {
        this.getEvents();
      },
      error: () => {
        console.error(error);
      }
    })
  };

  removeEvent(eventObj) {
    $.ajax({
      url: '/removeEvent',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(eventObj),
      success: () => {
        this.getEvents();
      },
      error: () => {
        console.error(error);
      }
    })
  };

  render() {
    return (
      <div>
        <h1>DAY TRIPPER</h1>
        <MapView />
        <Search createEvent={this.createEvent}/>
        <EventList
          events={this.state.events}
          removeEvent={this.removeEvent}
        />
      </div>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));