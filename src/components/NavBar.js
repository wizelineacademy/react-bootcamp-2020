import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { types } from '../types/types';

import '../styles/navBar.css';
import { useForm } from '../hooks/useForm';

export const NavBar = () => {
  const history = useHistory();
  const { user, dispatch } = useContext(AuthContext);
  const [{ query }, handleInputChange] = useForm({ query: user.query });

  const handleLogout = () => {
    history.replace('/login');
    dispatch({
      type: types.logout,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: types.search,
      payload: {
        query,
      },
    });
    history.push('/');
  };
  return (
    <div className='navbar'>
      <div className='nav_left'>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/favorites'>
          Favorites
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search...'
          type='text'
          value={query}
          name='query'
          onChange={handleInputChange}
        />
      </form>
      <div className='nav_right'>
        <button type='button' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
