import React, { useContext } from 'react';
import { VideosContext } from '../../providers/videos';
import VideoDirectory from '../../components/video-directory';

import { HomeContainer } from './home.styles';

function HomePage() {
  const { videosState } = useContext(VideosContext);

  const { videos } = videosState;

  return (
    <HomeContainer>
      <VideoDirectory videos={videos} />
    </HomeContainer>
  );
}

export default HomePage;
