import { useState, useEffect, useRef, useCallback } from 'react';
import youtube from './youtube.api';

import { useVideosContext } from '../context/context';

const useVideoApi = (searchQuery) => {
  const cache = useRef({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state, setVideos } = useVideosContext();

  const onTermSubmit = useCallback(async () => {
    setLoading(true);
    if (cache.current[searchQuery]) {
      setVideos(cache.current[searchQuery]);
    } else {
      try {
        const { data } = await youtube.get('/search', {
          params: {
            q: searchQuery,
          },
        });
        cache.current[searchQuery] = data.items;
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
