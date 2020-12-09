import React from 'react';
import classes from './Card.module.scss';

const Card = (props) => {
  const { thumbnail, title, description, clicked, isHome } = props;

  let { card, card__thumbnail, card__title, card__description } = classes;

  if (!isHome) {
    card = classes['card-mini'];
    card__thumbnail = classes['card-mini__thumbnail'];
    card__title = classes['card-mini__title'];
  }

  return (
    <div className={card} onClick={clicked}>
      <div
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
        className={card__thumbnail}
      ></div>
      <div className={card__title}>
        <h2>{title}</h2>
      </div>
      {isHome ? (
        <div className={card__description}>
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
