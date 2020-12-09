import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };
    // case types.playVideo:
    //   return {
    //     ...action.payload,
    //   };
    // case types.search:
    //   return {
    //     ...action.payload,
    //     logged: true,
    //   };
    default:
      return state;
  }
};
