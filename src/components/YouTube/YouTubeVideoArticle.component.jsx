import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useYouTubeDataAPI from '../../utils/hooks/useYouTubeDataAPI';
import FavoriteButton from '../Favorites/FavoriteButton.component';
import OnError from '../Feedback/OnError.component';
import OnLoading from '../Feedback/OnLoading.component';

export default function YouTubeVideoArticle(props) {
  const { videos, error } = useYouTubeDataAPI('videos', 'list', {
    id: props.id,
  });

  if (error) {
    return <OnError error={error} />;
  }

  if (videos === undefined || videos.length === 0) {
    return <OnLoading />;
  }

  return (
    <>
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
        <Col>
          <h2>{videos[0].snippet.title}</h2>
        </Col>
        <Col className="col-3">
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
