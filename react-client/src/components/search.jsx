import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchList from './search-list.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      term: '',
      searchResults: []
    }
    this.onZipInputChange = this.onZipInputChange.bind(this)
    this.onTermInputChange = this.onTermInputChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  onZipInputChange (e) {
    this.setState({zipCode: e.target.value});
  }

  onTermInputChange (e) {
    this.setState({term: e.target.value});
  }

  onSearch () {
    var yelpQuery = {
    	zipCode: this.state.zipCode,
    	term: this.state.term
    };

    $.ajax({
      url: '/search',
      type: 'GET',
      data: yelpQuery,
      success: (data) => {
        this.setState({
          searchResults: data
        })
        console.log('SEARCH RESULTS:', this.state.searchResults);
      },

      error: (error) => {
        console.error('Yelp failed!', error);
      }
    })
  }

  render () {
    return (
      <div>
        <div>
            Find:
            <input type="text" onChange={this.onTermInputChange}/>
            Zip Code:
            <input type="text" onChange={this.onZipInputChange}/>
          <button onClick={this.onSearch}>Submit</button>
          <SearchList searchResults={this.state.searchResults} />
        </div>
      </div>
    )
  }
}

export default Search;