import React from 'react';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




const tile = 
  {
    img: 'http://www.goodfood.com.vn/images/I_home.jpg',
    title: 'Breakfast',
    author: 'jill111',
  };

const TripEventTile = (props) => (
  <div>
    <img src={tile.img} className="img-thumbnail img-responsive" style={{height: 100}}/>
  </div>
);

export default TripEventTile;

