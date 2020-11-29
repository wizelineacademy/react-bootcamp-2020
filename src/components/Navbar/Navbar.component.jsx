import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Navbar.styles.css';

const NavbarWrapper = styled.div`
  background: #264653;
  color: white;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
`;

const PrimaryButton = styled.button`
  background: #2a9d8f;
  border: 1px solid #2a9d8f;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 2rem;
  &:hover {
    background: #368f84;
  }
`;

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
              <Link to="/secret">Favorites</Link>
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
