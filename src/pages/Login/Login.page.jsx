import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../providers/Auth';
import { useAppDataContext } from '../../providers/AppData';
import loginApi from '../../utils/login';
import actions from '../../state/actions';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const { dispatch } = useAppDataContext();

  const [formValue, setFormValue] = useState({});

  const onChangeForm = ({ target: { name, value } }) => {
    setFormValue({ ...formValue, [name]: value });
  };
  function authenticate(event) {
    event.preventDefault();
    loginApi(formValue.username, formValue.password)
      .then((user) => {
        login();
        dispatch({ type: actions.SET_USER, payload: user });
        history.push('/');
      })
      .catch((e) => console.log(e));
  }

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              onChange={onChangeForm}
              required
              type="text"
              id="username"
              name="username"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              onChange={onChangeForm}
              required
              type="password"
              id="password"
              name="password"
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
