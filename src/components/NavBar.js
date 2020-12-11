import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

// import { AuthContext } from '../context/AuthContext';
import { types } from '../types/types';

import '../styles/navBar.css';
import '../styles/themes.css';
import { useForm } from '../hooks/useForm';
import { GlobalContext } from '../context/GlobalContext';

export const NavBar = () => {
  const history = useHistory();
  const {
    userDispatch,
    video,
    videoDispatch,
    favoriteDispatch,
    theme,
    themeDispatch,
  } = useContext(GlobalContext);

  const [{ query }, handleInputChange] = useForm({ query: video.query });
  const { isDark } = theme;

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

  const handleTheme = () => {
    themeDispatch({
      type: isDark ? types.ligthMode : types.darkMode,
    });
  };
  return (
    <div className={`navbar ${isDark ? 'dark_mode' : 'ligth_mode'}`}>
      <div className={`nav_left ${isDark ? 'dark_mode' : 'ligth_mode'}`}>
        <Link className={`link ${isDark ? 'dark_mode' : 'ligth_mode'}`} to='/'>
          Home
        </Link>
        <Link className={`link ${isDark ? 'dark_mode' : 'ligth_mode'}`} to='/favorites'>
          Favorites
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search'
          type='text'
          value={query}
          name='query'
          onChange={handleInputChange}
        />
      </form>
      <div className={`nav_rigth ${isDark ? 'dark_mode' : 'ligth_mode'}`}>
        <input type='checkbox' onClick={handleTheme} />
        <button type='button' onClick={handleLogout}>
          LOG OUT
        </button>
      </div>
    </div>
  );
};
