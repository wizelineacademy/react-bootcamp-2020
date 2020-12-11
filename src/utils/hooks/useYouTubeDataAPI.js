import { useState, useEffect, useMemo } from 'react';

const API_URL = 'https://www.googleapis.com/youtube/v3/';
const API_PARAM_PART = 'snippet';
const API_PARAM_TYPE = 'video';
const API_PARAM_MAX_RESULTS = 15;

export default function useYouTubeDataAPI(resource, method, parameters) {
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);

  function getFetchUrl(aResource, aMethod, aParameters) {
    const url = new URL(API_URL + aResource);
    const urlSearchParams = new URLSearchParams({
      key: process.env.REACT_APP_YOUTUBE_DATA_API_KEY,
      part: API_PARAM_PART,
      type: API_PARAM_TYPE,
    });

    const { ...params } = aParameters;

    switch (aResource) {
      case 'search':
        switch (aMethod) {
          case 'list':
            // by keyword
            if (params.q) {
              urlSearchParams.append('q', params.q);
            }
            // by related videos
            else if (params.relatedToVideoId) {
              urlSearchParams.append('relatedToVideoId', params.relatedToVideoId);
            }
            urlSearchParams.append('maxResults', API_PARAM_MAX_RESULTS);
            break;
          default: // do nothing
        }
        break;

      case 'videos':
        switch (aMethod) {
          case 'list':
            // by video ID
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
        const response = await fetch(memoizedUrl);
        if (response.status !== 200) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (err) {
        setError(err);
      }
    }

    fetchYouTubeAPI();
  }, [memoizedUrl]);

  return { videos, error };
}
