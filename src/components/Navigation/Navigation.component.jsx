import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { useAuth } from '../../providers/Auth';
import SearchForm from '../Search/SearchForm.component';
import ThemeButton from '../Theme/ThemeButton.component';

export default function Navigation() {
  const { authenticated, logout } = useAuth();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <Navbar className="d-flex justify-content-between">
      <Nav>
        <Link to="/" className="px-2">
          Home
        </Link>
        {authenticated && (
          <Link to="/favorites" className="px-2">
            Favorites
          </Link>
        )}
      </Nav>

      <Nav>
        <SearchForm />
      </Nav>

      <Nav>
        <ThemeButton />
        {authenticated ? (
          <>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
          </>
        ) : (
          <Link to="/login">login →</Link>
        )}
      </Nav>
    </Navbar>
  );
}
