import React, { useState } from 'react';
import { useHistory } from 'react-router';

import useFormInput from '../../utils/hooks/useFormInput';
import { useAuth } from '../../providers/Auth';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const usernameInput = useFormInput(username, setUsername);
  const [password, setPassword] = useState('');
  const passwordInput = useFormInput(password, setPassword);

  const { login, error } = useAuth();
  const errorClass = error ? 'is-invalid' : null;
  const history = useHistory();

  function authenticate(event) {
    event.preventDefault();
    login(username, password);
    // @todo check for login error
    // if (user && !error) {
    history.goBack();
    // }
  }

  return (
    <form onSubmit={authenticate} className="justify-content-center">
      <div className="form-group">
        <input
          {...usernameInput}
          required
          placeholder="Username"
          className={`form-control ${errorClass}`}
          aria-describedby="username-error"
        />
        <div id="username-error" className="invalid-feedback">
          Please provide a valid username.
        </div>
      </div>
      <div className="form-group">
        <input
          {...passwordInput}
          type="password"
          required
          placeholder="Password"
          className={`form-control ${errorClass}`}
          aria-describedby="password-error"
        />
        <div id="password-error" className="invalid-feedback">
          Please provide a valid password.
        </div>
      </div>
      <input type="submit" value="login" className="btn-primary btn-lg" />
    </form>
  );
}
