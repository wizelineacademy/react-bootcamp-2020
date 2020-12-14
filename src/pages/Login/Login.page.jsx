import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { Login, LoginWrapper, H1, LoginForm, FormGroup } from './Login.styles';

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
    <Login>
      <LoginWrapper>
        <H1>Welcome back!</H1>
        {!authenticated ? (
          <>
            <LoginForm onSubmit={authenticate}>
              <FormGroup>
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
              </FormGroup>
              <FormGroup>
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
              </FormGroup>
              <span>{error || null}</span>
              <button type="submit">login</button>
            </LoginForm>
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
      </LoginWrapper>
    </Login>
  );
}

export default LoginPage;
