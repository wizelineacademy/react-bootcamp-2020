import { useEffect } from 'react';
import { API_KEY, RELEVANT_DATA } from '../constants';
import { useAppDataContext } from '../../providers/AppData';
import actions from '../../state/actions';
import { toSimpleYoutubeData } from '../mappers/youtubeVideosMapper';

const API_URL = `https://www.googleapis.com/youtube/v3/search?&type=video&part=id,snippet&maxResults=20${API_KEY}${RELEVANT_DATA}`;

const useYoutubeVideos = () => {
  const { state, dispatch } = useAppDataContext();

  const { searchString, videos } = state;
  useEffect(() => {
    async function fetchYoutubeVideos() {
      if (videos.length > 0 && !searchString) {
        dispatch({
          type: actions.SET_VIDEOS,
          payload: null,
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
  }, [dispatch, searchString, videos.length]);

  return state;
};

export { useYoutubeVideos };
