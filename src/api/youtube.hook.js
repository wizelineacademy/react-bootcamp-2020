import { useState, useEffect, useCallback, useContext } from 'react';
import youtube from './youtube.api';

import { VideoContext } from '../context/context';

const useVideoApi = (searchQuery) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state, setVideos } = useContext(VideoContext);

  const onTermSubmit = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await youtube.get('/search', {
        params: {
          q: searchQuery,
        },
      });
      setVideos(data.items);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [setVideos, searchQuery]);

  useEffect(() => {
    onTermSubmit();
  }, [onTermSubmit]);

  return [state, loading, error];
};

export default useVideoApi;
