import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';
import MapView from './components/map.jsx';
import EventList from './components/event-list.jsx';

var dummyData = [
  {
  eventDescription: 'Breakfast',
  eventHours: '10AM - 11AM',
  business: 'McDonalds',
  phone: '415-111-1111',
  address: '111 Street St San Francisco, CA 94102',
  longitude: 31.45,
  latitude: 34.45
  },

  {
  eventDescription: 'Rest!',
  eventHours: '1PM - 2PM',
  business: 'Some cafe',
  phone: '415-111-2222',
  address: '222 Holly St San Francisco, CA 94102',
  longitude: 38.45,
  latitude: 88.45
  },

  {
  eventDescription: 'Clubbing',
  eventHours: '9AM - 2AM',
  business: 'Temple',
  phone: '415-333-4444',
  address: '333 Street St San Francisco, CA 94106',
  longitude: 77.45,
  latitude: 89.45
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: dummyData
    }
    this.getEvents = this.getEvents.bind(this);
    this.createEvent = this.createEvent.bind(this);
  }

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

  createEvent() {
    $.ajax({
      url: '/createEvent',
      type: 'POST',
      data: 'blah',

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
        <Search />
        <EventList events={this.state.events}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('app'));