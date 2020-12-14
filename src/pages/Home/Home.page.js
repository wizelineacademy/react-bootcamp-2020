import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import MainPane from '../../components/MainPane';
import { HomeContainer } from './Home.page.styled';
import VideoList from '../../components/VideoList';
import { UseYoutubeAPI } from '../../utils/hooks/useYoutubeAPI';
import VideoContext from '../../state/videoContext';

function HomePage() {
  const { searchText } = useParams();
  const { state } = useContext(VideoContext);
  const { videos } = state;

  let query = 'wizeline';
  if (searchText) {
    query = searchText;
  }

  UseYoutubeAPI(query);

  return (
    <MainPane>
      <HomeContainer>
        <VideoList videosParam={videos} />
      </HomeContainer>
    </MainPane>
  );
}

export default HomePage;
