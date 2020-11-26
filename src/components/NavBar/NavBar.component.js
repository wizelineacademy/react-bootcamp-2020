import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import { LogoutSpan } from './NavBar.component.styled';

function NavBar() {
  const { authenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar variant="dark">
      <Link to="/" className="navbar-brand">
        Blackpink
      </Link>
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </Nav>
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
