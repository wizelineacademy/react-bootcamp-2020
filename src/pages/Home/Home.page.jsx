import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Videos from '../../components/Videos';

const useStyles = makeStyles((theme) => {
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

function HomePage() {
  const classes = useStyles();
  return (
    <Container
      classes={{ root: classes.root, maxWidthXl: classes.maxWidthXl }}
      maxWidth="xl"
    >
      <Videos />
    </Container>
  );
}

export default HomePage;
