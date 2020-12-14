import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import { LogoutSpan } from './NavBar.component.styled';

function NavBar() {
  const { authenticated, logout } = useAuth();
  const [inputValue, setInputValue] = useState('');

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar variant="dark">
      <Link to="/home" className="navbar-brand">
        Youtube
      </Link>
      <Nav className="mr-auto">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        {authenticated ? (
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
        ) : null}{' '}
        }
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          value={inputValue}
          onChange={handleSearchInput}
          placeholder="Search"
          className=" mr-sm-2"
        />
        <Link to={{ pathname: `/home/${inputValue}` }} className="btn btn-primary">
          Search
        </Link>
      </Form>
      <Form inline>
        <Nav className="mr-auto">
          {authenticated ? (
            <LogoutSpan className="nav-link" onClick={handleLogout} href="/">
              Logout
            </LogoutSpan>
          ) : (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}
        </Nav>
      </Form>
    </Navbar>
  );
}

export default NavBar;
