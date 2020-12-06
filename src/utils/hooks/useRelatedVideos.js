import { useEffect, useRef, useState } from 'react';
import { API_KEY, RELEVANT_DATA } from '../constants';
import { useAppDataContext } from '../../providers/AppData';

import { toSimpleYoutubeData } from '../mappers/youtubeVideosMapper';

import actions from '../../state/actions';

const API_URL_RELATED_VIDEOS = `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&type=video${API_KEY}${RELEVANT_DATA}&relatedToVideoId=`;

const useRelatedVideos = (idVideo) => {
  const cache = useRef({});
  const { state, dispatch } = useAppDataContext();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    async function fetchRelated() {
      if (state.videos.length > 0) {
        dispatch({
          type: actions.ADD_VIDEOS,
          payload: false,
        });
        setFetched(false);
      } else if (cache.current[idVideo]) {
        console.log('here');
        const data = cache.current[idVideo];
        dispatch({
          type: actions.ADD_VIDEOS,
          payload: data,
        });
        setFetched(false);
      } else {
        try {
          const responseRelatedVideos = await fetch(API_URL_RELATED_VIDEOS + idVideo);
          const dataRelatedVideos = await responseRelatedVideos.json();
          const { items } = dataRelatedVideos;
          const mapedVideos = items ? items.map(toSimpleYoutubeData) : false;
          cache.current[idVideo] = mapedVideos;
          dispatch({
            type: actions.ADD_VIDEOS,
            payload: mapedVideos,
          });
          setFetched(true);
        } catch (error) {
          console.error(error);
          setFetched(false);
        }
      }
    }
    fetchRelated();
  }, [dispatch, idVideo, state.videos]);
  return fetched;
};

export { useRelatedVideos };
