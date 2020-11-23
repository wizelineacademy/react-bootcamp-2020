import React from 'react';
import useFetch from '../../hooks/useFetch';

// const uri = 'https://pokeapi.co/api/v2/pokemon?limit=0';
const params = {
  part: 'snippet',
  q: 'basset',
  key: process.env.REACT_APP_YOUTUBE_API_KEY,
  maxResults: 100,
  type: 'video',
  videoSyndicated: 'true',
};
const uri = `https://youtube.googleapis.com/youtube/v3/search?part=${params.part}&key=${params.key}&maxResults=${params.maxResults}&type=${params.type}&videoSyndicated=${params.videoSyndicated}&q=${params.q}`;

const YoutubeList = () => {
  const { listyt, loading } = useFetch(uri);
  // console.log(listyt);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <p>pokelist</p>

      {listyt.map((poke) => {
        return <p>{poke.snippet.title}</p>;
      })}
    </>
  );
};

export default YoutubeList;
