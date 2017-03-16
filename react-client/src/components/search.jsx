import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			input: ''
		}
		this.onInputChange = this.onInputChange.bind(this)
	}

	onInputChange (e) {
		this.setState({input: e.target.value});
		console.log(e.target.value);
	}

	render () {
		return (
			<div>
				<div>
				  <label>
				    Search:
				    <input type="text" onChange={this.onInputChange} />
				  </label>
				  <button>Submit</button>
				</div>
			</div>
		)
	}
}

export default Search;