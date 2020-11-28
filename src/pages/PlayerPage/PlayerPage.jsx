/* eslint-disable */
import React from 'react';
import { Grid } from 'semantic-ui-react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoList from '../../components/VideoList/VideoList';

const PlayerPage = () => {
  return (
    <Grid padded>
      <Grid.Row columns={2}>
        <Grid.Column width={11}>
          <VideoPlayer />
        </Grid.Column>
        <Grid.Column width={5}>
          <VideoList />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default PlayerPage;
