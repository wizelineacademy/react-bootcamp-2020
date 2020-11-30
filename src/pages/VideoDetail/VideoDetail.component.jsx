import React from 'react';

import { Col, Row } from 'antd';
import { useParams } from 'react-router';

function VideoDetail() {
  const { videoId } = useParams();

  return (
    <section className="full-width">
      <Row>
        <Col span={16}>
          <iframe
            width="100%"
            height="500"
            allowFullScreen
            frameBorder="0"
            title="rick roll"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </Col>
        <Col span={8}>list</Col>
      </Row>
    </section>
  );
}

export default VideoDetail;
