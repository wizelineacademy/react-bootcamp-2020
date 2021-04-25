import { useState, useEffect, useCallback } from 'react';
import youtube from '../api/youtube.api';

import { useVideosContext } from '../context/context';

const useVideoApi = (searchQuery) => {
  // const cache = useRef({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state, setVideos } = useVideosContext();

  const onTermSubmit = useCallback(async () => {
    setLoading(true);
    const videosCache = JSON.parse(localStorage.getItem('videosCache'));
    if (videosCache[searchQuery]) {
      // console.log('simulation cache', searchQuery);
      setVideos(JSON.parse(localStorage.getItem('videosCache'))[searchQuery]);
    } else {
      // console.log('no te tengo en el cache solo debo entrar una vez');
      try {
        const { data } = await youtube.get('/search', {
          params: {
            q: searchQuery,
          },
        });
        videosCache[searchQuery] = data.items;
        localStorage.setItem('videosCache', JSON.stringify(videosCache));
        // cache.current[searchQuery] = data.items;
        setVideos(data.items);
      } catch (err) {
        setError(err);
      }
    }
    setLoading(false);
  }, [setVideos, searchQuery]);

  useEffect(() => {
    onTermSubmit();
  }, [onTermSubmit]);

  return [state, loading, error];
};

export default useVideoApi;
