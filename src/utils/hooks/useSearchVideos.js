import { useCallback, useState } from 'react';

import API from '../../API';

/* onst useApi = (endpoint, param) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  console.log(isLoading);

  useEffect(() => {
    async function fetchData() {
      let response = null;

      switch (endpoint) {
        case 'search':
          response = await API.searchVideos(param);
          break;
        case 'detail':
          response = await API.getVideoDetail(param);
          break;
        case 'related':
          response = await API.getRelatedVideos(param);
          break;
        default:
          break;
      }

      setData(response);
      setIsLoading(false);
    }
    fetchData();
  }, [endpoint, param]);

  console.log('DATA', data);

  return { isLoading, data };
}; */

const useSearchVideos = () => {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(false);

  const getVideos = useCallback((searchText) => {
    setLoading(true);

    API.searchVideos(searchText).then((videosList) => {
      setVideos(videosList);
      setLoading(false);
    });
  }, []);
  return [videos, getVideos, loading];
};

export default useSearchVideos;
