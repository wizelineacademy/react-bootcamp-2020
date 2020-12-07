import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useYoutube } from '../../providers/Youtube';
import VideoCard from '../VideoCard';
import './VideoGrid.styles.css';

export default function VideoGrid() {
  const { videos } = useYoutube();

  return (
    <Grid container className="content" justify="flex-start" spacing={3}>
      {videos.map((video) => {
        return <VideoCard key={video.id.videoId} video={video} />;
      })}
    </Grid>
  );
}
