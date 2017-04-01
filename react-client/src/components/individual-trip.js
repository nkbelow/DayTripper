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
    //reuse map methods?
      //will need slight alterations to fit specifications of this page
    //reuse get events method?
    //new method for getting data for friends?
    //new method for getting data for photos
      //data for photos should allow for titling of photos



  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <h1>Title of My Trip</h1>

          <div className="row">
            <div className="col-md-6">   
              <TripEventList 
              removeEvent={this.props.removeEvent}
              updateEvent={this.props.updateEvent}
              events={this.props.events} 
            />
            </div>
            <div className="col-md-6">  
              <TripMapView mapUrl={this.props.mapUrl}/>
            </div>
            
          </div>

      </div>
    );
  };
};

export default IndividualTrip;

        // <MuiThemeProvider>
        //   <PhotoScroller />
        // </MuiThemeProvider> 