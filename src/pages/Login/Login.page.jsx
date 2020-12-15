import React, { useContext, useEffect, useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import loginApi from '../../utils/login';
import GlobalContext from '../../state/GlobalContext';

function LoginPage() {
  let ErrorMessage;
  const { setUser, showLogin, setShowLogin } = useContext(GlobalContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('appUser')));
  }, [setUser]);

  const handleClose = () => {
    setShowLogin(false);
    setError(null);
  };
  // Declaracion de variables de estado para formulario
  const [data, setData] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnLogin = (event) => {
    event.preventDefault();
    loginApi(data.username, data.password)
      .then((response) => {
        setUser(response);
        localStorage.setItem('appUser', JSON.stringify(response));
        localStorage.setItem(
          'expiration',
          JSON.stringify({ timestamp: new Date().getTime() + 60 * 60000 })
        );
        setShowLogin(false);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  };

  // Display login error message
  if (error) {
    ErrorMessage = <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Modal show={showLogin} onHide={handleClose} centered animation={false}>
      <Form onSubmit={handleOnLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ErrorMessage}
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
  );
}

export default LoginPage;
