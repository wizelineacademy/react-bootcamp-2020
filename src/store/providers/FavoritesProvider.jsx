import React, { useReducer } from 'react';

import { FavoriteContext } from '../contexts/FavoriteContext';
import { favoriteReducer } from '../reducers/FavoriteReducer';

const FavoriteProvider = (props) => {
  const initialState = {
    favoriteVideos: [],
    videos: [],
  };

  const videoContextReducer = useReducer(favoriteReducer, initialState);

  return (
    <FavoriteContext.Provider value={videoContextReducer}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
