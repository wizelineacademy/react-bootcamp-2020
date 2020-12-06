import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/navBar.css';

export const NavBar = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.replace('/login');
    // dispatch({
    //   type: types.logout,
    // });
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
