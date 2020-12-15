import { REGISTER_DIALOG, SETOPEN_DIALOG } from './actions';

export const initialState = {
  dialogs: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_DIALOG: {
      const {
        payload: { name, isOpen },
      } = action;
      const { dialogs } = state;
      if (!dialogs[name]) {
        dialogs[name] = { isOpen };
      }
      return {
        ...state,
        ...dialogs,
      };
    }
    case SETOPEN_DIALOG: {
      const {
        payload: { name, isOpen },
      } = action;
      const { dialogs } = state;
      if (dialogs[name]) {
        dialogs[name] = { isOpen };
        return {
          ...state,
          ...dialogs,
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
