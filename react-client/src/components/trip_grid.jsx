import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TripGridTile from './trip_grid_tile.jsx';
import Navbar from './navbar.jsx';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  gridList: {
    width: '75%',
    overflowY: 'auto',
    margin: '0 auto'
  },
};

class TripGridList extends React.Component {

  constructor(props) {
    super(props)
    let trips = [];
    for (let i = 0; i < 10; i++) {
      trips.push({
        id: i,
        name: 'Pizza Pizza Pizza!',
        image_url: 'http://www.seriouseats.com/images/2015/01/20150127-san-francisco-pizza-by-the-slice-primary.jpg'
      });
    }
    this.state = {
      trips: trips
    }
  }

  render() {
    return (
      <div>
      <Navbar />
      <MuiThemeProvider>
        <div style={styles.root}>
          <GridList
            style={styles.gridList}
            cellHeight={300}
          >
            {this.state.trips.map((result) => (
              <TripGridTile
                key={result.id}
                result={result}
              />
            ))}
          </GridList>
        </div>
      </MuiThemeProvider>
      </div>
    )
  };
}

export default TripGridList;
