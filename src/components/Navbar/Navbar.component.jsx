import React, { useContext, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import LoginPage from '../../pages/Login';
import GlobalContext from '../../state/GlobalContext';

function AppNavbar() {
  const { setShowLogin, user, setUser, setQuery } = useContext(GlobalContext);
  const [searchInput, setSearchInput] = useState('');

  const history = useHistory();
  let loginNav;
  let logoutNav;
  let avatarNav;
  let favoritesNav;

  // Event handlers
  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(searchInput);
    history.push('/');
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem('appUser');
    localStorage.removeItem('expiration');
    localStorage.removeItem('favorites');
    history.push('/');
  }

  // Display links depending if user is authenticated
  if (user) {
    logoutNav = <Nav.Link onClick={handleLogout}>Logout</Nav.Link>;
    favoritesNav = (
      <Nav.Link onClick={() => history.push('/favorites')}>Favorites</Nav.Link>
    );
    avatarNav = <img className="avatar" src={user.avatarUrl} alt={user.name} />;
  } else {
    loginNav = <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>;
  }

  return (
    <>
      <LoginPage />
      <Navbar bg="dark" expand="md" variant="dark">
        <Navbar.Brand>React-Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => history.push('/')}>Home</Nav.Link>
            {favoritesNav}
          </Nav>
          <Nav>{avatarNav}</Nav>
          <Nav>{loginNav}</Nav>
          <Nav>{logoutNav}</Nav>
          <Form inline onSubmit={handleSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              name="searchInput"
              onChange={handleInputChange}
              value={searchInput}
            />
            <Button variant="outline-info" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default AppNavbar;
