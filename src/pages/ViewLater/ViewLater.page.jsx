import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import ViewLaterList from '../../components/ViewLaterList/ViewLaterList.component';

export const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.youtubePrimary,
    },
    maxWidthXl: {
      maxWidth: 'calc(100% - 240px)',
      marginRight: 0,
    },
  };
});

function ViewLaterPage() {
  const classes = useStyles();
  return (
    <Container
      classes={{ root: classes.root, maxWidthXl: classes.maxWidthXl }}
      maxWidth="xl"
    >
      <ViewLaterList />
    </Container>
  );
}

export default ViewLaterPage;
