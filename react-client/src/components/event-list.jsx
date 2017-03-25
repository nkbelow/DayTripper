import React from 'react';
import EventEntry from './event-entry.jsx'

const EventList = (props) => (
  <div id='event-list'>
    <h3> • EVENT LIST </h3>
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