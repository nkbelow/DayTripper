import React from 'react';

const MapView = (props) => (
  <div id='map'>
  	<iframe
  	  width="100%"
  		height="500px"
  		frameBorder="0"
  		src={props.url}>
		</iframe>
  </div>
)

export default MapView;
