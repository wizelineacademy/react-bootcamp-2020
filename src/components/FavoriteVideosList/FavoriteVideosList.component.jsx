import React from 'react';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY_FAVORITES } from '../../utils/constants';
import { useGetFavVideos } from '../../utils/hooks/useGetFavVideos';
import VideoCard from '../VideoCard';

import './FavoriteVideosList.styles.css';

function arrayHasItems(itemsArray) {
  if (itemsArray === null) return false;
  if (itemsArray.length === 0) return false;
  return true;
}

export default function FavoriteVideosList() {
  const favoriteVideosIds = storage.get(AUTH_STORAGE_KEY_FAVORITES);
  // const listOfFavoriteVideos = useGetFavoriteVideos(favoriteVideosIds);
  const [listOfFavVideos, getFavVideoList, loading] = useGetFavVideos(favoriteVideosIds);

  // console.log(favoriteVideosIds);
  // console.log(listOfFavVideos);

  getFavVideoList();

  let returnValue;

  if (loading) {
    return (
      <div className="videosList">
        <div>Loading videos.</div>
      </div>
    );
  }

  if (arrayHasItems(listOfFavVideos)) {
    returnValue = listOfFavVideos.map((video) => (
      <VideoCard key={video.etag} videoid={video.id.videoId} video={video.snippet} />
    ));
  } else {
    returnValue = (
      <div>
        You do not have any favorite video. Add some and come back to this page to see
        them.
      </div>
    );
  }

  return <div className="videosList"> {returnValue} </div>;
}
