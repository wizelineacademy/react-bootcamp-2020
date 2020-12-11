/* eslint-disable */
import React, { useContext } from 'react';
import VideosContext from '../../context/VideosContext';
import VideoCardList from '../VideoICardList/VideoCardList';
import { VideoListContainer } from './VideoList.styles';

const VideoList = () => {
  const { videos, onVideoSelect } = useContext(VideosContext);
  return (
    <VideoListContainer>
      {videos.map((video, id) => (
        <VideoCardList onVideoSelect={onVideoSelect} video={video} key={id} />
      ))}
    </VideoListContainer>
  );
};

export default VideoList;
