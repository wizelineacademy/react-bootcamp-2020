import React from 'react';
import './VideoDisplay.styles.css';

export default function VideoDisplay({ video }) {
  return (
    <div className="video-container">
      <iframe frameBorder="0" src={video.url} title={video.title} />
    </div>
  );
}
