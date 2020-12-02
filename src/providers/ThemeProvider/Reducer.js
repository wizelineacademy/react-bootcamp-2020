import { ACTIONS } from './Actions';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#FAFAFA',
  itemColor: '#18A67B',
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#363537',
  itemsColor: '#AFAFAF',
};

export const initialState = {
  isLightTheme: true,
  theme: lightTheme,
};

export function ThemeReducer(state, action) {
  const { type } = action;

  switch (type) {
    case ACTIONS.SET_THEME:
      return {
        isLightTheme: !state.isLightTheme,
        theme: state.isLightTheme ? darkTheme : lightTheme,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
