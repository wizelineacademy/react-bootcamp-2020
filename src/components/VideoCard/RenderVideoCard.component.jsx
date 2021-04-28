import React from 'react';
import parse from 'html-react-parser';

import VideoCard from './index';

const renderVideoCard = ({ video, onSelectedVideo }) => {
  return (
    <VideoCard
      id={video.id.videoId}
      key={video.etag}
      title={parse(video.snippet.title)}
      description={parse(video.snippet.description)}
      thumbnail={video.snippet.thumbnails.medium.url}
      video={video}
      onSelectedVideo={onSelectedVideo}
    />
  );
};

export default renderVideoCard;
