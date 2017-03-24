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
      events: [],
      username: '',
      mapUrl: null,
    }
    this.getEvents = this.getEvents.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.login = this.login.bind(this);
    this.mapRender = this.mapRender.bind(this);
    this.getEvents();
  };

  login(loginInfo) {
    $.ajax({
      url: '/login',
      type: 'GET',
      contentType: 'application/json',
      data: JSON.stringify(loginInfo),
      success: (data) => {
        this.setState({
          username: data
        });
        this.getEvents();
      },
      error: () => {
        console.error(error);
      }
    })
  };

  getEvents() {
    const userInfo = {
      username: this.state.username
    };
    $.ajax({
      url: '/getEvents',
      type: 'GET',
      contentType: 'application/json',
      data: JSON.stringify(userInfo),
      success: (data) => {
        this.setState({
          events: data
        })
        this.mapRender();
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

  removeEvent(obj) {
    $.ajax({
      url: '/removeEvent',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(obj),
      success: () => {
        console.log('success');
        this.getEvents();
      },
      error: () => {
        console.error(error);
      }
    })
  };

  mapRender() {
    console.log('this.state.events: ', this.state.events);
    if (this.state.events.length === 0) {
      this.setState({
        mapUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAX5TQtLwqyLjSV4TIk1I0ePRUUut8rAf0&q=944+Market+Street,San+Francisco'
      })
    } else if (this.state.events.length === 1) {
      this.setState({
        mapUrl: `https://www.google.com/maps/embed/v1/place?key=AIzaSyAX5TQtLwqyLjSV4TIk1I0ePRUUut8rAf0&q=${this.state.events[0].address.split(' ').join('+')}`
      })
    }
    var baseUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAX5TQtLwqyLjSV4TIk1I0ePRUUut8rAf0`;
    var origin = `&origin=${this.state.events[0].address.split(' ').join('+')}`;
    var destination = `&destination=${this.state.events[this.state.events.length - 1].address.split(' ').join('+')}`;
    var url = baseUrl + origin + destination;
    for (var i = 1; i < this.state.events.length - 1; i++) {
      var queried = this.state.events[i].address.split(' ').join('+');
      if (i === 1) {
        url += `&waypoints=${queried}|`;
      } else {
        url += `${queried}|`;
      }
    }
    url = url.slice(0, url.length - 1);
    this.setState({
      mapUrl: url,
    })
  }

  render() {
    return (
      <div>
        <h1>DAY TRIPPER</h1>
        <MapView url={this.state.mapUrl}/>
        <Search
          createEvent={this.createEvent}
          username={this.state.username}
        />
        <EventList
          events={this.state.events}
          removeEvent={this.removeEvent}
        />
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('app'));