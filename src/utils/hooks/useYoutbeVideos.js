import { useEffect } from 'react';
import { API_KEY, RELEVANT_DATA } from '../constants';
import { useAppDataContext } from '../../providers/AppData';
import actions from '../../state/actions';
import { toSimpleYoutubeData } from '../mappers/youtubeVideosMapper';

const API_URL = `https://www.googleapis.com/youtube/v3/search?&type=video&part=id,snippet&maxResults=20${API_KEY}${RELEVANT_DATA}`;

const useYoutubeVideos = () => {
  const { state, dispatch } = useAppDataContext();

  useEffect(() => {
    async function fetchYoutubeVideos(searchString) {
      let search = '';
      if (searchString) {
        search = `&q=${searchString}`;
      }
      try {
        const response = await fetch(API_URL + search);
        const data = await response.json();
        if (response.status >= 200 && response.status < 400) {
          const mappedData = data.items.map(toSimpleYoutubeData);

          dispatch({
            type: actions.SET_VIDEOS,
            payload: mappedData,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchYoutubeVideos();
  }, [dispatch]);

  return state;
};

export { useYoutubeVideos };
