import { useState, useEffect } from 'react';

const useFetch = (uri) => {
  const [listyt, setListYT] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(uri);
        const data = await response.json();
        console.log('data from useFetch.js');
        console.log(data);

        setListYT(data.items);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [uri]);

  return { listyt, loading };
};

export default useFetch;

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=basset&t
