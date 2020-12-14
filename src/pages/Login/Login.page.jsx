import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login, logout, authenticated } = useAuth();
  const [user, setUser] = useState({
    username: 'wizeline',
    password: 'Rocks!',
  });
  const [error, setError] = useState(null);
  const history = useHistory();

  function handleUser(event) {
    const { value, id } = event.target;
    setError(null);
    setUser({
      ...user,
      [id === 'username' ? 'username' : 'password']: value,
    });
  }

  async function authenticate(event) {
    event.preventDefault();
    const isLogged = await login(user);
    if (typeof isLogged !== 'string') {
      history.push('/');
    } else {
      setError(isLogged);
    }
  }

  function DeAuthenticate(event) {
    event.preventDefault();
    setError(null);
    logout();
    history.push('/');
  }

  return (
    <section className="login">
      <div className="login-wrapper">
        <h1>Welcome back!</h1>
        {!authenticated ? (
          <>
            <form onSubmit={authenticate} className="login-form">
              <div className="form-group">
                <label htmlFor="username">
                  <strong>username </strong>
                  <input
                    required
                    type="text"
                    id="username"
                    onChange={handleUser}
                    defaultValue={user.username}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <strong>password </strong>
                  <input
                    required
                    type="password"
                    id="password"
                    onChange={handleUser}
                    defaultValue={user.password}
                  />
                </label>
              </div>
              <span>{error || null}</span>
              <button type="submit">login</button>
            </form>
          </>
        ) : (
          <>
            <div>
              <Link to="/">← Home</Link>
            </div>
            <div>
              <Link to="/" onClick={DeAuthenticate}>
                ← logout
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default LoginPage;
