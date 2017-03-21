import React from 'react';

const EventEntry = (props) => (
  <div id='event-entry'>
    <li>
      {props.event.eventDescription}
        <div>
          {props.event.eventHours} at {props.event.business}
        </div>
    </li>
  </div>
)

export default EventEntry;