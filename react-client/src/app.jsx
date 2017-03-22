import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';
import MapView from './components/map.jsx';
import EventList from './components/event-list.jsx';

var dummyData = [
  {
  description: 'Breakfast with Fred',
  start: '9am',
  end: '11am',
  location: 'Omelette House',
  phone: '415-111-1111',
  address: '111 Street St San Francisco, CA 94102',
  latitude: 34.45,
  longitude: 31.45
  },

  {
  description: 'Greenfield with Beth',
  start: '1pm',
  end: '4pm',
  location: '7Leaves Cafe',
  phone: '415-111-2222',
  address: '222 Holly St San Francisco, CA 94102',
  latitude: 88.45,
  longitude: 38.45
  },

  {
  description: 'Clubbing with Marcus!',
  start: '10pm',
  end: '2am',
  location: 'Temple',
  phone: '415-333-4444',
  address: '333 Street St San Francisco, CA 94106',
  latitude: 89.45,
  longitude: 77.45
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    this.getEvents = this.getEvents.bind(this);
    this.createEvent = this.createEvent.bind(this);
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

  render() {
    return (
      <div>
        <h1>DAY TRIPPER</h1>
        <MapView />
        <Search createEvent={this.createEvent}/>
        <EventList events={this.state.events}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('app'));