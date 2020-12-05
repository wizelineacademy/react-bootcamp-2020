import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import AppBar from '../../components/AppBar';
import './NotFound.styles.css';

export default function NotFoundPage() {
  return (
    <>
      <AppBar />
      <Grid container className="content">
        <Grid item>
          <Typography variant="h1" component="h1">
            Woops! Nothing Found here.- XoX
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
