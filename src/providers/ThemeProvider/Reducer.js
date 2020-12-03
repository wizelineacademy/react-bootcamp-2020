import { ACTIONS } from './Actions';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  background: '#FAFAFA',
  itemColor: '#18A67B',
  divider: '#CCC',
  backgroundItem: '#E6F5F2',
};

export const darkTheme = {
  body: '#1C1C1C',
  text: '#FAFAFA',
  background: '#151515',
  itemColor: '#AFAFAF',
  divider: '#1C1C1C',
  backgroundItem: '#444345',
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
