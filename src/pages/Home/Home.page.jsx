import React, { useState, useEffect } from 'react';
import { Alert, Spin } from 'antd';
import { getVideos } from '../../utils/services/youtube';
import VideoCard from '../../components/VideoCard/VideoCard.component';
import { useSearch } from '../../providers/Search/Search.provider';
import './Home.styles.css';

function HomePage() {
  const { searchTerm } = useSearch();
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      getVideos(searchTerm).then((data) => {
        const finalData = data.items.filter((item) => {
          const { id } = item;
          return id.kind !== 'youtube#channel';
        });
        setIsLoading(false);
        setVideos(finalData);
      });
    }
  }, [searchTerm]);

  return (
    <section className="homepage full-width">
      <h1>Challenge</h1>

      {isLoading ? (
        <div className=" textCenter no-results-container">
          <Spin size="large" />
        </div>
      ) : (
          <>
          {videos.length > 0
            ? ( <div className="grid-layout">
                {
                  videos.map((item) => {
                    const { snippet, id } = item;
                    return <VideoCard data={snippet} id={id.videoId} key={id.videoId}/>;
                  })
                }
              </div>)
            : (
              <div className="no-results-container">
                <Alert
                  message="Warning"
                  description="There are not videos for this term."
                  type="warning"
                  showIcon
                  closable
                />
              </div>
          )}
        </>
      )}
    </section>
  );
}

export default HomePage;
