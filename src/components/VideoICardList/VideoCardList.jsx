/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

import { VideoItem, Image, Typography } from './VideoCardList.styles';

const VideoCardList = ({ video, onVideoSelect }) => {
  const handleClick = () => {
    onVideoSelect(video);
  };

  return (
    <Link to={`/player/${video.id.videoId}`}>
      <VideoItem onClick={handleClick}>
        <Image src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
        <Typography>{video.snippet.title}</Typography>
      </VideoItem>
    </Link>
  );
};

export default VideoCardList;
