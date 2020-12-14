import React from 'react';
import './Logo.styles.css';
import logo from '../../images/youtube_logo.png';

function Logo() {
  return <img className="logo" src={logo} alt="YouTube Logo" />;
}

export default Logo;
