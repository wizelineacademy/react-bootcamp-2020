import React, { useContext } from 'react';
import { VideosContext } from '../../providers/videos';
import VideoDirectory from '../../components/video-directory';

import './home.styles.scss';

function HomePage() {
  const { videosState } = useContext(VideosContext);

  const { videos } = videosState;

  return (
    <div className='home-container'>
      <VideoDirectory videos={videos} />
    </div>
  );
}

export default HomePage;
