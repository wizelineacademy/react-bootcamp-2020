import VideosActionTypes from './videos.types';

export const fetchVideosStart = () => ({
  type: VideosActionTypes.FETCH_VIDEOS_START,
});

export const fetchVideosSuccess = (videoMap) => ({
  type: VideosActionTypes.FETCH_VIDEOS_SUCCESS,
  payload: videoMap,
});

export const fetchVideosFailure = (videoMap) => ({
  type: VideosActionTypes.FETCH_VIDEOS_FAILURE,
  payload: videoMap,
});

export const fetchVideosStart = () => {};
