import React from 'react';

const SearchListEntry = (props) => (
	<li>
		{props.result.name} – {props.result.review_count}
	</li>
	)

export default SearchListEntry;