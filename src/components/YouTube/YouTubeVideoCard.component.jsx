import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ThemeContext } from '../../state/ThemeContext';
import { htmlEntities } from '../../utils/htmlEntities';

export default function YouTubeVideoCard(props) {
  const { theme } = useContext(ThemeContext);

  const id = props.video.id.videoId ?? props.video.id;
  const title = props.video.snippet.title.replace(
    /&#?\w+;/g,
    (match) => htmlEntities[match]
  );

  if (props.layout === 'vertical') {
    return (
      <Card className={`${theme} shadow-sm`} style={{ transition: '0.25s' }}>
        {props.elements.includes('img') && (
          <Link to={`/video/${id}`}>
            <Card.Img
              src={props.video.snippet.thumbnails.high.url}
              alt={title}
              variant="top"
            />
          </Link>
        )}
        <Card.Body>
          {props.elements.includes('title') && <Card.Title>{title}</Card.Title>}
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
    <Card className={`${theme} shadow-sm`} style={{ transition: '0.25s' }}>
      <Row className="no-gutters">
        <Col>
          {props.elements.includes('img') && (
            <Link to={`/video/${id}`}>
              <Card.Img src={props.video.snippet.thumbnails.high.url} alt={title} />
            </Link>
          )}
        </Col>
        <Col>
          <Card.Body>
            {props.elements.includes('title') && (
              <Card.Title className="font-weight-light small">{title}</Card.Title>
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
