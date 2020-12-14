import { useState, useEffect } from 'react';
import { BASE_API_URL_VIDEO } from '../constants';

function HasFindVideo(videoInfo, errorStatus) {
  if (videoInfo === null) return false;
  if (errorStatus) return false;
  if (videoInfo.pageInfo.totalResults === 0) return false;
  return true;
}

function useGetVideo(videoId) {
  const [videoInfo, setVideoInfo] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    async function getVideo() {
      try {
        if (videoId === '') return null;

        setLoadingStatus(true);
        const API_URL = BASE_API_URL_VIDEO.replace('<VIDEO_ID>', videoId).replace(
          '<API_KEY>',
          process.env.REACT_APP_API_KEY
        );

        const response = await fetch(API_URL).then((r) =>
          r.ok ? r : setErrorStatus(true)
        );
        const jsonResult = await response.json();

        setVideoInfo(jsonResult);
        setLoadingStatus(false);
      } catch (error) {
        console.error('Error retrieving video data: ', error);
        setErrorStatus(true);
        setLoadingStatus(false);
      }
    }
    getVideo();
  }, [videoId]);

  if (HasFindVideo(videoInfo, errorStatus)) {
    return [videoInfo.items[0], loadingStatus, errorStatus];
  }
  return [null, loadingStatus, errorStatus];
}

export { useGetVideo };
