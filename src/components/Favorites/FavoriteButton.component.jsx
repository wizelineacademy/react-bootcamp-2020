import React, { useState } from 'react';

// @todo fix label not rerendering when parent component changes
export default function FavoriteButton(props) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const [isFavorite, setIsFavorite] = useState(favorites.includes(props.id));

  function handleClick() {
    if (isFavorite) {
      setIsFavorite(false);

      const index = favorites.indexOf(props.id);
      favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      setIsFavorite(true);

      favorites.push(props.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  return (
    <button type="button" onClick={handleClick}>
      {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    </button>
  );
}
