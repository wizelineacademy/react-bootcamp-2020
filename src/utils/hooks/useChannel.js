import { useState, useEffect } from 'react';

const BASE_API_URL = 'https://www.googleapis.com/youtube/v3/channels?part=snippet';

const { REACT_APP_API_KEY } = process.env;

function useChannel(channelId) {
  const [channelInfo, setChannelInfo] = useState({});
  const [isChannelRequestSuccessful, setIsChannelRequestSuccessful] = useState(true);
  const [isChannelLoading, setChannelIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await fetch(
          `${BASE_API_URL}&key=${REACT_APP_API_KEY}&id=${channelId}`
        );
        if (response.status !== 200) setIsChannelRequestSuccessful(false);
        else {
          const data = await response.json();
          setChannelInfo(data.items[0]);
        }
        setChannelIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchVideo();
  }, [channelId]);
  return { channelInfo, isChannelRequestSuccessful, isChannelLoading };
}

export { useChannel };
