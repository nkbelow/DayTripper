import React from 'react';

class SearchListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createEvent: false,
      eventDescription: '',
      eventHours: ''
    }
  };

  render() {
    return (
    	<li>
    		{this.props.result.name} – {this.props.result.review_count}
    	</li>
    )
  };
}

export default SearchListEntry;