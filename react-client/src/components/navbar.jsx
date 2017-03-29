import React from 'react';

const Navbar = (props) => (
  <header style={bannerStyle}>
    <a href='#' className="navItem">Trips</a>
    <a href="#" className="navItem">Login/Signup</a>
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
  justifyContent: 'space-between',
  padding: '0.5em',
  fontSize: '2em',
  backgroundSize: 'cover'
};

export default Navbar;