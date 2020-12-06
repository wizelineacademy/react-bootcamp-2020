import React, { useContext, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
// import demoData from '../../utils/response.json';
import YoutubeListItem from '../../components/YoutubeList/YoutubeListItem';
import GlobalContext from '../../state/GlobalContext';

function HomePage() {
  const { query, responseList, setResponseList } = useContext(GlobalContext);
  const list = [];
  const params = {
    part: 'snippet',
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    maxResults: 35,
    type: 'video',
    videoSyndicated: 'true',
  };

  const url =
    query &&
    `https://youtube.googleapis.com/youtube/v3/search?part=${params.part}&key=${params.key}&maxResults=${params.maxResults}&type=${params.type}&videoSyndicated=${params.videoSyndicated}&q=${query}`;

  const { loading, data } = useFetch(url);

  useEffect(() => {
    setResponseList(data.items);
  });

  if (responseList === undefined) {
    list.push(<h1 key="welcome">Welcome Stranger!</h1>);
  }
  if (responseList) {
    responseList.forEach((element) => {
      list.push(
        <YoutubeListItem
          key={element.id.videoId}
          title={element.snippet.title}
          description={element.snippet.description}
          imageUrl={element.snippet.thumbnails.medium.url}
          videoId={element.id.videoId}
        />
      );
    });
  }

  return (
    <div>
      {loading ? (
        <div className="loadingio-spinner-spin-u1zq1d0hnx">
          <div className="ldio-zsz4poalow">
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
          </div>
        </div>
      ) : (
        list
      )}
    </div>
  );
}

export default HomePage;
