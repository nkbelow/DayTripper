import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: []
		}
	}

	render () {
		return (
			<div>
				<h1>Day Tripper</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));