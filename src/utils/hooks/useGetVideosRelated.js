import { useState, useEffect } from 'react';
import { BASE_API_URL_VIDEOSRELATED } from '../constants';

function useGetVideosRelated(videoId) {
  const [videosList, setVideosList] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    async function getRelatedVideos() {
      try {
        if (videoId === '') return '';
        setLoadingStatus(true);

        const API_URL = BASE_API_URL_VIDEOSRELATED.replace('<VIDEO_ID>', videoId).replace(
          '<API_KEY>',
          process.env.REACT_APP_API_KEY
        );

        // const response = await fetch(API_URL);
        const response = await fetch(API_URL).then((r) =>
          r.ok ? r : setErrorStatus(true)
        );
        const jsonResult = await response.json();

        // remove channels and playlist, only videos in the results
        const jsonResultOnlyVideos = jsonResult.items.filter((item) => {
          return item.id.kind === 'youtube#video';
        });
        setVideosList(jsonResultOnlyVideos);
        setLoadingStatus(false);
      } catch (error) {
        console.error('Error retrieving related videos: ', error);
        setErrorStatus(true);
        setLoadingStatus(false);
      }
    }
    getRelatedVideos();
  }, [videoId]);
  if (videosList !== null && !errorStatus) {
    return [videosList, loadingStatus, errorStatus];
  }
  return [null, loadingStatus, errorStatus];
}

export { useGetVideosRelated };
