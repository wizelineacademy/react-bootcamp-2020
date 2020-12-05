import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Tooltip from '@material-ui/core/Tooltip';

import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import { useStyles } from './VideoPage.styled';

function VideoPage() {
  const classes = useStyles();
  const isFavorite = false;
  const icon = isFavorite ? <StarIcon /> : <StarBorderIcon />;
  const labelTitle = isFavorite ? 'Remove from Favorites' : 'Add to Favorites';

  return (
    <div className={classes.container}>
      <Box className={classes.videoContainer}>
        <Box className={classes.video}>video</Box>
        <Box className={classes.details}>
          <Typography variant="h5" component="h2" className={classes.title}>
            Title
          </Typography>
          <Tooltip title={labelTitle}>
            <IconButton color="secondary">{icon}</IconButton>
          </Tooltip>
        </Box>
        <Typography variant="body2" color="textSecondary" component="p">
          Description
        </Typography>
      </Box>
      <RelatedVideos />
    </div>
  );
}

export default VideoPage;
