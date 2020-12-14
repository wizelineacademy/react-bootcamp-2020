import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MainPane from '../../components/MainPane';
import { VideoPlayerContainer } from './VideoPlayer.page.styled';
import VideoContext from '../../state/videoContext';
import VideoDetails from '../../components/VideoDetails';
import { useAuth } from '../../providers/Auth';
import Button from 'react-bootstrap/Button';

function VideoPlayer() {
  const { id } = useParams();
  const { state, dispatch } = useContext(VideoContext);
  const { currentVideo } = state;
  const { favoriteVideos } = state;
  const favorites = favoriteVideos
    ? favoriteVideos
    : JSON.parse(localStorage.getItem('favorites'));
  const video = currentVideo
    ? currentVideo
    : JSON.parse(localStorage.getItem('videos'))[id];

  const { authenticated } = useAuth();

  const handleAddFav = (video) => () => {
    dispatch({ type: 'ADD_FAVORITE', payload: video });
  };

  const handleRemoveFav = (video) => () => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: video });
  };

  function isVideoOnFavorites(video) {
    if (
      favorites &&
      favorites.some((favorite) => favorite.id.videoId === video.id.videoId)
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <MainPane>
      <VideoPlayerContainer>
        <VideoDetails videoCurr={video} />
      </VideoPlayerContainer>
      {authenticated && !isVideoOnFavorites(video) ? (
        <Button onClick={handleAddFav(video)} variant="outline-primary">
          Add to favorites
        </Button>
      ) : null}
      {authenticated && isVideoOnFavorites(video) ? (
        <Button onClick={handleRemoveFav(video)} variant="outline-primary">
          Remove from favorites
        </Button>
      ) : null}
    </MainPane>
  );
}

export default VideoPlayer;
