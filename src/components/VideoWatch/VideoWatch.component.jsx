import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  VideoWatch: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '51%',
  },
  Iframe: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
}));

function VideoWatch(props) {
  const classes = useStyles();

  return (
    <div className={classes.VideoWatch}>
      <iframe frameBorder="0" className={classes.Iframe} src={props.url} />
    </div>
  );
}

export default VideoWatch;
