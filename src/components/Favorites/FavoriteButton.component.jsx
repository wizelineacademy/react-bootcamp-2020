import React, { useState } from 'react';

export default function FavoriteButton(props) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [isFavorite, setIsFavorite] = useState(favorites.includes(props.id));
  const label = isFavorite ? 'Remove from favorites' : 'Add to favorites';

  function handleClick() {
    if (isFavorite) {
      setIsFavorite(false);
      const index = favorites.indexOf(props.id);
      favorites = favorites.splice(index, index);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      setIsFavorite(true);
      favorites.push(props.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  return <input type="button" value={label} onClick={handleClick} />;
}
