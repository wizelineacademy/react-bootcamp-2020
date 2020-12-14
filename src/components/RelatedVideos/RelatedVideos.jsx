import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { useVideo } from '../../providers/Video/Video.provider';
import { useStyles } from './RelatedVideos.styled';

function RelatedVideos({ videos, setPath }) {
  const classes = useStyles();
  const { setCurrentVideo } = useVideo();
  const { push } = useHistory();

  const handleClick = (video) => {
    setCurrentVideo(video);
    push(setPath(video));
  };

  return (
    <Box className={classes.container}>
      {videos.map((video) => (
        <Fragment key={video.id}>
          <Box
            className={classes.videoItem}
            onClick={() => {
              handleClick(video);
            }}
          >
            <img alt={video.title} className={classes.imgMini} src={video.image} />
            <Typography>{video.title}</Typography>
          </Box>
          <Divider />
        </Fragment>
      ))}
    </Box>
  );
}

export default RelatedVideos;
