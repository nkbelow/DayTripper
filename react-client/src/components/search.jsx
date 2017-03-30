import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchList from './search-list.jsx';
import SearchGridList from './search_grid.jsx';
import { 
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap'


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'San Francisco',
      term: 'food',
      searchResults: []
    }
    this.onLocationChange = this.onLocationChange.bind(this)
    this.onTermChange = this.onTermChange.bind(this)
    this.pressEnterSearch = this.pressEnterSearch.bind(this)
    this.search = this.search.bind(this)
  };

  componentDidMount() {
    this.search();
  }

  onLocationChange(e) {
    this.setState({location: e.target.value});
  };

  onTermChange(e) {
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
      },
      error: (error) => {
        console.error('Yelp failed!', error);
      }
    })
  };

  render() {

    return (
      <div>
        <div>
        <Form inline style={formStyle}>
          <FormGroup controlId="formInlineName" style={{marginRight: 20}}>
            <ControlLabel>Find</ControlLabel>
            {' '}
            <FormControl 
              type="text" 
              placeholder="prime rib, cognac, etc."
              onChange={this.onTermChange} 
              style={{width:200}}
            />
          </FormGroup>
          {' '}
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Near</ControlLabel>
            {'  '}
            <FormControl 
              type="text" 
              placeholder="San Francisco"
              onChange={this.onLocationChange}
              onKeyPress={this.pressEnterSearch}
              style={{width:200}}
               />
          </FormGroup>
          {'  '}
          <Button onClick={this.search}>
            SEARCH
          </Button>
        </Form>
        </div>
        <div>
          <SearchGridList 
            searchResults={this.state.searchResults}
            createEvent={this.props.createEvent}
          />
        </div>
      </div>
    )
  };
};

const formStyle = {
  width: '100%',
  fontSize: 18,
  paddingBottom: 20,
  display: 'inline-block',
};

export default Search;