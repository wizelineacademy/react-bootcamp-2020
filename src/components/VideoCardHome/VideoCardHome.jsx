import React, { useContext } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Card, Image, Typography, darkTheme, lightTheme } from './VideoCardHome.styles';

import VideosContext from '../../context/VideosContext';
import ThemeContext from '../../context/ThemeContext';

import moment from 'moment';

const VideoCardHome = ({ video }) => {
  const { onVideoSelect } = useContext(VideosContext);
  const { light } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <Link to={`/player/${video.id.videoId}`}>
        <Card onClick={() => onVideoSelect(video)}>
          <Image src={video.snippet.thumbnails.medium.url} />
          <Typography>{video.snippet.title}</Typography>
          <Typography>{moment(video.snippet.publishTime).fromNow()}</Typography>
          <Typography>{video.snippet.description}</Typography>
        </Card>
      </Link>
    </ThemeProvider>
  );
};

export default VideoCardHome;
