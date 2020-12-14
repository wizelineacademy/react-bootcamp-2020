/* eslint-disable */
import React from 'react';
import { Container, VideoListContainer, VideoPlayerContainer } from './PlayerPage.styles';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoList from '../../components/VideoList/VideoList';

const PlayerPage = () => {
  return (
    <Container>
      <VideoPlayerContainer>
        <VideoPlayer />
      </VideoPlayerContainer>
      <VideoListContainer>
        <VideoList />
      </VideoListContainer>
    </Container>
  );
};

export default PlayerPage;
