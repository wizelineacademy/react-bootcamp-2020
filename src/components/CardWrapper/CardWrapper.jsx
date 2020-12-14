import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import VideoCard from '../Card/Card';
import { useVideo } from '../../providers/Video/Video.provider';

function CardWrapper({ videos, setPath }) {
  const { push } = useHistory();
  const { setCurrentVideo } = useVideo();

  const handleClick = (video) => () => {
    setCurrentVideo(video);
    push(setPath(video));
  };

  return (
    <Grid container justify="center" direction="row" spacing={3}>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          image={video.image}
          title={video.title}
          description={video.description}
          publishTime={video.publishTime}
          onClick={handleClick(video)}
        />
      ))}
    </Grid>
  );
}
export default CardWrapper;
