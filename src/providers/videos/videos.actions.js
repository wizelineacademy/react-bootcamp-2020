import VideosActionTypes from './videos.types';
import { searchVideos } from '../../utils/js/youtube.api';

export const fetchVideosStart = () => ({
  type: VideosActionTypes.FETCH_VIDEOS_START,
});

export const fetchVideosSuccess = (videos) => ({
  type: VideosActionTypes.FETCH_VIDEOS_SUCCESS,
  payload: videos,
});

export const fetchVideosFailure = (errorMessage) => ({
  type: VideosActionTypes.FETCH_VIDEOS_FAILURE,
  payload: errorMessage,
});

export const setSearchQuery = (query) => ({
  type: VideosActionTypes.SET_SEARCH_QUERY,
  payload: query,
});

export const setVideoToWatch = (video) => ({
  type: VideosActionTypes.SET_VIDEO_TO_WATCH,
  payload: video,
});

export const fetchVideosAsync = (query, dispatch) => {
  dispatch(fetchVideosStart());
  searchVideos(
    query,
    (result) => {
      dispatch(fetchVideosSuccess(result));
    },
    (error) => {
      console.log('Error', error);
      dispatch(fetchVideosFailure('Error'));
    }
  );
};
