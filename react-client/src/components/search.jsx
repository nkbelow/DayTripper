import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchList from './search-list.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      term: '',
      searchResults: []
    }
    this.onZipInputChange = this.onZipInputChange.bind(this)
    this.onTermInputChange = this.onTermInputChange.bind(this)
    this.pressEnterSearch = this.pressEnterSearch.bind(this)
    this.search = this.search.bind(this)
  };

  onZipInputChange(e) {
    this.setState({location: e.target.value});
  };

  onTermInputChange(e) {
    this.setState({term: e.target.value});
  };

  pressEnterSearch(e) {
    if (e.charCode == 13) {
      this.search();
    }
  };

  search() {
    var yelpQuery = {
    	location: this.state.location,
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
  };

  render() {
    var inputBox = {
      width: 150,
      marginRight: 15,
      marginLeft: 5,
      textAlign: 'center',
      fontFamily: 'Century Gothic',
      fontSize: 17.5,
      border: 0,
      outline: 0,
      background: 'transparent',
      borderBottom: '1px solid black',
      display: 'inline-block'
    };

    return (
      <div>
        <div>
            FIND:
            <input
              placeholder='HMMM...'
              style={inputBox}
              type="text"
              onChange={this.onTermInputChange}
            />

            | NEAR:
            <input
              placeholder='San Francisco'
              style={inputBox}
              type="text"
              onChange={this.onZipInputChange}
              onKeyPress={this.pressEnterSearch}
            />
          <SearchList searchResults={this.state.searchResults} />
        </div>
      </div>
    )
  };
}

export default Search;