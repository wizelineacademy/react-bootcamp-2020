import React from 'react';
import { Grid, Paper, Divider, Button } from '@material-ui/core';
import './VideoCard.styles.css';
// import Button from '@material-ui/core/Button';

export default function VideoCard({ title, url, thumbnail }) {
  return (
    <Grid item>
      <Paper className="paper">
        <img src={thumbnail} alt={title} className="thumbnail" />
        <Divider />
        <div className="paperTitle">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </div>
        <Button variant="contained" color="primary">
          ▶ Watch
        </Button>
      </Paper>
    </Grid>
  );
}
