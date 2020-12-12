import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { LoginPage, LoginContainer, LoginTitle, LoginForm, FormRow, FormLabel, FormInput, FormButton } from './Login.template'
import { useAuth } from '../../providers/Auth';

const Login = () => {
  // Page's state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Adapt hooks for use at nested levels
  const { login, authenticated } = useAuth();
  const history = useHistory();

  // Page's handler functions
  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const authenticate = () => {
    if (username === 'wizeline' && password === 'Rocks!') {
      login();
      history.push('/');
    }
  };

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
  }, []);

  return (
    <LoginPage>
      <LoginContainer>
        <LoginTitle>Welcome Back!</LoginTitle>
        <LoginForm onSubmit={authenticate}>
          <FormRow>
            <FormLabel htmlFor="username">
              Username
              <FormInput
                required
                id="username"
                name="username"
                type="text"
                onChange={handleUsername}
                value={username}
              />
            </FormLabel>
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="password">
              Password
              <FormInput
                required
                id="password"
                type="password"
                onChange={handlePassword}
                value={password}
              />
            </FormLabel>
          </FormRow>
          <FormRow>
            <FormButton type="submit">Log in</FormButton>
          </FormRow>
        </LoginForm>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
