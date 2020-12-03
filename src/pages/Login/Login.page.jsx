import React from 'react';
import { useHistory } from 'react-router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useAuth } from '../../providers/Auth';

import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.goBack();
  }

  return (
    <section id="cover" className="loginpage min-vh-100">
      <div id="cover-caption">
        <Container>
          <Row className="text-white">
            <Col className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <h1 className="display-4 py-2 text-truncate">Welcome back!</h1>
              <div className="px-2">
                <form onSubmit={authenticate} className="justify-content-center">
                  <Form.Group>
                    <Form.Control type="text" required placeholder="Username" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="password" required placeholder="Password" />
                  </Form.Group>
                  <Button type="submit" className="btn-primary btn-lg">
                    login
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default LoginPage;
