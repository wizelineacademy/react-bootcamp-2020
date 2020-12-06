import React, { useContext } from 'react';
import demoData from '../../utils/response.json';
import YoutubeListItem from './YoutubeListItem';
import GlobalContext from '../../state/GlobalContext';

const YoutubeList = () => {
  const { searchInput } = useContext(GlobalContext);
  const params = {
    part: 'snippet',
    q: searchInput,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    maxResults: 33,
    type: 'video',
    videoSyndicated: 'true',
  };
  let uri;

  if (searchInput) {
    uri = `https://youtube.googleapis.com/youtube/v3/search?part=${params.part}&key=${params.key}&maxResults=${params.maxResults}&type=${params.type}&videoSyndicated=${params.videoSyndicated}&q=${params.q}`;
  } else {
    uri = '';
  }

  const ytData = demoData.items;

  return (
    <>
      {ytData.map((data) => (
        <YoutubeListItem
          key={data.id.videoId}
          title={data.snippet.title}
          description={data.snippet.description}
          imageUrl={data.snippet.thumbnails.medium.url}
          titleChannel={data.snippet.titleChannel}
          videoId={data.id.videoId}
        />
      ))}
    </>
  );
};

export default YoutubeList;
