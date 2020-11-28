import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Button, Checkbox, Form } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth/Auth.provider';
import LoginContext from '../../context/LoginContext';

const LoginPage = () => {
  const { setUsername, setPassword } = useContext(LoginContext);
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
    <Form onSubmit={authenticate}>
      <h1>Login</h1>
      <Form.Input
        label="Username"
        placeholder="Username"
        type="text"
        name="username"
        //value={values.username}
        onChange={handleUsername}
      />

      <Form.Input
        label="Password"
        placeholder="Password"
        name="password"
        type="text"
        //value={values.password}
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
