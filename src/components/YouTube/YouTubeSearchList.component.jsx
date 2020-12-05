import React, { useContext } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchContext from '../../state/SearchContext';
import useYouTubeDataAPI from '../../utils/hooks/useYouTubeDataAPI';
import YouTubeVideoCard from './YouTubeVideoCard.component';
import OnError from '../Feedback/OnError.component';
import OnLoading from '../Feedback/OnLoading.component';

const ITEMS_PER_LINE = 5;

export default function YouTubeSearchList() {
  const { searchTerm } = useContext(SearchContext);
  const { videos, isLoaded, error } = useYouTubeDataAPI('search', 'list', {
    q: searchTerm,
  });

  function renderRow(index) {
    const videosRow = videos.slice(index, index + ITEMS_PER_LINE);

    if (index % ITEMS_PER_LINE !== 0) {
      return;
    }

    return (
      <Row key={index} className="mt-3">
        {(videosRow || []).map((video) => (
          <Col key={video.id.videoId}>
            <YouTubeVideoCard video={video} />
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <>
      {error && <OnError error={error} />}

      {!isLoaded && <OnLoading />}

      {(videos || []).map((video, index) => renderRow(index))}
    </>
  );
}
