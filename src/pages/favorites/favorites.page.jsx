import React, { useContext } from 'react';
import { FavoritesContext } from '../../providers/favorites';
import VideoDirectory from '../../components/video-directory';

import { FavoritesContainer, PageTitle } from './favorites.styles';

function FavoritesPage() {
  const { favoritesState } = useContext(FavoritesContext);
  const { videos } = favoritesState;

  return (
    <FavoritesContainer>
      <PageTitle>Favorite videos</PageTitle>
      <VideoDirectory videos={videos} />
    </FavoritesContainer>
  );
}

export default FavoritesPage;
