/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useContext, useState } from 'react';
// import { AuthContext } from '../context/AuthContext';
import { GlobalContext } from '../context/GlobalContext';

import '../styles/videoFrame.css';
import { types } from '../types/types';

export const VideoFrame = () => {
  const [isFavorite, setIsFavorite] = useState(true);
  const { video, favorite, favoriteDispatch, theme } = useContext(GlobalContext);
  const { isDark } = theme;
  const themeMode = isDark ? 'dark_mode' : 'ligth_mode';

  useEffect(() => {
    localStorage.setItem(`videos_wizeline`, JSON.stringify([...favorite]));
  }, [favorite]);

  useEffect(() => {
    const favFlag = favorite.some((f) => f.videoId === video.videoId);
    // eslint-disable-next-line no-unused-expressions
    favFlag ? setIsFavorite(true) : setIsFavorite(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  const handleFavoriteAdd = () => {
    // set video in local storage
    favoriteDispatch({
      type: types.addFavorite,
      payload: { ...video },
    });
  };
  const handleFavoriteDelete = (vid) => {
    console.log(vid);
    favoriteDispatch({
      type: types.deleteFavorite,
      payload: vid,
    });
  };
  return (
    <div className={`video_screen_container ${themeMode}`}>
      <iframe
        src={`https://www.youtube.com/embed/${video.videoId}`}
        title={video.title}
      />
      <div className={`title_favorites ${themeMode}`}>
        <p id='video_title'>{video.title}</p>

        {!isFavorite ? (
          <span
            className='addRemoveFav'
            onClick={handleFavoriteAdd}
            onKeyDown={handleFavoriteAdd}
          >
            Add to Favorites
          </span>
        ) : (
          <span
            className='addRemoveFav'
            onClick={() => handleFavoriteDelete(video.videoId)}
            onKeyDown={() => handleFavoriteDelete(video.videoId)}
          >
            Remove from Favorites
          </span>
        )}
      </div>
      <p id='video_desc'>{video.description}</p>
    </div>
  );
};
