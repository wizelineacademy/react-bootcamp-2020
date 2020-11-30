import actions from './actions';
import { storage } from '../utils/storage';
import { DARK_THEME, LIGHT_THEME, PREFERED_THEME } from '../utils/constants';

function toggleTheme(state) {
  if (state.theme === DARK_THEME) {
    storage.set(PREFERED_THEME, LIGHT_THEME);
    return {
      ...state,
      theme: LIGHT_THEME,
    };
  }
  storage.set(PREFERED_THEME, DARK_THEME);
  return {
    ...state,
    theme: DARK_THEME,
  };
}

function toggleFavorite({ payload: idVideo }, state) {
  const videoIndex = state.favorites.findIndex((video) => video.id === idVideo);
  if (videoIndex < 0) {
    const selectedVideo = state.videos.find((video) => video.id === idVideo);
    if (!selectedVideo) {
      throw new Error(`cant find video with id ${idVideo}`);
    }
    return {
      ...state,
      favorites: [...state.favorites, selectedVideo],
    };
  }
  const favoritesCopy = Object.assign(state.favorites, []);
  favoritesCopy.splice(videoIndex, 0);
  return {
    ...state,
    favorites: favoritesCopy,
  };
}

export default function reducer(state, action) {
  switch (action.type) {
    case actions.TOGGLE_THEME:
      return toggleTheme(state);

    case actions.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case actions.SET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
      };
    case actions.ADD_VIDEOS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload],
      };
    case actions.SET_CURRENT_VIDEO:
      return {
        ...state,
        currentVideo: state.videos.find((video) => video.id === action.payload),
      };
    case actions.TOGGLE_NAV:
      return {
        ...state,
        navigationOpen: !state.navigationOpen,
      };

    case actions.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actions.TOGGLE_FAVORITE:
      return toggleFavorite(action, state);

    default:
      throw new Error(`UNKNOW_ACTION: ${action.type}`);
  }
}
