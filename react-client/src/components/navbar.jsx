import React from 'react';
import TripGridList from './trip_grid.jsx';
import App from '../app.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

const Navbar = (props) => (
  <header style={bannerStyle}>

    <a href='#' className="navItem">Home</a>
    <a href='#' className="navItem">Trips</a>
    <a href="#" className="navItem" id="logout">Logout</a>
  </header>
);

const bannerStyle = {
  display: 'flex',
  alignItems: 'flex-end',
  flexStyle: 1,
  backgroundImage: 'url("http://i65.tinypic.com/2igc483.png"',
  backgroundColor: '#31434C',
  width: '100%',
  height: '200px',
  justifyContent: 'flex-start',
  padding: '0.2em',
  fontSize: '2em',
  backgroundSize: 'cover'
};

export default Navbar;