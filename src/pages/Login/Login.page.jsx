import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

export default function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [name, setName] = useState('wizeline');
  const [password, setPassword] = useState('Rocks!');

  const authenticate = (event) => {
    event.preventDefault();
    login(name, password);
    history.push('/');
  };

  return (
    <section className="login">
      <h1>Welcome</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              required
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}
