import React from 'react';
import { useGetVideos } from '../../utils/hooks/useGetVideos';
import VideoCard from '../VideoCard';

import './VideosList.styles.css';

export default function VideosList({ searchQuery }) {
  const [videosList, loadingStatus, errorStatus] = useGetVideos(searchQuery);

  if (loadingStatus) {
    return <div className="videosList">Loading videos.</div>;
  }
  if (errorStatus) {
    return (
      <div className="error">I am sorry, there is an error with the YouTube API.</div>
    );
  }
  if (videosList !== null) {
    const VideosCards = videosList.map((video) => (
      <VideoCard key={video.etag} videoid={video.id.videoId} video={video.snippet} />
    ));
    return <div className="videosList"> {VideosCards} </div>;
  }
  return <div className="videosList">No videos found.</div>;
}
