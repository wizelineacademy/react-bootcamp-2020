/* eslint-disable */
import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { useAuth } from '../../providers/Auth/Auth.provider';
import VideosContext from '../../context/VideosContext';

import { FAVORITES_LIST, FAVORITES_ID } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { getIdx } from '../../utils/utils';

import moment from 'moment';
const VideoPlayer = () => {
  let favoritesList = storage.get(FAVORITES_LIST);
  let favoritesId = storage.get(FAVORITES_ID);
  const { authenticated } = useAuth();
  const { selectedVideo, id } = useContext(VideosContext);
  const [isFav, setIsFav] = useState(favoritesList[`${id}`]);

  useEffect(() => {
    setIsFav(favoritesId[`${id}`]);
  }, [selectedVideo]);

  const handleSetFavorites = () => {
    if (favoritesId[`${id}`]) {
      const i = getIdx(favoritesList, id);
      const newList = [...favoritesList.slice(0, i), ...favoritesList.slice(i + 1)];
      favoritesList = newList;
      delete favoritesId[`${id}`];
    } else {
      favoritesId[`${id}`] = true;
      favoritesList.push(selectedVideo);
    }
    storage.set(FAVORITES_LIST, favoritesList);
    storage.set(FAVORITES_ID, favoritesId);
    setIsFav(favoritesId[`${id}`]);
  };
  return (
    <Fragment>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        height="25%"
        width="100%"
        title="title"
      />
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
