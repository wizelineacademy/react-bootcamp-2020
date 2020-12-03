import React from 'react';
import { Alert, Spin } from 'antd';
import VideoCard from '../../components/VideoCard/VideoCard.component';
import { useSearch } from '../../providers/Search/Search.provider';
import './Home.styles.css';
import useFetchVideos from '../../utils/hooks/useFetchVideos';

function HomePage() {
  const { searchTerm } = useSearch();
  const { isLoading, videos } = useFetchVideos(searchTerm);

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
