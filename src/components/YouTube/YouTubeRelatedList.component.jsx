import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useYouTubeDataAPI from '../../utils/hooks/useYouTubeDataAPI';
import YouTubeVideoCard from './YouTubeVideoCard.component';
import OnError from '../Feedback/OnError.component';
import OnLoading from '../Feedback/OnLoading.component';

export default function YouTubeRelatedList(props) {
  const { videos, isLoaded, error } = useYouTubeDataAPI('search', 'list', {
    relatedToVideoId: props.id,
  });

  return (
    <>
      {error && <OnError error={error} />}

      {!isLoaded && <OnLoading />}

      {(videos || []).map((video) => (
        <Row key={video.id.videoId}>
          <Col className="mb-3">
            <YouTubeVideoCard
              video={video}
              elements={['img', 'title']}
              layout="horizontal"
            />
          </Col>
        </Row>
      ))}
    </>
  );
}
