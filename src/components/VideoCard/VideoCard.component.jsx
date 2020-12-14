import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Divider } from '@material-ui/core';
import FavoriteButton from '../FavoriteButton';
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
        <FavoriteButton videoId={id.videoId} />
      </Paper>
    </Grid>
  );
}
