import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { types } from '../types/types';

import '../styles/navBar.css';

export const NavBar = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    history.replace('/login');
    dispatch({
      type: types.logout,
    });
  };
  return (
    <div className='navbar'>
      <div className='nav_left'>
        <input placeholder='Search...' type='text' />
      </div>
      <div className='nav_right'>
        <button type='button' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
