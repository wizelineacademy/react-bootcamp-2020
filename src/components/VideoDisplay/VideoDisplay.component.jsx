import React, { useEffect, useState } from 'react';
import { searchVideoById } from '../../api';
import './VideoDisplay.styles.css';

export default function VideoDisplay({ videoId }) {
  const [video, setVideo] = useState(null);

  const getVideo = async () => {
    const result = await searchVideoById(videoId);
    setVideo(result);
  };

  useEffect(() => {
    getVideo(videoId);
    // eslint-disable-next-line
  }, []);

  if (!video) {
    return <h1>Loading!</h1>;
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
