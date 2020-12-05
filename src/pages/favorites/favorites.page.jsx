import React, { useContext } from 'react';
import { FavoritesContext } from '../../providers/favorites';
import VideoDirectory from '../../components/video-directory';

import './favorites.styles.scss';

function FavoritesPage() {
  const { favoritesState } = useContext(FavoritesContext);

  const {
    videosInfo: {
      videos: { ...videos },
      channels: { ...channels },
    },
  } = favoritesState;

  return (
    <div className='favorites-container'>
      <VideoDirectory videos={videos} channels={channels} />
    </div>
  );
}

export default FavoritesPage;
