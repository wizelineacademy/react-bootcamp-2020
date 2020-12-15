import React, { useContext, useMemo } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { AuthContext } from '../../contexts/authContext/authContext';
import useStyles from './ViewLaterList.styles';

export default function ViewLaterList() {
  const classes = useStyles();
  const history = useHistory();
  const [, , , allValues] = useLocalStorage();
  const { authState } = useContext(AuthContext);
  const userId = authState.user && authState.user.id ? authState.user.id : null;
  const myVideos = useMemo(() => {
    const videos = [];
    Object.entries(allValues()).forEach((item) => {
      const content = JSON.parse(item[1]);
      const videoId =
        (content.id && content.id.videoId) ||
        (content.id && content.id.channelId) ||
        null;
      const key = `${userId}-lookLater-${videoId}`;
      if (item[0].includes(key)) videos.push(content);
    });
    return videos;
  }, [allValues, userId]);
  return (
    <Grid container>
      <Grid xs={3} className={classes.leftGrid}>
        <Box>
          {myVideos.length > 0 && (
            <img
              src={myVideos[0].snippet.thumbnails.medium.url}
              alt={myVideos[0].snippet.title}
              className={classes.leftImg}
            />
          )}
          <Typography className={classes.header} variant="h2">
            Watch Later
          </Typography>
        </Box>
      </Grid>
      <Grid xs={9}>
        <List className={classes.root}>
          {myVideos.map((v) => {
            console.log(v);
            if (!v.snippet) return null;
            const {
              snippet: { title, channelTitle, thumbnails },
              id,
            } = v;
            const videoId = id.videoId || id.channelId;
            return (
              <ListItem button onClick={() => history.push(`/video/${videoId}`)}>
                <ListItemAvatar>
                  <img
                    className={classes.imgThumb}
                    src={thumbnails.high.url}
                    alt={title}
                  />
                </ListItemAvatar>
                <ListItemText primary={title} secondary={channelTitle} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}
