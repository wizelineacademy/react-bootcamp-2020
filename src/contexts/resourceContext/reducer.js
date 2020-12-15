import { SET_RESOURCE_STATE } from './actions';

export const initialState = {
  resources: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_RESOURCE_STATE: {
      const {
        payload: { name, status },
      } = action;
      const { resources } = state;
      resources[name] = status;
      return {
        ...state,
        ...resources,
      };
    }
    default:
      return state;
  }
};

export default reducer;
