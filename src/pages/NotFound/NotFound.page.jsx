import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import AppBar from '../../components/AppBar';

export default function NotFoundPage() {
  return (
    <>
      <AppBar />
      <Grid container className="content">
        <Grid item xs={12} sm={8} md={10}>
          <Typography variant="h1" component="h2">
            Woops! Not Found
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
