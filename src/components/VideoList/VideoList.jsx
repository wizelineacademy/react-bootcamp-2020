/* eslint-disable */
import React, { useContext } from 'react';
import VideosContext from '../../context/VideosContext';
import VideoCardList from '../VideoICardList/VideoCardList';

import './VideoList.styles.css';

const VideoList = () => {
  const { videos, onVideoSelect } = useContext(VideosContext);
  return (
    <div className="videoList__container">
      {videos.map((video, id) => (
        <VideoCardList onVideoSelect={onVideoSelect} video={video} key={id} />
      ))}
    </div>
  );
};

export default VideoList;
