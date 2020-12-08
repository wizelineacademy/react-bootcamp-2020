import React, { useContext, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './Header.module.scss';
import { AuthContext } from '../../store/contexts/AuthContext';
import { FavoriteContext } from '../../store/contexts/FavoriteContext';
import { youtubeApi, youtubeApiQuotaExceeded } from '../../services/YouTubeService';
import icon from '../../assets/icon.png';

const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState('wizeline');
  const [state, dispatch] = useContext(AuthContext);
  // eslint-disable-next-line
  const [favState, favDispatch] = useContext(FavoriteContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await youtubeApi.get('/search', {
          params: {
            q: searchTerm,
          },
        });

        // TODO: Using when quota exceeded
        // const response = await youtubeApiQuotaExceeded();

        const {
          data: { items },
        } = response;

        const videos = items.map((item) => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
            isFav: false,
          };
        });

        favDispatch({
          type: 'ADD_VIDEOS',
          payload: { videos },
        });
      } catch (e) {
        if (e.isAxiosError) {
          // setErrorMsg(e.response.data.error.message);
          alert(e.response.data.error.message);
        }
      }
    }

    fetchData();
  }, [searchTerm]);

  const searchBoxHandler = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    const updatedState = { ...state, isAuth: false };
    dispatch({
      type: 'LOGIN',
      payload: updatedState,
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
