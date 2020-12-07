import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LoginForm from '../../components/Login/LoginForm.component';

import './Login.styles.css';

function LoginPage() {
  return (
    <section id="cover" className="loginpage min-vh-100">
      <div id="cover-caption">
        <Container>
          <Row className="text-white">
            <Col className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <h1 className="display-4 py-2 text-truncate">Welcome back!</h1>
              <div className="px-2">
                <LoginForm />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default LoginPage;
