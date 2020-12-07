import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './Login.module.css';
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
    <section className={styles.login_page}>
      <div className={styles.login_container}>
        <h2 className={styles.login_title}>Welcome Back!</h2>
        <form onSubmit={authenticate}>
          <div className={styles.form_row}>
            <label htmlFor="username">
              Username
              <input
                required
                id="username"
                name="username"
                type="text"
                onChange={handleUsername}
                value={username}
              />
            </label>
          </div>
          <div className={styles.form_row}>
            <label htmlFor="password">
              Password
              <input
                required
                id="password"
                type="password"
                onChange={handlePassword}
                value={password}
              />
            </label>
          </div>
          <div className={styles.form_row}>
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
