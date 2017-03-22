import React from 'react';
import EventEntry from './event-entry.jsx'

const EventList = (props) => (
  <div id='event-list'>
    <h3> • EVENT LIST </h3>
    <ol>
    {props.events.map((event, index) => <EventEntry 
      key={event._id} index={index} event={event} events={props.events}
      removeEvent={props.removeEvent}
      />)}
    </ol>
  </div>
)

export default EventList;