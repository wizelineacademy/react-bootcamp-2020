const ACTIONS = {
  SET_THEME: 'SET_THEME',
};

const setThemeAction = (dispatch) => () => {
  dispatch({
    type: ACTIONS.SET_THEME,
  });
};

export { ACTIONS, setThemeAction };
