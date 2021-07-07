import { useEffect, useRef, useState } from 'react';
import { API_KEY } from '../constants';
import { useAppDataContext } from '../../providers/AppData';
import { toSingleVideo } from '../mappers/youtubeSingleVideoMapper';

import actions from '../../state/actions';

const API_URL_SINGLE_VIDEO = `https://www.googleapis.com/youtube/v3/videos?maxResults=1&part=id,snippet${API_KEY}&id=`;
const useSingleVideo = (idVideo) => {
  const { state, dispatch } = useAppDataContext();
  const cache = useRef({});
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    async function fetchYoutubeVideo() {
      if (state.videos.some((video) => video.id === idVideo) || cache.current[idVideo]) {
        dispatch({
          type: actions.ADD_VIDEOS,
          payload: false,
        });
        dispatch({
          type: actions.SET_CURRENT_VIDEO,
          payload: idVideo,
        });
        setFetched(false);
      } else {
        try {
          dispatch({
            type: actions.SET_CURRENT_VIDEO,
            payload: null,
          });
          const responseSingleVideo = await fetch(API_URL_SINGLE_VIDEO + idVideo);
          const { items } = await responseSingleVideo.json();
          const item = items ? [toSingleVideo(items.shift())] : false;
          cache.current[idVideo] = item;
          dispatch({
            type: actions.ADD_VIDEOS,
            payload: item,
          });
          setFetched(true);
        } catch (error) {
          console.error(error);
          setFetched(false);
        }
      }
    }

    fetchYoutubeVideo();
  }, [dispatch, idVideo, state.videos]);
  return fetched;
};

export { useSingleVideo };
