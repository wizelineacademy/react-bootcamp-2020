import { useEffect, useState } from 'react';
import youtubeApi from '../api/youtube.api';

function useVideo(id) {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    async function getVideo() {
      const { data } = await youtubeApi.getVideosById([id]);
      setVideo(data.items[0]);
    }
    getVideo();
  }, [id]);
  return [video];
}

export { useVideo };
