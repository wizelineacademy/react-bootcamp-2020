import { useState, useEffect } from 'react';
import { getVideos } from '../services/youtube';

const useFetchVideos = (searchTerm) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      getVideos(searchTerm).then((data) => {
        const finalData = data.items.filter((item) => {
          const { id } = item;
          return id.kind !== 'youtube#channel';
        });
        setIsLoading(false);
        setVideos(finalData);
      });
    }
  }, [searchTerm]);

  return {
    isLoading,
    videos,
  };
};

export default useFetchVideos;
