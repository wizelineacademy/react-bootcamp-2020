/*
import React from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login();
    history.push('/secret');
  }

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" id="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password" />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
*/
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';

import './Login.styles.css';

export default function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function authenticate(event) {
    event.preventDefault();
    setShowError(false);
    setErrorMessage('');

    try {
      const successfullLogin = await login(username, password).catch((e) => {
        throw e;
      });

      if (successfullLogin) {
        history.push('/');
      }
    } catch (error) {
      setShowError(true);
      setErrorMessage(error.message);
    }
  }

  return (
    <div className="container-login">
      <div className="wrap-login">
        <form onSubmit={authenticate}>
          <span className="login-form-title">Account Login</span>
          <span className="login-form-textLabel">Username</span>
          <div className="wrap-input">
            <input
              className="input"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="focus-input" />
          </div>
          <span className="login-form-textLabel">Password</span>
          <div className="wrap-input">
            <input
              className="input"
              type="password"
              name="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" />
          </div>
          <span className="login-form-error">{showError ? errorMessage : ' '}</span>
          <div className="container-login-form-btn">
            <button type="submit" className="login-form-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
