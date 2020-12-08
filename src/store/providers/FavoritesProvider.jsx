import React, { useReducer } from 'react';

import { FavoriteContext } from '../contexts/FavoriteContext';
import { favoriteReducer } from '../reducers/FavoriteReducer';

const FavoritesProvider = (props) => {
  const initialState = {
    favoriteVideos: [], // List of ids
    videos: [],
    // videos: [
    //   {
    //     id: 'id1',
    //     thumbnail:
    //       'https://images.unsplash.com/photo-1607161744726-e96856cfcf4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1790&q=80',
    //     title: 'Cool video',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quasi natus alias cumque facilis quae veniam ut molestias labore libero, accusantium ad, corporis sunt temporibus nostrum nemo quibusdam impedit tempore.',
    //   },
    //   {
    //     id: 'id2',
    //     thumbnail:
    //       'https://images.unsplash.com/photo-1605116188625-8522bf02d10f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    //     title: 'Cool video 2',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    //   },
    // ],
  };

  const videoContextReducer = useReducer(favoriteReducer, initialState);

  return (
    <FavoriteContext.Provider value={videoContextReducer}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoritesProvider;
