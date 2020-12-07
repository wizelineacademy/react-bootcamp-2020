import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import React from 'react';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

const useVideoImageStyle = makeStyles((theme) => ({
  root: (props) => ({
    height: `${props.height}px`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  }),
  button: (props) => {
    const { isSelected } = props;
    const textColor = isSelected ? { color: '#2893E9' } : { color: 'white' };
    return {
      ...textColor,
      position: 'absolute',
      top: theme.spacing(1) / 2,
      right: theme.spacing(1) / 2,
      backgroundColor: 'black',
      minWidth: 'auto',
      borderRadius: 0,
      '&:hover': {
        backgroundColor: 'black',
      },
      '&:hover span[data-testid=buttonText]': {
        maxHeight: 20,
        width: 'auto',
        marginRight: 4,
      },
    };
  },
  icon: {
    // marginLeft: theme.spacing(1),
  },
  text: {
    display: 'inline-block',
    width: 0,
    overflow: 'hidden',
    maxHeight: 0,
    transition: 'max-width 0.5s, width  0.5s, max-height 0.5s',
  },
}));

const VideoImage = (props) => {
  const userId = 'SDFEWRTW234234';
  const { readLaterText, addedLaterText, videoId, showButtons, ...rest } = props;
  const storageKey = `${userId}-lookLater-${videoId}`;
  const [isSelected, setSelectedVideo] = useLocalStorage(storageKey, false);
  const classes = useVideoImageStyle({ ...props, isSelected });
  return (
    <div {...rest} className={classes.root}>
      {showButtons && (
        <Button
          onClick={(e) => {
            e.preventDefault();
            setSelectedVideo(!isSelected);
          }}
          variant="contained"
          size="small"
          color="primary"
          className={classes.button}
        >
          <span data-testid="buttonText" className={classes.text}>
            {isSelected ? addedLaterText : readLaterText}{' '}
          </span>
          {isSelected && <CheckIcon fontSize="small" className={classes.icon} />}
          {!isSelected && <WatchLaterIcon fontSize="small" className={classes.icon} />}
        </Button>
      )}
    </div>
  );
};

export default VideoImage;
