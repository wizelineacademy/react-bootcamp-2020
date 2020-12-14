import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { H1 } from './LoginPage.styles';

import { useAuth } from '../../providers/Auth/Auth.provider';
import LoginContext from '../../context/LoginContext';
import ThemeContext from '../../context/ThemeContext';

const LoginPage = () => {
  const { setUsername, setPassword } = useContext(LoginContext);
  const { light } = useContext(ThemeContext);
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/');
  }
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Form onSubmit={authenticate} width={6} inverted={!light}>
      <H1>Login</H1>
      <Form.Input
        width={6}
        label="Username"
        placeholder="Username"
        type="text"
        name="username"
        onChange={handleUsername}
      />

      <Form.Input
        width={6}
        label="Password"
        placeholder="Password"
        name="password"
        type="text"
        onChange={handlePassword}
      />

      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LoginPage;
