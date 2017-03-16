import React from 'react';
import SearchListEntry from './search-list-entry.jsx';

const SearchList = (props) => (
		<div>
			<h3>SEARCH LIST</h3>
			<div>
			{props.searchResults.map(searchResult => <SearchListEntry searchResult={searchResult}/>)}
			</div>
		</div>
	)

export default SearchList;