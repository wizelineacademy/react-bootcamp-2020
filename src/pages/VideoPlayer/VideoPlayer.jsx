/* eslint-disable */
import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import VideoItem from '../../components/VideoItem/VideoItem';

import './VideoPlayer.styles.css';

const VideoPlayer = ({ videos, selectedVideo, onVideoSelect }) => {
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <Grid columns={2} padded>
      <Grid.Row>
        <Grid.Column width={11} className="vp__container">
          <iframe src={videoSrc} height="25%" width="100%" title="title" />
          <section
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <h1 style={{ fontSize: '20px' }}>{selectedVideo.snippet.title}</h1>
            <Button basic color="orange">
              ADD TO FAVORITES
            </Button>
          </section>
          <p>{selectedVideo.snippet.description}</p>
        </Grid.Column>
        <Grid.Column width={5} className="vl__container">
          {videos.map((video, id) => (
            <VideoItem onVideoSelect={onVideoSelect} video={video} key={id} />
          ))}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default VideoPlayer;
