import React from 'react';
import './Navbar.styles.css';

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar_title navbar_item">Hotdog</div>
      <div className="navbar_searchbox">
        <div id="cover">
          <div className="tb">
            <div className="td">
              <input
                type="text"
                className="navbar_searchinput"
                placeholder="Search"
                required
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit">
                <div id="s-circle" />
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar_item">About Us</div>
      <div className="navbar_item">Darkmode</div>
      <div className="navbar_item">Login</div>
    </header>
  );
}

export default NavBar;
