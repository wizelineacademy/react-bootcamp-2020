import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    console.log(lastPath);
    const action = {
      payload: { name: 'hdiaz17' },
      type: types.login,
    };
    dispatch(action);
    history.replace(lastPath);
  };
  return (
    <div className='container mt-5'>
      <h1>LoginScreen</h1>
      <hr />
      <button type='button' className='btn btn-primary' onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};
