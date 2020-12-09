import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

// import { AuthContext } from '../context/AuthContext';
import { types } from '../types/types';

import '../styles/navBar.css';
import { useForm } from '../hooks/useForm';
import { GlobalContext } from '../context/GlobalContext';

export const NavBar = () => {
  const history = useHistory();
  const { user, userDispatch, video, videoDispatch, favoriteDispatch } = useContext(
    GlobalContext
  );

  const [{ query }, handleInputChange] = useForm({ query: user.query });

  const handleLogout = () => {
    history.replace('/login');
    userDispatch({
      type: types.logout,
    });
    videoDispatch({
      type: types.videoLogout,
    });
    favoriteDispatch({
      type: types.favoriteLogout,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    videoDispatch({
      type: types.search,
      payload: {
        ...video,
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
