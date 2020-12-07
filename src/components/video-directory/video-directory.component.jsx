import React from 'react';
import VideoHomeCard from '../video-home-card';

import './video-directory.styles.scss';

function VideoDirectory({ videos }) {
  return (
    <div className='video-directory-container'>
      {Object.keys(videos).map((videoKey) => {
        const { etag } = videos[videoKey];

        return <VideoHomeCard key={etag} video={videos[videoKey]} />;
      })}
    </div>
  );
}

export default VideoDirectory;
