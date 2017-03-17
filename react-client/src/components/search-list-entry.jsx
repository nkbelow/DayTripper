import React from 'react';

// Test
const SearchListEntry = (props) => (
	<div>
		{props.result.name} – {props.result.review_count}
	</div>
	)

export default SearchListEntry;