import ThemeActionTypes from './theme.types';
import Themes from './theme.themes';

const INITIAL_STATE = {
  themeName: 'default',
  theme: Themes.default,
};

const videosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.SET_THEME:
      return {
        ...state,
        theme: Themes[action.payload] ? Themes[action.payload] : Themes.default,
        themeName: action.payload,
      };
    default:
      return state;
  }
};

export { INITIAL_STATE as InitialState };
export default videosReducer;
