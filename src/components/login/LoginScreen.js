import React, { useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

import '../../styles/login.css';
import { GlobalContext } from '../../context/GlobalContext';

export const LoginScreen = ({ history }) => {
  const [{ user, password }, handleInputChange, reset] = useForm({
    user: '',
    password: '',
  });
  const registeredUsers = [
    { username: 'wizeline', password: 'Rocks!' },
    { username: 'hiram', password: '123' },
  ];
  const { userDispatch, favoriteDispatch } = useContext(GlobalContext);

  const handleLogin = () => {
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
      console.log(`${user} user is not registered or password is not correct.`);
      reset();
    }
  };
  return (
    <div className='login'>
      <input
        id='login_user'
        type='text'
        placeholder='Username'
        value={user}
        name='user'
        onChange={handleInputChange}
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
        type='button'
        className='btn btn-primary'
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
};
