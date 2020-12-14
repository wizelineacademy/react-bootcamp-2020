import React from 'react';

import FavoritesContext from '../../state/FavoritesContext';
import VideoCardSmall from '../VideoCardSmall/VideoCardSmall.component';
import { SmallCardGrid } from '../VideoCardGrid/VideoCardGrid.style';

function FavoritesGrid() {
  const { favoriteVideoList } = React.useContext(FavoritesContext);
  return (
    <SmallCardGrid>
      {favoriteVideoList.length > 0 &&
        favoriteVideoList.map((video) => {
          return <VideoCardSmall searchItem={video} key={video.id} />;
        })}
    </SmallCardGrid>
  );
}

export default FavoritesGrid;
