import React from 'react';
import SearchListEntry from './search-list-entry.jsx';

const SearchList = (props) => (
  <div>
    <h3> • SEARCH LIST </h3>
    <ol>
      {props.searchResults.map(result => <SearchListEntry
        key={result.id}
        result={result}
        createEvent={props.createEvent}/>
      )}
    </ol>
  </div>
);

export default SearchList;