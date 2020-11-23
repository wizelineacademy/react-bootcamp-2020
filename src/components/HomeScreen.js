import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { VideoThumbnail } from './VideoThumbnail';

export const HomeScreen = () => {
  const API_KEY = 'AIzaSyD1gLhLYnPMzo2z2KWvKPy1N-W6xnNqjEI';
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=wizeline&type=video`;

  const { data, loading } = useFetch(url);

  const { items } = !!data && data;
  console.log(items);
  let thumbnails = [];

  if (!loading) {
    thumbnails = items.map((item) => (
      <VideoThumbnail
        key={item.id.videoId}
        videoId={item.id.videoId}
        channelName={item.snippet.channelTitle}
        title={item.snippet.title}
        description={item.snippet.description}
        img={item.snippet.thumbnails.default.url}
      />
    ));
  }

  return (
    <div>
      Home Screen
      <hr />
      {loading ? <p>loading</p> : thumbnails}
    </div>
  );
};
