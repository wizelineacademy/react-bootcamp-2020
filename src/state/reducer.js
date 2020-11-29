import actions from './actions';
import { storage } from '../utils/storage';
import { DARK_THEME, LIGHT_THEME, PREFERED_THEME } from '../utils/constants';

export default function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_FAVORITE:
      return {};

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
      return {
        ...state,
        videos: action.payload.items,
      };
    case actions.ADD_VIDEOS:
      return {
        ...state,
        videos: [...state.videos, ...action.payload],
      };
    case actions.SET_CURRENT_VIDEO:
      return {
        ...state,
        currentVideo: state.videos.find((video) => video.id.videoId === action.payload),
      };
    case actions.TOGGLE_NAV: {
      return {
        ...state,
        navigationOpen: !state.navigationOpen,
      };
    }

    default:
      throw new Error(`UNKNOW_ACTION: ${action.type}`);
  }
}
