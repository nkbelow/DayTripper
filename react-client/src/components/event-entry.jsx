import React from 'react';

const EventEntry = (props) => (
  <div id='event-entry'>
    <div>
      {props.event.eventTitle} at {props.event.business}
    </div>
  </div>
)

export default EventEntry;