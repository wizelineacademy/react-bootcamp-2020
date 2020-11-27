/* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import VideoItem from '../../components/VideoItem/VideoItem';

import VideosContext from '../../context/VideosContext';
import './VideoPlayer.styles.css';

const VideoPlayer = () => {
  const { videos, selectedVideo, onVideoSelect } = useContext(VideosContext);
  let id = selectedVideo.id.videoId;
  const videoSrc = `https://www.youtube.com/embed/${id}`;

  let favoritesList = JSON.parse(localStorage.getItem('favoritesList'));
  let favoritesId = JSON.parse(localStorage.getItem('favoritesId'));

  const handleSetFavorites = () => {
    function getIdx(match) {
      for (let i = 0; i < favoritesList.length; i++) {
        if (favoritesList[i].id.videoId === match) {
          return i;
        }
      }
    }

    if (favoritesId[`${id}`]) {
      const i = getIdx(id);
      const newList = [...favoritesList.slice(0, i), ...favoritesList.slice(i + 1)];
      favoritesList = newList;
      favoritesId[`${id}`] = false;
    } else {
      favoritesId[`${id}`] = true;
      favoritesList.push(selectedVideo);
    }
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
    localStorage.setItem('favoritesId', JSON.stringify(favoritesId));
  };
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
            <Button basic color="orange" onClick={handleSetFavorites}>
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
