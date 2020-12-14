import React from 'react';
import Grid from '@material-ui/core/Grid';
import VideoCard from '../VideoCard';
import './VideoGrid.styles.css';

export default function VideoGrid({ videos }) {
  return (
    <Grid container className="content" justify="flex-start" spacing={3}>
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </Grid>
  );
}
