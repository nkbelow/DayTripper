import React from 'react';
import EventEntry from './event-entry.jsx'

const EventList = (props) => (
  <div id='event-list'>
    <h3>EVENT LIST</h3>
    <div>
    {props.events.map(event => <EventEntry event={event}/>)}
    </div>
  </div>
)

export default EventList;