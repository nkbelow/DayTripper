import React from 'react';
import TripGridList from './trip_grid.jsx';
import App from '../app.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from './homepage.jsx';
import Login from './login.jsx';

const Navbar = (props) => (
    <div>
      <header style={bannerStyle}>
        <Link to='/homepage' className="navItem">Home</Link>
        <Link to='/trips' className="navItem">Trips</Link>
        <Link to='/logout' className="navItem" id="logout">Logout</Link>
      </header>
    </div>
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