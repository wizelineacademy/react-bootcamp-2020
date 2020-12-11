/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
import { GlobalContext } from '../context/GlobalContext';

import '../styles/relatedVideos.css';
import { types } from '../types/types';

export const VideoRelatedThumbnail = ({
  channelName,
  title,
  img,
  videoId,
  description,
}) => {
  const { video, videoDispatch } = useContext(GlobalContext);
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
    <div className='video_relthumb' onClick={handleClick}>
      <img src={img} id='rel_img' alt='videoThumbnail' />
      <div className='video_relinfo'>
        <p id='rel_title'>{title}</p>
        <p id='rel_channel'>{channelName}</p>
      </div>
    </div>
  );
};
