import React, { useContext } from 'react';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { Button } from './IsFavButton.styles';
import { FAVORITES_LIST, FAVORITES_ID } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { getIdx } from '../../utils/utils';
import VideosContext from '../../context/VideosContext';

const IsFavButton = () => {
  let favoritesList = storage.get(FAVORITES_LIST);
  let favoritesId = storage.get(FAVORITES_ID);
  const { selectedVideo, id, isFav, setIsFav } = useContext(VideosContext);

  const { authenticated } = useAuth();

  const handleSetFavorites = () => {
    if (favoritesId[`${id}`]) {
      const i = getIdx(favoritesList, id);
      const newList = [...favoritesList.slice(0, i), ...favoritesList.slice(i + 1)];
      favoritesList = newList;
      delete favoritesId[`${id}`];
    } else {
      favoritesId[`${id}`] = true;
      favoritesList.push(selectedVideo);
    }
    storage.set(FAVORITES_LIST, favoritesList);
    storage.set(FAVORITES_ID, favoritesId);
    setIsFav(favoritesId[`${id}`]);
  };

  return (
    <Button onClick={authenticated && handleSetFavorites}>
      {isFav ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES'}
    </Button>
  );
};

export default IsFavButton;
