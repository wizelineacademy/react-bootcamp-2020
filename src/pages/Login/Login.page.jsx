import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

const LoginCard = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;
  border: solid 1px #eeeeee;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0.5rem 1rem 1rem #efefef;
`;

const LoginButton = styled.button`
  cursor: pointer;
  width: 7rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
`;

const LoginPage = () => {
  const { login } = useAuth();
  const history = useHistory();

  const authenticate = (event) => {
    event.preventDefault();
    login();
    history.push('/favorites');
  };

  return (
    <LoginCard>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <div className="dynamic-gradient input-border">
              <input className="input" required type="text" id="username" />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <div className="dynamic-gradient input-border">
              <input className="input" required type="password" id="password" />
            </div>
          </label>
        </div>
        <LoginButton className="dynamic-gradient" type="submit">
          Login
        </LoginButton>
      </form>
    </LoginCard>
  );
};

export default LoginPage;
