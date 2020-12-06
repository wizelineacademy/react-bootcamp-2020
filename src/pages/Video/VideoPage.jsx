import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Tooltip from '@material-ui/core/Tooltip';

import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { useVideo } from '../../providers/Video/Video.provider';
import { useUserPreferences } from '../../providers/Preferences/UserPreferences.provider';
import { useStyles } from './VideoPage.styled';

const setPath = (location) => ({ id }) => {
  const route = location.pathname.includes('favorites') ? '/favorites/' : '/';
  return route + id;
};

function VideoPage() {
  const classes = useStyles();
  const { video, videos } = useVideo();
  const { isLoggedIn } = useAuth();
  const { favorites, isFavorite, addFavorite, removeFavorite } = useUserPreferences();

  const { location } = useHistory();
  const favoritesList = location.pathname.includes('favorites') ? favorites : videos;

  if (!video) {
    return <Redirect to="/" />;
  }
  const { id, title, description } = video;

  const AddVideo = () => {
    addFavorite(video);
  };

  const RemoveVideo = () => {
    removeFavorite(video);
  };

  return (
    <div className={classes.container}>
      <Box className={classes.videoContainer}>
        <Box className={classes.video}>
          <iframe
            width="100%"
            height="500px"
            title={title}
            src={`https://www.youtube.com/embed/${id}`}
          />
        </Box>
        <Box className={classes.details}>
          <Typography variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
          {isLoggedIn &&
            (isFavorite(video) ? (
              <Tooltip title="Remove from favorites">
                <IconButton onClick={RemoveVideo}>
                  <StarIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Add to favorites">
                <IconButton onClick={AddVideo}>
                  <StarBorderIcon />
                </IconButton>
              </Tooltip>
            ))}
        </Box>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </Box>
      <RelatedVideos videos={favoritesList} setPath={setPath(location)} />
    </div>
  );
}

export default VideoPage;
