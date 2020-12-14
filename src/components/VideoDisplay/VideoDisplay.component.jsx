import React from 'react';
import { Typography } from '@material-ui/core';
import './VideoDisplay.styles.css';

export default function VideoDisplay({ video }) {
  if (!video) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="video-container">
      <iframe
        frameBorder="0"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title={video.snippet.title}
      />
      <Typography variant="body2" color="textSecondary" component="p">
        {video.snippet.title}
      </Typography>
    </div>
  );
}
