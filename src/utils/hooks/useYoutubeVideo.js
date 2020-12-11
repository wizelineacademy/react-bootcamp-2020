import { useState, useEffect } from 'react';

const BASE_API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet';

const { REACT_APP_API_KEY } = process.env;

function useYoutubeVideo(videoId) {
  const [videoSelected, setVideoSelected] = useState({});
  const [isVideoRequestSuccessful, setIsVideoRequestSuccessful] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await fetch(
          `${BASE_API_URL}&key=${REACT_APP_API_KEY}&id=${videoId}`
        );
        if (response.status !== 200) setIsVideoRequestSuccessful(false);
        else {
          const data = await response.json();
          setVideoSelected(data.items[0]);
        }
        setIsVideoLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    if (videoId !== undefined) fetchVideo();
  }, [videoId]);
  return { videoSelected, isVideoRequestSuccessful, isVideoLoading };
}

export { useYoutubeVideo };
