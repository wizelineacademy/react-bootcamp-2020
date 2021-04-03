import React, { useRef, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import youtube from '../../api/youtube.api';

import Header from '../../components/Header/index';
import ListVideoCard from '../../components/ListVideoCard/index';
import VideoDetail from '../../components/VideoDetail/index';

// import { useAuth } from '../../providers/Auth';

const items = require('../../utils/mocks/youtube-videos-mock.json');

function HomePage() {
  // const history = useHistory();
  const sectionRef = useRef(null);
  /*
  const { logout } = useAuth();
  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }
  */
  const [videos, setVideos] = useState({
    elements: items.items,
    searchField: 'Wizeline',
    selectedVideo: null,
  });

  const onTermSubmit = async (term) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos({
      elements: data.items,
    });
  };

  const onSelectedVideo = (video) => {
    setVideos({
      ...videos,
      selectedVideo: video,
    });
  };

  return (
    <section ref={sectionRef}>
      <Header placeholder="Search..." mode="Dark mode" onTermSubmit={onTermSubmit} />
      {videos.selectedVideo ? (
        <section className="grid grid-cols-7">
          <VideoDetail video={videos.selectedVideo} />
          <ListVideoCard
            onSelectedVideo={onSelectedVideo}
            videos={videos.elements}
            relatedCard={videos.selectedVideo}
          />
        </section>
      ) : (
        <section>
          <ListVideoCard onSelectedVideo={onSelectedVideo} videos={videos.elements} />
        </section>
      )}
    </section>
  );
}

export default HomePage;
