import { useState, useEffect } from 'react';

const BASE_API_URL =
  'https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=10';

const { REACT_APP_API_KEY } = process.env;

function useRelatedVideo(baseVideoId) {
  const [searchRelatedItems, setSearchRelatedItems] = useState([]);
  const [isRequestSuccessful, setIsRequestSuccessful] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  console.log(baseVideoId);
  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(
          `${BASE_API_URL}&key=${REACT_APP_API_KEY}&q=${baseVideoId}`
        );
        if (response.status !== 200) setIsRequestSuccessful(false);
        else {
          const data = await response.json();
          console.log(data);
          setSearchRelatedItems(data.items);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchVideos();
  }, [baseVideoId]);
  return { searchRelatedItems, isRequestSuccessful, isLoading };
}

export { useRelatedVideo };
