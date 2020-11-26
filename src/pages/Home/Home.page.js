import React, { useRef } from 'react';

import MainPane from '../../components/MainPane';
import { HomeContainer } from './Home.page.styled';
import VideoList from '../../components/VideoList';

function HomePage() {
  return (
    <MainPane>
      <HomeContainer>
        <h1>Hello blink!</h1>
        <VideoList />
      </HomeContainer>
    </MainPane>
  );
}

export default HomePage;
