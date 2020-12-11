import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Divider, Button } from '@material-ui/core';
import './VideoCard.styles.css';

export default function VideoCard({ video }) {
  const { id, snippet } = video;
  return (
    <Grid item>
      <Paper className="paper">
        <img
          src={snippet.thumbnails.medium.url}
          alt={snippet.title}
          className="thumbnail"
        />
        <Divider />
        <div className="paperTitle">
          <Link to={`/watch/${id.videoId}`}>{snippet.title}</Link>
        </div>
        <Button variant="contained" color="primary">
          ▶ Watch
        </Button>
      </Paper>
    </Grid>
  );
}
