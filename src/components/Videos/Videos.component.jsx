import React from 'react';
import Video from '../Video';
import './Videos.styles.css';
import { useVideos } from '../../utils/hooks/useVideos';

function Videos() {
  const { videos } = useVideos({ a: 'hey jude' });
  return (
    <span className="videos">
      {videos &&
        videos.items.map((video) => {
          return video ? (
            <Video
              key={video.id.videoId}
              title={video.snippet.title}
              id={video.id.videoId}
            />
          ) : (
            <h1>No disponible</h1>
          );
        })}{' '}
    </span>
  );
}

export default Videos;
