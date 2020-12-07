/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import styles from './Card.module.css';
import { storage } from '../../utils/storage';
import { isVideoFavorite } from '../../utils/functions';

function Card({ video }) {
  const [, setAsFavorite] = useState(false);

  const history = useHistory();

  const goToVideo = () => {
    history.push(`/player/${video.id}`);
  };

  const toggleFavorite = () => {
    setAsFavorite((prev) => {
      if (!prev) {
        storage.addFavorite(video.id);
      } else {
        storage.removeFavorite(video.id);
      }
      return !prev;
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_image_container}>
        <div className={styles.card_thumbnail}>
          <img onClick={goToVideo} src={video.thumbnail} alt={video.thumbnail} />
        </div>
      </div>
      <div className={styles.card_text_container}>
        <h2 onClick={goToVideo} className={styles.card_title}>
          {video.title}
        </h2>
        <p className={styles.card_description}>{video.description}</p>
        <p className={styles.card_date}>{video.publishedAt}</p>
        <div className={styles.card_favorite_icon}>
          {isVideoFavorite(video.id) ? (
            <AiIcons.AiFillHeart onClick={toggleFavorite} />
          ) : (
            <AiIcons.AiOutlineHeart onClick={toggleFavorite} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
