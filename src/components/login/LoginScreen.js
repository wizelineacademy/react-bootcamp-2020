import React, { useContext, useRef } from 'react';
// import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

import '../../styles/login.css';
import { GlobalContext } from '../../context/GlobalContext';

export const LoginScreen = ({ history }) => {
  const inputRef = useRef();
  const [{ user, password }, handleInputChange, reset] = useForm({
    user: '',
    password: '',
  });
  const registeredUsers = [
    { username: 'wizeline', password: 'Rocks!' },
    { username: 'hiram', password: '123' },
  ];
  const { userDispatch, favoriteDispatch } = useContext(GlobalContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (user === '') {
      // eslint-disable-next-line no-alert
      alert('Please enter a Username.');
      reset();
      inputRef.current.select();
      return;
    }

    const action = {
      payload: { name: user, logged: true },
      type: types.login,
    };

    const foundUser = registeredUsers.find(
      (u) => u.username === user && u.password === password
    );

    if (foundUser) {
      userDispatch(action);
      favoriteDispatch({
        type: types.initFavorite,
        payload: JSON.parse(localStorage.getItem(`videos_wizeline`)) || [],
      });
      history.replace('/');
    } else {
      // eslint-disable-next-line no-alert
      alert(`User '${user}' is not registered or password is not correct.`);
      reset();
      inputRef.current.select();
    }
  };

  return (
    // <div className='login dark_mode dark_mode_login'>
    <form className='login dark_mode dark_mode_login' onSubmit={handleLogin}>
      <input
        id='login_user'
        type='text'
        placeholder='Username'
        value={user}
        name='user'
        onChange={handleInputChange}
        ref={inputRef}
      />
      <input
        id='login_password'
        type='password'
        placeholder='Password'
        value={password}
        name='password'
        onChange={handleInputChange}
      />
      <button
        id='login_button'
        type='submit'
        className='btn btn-primary'
        // onClick={handleLogin}
      >
        Log In
      </button>
    </form>
    // </div>
  );
};
