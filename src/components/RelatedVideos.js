import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
import { useFetch } from '../hooks/useFetch';
import { GlobalContext } from '../context/GlobalContext';
import { VideoRelatedThumbnail } from './VideoRelatedThumbnail';

// import { items } from '../hooks/wizelineVideos.json';

import '../styles/relatedVideos.css';

export const RelatedVideos = () => {
  const { video, theme } = useContext(GlobalContext);
  const { isDark } = theme;
  const themeMode = isDark ? 'dark_mode' : 'ligth_mode';
  // console.log(video.query);

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_ENV_API_KEY}&q=${video.query}&type=video&maxResults=12`;

  const { data, loading } = useFetch(url);

  const { items } = !!data && data;
  // const loading = false;

  let thumbnails = [];

  if (!loading) {
    thumbnails = items.map((item) => (
      <VideoRelatedThumbnail
        key={item.id.videoId}
        videoId={item.id.videoId}
        channelName={item.snippet.channelTitle}
        title={item.snippet.title}
        description={item.snippet.description}
        img={item.snippet.thumbnails.medium.url}
      />
    ));
  }

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <div className={`video_related ${themeMode}`}>{thumbnails}</div>
      )}
    </div>
  );
};
