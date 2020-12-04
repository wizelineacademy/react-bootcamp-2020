import { ACTIONS } from './UserPreferences.actions';
import { lightTheme, darkTheme } from '../../utils/theme';

export const initialState = {
  isLightThemeOn: true,
  theme: lightTheme,
};

export function userPreferencesReducer(state, action) {
  const { type } = action;

  switch (type) {
    case ACTIONS.INVERT_THEME:
      return {
        ...state,
        isLightThemeOn: !state.isLightThemeOn,
        theme: state.isLightThemeOn ? darkTheme : lightTheme,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
