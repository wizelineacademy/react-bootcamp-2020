import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import styles from './Card.module.css';
import { storage } from '../../utils/storage';
import { isVideoFavorite } from '../../utils/functions';
import { CardWrapper, CardThumbnail, CardTextContainer, CardTitle, CardDescription, CardDate, CardFavoriteIcon } from './Card.template'

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
    <CardWrapper>
      <CardThumbnail onClick={goToVideo} src={video.thumbnail} alt={video.thumbnail} />
      <CardTextContainer>
        <CardTitle onClick={goToVideo}>
          {video.title}
        </CardTitle>
        <CardDescription>
          {video.description}
        </CardDescription>
        <CardDate>
          {video.publishedAt}
        </CardDate>
        <CardFavoriteIcon className={styles.card_favorite_icon}>
          {isVideoFavorite(video.id) ? (
            <AiIcons.AiFillHeart onClick={toggleFavorite} />
          ) : (
            <AiIcons.AiOutlineHeart onClick={toggleFavorite} />
          )}
        </CardFavoriteIcon>
        </CardTextContainer>
    </CardWrapper>
  );
}

export default Card;
