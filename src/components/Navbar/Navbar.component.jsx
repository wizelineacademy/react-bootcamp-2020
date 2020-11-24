import React from 'react';
import './Navbar.styles.css';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

function NavBar() {
  const history = useHistory();

  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

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
      {authenticated ? (
        <span>
          <Link to="/" onClick={deAuthenticate}>
            logout
          </Link>
        </span>
      ) : (
        <Link className="navbar_item" to="/login">
          Login
        </Link>
      )}
    </header>
  );
}

export default NavBar;
