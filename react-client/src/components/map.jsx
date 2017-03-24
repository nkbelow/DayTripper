import React from 'react';

const MapView = (props) => (
  <div id='map'>
  	<iframe
  	  width="600"
  		height="450"
  		frameBorder="0"
  		src={props.url}>
		</iframe>
  </div>
)

export default MapView;
