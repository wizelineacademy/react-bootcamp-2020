import React, { useEffect, useState } from 'react';

import { Alert, Button, Col, Row } from 'antd';
import { useParams } from 'react-router';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useSearch } from '../../providers/Search/Search.provider';
import { useFavorites } from '../../providers/Favorites/Favorites.provider';
import { getVideos, getVideo } from '../../utils/services/youtube';
import VideoRow from '../../components/VideoRow/VideoRow.component';
import './VideoDetail.css';

function VideoDetail() {
  const { searchTerm } = useSearch();
  const { addToFavorites, favorites } = useFavorites();
  const [dataVideo, setDataVideo] = useState({});
  const [loadingButton, setLoadingButton] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [videos, setVideos] = useState([]);
  const { videoId } = useParams();

  useEffect(() => {
    if (searchTerm) {
      getVideos(searchTerm).then((data) => {
        const finalData = data.items.filter((item) => {
          const { id } = item;
          return id.kind !== 'youtube#channel';
        });
        setVideos(finalData);
      });
    }
  }, [searchTerm]);

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
      setLoadingButton(false);
    }
  }, [favorites, dataVideo]);

  const add = (video) => {
    setLoadingButton(true);
    if (!favorites.some((item) => item.id === video.id)) {
      const newFavorites = [...favorites, video];
      addToFavorites(newFavorites);
    }
  };

  const remove = (video) => {
    const newFavorites = favorites.filter((item) => item.id !== video.id);
    addToFavorites(newFavorites);
  };

  return (
    <section className="full-width">
      <Row className="detail-container">
        <Col span={16}>
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
            <Col span={18}>
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
            <Col span={6} className="textRight">
              {isFavorite ? (
                <Button
                  type="dashed"
                  shape="round"
                  icon={<MinusCircleOutlined />}
                  size="large"
                  onClick={() =>
                    Object.keys(dataVideo).length > 0 ? remove(dataVideo) : null
                  }
                  loading={loadingButton}
                >
                  Remove to Favorites
                </Button>
              ) : (
                <Button
                  type="primary"
                  shape="round"
                  icon={<PlusCircleOutlined />}
                  size="large"
                  onClick={() =>
                    Object.keys(dataVideo).length > 0 ? add(dataVideo) : null
                  }
                  loading={loadingButton}
                >
                  Add to Favorites
                </Button>
              )}
            </Col>
          </Row>
        </Col>
        <Col span={8} className="px15">
          {videos.length > 1 ? (
            videos.map((item) => {
              const { snippet, id } = item;
              return <VideoRow data={snippet} id={id.videoId} key={id.videoId} />;
            })
          ) : (
            <Alert
              message="Warning"
              description="There are not related videos."
              type="warning"
              showIcon
              closable
            />
          )}
        </Col>
      </Row>
    </section>
  );
}

export default VideoDetail;
