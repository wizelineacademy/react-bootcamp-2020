import { ACTIONS } from './video.actions';

export const initialState = {
  loading: false,
  error: false,
  videos: [],
  video: null,
  searchItem: 'cats',
};

export function videoReducer(state, action) {
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
    case ACTIONS.SET_SEARCH_ITEM:
      return {
        ...state,
        searchItem: payload.searchItem,
      };
    case ACTIONS.SET_CURRENT_VIDEO:
      return {
        ...state,
        video: payload.video,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
