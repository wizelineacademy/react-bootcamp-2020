import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './VideoRow.css';

function VideoRow({ data, id }) {
  const renderHTML = (rawHTML) =>
    React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <Link to={`/video/${id}`}>
      <Row gutter={[0, 16]}>
        <Col span={9}>
          <img
            src={data.thumbnails.medium.url}
            alt={data.title}
            className="img-video-row"
          />
        </Col>
        <Col span={15} className="title-row">
          {renderHTML(data.title)}
        </Col>
      </Row>
    </Link>
  );
}

export default VideoRow;
