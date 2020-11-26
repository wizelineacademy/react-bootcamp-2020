import { useState, useEffect, useMemo } from 'react';

function useYouTubeDataAPI(resource, method, parameters) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);

  // const API_KEY = 'AIzaSyAcgmsZB2M27kvgZju-qtHhKiziG5dzYf8'; // benoit.borrel@gmail.com
  const API_KEY = 'AIzaSyBfCTxfs9EgNkuHKRjful5zvSVVNymV34g'; // benoit@borrel.com
  const API_URL = 'https://www.googleapis.com/youtube/v3/';

  function getFetchUrl(aResource, aMethod, aParameters) {
    const url = new URL(API_URL + aResource);
    const urlSearchParams = new URLSearchParams({
      key: API_KEY,
      part: 'snippet',
      type: 'video',
    });

    const { ...params } = aParameters;

    switch (aResource) {
      case 'search':
        switch (aMethod) {
          case 'list':
            urlSearchParams.append('q', params.q);
            urlSearchParams.append('maxResults', 5);
            break;
          default: // do nothing
        }
        break;

      case 'videos':
        switch (aMethod) {
          case 'list':
            urlSearchParams.append('id', params.id);
            if (!urlSearchParams.get('part').includes('player')) {
              urlSearchParams.set('part', `${urlSearchParams.get('part')},player`);
            }
            // @todo style embedHtml with maxHeight + maxWidth
            break;
          default: // do nothing
        }
        break;
      default: // do nothing
    }

    url.search = urlSearchParams.toString();

    return url.toString();
  }

  const memoizedUrl = useMemo(() => getFetchUrl(resource, method, parameters), [
    resource,
    method,
    parameters,
  ]);

  useEffect(() => {
    async function fetchYouTubeAPI() {
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

    fetchYouTubeAPI();
  }, [memoizedUrl]);

  return { videos, isLoaded, error };
}

export default useYouTubeDataAPI;
