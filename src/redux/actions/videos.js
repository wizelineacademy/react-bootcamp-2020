import { SET_VIDEOS, ADD_TO_FAVORITES, SET_FAVORITE_VIDEOS } from './actionTypes';
import { searchVideos } from '../../api/videos.api';

export const setVideos = (videos) => {
  return {
    type: SET_VIDEOS,
    videos,
  };
};

export const addToFavorites = (video) => {
  return {
    type: ADD_TO_FAVORITES,
    video,
  };
};

export const setFavoriteVideos = (videos) => {
  return {
    type: SET_FAVORITE_VIDEOS,
    videos,
  };
};

export const fetchVideos = (searchQuery) => {
  return async (dispatch) => {
    try {
      const result = await searchVideos(searchQuery);
      dispatch(setVideos(result.data.items));
    } catch (e) {
      dispatch(setVideos([]));
    }
  };
};
