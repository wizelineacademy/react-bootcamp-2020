import FavoritesActionTypes from './favorites.types';

export const setFavoritesVideos = (videos) => ({
  type: FavoritesActionTypes.SET_FAVORITES_VIDEOS,
  payload: videos,
});

export const addVideoToFavorites = (video) => ({
  type: FavoritesActionTypes.ADD_FAVORITE_VIDEO,
  payload: video,
});

export const removeVideoFromFavorites = (video) => ({
  type: FavoritesActionTypes.REMOVE_FAVORITE_VIDEO,
  payload: video,
});
