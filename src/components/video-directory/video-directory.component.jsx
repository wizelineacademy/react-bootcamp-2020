import React from 'react';
import VideoHomeCard from '../video-home-card';

import './video-directory.styles.scss';

function VideoDirectory({ videos, channels }) {
  return (
    <div className='video-directory-container'>
      {Object.keys(videos).map((videoKey) => {
        const { etag, channelId } = videos[videoKey];

        return (
          <VideoHomeCard
            key={etag}
            video={videos[videoKey]}
            channel={channels[channelId]}
          />
        );
      })}
    </div>
  );
}

export default VideoDirectory;
