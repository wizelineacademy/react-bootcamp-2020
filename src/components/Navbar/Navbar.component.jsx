import React, { useContext } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import LoginPage from '../../pages/Login';
import LoginContext from '../../state/LoginContext';

function AppNavbar() {
  const { setShowLogin } = useContext(LoginContext);
  const { user } = useContext(LoginContext);
  let login;
  let logout;
  let favorites;

  // Display if user is authenticated
  if (user) {
    logout = <Nav.Link>Logout</Nav.Link>;
    favorites = <Nav.Link>Favorites</Nav.Link>;
  } else {
    login = <Nav.Link eventKey="test">Login</Nav.Link>;
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
            onSelect={() => setShowLogin(true)}
            className="mr-auto"
          >
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link onLoginClick={() => setShow(true)}>Login</Nav.Link> */}
            {login}
            {favorites}
            {logout}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default AppNavbar;
