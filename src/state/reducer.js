import actions from './actions';
import { storage } from '../utils/storage';
import { DARK_THEME, LIGHT_THEME, PREFERED_THEME } from '../utils/constants';

export default function reducer(state, action) {
  switch (action.type) {
    case actions.TOGGLE_THEME:
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
    case actions.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case actions.SET_VIDEOS:
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        videos: action.payload,
      };
    case actions.ADD_VIDEOS:
      if (!action.payload) {
        return state;
      }
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
      return {
        ...state,
        favorites: state.favorites.some((video) => video.id === action.payload)
          ? state.favorites.filter((video) => video.id !== action.payload)
          : [
              ...state.favorites,
              state.videos.find((video) => video.id === action.payload),
            ],
      };
    case actions.SET_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload,
      };

    default:
      throw new Error(`UNKNOW_ACTION: ${action.type}`);
  }
}
