import React, { useContext } from 'react';
import { VideosContext } from '../../providers/videos';
import VideoDirectory from '../../components/video-directory';

import './home.styles.scss';

function HomePage() {
  const { videosState } = useContext(VideosContext);

  const {
    videosInfo: { videos, channels },
  } = videosState;

  return (
    <div className='home-container'>
      <VideoDirectory videos={videos} channels={channels} />
    </div>
  );
}

export default HomePage;
