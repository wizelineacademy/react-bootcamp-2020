import { useEffect } from 'react';
import { API_KEY, RELEVANT_DATA } from '../constants';
import { useAppDataContext } from '../../providers/AppData';
import { toSingleVideo } from '../mappers/youtubeSingleVideoMapper';
import { toSimpleYoutubeData } from '../mappers/youtubeVideosMapper';

import actions from '../../state/actions';

const API_URL_SINGLE_VIDEO = `https://www.googleapis.com/youtube/v3/videos?maxResults=1&part=id,snippet${API_KEY}&id=`;
const API_URL_RELATED_VIDEOS = `https://www.googleapis.com/youtube/v3/search?maxResults=5&part=snippet&type=video${API_KEY}${RELEVANT_DATA}&relatedToVideoId=`;
const DEFAULT_SINGLE_VIDEO_INDEX = 0;

const useSingleVideoAndRelated = (idVideo) => {
  const { state, dispatch } = useAppDataContext();

  useEffect(() => {
    async function fetchYoutubeVideo() {
      try {
        const responseSingleVideo = await fetch(API_URL_SINGLE_VIDEO + idVideo);
        const dataSingleVideo = await responseSingleVideo.json();
        const item = dataSingleVideo.items[DEFAULT_SINGLE_VIDEO_INDEX];
        if (responseSingleVideo.status > 400) {
          throw new Error(`something go wrong trying to video by id ${idVideo}`);
        }
        if (item) {
          const mappedItem = toSingleVideo(item);

          dispatch({
            type: actions.ADD_VIDEOS,
            payload: [mappedItem],
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchYoutubeVideosRelated() {
      try {
        const responseRelatedVideos = await fetch(API_URL_RELATED_VIDEOS + idVideo);
        const dataRelatedVideos = await responseRelatedVideos.json();
        const { items } = dataRelatedVideos;

        if (responseRelatedVideos.status >= 400) {
          throw new Error(`something goes grong trying to get related videos ${idVideo}`);
        }

        if (items.length > 0) {
          const mappedVideos = toSimpleYoutubeData(items);
          dispatch({
            type: actions.ADD_VIDEOS,
            payload: mappedVideos,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (state.videos.size === 0 || !state.videos.some((video) => video.id === idVideo)) {
      fetchYoutubeVideo();
      fetchYoutubeVideosRelated();
    }
  }, [dispatch, idVideo, state.videos]);
};

export { useSingleVideoAndRelated };
