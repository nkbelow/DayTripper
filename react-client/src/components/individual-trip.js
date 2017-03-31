import React from 'react';
import Navbar from './navbar.jsx';
import TripEventList from './trip-event-list.js';
import TripMapView from './trip-map.js';
import PhotoScroller from './photo-scroller.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class IndividualTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //data that will be needed
        //events - populates from table of events associated with the trip.
        //trip id?  user id? title of trip?
        //map url

    };
    //bind methods here


  };
  //add new methods here
    //reuse map methods
      //will need slight alterations to fit specifications of this page
    //reuse get events method?
    //new method for getting data for friends?
    //new method for getting data for photos



  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <h1>Title of My Trip</h1>
        <TripMapView mapUrl={this.props.mapUrl}/>
        <MuiThemeProvider>
          <PhotoScroller />
        </MuiThemeProvider>          
        <TripEventList 
        removeEvent={this.props.removeEvent}
        updateEvent={this.props.updateEvent}
        events={this.props.events} 
        />
      </div>
    );
  };
};

export default IndividualTrip;