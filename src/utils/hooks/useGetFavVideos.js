import React, { useState } from 'react';
import { fetchVideos } from '../videoApi';

function useGetFavVideos(favoriteVideosIds) {
  const [listFavoritesVideos, setListFavoritesVideos] = useState(null);
  const [loading, setLoading] = React.useState(false);

  let videosIdsConcatenateList = favoriteVideosIds.toString();
  videosIdsConcatenateList = videosIdsConcatenateList.replace(',', '%2C');

  const getFavoriteVideoList = () => {
    setLoading(true);

    fetchVideos(videosIdsConcatenateList).then((jsonResult) => {
      // remove channels and playlist
      const jsonResultOnlyVideos = jsonResult.items.filter((item) => {
        return item.kind === 'youtube#video';
      });
      setListFavoritesVideos(jsonResultOnlyVideos);
      setLoading(false);
    });
  };
  return [listFavoritesVideos, getFavoriteVideoList, loading];
}

export { useGetFavVideos };
