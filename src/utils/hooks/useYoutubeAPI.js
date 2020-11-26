import { useState, useEffect } from 'react';

const API_URL = 'http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=10';

function useYoutubeAPI() {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(API_URL);
        const fortuneCookies = await response.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    }

    fetchVideos();
  }, []);
  return { response, error };
}

export { useYoutubeAPI };
