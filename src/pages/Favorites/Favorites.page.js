import React, { useContext } from 'react';
import VideoList from '../../components/VideoList';
import VideoContext from '../../state/videoContext';
import { FavContainer } from './Favorites.page.styled';
import MainPane from '../../components/MainPane';

function FavoritesPage() {
  const { state } = useContext(VideoContext);
  const { favoriteVideos } = state;
  const videos = favoriteVideos
    ? favoriteVideos
    : JSON.parse(localStorage.getItem('favorites'));

  return (
    <MainPane>
      <FavContainer>
        <h1>Favorites</h1>
        <VideoList videosParam={videos} />
      </FavContainer>
    </MainPane>
  );
}

export default FavoritesPage;
