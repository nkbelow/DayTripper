import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchGridTile from './search_grid_tile.jsx'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  gridList: {
    width: '100%',
    height: 600,
    overflowY: 'auto',
  },
};

const SearchGridList = function (props) {
  if (props.searchResults.length) {
    return (
      <MuiThemeProvider>
        <div style={styles.root}>
          <GridList
            cellHeight={300}
            style={styles.gridList}
          >
            {props.searchResults.map((result) => (
              <SearchGridTile 
                createEvent={props.createEvent}
                searchResults={props.searchResults}
                key={result.id}
                result={result}
              />
            ))}
          </GridList>
        </div>
      </MuiThemeProvider>
    ) 
  }
  return <div></div>
};

export default SearchGridList;