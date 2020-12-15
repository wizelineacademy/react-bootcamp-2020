import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Login from '../../Forms/Login';
import { ResourceContext } from '../../../contexts/resourceContext/Resource';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    minHeight: 64,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs(props) {
  const { open, setOpen, title } = props;
  const { resourceState } = useContext(ResourceContext);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle data-testid="loginDialogTitle" onClose={handleClose}>
          {title}
        </DialogTitle>
        {resourceState.resources.login === 'loading' && (
          <LinearProgress data-testid="loginDialogLoading" color="secondary" />
        )}
        <DialogContent data-testid="loginDialogContent" dividers>
          <Login handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
