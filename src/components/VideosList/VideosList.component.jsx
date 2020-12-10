import React from 'react';
import { useGetVideos } from '../../utils/hooks/useGetVideos';
import VideoCard from '../VideoCard';
// import { storage } from '../../utils/storage';
// import { AUTH_STORAGE_KEY_FAVORITES } from '../../utils/constants';

import './VideosList.styles.css';

export default function VideosList({ searchQuery }) {
  const videosList = useGetVideos(searchQuery);
  // let videosFavoriteList = storage.get(AUTH_STORAGE_KEY_FAVORITES);
  // let index = -1;

  // if (videosFavoriteList === null) videosFavoriteList = [];

  if (videosList !== null) {
    const VideosCards = videosList.map((video) => (
      <VideoCard key={video.etag} videoid={video.id.videoId} video={video.snippet} />
    ));
    return <div className="videosList"> {VideosCards} </div>;
  }
  return <div className="videosList">No videos found.</div>;
}
