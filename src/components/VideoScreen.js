import React, { useContext } from 'react';
import { RelatedVideos } from './RelatedVideos';
import { VideoFrame } from './VideoFrame';

import '../styles/videoScreen.css';
import { GlobalContext } from '../context/GlobalContext';

export const VideoScreen = () => {
  const { theme } = useContext(GlobalContext);
  const { isDark } = theme;
  const themeMode = isDark ? 'dark_mode' : 'ligth_mode';
  return (
    <div className={`video_screen ${themeMode}`}>
      <div className={`video_frame ${themeMode}`}>
        <VideoFrame />
      </div>
      <div className='related_videos'>
        <RelatedVideos />
      </div>
    </div>
  );
};
