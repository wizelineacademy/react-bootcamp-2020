import { useState, useEffect, useRef } from 'react';

const useFetch = (url) => {
  const cache = useRef({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      try {
        setLoading(true);
        if (cache.current[url]) {
          const responseData = cache.current[url];
          setData(responseData);
          setLoading(false);
        } else {
          const response = await fetch(url);
          const responseData = await response.json();
          cache.current[url] = responseData;
          setData(responseData);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { loading, data };
};

export default useFetch;
