import { ACTIONS } from './UserPreferences.actions';
import { lightTheme, darkTheme } from '../../utils/theme';

export const initialState = {
  isLightThemeOn: true,
  theme: lightTheme,
  favorites: [],
};

export function userPreferencesReducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case ACTIONS.INVERT_THEME:
      return {
        ...state,
        isLightThemeOn: !state.isLightThemeOn,
        theme: state.isLightThemeOn ? darkTheme : lightTheme,
      };
    case ACTIONS.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload.video],
      };
    case ACTIONS.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((video) => video.id !== payload.video.id),
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
