import React from 'react';
import { useGetVideosRelated } from '../../utils/hooks/useGetVideosRelated';
import VideoCard from '../VideoCard';

import './RelatedVideos.styles.css';

export default function RealtedVideos({ videoId }) {
  const [videosList, loadingStatus, errorStatus] = useGetVideosRelated(videoId);

  if (loadingStatus) {
    return <div className="VideoPlayer">Loading videos.</div>;
  }
  if (errorStatus) {
    return (
      <div className="error">I am sorry, there is an error with the YouTube API.</div>
    );
  }
  if (videosList !== null) {
    // console.log(videosList);
    const VideosCards = videosList
      .filter((video) => video.snippet !== null)
      .map((video) => (
        <VideoCard
          key={video.etag}
          videoid={video.id.videoId}
          video={video.snippet}
          isRelated
        />
      ));
    return (
      <div className="videosRelated">
        <span className="title">videos related</span>
        {VideosCards}
      </div>
    );
  }
  return <div className="videosRelated">No videos related found.</div>;
}
