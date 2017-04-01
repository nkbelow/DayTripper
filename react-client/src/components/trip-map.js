import React from 'react';

const TripMapView = (props) => (
  <div id='map'>
    <iframe
      width="100%"
      height="500px"
      frameBorder="0"
      src={props.mapUrl}>
    </iframe>
  </div>
)

export default TripMapView;
