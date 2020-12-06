import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import GlobalContext from '../../state/GlobalContext';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton.component';

function ViewFavoritesPage() {
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

  const favoritesList = favorites;
  let otherVideos = [];

  if (favoritesList.length > 1) {
    otherVideos = favoritesList
      .filter((item) => {
        return item.videoId !== id;
      })
      .slice(0, 9);
  }

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
              <Row className="other-videos" key={videoItem.videoId}>
                <Col sm={4}>
                  <div
                    role="button"
                    tabIndex="0"
                    aria-hidden="true"
                    onClick={() =>
                      handleOther(
                        videoItem.videoId,
                        videoItem.description,
                        videoItem.imageUrl,
                        videoItem.title,
                        videoItem.channelTitle
                      )
                    }
                  >
                    <Link to={`/favorites/${videoItem.videoId}`}>
                      <img
                        src={videoItem.imageUrl}
                        alt={videoItem.title}
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
                        videoItem.videoId,
                        videoItem.description,
                        videoItem.imageUrl,
                        videoItem.title,
                        videoItem.channelTitle
                      )
                    }
                  >
                    <Link to={`/favorites/${videoItem.videoId}`}>
                      <span className="other-videos__title">{videoItem.title}</span>
                    </Link>
                  </div>
                  <span className="other-videos__chann-title">
                    {videoItem.channelTitle}
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

export default ViewFavoritesPage;
