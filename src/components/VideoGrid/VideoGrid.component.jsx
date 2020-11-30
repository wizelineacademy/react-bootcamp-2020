import React from 'react';
import Grid from '@material-ui/core/Grid';
import VideoCard from '../VideoCard';
import './VideoGrid.styles.css';

export default function VideoGrid({ videos }) {
  return (
    <Grid container className="VideoGrid" justify="flex-start" spacing={3}>
      {videos.map((video) => {
        return (
          <VideoCard
            title={video.title}
            url={video.url}
            thumbnail={video.thumbnail} />
        );
      })}
    </Grid>
  );
}
