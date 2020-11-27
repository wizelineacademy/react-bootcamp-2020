import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

import { useAuth } from '../../providers/Auth';
import loginApi from '../../utils/login';
import LoginContext from '../../state/UserContext';

function LoginPage() {
  let ErrorMessage;
  const { showLogin, setShowLogin } = useContext(LoginContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(LoginContext);
  const { user, setUser } = useContext(LoginContext);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setShowLogin(false);
    setError(null);
  };
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
      .then((response) => {
        setIsAuthenticated(true);
        setUser(response);
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
    <Modal show={showLogin} onHide={handleClose} centered>
      <Form onSubmit={handleSubmit}>
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
  // const { login } = useAuth();
  // const history = useHistory();

  // function authenticate(event) {
  //   event.preventDefault();
  //   login();
  //   history.push('/secret');
  // }

  // return (
  //   <section className="login">
  //     <h1>Welcome back!</h1>
  //     <form onSubmit={authenticate} className="login-form">
  //       <div className="form-group">
  //         <label htmlFor="username">
  //           <strong>username </strong>
  //           <input required type="text" id="username" />
  //         </label>
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="password">
  //           <strong>password </strong>
  //           <input required type="password" id="password" />
  //         </label>
  //       </div>
  //       <button type="submit">login</button>
  //     </form>
  //   </section>
  // );
}

export default LoginPage;
