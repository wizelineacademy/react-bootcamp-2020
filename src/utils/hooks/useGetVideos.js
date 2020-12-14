import { useState, useEffect } from 'react';
import { BASE_API_URL } from '../constants';

function useGetVideos(searchQuery) {
  const [videosList, setVideosList] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    async function getVideos() {
      try {
        if (searchQuery === '') return '';
        setLoadingStatus(true);

        const API_URL = BASE_API_URL.replace('<SearchQuery>', searchQuery).replace(
          '<API_KEY>',
          process.env.REACT_APP_API_KEY
        );

        // const response = await fetch(API_URL);
        const response = await fetch(API_URL).then((r) =>
          r.ok ? r : setErrorStatus(true)
        );
        const jsonResult = await response.json();

        // remove channels and playlist
        const jsonResultOnlyVideos = jsonResult.items.filter((item) => {
          return item.id.kind === 'youtube#video';
        });
        setVideosList(jsonResultOnlyVideos);
        setLoadingStatus(false);
      } catch (error) {
        setErrorStatus(true);
        setLoadingStatus(false);
        console.error('Error retrieving search results: ', error);
      }
    }
    getVideos();
  }, [searchQuery]);
  if (videosList !== null) {
    return [videosList, loadingStatus, errorStatus];
  }
  return [null, loadingStatus, errorStatus];
}

export { useGetVideos };
