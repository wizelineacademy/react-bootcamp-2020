import { useEffect, useRef } from 'react';
import { API_KEY, RELEVANT_DATA } from '../constants';
import { useAppDataContext } from '../../providers/AppData';
import actions from '../../state/actions';
import { toSimpleYoutubeData } from '../mappers/youtubeVideosMapper';

const API_URL = `https://www.googleapis.com/youtube/v3/search?&type=video&part=id,snippet&maxResults=10${API_KEY}${RELEVANT_DATA}`;

const useYoutubeVideos = () => {
  const { state, dispatch } = useAppDataContext();

  const cache = useRef({});
  const { searchString } = state;
  useEffect(() => {
    async function fetchYoutubeVideos() {
      if (cache.current[searchString]) {
        dispatch({
          type: actions.SET_VIDEOS,
          payload: cache.current[searchString],
        });
      } else {
        try {
          dispatch({
            type: actions.SET_VIDEOS,
            payload: [],
          });
          const response = await fetch(`${API_URL}&q=${searchString}`);
          const data = await response.json();
          const mappedData = data.items ? data.items.map(toSimpleYoutubeData) : [];
          cache.current[searchString] = mappedData;

          dispatch({
            type: actions.SET_VIDEOS,
            payload: mappedData,
          });
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchYoutubeVideos();
  }, [dispatch, searchString]);

  return state;
};

export { useYoutubeVideos };
