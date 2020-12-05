import React from 'react';
import { useGetVideos } from '../../utils/hooks/useGetVideos';
import VideoCard from '../VideoCard/VideoCard.component';

export default function VideosList({ searchQuery }) {
  const videosList = useGetVideos(searchQuery);

  if (videosList !== null) {
    const VideosCards = videosList.map((video) => (
      <VideoCard key={video.etag} videoid={video.id.videoId} video={video.snippet} />
    ));
    return <div className="videosList"> {VideosCards} </div>;
  }
  return <div className="videosList">No videos found.</div>;
}
