import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';

import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';

const Button = styled.button`
  width: 5rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.textcolor};
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
  background-color: ${(props) => props.theme.variant};
  font-family: Nunito;
  &:focus{
    outline: none;
}
`;

const H1 = styled.h1`
  text-align: center;
  letter-spacing: -1px;
  color: ${(props) => props.theme.textcolor};
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
  color: ${(props) => props.theme.textcolor};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.highBackground};
  vertical-align: middle;
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.26);
  border-radius: 18px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  min-height: 400px;
`;

const ErrorLabel = styled.h4`
  color: red;
`;

const LoginPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 91vh;
  margin-top: 5px;
  padding-left: 3px;
  text-align: center; 
  flex-direction: row;
  justify-content:center;
  align-items:center;
`;

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
          <FieldLabel
            onClick={() => {
              inputUserName.current.focus();
            }}
          >
            username{' '}
          </FieldLabel>
          <Input
            ref={inputUserName}
            required
            type="text"
            id="username"
            onChange={(event) => onChangeUserName(event.target.value)}
          />
        </Div>
        <Div>
          <FieldLabel
            onClick={() => {
              inputPassword.current.focus();
            }}
          >
            password{' '}
          </FieldLabel>
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
        ) : (
          <> </>
        )}
        <Button type="submit">Login</Button>
      </LoginForm>
    </Login>
    </LoginPageContainer>
  );
}

export default LoginPage;
