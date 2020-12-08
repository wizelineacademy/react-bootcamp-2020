export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuth: action.payload.isAuth };
    default:
      return state;
  }
};
