import React from 'react';
import EventEntry from './event-entry.jsx'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const eventTitleStyle = {
  background: '#22363F',
  marginBottom: 15,
  width: 680
};

const EventList = (props) => (
  <div id='event-list'>
  <MuiThemeProvider>
    <AppBar
      title="EVENTS"
      style={eventTitleStyle}
    />
  </MuiThemeProvider>
    <ol>
      {props.events.map((event, index) => <EventEntry
        key={index}
        index={index}
        event={event}
        events={props.events}
        removeEvent={props.removeEvent}
        updateEvent={props.updateEvent}/>
      )}
    </ol>
  </div>
);

export default EventList;