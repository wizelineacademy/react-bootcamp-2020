import React from 'react';
import parse from 'html-react-parser';

import RelatedCard from './index';

const RelatedCards = ({ videos, onSelectedVideo }) => {
  return (
    <div className="col-start-6 h-screen overflow-y-auto col-end-8">
      {videos.map((video) => (
        <RelatedCard
          id={video.etag}
          key={video.etag}
          title={parse(video.snippet.title)}
          thumbnail={video.snippet.thumbnails.default.url}
          video={video}
          onSelectedVideo={onSelectedVideo}
        />
      ))}
    </div>
  );
};

export default RelatedCards;
