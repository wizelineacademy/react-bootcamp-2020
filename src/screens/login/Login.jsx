import React, { useContext, useState } from 'react';
import { AuthContext } from '../../store/contexts/AuthContext';
import loginApi from '../../services/LoginService';
import classes from './Login.module.scss';

const Login = (props) => {
  const [state, dispatch] = useContext(AuthContext);
  const [userName, setUserName] = useState('wizeline');
  const [password, setPassword] = useState('Rocks!');

  const loginHandler = async () => {
    try {
      const user = await loginApi(userName, password);

      const updatedState = { ...state, isAuth: true };
      dispatch({
        type: 'LOGIN',
        payload: updatedState,
      });
      props.history.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  const usernameHandler = (event) => {
    const { value } = event.target;
    setUserName(value);
  };

  const passwordHandler = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <div className={classes.login}>
      <div className={classes['login__form']}>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={usernameHandler}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={passwordHandler}
        />
        <button type="button" onClick={loginHandler}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
