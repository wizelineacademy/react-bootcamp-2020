import React, { useContext, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './Header.module.scss';
import { AuthContext } from '../../store/contexts/AuthContext';
import { FavoriteContext } from '../../store/contexts/FavoriteContext';
import youtubeService from '../../services/YouTubeService';
import icon from '../../assets/icon.png';

const Header = (props) => {
  const [searchTerm, setSearchTerm] = useState('wizeline');
  const [state, dispatch] = useContext(AuthContext);
  // eslint-disable-next-line
  const [favState, favDispatch] = useContext(FavoriteContext);

  useEffect(() => {
    async function fetchData() {
      const response = await youtubeService.get('/search', {
        params: {
          q: searchTerm,
        },
      });

      // Using when quota exceeded
      // const response = {
      //   data: {
      //     items: [
      //       {
      //         id: { videoId: 'W0k7yFEL6FY' },
      //         snippet: {
      //           title: 'Title 1',
      //           description:
      //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugit vitae? Laboriosam omnis facilis, enim quas, explicabo quae quibusdam deleniti eaque tenetur commodi perspiciatis impedit illum soluta iure odit esse.',
      //           thumbnails: {
      //             default: {
      //               url:
      //                 'https://i.ytimg.com/vi/W0k7yFEL6FY/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDrmfw7rqZeYIdSsBxt_C3qNCFboQ',
      //             },
      //           },
      //         },
      //       },
      //       {
      //         id: { videoId: 'Po3VwR_NNGk' },
      //         snippet: {
      //           title: 'Title 2',
      //           description:
      //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugit vitae? Laboriosam omnis facilis, enim quas, explicabo quae quibusdam deleniti eaque tenetur commodi perspiciatis impedit illum soluta iure odit esse.',
      //           thumbnails: {
      //             default: {
      //               url:
      //                 'https://i.ytimg.com/vi/Po3VwR_NNGk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBLy_DdepqJIDW7r0NSC-DjkLRFqA',
      //             },
      //           },
      //         },
      //       },
      //       {
      //         id: { videoId: 'nmXMgqjQzls' },
      //         snippet: {
      //           title: 'Title 3',
      //           description:
      //             'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugit vitae? Laboriosam omnis facilis, enim quas, explicabo quae quibusdam deleniti eaque tenetur commodi perspiciatis impedit illum soluta iure odit esse.',
      //           thumbnails: {
      //             default: {
      //               url:
      //                 'https://i.ytimg.com/vi/nmXMgqjQzls/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCjjE4wKtITJ4Dq7qwHyd3XoctXtw',
      //             },
      //           },
      //         },
      //       },
      //     ],
      //   },
      // };

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
