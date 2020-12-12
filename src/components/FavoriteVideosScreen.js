import React, { useContext } from 'react';
import { VideoThumbnail } from './VideoThumbnail';

import '../styles/homeVideoContainer.css';
import { GlobalContext } from '../context/GlobalContext';

export const FavoriteVideosScreen = () => {
  const { favorite } = useContext(GlobalContext);

  return (
    <div>
      <div className='video_container'>
        {favorite.map((h) => (
          <VideoThumbnail
            key={h.key}
            videoId={h.videoId}
            channelName={h.channelName}
            title={h.title}
            description={h.description}
            img={h.img}
          />
        ))}
      </div>
    </div>
  );
};
