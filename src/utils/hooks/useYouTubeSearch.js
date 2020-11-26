import { useState, useEffect, useMemo } from 'react';

function useYouTubeSearch(search) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);

  const API_KEY = 'AIzaSyAcgmsZB2M27kvgZju-qtHhKiziG5dzYf8'; // benoit.borrel@gmail.com
  // const API_KEY = 'AIzaSyBfCTxfs9EgNkuHKRjful5zvSVVNymV34g'; // benoit@borrel.com
  // const API_URL = 'https://youtube.googleapis.com/youtube/v3/search';
  const API_URL = 'https://www.googleapis.com/youtube/v3/search';

  function computeUrl(keywords) {
    const url = new URL(API_URL);
    const params = new URLSearchParams({
      key: API_KEY,
      maxResults: 5,
      part: 'snippet',
      q: keywords,
      type: 'video',
    });
    url.search = params.toString();

    return url.toString();
  }

  const memoizedUrl = useMemo(() => computeUrl(search), [search]);

  useEffect(() => {
    async function fetchYouTubeSearch() {
      try {
        setIsLoaded(true);
        const response = await fetch(memoizedUrl);
        const data = await response.json();
        setVideos(data.items);
      } catch (err) {
        setIsLoaded(true);
        setError(err);
      }
    }

    fetchYouTubeSearch();
  }, [memoizedUrl]);

  return { videos, isLoaded, error };
}

export default useYouTubeSearch;
