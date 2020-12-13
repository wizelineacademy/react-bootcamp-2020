import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

// import { AuthContext } from '../context/AuthContext';
import { types } from '../types/types';

import { useForm } from '../hooks/useForm';
import { GlobalContext } from '../context/GlobalContext';
import '../styles/navBar.css';
import '../styles/themes.css';

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
  const themeMode = isDark ? 'dark_mode_nav' : 'ligth_mode_nav';
  const themeModeSearch = isDark ? 'dark_mode_nav_search' : 'ligth_mode_nav_search';
  const themeModeButton = isDark ? 'dark_mode_button' : 'ligth_mode_button';

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
    themeDispatch({
      type: types.darkMode,
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
    <div className={`navbar ${themeMode}`}>
      <div className={`nav_left ${themeMode}`}>
        <Link className={`link ${themeMode}`} to='/'>
          Home
        </Link>
        <Link className={`link ${themeMode}`} to='/favorites'>
          Favorites
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className={`search_bar ${themeModeSearch}`}
          placeholder='Search'
          type='text'
          value={query}
          name='query'
          onChange={handleInputChange}
        />
      </form>
      <div className={`nav_rigth ${themeMode} ${themeModeButton}`}>
        <div className='theme_input'>
          <input type='checkbox' onClick={handleTheme} />
          <span>{isDark ? 'Dark Mode' : 'Ligth Mode'}</span>
        </div>
        <button type='button' onClick={handleLogout}>
          LOG OUT
        </button>
      </div>
    </div>
  );
};
