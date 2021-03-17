import React from 'react';
import ToggleButton from '../molecules/ToggleButton';
import SearchBar from '../molecules/SearchBar';

import './Header.styles.css';

function Header() {
  return (
    <section className="container">
      <div className="content">
        <p>Menu</p>
        <SearchBar />
        <ToggleButton />
      <p>Login</p>
      <h1>Hello moon</h1>
      </div>
      
    </section>
    );
}

export default Header;