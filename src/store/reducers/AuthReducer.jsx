export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const { isAuth } = action.payload;
      localStorage.setItem('isAuth', isAuth);
      return { ...state, isAuth };
    }
    case 'LOAD_FROM_STORAGE': {
      const isAuth = localStorage.getItem('isAuth') === 'true';
      return { ...state, isAuth };
    }
    default:
      return state;
  }
};
