import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

import { LoginForm } from './Login.page.styled';
import { useAuth } from '../../providers/Auth';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const history = useHistory();

  const onClickHandle = () => {
    if (username === 'admin' && password === 'pa$$w0rd') {
      login();
      history.push('/home');
    }
  };

  return (
    <LoginForm>
      {/* <img src={image} alt="profile placeholder" /> */}
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          Email
        </Form.Label>
        <Col sm="9">
          <Form.Control
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Password
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="false"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Col>
      </Form.Group>
      <Button variant="dark" onClick={onClickHandle}>
        Login
      </Button>
    </LoginForm>
  );
}

export default LoginPage;
