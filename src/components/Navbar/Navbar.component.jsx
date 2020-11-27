import React, { useContext, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import LoginPage from '../../pages/Login';
import LoginContext from '../../state/UserContext';

function AppNavbar() {
  const { setShowLogin } = useContext(LoginContext);
  const { user } = useContext(LoginContext);
  const [searchInput, setSearchInput] = useState('');
  const { searchG, setSearchG } = useContext(LoginContext);
  let login;
  let logout;
  let favorites;

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


  // Display if user is authenticated
  if (user) {
    logout = <Nav.Link>Logout</Nav.Link>;
    favorites = <Nav.Link>Favorites</Nav.Link>;
  } else {
    login = <Nav.Link onClick={() => setShowLogin(true)}>Login</Nav.Link>;
  }

  return (
    <>
      <LoginPage />
      <Navbar bg="dark" expand="md" variant="dark">
        <Navbar.Brand href="#home">React-Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            // onSelect={() => setShowLogin(true)}
            className="mr-auto"
          >
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link onLoginClick={() => setShow(true)}>Login</Nav.Link> */}
            {login}
            {favorites}
            {logout}
          </Nav>
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
