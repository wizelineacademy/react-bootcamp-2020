import React from 'react';
import { RelatedVideos } from './RelatedVideos';
import { VideoFrame } from './VideoFrame';

import '../styles/videoScreen.css';

export const VideoScreen = () => {
  return (
    <div className='video_screen'>
      <VideoFrame />
      <RelatedVideos />
    </div>
  );
};
