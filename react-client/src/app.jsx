import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/search.jsx';
import MapView from './components/map.jsx';
import EventList from './components/event-list.jsx';
import Navbar from './components/navbar.jsx';
import TripGridList from './components/trip_grid.jsx';
import SaveTripButton from './components/save_trip_button.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Login from './components/login.jsx';
import IndividualTrip from './components/individual_trip.js';
import IndividualTrip from './components/individual-trip.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      username: '',
      mapUrl: null,
    };
    this.getEvents = this.getEvents.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.login = this.login.bind(this);
    this.mapRender = this.mapRender.bind(this);
  };
  
  componentDidMount() {
    this.getEvents();
  };

  login(loginInfo) {
    $.ajax({
      url: '/login',
      type: 'GET',
      data: loginInfo,
      success: (data) => {
        this.setState({
          username: data
        });
        this.getEvents();
      },
      error: (error) => {
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
      data: userInfo,
      success: (data) => {
        this.setState({
          events: data
        })
        this.mapRender();
      },
      error: (error) => {
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
      success: (event) => {
        console.log(event);
        let events = this.state.events.slice();
        events.push(event);
        this.setState({
          events: events
        });
        this.mapRender();
      },
      error: (error) => {
        console.error(error);
      }
    })
  };

  updateEvent(eventInfo) {
    $.ajax({
      url: '/updateEvent',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(eventInfo),
      success: () => {
        this.getEvents();
      },
      error: (error) => {
        console.error(error);
      }
    })
  };

  removeEvent(obj) {
    $.ajax({
      url: '/removeEvent',
      type: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify(obj),
      success: () => {
        console.log('success');
        this.getEvents();
      },
      error: (error) => {
        console.error(error);
      }
    })
  };

  mapRender() {
    if (this.state.events.length === 0) {
      this.setState({
        mapUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAX5TQtLwqyLjSV4TIk1I0ePRUUut8rAf0&q=944+Market+Street,San+Francisco'
      })
    } else if (this.state.events.length === 1) {
      this.setState({
        mapUrl: `https://www.google.com/maps/embed/v1/place?key=AIzaSyAX5TQtLwqyLjSV4TIk1I0ePRUUut8rAf0&q=${this.state.events[0].address.split(' ').join('+')}`
      })
    };

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
    };

    url = url.slice(0, url.length - 1);
    this.setState({
      mapUrl: url,
    });
  };

  render() {
    // return (
    //   <div>
    //     <Navbar/>
    //     <TripGridList/>
    //   </div>
    // )
    // return (
    //   <div>
    //   <Navbar/>
    //   <div style={appStyle}>
    //     <div className="row">
    //       <div className="col-md-6 col-xs-12">
    //         <Search
    //           createEvent={this.createEvent}
    //           username={this.state.username}
    //           style={searchStyle}
    //         />
    //       </div>
    //       <div className="col-md-6 col-xs-12">
    //         <div style={eventsMapStyle}>
    //         <MapView url={this.state.mapUrl}/>
    //         </div>
    //         </div>
    //       <div className="col-md-6 col-xs-12">
    //         <EventList
    //           events={this.state.events}
    //           removeEvent={this.removeEvent}
    //           updateEvent={this.updateEvent}
    //           style={eventStyle}
    //         />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )
    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <Login />
      <Navbar/>
      <div style={appStyle}>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <Search
              createEvent={this.createEvent}
              username={this.state.username}
              style={searchStyle}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <div style={eventsMapStyle}>
            <MapView url={this.state.mapUrl}/>
            </div>
            </div>
          <div className="col-md-6 col-xs-12">
            <EventList
              events={this.state.events}
              removeEvent={this.removeEvent}
              updateEvent={this.updateEvent}
              style={eventStyle}
            />
            </div>
            <div>
            <SaveTripButton events={this.state.events}/>
            </div>

          </div>
        </div>
=======
        <IndividualTrip />
>>>>>>> Add IndividualTrip view component, update app.jsx to import it
=======
        <IndividualTrip 
        removeEvent={this.removeEvent}
        updateEvent={this.updateEvent}
        mapUrl={this.state.mapUrl}
        events={this.state.events}/>
>>>>>>> Change file name from _ to -. Update app.jsx. Pass props down from app
      </div>
      );
  };
};

const appStyle = {
  margin: 'auto',
  paddingTop: 20,
  paddingBottom: 30,
  paddingLeft: 30,
  paddingRight: 30,
  // display: 'flex',
  flexStyle: 1,
  alignItems: 'center',
  fontFamily: 'Roboto',
}

const searchStyle = {
  display: 'inline-block',
  top: 0,
}

const eventStyle = {
  display: 'inline-block',
  marginTop: 20,
  width: '100%',
}

const bannerStyle = {
  display: 'flex',
  alignItems: 'center',
  flexStyle: 1,
  backgroundImage: 'url("http://i65.tinypic.com/2igc483.png"',
  backgroundColor: '#31434C',
  width: '100%',
  height: '40em'
}

const eventsMapStyle = {
  display: 'inline-block',
  width: '100%',
  // marginLeft: 50,
}

ReactDOM.render(<App />, document.getElementById('app'));