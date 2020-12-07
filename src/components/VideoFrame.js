import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import '../styles/videoFrame.css';

export const VideoFrame = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='video'>
      <iframe src={`https://www.youtube.com/embed/${user.videoId}`} title={user.title} />
      <p id='video_title'>{user.title}</p>
      <p id='video_desc'>{user.description}</p>
    </div>
  );
};
