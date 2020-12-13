import { types } from '../types/types';

export const themeReducer = (state = {}, action) => {
  switch (action.type) {
    case types.darkMode:
      return {
        isDark: true,
      };

    case types.ligthMode:
      return {
        isDark: false,
      };

    default:
      return state;
  }
};
