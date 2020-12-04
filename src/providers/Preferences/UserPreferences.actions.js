const ACTIONS = {
  INVERT_THEME: 'INVERT_THEME',
};

const doInvertTheme = (dispatch) => () => {
  dispatch({ type: ACTIONS.INVERT_THEME });
};

export { ACTIONS, doInvertTheme };
