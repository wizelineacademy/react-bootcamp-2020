import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function YouTubeVideoCard(props) {
  const id = props.video.id.videoId ?? props.video.id;

  if (props.layout === 'vertical') {
    return (
      <Card>
        {/* @todo fix encoded HTML entities that Link create */}
        {props.elements.includes('img') && (
          <Link to={`/video/${id}`}>
            <Card.Img
              src={props.video.snippet.thumbnails.high.url}
              alt={props.video.snippet.title}
              variant="top"
            />
          </Link>
        )}
        <Card.Body>
          {props.elements.includes('title') && (
            <Card.Title>{props.video.snippet.title}</Card.Title>
          )}
          {props.elements.includes('text') && (
            <Card.Text className="font-weight-light small">
              {props.video.snippet.description}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Row className="no-gutters">
        <Col>
          {props.elements.includes('img') && (
            <Link to={`/video/${id}`}>
              <Card.Img
                src={props.video.snippet.thumbnails.high.url}
                alt={props.video.snippet.title}
              />
            </Link>
          )}
        </Col>
        <Col>
          <Card.Body>
            {props.elements.includes('title') && (
              <Card.Title className="font-weight-light small">
                {props.video.snippet.title}
              </Card.Title>
            )}
            {props.elements.includes('text') && (
              <Card.Text className="font-weight-light small">
                {props.video.snippet.description}
              </Card.Text>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

YouTubeVideoCard.defaultProps = {
  elements: ['img', 'text', 'title'],
  layout: 'vertical',
};
