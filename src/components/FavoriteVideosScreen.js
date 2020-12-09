import React, { useContext } from 'react';
import { VideoThumbnail } from './VideoThumbnail';

import '../styles/homeVideoContainer.css';
import { GlobalContext } from '../context/GlobalContext';

export const FavoriteVideosScreen = () => {
  const { favorite } = useContext(GlobalContext);

  return (
    <div>
      <h1>Favorite Videos</h1>
      <hr />
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
