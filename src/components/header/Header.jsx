import React, { useContext, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './Header.module.scss';
import { AuthContext } from '../../store/contexts/AuthContext';
import { FavoriteContext } from '../../store/contexts/FavoriteContext';
import useSearch from '../../hooks/useSearch';
import icon from '../../assets/icon.png';
import { useDebounce } from '../../hooks/useDebounce';

const Header = (props) => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(AuthContext);
  const [favState, favDispatch] = useContext(FavoriteContext);
  const [searchTerm, setSearchTerm] = useState('wizeline');
  const { videos, error } = useSearch(searchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const createReferenceMap = (videos = []) => {
    const map = new Map();
    videos.forEach((video, index) => {
      map.set(video.id, index);
    });
    return map;
  };

  useEffect(() => {
    if (error) {
      alert(error);
    }

    favDispatch({
      type: 'ADD_VIDEOS',
      payload: { videos },
    });

    const videosMap = createReferenceMap(videos);
    // Set isFav from existing ones
    favState.favoriteVideos.forEach((fav) => {
      const video = videos[videosMap[fav.id]];
      if (videosMap.has(fav.id) && video) {
        favDispatch({
          type: 'TOGGLE_FAVORITE',
          payload: { video },
        });
      }
    });
  }, [debouncedSearchTerm, videos]);

  const searchBoxHandler = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGIN',
      payload: { isAuth: false },
    });

    favDispatch({
      type: 'RESET_STORAGE',
    });

    if (props.location.pathname === '/fav') {
      props.history.replace('/');
    }
  };

  return (
    <div className={classes.header}>
      <Link to="/" className={classes.header__icon}>
        <img height="36" width="36" src={icon} alt="ico" />
      </Link>
      <div className={classes['header__search-container']}>
        <input
          type="text"
          name="searchBox"
          id="searchBox"
          value={searchTerm}
          onChange={searchBoxHandler}
        />
      </div>
      <div className={classes['header__login']}>
        {state.isAuth ? (
          <>
            <a href="/" className="button" onClick={logoutHandler}>
              Logout
            </a>
            <Link to="/fav" className={classes['button-fav']}>
              Favs
            </Link>
          </>
        ) : (
          <Link to="/login" className="button">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Header);
