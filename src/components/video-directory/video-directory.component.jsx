import React from 'react';
import VideoHomeCard from '../video-home-card';

import { VideoDirectoryContainer } from './video-directory.styles';

function VideoDirectory({ videos }) {
  return (
    <VideoDirectoryContainer>
      {Object.keys(videos).map((videoKey) => {
        const { etag } = videos[videoKey];

        return <VideoHomeCard key={etag} video={videos[videoKey]} />;
      })}
    </VideoDirectoryContainer>
  );
}

export default VideoDirectory;
