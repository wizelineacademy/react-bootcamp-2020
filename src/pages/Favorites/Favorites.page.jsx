import React, { useContext, useEffect } from 'react';
import GlobalContext from '../../state/GlobalContext';

import YoutubeListItem from '../../components/YoutubeList/YoutubeListItem';

const FavoritesPage = () => {
  const { favorites, setFavorites } = useContext(GlobalContext);

  let favoritesList = [];
  const displayList = [];

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites') || null));
  }, [setFavorites]);

  favoritesList = favorites;

  if (favoritesList !== null) {
    favoritesList.map((item) => {
      displayList.push(
        <YoutubeListItem
          key={item.videoId}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          videoId={item.videoId}
        />
      );
    });
  } else {
    displayList.push = <></>;
  }

  return (
    <div>
      <h2>My favorite videos</h2>
      {displayList}
    </div>
  );
};

export default FavoritesPage;
