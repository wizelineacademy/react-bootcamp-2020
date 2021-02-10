import {
  SET_VIDEOS,
  ADD_TO_FAVORITES,
  SET_FAVORITE_VIDEOS,
  REMOVE_FROM_FAVORITES,
} from '../actions/actionTypes';

import { storage } from '../../utils/storage';
import { APP_STATE_KEY } from '../../utils/constants';
import { getVideoId } from '../../utils/getVideoId';

const initialState = {
  videos: [],
  favoriteVideos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIDEOS:
      storage.set(APP_STATE_KEY, { ...state, videos: action.videos });
      return {
        ...state,
        videos: action.videos,
      };
    case SET_FAVORITE_VIDEOS:
      storage.set(APP_STATE_KEY, { ...state, favoriteVideos: [...action.videos] });
      return {
        ...state,
        favoriteVideos: [...action.videos],
      };
    case ADD_TO_FAVORITES:
      storage.set(APP_STATE_KEY, {
        ...state,
        favoriteVideos: [...state.favoriteVideos, action.video],
      });
      return {
        ...state,
        favoriteVideos: [...state.favoriteVideos, action.video],
      };
    case REMOVE_FROM_FAVORITES:
      storage.set(APP_STATE_KEY, {
        ...state,
        favoriteVideos: state.favoriteVideos.filter((video) => {
          const currentVideoId = getVideoId(video);
          return currentVideoId !== action.videoId;
        }),
      });
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter((video) => {
          const currentVideoId = getVideoId(video);
          return currentVideoId !== action.videoId;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
