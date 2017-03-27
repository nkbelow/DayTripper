import React from 'react';
import EventEntry from './event-entry.jsx'

const EventList = (props) => (
  <div id='event-list' style={eventsStyle}>
    <h3> Events </h3>
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

const eventsStyle = {
  display: 'inline-block',
  float: 'left',
  marginTop: 20,
};

export default EventList;