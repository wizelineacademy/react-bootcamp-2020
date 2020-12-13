/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
import { GlobalContext } from '../context/GlobalContext';

import '../styles/videoThumbnails.css';
import { types } from '../types/types';

export const VideoThumbnail = ({ channelName, title, img, videoId, description }) => {
  const { video, videoDispatch, theme } = useContext(GlobalContext);
  const { isDark } = theme;
  const themeMode = isDark ? 'dark_mode' : 'ligth_mode';
  const { query } = video;
  const history = useHistory();
  const handleClick = () => {
    const action = {
      type: types.playVideo,
      payload: {
        query,
        channelName,
        title,
        videoId,
        description,
        img,
      },
    };
    videoDispatch(action);
    history.push('/video');
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={`video_thumb ${themeMode}`} onClick={handleClick}>
      <img src={img} alt='videoThumbnail' />
      <div className={`video_info ${themeMode}`}>
        <p id='title'>{title}</p>
        <p id='channel'>{channelName}</p>
      </div>
    </div>
  );
};
