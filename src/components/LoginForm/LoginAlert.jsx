import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import { useAuth } from '../../providers/Auth/Auth.provider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LoginAlert() {
  const classes = useStyles();
  const { error } = useAuth();

  return (
    <div className={classes.root}>
      <Alert severity="error">{error}</Alert>
    </div>
  );
}
