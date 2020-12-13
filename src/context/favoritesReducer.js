import { types } from '../types/types';

export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case types.initFavorite:
      return [...action.payload];
    case types.addFavorite:
      return [...state, action.payload];
    case types.deleteFavorite:
      return state.filter((v) => v.videoId !== action.payload);
    case types.favoriteLogout:
      return [];
    default:
      return state;
  }
};
