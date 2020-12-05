import React from 'react';
import Grid from '@material-ui/core/Grid';

import Card from '../../components/Card/Card';
import { useStyles } from './HomePage.styled';
import './Home.styles.css';

function HomePage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <h1>Hello stranger</h1>
      </Grid>
      <Grid item xs={12}>
        <Card />
      </Grid>
    </Grid>
  );
}

export default HomePage;
