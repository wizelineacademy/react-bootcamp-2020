import React from 'react';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';

function VideoPlayer(props) {
  const opts = {
    width: '100%',
  };
  return (
    <div>
      <YouTube videoId={props.video.id.videoId} opts={opts} />
      <Typography variant="h5">{props.video.snippet.title}</Typography>
      <Typography>{props.video.snippet.description}</Typography>
    </div>
  );
}

export default VideoPlayer;
