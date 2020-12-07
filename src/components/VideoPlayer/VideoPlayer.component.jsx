import React from 'react';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function VideoPlayer(props) {
  const opts = {
    width: '100%',
  };
  return (
    <div>
      <YouTube videoId={props.video.id.videoId} opts={opts} />
      <Button variant="outlined" color="primary">
        Add to favorites
      </Button>
      <Button variant="outlined" color="secondary">
        Remove from favorites
      </Button>
      <Typography variant="h5">{props.video.snippet.title}</Typography>
      <Typography>{props.video.snippet.description}</Typography>
    </div>
  );
}

export default VideoPlayer;
