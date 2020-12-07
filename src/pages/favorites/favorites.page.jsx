import React, { useContext } from 'react';
import { FavoritesContext } from '../../providers/favorites';
import VideoDirectory from '../../components/video-directory';

import './favorites.styles.scss';

function FavoritesPage() {
  const { favoritesState } = useContext(FavoritesContext);

  const { videos } = favoritesState;

  return (
    <div className='favorites-container'>
      <VideoDirectory videos={videos} />
    </div>
  );
}

export default FavoritesPage;
