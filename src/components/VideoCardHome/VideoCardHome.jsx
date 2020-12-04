import React, { useContext } from 'react';
// import { Image } from 'semantic-ui-react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import moment from 'moment';

import VideosContext from '../../context/VideosContext';
import ThemeContext from '../../context/ThemeContext';

const VideoCardHome = ({ video }) => {
  const { onVideoSelect } = useContext(VideosContext);
  const { light } = useContext(ThemeContext);

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

  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <Card onClick={() => onVideoSelect(video)} centered fluid>
        <CardMedia
          image={video.snippet.thumbnails.medium.url}
          style={{ height: 0, paddingTop: '56.25%', color: 'pink' }}
        />

        <CardContent>
          <Typography variant="h6">{video.snippet.title}</Typography>

          <Typography>{moment(video.snippet.publishTime).fromNow()}</Typography>

          <Typography>{video.snippet.description}</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default VideoCardHome;
