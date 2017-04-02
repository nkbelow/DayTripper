import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IndividualTrip from './individual-trip.js';



class TripGridTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.clickImage = this.clickImage.bind(this);
  };


  clickImage () {
    //window.open(this.props.result.url);
  };

  render () {
    return (
      <div>
      <Link to='individualtrip'>
        <GridTile
          key={this.props.result.id}
          title={this.props.result.name}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img
            className = "tile"
            onClick={this.clickImage}
            src={this.props.result.image_url}
          />
        </GridTile>
      </Link>


      </div>
    )
  }
};

export default TripGridTile;