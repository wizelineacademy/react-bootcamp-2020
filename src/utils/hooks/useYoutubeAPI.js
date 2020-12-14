import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import VideoContext from '../../state/videoContext';
import { mockVideos } from '../../mockedData';

const API_URL = 'https://youtube.googleapis.com/youtube/v3/search?';

function UseYoutubeAPI(queryParam) {
  const { state, dispatch } = useContext(VideoContext);

  useEffect(() => {
    function start() {
      window.gapi.client
        .init({
          apiKey: process.env.REACT_APP_API_KEY,
        })
        .then(function () {
          return window.gapi.client.request({
            path: API_URL,
            params: { part: 'snippet', q: queryParam, maxResults: 20, type: 'video' },
          });
        })
        .then(
          function (response) {
            const items = response.result.items;
            dispatch({ type: 'SET_VIDEO_LIST', payload: items });
          },
          function (reason) {
            console.log('Error: ' + reason.result.error.message);
            dispatch({ type: 'SET_VIDEO_LIST', payload: mockVideos });
          }
        );
    }

    window.gapi.load('client', start);
  }, [queryParam]);

  return {};
}

export { UseYoutubeAPI };
