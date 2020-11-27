import React, { useState, useEffect } from 'react';
import { triggerSearch } from '../../utils/services/youtube';
import VideoCard from '../../components/VideoCard/VideoCard.component';
import { useSearch } from '../../providers/Search/Search.provider';
import './Home.styles.css';

function HomePage() {
  const { searchTerm } = useSearch();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      triggerSearch(searchTerm).then((data) => {
        const finalData = data.items.filter((item) => {
          const { id } = item;
          return id.kind !== 'youtube#channel';
        });
        setVideos(finalData);
      });
    }
  }, [searchTerm]);

  return (
    <section className="homepage full-width">
      <h1>Challenge</h1>
      <div className="grid-layout">
        {videos.map((item) => {
          const { snippet, id } = item;
          return <VideoCard data={snippet} id={id.videoId} key={id.videoId} />;
        })}
      </div>
    </section>
  );
}

export default HomePage;
