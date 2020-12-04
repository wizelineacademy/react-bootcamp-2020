import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { NavbarWrapper } from './Navbar.styles';
import { PrimaryButton } from '../../styledComponents';
import { useAuth } from '../../providers/Auth';
import './Navbar.styles.css';

function Navbar() {
  const history = useHistory();
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <NavbarWrapper>
      <div className="title-wrapper">
        <h3>{authenticated ? 'Human, Search!' : 'Search!'}</h3>
      </div>
      <div className="searchbar-wrapper">
        <input />
        <img
          className="overlap-icon"
          src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg"
          alt="magnifyng glass icon button to search video"
        />
      </div>
      <div className="navbarButtons-wrapper">
        {authenticated ? (
          <>
            <PrimaryButton>
              <Link to="/favorites">Favorites</Link>
            </PrimaryButton>
            <PrimaryButton>
              <Link to="/" onClick={deAuthenticate}>
                Log out
              </Link>
            </PrimaryButton>
          </>
        ) : (
          <>
            <PrimaryButton>
              <Link to="/login">Sign in</Link>
            </PrimaryButton>
          </>
        )}
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
