import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useYouTubeDataAPI from '../../utils/hooks/useYouTubeDataAPI';
import FavoriteButton from '../Favorites/FavoriteButton.component';
import OnError from '../Feedback/OnError.component';
import OnLoading from '../Feedback/OnLoading.component';

export default function YouTubeVideoArticle(props) {
  const { videos, isLoaded, error } = useYouTubeDataAPI('videos', 'list', {
    id: props.id,
  });

  // @todo better check
  if (!videos[0]) {
    return <div>No video</div>;
  }

  return (
    <>
      {error && <OnError error={error} />}

      {!isLoaded && <OnLoading />}

      <Row>
        <Col>
          {/* eslint-disable-next-line react/no-danger */}
          <div
            className="embed-responsive embed-responsive-16by9"
            dangerouslySetInnerHTML={{ __html: videos[0].player.embedHtml }}
          />
        </Col>
      </Row>

      <Row className="justify-content-between mt-3">
        <Col className="col-3">
          <h2>{videos[0].snippet.title}</h2>
        </Col>
        <Col>
          <div className="float-right">
            <FavoriteButton id={props.id} />
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>{videos[0].snippet.description}</p>
        </Col>
      </Row>
    </>
  );
}
