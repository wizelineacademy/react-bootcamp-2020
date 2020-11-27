import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import LoginPage from '../../pages/Login';
import UserContext from '../../state/UserContext';

function AppNavbar() {
  const { setShowLogin } = useContext(UserContext);
  const { user, setUser } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState('');
  const { searchG, setSearchG } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('appUser')));
  }, [setUser]);

  let login;
  let logout;
  let avatar;
  let favorites;
  let name;

  // Event handlers
  const handleInputChange = (event) => {
    console.log('searchInputChanged: ');
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    console.log(searchG);
    // llama a youtube
    setSearchG(searchInput);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('appUser');
    localStorage.removeItem('expiration');
    history.push('/');
  };

  // Display links depending if user is authenticated
  if (user) {
    logout = <Nav.Link onClick={handleLogout}>Logout</Nav.Link>;
    favorites = <Nav.Link onClick={() => history.push('favorites')}>Favorites</Nav.Link>;
    avatar = <img className="avatar" src={user.avatarUrl} alt={user.name} />;
    // name = {user.name}
  } else {
    login = <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>;
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
            {favorites}
          </Nav>
          <Nav>{avatar}</Nav>
          <Nav>{login}</Nav>
          <Nav>{logout}</Nav>
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
