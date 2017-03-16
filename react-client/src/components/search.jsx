import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResuts: []
		}
	}

	render () {
		return (
			<div>
				<form>
				  <label>
				    Search:
				    <input type="text" name="name" />
				  </label>
				  <input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default Search;