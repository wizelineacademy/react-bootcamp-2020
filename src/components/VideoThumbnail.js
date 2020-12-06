/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import '../styles/videoThumbnails.css';

export const VideoThumbnail = ({ channelName, title, img }) => {
  const handleClick = () => {
    console.log(title);
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
