import { ACTIONS } from './Actions';

export const initialState = {
  error: false,
  loading: false,
  videos: [],
};

export function reducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case ACTIONS.FETCH_VIDEOS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload.videos,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return {
        ...state,
        error: 'Error',
      };
  }
}
