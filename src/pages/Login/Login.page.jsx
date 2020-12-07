import React from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

export default function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();

  const authenticate = (e) => {
    e.preventDefault();

    const name = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(name, password);

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
            <input required type="text" id="username" value="wizeline" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password" value="Rocks!" />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}
