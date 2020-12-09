import React, { useEffect, useState } from 'react';

import { Col, Row, Spin } from 'antd';
import { useParams } from 'react-router';
import { useSearch } from '../../providers/Search/Search.provider';
import { useFavorites } from '../../providers/Favorites/Favorites.provider';
import { getVideo } from '../../utils/services/youtube';
import { useAuth } from '../../providers/Auth';
import VideoRow from '../../components/VideoRow/VideoRow.component';
import useFetchVideos from '../../utils/hooks/useFetchVideos';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton.component';
import './VideoDetail.css';

function VideoDetail() {
  const { searchTerm } = useSearch();
  const { videos } = useFetchVideos(searchTerm);
  const { addToFavorites, favorites } = useFavorites();
  const { authenticated } = useAuth();
  const [dataVideo, setDataVideo] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  const { videoId } = useParams();

  useEffect(() => {
    if (videoId) {
      getVideo(videoId).then((data) => {
        if (data.items.length > 0) {
          setDataVideo(data.items[0]);
        }
      });
    }
  }, [videoId]);

  useEffect(() => {
    if (favorites) {
      if (favorites.some((item) => item.id === dataVideo.id)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [favorites, dataVideo]);

  const add = (video) => {
    if (!favorites.some((item) => item.id === video.id)) {
      const newFavorites = [...favorites, video];
      addToFavorites(newFavorites);
    }
  };

  const remove = (video) => {
    const newFavorites = favorites.filter((item) => item.id !== video.id);
    addToFavorites(newFavorites);
  };

  const handleClick = () => {
    if (isFavorite) {
      return remove(dataVideo);
    }
    return add(dataVideo);
  };

  return (
    <section className="full-width">
      <Row className="detail-container">
        <Col xs={24} sm={24} md={16} lg={16} xl={16} className="px15">
          <Row gutter={[0, 24]}>
            <Col span={24}>
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
          </Row>
          <Row gutter={[0, 24]}>
            <Col
              xs={12}
              sm={12}
              md={18}
              lg={18}
              xl={18}
              className="description-container"
            >
              {Object.keys(dataVideo).length > 0 ? (
                <>
                  <h2>{dataVideo.snippet.title}</h2>
                  <p>{dataVideo.snippet.description}</p>
                </>
              ) : (
                <>
                  <h2>Title placeholder</h2>
                  <p>Description placeholder</p>
                </>
              )}
            </Col>
            {authenticated ? (
              <Col xs={12} sm={12} md={6} lg={6} xl={6} className="textRight">
                <FavoriteButton isFavorite={isFavorite} handleClick={handleClick} />
              </Col>
            ) : null}
          </Row>
        </Col>
        <Col sm={8} md={8} lg={8} xl={8} xs={24} className="px15">
          {videos.length > 1 ? (
            videos.map((item) => {
              const { snippet, id } = item;
              return <VideoRow data={snippet} id={id.videoId} key={id.videoId} />;
            })
          ) : (
            <div className="textCenter py20">
              <Spin size="large" />
            </div>
          )}
        </Col>
      </Row>
    </section>
  );
}

export default VideoDetail;
