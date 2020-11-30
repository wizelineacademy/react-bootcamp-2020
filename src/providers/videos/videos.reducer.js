import VideosActionTypes from './videos.types';

import { SummaryResult2 } from '../../utils/searchresult';

const INITIAL_STATE = {
  selectedVideo: null,
  videos: SummaryResult2.videos,
  channels: SummaryResult2.channels,
  isFetching: false,
  errorMessage: undefined,
};

const videosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VideosActionTypes.FETCH_VIDEOS_START:
      return {
        ...state,
        isFetching: true,
      };
    case VideosActionTypes.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        videosData: action.payload,
      };
    case VideosActionTypes.FETCH_VIDEOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case VideosActionTypes.SET_SELECTED_VIDEO:
      return {
        ...state,
        selectedVideo: action.payload,
      };
    default:
      return state;
  }
};

export { INITIAL_STATE as InitialState };
export default videosReducer;
