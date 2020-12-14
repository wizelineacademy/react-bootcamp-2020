import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';
import FavoriteButton from '../FavoriteButton';
import './VideoCard.styles.css';

export default function VideoCard({ video }) {
  const history = useHistory();

  const watchVideo = () => {
    history.push(`/watch/${video.id.videoId}`);
  };

  return (
    <Grid item key={video.id.videoId} xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card>
        <CardMedia
          label={`thumbnail-${video.id.videoId}`}
          className="card-media"
          image={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          onClick={watchVideo}
        />
        <CardContent onClick={watchVideo} className="card-content">
          <Typography variant="body2" color="textSecondary" component="p">
            {video.snippet.title}
          </Typography>
        </CardContent>
        <CardActionArea>
          <FavoriteButton videoId={video.id.videoId} />
        </CardActionArea>
      </Card>
    </Grid>
  );
}
