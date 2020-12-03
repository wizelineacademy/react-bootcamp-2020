import React from 'react';
import { useState, useEffect } from 'react';

const API_URL =
  'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyB-e-DiiSf7jlGCcmMPCzSRkDkKt0yP8Z4&part=snippet&q=blackpink&maxResults=20';

function useYoutubeAPI() {
  const [videoItems, setVideoItems] = useState(null);

  useEffect(() => {
    function start() {
      window.gapi.client
        .init({
          apiKey: process.env.REACT_APP_API_KEY,
          // clientId and scope are optional if auth is not required.
          // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
          // 'scope': 'profile',
        })
        .then(function () {
          // 3. Initialize and make the API request.
          return window.gapi.client.request({
            path: API_URL,
          });
        })
        .then(
          function (response) {
            console.log(response.result);
            setVideoItems(response.result.items);
          },
          function (reason) {
            console.log('Error: ' + reason.result.error.message);
          }
        );
    }

    window.gapi.load('client', start);
  }, []);

  return { videoItems };
}

export { useYoutubeAPI };
