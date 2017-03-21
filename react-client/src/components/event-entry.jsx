import React from 'react';

const EventEntry = (props) => (
  <div id='event-entry'>
    <li>
      {props.event.description}
        <div>
          {props.event.start} – {props.event.end} at {props.event.location}
        </div>
    </li>
  </div>
)

export default EventEntry;