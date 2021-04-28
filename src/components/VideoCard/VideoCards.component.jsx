import React from 'react';

import RenderVideoCard from './RenderVideoCard.component';

const VideoCards = ({ videos, onSelectedVideo }) => {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {videos.map((video) => (
          <RenderVideoCard
            video={video}
            key={video.id.videoId}
            onSelectedVideo={onSelectedVideo}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCards;
