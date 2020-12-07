import React, { useContext } from 'react';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoritesContext from '../../state/FavoritesContext';
import { useAuth } from '../../providers/Auth';

function VideoPlayer(props) {
  const { authenticated } = useAuth();
  const { state, dispatch } = useContext(FavoritesContext);
  console.log(state);

  const opts = {
    width: '100%',
  };

  const isInFavorite = (videoId) => {
    return state.favorites.filter((item) => item.id.videoId === videoId).length > 0;
  };

  const handleAdd = () => {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: props.video,
    });
  };

  // const handleRemove = () => {
  //   dispatch({
  //     type: 'REMOVE_FAVORITE',
  //     payload: props.video,
  //   });
  // };

  return (
    <div>
      <YouTube videoId={props.video.id.videoId} opts={opts} />
      {!isInFavorite(props.video.id.videoId) && authenticated && (
        <Button variant="outlined" color="primary" onClick={handleAdd}>
          Add to favorites
        </Button>
      )}
      {/* {isInFavorite(props.video.id.videoId) && (
        <Button variant="outlined" color="secondary" onClick={handleRemove}>
          Remove from favorites
        </Button>
      )} */}
      <Typography variant="h5">{props.video.snippet.title}</Typography>
      <Typography>{props.video.snippet.description}</Typography>
    </div>
  );
}

export default VideoPlayer;
