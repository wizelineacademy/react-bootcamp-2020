import { useState, useEffect } from 'react';

const BASE_API_URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video';

const { REACT_APP_API_KEY } = process.env;

function useYoutubeSearch(query) {
  const [searchListItems, setSearchListItems] = useState([]);
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(
          `${BASE_API_URL}&key=${REACT_APP_API_KEY}&q=${query}`
        );
        if (response.status !== 200) setIsRequestSuccessful(false);
        else {
          const data = await response.json();
          setSearchListItems(data.items);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (query !== undefined) fetchVideos();
  }, [query]);
  return { searchListItems, isRequestSuccessful };
}

export { useYoutubeSearch };
