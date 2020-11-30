import React, { useContext } from 'react';
import { VideosContext } from '../../providers/videos';
import VideoHomeCard from '../../components/video-home-card';

import './home.styles.scss';

function HomePage() {
  const { videosState } = useContext(VideosContext);

  const { videos, channels } = videosState;
  return (
    <div className='home-container'>
      <div className='videos-container'>
        {Object.keys(videos).map((videoKey) => {
          const { etag, ...otherVideoProps } = videos[videoKey];

          return (
            <VideoHomeCard
              key={etag}
              {...otherVideoProps}
              channel={channels[otherVideoProps.channelId]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
