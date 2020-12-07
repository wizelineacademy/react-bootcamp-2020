/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

import '../styles/videoFrame.css';

export const VideoFrame = () => {
  const [favorite, setFavorite] = useState(false);
  const { user } = useContext(AuthContext);
  const handleFavorite = () => {
    setFavorite(!favorite);
    // set video in local storage
  };
  return (
    <div className='video'>
      <iframe src={`https://www.youtube.com/embed/${user.videoId}`} title={user.title} />
      <div className='title_favorites'>
        <p id='video_title'>{user.title}</p>
        <span onClick={handleFavorite} onKeyPress={handleFavorite}>
          {!favorite ? 'Add to Favorites' : 'Remove from Favorites'}
        </span>
      </div>
      <p id='video_desc'>{user.description}</p>
    </div>
  );
};
