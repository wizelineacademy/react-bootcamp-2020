import React, { useContext } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Card, Image, Typography } from './VideoCardHome.styles';

import moment from 'moment';

import VideosContext from '../../context/VideosContext';
import ThemeContext from '../../context/ThemeContext';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },

  transitions: {
    duration: {
      standard: 500,
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
});

const lightTheme = createMuiTheme({
  transitions: {
    duration: {
      standard: 500,
    },
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
});

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
