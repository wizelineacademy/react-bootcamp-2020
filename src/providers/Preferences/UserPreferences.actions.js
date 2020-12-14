const ACTIONS = {
  INVERT_THEME: 'INVERT_THEME',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
};

const doInvertTheme = (dispatch) => () => {
  dispatch({ type: ACTIONS.INVERT_THEME });
};

const addFavorite = (dispatch) => (video) => {
  dispatch({ type: ACTIONS.ADD_FAVORITE, payload: { video } });
};

const removeFavorite = (dispatch) => (video) => {
  dispatch({ type: ACTIONS.REMOVE_FAVORITE, payload: { video } });
};

export { ACTIONS, doInvertTheme, addFavorite, removeFavorite };
