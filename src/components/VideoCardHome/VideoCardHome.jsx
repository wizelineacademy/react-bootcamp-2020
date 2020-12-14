import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, Image, Typography, H1 } from './VideoCardHome.styles';

import VideosContext from '../../context/VideosContext';

const VideoCardHome = ({ video }) => {
  const { onVideoSelect } = useContext(VideosContext);

  return (
    <Link to={`/player/${video.id.videoId}`}>
      <Card onClick={() => onVideoSelect(video)}>
        <Image src={video.snippet.thumbnails.medium.url} />
        <H1>{video.snippet.title}</H1>
        <Typography>{moment(video.snippet.publishTime).fromNow()}</Typography>
        <Typography>{video.snippet.description}</Typography>
      </Card>
    </Link>
  );
};

export default VideoCardHome;
