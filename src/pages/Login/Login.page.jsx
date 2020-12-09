import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth/Auth.provider';

import {
  Button,
  Input,
  H1,
  Div,
  FieldLabel,
  LoginForm,
  Login,
  ErrorLabel,
  LoginPageContainer,
} from './LoginPage.styles';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const inputUserName = useRef(null);
  const inputPassword = useRef(null);
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrrorLogin] = useState(false);

  function onChangeUserName(value) {
    setUsername(() => value);
  }

  function onChangePassword(value) {
    setPassword(() => value);
  }

  async function authenticate(event) {
    event.preventDefault();
    try {
      await login(userName, password);
      history.push('/favorites');
    } catch (error) {
      setErrrorLogin(true);
    }
  }

  return (
    <LoginPageContainer>
      <Login>
        <H1>Welcome back!</H1>
        <LoginForm onSubmit={authenticate}>
          <Div>
            <FieldLabel htmlFor="username">username </FieldLabel>
            <Input
              ref={inputUserName}
              required
              type="text"
              id="username"
              onChange={(event) => onChangeUserName(event.target.value)}
            />
          </Div>
          <Div>
            <FieldLabel htmlFor="password">password </FieldLabel>
            <Input
              ref={inputPassword}
              required
              type="password"
              id="password"
              onChange={(event) => onChangePassword(event.target.value)}
            />
          </Div>
          {errorLogin ? (
            <>
              <ErrorLabel>Incorrect user or password try again</ErrorLabel>
            </>
          ) : null}
          <Button type="submit">Login</Button>
        </LoginForm>
      </Login>
    </LoginPageContainer>
  );
}

export default LoginPage;
