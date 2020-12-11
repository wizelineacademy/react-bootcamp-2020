/* eslint-disable */
import React, { useContext, useEffect } from 'react';
import IsFavButton from '../IsFavButton/IsFavButton';
import { VideoFrame, VideoHeader, H1, Typography } from './VideoPlayer.styles';
import VideosContext from '../../context/VideosContext';
import { storage } from '../../utils/storage';
import { FAVORITES_ID } from '../../utils/constants';

import moment from 'moment';

const VideoPlayer = () => {
  let favoritesId = storage.get(FAVORITES_ID);
  const { selectedVideo, id, setIsFav, isFav } = useContext(VideosContext);
  useEffect(() => {
    setIsFav(favoritesId[`${id}`]);
  }, [selectedVideo]);

  return (
    <>
      <VideoFrame src={`https://www.youtube.com/embed/${id}`} />
      <VideoHeader>
        <H1>{selectedVideo.snippet.title}</H1>
        <IsFavButton />
      </VideoHeader>
      <Typography>{moment(selectedVideo.snippet.publishTime).fromNow()}</Typography>
      <Typography>{selectedVideo.snippet.description}</Typography>
    </>
  );
};

export default VideoPlayer;
