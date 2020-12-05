import FavoritesActionTypes from './favorites.types';
import { addVideoToFavorites, removeVideoFromFavorites } from './favorites.utils';

const INITIAL_STATE = {
  videosInfo: { videos: {}, channels: {} },
};

const videosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoritesActionTypes.SET_FAVORITES_VIDEOS:
      return {
        ...state,
        videosInfo: action.payload,
      };
    case FavoritesActionTypes.ADD_FAVORITE_VIDEO:
      return {
        ...state,
        videosInfo: addVideoToFavorites(state.videosInfo, action.payload),
      };
    case FavoritesActionTypes.REMOVE_FAVORITE_VIDEO:
      return {
        ...state,
        videosInfo: removeVideoFromFavorites(state.videosInfo, action.payload),
      };
    default:
      return state;
  }
};

export { INITIAL_STATE as InitialState };
export default videosReducer;
