import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import React, { useContext, useState } from 'react';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import { AuthContext } from '../../contexts/authContext/authContext';
import useStyles from './VideoImage.styles';

const VideoImage = (props) => {
  const { readLaterText, addedLaterText, video, showButtons, className, ...rest } = props;
  const { authState } = useContext(AuthContext);
  const userId = authState.user && authState.user.id ? authState.user.id : null;
  const storageKey = `${userId}-lookLater-${video.id.videoId}`;
  const [, setSelectedVideo, getValue] = useLocalStorage(storageKey, false);
  const isSelected = getValue();
  const classes = useStyles({ ...props, isSelected });
  const [visibleButtons, setVisibleButtons] = useState(false);
  const hideShowButtons = (state) => {
    if (showButtons === undefined) return setVisibleButtons(state);
    return null;
  };
  return (
    <div
      {...rest}
      className={`${classes.root} ${className}`}
      onMouseEnter={() => hideShowButtons(true)}
      onMouseLeave={() => hideShowButtons(false)}
    >
      {((showButtons === undefined && visibleButtons && userId) ||
        (showButtons && userId)) && (
        <Button
          onClick={(e) => {
            e.preventDefault();
            setSelectedVideo(!isSelected ? video : false);
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
