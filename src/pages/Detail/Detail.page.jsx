import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import GlobalContext from '../../state/GlobalContext';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton.component';

function DetailPage() {
  const { id } = useParams();
  const {
    responseList,
    activeVideo,
    setActiveVideo,
    favorites,
    setFavorites,
  } = useContext(GlobalContext);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')));
  }, [setFavorites]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  });

  function handleOther(videoId, description, imageUrl, title, channelTitle) {
    setActiveVideo({
      videoId,
      description,
      imageUrl,
      title,
      channelTitle,
    });
  }

  const otherVideos = responseList
    .filter((item) => {
      return item.id.videoId !== id;
    })
    .slice(0, 9);

  return (
    <div>
      <Row>
        <Col sm={2} />
        <Col sm={8}>
          <div className="video-container">
            <iframe
              id="ytplayer"
              type="text/html"
              title="title"
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Col>
        <Col sm={2} />
      </Row>
      <Row>
        <Col sm={7} className="text-left ">
          <div className="info-detail-col">
            <Row>
              <Col sm={10}>
                <h2>{activeVideo.title}</h2>
              </Col>
              <Col sm={2}>
                <FavoriteButton />
              </Col>
            </Row>
            <h6>{activeVideo.channelTitle}</h6>
            <hr />
            <p>{activeVideo.description}</p>
          </div>
        </Col>
        <Col sm={5}>
          {otherVideos.map((videoItem) => {
            return (
              <Row className="other-videos" key={videoItem.id.videoId}>
                <Col sm={4}>
                  <div
                    role="button"
                    tabIndex="0"
                    aria-hidden="true"
                    onClick={() =>
                      handleOther(
                        videoItem.id.videoId,
                        videoItem.snippet.description,
                        videoItem.snippet.thumbnails.medium.url,
                        videoItem.snippet.title,
                        videoItem.snippet.channelTitle
                      )
                    }
                  >
                    <Link to={`/video/${videoItem.id.videoId}`}>
                      <img
                        src={videoItem.snippet.thumbnails.medium.url}
                        alt={videoItem.snippet.title}
                        className="other-videos__thumb"
                      />
                    </Link>
                  </div>
                </Col>
                <Col sm={8} className="text-left">
                  <div
                    role="button"
                    tabIndex="0"
                    aria-hidden="true"
                    onClick={() =>
                      handleOther(
                        videoItem.id.videoId,
                        videoItem.snippet.description,
                        videoItem.snippet.thumbnails.medium.url,
                        videoItem.snippet.title,
                        videoItem.snippet.channelTitle
                      )
                    }
                  >
                    <Link to={`/video/${videoItem.id.videoId}`}>
                      <span className="other-videos__title">
                        {videoItem.snippet.title}
                      </span>
                    </Link>
                  </div>
                  <span className="other-videos__chann-title">
                    {videoItem.snippet.channelTitle}
                  </span>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default DetailPage;
