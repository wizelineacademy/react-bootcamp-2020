import React, { useRef } from 'react';
import { useHistory } from 'react-router';

import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';

const Button = styled.button`
  width: 5rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  color: #1c5476;
  border: none;
  background-color: transparent;
`;

const Input = styled.input`
  color: black;
  font-size: 1rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  border: 1px solid white;
  background-color: rgba(28, 84, 118, 0.3);
  font-family: Nunito;
`;

const H1 = styled.h1`
  text-align: center;
  letter-spacing: -1px;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const FieldLabel = styled.strong`
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  vertical-align: middle;
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.26);
  border-radius: 18px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  min-height: 400px;
`;

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const inputUserName = useRef(null);
  const inputPassword = useRef(null);

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/favorites');
  }

  return (
    <Login>
      <H1>Welcome back!</H1>
      <LoginForm onSubmit={authenticate}>
        <Div>
          <FieldLabel
            onClick={() => {
              inputUserName.current.focus();
            }}
          >
            username{' '}
          </FieldLabel>
          <Input ref={inputUserName} required type="text" id="username" />
        </Div>
        <Div>
          <FieldLabel
            onClick={() => {
              inputPassword.current.focus();
            }}
          >
            password{' '}
          </FieldLabel>
          <Input ref={inputPassword} required type="password" id="password" />
        </Div>
        <Button type="submit">Login</Button>
      </LoginForm>
    </Login>
  );
}

export default LoginPage;
