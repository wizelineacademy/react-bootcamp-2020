import VideosActionTypes from './videos.types';
import { SummaryResult2 } from '../../utils/searchresult';

const summaryResultKeys = Object.keys(SummaryResult2.videos);
console.log(summaryResultKeys);
const defaultVideo = SummaryResult2.videos[summaryResultKeys[0]];
const defaulrChannel = SummaryResult2.channels[defaultVideo.channelId];
const INITIAL_STATE = {
  searchQuery: '',
  videosInfo: SummaryResult2,
  videoToWatch: { video: defaultVideo, channel: defaulrChannel },
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
        videosInfo: action.payload,
      };
    case VideosActionTypes.FETCH_VIDEOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case VideosActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case VideosActionTypes.SET_VIDEO_TO_WATCH:
      return {
        ...state,
        videoToWatch: action.payload,
      };
    default:
      return state;
  }
};

export { INITIAL_STATE as InitialState };
export default videosReducer;
