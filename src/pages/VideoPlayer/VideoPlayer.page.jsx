import React, { useState, useEffect } from 'react';
import * as AiIcons from 'react-icons/ai';
import {
  PlayerPage,
  PlayerContainer,
  PlayerFrame,
  PlayerTextContainer,
  VideoTitle,
  VideoDescription,
  VideoDate,
  VideoFavoriteIcon,
  RelatedVideos,
} from './VideoPlayer.template';
import { findOne, getRelated } from '../../utils/api';
import RelatedVideo from '../../components/RelatedVideo';
import { isVideoFavorite } from '../../utils/functions';
import { storage } from '../../utils/storage';

const VideoPlayer = ({ match }) => {
  const { id } = match.params;

  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [, setAsFavorite] = useState(false);

  const toggleFavorite = () => {
    setAsFavorite((prev) => {
      if (!prev) {
        storage.addFavorite(id);
      } else {
        storage.removeFavorite(id);
      }
      return !prev;
    });
  };

  const findOneData = async () => {
    const response = await findOne(id);
    setVideo(response);
  };

  const getRelatedVideosData = async () => {
    const relatedVideosData = await getRelated(id);
    setRelatedVideos(relatedVideosData);
  };

  useEffect(() => {
    findOneData();
    getRelatedVideosData();
  }, []);

  useEffect(() => {
    findOneData();
    getRelatedVideosData();
  }, [id]);

  return (
    <>
      <PlayerPage>
        {video ? (
          <>
            <PlayerContainer>
              <PlayerFrame
                src={video.src}
                title={id}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <PlayerTextContainer>
                <VideoTitle>{video.title}</VideoTitle>
                <VideoDescription>{video.description}</VideoDescription>
                <VideoDate>{video.publishedAt}</VideoDate>
                <VideoFavoriteIcon>
                  {isVideoFavorite(id) ? (
                    <AiIcons.AiFillHeart onClick={toggleFavorite} />
                  ) : (
                    <AiIcons.AiOutlineHeart onClick={toggleFavorite} />
                  )}
                </VideoFavoriteIcon>
              </PlayerTextContainer>
            </PlayerContainer>
            <RelatedVideos>
              <ul>
                {relatedVideos.map((rVideo) => {
                  return <RelatedVideo video={rVideo} key={rVideo.id} />;
                })}
              </ul>
            </RelatedVideos>
          </>
        ) : null}
      </PlayerPage>
    </>
  );
};

export default VideoPlayer;
