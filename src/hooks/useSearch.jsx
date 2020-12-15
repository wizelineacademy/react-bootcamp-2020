import { useEffect, useState } from 'react';
import { youtubeApi, youtubeApiQuotaExceeded } from '../services/YouTubeService';

const useSearch = (searchTerm) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    const fetchData = async () => {
      try {
        // const response = await youtubeApi.get('/search', {
        //   params: {
        //     q: searchTerm,
        //   },
        // });

        // TODO: Using when quota exceeded
        const response = await youtubeApiQuotaExceeded(searchTerm);

        const {
          data: { items },
        } = response;

        const videos = items.map((item) => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
            isFav: false,
          };
        });

        setVideos(videos);
      } catch (e) {
        if (e.isAxiosError) {
          setError(e.response.data.error.message);
        } else {
          setError('Unknown error');
        }
        console.log('useSearch', e);
      }
    };

    fetchData();
  }, [searchTerm]);

  return { videos, error };
};

export default useSearch;
