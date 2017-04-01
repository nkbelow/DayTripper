import React from 'react';
import TripEventEntry from './trip-event-entry.js';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TripEventTile from './trip-event-tile.js';

const eventTitleStyle = {
  background: '#22363F',
  marginBottom: 15,
  width: '100%'
};

const TripEventList = (props) => (
  <div id='trip-event-list'>

    <MuiThemeProvider>
      <AppBar
        title="EVENTS"
        style={eventTitleStyle}
      />
    </MuiThemeProvider>
    <div style={{overflow: 'auto', width: '100%', height: 421}} >
      {props.events.map((event, index) => 
        <div key={index} className="container tripEventTile">
          <div className="row">
            <div className="col-md-2 col-xs-12">
              <TripEventTile />
            </div>
            <div className="col-md-2  col-xs-12">
            <TripEventEntry
            
            index={index}
            event={event}
            events={props.events}
            removeEvent={props.removeEvent}
            updateEvent={props.updateEvent}/>
            </div>
            <div className="col-md-2  col-xs-12">
              <button className="btn-primary btn-lg" style={{width: 154.5}}>Add Memory</button>
              <button onClick={props.showMemories} className="btn-info btn-lg">Show Memories</button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default TripEventList;



