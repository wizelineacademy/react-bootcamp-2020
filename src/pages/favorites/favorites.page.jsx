import React, { useContext } from 'react';
import { FavoritesContext } from '../../providers/favorites';
import VideoDirectory from '../../components/video-directory';

import { FavoritesContainer } from './favorites.styles';

function FavoritesPage() {
  const { favoritesState } = useContext(FavoritesContext);
  const { videos } = favoritesState;

  return (
    <FavoritesContainer>
      <VideoDirectory videos={videos} />
    </FavoritesContainer>
  );
}

export default FavoritesPage;
