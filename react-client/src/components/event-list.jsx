import React from 'react';
import EventEntry from './event-entry.jsx'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const eventTitleStyle = {
  background: '#22363F',
  marginBottom: 15,
  width: 680
};
const handleSubmit = () => {

};
const EventList = (props) => (
  <div id='event-list'>
  <MuiThemeProvider>
    <AppBar
      title="EVENTS"
      style={eventTitleStyle}
    />
  </MuiThemeProvider>
    <form onSubmit={handleSubmit.bind(this)}>
      <input type="file" name="image"></input><button type="submit">Upload</button>
    </form>
    <ol style={{overflow: 'auto', width: 680, height: 180}} >
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