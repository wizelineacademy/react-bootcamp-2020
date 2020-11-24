import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal } from 'react-bootstrap';
import loginApi from '../../utils/login';

function AppNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Declaracion de variables de estado para formulario
  const [data, setData] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit form');
    // console.log(datos.username.value);
    loginApi(data.username, data.password)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="username">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={handleInputChange}
                value={data.username}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleInputChange}
                value={data.password}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" type="submit">
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Navbar bg="dark" expand="md" variant="dark">
        <Navbar.Brand href="#home">React-Challenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            onSelect={() => setShow(true)}
            className="mr-auto"
          >
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link onLoginClick={() => setShow(true)}>Login</Nav.Link> */}
            <Nav.Link eventKey="test">Login</Nav.Link>
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
