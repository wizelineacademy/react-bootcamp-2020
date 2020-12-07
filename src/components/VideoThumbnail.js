/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import '../styles/videoThumbnails.css';
import { types } from '../types/types';

export const VideoThumbnail = ({ channelName, title, img, videoId, description }) => {
  const { user, dispatch } = useContext(AuthContext);
  const { name, logged } = user;
  const history = useHistory();
  const handleClick = () => {
    const action = {
      type: types.playVideo,
      payload: { name, logged, channelName, title, videoId, description },
    };
    dispatch(action);
    history.push('/video');
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className='video_thumb' onClick={handleClick}>
      <img src={img} alt='videoThumbnail' />
      <div className='video_info'>
        <p id='title'>{title}</p>
        <p id='channel'>{channelName}</p>
      </div>
    </div>
  );
};
