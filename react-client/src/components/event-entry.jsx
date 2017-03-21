import React from 'react';

const EventEntry = (props) => (
  <div id='event-entry'>
    <li>
      {props.event.eventTitle} at {props.event.business}
    </li>
  </div>
)

export default EventEntry;