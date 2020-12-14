import React from 'react';

const FavoritesContex = React.createContext({
  favoriteVideoList: [],
  addFavoritesFn: () => {},
  removeFavoritesFn: () => {},
});

export default FavoritesContex;
