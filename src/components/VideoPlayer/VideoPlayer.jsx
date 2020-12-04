/* eslint-disable */
import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { useAuth } from '../../providers/Auth/Auth.provider';
import VideosContext from '../../context/VideosContext';

import moment from 'moment';

const VideoPlayer = () => {
  const { authenticated } = useAuth();
  const { selectedVideo } = useContext(VideosContext);

  let id = selectedVideo.id.videoId;
  const videoSrc = `https://www.youtube.com/embed/${id}`;

  let favoritesList = JSON.parse(localStorage.getItem('favoritesList'));
  let favoritesId = JSON.parse(localStorage.getItem('favoritesId'));

  const [isFav, setIsFav] = useState(favoritesList[`${id}`]);

  useEffect(() => {
    setIsFav(favoritesId[`${id}`]);
  }, [selectedVideo]);

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
      delete favoritesId[`${id}`];
    } else {
      favoritesId[`${id}`] = true;
      favoritesList.push(selectedVideo);
    }
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
    localStorage.setItem('favoritesId', JSON.stringify(favoritesId));
    setIsFav(favoritesId[`${id}`]);
  };
  return (
    <Fragment>
      <iframe src={videoSrc} height="25%" width="100%" title="title" />
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <h1 style={{ fontSize: '20px' }}>{selectedVideo.snippet.title}</h1>
        <Button
          basic
          color="orange"
          onClick={
            authenticated
              ? handleSetFavorites
              : () => console.error('Must be Authenticated!')
          }
        >
          {isFav ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES'}
        </Button>
      </section>
      <span className="date">{moment(selectedVideo.snippet.publishTime).fromNow()}</span>
      <p>{selectedVideo.snippet.description}</p>
    </Fragment>
  );
};

export default VideoPlayer;
