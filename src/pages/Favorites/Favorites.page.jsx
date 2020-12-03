import React from 'react';

import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useYouTubeDataAPI from '../../utils/hooks/useYouTubeDataAPI';
import YouTubeVideoCard from '../../components/YouTube/YouTubeVideoCard.component';
import OnError from '../../components/Feedback/OnError.component';
import OnLoading from '../../components/Feedback/OnLoading.component';

const ITEMS_PER_LINE = 5;

export default function FavoritesPage() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const { videos, isLoaded, error } = useYouTubeDataAPI('videos', 'list', {
    id: favorites.toString(),
  });

  function renderRow(index) {
    const videosRow = videos.slice(index, index + ITEMS_PER_LINE);

    if (index % ITEMS_PER_LINE !== 0) {
      return;
    }

    return (
      <Row key={index} className="mt-3">
        {(videosRow || []).map((video) => (
          <Col key={video.id}>
            <YouTubeVideoCard video={video} />
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <section className="favoritespage">
      {favorites.length === 0 && (
        <div className="mt-3">
          <Alert variant="info">No videos were added as favorites yet.</Alert>
        </div>
      )}

      {error && <OnError error={error} />}

      {!isLoaded && <OnLoading />}

      {(videos || []).map((video, index) => renderRow(index))}
    </section>
  );
}
