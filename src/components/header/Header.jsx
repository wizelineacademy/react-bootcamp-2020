import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { AuthContext } from '../../store/contexts/AuthContext';
import { FavoriteContext } from '../../store/contexts/FavoriteContext';
import youtubeService from '../../services/YouTubeService';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('wizeline');
  const [state, dispatch] = useContext(AuthContext);
  // eslint-disable-next-line
  const [favState, favDispatch] = useContext(FavoriteContext);

  useEffect(() => {
    callApi();
  }, []);

  const searchBoxHandler = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    callApi();
  };

  const callApi = async () => {
    const response = await youtubeService.get('/search', {
      params: {
        q: searchTerm,
      },
    });

    const {
      data: { items },
    } = response;

    const videos = items.map((item) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url,
      };
    });

    favDispatch({
      type: 'ADD_VIDEOS',
      payload: { videos },
    });
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    const updatedState = { ...state, isAuth: false };
    dispatch({
      type: 'LOGIN',
      payload: updatedState,
    });
  };

  return (
    <div className={classes.header}>
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
          <a href="/" className="button" onClick={logoutHandler}>
            Logout
          </a>
        ) : (
          <Link to="/login" className="button">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
