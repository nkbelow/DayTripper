import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SaveTripButton from './components/save_trip_button.jsx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/login.jsx';
import Homepage from './components/homepage.jsx';
import TripGridList from './components/trip_grid.jsx';
import Navbar from './components/navbar.jsx';
import IndividualTrip from './components/individual-trip.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authtoken: ''
    };

  }
  setToken(authtoken) {
    console.log(authtoken, 'this is the token');

    $.ajax({
      url: '/getEvents',
      type: 'GET',
      data: userInfo,
      success: (data) => {
        console.log('event data (app.js getEvents) :', data);
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
        console.error('error in app.jsx createEvent function', error);
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
      authtoken: authtoken
    });
  }

  render() {

    return (
      <Router>
        <div>
          <Route exact path='/' component={(props) => {
            return (<Login history={props.history} setToken={this.setToken.bind(this)} />)
          }} />
          <Route path='/homepage' component={(props) => {
            return (<Homepage authtoken={this.state.authtoken} />)
          }} />
          <Route path='/logout' component={(props) => {
            return (<Login history={props.history} setToken={this.setToken.bind(this)} />)
          }} />
          <Route path='/trips' component={TripGridList} />
        </div>
      </Router>
    )
  };
};


//This is used in the render function above in order to test the 'Trip' page
//Don't forget to remove the {}, you need to wrap it in {}
       // <Login />
    //        return (
    //           <IndividualTrip 
    //     mapUrl={this.state.mapUrl}
    //     events={this.state.events}/>
    // );



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


ReactDOM.render(<App />, document.getElementById('app'));