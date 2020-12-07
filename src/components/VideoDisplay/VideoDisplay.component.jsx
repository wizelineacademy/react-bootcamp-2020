import React, { useEffect } from 'react';
import { useYoutube } from '../../providers/Youtube';
import './VideoDisplay.styles.css';

export default function VideoDisplay({ videoId }) {
  const { video, getVideo } = useYoutube();

  useEffect(() => {
    getVideo(videoId);
    // eslint-disable-next-line
  }, []);

  if (!video) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="video-container">
      <iframe
        frameBorder="0"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title={video.snippet.title}
      />
    </div>
  );
}
