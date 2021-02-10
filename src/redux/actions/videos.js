import {
  SET_VIDEOS,
  ADD_TO_FAVORITES,
  SET_FAVORITE_VIDEOS,
  REMOVE_FROM_FAVORITES,
} from './actionTypes';
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

export const removeFromFavorites = (videoId) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    videoId,
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
