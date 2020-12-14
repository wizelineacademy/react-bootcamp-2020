import { useState, useEffect } from 'react';
import { BASE_API_URL_VIDEO } from '../constants';

function arrayIsEmpty(itemsArray) {
  if (itemsArray === null) return true;
  if (itemsArray.length === 0) return true;

  return false;
}

function useGetFavoriteVideos(favoriteVideosIds) {
  const [listFavoritesVideos, setListFavoritesVideos] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    async function getFavoriteVideos() {
      try {
        if (arrayIsEmpty(favoriteVideosIds)) {
          return null;
        }
        setLoadingStatus(true);
        let videosIdsConcatenateList = favoriteVideosIds.toString();
        videosIdsConcatenateList = videosIdsConcatenateList.replace(',', '%2C');

        const API_URL = BASE_API_URL_VIDEO.replace(
          '<VIDEO_ID>',
          videosIdsConcatenateList
        ).replace('<API_KEY>', process.env.REACT_APP_API_KEY);

        // const response = await fetch(API_URL);
        const response = await fetch(API_URL).then((r) =>
          r.ok ? r : setErrorStatus(true)
        );
        const jsonResult = await response.json();

        // remove channels and playlist
        const jsonResultOnlyVideos = jsonResult.items.filter((item) => {
          return item.kind === 'youtube#video';
        });
        // console.log('json:', jsonResultOnlyVideos);
        setListFavoritesVideos(jsonResultOnlyVideos);
        setLoadingStatus(false);
      } catch (error) {
        console.error('Error retrieving favorite videos: ', error);
        setErrorStatus(true);
        setLoadingStatus(false);
      }
    }
    getFavoriteVideos();
  }, [favoriteVideosIds]);

  if (listFavoritesVideos !== null) {
    return [listFavoritesVideos, loadingStatus, errorStatus];
  }

  return [null, loadingStatus, errorStatus];
}

export { useGetFavoriteVideos };
