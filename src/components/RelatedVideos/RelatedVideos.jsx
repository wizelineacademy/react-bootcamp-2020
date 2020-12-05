import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './RelatedVideos.styled';

function RelatedVideos() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Fragment key="id">
        <Box className={classes.videoItem}>
          <img alt="title" className={classes.imgMini} />
          <Typography>video title</Typography>
        </Box>
        <Divider />
      </Fragment>
    </Box>
  );
}

export default RelatedVideos;
