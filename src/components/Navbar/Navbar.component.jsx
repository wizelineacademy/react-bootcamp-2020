import React from 'react';
import { Link } from 'react-router-dom';
import Search from './../Search';
import './Navbar.styles.css';
import src from '../../logo.svg';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="logo">
            <img src={src} width="80" alt="logo" />
          </Link>
        </li>
        <li>
          <Search/>
        </li>
        <li className="item-right">
          <Link to="/login" className="avatar">
            <img
              alt="avatar"
              src="https://img.icons8.com/fluent/48/000000/user-male-circle.png"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
