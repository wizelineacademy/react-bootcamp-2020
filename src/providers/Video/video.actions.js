import he from 'he';

import { getVideos } from '../../api/youtubeApi';

const ACTIONS = {
  FETCH_VIDEOS: 'FETCH_VIDEOS',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  SET_SEARCH_ITEM: 'SET_SEARCH_ITEM',
  SET_CURRENT_VIDEO: 'SET_CURRENT_VIDEO',
};

function dataFormat(videoData) {
  const { snippet, id } = videoData;

  const videoTitle = snippet.title ? he.decode(snippet.title) : '';
  const videoDescription = snippet.description ? he.decode(snippet.description) : '';

  return {
    id: id.videoId,
    image: snippet.thumbnails.medium.url || '',
    title: videoTitle,
    description: videoDescription,
    publishTime: snippet?.publishTime,
  };
}

const fetchVideos = (dispatch) => async (searchItem) => {
  dispatch({ type: ACTIONS.FETCH_VIDEOS });
  try {
    const result = await getVideos(searchItem);
    const videos = result
      .filter((video) => video.id.kind === 'youtube#video')
      .map(dataFormat);

    console.log(videos);
    dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { videos } });
    return videos;
  } catch (error) {
    console.log(error);
    console.log('error ');
    dispatch({
      type: ACTIONS.FETCH_ERROR,
      payload: { error: error.result.error.message },
    });
    return null;
  }
};

const setSearchItem = (dispatch) => (searchItem) => {
  dispatch({ type: ACTIONS.SET_SEARCH_ITEM, payload: { searchItem } });
};

const setCurrentVideo = (dispatch) => (video) => {
  dispatch({ type: ACTIONS.SET_CURRENT_VIDEO, payload: { video } });
};

export { ACTIONS, fetchVideos, setSearchItem, setCurrentVideo };
