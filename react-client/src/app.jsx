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
      username: ''
    }
    this.getEvents = this.getEvents.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.login = this.login.bind(this);
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
  }

  render() {
    return (
      <div>
        <h1>DAY TRIPPER</h1>
        <MapView />
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