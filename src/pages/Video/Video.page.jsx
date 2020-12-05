import React from 'react';
import { useParams } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import YouTubeVideoArticle from '../../components/YouTube/YouTubeVideoArticle.component';
import YouTubeRelatedList from '../../components/YouTube/YouTubeRelatedList.component';

export default function VideoPage() {
  const { id } = useParams();

  return (
    <section className="videopage">
      <Row className="mt-3">
        <Col>
          <article>
            <YouTubeVideoArticle id={id} />
          </article>
        </Col>
        <Col className="col-lg-3">
          <aside>
            <YouTubeRelatedList id={id} />
          </aside>
        </Col>
      </Row>
    </section>
  );
}
