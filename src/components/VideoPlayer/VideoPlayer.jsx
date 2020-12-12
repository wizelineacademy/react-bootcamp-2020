/* eslint-disable */
import React, { useContext, useEffect } from 'react';
import { useAuth } from '../../providers/Auth/Auth.provider';
import IsFavButton from '../IsFavButton/IsFavButton';
import { VideoFrame, VideoHeader, H1, Typography } from './VideoPlayer.styles';
import VideosContext from '../../context/VideosContext';
import { storage } from '../../utils/storage';
import { FAVORITES_ID } from '../../utils/constants';

import moment from 'moment';

const VideoPlayer = () => {
  let favoritesId = storage.get(FAVORITES_ID);
  const { authenticated } = useAuth();
  const { selectedVideo, id, setIsFav } = useContext(VideosContext);
  useEffect(() => {
    setIsFav(favoritesId[`${id}`]);
  }, [selectedVideo]);

  return (
    <>
      <VideoFrame src={`https://www.youtube.com/embed/${id}`} />
      <VideoHeader>
        <H1>{selectedVideo.snippet.title}</H1>
        {authenticated && <IsFavButton />}
      </VideoHeader>
      <Typography>{moment(selectedVideo.snippet.publishTime).fromNow()}</Typography>
      <Typography>{selectedVideo.snippet.description}</Typography>
    </>
  );
};

export default VideoPlayer;
